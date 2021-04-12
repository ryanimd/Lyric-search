$(() => { //Window Onload Begin
  $('.button').on('click', (event) => {
//Prevent refresh on button click
    event.preventDefault()
    const userArtist = $('#user-artist').val()
    const userSong = $('#user-song').val()



//Global Variables
    let artist = 'Prince'
    let song = 'When Doves Cry'

    $.ajax({
      url: `https://api.lyrics.ovh/v1/${artist}/${song}`
    }).then(
      (data) => {
        console.log(data);

        // for (let i = 0; i < 15; i++){
        //   const $lyrics = $('<div>').addClass('lyrics').text(data.lyrics)
        //   $('.search-results').append($lyrics)
        // }
    // })
      },
      () => {
          console.log('bad request');
      }
    )
  })
})//Window Onload End
