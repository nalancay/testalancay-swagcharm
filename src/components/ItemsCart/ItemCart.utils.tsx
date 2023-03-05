import { Box, List, ListItem, Typography } from "@mui/material";

export const getStockOptions = (stock: number) => {
  let options: any = [];
  for (let i = 1; i <= stock; i++) {
    options.push({ optionValue: i });
  }
  return options;
};

export const DetailsProduct = (details: { [key: string]: string }[]) => {
  const detailsList = details.map((detail) => {
    const propName = Object.getOwnPropertyNames(detail)[0];
    return (
      <ListItem sx={{ p: 0 }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
              mr: 1,
              fontSize: 14,
            }}
          >
            {propName}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: "secondary.light",
              alignItems: "center",
              display: "flex",
            }}
          >
            ({detail[propName]})
          </Typography>
        </Box>
      </ListItem>
    );
  });

  return (
    <List
      sx={{
        listStyleType: "disc",
        pl: 2,
        "& .MuiListItem-root": {
          display: "list-item",
        },
      }}
    >
      {detailsList}
    </List>
  );
};
