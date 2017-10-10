$(function () {
    var $menu_a=$('#menu');
      //“我的当当”下拉菜单的自动显示与隐藏
      $('#menu a').mouseenter(function () {
        showSelect();
      });
      $('#menu a').mouseout(function () {
        hideSelect();
      });
      $('#dd_menu_top_down').mouseenter(function () {
        showSelect();
      });
      $('#dd_menu_top_down').mouseout(function () {
        hideSelect();
      });
      $('#menu img').toggle(function () {
        showSelect();
      },function () {
        hideSelect();
      });

      function showSelect(){
        $('#dd_menu_top_down').stop().show();
      }
      function hideSelect(){
        setTimeout(function(){
          $('#dd_menu_top_down').stop().hide();
        },2000);
      }
})