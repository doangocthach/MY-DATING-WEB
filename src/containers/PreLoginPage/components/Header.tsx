import React from "react";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import LoginForm from '../../../components/LoginForm'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface Iprops {
  openLoginForm: boolean;
  handleCloseLoginForm: Function;
  handleOpenLoginForm: any;
}
const Header: React.FC<Iprops> = (props: Iprops) => {
  const { handleCloseLoginForm, openLoginForm, handleOpenLoginForm } = props;
  const classes = useStyles();
  return (
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        Icon
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleOpenLoginForm}>
        Login
      </Button>
      <IconButton
        edge="end"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        size="medium"
      >
        <Menu />
      </IconButton>
      <LoginForm handleClose={handleCloseLoginForm} open={openLoginForm} />
    </Toolbar>
  );
};
export default Header;
