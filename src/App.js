import { useState, useEffect } from "react";
import Cards from "./components/Cards"
import LinearProgress from '@mui/material/LinearProgress';
import AppBar from "./components/AppBar"

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [search, setSearch] = useState('')

  const apiKey = 'niBLyJ66NAzw3zyqxbMb8fpgtCwLpwecETnq1g9H'

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?start_date=2022-01-11&end_date=2022-01-18&api_key=${apiKey}`)
      .then((r) => r.json())
      .then((data) => setNasaData(data));
  }, []);

  const searchFilter = nasaData.filter(word => 
    word.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <AppBar search={search} setSearch={setSearch} />
      {nasaData ?
        <Cards nasaData={searchFilter} /> : <LinearProgress color="success" sx={{ marginTop: '30%' }} />
      }
    </>
  );
}

export default App;
