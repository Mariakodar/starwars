import {
    baseUrl,
    obiQuery,
    nameQuery,
    planetQuery,
    outputUno,
    outputDos,
    outputTres,
    buttonPro,
    buttonOwnPro,
    buttonPlanet,
    listProfileInfo,
    listOwnInfo,
    listPlanetInfo,
    searchProfile,
    searchPlanet
} from './index.js';

buttonPro.addEventListener('click', getProfile);


async function getProfile() {
   const fullUrl = baseUrl + obiQuery;
    console.log('fetching data from: ' + fullUrl);

    outputUno.innerText = '';  
    listProfileInfo.innerText = '';

    const response = await fetch(fullUrl);
    const data = await response.json();
    console.log(data);

    const profileInfo = [];
    if (data.name) profileInfo.push('Name: ' + data.name);
    if (data.height) profileInfo.push('Height: ' + data.height);
    if (data.mass) profileInfo.push('Mass: ' + data.mass);
    if (data.gender) profileInfo.push('Gender: ' + data.gender);
    if (data.hair_color) profileInfo.push('Haircolor: ' + data.hair_color)


        profileInfo.forEach(info => {
            const listItem = document.createElement('li');
            listItem.innerText = info;
            listProfileInfo.appendChild(listItem);
        });
}
buttonOwnPro.addEventListener('click', getOwnProfile);
searchProfile.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getOwnProfile();
    }
});

async function getOwnProfile() {    
    const profileOwnName = searchProfile.value;    
    const profileOwnUrl = baseUrl + nameQuery + profileOwnName; 
    console.log('fetching data fron: ' + profileOwnUrl);

    outputDos.innerText = ''; 
    listOwnInfo.innerHTML = '';

    const response = await fetch(profileOwnUrl);    
    const data = await response.json();
    console.log(data);  

    if (data.results.length > 0) {
        const ownInfo = data.results[0]; 
        const profileInfoOwn = [
            'Name: ' + ownInfo.name,
            'Height: ' + ownInfo.height,
            'Mass: ' + ownInfo.mass,
            'Gender: ' + ownInfo.gender,
            'Hair color: ' + ownInfo.hair_color
        ]
        profileInfoOwn.forEach(info => {
            const listItem = document.createElement('li');
            listItem.innerText = info;
            listOwnInfo.appendChild(listItem);
        });
    } else {
        outputDos.innerText = 'No character found';
    }
}
buttonPlanet.addEventListener('click', getPlanet);
searchPlanet.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getPlanet();
    }
});

async function getPlanet() {    
    const planetName = searchPlanet.value;   
    const planetUrl = baseUrl + planetQuery + planetName; 
    console.log('fetching data from: ' + planetUrl);

    outputTres.innerText = ''; 
    listPlanetInfo.innerHTML = '';

    const response = await fetch(planetUrl);    
    const data = await response.json();
    console.log(data);  

    if (data.results.length > 0) {
        const planetInfo = data.results[0]; 
        const planetDetails = [
            'Name: ' + planetInfo.name,
            'Rotation Period: ' + planetInfo.rotation_period,
            'Orbital Period: ' + planetInfo.orbital_period,
            'Diameter: ' + planetInfo.diameter,
            'Climate: ' + planetInfo.climate,
            'Gravity: ' + planetInfo.gravity,
            'Terrain: ' + planetInfo.terrain,
            'Population: ' + planetInfo.population
        ];
        planetDetails.forEach(info => {
            const listItem = document.createElement('li');
            listItem.innerText = info;
            listPlanetInfo.appendChild(listItem);
        });
    } else {
        outputTres.innerText = 'No planet found';
    }
}