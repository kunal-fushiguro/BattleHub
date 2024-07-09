import bcrypt from "bcryptjs";

export async function HashingPassword(password) {
  return await bcrypt.hash(password, 10);
}

export async function ComparePassword(password, hashedPass) {
  return await bcrypt.compare(password, hashedPass);
}
