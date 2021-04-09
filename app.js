$(() => { //Window Onload Begin
  $('.button').on('click', (event) => {
//Prevent refresh on button click
    event.preventDefault()

//Global Variables
    const $userInput = $('input[type="text"]').val()//Input should be song title
    const $trackID = $(event.target).val()//Searches for track id that corresponds to user input

    $.ajax({
      url:`http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOPtrack.lyrics.get?track_id=${$trackID}`,
      data: {
        "$limit": $userInput,}
    }).then(
      (lyrics) => {
        console.log(lyrics);
      },
      () => {
          console.log('bad request');
      }
    )
  })
})//Window Onload End
