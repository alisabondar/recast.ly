// does not require react import
const {useState} = React;
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

export default function App() {
  const videos = exampleVideoData;

  // console.log('videos: ', videos);
  // console.log('currentVideo:', currentVideo);
  const [list, setList] = useState(videos);
  const [player, setPlayer] = useState(videos[0]);

  //   //clicked video in the listState
  //   //that video and pass to playerState
  //   //setState to updateState
  const changeVideo = (titleString) => {
    //find title in stateList
    for (const video of list) {
      // console.log('titleString: ', titleString);
      if (video.snippet.title === titleString) {
        setPlayer(video);
      }
    }
    //setPlayer(fountTitleObject);
  };
  // console.log('in apps Onchange: ', changeVideo);
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
            <VideoPlayer video ={player}/>
            {/* <VideoPlayer onClick={var => setPlayer(var) */}
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <VideoList videos ={videos} onChange = {changeVideo}/>
            {/* <VideoListEntry onChange = {changeVideo}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
