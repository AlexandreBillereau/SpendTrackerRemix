import { redirect } from "@remix-run/node";
import expensesStyle from "~/styles/expenses.css";
import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import { getUserFromSession } from "~/data/auth.server";

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
  const login = await getUserFromSession(request);
  if (login === null) {
    console.log(login);
    throw redirect("/auth?mode=login");
  }

  return null;
}
