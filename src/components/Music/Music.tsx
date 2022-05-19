import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import bgm from '../../music.mp3';

const Player = () => {
    const [audio] = useState(new Audio(bgm));
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