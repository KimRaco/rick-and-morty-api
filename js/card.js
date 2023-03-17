const createCard = (image, name, origin, id) => {
   // let {name, url} = origin
        // Create card
        let divCard = document.createElement("div");
        divCard.classList.add("card", "mb-3", "bg-dark", "border", "border-green");
        let imgCard = document.createElement("img");
        imgCard.classList.add("img-fluid", "rounded-top");
        imgCard.setAttribute("src", image)

        // card body
        let divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body")
        let cardName = document.createElement("h5")
        let pOrigin = document.createElement("p")
        pOrigin.classList.add("card-text")
        let linkDetails = document.createElement("a")
        linkDetails.classList.add("btn", "btn-info")
        linkDetails.setAttribute("href",`./character.html?characterId=${id}` ); 
        // Create content
        cardName.innerText = name 
        pOrigin.innerText = `Origin: ${origin}`
        linkDetails.innerText = 'View Details'
        
         
        
       
        // Insert content
        divCardBody.append( cardName, pOrigin, linkDetails)
        divCard.append( imgCard, divCardBody)
        return divCard
    }

    export {createCard}

