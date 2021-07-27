import { numberWithCommas, tConvert } from "./function.js";
import {
   confirmedCases,
   recoveries,
   deaths,
   dateOfUpdate,
   timeOfUpdate,
   ncrCases,
   ncrRecoveries,
   ncrDeaths,
   loader,
   openPage,
   calabarzonCases,
   calabarzonRecoveries,
   calabarzonDeaths,
   centralLuzonCases,
   centralLuzonRecoveries,
   centralLuzonDeaths,
   centralVisayasCases,
   centralVisayasRecoveries,
   centralVisayasDeaths,
   westernVisayasCases,
   westernVisayasRecoveries,
   westernVisayasDeaths,
   davaoCases,
   davaoDeaths,
   davaoRecoveries,
   carCases,
   carDeaths,
   carRecoveries,
   esternVisayasCases,
   esternVisayasRecoveries,
   esternVisayasDeaths,
   cagayanValleyCases,
   cagayanValleyRecoveries,
   cagayanValleyDeaths,
} from "./main.js";

export async function covidCases() {
   try {
      // document.body.style.display = "none";
      // loader.style.display = "block";
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
      loader.style.display = "none";
      openPage();
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
         } else if (element.region == "region iv-a: calabarzon") {
            calabarzonCases.textContent = `${element.cases}`;
            calabarzonRecoveries.textContent = `${element.recovered}`;
            calabarzonDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "region iii: central luzon") {
            centralLuzonCases.textContent = `${element.cases}`;
            centralLuzonRecoveries.textContent = `${element.recovered}`;
            centralLuzonDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "region vii: central visayas") {
            centralVisayasCases.textContent = `${element.cases}`;
            centralVisayasRecoveries.textContent = `${element.recovered}`;
            centralVisayasDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "region vi: western visayas") {
            westernVisayasCases.textContent = `${element.cases}`;
            westernVisayasRecoveries.textContent = `${element.recovered}`;
            westernVisayasDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "region xi: davao region") {
            davaoCases.textContent = `${element.cases}`;
            davaoRecoveries.textContent = `${element.recovered}`;
            davaoDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "car") {
            carCases.textContent = `${element.cases}`;
            carRecoveries.textContent = `${element.recovered}`;
            carDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "region viii: eastern visayas") {
            esternVisayasCases.textContent = `${element.cases}`;
            esternVisayasRecoveries.textContent = `${element.recovered}`;
            esternVisayasDeaths.textContent = `${element.deaths}`;
         } else if (element.region == "region ii: cagayan valley") {
            cagayanValleyCases.textContent = `${element.cases}`;
            cagayanValleyRecoveries.textContent = `${element.recovered}`;
            cagayanValleyDeaths.textContent = `${element.deaths}`;
         }
      });
      console.log(topRegionData);
   } catch (err) {
      prompt(err);
   }
}
