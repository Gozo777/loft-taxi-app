export default theme => ({
  gridContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh"
  },
  cardContent: {
    width: "calc(100% + 24px)"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});
