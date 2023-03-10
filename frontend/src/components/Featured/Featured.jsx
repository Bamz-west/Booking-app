import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

    const { data, loading, error } = useFetch("/api/hotels/countByCity?cities=Lagos,Abuja,London");

    return (
        <div className="featured">
            {loading ? (
                "Loading... please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=800" alt="featured" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Lagos</h1>
                            <h2>{data[0]} Properties</h2>
                        </div>
                    </div>
                    
                    <div className="featuredItem">
                        <img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800" alt="featured" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Berlin</h1>
                            <h2>{data[1]} Properties</h2>
                        </div>
                    </div>
                    
                    <div className="featuredItem">
                        <img src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=800" alt="featured" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>London</h1>
                            <h2>{data[2]} Properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Featured;