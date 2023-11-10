import { json } from "@remix-run/node";
import { destroyUserSession } from "~/data/auth.server";

/**
 * @param {import("@remix-run/node").ActionFunctionArgs}
 */
export async function action({ request }) {
  if (request.method !== "POST") {
    throw json({ message: "invalid request" }, { status: 400 });
  }

  return await destroyUserSession(request);
}
