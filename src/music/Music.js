import React from "react";

import './Music.css';

const Music = ({ style }) => {
  // const soundcloudStyle = {
  //   fontSize: '10px',
  //   color: '#cccccc',
  //   lineBreak: 'anywhere',
  //   wordBreak: 'normal',
  //   overflow: 'hidden',
  //   whiteSpace: 'nowrap',
  //   textOverflow: 'ellipsis',
  //   fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
  //   fontWeight: 100
  // }

  return (
    <section className='Music' style={style}>
      <h2>Music</h2>
      <iframe
        title="Night Cycle"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/826679479&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      {/* <div style={soundcloudStyle}>
        <a href="https://soundcloud.com/this-is-psychic-hamster" title="Psychic Hamster" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Psychic Hamster</a> ·
        <a href="https://soundcloud.com/this-is-psychic-hamster/continuity-whirlwind" title="Night Cycle" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Night Cycle</a>
      </div> */}
      <iframe
      title="Prime Soup"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/750036325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      {/* <div style={soundcloudStyle}>
        <a href="https://soundcloud.com/this-is-psychic-hamster" title="Psychic Hamster" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Psychic Hamster</a> ·
        <a href="https://soundcloud.com/this-is-psychic-hamster/prime-soup" title="Prime Soup" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Prime Soup</a>
      </div> */}
    </section>
  );
};

export default Music;