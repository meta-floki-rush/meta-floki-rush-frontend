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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "861px",
  bgcolor: "#ede2d6",
  border: "2px dashed #000",
  textAlign: "center",
  p: 4,
};

export default function FlokyModal({ handleClose, open, setOpen, rarity, nftList }) {
  const classes = useStyles();

  const handleClick = (id) => {
    handleClose(id);
  };

  return (
    <>
      <Modal
        onBackdropClick={() => setOpen(false)}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h2>Select your Floki to stake</h2>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={0} name="radio-buttons-group">
              <div className={classes.ImageContainer}>
                {nftList?.length === 0 ? (
                  <div style={{ margin: "20px" }}>Oops! you don't have any floki's to stake</div>
                ) : (
                  nftList
                    ?.filter((e) => e.rarity === rarity)
                    .map((x, index) => (
                      <span key={index} className={classes.imageContainer}>
                        <img
                          onClick={() => handleClick(x.tokenId)}
                          src={x.image}
                          className={classes.flokyImg}
                          alt="floky image"
                        />
                      </span>
                    ))
                )}
              </div>
            </RadioGroup>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}
