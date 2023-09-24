"use server";

import User from "../db/models/user.model";
import { connectToDb } from "../db/mongoose";
import bcrypt from "bcrypt";

interface createUserParams {
  name: string;
  email: string;
  password: string;
}

export async function createUser({ name, email, password }: createUserParams) {
  connectToDb();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}
