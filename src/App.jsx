import TrackList from "./components/TrackList";
import { index, create, updateTrack, deleteTrack } from "./services/trackService";
import { useEffect, useState } from "react";
import TrackForm from "./components/TrackForm";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [formDisplay, setformDisplay] = useState(false);
  const [update, setUpdate] = useState('');
  const [play, setPlay] = useState('');

  useEffect(() => {
    const fetchTracks = async () => {
      const trackData = await index();
      setTracks(trackData);
    };
    fetchTracks();
  }, []);

  function displayToggle() {
    setUpdate('');
    setformDisplay(!formDisplay);
  }

  return (
    <>
      <button onClick={displayToggle}>Add New Track</button>
      {formDisplay ? (
        <TrackForm
          index={index}
          setTracks={setTracks}
          create={create} 
          update={update} 
          setUpdate={setUpdate} 
          updateTrack={updateTrack}
          setformDisplay={setformDisplay}
        />
      ) : null}
      <TrackList 
        index={index}
        setTracks={setTracks}
        tracks={tracks} 
        deleteTrack={deleteTrack} 
        setUpdate={setUpdate} 
        setformDisplay={setformDisplay}
        setPlay={setPlay} 
      />
      {play ? <NowPlaying tracks={tracks} play={play}/> : null}
    </>
  );
};

export default App;