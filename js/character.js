
import { getCharacterById } from "./api.js";

let urlParams = new URLSearchParams (window.location.search);
let characterId = urlParams.get("characterId")


const getSelectedCharacter = async () => {
  let characterData = await getCharacterById(characterId);
  let { name, image, origin, status, species, created, location} = characterData;
  console.log(characterData)
  document.getElementById("detail-image").setAttribute("src", image);
  document.getElementById("detail-title").innerText = name;
  document.getElementById("detail-description").textContent = origin.name;
  document.getElementById("detail-status").textContent = status;
  document.getElementById("detail-species").textContent = species;
  document.getElementById("detail-created").textContent = moment(created).format('MMMM Do YYYY');
  document.getElementById("detail-location").textContent = location.name;
};

getSelectedCharacter();