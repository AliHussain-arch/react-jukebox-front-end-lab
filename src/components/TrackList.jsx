const TrackList = ({ index, setTracks, tracks, deleteTrack, setUpdate, setformDisplay, setPlay}) => {
  
  const updateOnClick = async () => {
    const trackData = await index();
    setTracks(trackData);
  }

  return (
    <ul>
      {tracks.map((track) => (
        <li key={track._id}>
          <div className="trackHeader">{track.title} by <span className="trackArtist">{track.artist}</span></div>
          <div className="trackControls">
            <button onClick={setPlay(track._id)}>Play</button> 
             <button onClick={() => { setUpdate(track._id); setformDisplay(true); updateOnClick(); }}>Edit</button>
             <button onClick={() => { deleteTrack(track._id); updateOnClick(); }}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TrackList;