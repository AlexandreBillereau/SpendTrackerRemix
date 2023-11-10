import marketingStyles from "~/styles/marketing.css";
import { Outlet, useLoaderData } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.server";

export const links = () => [{ rel: "stylesheet", href: marketingStyles }];

export default function MarketingAppLayout() {
  return (
    <>
      <MainHeader></MainHeader>
      <Outlet></Outlet>
    </>
  );
}

/**
 * @param {import("@remix-run/node").LoaderFunctionArgs}
 */
export function loader({ request }) {
  return getUserFromSession(request);
}
