import { data } from "./cities.js";

export function filterMore100k() {
  const citiesMore100k = data.filter((city) => city.population > 100000);
  console.log("More 100k", citiesMore100k);
}
export function filterLess100k() {
  const citiesLess100k = data.filter((city) => city.population < 100000);
  console.log("Less 100K :", citiesLess100k);
}
