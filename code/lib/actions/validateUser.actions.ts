"use server";

import { useRouter } from "next/navigation";
import User from "../db/models/user.model";
import { connectToDb } from "../db/mongoose";
import bcrypt from "bcrypt";

interface validateUserParams {
  email: string;
  password: string;
}

export async function validateUser({
  email,
  password,
}: validateUserParams): Promise<boolean> {
  connectToDb();

  try {
    const user = await User.findOne({ email: email });

    if (!user) throw Error("Invalid credentials");
    const result = await bcrypt.compare(password, user.password);

    if (!result) throw Error("Invalid credentials");

    return result;
  } catch (error: any) {
    throw new Error(`Failed to validate user: ${error.message}`);
  }

  return false;
}
