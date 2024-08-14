const TrackList = ({  tracks, deleteTrack, setUpdate}) => {

  return (
    <ul>
      {tracks.map((track) => (
        <li key={track._id}>
          <div className="trackHeader">{track.title} by <span className="trackArtist">{track.artist}</span></div>
          <div className="trackControls"><button>Play</button> <button onClick={()=>{setUpdate(track._id)}}>Edit</button> <button onClick={()=>deleteTrack(track._id)}>Delete</button></div>
        </li>
      ))}
    </ul>
  );
};

export default TrackList;
