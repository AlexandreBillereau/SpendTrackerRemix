import { useNavigate } from "@remix-run/react";
import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpensesById } from "~/data/expenses.server";

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

export async function loader({ params }) {
  const id = params.id;
  const expenses = await getExpensesById(id);
  return expenses;
}
