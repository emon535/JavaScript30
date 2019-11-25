(function getConsolePrint() {
    console.log("Hello from Console")
})();

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const promise = fetch(endpoint);
console.log(promise);

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


// console.log(cities)

function findMatches(searchWord, cities) {
    let regexPattern = RegExp(searchWord, 'gi');

    return cities.filter(place => {
        return place.city.match(regexPattern) || place.state.match(regexPattern);

    });
}




const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('change', displayMatches);


function displayMatches() {
    console.log(findMatches(this.value, cities));
    const matchedCityArray = findMatches(this.value, cities);
    console.log(matchedCityArray);

    const html = matchedCityArray.map(places => {
        return `
            <li>
                <span class="name">${places.city}, ${places.state} </span>
                <span>${places.population}</span>
            </li>
        `;
    }).join("");
    suggestions.innerHTML = html;

}
