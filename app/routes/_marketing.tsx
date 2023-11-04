import type { LinksFunction } from "@remix-run/node";
import marketingStyles from "~/styles/marketing.css";
import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: marketingStyles },
];

export default function MarketingAppLayout() {
  return (
    <>
      <MainHeader></MainHeader>
      <Outlet></Outlet>
    </>
  );
}
