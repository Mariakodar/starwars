// index.js
const baseUrl = 'https://swapi.dev/api/';
const obiQuery = 'people/10/';
const nameQuery = 'people/?search=';
const planetQuery = 'planets/?search=';
const outputUno = document.querySelector('.output-uno');
const outputDos = document.querySelector('.output-dos');
const outputTres = document.querySelector('.output-tres');
const buttonPro = document.querySelector('#get-pro-but');
const buttonOwnPro = document.querySelector('#get-own-pro-but');
const buttonPlanet = document.querySelector('#get-planet-but');
const listProfileInfo = document.querySelector('.profile-info');
const listOwnInfo = document.querySelector('.profile-info-own');
const listPlanetInfo = document.querySelector('.planet-info');
const searchProfile = document.querySelector('#input-profile');
const searchPlanet = document.querySelector('#input-planet');

export {
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
};
