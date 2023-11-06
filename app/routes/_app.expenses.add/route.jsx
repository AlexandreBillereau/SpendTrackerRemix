import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expenses.server";

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

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await addExpense(data);
  return redirect("..");
}
