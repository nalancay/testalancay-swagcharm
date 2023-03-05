export type ProductCartType = {
  id: number;
  img: string;
  title: string;
  details: any;
  quantity: number;
  stock: number;
  price: number;
};

export type ProductsCartType = ProductCartType[];
export const initialProductsCart: ProductsCartType = [
  {
    id: 0,
    img: "assets/p1.png",
    title: "My Christmas Pack",
    details: [
      { "Cardboard box": "Container" },
      { "Unisex Short Sleeve T-Shirt": "Green, Small" },
      { "Basic bottle": "Blue" },
    ],
    quantity: 50,
    stock: 80,
    price: 71.2,
  },
  {
    id: 1,
    img: "assets/p2.png",
    title: "Basic T-shirt",
    details: null,
    quantity: 10,
    stock: 30,
    price: 13.5,
  },
  {
    id: 2,
    img: "assets/p3.png",
    title: "Woman bottle",
    details: null,
    quantity: 20,
    stock: 20,
    price: 36.5,
  },
];

export const getTotalPriceProducts = (products: ProductsCartType) => {
  return products.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.price;
  }, 0);
};
