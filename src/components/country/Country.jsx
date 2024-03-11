import { useEffect, useState } from 'react';
import './Country.css'
const  Country=({country, handleVisitedCountry})=> {
    
    const {name, flags, cca3} = country;
  const [visited, setVisited] = useState(false)
  const hanldeClick = ()=>{
   setVisited(!visited)
  }

  console.log(handleVisitedCountry)

    return (
        <div className={`Country ${visited ? 'Visited' : 'None-visited'}` }>
           <h3>Name: {name.common}</h3>
           <img src={flags.png} alt="" />
           <p>CCA Code: {cca3}</p>
           <button onClick={()=> handleVisitedCountry(country)}>Visited Country</button>
           <br />
           <button onClick={hanldeClick}>{visited ? 'Visited' : 'Going'} </button>
           {visited ?'I have a visite thise country' :'I want to visite'}
        </div>
    );
};

export default Country;