import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

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

var searchYouTube = (q, callback, apiKEY) => {
  // TODO
  console.log('searchyt is being called -->');
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos', //endpoint - use data for extras
    type: 'GET',
    data: {
      key: apiKEY,
      q: q,
      type: video
    },
    // contentType: 'application/json',

    success: function(data) {
      // should be an array of videos
      console.log(data);
    },
    error: errorCB || function(error) {
      console.error('Recastly: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;
