import { covidCases } from "./fetchapi.js";
import { topCovidCases } from "./fetchapi.js";

export var confirmedCases = document.querySelector(".c-case"); //confirmed cases numbers
export var recoveries = document.querySelector(".c-rec"); //number of recoveries cases h1
export var deaths = document.querySelector(".c-de"); //number of deaths  h1
export var dateOfUpdate = document.querySelector(".date"); //philippines covid cases date of update
export var timeOfUpdate = document.querySelector(".time"); //philippines covid cases time of update
export var ncrCases = document.querySelector(".ncr-cases"); //ncr number of cases
export var ncrRecoveries = document.querySelector(".ncr-recoveries"); //ncr number of recoveries
export var ncrDeaths = document.querySelector(".ncr-deaths"); //ncr number of recoveries
export var loader = document.querySelector(".loader"); //loading container
export var header = document.getElementById("home"); //header
export var main = document.querySelector(".main"); //main
export var footer = document.querySelector(".footer"); //footer
export var calabarzonCases = document.querySelector(".calabarzon-cases"); //calabarzon number of cases
export var calabarzonRecoveries = document.querySelector(
   ".calabarzon-recoveries"
); //calabarzon number of recoveries
export var calabarzonDeaths = document.querySelector(".calabarzon-deaths"); //calabarzon number of recoveries

export var centralLuzonCases = document.querySelector(".central-luzon-cases"); //central luzon number of cases
export var centralLuzonRecoveries = document.querySelector(
   ".central-luzon-recoveries"
); //central luzon number of recoveries
export var centralLuzonDeaths = document.querySelector(".central-luzon-deaths"); //central luzon number of recoveries

export var centralVisayasCases = document.querySelector(
   ".central-visayas-cases"
); //central visayas number of cases
export var centralVisayasRecoveries = document.querySelector(
   ".central-visayas-recoveries"
); //central viasayas number of recoveries
export var centralVisayasDeaths = document.querySelector(
   ".central-visayas-deaths"
); //central visayas number of recoveries

export var westernVisayasCases = document.querySelector(
   ".western-visayas-cases"
); //western visayas number of cases
export var westernVisayasRecoveries = document.querySelector(
   ".western-visayas-recoveries"
); //western viasayas number of recoveries
export var westernVisayasDeaths = document.querySelector(
   ".western-visayas-deaths"
); //western visayas number of recoveries

export var davaoCases = document.querySelector(".davao-cases"); //davao number of cases
export var davaoRecoveries = document.querySelector(".davao-recoveries"); //davao number of recoveries
export var davaoDeaths = document.querySelector(".davao-deaths"); //davao number of recoveries

export var carCases = document.querySelector(".car-cases"); //car region number of cases
export var carRecoveries = document.querySelector(".car-recoveries"); //car region number of recoveries
export var carDeaths = document.querySelector(".car-deaths"); //car region number of recoveries

export var esternVisayasCases = document.querySelector(".estern-visayas-cases"); //estern visayas number of cases
export var esternVisayasRecoveries = document.querySelector(
   ".estern-visayas-recoveries"
); //estern visayas number of recoveries
export var esternVisayasDeaths = document.querySelector(
   ".estern-visayas-deaths"
); //estern visayas number of recoveries

export var cagayanValleyCases = document.querySelector(".cagayan-cases"); //cagayan valley number of cases
export var cagayanValleyRecoveries = document.querySelector(
   ".cagayan-recoveries"
); //cagayan valley number of recoveries
export var cagayanValleyDeaths = document.querySelector(".cagayan-deaths"); //cagayan number of recoveries

covidCases();
topCovidCases();

//when the page is not done of getting the data from api the display is non
header.style.display = "none";
main.style.display = "none";
footer.style.display = "none";
//show pages after loading
export function openPage() {
   header.style.display = "block";
   main.style.display = "block";
   footer.style.display = "block";
}
