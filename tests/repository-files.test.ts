/**
 * Repository File Integration Tests
 *
 * Validates real community repo templates/docs against helper constraints for
 * required metadata and secure links.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  findInsecureHttpLinks,
  findMissingRequiredIds,
  findMissingTopLevelKeys,
  parseYamlDocument,
  validateContactLinkUrls,
} from '../scripts/repoValidation';

function readRepoFile(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), 'utf8');
}

describe('repository file validation', () => {
  it('validates bug report issue template fields', () => {
    const bugTemplate = parseYamlDocument(
      readRepoFile('.github/ISSUE_TEMPLATE/bug_report.yml'),
    );
    expect(
      findMissingTopLevelKeys(bugTemplate, ['name', 'description', 'title', 'labels', 'body']),
    ).toEqual([]);
    expect(
      findMissingRequiredIds(bugTemplate, [
        'version',
        'browser',
        'description',
        'reproduce',
      ]),
    ).toEqual([]);
  });

  it('validates feature request issue template fields', () => {
    const featureTemplate = parseYamlDocument(
      readRepoFile('.github/ISSUE_TEMPLATE/feature_request.yml'),
    );
    expect(
      findMissingTopLevelKeys(featureTemplate, [
        'name',
        'description',
        'title',
        'labels',
        'body',
      ]),
    ).toEqual([]);
    expect(findMissingRequiredIds(featureTemplate, ['problem', 'solution'])).toEqual([]);
  });

  it('validates issue template config links and markdown links', () => {
    const configTemplate = parseYamlDocument(
      readRepoFile('.github/ISSUE_TEMPLATE/config.yml'),
    );
    expect(validateContactLinkUrls(configTemplate)).toEqual([]);

    const readme = readRepoFile('README.md');
    const contributing = readRepoFile('CONTRIBUTING.md');
    expect(findInsecureHttpLinks(readme)).toEqual([]);
    expect(findInsecureHttpLinks(contributing)).toEqual([]);
  });
});

