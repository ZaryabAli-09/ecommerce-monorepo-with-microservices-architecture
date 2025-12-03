"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const EditUser = () => {
  const [form, setForm] = useState({
    fullName: "john.doe",
    email: "john.doe@gmail.com",
    phone: "+1 234 5678",
    address: "New York, NY",
    city: "New",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("User updated:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <Input
                name="username"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Input name="email" value={form.email} onChange={handleChange} />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <Input name="phone" value={form.phone} onChange={handleChange} />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <Input
                name="location"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <Input
                name="location"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditUser;
