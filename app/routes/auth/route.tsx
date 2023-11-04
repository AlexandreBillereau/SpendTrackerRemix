import type { LinksFunction } from "@remix-run/node";
import authStyle from "~/styles/auth.css";
import AuthForm from "~/components/auth/AuthForm";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyle },
];

export default function Auth() {
  return <AuthForm></AuthForm>;
}
