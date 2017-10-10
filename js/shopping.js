$(function () {
  // 实现商品列表的显示和隐藏
    var $shopping_commend_right_img=$('.shopping_commend_right img');
    var $shopping_commend_sort=$('#shopping_commend_sort');
    $shopping_commend_right_img.toggle(function () {
      $shopping_commend_sort.hide();
    },function () {
      $shopping_commend_sort.show();
    });
    //对选购的商品实现删除
    var $shopping_product_list_6_del=$('.shopping_product_list_6 a');
    $shopping_product_list_6_del.each(function () {
        var index=$(this).index();
         $(this).click(function () {
            $(this).parents('.shopping_product_list').remove();
            totalScare();
            totalMoney();
        });
    });
    //对选购的商品实现修改数量
    var $shopping_product_list_5_input=$('.shopping_product_list_5 input');
    $shopping_product_list_5_input.keyup(function () {
        if($(this).val()==''){
          $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,''));
        totalMoney();
    });

    // 自动计算积分、金额
    totalScare();
    totalMoney();
    function totalScare(){
      var $shopping_product_list_2_label=$('.shopping_product_list_2 label');//单品积分
      var $product_integral=$('#product_integral');//可获商品积分
      var $shopping_product_list=$('.shopping_product_list');
      var totalScare=0;
      $shopping_product_list.each(function () {
          totalScare+=parseInt($(this).find('.shopping_product_list_2 label').html());
      })
      $product_integral.html(totalScare);
    };
    function totalMoney(){
      var $shopping_product_list_3_label=$('.shopping_product_list_3 label');//市场价
      var $shopping_product_list_4_label=$('.shopping_product_list_4 label');//当当价
      var $product_total=$('#product_total');//商品金额总计
      var $product_save=$('#product_save');//您共节省金额
      var $shopping_product_list=$('.shopping_product_list');
      var totalMoney=0;
      var saveMoney=0;
      var countMonry=0;
      $shopping_product_list.each(function () {
          totalMoney+=parseFloat($(this).find('.shopping_product_list_4 label').html()*$(this).find('.shopping_product_list_5 input').val());
          countMonry+=parseFloat($(this).find('.shopping_product_list_3 label').html()*$(this).find('.shopping_product_list_5 input').val());
      })
      totalMoney=parseInt(totalMoney*100)/100;
      saveMoney=parseInt((countMonry-totalMoney)*100)/100;
      $product_total.html(totalMoney);
      $product_save.html(saveMoney);
    };

})