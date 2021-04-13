$(() => { //Window Onload Begin
  $('form').on('submit', (event) => {
    //Prevent refresh on button click
    event.preventDefault()
    //Clears the page for a new search
    $('.search-results').empty()

//Global Variables
    const artist = $('#user-artist').val()
    const song = $('#user-song').val()

    $.ajax({
      url: `https://api.lyrics.ovh/v1/${artist}/${song}`
    }).then(
      (data) => {
        console.log(data);
        for (let i = 0; i < 1; i++){                                     //Adds line breaks
          const $lyrics = $('<div>').addClass('lyrics').text(data.lyrics.replace(/\n/, '\n'))
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
  })
})//Window Onload End
