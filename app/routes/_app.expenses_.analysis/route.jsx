import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { useLoaderData, useMatches } from "@remix-run/react";
import { getExpenses } from "~/data/expenses.server";
import { json, useRouteError } from "react-router";
import Error from "~/components/util/Error";
import { requireUserSession } from "~/data/auth.server";
// import expensesStyle from "~/styles/expenses.css";
// import type { LinksFunction } from "@remix-run/node";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: expensesStyle },
// ];

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

export default function ExpensesAnalysisPage() {
  /** @type {[import("@prisma/client").Expense]} */
  const expesesDate = useLoaderData();

  return (
    <>
      <main>
        <Chart expenses={expesesDate}></Chart>
        <ExpenseStatistics expenses={expesesDate}></ExpenseStatistics>
      </main>
    </>
  );
}

/**
 * @param {import("@remix-run/node").ActionFunctionArgs}
 */
export async function loader({ request }) {

  await requireUserSession(request);

  const expenses = await getExpenses();
  if (!expenses || expenses.length === 0) {
    throw json(
      { message: "could not load expenses for the requested analysis" },
      { status: 404, statusText: "expenses not found" }
    );
  }

  return expenses;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <main>
      <Error>
        <p>{error.data.message}</p>
      </Error>
    </main>
  );
}
