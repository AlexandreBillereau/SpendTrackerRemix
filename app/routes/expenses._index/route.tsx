import type { LinksFunction } from "@remix-run/node";
import expensesStyle from "~/styles/auth.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyle },
];

export default function Expenses() {
  return (
    <>
      <h1>expenses</h1>
    </>
  );
}
