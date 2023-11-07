import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { prisma } from "~/data/database.server";
import { deleteExpense, updateExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
// import { getExpensesById } from "~/data/expenses.server";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();
  const handleNaviagtion = () => {
    navigate("..");
  };

  return (
    <Modal onClose={handleNaviagtion}>
      <ExpensesForm></ExpensesForm>
    </Modal>
  );
}

// export async function loader({ params }) {
//   const id = params.id;
//   const expenses = await getExpensesById(id);
//   return expenses;
// }

/**
 * @param {import("@remix-run/node").ActionFunctionArgs}
 */
export async function action({ params, request }) {
  const expenseId = params.id;
  console.log(expenseId);

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    //dont forget validation
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
    return redirect("..");
  } else if (request.method === "DELETE") {
    await deleteExpense(expenseId);
    return { id: expenseId };
  }
}
