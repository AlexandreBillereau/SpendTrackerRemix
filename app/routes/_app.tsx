import type { LinksFunction } from "@remix-run/node";
import expensesStyle from "~/styles/expenses.css";
import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyle },
];

export default function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader></ExpensesHeader>
      <Outlet></Outlet>
    </>
  );
}
