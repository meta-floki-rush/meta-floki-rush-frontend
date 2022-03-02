import { Backdrop, CircularProgress, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes";
import theme from "./utils/theme";
import { UtilsProvider } from "@react-dapp/utils";
import { useEagerConnect, useWallet } from "@react-dapp/wallet";
import { NftVillageSdkProvider } from "@nftvillage/marketplace-sdk";
import { ModalProvider } from "./context/ModalContext";
import RewardUnlock from "./modals/RewardUnlock";
import TokenPop from "./modals/TokenPop";
import { useRecoilValue } from "recoil";
import loadingState from "./recoil/loadingState";

const allModals = [
  {
    name: "RewardUnlock",
    component: RewardUnlock,
  },
  {
    name: "TokenPop",
    component: TokenPop,
  },
];

function App() {
  const { library } = useWallet();
  useEagerConnect(Boolean(true));
  const loading = useRecoilValue(loadingState);

  return (
    <UtilsProvider config={{ provider: library }}>
      <NftVillageSdkProvider
        config={{
          notify: (type, msg, onClose) => {
            console.log(type, msg, onClose);
          },
        }}>
        <ModalProvider allModals={allModals}>
          <ThemeProvider theme={theme}>
            <Backdrop open={loading} style={{ zIndex: 9999 }}>
              <CircularProgress color="primary" />
            </Backdrop>
            <div className="App">
              <Routes />
              <Footer />
            </div>
          </ThemeProvider>
        </ModalProvider>
      </NftVillageSdkProvider>
    </UtilsProvider>
  );
}

export default App;
