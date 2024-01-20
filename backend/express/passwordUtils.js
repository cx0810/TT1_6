import bcrypt from "bcryptjs";

// Function to hash a plain password, but we not using ):
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

// Function to compare a plain password with a hashed password, or plain and plain in this case haha
export async function comparePassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
}
