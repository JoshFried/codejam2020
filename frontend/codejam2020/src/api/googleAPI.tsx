import axios from "axios";

const MAP_KEY = "AIzaSyBb9RgCjYuTLg2yoXkHcRNjlwkmLm9iuZc";

const fetchLocationData = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("lat", position.coords.latitude);
    console.log("long", position.coords.longitude);
    //store data to a variable and post to database

    const locationData = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      name: "",
      place_id: "",
      types: [],
    };

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=${position.coords.latitude},${position.coords.longitude}&radius=10000&key=${MAP_KEY}`
      )
      .then((response) => {
        const mapData = response.data.results;
        const locationDataList = mapData.map((result) => {
          locationData.lat = result.geometry.location.lat;
          locationData.lng = result.geometry.location.lng;
          locationData.name = result.name;
          locationData.place_id = result.place_id;
          locationData.types = result.types;
        });
        locationData.lat = mapData.geometry.location.lat;
        locationData.lng = mapData.geometry.location.lng;
        locationData.name = mapData.name;
        locationData.place_id = mapData.place_id;
        locationData.types = mapData.types;
      })
      .catch((error) => console.log(error));

    axios.post("/", locationData).then((response) => {
      console.log(response);
    });
  });
};

export default fetchLocationData;
