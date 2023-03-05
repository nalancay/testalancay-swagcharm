import { useState } from "react";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import CustomizedMenus from "../CustomizedMenus";
import { DetailsProduct, getStockOptions } from "./ItemCart.utils";

type ProductType = {
  product: {
    img: string;
    id: number;
    stock: number;
    title: string;
    quantity: number;
    price: number;
    details: any;
  };
  removeProduct: (id: number) => void;
  editQuantityProduct: (id: number, newQuantity: number) => void;
};

export const ItemCart = ({
  product,
  removeProduct,
  editQuantityProduct,
}: ProductType) => {
  const { id, img, title, price, quantity, stock, details } = product;
  const defaultOptionSelect = quantity;
  const [selectOptionQuantity, setSelectOptionQuantity] =
    useState(defaultOptionSelect);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        borderBottom: 1,
        borderBottomColor: "secondary.main",
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "15%",
          aspectRatio: "1/1",
          maxWidth: 120,
        }}
      >
        <img
          src={img}
          style={{ width: "100%", objectFit: "cover" }}
          alt="product"
        />
        {details && (
          <Box
            sx={{
              bgcolor: "secondary.main",
              width: "fit-content",
              textAlign: "center",
              mt: 1,
            }}
          >
            <Typography sx={{ fontSize: 10, p: "4px", color: "#848A92" }}>
              PACK
            </Typography>
          </Box>
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            <b>{title}</b>
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            $ {price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 1 }}>
              <b>Quantity:</b>
            </Typography>
            <CustomizedMenus
              items={getStockOptions(stock)}
              defaultOption={selectOptionQuantity.toString()}
              setSelectOptionQuantity={setSelectOptionQuantity}
              stylesCustom={{
                borderBottom: "1px solid #091625",
                backgroundColor: "#FFFF",
              }}
            />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>
            Total: {"$ "}
            {(price * quantity).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </Typography>
        </Box>
        {details && <Typography>{DetailsProduct(details)}</Typography>}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {Number(defaultOptionSelect) !== Number(selectOptionQuantity) ? (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 12,
                mt: 1,
                py: "2px",
                px: 2,
                borderRight: 1,
                borderRadius: 0,
              }}
              onClick={() => editQuantityProduct(id, selectOptionQuantity)}
            >
              {details ? "Edit pack" : "Edit"}
            </Button>
          ) : null}
          <Button
            onClick={() => removeProduct(id)}
            startIcon={<DeleteForeverOutlined />}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 12,
              mt: 1,
              py: "2px",
              px: 2,
            }}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
