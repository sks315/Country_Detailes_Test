import axios from "axios"

 // calling API geting ALL countries ***************** //
export const getAll = async() =>{
        const resp =  await axios.get("https://restcountries.com/v3.1/all");
        console.log(resp.data);
        return resp

}

 // calling API for search through country name ***************** //
 export const searchCountry = async(searchInput) =>{
    return  await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`);
    // console.log(resp.data);
    // return resp

}

 // calling API for regions country only ***************** //
 export const fectRegionCountry = async(regsionInput) =>{
    const resp =  await axios.get(`https://restcountries.com/v3.1/region/${regsionInput}`);
    console.log(resp.data);
    return resp

}

 // calling API for single country ***************** //
 export const fectSingleCountry = async(countryName) =>{
    const resp =  await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    console.log(resp.data);
    return resp

}

// calling API for single country with CODE ***************** //
export const fectSingleCountryWithCode = async(countryCode) =>{
    const resp =  await axios.get(`https://restcountries.com/v2/alpha/${countryCode}`);
    console.log(resp.data);
    return resp

}