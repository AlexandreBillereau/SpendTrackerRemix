import { redirect } from "@remix-run/node";
import expensesStyle from "~/styles/expenses.css";
import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import { getUserFromSession, requireUserSession } from "~/data/auth.server";

export const links = () => [{ rel: "stylesheet", href: expensesStyle }];

export default function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader></ExpensesHeader>
      <Outlet></Outlet>
    </>
  );
}

/**
 * @param {import("@remix-run/node").LoaderFunctionArgs}
 */
export async function loader({ request }) {
  await requireUserSession(request);

  return null;
}
