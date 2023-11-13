import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.server";

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


/**
 * @param {import("@remix-run/node").LoaderFunctionArgs}
 * @returns 
 */
export async function loader({ request }) {
  const userId = await requireUserSession(request)
  return await getExpenses(userId);
}

/**
 * @param {import("@remix-run/node").ActionFunctionArgs}
 */
export async function action({ request }) { }


/**
 * @return {import("@remix-run/node").MetaFunction}
 */
export function meta() {

  return [{ title: "expenses app | Remix" }];
}