import { useNavigate } from "@remix-run/react";
import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

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
