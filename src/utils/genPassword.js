export const RandomPassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let pass = "";
  for (var index = 0, n = charset.length; index < length; index++)
    pass += charset.charAt(Math.floor(Math.random() * n));

  return pass;
};
