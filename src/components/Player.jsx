export const Player = ({fn,song}) =>{
    return(<div>
        <img src={song.artworkUrl100}></img><br/>
        <button onClick={
            ()=>{
                fn(false,null);
            }
        } 
        className='btn btn-success'>Back to songs</button>
        <p>Singer Name : {song?.artistName} {song?.trackName}</p> 
        <br/><br/>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>Your browser doesnot support the audiom element
        </audio>
    </div>)
}