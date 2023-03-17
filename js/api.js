const API_URL = "https://rickandmortyapi.com/api/character"


    let getCharacters = async () => {
        let response = await fetch (`${API_URL}`)
        let data = await response.json()
        return data;
    }


const getCharacterById = async(characterId)=>{
    let response = await fetch(`${API_URL}/${characterId}`)
    let data = await response.json()
    return data

}

export{getCharacters, getCharacterById}