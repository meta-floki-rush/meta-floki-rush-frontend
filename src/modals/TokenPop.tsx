import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Theme, Typography } from "@mui/material";
import Confetti from "react-confetti";
import { useMetadata } from "../hooks/useMetadata";
import { POOL_CARD_ADDRESS } from "../config/config";
import { imagePromise } from "../utils";
import ModalComponentProps from "../context/ModalComponentProps";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // width: 400,
    // height: 600,
  },
  gif: {
    // width: "70vw",
    // maxWidth: "400px",
    width: "100%",
    maxHeight: "60vh",
    objectFit: "contain",
    animation: "$gif 0.8s ease-in-out 1",
  },
  "@keyframes gif": {
    "0%": {
      transform: "scale(0)",
    },
    "90%": {
      transform: "scale(1.05)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

const TokenPop: React.FC<ModalComponentProps> = ({ data: propData, openModal }) => {
  const classes = useStyles();
  const ref = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 10, height: 10 });
  const [data, setData] = React.useState<any>({});
  const { metadata, loading } = useMetadata(propData?.address, propData?.tokenId);

  React.useEffect(() => {
    const handleResize = () => {
      let dt = ref?.current?.getBoundingClientRect();
      setDimensions({
        width: (dt?.width || 10) + 40,
        height: (dt?.height || 10) + 40,
      });
    };
    let interval = setInterval(handleResize, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  React.useEffect(() => {
    const metadataRecieved = async () => {
      let img = metadata.animation_url || metadata.image;
      img = await imagePromise(img);
      setData({ name: metadata.name, image: img });
    };
    metadata && metadataRecieved();
  }, metadata);

  React.useEffect(() => {
    if (data.image) {
      openModal();
    }
  }, [data]);

  return (
    <Container maxWidth="lg" className={classes.root} ref={ref}>
      <Confetti width={dimensions.width} height={dimensions.height} initialVelocityY={30} />
      <img src={data?.image} alt="" className={classes.gif} />

      <Typography variant="h5" color="primary" className="styleFont" align="center">
        <b>You've Got</b>
      </Typography>
      <Typography variant="h2" color="primary" className="styleFont" align="center">
        <b>{data?.name}</b>
      </Typography>

      <Typography variant="h6" color="primary" className="styleFont" align="center">
        <a href={`https://bscscan.com/tx/${propData?.txHash}`} target="_blank">
          View Transaction
        </a>
      </Typography>
    </Container>
  );
};

export default TokenPop;
