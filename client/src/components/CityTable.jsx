const CityTable = (props) => {
    const cities = props.cities;
    return(
        <>
        <h3>Cities</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contry</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => (
                        <tr key={city.ID}>
                            <td>{city.Name}</td>
                            <td>{city.CountryCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </>
    )
}

export default CityTable;