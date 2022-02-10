export const getPokemon = async (urlValue, searchValue) =>{
    const url = `https://pokeapi.co/api/v2/${urlValue}/${searchValue}`;
    const res = await fetch(url);
    if(res.status === 404){
        return undefined
    }
    const data = await res.json();
    
    return data;
}