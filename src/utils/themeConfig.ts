import { createMuiTheme } from "@material-ui/core/styles";
export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#946ab0",
      contrastText: "#fff",
      dark: "#fff",
    },
    secondary: {
      light: "#292d34",
      dark: "#946ab0",
      main: "#fff",
      contrastText: "#946ab0",
    },
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        "&:hover": {
          color: "#fff",
        },
      },
      containedPrimary: {
        "&:hover, &:focus": {
          color: "#946ab0",
        },
      },
    },
  },
});
