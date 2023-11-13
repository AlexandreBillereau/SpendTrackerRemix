import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import sharedStyles from "~/styles/shared.css";
import Error from "./components/util/Error";

export const links = () => [{ rel: "stylesheet", href: sharedStyles }];

function Document({ error, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet></Outlet>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document error={error.statusText}>
        <main>
          <Error error={error.statusText}>
            <p>
              {error.data?.message ||
                "Something went wrong, please try again later!"}
            </p>
            <p>
              Back to <Link to={"/"}>safety</Link>.
            </p>
          </Error>
        </main>
      </Document>
    );
  }
}
