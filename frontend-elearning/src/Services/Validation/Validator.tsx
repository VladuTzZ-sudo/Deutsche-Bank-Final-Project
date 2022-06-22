const filesTypeValidator = (file: File, acceptedTypes: string[]): boolean => {
  if (acceptedTypes.includes(file.type)) {
    return true;
  }

  return false;
};

export default filesTypeValidator;
