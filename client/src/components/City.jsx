import { useState, useEffect } from "react";
import CityTable from "./CityTable.jsx";

const City = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8181/api/v1/world/city")
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result);
                    setIsLoaded(true);
                    setCities(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <CityTable cities={cities}/>
                <hr/>
            </>
        );
    }
}
export default City;