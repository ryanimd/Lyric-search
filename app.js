$(() => { //Window Onload Begin
  $('form').on('submit', (event) => {
    //Prevent refresh on button click
    event.preventDefault()
    //Clears the page for a new search
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
        for (let i = 0; i < 1; i++){
          const $lyrics = $('<div>').addClass('lyrics').text(data.lyrics)
          $('.search-results').append($lyrics)
          const $h1 = $('<h1>')
          $h1.text(`${userArtist} - ${userSong}`)
          $('.lyrics').prepend($h1)
        }
    // })
      },
      () => {
          console.log('bad request');
      }
    )
  })
})//Window Onload End
