import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

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
      <Chart expenses={DUMMY_EXPENSES}></Chart>
      <ExpenseStatistics expenses={DUMMY_EXPENSES}></ExpenseStatistics>
    </>
  );
}
