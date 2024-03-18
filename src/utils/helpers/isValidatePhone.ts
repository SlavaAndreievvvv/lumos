export const isValidatePhone = (phoneNumber: string) => {
  const phonePattern = /^(\+?3?8?0)(\d{9})$/;
  return phonePattern.test(phoneNumber);
};
