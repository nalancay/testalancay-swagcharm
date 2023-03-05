import { Box, Button, Typography } from "@mui/material";

export const OrderSummary = ({
  numberOfItems,
  total,
}: {
  numberOfItems: number;
  total: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gridArea: "OrderSummary",
        mt: 4,
      }}
    >
      <Typography variant="h6">
        <b>Order summary</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "secondary.light",
          py: 2,
          borderBottom: 1,
          borderBottomColor: "secondary.main",
        }}
      >
        <Typography>Number of items: </Typography>
        <Typography>{`${numberOfItems}`}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "primary.main",
          py: 2,
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Total:</Typography>
        <Typography sx={{ fontSize: 24 }}>
          <b>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</b>
        </Typography>
      </Box>
      <Button sx={{ textTransform: "none" }} variant="contained">
        Proceed to checkout
      </Button>
      <Button sx={{ mt: 2, textTransform: "none" }} variant="outlined">
        Continue shopping
      </Button>
    </Box>
  );
};
