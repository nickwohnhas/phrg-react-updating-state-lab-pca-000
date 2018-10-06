import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
      super();
      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          } 
        }
      }
    }
  handleClick = () => this.setState({
  settings: {
    ...this.state.settings,
    bitrate: 12,
  },
});
  resoluteClick = () => this.setState({
  settings: {
  ...this.state.settings,
  video: {
    this.state.settings.video,
  resolution: '720p'}
    },
  });
}

render() {
 return (
   <div>
     <button class="bitrate" onClick={this.handleClick}>Click me!</button>
     <button class="resolution" onClick={this.resoluteClick}>Click me!</button>
   </div>
 );
}
}
