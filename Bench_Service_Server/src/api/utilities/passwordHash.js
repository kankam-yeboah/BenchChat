import bcrypt from "bcryptjs";

export const passwordHash = async (password) => {
  const saltRounds = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export const compareHash = async (password, hashedpassword) => {
  const report = await bcrypt.compare(password, hashedpassword);
  return report;
};
