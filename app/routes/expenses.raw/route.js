import { getExpenses } from "~/data/expenses.server";

//triger with get request basisc usage.
export function loader() {
  return getExpenses();
}
