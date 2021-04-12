$(() => { //Window Onload Begin
  $('.button').on('click', (event) => {
//Prevent refresh on button click
    event.preventDefault()

//Global Variables
    const $userArtist = $('input[type="text"]').val()//Input should be song artist name
    const $userSong = $('input[type="text"]').val()//Input should be song name
    //

    $.ajax({
      url: `https://api.lyrics.ovh/suggest/${$userArtist}`,
      data: {
        "$limit": $userArtist,}
    }).then(
      (data) => {
        console.log(data);

        for(let i = 0; i < 15; i++){
          const $lyrics = $("<div>").addClass('lyrics').text(data.data[i].title)
          $('.search-results').append($lyrics)
}
      },
      () => {
          console.log('bad request');
      }
    )
  })

})//Window Onload End

//////////////// Failed Attempts /////////////////////////
