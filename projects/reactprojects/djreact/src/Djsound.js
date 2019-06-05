import React from 'react';
import Sound from 'react-sound';

 
class Djsound extends React.Component{
    render() {
        return (

         
          <Sound
            url="https://soundcloud.com/urlmusic/stonebank-feat-emel-belgica-2019-now-were-free"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />


        );
      }
}

export default Djsound;