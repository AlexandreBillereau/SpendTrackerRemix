import {
  Link,
  useActionData,
  useLoaderData,
  useMatches,
  useParams,
} from "@remix-run/react";

function ExpenseForm() {
  const validationErrors = useActionData();
  const param = useParams();
  // const expenseData = useLoaderData();
  const matches = useMatches();

  /** @type {[import("@prisma/client").Expense]} */
  const expenses = matches.find(
    (match) => match.id === "routes/_app.expenses"
  ).data;

  const expenseData = expenses.find((expense) => expense.id === param.id);

  const defaultValues = expenseData
    ? { ...expenseData }
    : { title: "", amount: "", date: "" };

  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post" className="form" id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={defaultValues.title}
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            max={today}
            required
            defaultValue={
              defaultValues.date ? defaultValues.date.slice(0, 10) : ""
            }
          />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button>Save Expense</button>
        <Link to={".."}>Cancel</Link>
      </div>
    </form>
  );
}

export default ExpenseForm;
