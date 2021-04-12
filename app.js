$(() => { //Window Onload Begin
  $('.button').on('click', (event) => {
//Prevent refresh on button click
    event.preventDefault()

//Global Variables
    const $userArtist = $('input[type="text"]').val()//Input should be song artist name
    const $userSong = $('input[type="text"]').val()//Input should be song name
    const $newSearch = $('input[type="submit"]').val()

    const myKey = '&apikey=8054e1ba07f12b743c7ad8e5acfbbab9'

    $.ajax({
      url: `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${$userSong}&q_artist=${$userArtist}&apikey=	8054e1ba07f12b743c7ad8e5acfbbab9`,
      data: {}
        // "$limit": $userArtist,}
    }).then(
      (data) => {
        console.log(data);

//         for(let i = 0; i < 15; i++){
//           const $lyrics = $("<div>").addClass('lyrics').text(data.data[i].title)
//           $('.search-results').append($lyrics)
// }
      },
      () => {
          console.log('bad request');
      }
    )
  })

})//Window Onload End

//////////////// Failed Attempts /////////////////////////
// `https://api.musixmatch.com/ws/1.1/`
