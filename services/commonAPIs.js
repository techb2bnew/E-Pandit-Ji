import { callAstrologyApi } from "./astrologyClient";

export function getAstroDetails(payload) {
  return callAstrologyApi("astro_details", payload);
}

export function getPlanets(payload) {
  return callAstrologyApi("planets", payload);
}

export function getgeoDetails(payload) {
  return callAstrologyApi("geo_details", payload);
}