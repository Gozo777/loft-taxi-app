import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ddd"
    },
    secondary: {
      main: "#fff"
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        "&$focused": {
          color: "#303f9f"
        },
        "&$error": {
          color: "#f44336"
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:hover:not($disabled):after": {
            borderBottom: "2px solid #303f9f"
          }
        }
      }
    }
  }
});

export default theme;
