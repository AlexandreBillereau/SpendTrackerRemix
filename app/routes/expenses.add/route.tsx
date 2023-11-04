import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function AddExpensesPage() {
  return (
    <Modal onClose={false}>
      <ExpensesForm></ExpensesForm>
    </Modal>
  );
}
