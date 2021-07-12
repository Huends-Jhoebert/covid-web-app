import { numberWithCommas } from "./function.js";
import { confirmedCases } from "./main.js";
import { recoveries } from "./main.js";
import { deaths } from "./main.js";
import { dateOfUpdate } from "./main.js";
import { timeOfUpdate } from "./main.js";
import { tConvert } from "./function.js";

export async function topCovidCases() {
   try {
      const covidCases = await fetch("https://api.covid19api.com/summary");
      const respone = await covidCases.json();
      const phCases = await respone.Countries[136];
      const date = respone.Date.toString();

      console.log(date);

      confirmedCases.textContent = `${numberWithCommas(
         phCases.TotalConfirmed
      )}`;
      recoveries.textContent = `${numberWithCommas(phCases.TotalRecovered)}`;
      deaths.textContent = `${numberWithCommas(phCases.TotalDeaths)}`;
      dateOfUpdate.textContent = `${date.slice(0, 10)}`;

      timeOfUpdate.textContent = `${tConvert(date.slice(11, 19))}`;

      //   console.log(respone.data[0].deaths + respone.data[0].deaths);

      // console.log(respone.data);
      // console.log(respone.last_update);
   } catch (err) {
      //   todos.innerHTML = err;
   }
}

// topCovidCases();
