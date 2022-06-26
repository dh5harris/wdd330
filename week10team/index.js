import { getJSON, getLocation } from "./utilities.js";

const baseURL ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// let latitude = '';
// let longitude = '';

function getQuakesForLocation() {
  //call the getLocation function to get the lat/long
  const latLong = getLocation()
  let latitude = '';
  let longitude = '';
  let geoURL = '';
  latLong.then(
    object => {console.log(object),
    //console.log(object.coords.latitude),
    latitude = object.coords.latitude,
    longitude = object.coords.longitude,
    geoURL = baseURL + `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`,
    console.log(geoURL)
  }
)

  // console.log(latLong)
  // const latitude = latLong.coords.latitude;
  // const longitude = latLong.coords.longitude;
  //use that information to build out the correct URL
  console.log(latitude);
  
 // add location information here
  // use the url to request the correct quakes

  // log out the quakes for now.

}

getQuakesForLocation();