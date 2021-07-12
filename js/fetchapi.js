import { numberWithCommas } from "./function.js";
import { confirmedCases } from "./main.js";
import { recoveries } from "./main.js";
import { deaths } from "./main.js";
import { dateOfUpdate } from "./main.js";
import { timeOfUpdate } from "./main.js";
import { tConvert } from "./function.js";
import { ncrCases } from "./main.js";
import { ncrRecoveries } from "./main.js";
import { ncrDeaths } from "./main.js";

export async function covidCases() {
   try {
      const covidCases = await fetch("https://api.covid19api.com/summary");
      const respone = await covidCases.json();
      const phCases = await respone.Countries[136];
      const date = respone.Date.toString();

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
      prompt(err);
   }
}

// topregion with covid cases
export async function topCovidCases() {
   try {
      const topRegion = await fetch(
         "https://covid19-api-philippines.herokuapp.com/api/top-regions"
      );

      const topRegionData = await topRegion.json();

      //   console.log(`${topRegionData.data[0].cases}`);

      topRegionData.data.forEach((element) => {
         if (element.region == "ncr") {
            ncrCases.textContent = `${element.cases}`;
            ncrRecoveries.textContent = `${element.recovered}`;
            ncrDeaths.textContent = `${element.deaths}`;
         }
      });
      console.log(topRegionData);
   } catch (err) {}
}
