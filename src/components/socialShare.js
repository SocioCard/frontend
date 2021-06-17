import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { SocialIcon } from "react-social-icons";
import { GridList, GridListTile } from "@material-ui/core";

export default function SocialShare() {
  const url = document.location.href;
  const title = "Here is the link for my OneLink account";
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(
      function () {
        alert("Copied to clickboard");
      },
      function (err) {
        alert("An error has occured");
      }
    );
    handleClose();
  };
  const whatsappText = url;

  return (
    <div>
      <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
        Share
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Share Via</DialogTitle>
        <DialogContent>
          <GridList cols={3} cellHeight={60}>
            <GridListTile>
              <a href="#">
                <SocialIcon network="facebook" />
              </a>
            </GridListTile>
            <GridListTile>
              <a
                href={`https://api.whatsapp.com/send?text=${whatsappText}`}
                target="_blank"
              >
                <SocialIcon network="whatsapp" />
              </a>
            </GridListTile>
            <GridListTile>
              <a
                href={`https://www.twitter.com/intent/tweet?text=${title}&url=${url}&hashtags=OneLink`}
                // target="_blank"
              >
                <SocialIcon network="twitter" />
              </a>
            </GridListTile>
            <GridListTile>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                target="_blank"
              >
                <SocialIcon network="linkedin" />
              </a>
            </GridListTile>
            <GridListTile>
              <a
                href={`https://reddit.com/submit?url=${url}&title=${title}`}
                target="_blank"
              >
                <SocialIcon network="reddit" />
              </a>
            </GridListTile>
            <GridListTile>
              <a
                href={`https://telegram.me/share/url?url=${url}&text=${title}`}
                target="_blank"
              >
                <SocialIcon network="telegram" />
              </a>
            </GridListTile>
          </GridList>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCopy} color="secondary">
            Copy url
          </Button>
          <Button
            onClick={handleClose}
            color="secondary"
            variant="contained"
            autoFocus
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}