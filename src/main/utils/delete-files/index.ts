import { defaultFolder } from '../default-folder';
import fs from 'fs';

export const deleteFiles = (files: string[]): void => {
  files.forEach((file) => {
    fs.unlinkSync(defaultFolder(file));
  });
};
