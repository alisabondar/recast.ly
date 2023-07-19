import { API_KEY, YOUTUBE_API_KEY } from '../config/config.example.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// // create helper function for latest data
// // function() => searchYoutube
// const data = (site) => {
//   //param is data from succes ajax call
//   //where will data be stored?
//   var array = searchYouTube.site;
//   console.log(array);
// };

var searchYouTube = (q, callback) => {
  // TODO
  console.log('testing!!!!');
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    {
      key: YOUTUBE_API_KEY,
      query: q
    })
    .done((videoList) => {
      if (callback) {
        console.log('get worked!!!');
        console.log('videoList: ', videoList);
        callback(videoList);
      }
    })
    .fail(({ responseJSON }) => {
      console.log('get method failed!!!');
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
  // console.log('the q: ', q);
  console.log('q in searchYT-->', q);

};


export default searchYouTube;
