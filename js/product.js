$(function () {
   // 左侧同级分类列表
  var list=new Array(
            "中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）",
            "四大名著（696）","港澳台小说（838）","外国小说（5119）",
            "侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）",
            "武侠（574）","军事（726）","情感 （6700）",
            "社会（4855）","都市（949）","乡土（99）","职场（176）",
            "财经（292）","官场（438）","历史（1329）","影视小说（501）",
            "作品集（2019）","世界名著（3273）"
        );
  var $product_catList_class=$('#product_catList_class');
  var strUL='<ul></ul>';
  $product_catList_class.append(strUL);
  var str='';
  var $product_catList_class_ul=$('#product_catList_class ul');
  for (var i = 0; i < list.length; i++) {
    str+='<li>'+list[i]+'</li>';
  }
  $product_catList_class_ul.append(str);

  // 列表模式和大图模式切换
  var catalog=new Array();
  catalog[0] = ['product_list_01.jpg','私募（首部披露资本博弈秘密的金融小说）',5,'郭现杰','花山文艺出版社', '2009年08月',
            '数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...',
            '13.10','59折','￥18.90','￥32.00'];
  catalog[1] = ['product_list_02.jpg','圈子圈套.1.战局篇',3,'王强','清华大学出版社', '2006年01月',
            '虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...',
            '￥8.90','68折','￥19.10','￥28.00'];
  var $product_array_list=$("#product_array a[name='array']");
  var $product_array_bigImg=$("#product_array a[name='bigImg']");
  $product_array_list.click(function () {
      $(this).addClass('click').siblings().removeClass('click');
      $('#storyBooksssss').empty();
  });
  $product_array_bigImg.click(function () {
      $('#storyBooksssss').parent('.product_storyList_content div').empty();
      $(this).addClass('click').siblings().removeClass('click');
      var num=0;
      var arr=[];
      // $('#product_storyList_content').hide();
      for (var i = 0; i < catalog.length; i++) {
          var str='';
          str+=`
            <div style='width:300px;float:left;padding:10px 20px;'>
              <div class="product_storyBigImg_content_left"><img src="images/${catalog[i][0]}" alt="图书列表"/></div>
              <div class="product_storyBigImg_content_right">
                <ul>
                    <li class="product_storyList_content_dash"><a href="#" class="blue_14">${catalog[i][1]}</a></li>
                    <li class='get${i}'>顾客评分：</li>
                    <li>作　者：<a href="#" class="blue_14">${catalog[i][3]}</a> 著</li>
                    <li>出版社：<a href="#" class="blue_14">${catalog[i][4]}</a></li>
                    <li>出版时间：${catalog[i][5]}</li>
                    <li>${catalog[i][6]}</li>
                    <li>
                        <dl class="product_content_dd">
                            <dd><img src="images/product_buy_02.gif" alt="shopping"/></dd>
                            <dd><img src="images/product_buy_01.gif" alt="shopping"/></dd>
                            <dd>节省：${catalog[i][7]}</dd>
                            <dd>折扣：<span>${catalog[i][8]}</span></dd>
                            <dd class="footer_dull_red"><span>${catalog[i][9]}</span></dd>
                            <dd class="product_content_delete"><span>${catalog[i][10]}</span></dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="product_storyList_content_bottom"></div>
            </div>
          `;
            //<img src="images/star_gray.gif" alt="star"/><img src="images/star_gray.gif" alt="star"/><img src="images/star_gray.gif" alt="star"/><img src="images/star_gray.gif" alt="star"/><img src="images/star_gray.gif" alt="star"/>
            $('#storyBooksssss').append(str);

            //添加顾客评分的星数
            num=parseInt(catalog[i][2]);
            arr.push(num);
            for (var j = 0; j < num; j++) {
              var imgs='';
              imgs+='<img src="images/star_red.gif" alt="star"/>';
              $('.get'+i+'').append(imgs);
            }
            for (var z = 0; z < 5-num; z++) {
              var imgs='';
              imgs+='<img src="images/star_gray.gif" alt="star"/>';
              $('.get'+i+'').append(imgs);
            }

      }
  });

})

