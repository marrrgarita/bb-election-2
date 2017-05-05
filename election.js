$(document).ready(function() {

  // Imagination!
  // var voteURL = 'https://bb-election-api.herokuapp.com/vote'


  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data){

    for (var i = 0; i < data.candidates.length; i++) {
      candidate = data.candidates[i];
      var cInfo = candidate.name + ': ' + candidate.votes + ' votes.';
      var voteForm = '<form class="vote-form" method="post" action="https://bb-election-api.herokuapp.com/vote"><input type="hidden" name="name" value="' + candidate.name + '"><button type="submit">VOTE</button></form>';
      // var voteInput = '<input type="hidden" name="name" value="Gary">'
      // var submitButton = '<button type="submit">Submit</button>'

      var item = $('<li>').html(cInfo + voteForm);
      $('#candidate-list').append(item);

    }
  });

  $('body').on('submit', '.vote-form', function(e){
    e.preventDefault();
    var that = $(this).children('input[type=hidden]').val();
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: { name: $(this).children('input[type=hidden]').val()},
      dataType: 'json'
    }).done(function(data){
      console.log(data);
    }).always(function(){
      console.log(that);
    });
  });

});
