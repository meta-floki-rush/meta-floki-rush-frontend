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

export default function FlokyModal({ handleClose, open }) {
  const [isClicked, setIsClicked] = React.useState(undefined);
  const classes = useStyles();
  const fdata = [
    { img: Hades, id: 0 },
    { img: Hades, id: 1 },
    { img: Hades, id: 2 },
    { img: Hades, id: 3 },
    { img: Hades, id: 4 },
    { img: Hades, id: 5 },
  ];
  const handleClick = (id) => {
    setIsClicked(id);
  };

  return (
    <div>
      {/* <Button >Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h2>Multipilier Cards</h2>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={0} name="radio-buttons-group">
              <div className={classes.ImageContainer}>
                {fdata.map((x, index) => (
                  <span key={index} className={classes.imageContainer}>
                    <img onClick={() => handleClick(x.id)} src={Hades} className={classes.flokyImg} alt="floky image" />

                    <FormControlLabel checked={isClicked === x.id} value={x.id} control={<Radio />} label="" />
                  </span>
                ))}
              </div>
            </RadioGroup>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
