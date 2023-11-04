import type { LinksFunction } from "@remix-run/node";
import expensesStyle from "~/styles/expenses.css";

import { Outlet } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyle },
];

export default function Expenses() {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
