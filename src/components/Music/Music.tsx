import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import bgm from '../../music.mp3';

const Player = () => {
    const [audio] = useState(new Audio("https://cf-media.sndcdn.com/tQW5TIfyFmF2.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdFFXNVRJZnlGbUYyLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjUzMDI4Nzg1fX19XX0_&Signature=TVcM0kWCztv3XsJxQRbXA1ArUawcFmyTKgLaMrJDqbYb1yVgyV-LPVLa21POQhoNdQvOY3lRcRDKXU0vpLGVsq~7xUbeerWcPwe7Mbzb7ZYwmoeQ8N-uJwWl-5VCu82e09sXsDQ~Zk7vwthb3E16dbXD157Os6FCe6amwO9jgSkV91CQG9g1CBuw34tF4~Im3GhAu6Z0R0eU3D6ozFIghyhsBemBkul6OFLSvu-d8exndettRn8v6wAznWPxL~DAnMiZfMdc-wY8VtuFaGMBUAofQRIpoOFmsjcb5bh94SOnL-PWMhIQixPlqVKmccWTR~OhC8j6h0RkoDj5HbdtLg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"));
    const [musicStatus, setMusicStatus] = useState<boolean>(false); // can't auto play due to browser auto play policy
    const toggleMusic = (event: React.MouseEvent<HTMLElement>) => {
        setMusicStatus(!musicStatus);
    };
    useEffect(() => {
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play();
      })
        // audio.addEventListener('ended', () => {setMusicStatus(true)});
        // return () => {
        //   audio.removeEventListener('ended', () => setMusicStatus(true));
        // };
    }, []);

    useEffect(() => {
        musicStatus ? audio.play() : audio.pause();
    }, [musicStatus]);

    return (
        <>
            <IconButton onClick={toggleMusic} sx={{ p: 0 }}>
                {musicStatus ? <MusicNoteIcon /> : <MusicOffIcon /> }
                </IconButton>
        </>
    );
};

export default Player;