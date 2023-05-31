/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { FaTimes } from "react-icons/fa";
type Props = {
  content: any;
  anchor: any;
  button: any;
};

export default function TemporaryDrawer({ content, anchor, button }: Props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event.type === "keydown"
      // (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: any) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="superbackImageTwo h-screen"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="flex w-full justify-end p-2 "
        onClick={toggleDrawer(anchor, false)}
      >
        <div className="mx-3 text-[35px]">
          <FaTimes />
        </div>
        {/* <img src="/assets/cross.png" alt="" /> */}
      </div>
      {content}
    </Box>
  );

  {
    /* {["left", "right", "top", "bottom"].map((anchor) => ( */
  }
  return (
    <div>
      <React.Fragment key={anchor ? anchor : "left"}>
        <div onClick={toggleDrawer(anchor ? anchor : "left", true)}>
          {button}
        </div>
        <Drawer
          anchor={anchor ? anchor : "left"}
          open={state[anchor ? anchor : "left"]}
          onClose={toggleDrawer(anchor ? anchor : "left", false)}
        >
          {list(anchor ? anchor : "left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
