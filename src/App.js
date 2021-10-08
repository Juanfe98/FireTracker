import Map from "./components/Map.js";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar/Navbar.js";

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
    <>
      <Navbar />
      {loading ? <Loader /> : <Map eventData={eventData} />}
    </>
  );
}

export default App;
