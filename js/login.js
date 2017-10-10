$(function () {
    $('#btn').click(function () {
      if($('#email').val()!='' && $('#pwd').val()!=''){
        $('form').submit();
        // alert('为空');
      }else{
        alert('用户名或密码不为空');
      }
    });
});