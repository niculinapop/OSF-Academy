
$(document).ready(function () {
 
  $('#openModalBtn').on('click', function () {
     
      var inputText = $('#inputText').val();
      $('#searchedText').text(inputText);
      $('#myModal').modal('show');
  });
}); 