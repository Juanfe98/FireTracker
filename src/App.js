import Map from "./components/Map.js";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      ).catch((error) => {
        console.log(error);
      });

      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);
  return (
    <div>
      <h1>Fire Tracker App</h1>
      {loading ? <Loader /> : <Map eventData={eventData} />}
    </div>
  );
}

export default App;
