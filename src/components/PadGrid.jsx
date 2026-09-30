import songBank from "./song-box";

function PadGrid() {
    const playSong = (song) => {
        const audio = new Audio(song.audio);
        audio.play();
    };

    return (
        <div className="pad-grid">
            {songBank.map((song) => (
                <button key={song.key} onClick={() => playSong(song)}>
                    {song.name}
                </button>
            ))}
        
        </div>
        
    );
}

export default PadGrid;