"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ShippingFormInputs } from "@/types";

export default function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) {
  const [formData, setFormData] = useState<ShippingFormInputs>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleShippingForm(e: React.FormEvent) {
    e.preventDefault();

    const { name, email, phone, address, city } = formData;

    if (!name || !email || !phone || !address || !city) {
      toast.error("Please fill all fields");
      return;
    }

    setShippingForm(formData);
    router.push("/cart?step=3", { scroll: false });
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleShippingForm}>
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="phone"
          placeholder="123456789"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="address"
          placeholder="123 Main St, Anytown"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* City */}
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="city"
          placeholder="New York"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
}
