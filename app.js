$(() => { //Window Onload Begin
  $('form').on('submit', (event) => {
//Prevent refresh on button click
    event.preventDefault()
    $('.search-results').empty()

//Global Variables
    const userArtist = $('#user-artist').val()
    const userSong = $('#user-song').val()
    let artist = userArtist
    let song = userSong


    $.ajax({
      url: `https://api.lyrics.ovh/v1/${artist}/${song}`
    }).then(
      (data) => {
        console.log(data);

        for (let i = 0; i < 1; i++){
          const $lyrics = $('<div>').addClass('lyrics').text(data.lyrics)
          $('.search-results').append($lyrics)
          // const $h1 = $('<h1>')
          // $('.search-results').append($h1).text(userArtist)
        }
    // })
      },
      () => {
          console.log('bad request');
      }
    )
  })
})//Window Onload End
