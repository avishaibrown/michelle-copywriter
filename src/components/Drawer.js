import {
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Drawer = (props) => {
  const { menuItems, open, setOpen } = props;

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            width: 250,
            background: "linear-gradient(to bottom, #D2F7FE 0%, #FFFFFF 100%)",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#D2F7FE",
                },
              }}
              href={item.link}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
