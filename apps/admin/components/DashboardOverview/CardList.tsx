import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const popularProducts = [
  {
    _id: 1,
    name: "Ad_idas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    _id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    _id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Order Payments",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payments",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payments",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
];

export default function CardList({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>

      <div className="flex flex-col gap-2">
        {title === "Popular Products"
          ? popularProducts.map((item) => (
              <Card
                key={item._id}
                className="flex-row flex items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-full relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-xs font-medium">
                    {item.name}
                  </CardTitle>
                </CardContent>

                <CardFooter className="p-0">PKR {item.price}</CardFooter>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex-row flex items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-full relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.badge}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-xs font-medium">
                    {item.title}
                  </CardTitle>

                  <Badge className="mt-1">{item.badge}</Badge>
                </CardContent>

                <CardFooter className="p-0">{item.count}</CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
