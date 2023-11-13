import { requireUserSession } from "~/data/auth.server";
import { getExpenses } from "~/data/expenses.server";

//triger with get request basisc usage.
/**
 * @param {import("@remix-run/node").LoaderFunctionArgs}
 */
export async function loader({ request }) {
  await requireUserSession(request);
  return getExpenses();
}
