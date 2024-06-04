import path from 'path';

export const defaultFolder = (pathName: string): string => {
  const pathArray = pathName.split('/');
  const fileName = pathArray[pathArray.length - 1];

  return path.join(__dirname, '..', '..', '..', 'static', 'uploads', fileName);
};
