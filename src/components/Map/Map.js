import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import mapboxgl from "mapbox-gl";
import { isProfileFilled } from "../../modules/Profile";
import { getCords } from "../../modules/Order";
import { Link } from "react-router-dom";
import styles from "./styles";
import settings from "../../constans/settings";
import langs from "./langs";

class Map extends PureComponent {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = settings.map.API_KEY;
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: settings.map.style,
      center: settings.map.defCenter,
      zoom: settings.map.defZoom
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  clearMap = () => {
    const mapLayer = this.map.getLayer("route");

    if (mapLayer) {
      this.map.removeLayer("route");
      this.map.removeSource("route");
    }
  };

  updateMap = cords => {
    this.clearMap();

    this.map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: cords
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": settings.map.lineColor,
        "line-width": settings.map.lineWidth
      }
    });
    this.map.flyTo({ center: cords[0], zoom: settings.map.defZoom });
  };

  render() {
    const { classes, isProfileFilled } = this.props;

    return (
      <Box position="relative" zIndex="-10">
        <Box className={classes.map} ref={this.mapContainer} />
        <Box className={classes.content}>
          {!isProfileFilled}
        </Box>
      </Box>
    );
  }
}

export default connect(
  state => ({
    isProfileFilled: isProfileFilled(state),
  }),
  {}
)(withStyles(styles)(Map));
