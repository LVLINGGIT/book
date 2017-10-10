$(function () {
    var ok1=false,ok2=false,ok3=false,ok4=false;
    //验证email------search，test
    var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $('input#email').focus(function () {
        $(this).parent('dd').next().text('请输入正确的EMAIL格式').removeClass('register_prompt_error register_prompt_ok').addClass('register_input_Focus');
    }).blur(function () {
        var $that=$(this);
        if($(this).val().search(regEmail)==-1){
          $that.parent('dd').next().text('请输入正确的EMAIL格式').removeClass('register_input_Focus register_prompt_ok').addClass('register_prompt_error');
        }else{
          $that.parent('dd').next().text('').removeClass('register_input_Focus register_prompt_error').addClass('register_prompt_ok');
          ok1=true;
        }
        /*if(regEmail.test($(this).val())){
            alert("正确");
        }else{
            alert("错误");
        }*/
    });

    //验证昵称
    $('input#nickName').focus(function () {
        $(this).parent('dd').next().text('昵称可由大小写英文字母，数字组成，长度为4-20个字符').removeClass('register_prompt_ok');
        $(this).css({'backgroundColor':'rgba(0,255,0,0.3)'});
    }).blur(function () {
        var $that=$(this);
        if($(this).val().length>=4 && $(this).val().length<=20){
          $that.parent('dd').next().text('').addClass('register_prompt_ok');
          ok2=true;
        }else{
          $that.parent('dd').next().text('输入错误，请输入正确的格式').removeClass('register_prompt_ok');
        }
    });

    //验证密码
    $('input#pwd').focus(function () {
        $(this).parent('dd').next().text('密码应该为6-20位之间').removeClass('register_prompt_ok').addClass('register_prompt_error');
        $(this).css({'backgroundColor':'rgba(255,0,0,0.3)'});
    }).blur(function () {
        var $that=$(this);
        if($(this).val()==''){
          $that.parent('dd').next().text('密码为必填项，请设置你的密码').removeClass('register_prompt_ok').addClass('register_prompt_error');
        }else{
          if($(this).val().length>=6 && $(this).val().length<=20){
            $that.parent('dd').next().text('').removeClass('register_prompt_error').addClass('register_prompt_ok');
            ok3=true;
          }else{
            $that.parent('dd').next().text('输入错误，请输入正确的格式').removeClass('register_prompt_ok');
          }
        }
    });

    //验证再一次密码
    $('input#repwd').focus(function () {
        $(this).parent('dd').next().text('输入的确认密码要和上面的密码一致,规则也要相同');
    }).blur(function () {
        var $that=$(this);
        if($(this).val()==$('input#pwd').val() && $(this).val()!='' && $(this).val().length>=6 && $(this).val().length<=20){
          $that.parent('dd').next().text('密码正确');
          ok4=true;
        }else{
            $that.parent('dd').next().text('密码错误，请重新输入！');
        }
    });


    // 地区下拉列表框实现级联效果
    var cityList = ['北京市','上海市','广州省','深圳市','重庆市','天津市','江苏省','浙江省','海南省','四川省','福建省','山东省','江西省','广西省','安徽省','河北省','河南省','湖北省','湖南省','陕西省','山西省','黑龙江省','其他'];
    cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
    cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
    cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市','苏州市','无锡市'];
    cityList['浙江省'] = ['杭州市','宁波市','温州市'];
    cityList['四川省'] = ['四川省','成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
    cityList['山东省'] = ['济南市','青岛市','烟台市'];
    cityList['江西省'] = ['江西省','南昌市'];
    cityList['广西省'] = ['柳州市','南宁市'];
    cityList['安徽省'] = ['安徽省','合肥市'];
    cityList['河北省'] = ['邯郸市','石家庄市'];
    cityList['河南省'] = ['郑州市','洛阳市'];
    cityList['湖北省'] = ['武汉市','宜昌市'];
    cityList['湖南省'] = ['湖南省','长沙市'];
    cityList['陕西省'] = ['陕西省','西安市'];
    cityList['山西省'] = ['山西省','太原市'];
    cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
    cityList['其他'] = ['其他'];
    // console.log();
    $("#province").empty();
    $("#city").empty();
    $.each(cityList,function (index,value) {
        var $options=$("<option>"+value+"</option>");
        // $options.text(value);
        $("#province").append($options);

    });
    $("#province").on("change",function () {
        var pro=$("#province option:selected").text();
        //清空原有的city数据
        $("#city").empty();
        $.each(cityList[pro],function (i,item){
          var $optionCitys=$("<option>"+item+"</option>");
          $("#city").append($optionCitys);
        })
    });
    $("#province").trigger('change');



    //验证表单--提交
    $('#registerBtn').click(function () {
        if(ok1 && ok2 && ok3 && ok4){
            $('form').submit();
        }else{
            return false;
        }
    })

})