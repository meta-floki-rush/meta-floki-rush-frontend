import { Button, CircularProgress } from "@mui/material";
import { useWallet } from "@react-dapp/wallet";
import { useEthers } from "@react-dapp/utils";

const WalletButtonBase = ({ onClick, children, className, loading = false, loadingText = "Pending...", disabled }) => {
  const { displayAccount } = useEthers();
  const { account, setOpen: openWalletModal } = useWallet();

  const connectWallet = () => {
    openWalletModal(true);
  };
  const handleClick = () => {
    if (!account) {
      connectWallet();
    } else if (onClick && !loading) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      style={{
        background: " #f4c84c",
        color: "#922626",
        borderRadius: "10px",
        width: "201px",
        fontWeight: "bold",
      }}
      className={className}
      disabled={disabled}>
      {!displayAccount && "Connect"}
      {displayAccount && !loading && (children || "Connect")}
      {displayAccount && loading && (
        <>
          <CircularProgress size={30} thickness={4} style={{ marginRight: 5 }} />
          {loadingText}
        </>
      )}
    </Button>
  );
};
export default WalletButtonBase;
