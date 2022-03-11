import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Vault from "./pages/Vault/Vault";
import Marketplace from "./pages/Marketplace/Marketplace";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Farms from "./pages/Farms/Farms";
import TreasureChest from "./pages/TreasureChest/TreasureChest";
import Minting from "./pages/Minting/Minting";
import NFTGiftClaim from "./pages/NFTGiftClaim/NFTGiftClaim";
import Inventory from "./pages/Inventory/Inventory";
import WhitelistClaim from "./pages/WhitelistClaim/WhitelistClaim";
import Navbar from "./components/Navbar/Navbar";

interface RouteOptions {
  name?: string;
  hideOnNav?: boolean;
  hideOnMobile?: boolean;
  path: string;
  // exact?: boolean;
  Element: any;
}

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {ROUTES.map((routs, index) => (
          <Route key={index} path={routs.path} element={<routs.Element />} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

export const ROUTE_PATHS = {
  HOME: "/",
  DOGE_BANK: "/doge-bank",
  MARKETPLACE: "/marketplace",
  INVETORY: "/my-flokis",
  NFT_STAKING: "/nft-staking",
  CHEST: "/gacha-minting",
  GIFT_CLAIM: "/gift-claim",
  NFT_MINTING: "/nft-minting",
  NFT_DETAIL: "/item/",
  PRIVATE_SALE: "/token-claim",
};

export const ROUTES: RouteOptions[] = [
  {
    Element: Vault,
    hideOnMobile: true,
    hideOnNav: true,
    path: ROUTE_PATHS.HOME,
  },
  {
    name: "Doge Bank",
    Element: Vault,
    path: ROUTE_PATHS.DOGE_BANK,
  },
  {
    name: "Gift Claim",
    Element: NFTGiftClaim,
    path: ROUTE_PATHS.GIFT_CLAIM,
  },
  {
    name: "Gacha Minting",
    Element: TreasureChest,
    path: ROUTE_PATHS.CHEST,
  },
  {
    name: "NFT Minting",
    Element: Minting,
    path: ROUTE_PATHS.NFT_MINTING,
  },
  {
    name: "Marketplace",
    Element: Marketplace,
    path: ROUTE_PATHS.MARKETPLACE,
  },
  {
    name: "Staking",
    Element: Farms,
    path: ROUTE_PATHS.NFT_STAKING,
  },
  {
    name: "My Flokis",
    Element: Inventory,
    path: ROUTE_PATHS.INVETORY,
  },
  {
    Element: ItemDetails,
    path: `${ROUTE_PATHS.NFT_DETAIL}:assetId/:asset`,
    hideOnNav: true,
  },
  {
    name: "Token Claim",
    Element: WhitelistClaim,
    path: ROUTE_PATHS.PRIVATE_SALE,
  },
];
