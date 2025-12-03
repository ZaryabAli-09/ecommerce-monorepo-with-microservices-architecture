"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import { useState } from "react";

const categories = [
  "T-shirts",
  "Shoes",
  "Accessories",
  "Bags",
  "Dresses",
  "Jackets",
  "Gloves",
] as const;

const colors = [
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
] as const;

const sizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
] as const;

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    shortDescription: "",
    description: "",
    price: "",
    category: "",
    sizes: [] as string[],
    colors: [] as string[],
    images: {} as Record<string, File | null>,
  });

  const handleInput = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleArrayValue = (
    field: "sizes" | "colors",
    value: string,
    checked: boolean
  ) => {
    const current = form[field];
    if (checked) {
      setForm({ ...form, [field]: [...current, value] });
    } else {
      setForm({ ...form, [field]: current.filter((v) => v !== value) });
    }
  };

  const handleImageChange = (color: string, file: any) => {
    setForm({
      ...form,
      images: {
        ...form.images,
        [color]: file,
      },
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Product Added:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <SheetContent>
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle className="mb-4">Add Product</SheetTitle>
          <SheetDescription>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* NAME */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <Input name="name" value={form.name} onChange={handleInput} />
              </div>

              {/* SHORT DESCRIPTION */}
              <div>
                <label className="block mb-1 font-medium">
                  Short Description
                </label>
                <Input
                  name="shortDescription"
                  value={form.shortDescription}
                  onChange={handleInput}
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block mb-1 font-medium">Description</label>
                <Textarea
                  name="description"
                  value={form.description}
                  onChange={handleInput}
                />
              </div>

              {/* PRICE */}
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <Input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleInput}
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <Select
                  onValueChange={(v) => setForm({ ...form, category: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* SIZES */}
              <div>
                <label className="block mb-1 font-medium">Sizes</label>
                <div className="grid grid-cols-3 gap-4 my-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center gap-2">
                      <Checkbox
                        checked={form.sizes.includes(size)}
                        onCheckedChange={(checked) =>
                          toggleArrayValue("sizes", size, Boolean(checked))
                        }
                      />
                      <span className="text-xs">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLORS */}
              <div>
                <label className="block mb-1 font-medium">Colors</label>

                <div className="grid grid-cols-3 gap-4 my-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center gap-2">
                      <Checkbox
                        checked={form.colors.includes(color)}
                        onCheckedChange={(checked) =>
                          toggleArrayValue("colors", color, Boolean(checked))
                        }
                      />
                      <span className="text-xs flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        {color}
                      </span>
                    </div>
                  ))}
                </div>

                {/* COLOR FILE UPLOADS */}
                {form.colors.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <p className="text-sm font-medium">
                      Upload images for selected colors:
                    </p>
                    {form.colors.map((color) => (
                      <div key={color} className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-sm min-w-[60px]">{color}</span>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleImageChange(
                              color,
                              e.target.files?.[0] ?? null
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </SheetDescription>
        </SheetHeader>
      </ScrollArea>
    </SheetContent>
  );
}
