import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WalletProvider, CHAIN_ID } from "@react-dapp/wallet";
import { NotificationsProvider } from "reapop";
import { Notification } from "./components/Notification/Notification";
import { notificationSetUp } from "./components/Notification/notificationSetUp";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import { Provider } from "react-redux";
import store from "./state";

notificationSetUp();

ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider>
      <Notification />
      <WalletProvider
      // @ts-ignore
        config={{
          // supportedChainIds: [CHAIN_ID.BSC],
          chainId: process.env.REACT_APP_CHAIN_ID === "GOERLI" ? CHAIN_ID.GOERLI : CHAIN_ID.BSC,
          // rpcUrl: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        }}>
        <RecoilRoot>
          <Provider store={store}>
            {/* <DebugObserver /> */}
            <App />
          </Provider>
        </RecoilRoot>
      </WalletProvider>
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function DebugObserver() {
//   const snapshot = useRecoilSnapshot();
//   React.useEffect(() => {
//     console.log("The following atoms were modified:");
//     for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
//       console.log(node.key, snapshot.getLoadable(node));
//     }
//   }, [snapshot]);

//   return null;
// }
