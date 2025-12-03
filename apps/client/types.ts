export type ProductTypes = {
  _id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductType = ProductTypes[];

export type CartItemType = ProductTypes & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export type ShippingFormInputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
};

export type PaymentFormInputs = {
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
