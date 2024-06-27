"use server";

import prisma from "@/lib/prisma";

export const setTransationId = async (
  orderId: string,
  transactionId: string
) => {
  try {
    const order = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        transactionId: transactionId,
      },
    });

    if (!order) {
      return {
        ok: false,
        message: `No se puede encontrar la ordern en el ID = ${orderId}`,
      };
    }

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se puede actualizar el ID de la transacción",
    };
  }
};
