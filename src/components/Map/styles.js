export default theme => ({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "1500px"
  },
  content: {
    position: "absolute",
    top: 0,
    left: "20px",
    margin: theme.spacing(6, 0),
    width: "40%"
  },
  paper: {
    padding: theme.spacing(3)
  }
});
