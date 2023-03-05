import { Box, Typography } from "@mui/material";
import { ItemCart } from "./ItemCart";

interface ItemsCartProps {
  products: ReadonlyArray<{
    id: number;
    img: string;
    title: string;
    details: any;
    quantity: number;
    stock: number;
    price: number;
  }>;
  removeProduct: (id: number) => void;
  editQuantityProduct: (id: number, newQuantity: number) => void;
}

export const ItemsCart = ({
  products,
  removeProduct,
  editQuantityProduct,
}: ItemsCartProps) => {
  const productCount = products.length;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gridArea: "ItemsCart",
        mt: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">
          <b>Your Cart</b>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ padding: "4px" }}>
          {`(${productCount})`}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {products.map((product) => (
          <ItemCart
            key={`itemCartCard-${Math.random()}`}
            product={product}
            removeProduct={removeProduct}
            editQuantityProduct={editQuantityProduct}
          />
        ))}
      </Box>
    </Box>
  );
};
