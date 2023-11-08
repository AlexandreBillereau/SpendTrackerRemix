import authStyle from "~/styles/auth.css";
import AuthForm from "~/components/auth/AuthForm";

export const links = () => [{ rel: "stylesheet", href: authStyle }];

export default function Auth() {
  return <AuthForm></AuthForm>;
}

/**
 * @param {import("@remix-run/node").ActionFunctionArgs}
 */
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.entries(formData);

  if (authMode === "login") {
    // login
  } else {
    //signup
  }
}
