import React, { FC } from "react";
import { Dialog, DialogTitle, IconButton, Theme, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
// import SuccessPng from "./checked.png";
// import ErrorPng from "../assets/images/error.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  typeDiv: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexFlow: "column",
  },
}));

interface ModalOptions {
  hideCloseBtn?: boolean;
  hideTitle?: boolean;
  type?: "success" | "error";
  dontOpen?: boolean;
  runOnOpen?: () => {};
}

const ModalContext = React.createContext({
  title: "",
  /**
   *
   * This function opens the modal of given title with given options
   * @param title unique title of the modal
   * @param data data to be passed to modal component
   * @param options options to be passed to modal component
   */
  openModal: (title: string, data?: any, options?: ModalOptions) => {},
  closeModal: () => {},
  openModalManually: () => {},
});
export default ModalContext;

interface Props {
  allModals: { name: string; component: FC<any> }[];
}

const typePaperStyles = { width: "100vw", maxWidth: 500 };

export const ModalProvider: React.FC<Props> = ({ children, allModals }) => {
  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [options, setOptions] = React.useState<ModalOptions | undefined>({});
  const [data, setData] = React.useState(undefined);
  const Component = React.useRef<any>(undefined);

  const onClose = () => {
    setTitle("");
    setData(undefined);
  };

  const openModalManually = () => {
    setOptions({ ...options, dontOpen: false });
    options?.runOnOpen && options.runOnOpen();
  };

  return (
    <ModalContext.Provider
      value={{
        title,
        openModal: (title: string, data?: any, options?: ModalOptions) => {
          Component.current = allModals?.find((x) => x.name === title)?.component;
          setTitle(title);
          setData(data);
          setOptions(options);
        },
        closeModal: onClose,
        openModalManually,
      }}>
      <Dialog
        open={!!title}
        className={classes.root}
        maxWidth={"md"}
        BackdropProps={{ invisible: options?.dontOpen ? true : false }}
        PaperProps={{ style: options?.type ? typePaperStyles : { display: options?.dontOpen ? "none" : "block" } }}>
        <DialogTitle sx={{ pr: 5 }}>
          {!(options?.hideTitle || options?.type) && title}
          {!options?.hideCloseBtn ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              size="small"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.primary.main,
                background: "none",
              }}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>

        <DialogContent>
          {!options?.type && Component.current && (
            <Component.current data={data} closeModal={onClose} openModal={openModalManually} />
          )}
          {options?.type === "success" && (
            <div className={classes.typeDiv}>
              <img src={""} alt="success" width="100px" />
              <Typography variant="h5" style={{ fontWeight: 600, marginTop: 20 }} align="center">
                {title}
              </Typography>
            </div>
          )}
          {options?.type === "error" && (
            <div className={classes.typeDiv}>
              <img src={""} alt="error" width="100px" />
              <Typography variant="h5" style={{ fontWeight: 600, marginTop: 20 }} align="center">
                {title}
              </Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};
