import React from "react";
import app_config from "../../config";

const MusicPlayer = ({ selMusic }) => {
  const url = app_config.api_url;
    console.log(selMusic);
  return (
    selMusic && (
      <div>
        <audio src={url + "/" + selMusic.musicfile} autoplay controls></audio>
      </div>
    )
  );
};

export default MusicPlayer;
