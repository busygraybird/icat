export const getMinBirthdate = (age: number) => {
  const today = new Date();

  return new Date(
    today.getFullYear() - age - 1,
    today.getMonth(),
    today.getDate(),
  );
};
export const getMaxBirthdate = (age: number) => {
  const today = new Date();

  return new Date(today.getFullYear() - age, today.getMonth(), today.getDate());
};
