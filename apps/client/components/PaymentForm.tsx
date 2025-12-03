"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { PaymentFormInputs } from "@/types";

export default function PaymentForm() {
  const [formData, setFormData] = useState<PaymentFormInputs>({
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handlePaymentForm(e: React.FormEvent) {
    e.preventDefault();

    const { cardHolder, cardNumber, expirationDate, cvv } = formData;

    if (!cardHolder || !cardNumber || !expirationDate || !cvv) {
      toast.error("Please fill all fields");
      return;
    }

    // Proceed with your logic
    toast.success("Payment processed!");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handlePaymentForm}>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on card
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          value={formData.cardHolder}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="123456789123"
          value={formData.cardNumber}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="01/32"
          value={formData.expirationDate}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder="123"
          value={formData.cvv}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
}
