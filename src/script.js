function updateTime() {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss [<small>]A[</small>]")}`;

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("dddd MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss [<small>]A[</small>]")}`;

//Oslo
let osloElement = document.querySelector("#oslo");
let osloDateElement = osloElement.querySelector(".date");
let osloTimeElement = osloElement.querySelector(".time");
let osloTime = moment().tz("Europe/Oslo");

osloDateElement.innerHTML = osloTime.format("dddd MMMM Do YYYY");
osloTimeElement.innerHTML = `${osloTime.format("h:mm:ss [<small>]A[</small>]")}`;

}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return; // hvis ingen by er valgt

   if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  // Hent ut selve bynavnet (delen etter '/'), og erstatt '_' med mellomrom
  let cityName = cityTimeZone.split("/")[1].replace(/_/g, " ");

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
      </div>
      <div>
        <div class="time">
          ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
        </div>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);


