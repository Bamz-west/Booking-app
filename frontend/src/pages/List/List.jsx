import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "./list.css";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);

  const [dates, setDates] = useState(location.state.dates);

  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);

  const [min, setMin] = useState(undefined);

  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(`/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

  const handleClick = () => {
    reFetch();
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>

            <div className="listSearchItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            
            <div className="listSearchItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && 
                <DateRange 
                  onChange={item => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              }
            </div>

            <div className="listSearchItem">
              <label htmlFor="">Options</label>

              <div className="listSearchOptions">
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e => setMin(e.target.value)} className="listSearchOptionInput" />
                </div>
                
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e => setMax(e.target.value)} className="listSearchOptionInput" />
                </div>
                
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="listSearchOptionInput" placeholder={options.adult} />
                </div>
                
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="listSearchOptionInput" placeholder={options.children} />
                </div>
                
                <div className="listSearchOptionItem">
                  <span className="listSearchOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="listSearchOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>

            <button onClick={handleClick}>Search</button>
          </div>

          <div className="listResult">
            {loading ? "Loading" :
              <>
                {data.map(item => (
                  <SearchItem key={item._id} item={item} />
                ))}
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;