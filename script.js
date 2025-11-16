const button = document.querySelector("#getWeatherBtn");
const input = document.querySelector("#cityInput");

// took two variabels to get the button and input field from the html file.
const cityName = document.querySelector("#city-name");
const cityTime = document.querySelector("#city-time");
const cityTemp = document.querySelector("#city-temp");

async function getData(cityName) {

    //function to fetch data from the weather API and i used async because fetching data is a asynchronous operation.
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=dbff1e3ce1344d26863190701251011&q=${cityName}&aqi=yes`)

    return await promise.json(); // returning the data in json format.

}


//adding an event listener to the button so that when it is clicked, it will execute the function inside.
button.addEventListener("click", async () => {
    const value = input.value; // getting the value from the input field.
    getData(value); // calling the getData function with the city name as argument.
    const result = await getData(value); // storing the returned promise in a variable.
    //taking the data from the result and updating the html elements with the data.
    cityName.innerText = `${result.location.name},${result.location.region}-${result.location.country}`// updating the city name in the html.
    cityTime.innerText = result.location.localtime; // updating the local time in the html.
    cityTemp.innerText = result.current.temp_c + " °C"; // updating the temperature in the html.
    
});