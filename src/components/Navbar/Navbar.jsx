import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Drawer, Hidden, IconButton, Menu, Theme } from "@mui/material";
import useStyles from "./Style";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { routes } from "./routes";
import { useEthers } from "@react-dapp/utils";
import WalletButtonBase from "../WalletButtonBase/WalletButtonBase";
import UserAvatarMenu from "../../pages/UserAvatarMenu/UserAvatarMenu";
import logo from "../../assets/images/logo.png";
import theme from "./../../utils/theme";
import { ROUTES } from "../../Routes";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/doge-bank");
  };

  const [filterNav, setFilterNav] = useState(false);
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/doge-bank") {
      setFilterNav(true);
    } else {
      setFilterNav(false);
    }
  }, [location]);

  return (
    <div className={classes.__navContainer}>
      <div className={classes.__headerContainer}>
        <div className={classes.__leftContent}>
          <img style={{ cursor: "pointer" }} onClick={handleClick} src={logo} className={classes.__logo} alt="logo" />
        </div>
        <NavItems />
      </div>
    </div>
  );
};

const NavItems = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userMenu, setUserMenu] = React.useState(false);

  //   Mobile view
  const [drawerState, setDrawerState] = React.useState({
    left: false,
  });
  const { pathname } = useLocation();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };
  React.useEffect(() => {
    setDrawerState(drawerState.left);
  }, [pathname]);

  const { displayAccount } = useEthers();
  return (
    <>
      <Hidden mdDown>
        <div className={classes.__search}>
          <div className={classes.__button}>
            {ROUTES.filter((i) => !i.hideOnNav).map((e, index) => (
              <Button
                key={index}
                onClick={() => {
                  navigate(e.path);
                }}
                className={classes.menubtn}
                siz="large"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "'Mali', cursive",
                  // fontSize: "18px",
                }}
                variant="contain">
                {e.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Wallet Connect */}
        <Box className={classes.__user_menu}>
          {displayAccount ? (
            <span
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "170px",
              }}>
              <span>{displayAccount}</span>

              <UserAvatarMenu />
            </span>
          ) : (
            <WalletButtonBase />
          )}
        </Box>
      </Hidden>
      <Hidden mdUp>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton size="large" onClick={toggleDrawer(anchor, true)}>
              {/* <Menu
                style={{
                  fontSize: "34px",
                  color: `${theme.palette.text.primary}`,
                }}></Menu> */}
              <MenuIcon />
            </IconButton>
            <Drawer anchor={anchor} open={drawerState[anchor]} onClose={toggleDrawer(anchor, false)}>
              <div style={{ padding: "20px" }}>
                <Box className={classes.__user_menu}>
                  {displayAccount ? (
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "170px",
                      }}>
                      <span>{displayAccount}</span>

                      <UserAvatarMenu />
                    </span>
                  ) : (
                    <WalletButtonBase />
                  )}
                </Box>
              </div>
              {ROUTES.filter((i) => !i.hideOnNav).map((e, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    navigate(e.path);
                  }}
                  className={classes.menubtn}
                  siz="large"
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "'Mali', cursive",
                    // fontSize: "18px",
                  }}
                  variant="contain">
                  {e.name}
                </Button>
              ))}
            </Drawer>
          </React.Fragment>
        ))}
      </Hidden>
    </>
  );
};
export default Navbar;
