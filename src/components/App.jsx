// does not require react import
// import { useState } from 'react';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

export default function App() {
  const videos = exampleVideoData;
  const currentVideo = videos[0];

  // const [list, setList] = useState(videos);
  // const [player, setPlayer] = useState(currentVideo);
  // function changeVideo(e) {
  //   //clicked video in the listState
  //   //that video and pass to playerState
  //   //setState to updateState
  // }
  return (
    <div id='main'>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here!!!!!</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <VideoPlayer video ={currentVideo}/>
            {/* <VideoPlayer onClick=() => doSomething */}
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <VideoList videos ={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
