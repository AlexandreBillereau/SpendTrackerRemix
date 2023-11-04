import { useNavigate } from "@remix-run/react";
import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

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
