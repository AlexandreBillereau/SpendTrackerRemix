import type { LinksFunction } from "@remix-run/node";
import expensesStyle from "~/styles/expenses.css";

import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyle },
];

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "seconde expense",
    amount: 16.99,
    date: new Date().toISOString(),
  },
];

export default function Expenses() {
  return (
    <>
      <Outlet></Outlet>
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES}></ExpensesList>
      </main>
    </>
  );
}
