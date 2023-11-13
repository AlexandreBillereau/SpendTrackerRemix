import { redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigate } from "@remix-run/react";
import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { requireUserSession } from "~/data/auth.server";
import { addExpense, getExpenses } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export default function AddExpensesPage() {
  const navigate = useNavigate();
  const closeHadler = () => {
    navigate("..");
  };

  return (
    <Modal onClose={closeHadler}>
      <ExpensesForm></ExpensesForm>
    </Modal>
  );
}

/**
 * Expected String, provided Objec
 * @param {import("@remix-run/node").ActionFunctionArgs} param0 
 * @returns 
 */
export async function action({ request }) {
  const userId = await requireUserSession(request);

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //add validation
  try {
    validateExpenseInput(data);
  } catch (error) {
    return error;
  }

  await addExpense(data, userId);
  return redirect("..");
}
