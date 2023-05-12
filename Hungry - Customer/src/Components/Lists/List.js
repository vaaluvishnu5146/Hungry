import * as React from "react";
import List from "@mui/material/List";
import ListItemBasic from "../Lists/RestaurantListItem";

export default function BasicList({ data = [], id = "", ListItem = null }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} aria-label={id}>
      {data && data.length > 0 ? (
        data.map(
          (data, index) =>
            ListItem && <ListItem key={`${id}-${index}`} data={data} />
        )
      ) : (
        <p>No data found</p>
      )}
    </List>
  );
}
