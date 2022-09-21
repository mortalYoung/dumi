import { lodash, logger, winPath } from 'umi/plugin-utils';

/**
 * get route path from file-system path
 */
export function getRoutePathFromFsPath(fsPath: string) {
  return lodash.kebabCase(winPath(fsPath).replace(/((\/|^)index)?\.\w+$/g, ''));
}

/**
 * get range lines of markdown file
 */
export const getFileRangeLines = (content: string, range: string) => {
  const [, start, end] = range?.match(/^L(\d+)(?:-L(\d+))?$/) || [];

  if (start) {
    const lineStart = parseInt(start, 10) - 1;
    const lineEnd = end ? parseInt(end, 10) : lineStart + 1;

    return content
      .split(/\r\n|\n/g)
      .slice(lineStart, lineEnd)
      .join('\n');
  }

  return content;
};

/**
 * get file content by regular expression
 * @param content   source file content
 * @param regexp    regular expression string
 * @param filePath  source file path
 */
export const getFileContentByRegExp = (
  content: string,
  regexp: string,
  filePath: string,
) => {
  try {
    // eslint-disable-next-line no-eval
    return content.match(eval(regexp))![0];
  } catch (err) {
    logger.error(`Extract markdown content failed, use the full content.
RegExp: ${regexp}
File: ${filePath}
Error: ${err}`);
    return content;
  }
};
