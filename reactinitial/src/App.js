import React, { useEffect, useState } from "react"
import Character from "./components/Character";
import LoadingMask from "./components/LoadingMask";
import Subscription from "./components/Subscription";

const App = () => {

  //----------useState for data----------
  const [seriesData, setSeriesData] = useState(null);

  //----------useEffect for fetching data----------
  useEffect(() => {
    fetchSeriesData();
  }, []);

  //----------FETCH DATA----------
  async function fetchSeriesData() {
    const response = await fetch("https://demoapi.com/api/series/howimetyourmother");
    const series = await response.json();

    setSeriesData(series);
  }

  console.log(seriesData)
  /*console.log(seriesData[0].details)*/

   //------------- useState for showing form ----
  const [showForm, setShowForm] = useState(false);

  //------------- useState for posting response ----
  const [isSent, setIsSent ] = useState(false);
  
  //------------- useEffect for setTimeout ----
  useEffect(() => {
    if(isSent){
      const timer = setTimeout(() => {
        setShowForm(false);
      }, 5000)
      return () => {
      clearTimeout(timer);
    }   
    } else {
      const timer = setTimeout(() => {
        setShowForm(true)
      }, 10000)
      return () => {
        clearTimeout(timer)
      };
    }
  }, [isSent]);
  
  return (
    <>
      <h1>Series Api</h1>
      {seriesData ? seriesData.map((character) => <Character key={character.name} name={character.name} details={character.details}/>) : <LoadingMask />}
      {showForm && <Subscription isSent={isSent} setIsSent={setIsSent} />}
    </>
  )
}

export default App
