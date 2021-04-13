$(() => { //Window Onload Begin
  $('form').on('submit', (event) => {
    //Prevent refresh on button click
    event.preventDefault()
    //Clears the page for a new search
    $('.search-results').empty()

//Global Variables
    const artist = $('#user-artist').val()
    const song = $('#user-song').val()
    const myKey = '9d94ae7b2820471546bd0a910075c32a'

    $.ajax({
      url: `https://api.lyrics.ovh/v1/${artist}/${song}`
    }).then(
      (data) => {
        for (let i = 0; i < 1; i++){
          const $lyrics = $('<div>').addClass('lyrics').text(data.lyrics)
          $('.search-results').append($lyrics)
          const $h1 = $('<h1>')
          $h1.text(`${artist} - ${song}`)
          $('.lyrics').prepend($h1)
        }
      },
      () => {
          console.log('bad request');
      }
    )
    $.ajax({
      url: `http://ws.audioscrobbler.com/2.0/?method=track.getinfo&api_key=${myKey}&artist=${artist}&track=${song}&format=json`
    }).then(
      (data) => {
        console.log(data);
        for (let i = 0; i < 1; i++){
          // const $albumBox = $('<div>').addClass('album-box')
          const albumObject = data.track.album.image[1].text

          const $albumArt = $('<img>').attr('src', 'albumObject')
          $('.search-results').append($albumArt)
          // $albumArt.append($albumBox)
          const $albumTitle = $('<h2>')
          const $releaseYear = $('<h3>')
          $albumTitle.append($releaseYear)
        }
      },
      () => {
          console.log('bad request');
      }
    )
  })
})//Window Onload End

// .text(data.track.track.album.image[1])
// API key	9d94ae7b2820471546bd0a910075c32a
// Shared secret	8a06340eb4d236555629287e7d826f0d
