import React from "react";

import "./Music.css";

const Music = ({ style }) => {
  return (
    <section className="Music" style={style}>
      <h2>Music</h2>
      <div className="Music-songs">
        <iframe
          title="Plague of Lotuses"
          width="100%"
          height="200"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1514206126&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <iframe
          title="Night Cycle"
          width="100%"
          height="200"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/826679479&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
