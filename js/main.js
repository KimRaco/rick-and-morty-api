
import { getCharacters } from "./api.js"
import { createCard } from "./card.js"




const printCards = async () => {
    let wrapper = document.getElementById("card-wrapper");
    let characters = await getCharacters()
    let arrayCharacters = characters.results
    console.log(arrayCharacters)
    arrayCharacters.forEach((item) => {
        let { image, name, origin, id } = item
        console.log(image, id)
        let col = document.createElement("div");
        col.classList.add("col-xs-12", "col-sm-6", "col-md-3", "mb-4");
        col.appendChild(createCard(image, name, origin.name, id));
        wrapper.append(col);
    });
};
printCards();
