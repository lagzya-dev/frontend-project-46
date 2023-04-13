import { extname } from 'node:path';
import fs from 'fs';
import path from 'path';

export function readFile(filepatch) {
  return fs.readFileSync(filepatch);
}
export const getPath = (way) => (way.includes('__fixtures__') ? path.resolve(process.cwd(), way) : path.resolve(process.cwd(), `__fixtures__/${way}`));
export const getFormat = (filepath) => extname(filepath).substring(1);
