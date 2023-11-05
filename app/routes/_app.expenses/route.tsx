import { Link, Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";

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
        <ExpensesList expenses={DUMMY_EXPENSES}></ExpensesList>
      </main>
    </>
  );
}
