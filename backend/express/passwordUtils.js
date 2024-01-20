import bcrypt from "bcryptjs";

// Function to hash a plain password
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

// Function to compare a plain password with a hashed password
export async function comparePassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
}
