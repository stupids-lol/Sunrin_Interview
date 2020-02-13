$(document).ready(function() {
    $('#textarea01').keyup(function (e){
        var content = $(this).val();
        $('#counter01').html(content.length + '/2000');
        if(content.length > 2000){
          alert("최대 2000자까지 입력 가능합니다.");
          $(this).val(content.substring(0, 2000));
          $('#counter01').html('2000/2000');
        }
    });
    $('#textarea01').keyup();
      
    $('#textarea02').keyup(function (e){
        var content = $(this).val();
        $('#counter02').html(content.length + '/2000');
        if(content.length > 2000){
          alert("최대 2000자까지 입력 가능합니다.");
          $(this).val(content.substring(0, 2000));
          $('#counter02').html('2000/2000');
        }
    });
    $('#textarea02').keyup();
    
    $('#textarea03').keyup(function (e){
        var content = $(this).val();
        $('#counter03').html(content.length + '/2000');
        if(content.length > 2000){
          alert("최대 2000자까지 입력 가능합니다.");
          $(this).val(content.substring(0, 2000));
          $('#counter03').html('2000/2000');
        }
    });
    $('#textarea03').keyup();

    $('#textarea04').keyup(function (e){
        var content = $(this).val();
        $('#counter04').html(content.length + '/2000');
        if(content.length > 2000){
          alert("최대 2000자까지 입력 가능합니다.");
          $(this).val(content.substring(0, 2000));
          $('#counter04').html('2000/2000');
        }
    });
    $('#textarea04').keyup();
    
    $('#textarea05').keyup(function (e){
        var content = $(this).val();
        $('#counter05').html(content.length + '/2000');
        if(content.length > 2000){
          alert("최대 2000자까지 입력 가능합니다.");
          $(this).val(content.substring(0, 2000));
          $('#counter05').html('2000/2000');
        }
    });
    $('#textarea05').keyup();
  });