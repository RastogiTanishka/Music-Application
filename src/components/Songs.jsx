import { Song } from "./Song";

export const Songs =({fn,allsongs}) =>{
    // console.log('All songs',allsongs);
    //all songs contain data (data) -->convert -->jsx
    return(<>
        {allsongs.map((currentSong,index)=> <Song fn={fn}key={index} song ={currentSong}/>)}
    </>) ;
}