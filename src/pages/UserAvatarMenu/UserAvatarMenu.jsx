import React from "react";
import { makeStyles } from "@mui/styles";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

import { Avatar, Button, IconButton, MenuItem, Popover, Theme, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useEthers } from "@react-dapp/utils";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ListAltIcon from "@mui/icons-material/ListAlt";

import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@react-dapp/wallet";

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginLeft: 5,
    fontWeight: 600,
    fontSize: 13,
    maxWidth: 150,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "pre",
  },
  __menue_icons: {
    background: "#FFC84E !important",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "31px",
      height: "31px",
    },
  },
}));

const UserAvatarMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const { logout } = useGetUser();
  const { deactivate } = useWallet();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    deactivate();
    handleClose();
  };
  const open = Boolean(anchorEl);

  const inventoryOpen = () => {
    handleClose();
    navigate("/my-flokis");
  };

  return (
    <div className={classes.root}>
      <IconButton className={classes.__menue_icons} onClick={handleClick}>
        <FactCheckOutlinedIcon
          className={classes.__icon}
          style={{
            color: "#922626",
            fontSize: "13px !important",
            fontWeight: "lighter",
          }}
        />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 150,
            padding: "5px 0px",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        {/* <MenuItem onClick={inventoryOpen}>
          <ListAltIcon style={{ marginRight: 10 }} />
          Inventory
        </MenuItem> */}
        {/* <MenuItem
        // onClick={profileOpen}
        >
          <PersonIcon style={{ marginRight: 10 }} />
          Profile
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon style={{ marginRight: 10 }} />
          Logout
        </MenuItem>
      </Popover>
    </div>
  );
};

// const mapState = (store: any) => ({
//   user: store.user.user,
// });

export default UserAvatarMenu;
