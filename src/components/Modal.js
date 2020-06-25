import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Modal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        //variant="outlined"
        color="primary"
        className="button m-1"
        onClick={handleClickOpen}
      >
        <span className="button--item">{props.line}</span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Travel plan"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.destination}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div onClick={handleClose} className="btn btn-outline-danger">
            Close
          </div>
          <div
            onClick={handleClose}
            className="btn btn-outline-secondary"
            autoFocus
          >
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Veiw more
            </a>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
