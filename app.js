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
          const $albumSum = $('<div>').addClass('album-summary').text(data.track.wiki.summary)
          $('#info-box').append($albumSum)
        }
          //Modal Variables
          const $openInfo = $('#open-info')
          const $modal = $('#modal')
          const $closeInfo = $('#close')

          //Functions for modal
          const openModal = () => {
            $modal.css('display', 'block')
          }
          const closeModal = () => {
            $modal.css('display', 'none')
          }

          //Event listeners for modal
          $openInfo.on('click', openModal)
          $closeInfo.on('click', closeModal)
      },
      () => {
          console.log('bad request');
      }
    )
  })
})//Window Onload End
