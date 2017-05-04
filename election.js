$(document).ready(function() {

  // Imagination!

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data){

    for (var i = 0; i < data.candidates.length; i++) {
      candidate = data.candidates[i];
      var cInfo = candidate.name + ': ' + candidate.votes + ' votes.';
      var item = $('<li>').html(cInfo);
      $('#candidate-list').append(item);
    }



  });

});
