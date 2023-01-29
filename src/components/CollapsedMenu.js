import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "./Drawer";

const CollapsedMenu = (props) => {
  const { menuItems } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Box sx={{ display: "flex", ml: "auto", mr: 2 }}>
        <IconButton
          edge="end"
          color="secondary"
          aria-label="menu"
          sx={{ ml: "auto", transform: "scale(1.2)" }}
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MenuRoundedIcon fontSize="large" />
        </IconButton>
      </Box>
      <Drawer menuItems={menuItems} open={open} setOpen={setOpen} />
    </>
  );
};

export default CollapsedMenu;
