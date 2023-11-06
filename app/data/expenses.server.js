import { prisma } from "./database.server";

/**
 * create expense field in db
 * @param {import("@prisma/client").Expense} expense
 * @returns
 */
export async function addExpense(expense) {
  try {
    return await prisma.expense.create({
      data: {
        title: expense.title,
        amount: +expense.amount,
        date: new Date(expense.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * @return {Promise<[import("@prisma/client").Expense]>}
 * return an array of expenses.
 */
export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { date: "desc" },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
