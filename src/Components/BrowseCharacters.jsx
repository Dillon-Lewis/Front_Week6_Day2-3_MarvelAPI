import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BrowseCharacters = () => {
    const [heroes, setheroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchHeroes = async () => {
            try{
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=d33c0b97e209d2bad157f9fe7fd76b8f&hash=6f81279c9d2690cf7280ef207a3dc7bb')
                console.log(response.data.data.results);
                setheroes(response.data.data.results)
                setLoading(false)              
            } catch (error){
                console.log('error fetching heroes', error);
                
            }
        }

        fetchHeroes();
    }, [])

    if(loading){
        return <h3>Loading Heros!!!!!!!!!!!!!</h3>
    }

    return(
        <div>
            <h3>Heroes</h3>
            {heroes.map(hero => (
                <div key={hero.id} className="character">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        width="200" alt={hero.name}/>
                    <br/>
                    <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </div>
    )

}

export default BrowseCharacters;