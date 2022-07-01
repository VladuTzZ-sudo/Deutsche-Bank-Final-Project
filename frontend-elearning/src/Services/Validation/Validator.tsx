const filesTypeValidator = (file: File, acceptedTypes: string[]): boolean => {
  const fileSplitted = file.name.split(".");
  const extension = fileSplitted[fileSplitted.length - 1];
  if (acceptedTypes.includes(extension)) {
    return true;
  }

  return false;
};

export default filesTypeValidator;
