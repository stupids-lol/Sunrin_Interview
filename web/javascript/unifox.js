$(document).ready(function () {
  $('#textarea01').keyup(function (e) {
    var content = $(this).val();
    $('#counter01').html(content.length + '/300');
    if (content.length > 300) {
      alert("최대 300자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 300));
      $('#counter01').html('300/300');
    }
  });
  $('#textarea01').keyup();

  $('#textarea02').keyup(function (e) {
    var content = $(this).val();
    $('#counter02').html(content.length + '/300');
    if (content.length > 300) {
      alert("최대 300자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 300));
      $('#counter02').html('300/300');
    }
  });
  $('#textarea02').keyup();

  $('#textarea03').keyup(function (e) {
    var content = $(this).val();
    $('#counter03').html(content.length + '/200');
    if (content.length > 200) {
      alert("최대 200자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 200));
      $('#counter03').html('200/200');
    }
  });
  $('#textarea03').keyup();

  $('#textarea04').keyup(function (e) {
    var content = $(this).val();
    $('#counter04').html(content.length + '/250');
    if (content.length > 250) {
      alert("최대 250자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 250));
      $('#counter04').html('250/250');
    }
  });
  $('#textarea04').keyup();

  $('#textarea05').keyup(function (e) {
    var content = $(this).val();
    $('#counter05').html(content.length + '/350');
    if (content.length > 350) {
      alert("최대 350자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 350));
      $('#counter05').html('350/350');
    }
  });
  $('#textarea05').keyup();
});