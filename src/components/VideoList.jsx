import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from '../data/exampleVideoData.js';


const VideoList = ({videos, onChange}) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoListEntry video ={video} onChange = {onChange}/>
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
