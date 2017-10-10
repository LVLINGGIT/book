$(function () {
    //open打开首页时弹出固定大小的广告页面窗口
    //toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no   newwindow
    window.open('open.html','','width=500,height=330,left=400,top=200');

    //随滚动条上下移动的广告图片
    $(window).scroll(function () {
        var scrollTop=$(document).scrollTop();
        $('#right').stop().animate({'top':scrollTop+50},600);
    });
    //广告图片点击关闭
    $('.dd_close').click(function () {
        $('#right').hide();
    })
    //带数字按钮的循环显示的图片广告
    var $scroll_number_li=$('#scroll_number li');
    var timerBar=null;
    var iNow=0;//为图片的索引值
    clearInterval(timerBar);
    timerBar=setInterval(timerBarTool, 2000);
    $scroll_number_li.click(function () {
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        iNow=index;
        $('#scroll_img li').eq(index).fadeIn('fast').siblings().fadeOut();
    });

    $('.scroll_mid').hover(function () {
        // var index=$(this).index();
        // var index=$(this).index();
        // $('#scroll_number li').eq(index).addClass('active').siblings().removeClass('active');
        // $(this).fadeIn('fast').siblings().fadeOut();
        clearInterval(timerBar);
        // alert(1);
    },function () {
        timerBar=setInterval(timerBarTool, 2000);
    });

    function timerBarTool(){
      iNow++;
      if (iNow>$scroll_number_li.length-1) {
        iNow=0;
      }
      $scroll_number_li.eq(iNow).trigger('click');//触发mouseenter事件
    }


    //Tab切换特效
    var $book_type=$('.book_type');
    var timerTab=null;
    var iNowTab=0;
    $book_type.mouseenter(function () {
        var index=$(this).index();
        $(this).addClass('book_type_out').siblings().removeClass('book_type_out');
        iNowTab=index;
        $('.book_class dl').eq(index-1).removeClass('book_none').siblings().addClass('book_none');
    });
    timerTab=setInterval(timerTabTool,2000);
    $book_type.click(function () {
        clearInterval(timerTab);
    });

    function timerTabTool(){
      iNowTab++;
      if (iNowTab>$book_type.length) {
        iNowTab=1;
      }
      $book_type.eq(iNowTab-1).trigger('mouseenter');
    }

    //书讯快递无缝隙、循环垂直向上滚动
    var $dome1=$('#dome1');
    var scrollTimer;
    $dome1.hover(
        function () {
           clearInterval(scrollTimer);
        },function () {
            scrollTimer=setInterval(function () {
                scrollContent($dome1);
           },1000);
        }).trigger('mouseout');
    function scrollContent(obj){
        var $firstUl=obj.find("ul:first");
        var firstLiHeight=$firstUl.find("li:first").height();
        $firstUl.animate(
            {
                "margin-top":-firstLiHeight+"px"
            },
            1000,
            function () {
                $firstUl.css({'margin-top':'0px'}).find("li:first").appendTo($firstUl);
            });
    }












})