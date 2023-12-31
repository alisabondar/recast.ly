// does not require react import
const {useState} = React;
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

export default function App() {
  const videos = exampleVideoData;

  const [list, setList] = useState([]);
  console.log(list);
  const [player, setPlayer] = useState(videos[0]);
  // call searchYouTube and replace states with corresponding data

  let timeout = null;

  const searchHandler = (e) => {
    let query = e.target.value;
    console.log(query);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setList(videos);
      }));
    }, 5000);
  };

  const changeVideo = (titleString) => {
    //find title in stateList
    for (const video of list) {
      if (video.snippet.title === titleString) {
        setPlayer(video);
      }
    }
  };
  return (
    <div id='main'>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <Search searchHandler={(e) => searchHandler(e)}/>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <VideoPlayer video ={player}/>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <VideoList videos ={list} onChange = {changeVideo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

// SOLUTION BELOW
// import VideoList from './VideoList.js';
// import VideoPlayer from './VideoPlayer.js';

// export default function App() {
//   // variable videos = list of videos
//   // setVideos is a function to change the list
//   // useState() initializes the data
//   const [videos, setVideos] = useState([]);

//   return (
//     <div id='main'>
//       <nav className="navbar">
//         <div className="col-md-6 offset-md-3">
//           <div><h5><em>search</em> view goes here!!!!!</h5></div>
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-md-7">
//           <div>
//             <VideoPlayer />
//           </div>
//         </div>
//         <div className="col-md-5">
//           <div>
//             <VideoList videos={videos}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }