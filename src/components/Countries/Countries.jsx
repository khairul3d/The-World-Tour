import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countres.css';


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState ([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=> setCountries(data));
    },[]);

    const handleVisitedCountry = country => {
        console.log('click hansle button')
        const newVisitedCountrues = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountrues)
        
    }
    
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>      
           <h5>Visited Country:{visitedCountries.length}</h5>
           <ul>

           </ul>
            </div>

           <div className="Countres">
          
           {
            countries.map(country=> 
            <Country key={country.cca3} 
            handleVisitedCountry={handleVisitedCountry}
                country={country}></Country>)
        }
           </div>
        </div>
     
    );
};

export default Countries;