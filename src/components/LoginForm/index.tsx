import React from "react";
import {
  Box,
  Button,
  Dialog,
  // DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  makeStyles,
} from "@material-ui/core";

import chatIcon from "../../assets/images/chat.svg";
import fbIcon from "../../assets/images/facebook.svg";
import googleIcon from "../../assets/images/google.svg";
interface Iprops {
  open: boolean;
  handleClose: any;
}

const useStyles = makeStyles((theme) => ({
  dialog: {
    // display: "flex",
    // justifyContent: "center",
    // alignContent: "center",
    // flexFlow: "culumn",
    width: "400px",
    height: "600px",
    overflow: "hidden",
    textAlign: "center",
    userSelect: "none",
    padding: "1rem",
  },
  dialogContent: {
    // display: "flex",
    // justifyContent: "center",
    // alignContent: "center",
  },
  loginButton: {
    borderRadius: "100px",
    marginBottom: "1rem",
    padding: "16px",
    position: "relative",
  },
  subIcon: {
    width: "24px",
    height: "24px",
    position: "absolute",
    left: "14px",
  },
  subIconImage: {
    width: "100%",
    height: "100%",
  },
}));

const LoginForm: React.FC<Iprops> = (props: Iprops) => {
  const classes = useStyles();
  const { open, handleClose } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box className={classes.dialog}>
        <Box>Logo</Box>
        <DialogTitle id="alert-dialog-title">GET STARTED</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText id="alert-dialog-description">
            By clicking Log In, you agree to our Terms. Learn how we process
            your data in our Privacy Policy and Cookie Policy.
          </DialogContentText>
        </DialogContent>
        <Box width={400} height={600} className={classes.dialogContent}>
          <Grid item xs={12}>
            <Button
              className={classes.loginButton}
              fullWidth
              variant="outlined"
            >
              <Box className={classes.subIcon}>
                <img
                  className={classes.subIconImage}
                  src={googleIcon}
                  alt="google logo"
                />
              </Box>
              Log in with Goole
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.loginButton}
              fullWidth
              variant="outlined"
            >
              <Box className={classes.subIcon}>
                <img
                  className={classes.subIconImage}
                  src={fbIcon}
                  alt="facebook logo"
                />
              </Box>
              Log in with Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.loginButton}
              fullWidth
              variant="outlined"
            >
              <Box className={classes.subIcon}>
                <img
                  className={classes.subIconImage}
                  src={chatIcon}
                  alt="phone number message"
                />
              </Box>
              Log in with Phone number
            </Button>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};
export default LoginForm;
