/**
 * helper.js
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// Function to update task order in the database
export async function updateTaskOrder(newTaskOrder) {
  try {
    for (let index = 0; index < newTaskOrder.length; index++) {
      const taskId = newTaskOrder[index];
      await prisma.task.update({
        where: { id: taskId },
        data: { order: index + 1 }, // Adding +1 to convert to 1-indexed
      });
    }
    console.log('Task order updated successfully');
  } catch (error) {
    console.error('Error updating task order:', error);
  }
}

