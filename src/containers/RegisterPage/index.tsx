import React, { useState, useEffect, useCallback, memo } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "../../components/CustomTextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import moment, { Moment } from "moment";
import CustomDatePicker from "../../components/CustomDatePicker";
import { createStructuredSelector } from "reselect";
import { register, cleanup } from "./actions";
import makeSelectedRegisterPage from "./selectors";
import { connect } from "react-redux";
import { compose, Dispatch, AnyAction } from "redux";
import { InitialState } from "./reducer";
import { History } from "history";
import saga from "./saga";
import reducer from "./reducer";
import { useInjectReducer } from "../../utils/injectReducer";
import { useInjectSaga } from "../../utils/injectSaga";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface Iprops {
  onRegister: Function;
  register: InitialState;
  onCleanup: Function;
  history: History;
}

const SignUp: React.FC<Iprops> = (props: Iprops) => {
  useInjectReducer({ key: "registerPage", reducer });
  useInjectSaga({ key: "registerPage", saga });
  const { onRegister, register, onCleanup, history } = props;
  const { registerSuccess, responseData } = register;
  useEffect(() => {
    return () => {
      onCleanup();
    };
  }, []);
  useEffect(() => {
    if (registerSuccess === true) {
      history.push("/login", responseData);
    }
  }, [registerSuccess, history, responseData]);
  // console.log(props);

  const [body, setBody] = useState({
    username: "",
    password: "",
    birthDate: moment().subtract(1, "d"),
    firstName: "",
    lastName: "",
  });
  const classes = useStyles();

  const handleChangDate = useCallback(
    (date: Moment) => {
      setBody({
        ...body,
        birthDate: date,
      });
    },
    [body]
  );
  // const handleChangeText = useCallback(
  //   (value, varName) => {
  //     setBody({
  //       ...body,
  //       [varName]: value,
  //     });
  //   },
  //   [body]
  // );

  const handleSave = () => {
    const newBody = {
      username: body.username,
      password: body.password,
      birthDate: body.birthDate && body.birthDate.valueOf(),
      firstName: body.firstName,
      lastName: body.lastName,
    };
    onRegister(newBody);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              value={body.firstName}
              onChange={(e: any) =>
                setBody({ ...body, firstName: e.target.value })
              }
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              value={body.lastName}
              label="Last Name"
              onChange={(e: any) =>
                setBody({ ...body, lastName: e.target.value })
              }
              name="lastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              type="email"
              value={body.username}
              onChange={(e: any) =>
                setBody({ ...body, username: e.target.value })
              }
              label="Email Address"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomDatePicker
              // variant="outlined"
              label="Birth Date"
              maxDate={moment()}
              value={body.birthDate}
              onChangeDate={handleChangDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              value={body.password}
              required
              onChange={(e: any) =>
                setBody({ ...body, password: e.target.value })
              }
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I agree with all Terms, Data Policy and Cookie Policy.."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSave}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/login">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  register: makeSelectedRegisterPage(),
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    onRegister: (body: object) => dispatch(register(body)),
    onCleanup: () => dispatch(cleanup()),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// export default compose(memo, withConnect, withStyles())(SignUp);
export default compose(withConnect)(SignUp);
