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

covidCases();
topCovidCases();
