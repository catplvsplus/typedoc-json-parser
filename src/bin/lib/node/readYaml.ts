import { parse } from 'yaml';
import type { PathLike } from 'node:fs';
import { readFile } from 'node:fs/promises';

/**
 * Parsed a YAML file into an `Object` of type `T`
 * @param pathLike The {@link PathLike} to read with {@link readFile}
 */
export async function readYaml<T>(pathLike: PathLike): Promise<T> {
  return parse(await readFile(pathLike, { encoding: 'utf-8' })) as unknown as T;
}
