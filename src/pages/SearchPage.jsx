import { useEffect, useState } from "react";
import { Search } from "../components/Search"; 
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SerachPage = () =>{
    const [allSongs,setSongs]=useState([]);
    //Component life cycle
    const [flag,setFlag] = useState(false);
    const [song,setPayerSong]= useState(null);
    // let song =null;
    const loadSongs = async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(() =>{
        loadSongs();
    },[])

    const togglePlayer =(flag,songarg) =>{
        setPayerSong(songarg);
        setFlag(flag);
    }
    const getArtistName = async (artistName) =>{
        console.log('Rec Artist Nmae',artistName);
        setSongs(await getSongs(artistName));
    }
    const jsx = <> <Search fn={getArtistName}/>
    <Songs fn ={togglePlayer}allsongs={allSongs}/></>;
    return (<div className="container">
        <h1 className="alert alert-info text-center">Music Store</h1>
        {flag?<Player fn={togglePlayer} song ={song}/>:jsx}
        
    </div>);
}