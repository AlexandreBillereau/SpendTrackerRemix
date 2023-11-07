import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "~/data/expenses.server";

export default function Expenses() {
  const expenses = useLoaderData();

  return (
    <>
      <Outlet></Outlet>
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="expenses/raw">
            <FaDownload />
            <span>Add Expense</span>
          </a>
        </section>
        <ExpensesList expenses={expenses}></ExpensesList>
      </main>
    </>
  );
}

export async function loader() {
  return getExpenses();
}
