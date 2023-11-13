import { prisma } from "./database.server";

/**
 * create expense field in db
 * @param {import("@prisma/client").Expense} expense
 * @param {string} userId
 * @returns
 */
export async function addExpense(expense, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expense.title,
        amount: +expense.amount,
        date: new Date(expense.date),
        User: { connect: { id: userId } }
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * @param {string} userId;
 * @return {Promise<[import("@prisma/client").Expense]>}
 * return an array of expenses.
 */
export async function getExpenses(userId) {
  if (!userId) {
    throw Error('failed to loade expenses');
  }
  try {
    const expenses = await prisma.expense.findMany({
      where: { userId },
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
    console.log("UPDATE DATA");
    return await prisma.expense.update({
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

/**
 * @param {string} id
 */

export async function deleteExpense(id) {
  try {
    return await prisma.expense.delete({
      where: { id },
    });
  } catch (error) {
    return error;
  }
}
