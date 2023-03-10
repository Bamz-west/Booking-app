import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {

    const { data, loading, error } = useFetch("/api/hotels/countByType");

    const images = [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/751266/pexels-photo-751266.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        "https://images.pexels.com/photos/2598721/pexels-photo-2598721.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];

    return (
        <div className="pList">
            {loading ? (
                "Loading..."
            ) : (
                <>
                    {data && images.map((img, i) => (
                        <div className="pListItem" key={i}>
                            <img src={img} alt="property-list" className="pListImg" />
                            <div className="pListTitles">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default PropertyList;