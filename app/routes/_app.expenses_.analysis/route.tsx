import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
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
  return (
    <>
      <main>
        <Chart expenses={DUMMY_EXPENSES}></Chart>
        <ExpenseStatistics expenses={DUMMY_EXPENSES}></ExpenseStatistics>
      </main>
    </>
  );
}
