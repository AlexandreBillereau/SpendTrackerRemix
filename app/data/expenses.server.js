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

/**
 *
 * @param {string} id
 * @return {Promise<import("@prisma/client").Expense>}
 */
export async function getExpensesById(id) {
  try {
    const expense = await prisma.expense.findFirst({ where: { id } });
    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 *
 * @param {string} id
 * @param {import("@prisma/client").Expense} expenseDate
 */
export async function updateExpense(id, expenseDate) {
  try {
    prisma.expense.update({
      where: {
        id,
      },
      data: {
        title: expenseDate.title,
        amount: +expenseDate.amount,
        date: new Date(expenseDate.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
