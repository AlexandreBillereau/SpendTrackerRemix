import ExpensesForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
  return (
    <Modal onClose={true}>
      <ExpensesForm></ExpensesForm>
    </Modal>
  );
}
