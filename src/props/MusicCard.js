import React from "react";
import "../CSS/ArtistProfile.css";
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded";
import FavoriteRounded from "@mui/icons-material/FavoriteRounded";
import app_config from "../config";

const MusicCard = ({music, setSelMusic}) => {
  const url = app_config.api_url;
  return (
    <div className="artist-recent-profile-top">
      <figure className="artist-profile-recent-created">
        <img className="cover" src={url+'/'+music.thumbnail} />
        <div>
          <a href="#">
            <PlayCircleFilledRounded onClick={e => setSelMusic(music)} />
          </a>
          <a href="#">
            <FavoriteRounded />
          </a>
        </div>
      </figure>
      <span className="artist-song-name ">{music.title}</span>
      <br />
      <span className="artist-singer-name">{music.artist.name}</span>
    </div>
  );
};

export default MusicCard;
