/**
 * Created by Alexander on 17/1/6.
 */

$(function(){
    // 0 轮播
    var $index = 0;
    var timer = null
    var oLeftBtn = $('.left_btn')
    var oRightBtn = $('.right_btn')
    var $li = $('#banner ul li')

//  开启一个定时器
    timer = setInterval(function(){
        changeToLeft()
    },5000)
    oLeftBtn.click(function(){
        changeToLeft()
    })
    oRightBtn.click(function(){
        changeToRight()

    })
//   想右滑动
    function changeToLeft(){
        $li.eq($index).animate({'left':'-1920px'},500,function(){})
        $index ++
        if($index > 5){
            $index = 0
            $li.eq($index).css('left','1920px').siblings().css('left','1920px')
        }
        $li.eq($index).animate({'left':'0'},500,function(){})
        if($index == 4){
            $li.eq(5).css('left','1920px')
        }
    }
//   向左滑动
    function changeToRight(){
        $li.eq($index).animate({'left':'1920px'},500,function(){})
        $index --
        if($index == -1){
            $index = 5
            $li.eq($index).css('left','-1920px').siblings().css('left','-1920px')
        }
        $li.eq($index).animate({'left':'0'},500,function(){})
        if($index == 1){
            $li.eq(0).css('left','-1920px')
        }
    }


//     1 注册按钮的点击
    $('#regist_btn').click(function(){
       // 跳转到注册页面
       window.location.replace('regist.html')
    });

    // 2 登录按钮的点击
    $('#login_btn').click(function(){
        // 跳转到注册页面
        window.location.replace('login.html')
    });
    // 3 搜索按钮的点击
    // 4 购物车的点击
    // 5 热搜单词的点击
    var i = 0;
    for(i;i<4;i++){
        $('.hot_search span').eq(i+1).click(function(){
            // 1 跳转到搜索结果页面
            var passVal = $(this).html();
            window.location.replace('search1.html?id='+passVal)

        })
    }
    // 6 点击菜单进行跳转

    // 7 滚动条滚动的事件
    var scrollHeight = 0
    $(window).mousewheel(function(event,delta){
       // 当前滚动条的距离


    })

    // 8 秒杀区域倒计时的实现
    function setTime(){
        // 结束时间
        var endTime = new Date('2017/10/30 10:00:00')
        // 时间对象
        var date = new Date();
        var t = endTime.getTime() - date.getTime();
        var day = Math.floor(t/1000/60/60/24);
        var hour = Math.floor(t/1000/60/60%24);
        var min = Math.floor(t/1000/60%60);
        var sec = Math.floor(t/1000%60);

        $("#sale_day").html(day + "天")
        $("#sale_hour").html(hour + "时")
        $("#sale_min").html(min + "分")
        $("#sale_sec").html(sec + "秒")
    }
    setTime()
    // 开启定时器
    setInterval(setTime,1000)

//  9 秒杀区域  左边按钮和右边按钮的点击
    var leftBtn = $('.btn_left')
    var rightBtn = $('.btn_right')
    var secBox = $('.secSale_goods')
    var secUl =  $('.secSale_goods ul')
    // 当前的offsetLeft
    var curLeft = secUl.offset().left
    var originalLeft = secUl.offset().left
    var curWidth = secUl.width()
    var leftClickNum = 0
    var rightClickNum = 0

    // 左按钮的点击
    leftBtn.click(function(){
        curLeft -= curWidth/6
        leftClickNum ++
        secUl.offset({left:curLeft})
//        secUl.animate({
//            'left':curLeft + 'px'
//        })
        // 边界,
        if (leftClickNum == 3){
            curLeft = originalLeft + curWidth/6
            leftClickNum = -1;
        }
    })

    // 右按钮的点击
    rightBtn.click(function(){
   //  0-- 0
   //  1-- 3
   //  2-- 2
   //  -1 -- 1
        // 边界
        if (rightClickNum == 0){
            curLeft = originalLeft - curWidth/2
        }
        rightClickNum ++
        if(rightClickNum == 4){
            curLeft = originalLeft
            rightClickNum = 0
        }
       secUl.offset({left:curLeft})
       curLeft +=  curWidth/6
    })

    function doMove(){
        curLeft -= curWidth/6
        leftClickNum ++
        secUl.offset({left:curLeft})
        // 边界,
        if (leftClickNum == 3){
            curLeft = originalLeft + curWidth/6
            leftClickNum = -1;
        }
    }

    setInterval(function(){
        doMove()
    },4000)

    // 10 tl_salebox  tab切换
    var tl_Lis = $('.tl_tab ul li')
    tl_Lis.click(function(){
            // 状态切换
            $(this).siblings().removeClass('active')
            $(this).addClass('active ')
            // 当前点击的tab 内容
            var tab_info = $(this).html();
            var tab_goodsImg = $('.col-md-2 div img')
            var img_i = 0;
            switch (tab_info){
                case "孕期":img_i = 1
                    break;
                case "产后":img_i = 2
                    break;
                case "0-6个月":img_i = 3
                    break;
                case "6-12个月":img_i = 4
                    break;
                case "1-3岁":img_i = 5
                    break;
                case "3岁以上":img_i = 6
                    break;
            }
            for (var i=0;i<tab_goodsImg.length ;i++){
                // 改变照片
                var j = i + 1
                var imgPath = 'img/tl_tab/tab'+ img_i + '_'+ j + '.jpg'
                $('.col-md-2 div img').eq(i).attr('src',imgPath)
            }
        })

//      11 热门评论 tab的切换
        $('.hotCom_tab ul li').click(function(){
            //当前添加active 将之前的active 移除
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
            // 判断当前点击的是哪一个 然后将tab条移动到该位置
            // 289 ? 不知道什么情况,纯粹是为了凑数
            var endLeft = 0
            var tabCount = 0
            switch($(this).html()) {
                case "防辐射服":tabCount = 1
                    break;
                case "孕妇装":tabCount = 2
                    break;
                case "纸尿裤":tabCount = 3
                    break;
                case "产后用品":tabCount = 4
                    break;
                case "奶瓶奶嘴":tabCount = 5
                    break;
                case "妈咪美容":tabCount = 6
                    break;
                case "洗护用品":tabCount = 7
                    break;
                case "安全座椅":tabCount = 8
                    break;
                case "喂养用品":tabCount = 9
                    break;
            }
            // 动画
            endLeft = 101 * (tabCount-1)
            $('.hotCom_tabIndi').animate({
                'left':endLeft = endLeft
            })

            // 改变用户晒单栏的显示
            // 清空所有数据
            $('.buyerShow .container .row').empty()

            // 再去创建
            var goodsNameArr = ["1023954@qq.com","匿名","15647814","美丽的雨","14313@163.com","匿名","12154@126.com","babyhello"]
            var goodsComArr = ["款式时尚 大小正合适款式时尚 大小正合适款式时尚",
            "美丽大方端庄整洁很好很喜欢","刚刚好，不多也不少，下次还来","款式时尚 大小正合适款式时尚 大小正合适款式时尚",
                "防辐射真的防防辐射，一点信号也灭了","倾力推荐此时不买更待何时","非常舒适。很喜欢，真的不错","非常舒适。很喜欢，真的不错"]
            for(var i =0;i<8;i++){
                var j = i + 1;
                var imgPath = "img/hotComImg/hotCom"+ tabCount +'_' + j + '.jpg'
                var goodsBox = $('<div class="col-md-3"> <div class="showGoodsBox"> <div class="hotCom_goodsImg"><img src="" alt=""/></div><div class="hotCom_goodsInfo"><div class="hotCom_goodsUser">1023954@qq.com</div><div class="hotCom_goodsStar">★★★★★</div><div class="hotCom_goodsCom">款式时尚 大小正合适款式时尚 大小正合适款式时尚</div></div></div></div>')
                $('.buyerShow .container .row').append(goodsBox)
                $('.hotCom_goodsImg img').eq(i).attr('src',imgPath)
                var nameRandom = Math.floor(Math.random()*7)

                $('.hotCom_goodsInfo .hotCom_goodsUser').eq(i).html(goodsNameArr[nameRandom])
                $('.hotCom_goodsInfo .hotCom_goodsCom').eq(i).html(goodsComArr[nameRandom])
            }
        })
/*-------------------------------------------------------------*/





})