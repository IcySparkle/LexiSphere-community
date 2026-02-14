/**
 * Validation Helper Unit Tests
 *
 * Verifies parser and link-check helper behavior used by repository validation
 * tooling.
 */

import { describe, expect, it } from 'vitest';
import {
  extractMarkdownLinks,
  findInsecureHttpLinks,
  findMissingRequiredIds,
  findMissingTopLevelKeys,
  isSecureHttpUrl,
  listRequiredFieldIds,
  listTemplateFields,
  parseYamlDocument,
  validateContactLinkUrls,
} from '../scripts/repoValidation';

describe('repoValidation helpers', () => {
  it('parses yaml into an object and safely handles invalid input', () => {
    const parsed = parseYamlDocument('name: Bug Report\nlabels: ["bug"]');
    expect(parsed.name).toBe('Bug Report');
    expect(parseYamlDocument('')).toEqual({});
    expect(parseYamlDocument('- one\n- two')).toEqual({});
  });

  it('extracts template fields and required ids', () => {
    const doc = {
      body: [
        { type: 'markdown', attributes: { value: 'intro' } },
        { type: 'input', id: 'browser', validations: { required: true } },
        { type: 'textarea', id: 'context', validations: { required: false } },
        { type: 'textarea', id: 'description', validations: { required: true } },
      ],
    };

    expect(listTemplateFields(doc)).toEqual([
      { id: 'browser', type: 'input', required: true },
      { id: 'context', type: 'textarea', required: false },
      { id: 'description', type: 'textarea', required: true },
    ]);
    expect(listTemplateFields({ body: 'not-array' })).toEqual([]);
    expect(listRequiredFieldIds(doc)).toEqual(['browser', 'description']);
  });

  it('finds missing top-level keys and required field ids', () => {
    const doc = {
      name: 'Feature Request',
      description: 'Suggest a feature',
      body: [{ type: 'textarea', id: 'problem', validations: { required: true } }],
    };

    expect(findMissingTopLevelKeys(doc, ['name', 'description', 'title', 'body'])).toEqual([
      'title',
    ]);
    expect(findMissingTopLevelKeys(null, ['name', 'description'])).toEqual([
      'name',
      'description',
    ]);
    expect(findMissingRequiredIds(doc, ['problem', 'solution'])).toEqual(['solution']);
  });

  it('validates contact links and secure urls', () => {
    const doc = {
      contact_links: [
        { name: 'Discussion', url: 'https://github.com/IcySparkle/LexiSphere-community/discussions' },
        { name: 'Docs', url: 'http://example.com/docs' },
        { name: 'Broken', url: 'not-a-url' },
      ],
    };

    expect(validateContactLinkUrls(doc)).toEqual(['Docs', 'Broken']);
    expect(validateContactLinkUrls({})).toEqual(['contact_links']);
    expect(isSecureHttpUrl('https://lexisphere.dev')).toBe(true);
    expect(isSecureHttpUrl('http://lexisphere.dev')).toBe(false);
    expect(isSecureHttpUrl('/relative/path')).toBe(false);
  });

  it('extracts markdown links and flags insecure http links', () => {
    const markdown =
      '[Secure](https://lexisphere.dev) [Insecure](http://example.com) [Relative](/docs)';
    expect(extractMarkdownLinks(markdown)).toEqual([
      'https://lexisphere.dev',
      'http://example.com',
      '/docs',
    ]);
    expect(findInsecureHttpLinks(markdown)).toEqual(['http://example.com']);
  });
});

