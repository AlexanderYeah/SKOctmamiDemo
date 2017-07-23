/**
 * Created by Alexander on 16/12/9.
 */
$(function(){
    // // 1 隐藏的菜单做一个动画
    // var oDiv = $('.nav_menu').first()
    // var oList = $('.hide_list').first()
    // // 鼠标移入，显示动画
    // oDiv.mouseover(function(){
    //     oList.slideDown()
    // })
    // oDiv.mouseout(function(e){
    //     var x = event.clientX
    //     var y = event.clientY
    //     var divx1 = oList.offset().left
    //     var divy1 = oList.offset().top
    //     var divx2 = oList.offset().left + oList.width()
    //     var divy2 = oList.offset().top + oList.height()
    //     // 进行判断
    //     // 情况1 鼠标直接移出oList,oDiv外的区域
    //     if(x<divx1 || x> divx2 || y <divy1 || y> divy2){
    //         oList.slideUp()
    //     }
    // })
    // // 情况2 鼠标先移入oList区域,然后在移出去
    // oList.mouseout(function(e){
    //     var x = event.clientX
    //     var y = event.clientY
    //     var divx1 = oList.offset().left
    //     var divy1 = oList.offset().top -  oDiv.height()
    //     var divx2 = oList.offset().left + oList.width()
    //     var divy2 = oList.offset().top + oList.height() + oDiv.height()
    //     // 进行判断
    //     // 情况1 鼠标直接移出oList,oDiv外的区域
    //     if(x<divx1 || x> divx2 || y <divy1 || y> divy2){
    //         oList.slideUp()
    //     }
    // })

    // 2 商品放大功能的实现
    // 页面加载完成之后执行

        var oDemo = $('#exam_box')
        var oSmallBox = $('#small-box')
        var oMark = $('#mark')
        var oFloatBox = $('#float-box')
        var oBigBox = $('#big-box')
        var oBigBoxImage = $('#big_img')

        oMark.mouseover(function(){
            oFloatBox.css('display','block')
            oBigBox.css('display','block')

        })
        oMark.mouseout(function(){
            oFloatBox.css('display','none')
            oBigBox.css('display','none')

        })

        oMark.mousemove(function(ev){
            var ev = ev || window.event // 兼容多个浏览器的event参数模式
            var left = ev.clientX - oDemo.offset().left - oFloatBox.width() / 2 ;
            var top = ev.clientY  - oDemo.offset().top - oFloatBox.height() / 2;

            if(left < 0){
                left = 0
            }else if(left > (oMark.width() - oFloatBox.width())){
                left = oMark.width() - oFloatBox.width()
            }

            if(top < 0){
                top = 0;
            }else if(top > (oMark.height() - oFloatBox.height())){
                top = oMark.height() - oFloatBox.height()
            }

            oFloatBox.css('left',left+'px')
            oFloatBox.css('top',top + 'px')

            var percentX = left / (oMark.width() - oFloatBox.width())
            var percentY = top / (oMark.height() - oFloatBox.height())
            var imgLeft = - percentX * (oBigBoxImage.width() - oBigBox.width());
            var imgTop = - percentY * (oBigBoxImage.height() - oBigBox.height());
            oBigBoxImage.css('left',imgLeft + 'px')
            oBigBoxImage.css('top',imgTop + 'px')

        })

    //3 调用tabs
    $('#goods_list').tabs()
    $('#goods_info').tabs({

    })
    $('#comment_tab').tabs()

    //4 实现购买数量的加减
    var oMinus_btn =   $('.minus_btn').first()
    var oShow_count = $('.show_count').first()
    var show_value = oShow_count.val()
    var oAdd_btn = $('.add_btn').first()
    // 判断，如果数量为1，则减小按钮不能使用
    if(show_value == 1){
        // 禁用按钮
        oMinus_btn.attr('disabled','disabled')
    }
    // 减号按钮的功能
    oMinus_btn.click(function(){
        show_value --
        if(show_value == 1){
            // 禁用按钮
            oMinus_btn.attr('disabled','disabled')
        }
        oShow_count.val(show_value)
    })
    // 加法按钮的实现
    oAdd_btn.click(function(){
        show_value ++
        if(show_value != 1){
            // 禁用按钮
            oMinus_btn.removeAttr('disabled')
        }
        oShow_count.val(show_value)
    })


    //5 添加购物车，提示成功
    var oAdd_shop= $('.add_shopcar').first()
    oAdd_shop.click(function(){
        // 修改提示框的样式，让其可见
        $('#succ_info').css('display','block')
        $('#succ_info').animate({
            opacity:1
        },300,function(){
           setTimeout(function(){$('#succ_info').css('display','none')},1000)

        })
    })

    // 6 切换小图
    var aFloat_li = $(".float_pic ul li")
    var smallBoxImg = $("#small-box img")
    var bigBoxImg = $("#big-box img")
    var  i = 0
    // 给小图片添加点击事件
    for(i = 0;i < aFloat_li.length;i++){
        // 给每一张图片绑定一个索引
        aFloat_li.eq(i).index = i
        aFloat_li.eq(i).on({
            'click':function(){
                $(this).addClass('active').siblings().removeClass('active')
                var img_str = 'img/show_pic'+$(this).index() +'.png'
                var big_imgstr = 'img/show_pic_big'+$(this).index() +'.png'
                // 点击小图，大图联动
                smallBoxImg.attr('src',img_str)
                // 放大镜盒子中图片
                bigBoxImg.attr('src',big_imgstr)
            }
        })
    }







})



