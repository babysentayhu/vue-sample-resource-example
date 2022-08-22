<template>
  <div style="height: 90vh; width: 90vw;">
    <l-map
      ref="map"
      style="height: 90vh; width: 90vw;"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-draw-toolbar position="topright"></l-draw-toolbar>
     </l-map>
    <div>zoom: {{zoom}}, center: {{center}}</div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import LDrawToolbar from "vue2-leaflet-draw-toolbar";

export default {
  components: { LMap, LTileLayer, LDrawToolbar },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 5,
      center: [9.1450, 40.4897],
      bounds: null
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>