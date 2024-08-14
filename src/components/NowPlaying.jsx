const NowPlaying = ({ play, tracks }) => {
    const playedTrack = tracks.find((track) => track._id === play);
    return (
        <div>
            <h2>Now Playing</h2>
            {playedTrack ? (
                <>
                    <h3><span style={{ color: '#FFA07A' }}>Title</span> {playedTrack.title} </h3>
                    <h3><span style={{ color: '#FFA07A' }}>Artist</span> {playedTrack.artist}</h3>
                </>
            ) : (
                <h3>No track is currently playing</h3>
            )}
        </div>
    );
}
export default NowPlaying;
