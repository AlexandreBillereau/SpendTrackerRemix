import { prisma } from "./database.server";
import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import * as dotenv from "dotenv";

dotenv.config();
const SESSION_SECRET = process.env.SESSION_SECRET;
const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days :D
    httpOnly: true,
  },
});

/**
 * @param {string} userId
 * @param {string} redirectPath
 */
async function createUserSession(userId, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

/**
 * @param {Request} request
 */
export async function getUserFromSession(request) {
  const session = sessionStorage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId) {
    return null;
  }

  return userId;
}

/**
 * @param {{email: String, password: String}}
 */
export async function signup({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error("A user with the provided email adress exists");
    error.status = 422;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email: email, password: passwordHash },
  });
  return createUserSession(user.id, "/expenses");
}

/**
 * @param {{email: String, password: String}}
 */
export async function login({ email, password }) {
  /** @type {import("@prisma/client").User} */
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (!existingUser) {
    const error = new Error(
      "Could not log you in, please check the provided credentials"
    );
    error.status = 401;
    throw error;
  }

  const passwordCorrect = await bcrypt.compare(password, existingUser.password);

  if (!passwordCorrect) {
    const error = new Error(
      "Could not log you in, please check the provided credentials"
    );
    error.status = 401;
    throw error;
  }

  return createUserSession(existingUser.id, "/expenses");
}
