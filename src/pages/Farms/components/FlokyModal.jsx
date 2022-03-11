import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Hades from "../../../assets/images/Hades.png";
import useStyles from "../Style";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styled from "@emotion/styled";
import { Badge, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { POOL_CARD_ADDRESS } from "../../../config/config";
import { useInventoryERC1155 } from "@nftvillage/marketplace-sdk";
import { usePool } from "@nftvillage/farms-sdk";
import theme from "../../../utils/theme";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "726px",
  bgcolor: "#ede2d6",
  border: "2px dashed #000",
  textAlign: "center",
  p: 4,
};

export default function FlokyModal({ poolId, handleClose, open, setOpen, rarity, nftList }) {
  const pool = usePool(poolId);

  const [quantity, setQuantity] = React.useState(
    nftList
      ?.filter((e) => e.rarity === rarity)
      .map((item) => ({
        tokenId: item.tokenId,
        amount: item.amount,
      })),
  );

  const handleIncrement = (tokenId, amount) => {
    let increment = quantity.map((item) => {
      if (item.tokenId === tokenId) {
        item.amount++;
      }
      if (item.tokenId === tokenId) {
        if (item.amount >= amount) {
          item.amount = amount;
        }
      }
      return item;
    });
    setQuantity([...increment]);
  };
  const handleDecrement = (tokenId) => {
    let decrement = quantity.map((item) => {
      if (item.tokenId === tokenId) {
        item.amount--;
      }
      if (item.amount <= 0) {
        item.amount = 0;
      }
      return item;
    });
    setQuantity([...decrement]);
  };

  const classes = useStyles();

  const handleSubmit = async () => {
    const multiplierCards = quantity.filter((e) => e.amount > 0);
    const requiredCard = multiplierCards.pop();
    console.log(requiredCard, multiplierCards);
    await pool?.depositInfo.deposit(undefined, undefined, undefined, multiplierCards, [requiredCard]);
  };

  console.log("pool", pool);
  return (
    <>
      <Modal
        onBackdropClick={() => (pool?.depositInfo.pending ? null : setOpen(false))}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h2>Select your Floki to stake</h2>

          <div className={classes.ImageContainer}>
            {nftList?.length === 0 ? (
              <div style={{ margin: "20px" }}>Oops! you don't have any floki's to stake</div>
            ) : (
              nftList
                ?.filter((e) => e.rarity === rarity)
                .map((x, index) => (
                  <span key={index} className={classes.imageContent}>
                    <Badge color="success" badgeContent={quantity?.find((item) => item?.tokenId === x.tokenId)?.amount}>
                      <img src={x.image} className={classes.flokyImg} alt="floky image" />
                    </Badge>

                    {/* onHover => */}
                    <span className={classes.tokenQuantity}>
                      <h2>
                        {quantity?.find((item) => item?.tokenId === x.tokenId)?.amount}/{x.amount}
                      </h2>
                      <span>
                        <IconButton onClick={() => handleDecrement(x.tokenId)}>
                          <RemoveIcon className={classes.icon} />
                        </IconButton>
                        <IconButton onClick={() => handleIncrement(x.tokenId, x.amount)}>
                          <AddIcon className={classes.icon} />
                        </IconButton>
                      </span>
                    </span>
                    {/* <= onHover */}
                  </span>
                ))
            )}
          </div>
          <Button
            onClick={handleSubmit}
            disabled={pool?.depositInfo.pending}
            style={{
              background: "#00A651",
              color: "white",
              marginTop: "30px",
              fontSize: "11px",
              width: "106px",
              height: "40px",
              fontWeight: "lighter",
              borderRadius: "8.68972px",
            }}>
            {pool?.depositInfo.pending ? "PENDING..." : "DEPOSIT"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
