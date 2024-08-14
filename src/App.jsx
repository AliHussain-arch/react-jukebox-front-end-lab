import TrackList from "./components/TrackList";
import { index, create, updateTrack, deleteTrack } from "./services/trackService";
import { useEffect, useState } from "react";
import TrackForm from "./components/TrackForm";
// src/App.jsx

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [formDisplay, setformDisplay] = useState(false);
  const [update, setUpdate] = useState('');

  useEffect(() => {
    const fetchTracks = async () => {
      const trackData = await index();
      setTracks(trackData);
    };
    fetchTracks();
  }, []);

  function displayToggle (formDisplay){
    setUpdate('');
    formDisplay ? setformDisplay(false) : setformDisplay(true);
  }

  return (
    <>
      <button onClick={() => displayToggle(formDisplay)}>Add New Track</button>
      {formDisplay ? <TrackForm create={create} update={update} /> : null}
      {update ? <TrackForm create={create} update={update} /> : null}

      <TrackList tracks={tracks} deleteTrack={deleteTrack} setUpdate={setUpdate} setformDisplay={setformDisplay}/>
    </>
  );
};

export default App;