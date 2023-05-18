import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useParams } from 'react-router-dom';

const Player = () => {

    const {musicid} = useParams();



  return (
    <div>
        <ReactJkMusicPlayer audioLists={[{ src: 'ground_truth.wav' }]} />
    </div>
  )
}

export default Player