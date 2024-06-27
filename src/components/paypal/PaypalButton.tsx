"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {
  CreateOrderData,
  CreateOrderActions,
  OnApproveData,
  OnApproveActions,
} from "@paypal/paypal-js";
import { paypalCheckPayment, setTransationId } from "@/actions";

interface Props {
  orderId: string;
  amount: number;
}

export const PaypalButton = ({ orderId, amount }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending) {
    return (
      <div className="animate-pulse mb-16">
        <div className="h-12  bg-gray-300 rounded"></div>
        <div className="h-12 mt-2 bg-gray-300 rounded"></div>
      </div>
    );
  }

  const roundedAmount = Math.round(amount * 100) / 100;

  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ): Promise<string> => {
    const transactionId = await actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            value: `${roundedAmount}`,
            currency_code: "USD",
          },
        },
      ],
    });

    // todo: guardar el ID en la orden en la base de datos
    const { ok } = await setTransationId(orderId, transactionId);

    if (!ok) {
      throw new Error("No se puede guardar la orden");
    }

    return transactionId;
  };

  const onApprove = async (
    data: OnApproveData,
    actions: OnApproveActions
  ): Promise<void> => {
    //console.log("onApprove");

    const details = await actions.order?.capture();
    if (!details) return;

    if (details.id) {
      await paypalCheckPayment(details.id);
    }
  };

  return (
    <>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </>
  );
};
