import { parse } from 'yaml';

type Dict = Record<string, unknown>;

export interface TemplateField {
  id: string;
  type: string;
  required: boolean;
}

function isRecord(value: unknown): value is Dict {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function readString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function parseYamlDocument(text: string): Dict {
  try {
    const parsed = parse(text);
    return isRecord(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function listTemplateFields(document: unknown): TemplateField[] {
  if (!isRecord(document)) {
    return [];
  }
  const body = document.body;
  if (!Array.isArray(body)) {
    return [];
  }

  const fields: TemplateField[] = [];
  for (const row of body) {
    if (!isRecord(row)) {
      continue;
    }
    const id = readString(row.id);
    if (!id) {
      continue;
    }

    const type = readString(row.type);
    const validations = isRecord(row.validations) ? row.validations : {};
    const required = validations.required === true;
    fields.push({ id, type, required });
  }

  return fields;
}

export function listRequiredFieldIds(document: unknown): string[] {
  return listTemplateFields(document)
    .filter((field) => field.required)
    .map((field) => field.id);
}

export function findMissingTopLevelKeys(
  document: unknown,
  requiredKeys: string[],
): string[] {
  if (!isRecord(document)) {
    return [...requiredKeys];
  }
  return requiredKeys.filter((key) => !(key in document));
}

export function findMissingRequiredIds(
  document: unknown,
  requiredIds: string[],
): string[] {
  const existing = new Set(listRequiredFieldIds(document));
  return requiredIds.filter((requiredId) => !existing.has(requiredId));
}

export function validateContactLinkUrls(document: unknown): string[] {
  if (!isRecord(document)) {
    return ['contact_links'];
  }
  const links = document.contact_links;
  if (!Array.isArray(links)) {
    return ['contact_links'];
  }

  const invalid: string[] = [];
  for (const entry of links) {
    if (!isRecord(entry)) {
      invalid.push('[invalid-entry]');
      continue;
    }
    const name = readString(entry.name) || '[unnamed]';
    const url = readString(entry.url);
    if (!isSecureHttpUrl(url)) {
      invalid.push(name);
    }
  }
  return invalid;
}

export function extractMarkdownLinks(markdown: string): string[] {
  const matches = markdown.match(/\[[^\]]+\]\(([^)]+)\)/g) ?? [];
  return matches
    .map((raw) => {
      const parsed = raw.match(/\[[^\]]+\]\(([^)]+)\)/);
      return parsed?.[1]?.trim() ?? '';
    })
    .filter(Boolean);
}

export function isSecureHttpUrl(rawUrl: string): boolean {
  try {
    const parsed = new URL(rawUrl);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function findInsecureHttpLinks(markdown: string): string[] {
  return extractMarkdownLinks(markdown).filter((url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:';
    } catch {
      return false;
    }
  });
}
