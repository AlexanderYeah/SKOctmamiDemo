/**
 * Created by Alexnder on 17/1/10.
 */

$(function(){



   // 1 更多信息按钮的点击
    $('#show_more').click(function(){
        // 显示更多颜色
        var btnValue = $('#show_more').html();
        if(btnValue == "更多"){
            $('.color_more').css('display','block');
            $('.color').css('border-bottom','0px solid #ffffff');
            $('#show_more').html("收起");
        }else{
            $('.color_more').css('display','none');
            $('.color').css('border-bottom','1px solid rgba(221,221,221,1)');
            $('#show_more').html("更多");
        }
    })
    // 2 添加标签
    // 2.1 添加点击事件
    var choice_num =  $('.choice_box span').length;
    var i = 0;
    for (i;i<choice_num;i++){
        $('.choice_box span').eq(i).click(function(){
            var addValue = $(this).html();
            // 2.2 增加按钮
            var addBtn = $('<button class="has_choosen"></button>');
            addBtn.html(addValue)
            $('.well').append(addBtn)


        });
    }

    // 3  选择面板的按钮切换  默认 价格 销量
    for (var i = 0;i<3;i++){
        $('.choic_panel span').eq(i).click(function(){
            $(this).addClass('choice_active')
        })
    }


    // 4 请求数据 动态创建标签
    var sortword = $('.choice_active').html();

    $.post('category.php',{
        'sortWord':sortword,
        'pageinfo':1
    },function(respone,status,xhr){
        // 1 数据的处理

        var data = dealWithData(respone);

        var total = data["total"];
        var rows = data["rows"];
        var nameArr = data["nameArr"];

        var titleArr = data["titleArr"];
        var priceArr = data["priceArr"];


        // 2 确定container的高度
        ensureConHeight(rows)
        // 3 创建翻页按钮
        createPageBtn(total)
        // 4 创建元素
        createGoodsList(nameArr,priceArr,titleArr)

    })

    // 5 排序功能的实现
    // 价格  和 销量

    var choiceCount =  $('.choic_panel span').length;
    for(var i =0;i<choiceCount;i++){
        $('.choic_panel span').eq(i).click(function(){
            // 增加激活样式
            $(this).siblings().removeClass('choice_active');
            $(this).addClass('choice_active')
            // 进行排序
            var sortWord = $(this).html();
            $.post('category.php',{
                'pageinfo':1,
                'sortWord':sortWord
            },function(response,status,xhr){
                // 删除容器内所有的元素
                $('.row').empty()
                // 删除原来的翻页按钮
                $('.num_page').remove();

                // 1 数据的处理
                var data = dealWithData(response)
                var total = data["total"];
                var rows = data["rows"];
                var nameArr = data["nameArr"];
                var titleArr = data["titleArr"];
                var priceArr = data["priceArr"];
                // 2 确定container的高度
                ensureConHeight(rows)
                // 3 创建翻页按钮
                createPageBtn(total)
                // 4 创建元素
                createGoodsList(nameArr,priceArr,titleArr)
            })
        })
    }





/*--------------------------------函数抽取-----------------------------------------*/
// 处理数据
   function dealWithData(respone){

       var data = $.parseJSON(respone);

       var total = data["total"];
       var rows = data["rows"];

       var nameArr = [];
       var titleArr = [];
       var priceArr = [];

       for(var i=0;i<rows.length;i++){
           var rowData = rows[i];
           nameArr.push(rowData["imgname"]);
           titleArr.push(rowData["title"]);
           priceArr.push(rowData["price"]);
       }
       return {"rows":rows,"nameArr":nameArr,"titleArr":titleArr,"priceArr":priceArr,"total":total}
   }

// 确定container 的高度
   function ensureConHeight(rows){
       var rowCount = 0;
       if(rows.length % 4 != 0){
           rowCount = 1
       }
       var rowNum = rows.length / 4 + rowCount;
       var areaHeight =  380 * rowNum + 200;
       var containerHeight = 389 * rowNum;
       //  确定容器的高度
       $('.area_right').css('height',areaHeight)
       $('.container').css('height',containerHeight)
   }
// 创建翻页按钮
    function createPageBtn(total){
        if (total > 20){
            // 1 按钮最多5个,前四个 和 尾页
            var count = 0;
            if (total % 20 != 0){
                count = 1;
            }
            var page = parseInt(total / 20) + count;
            page = page>5? 5:page;
            for (var i =0;i<page;i++){
                var page_btn = $('<span class="num_page"></span>')
                page_btn.html(i+1)
                if(i==4){
                    page_btn.html(parseInt(total / 20) + count)
                }
                $('.page_box').append(page_btn);
                // 给按钮添加点击事件
                page_btn.click(function(){
                    pageBtnClick($(this).html())
                })
            }
        }
    }

// 动态创建元素
   function createGoodsList(nameArr,priceArr,titleArr){
       for (var i =0;i<nameArr.length;i++){
           var box = $('<div class="col-md-3"><div class="thumbnail"><img src=""><h3 class="goods_price"></h3><div class="goods_title"></div><span class="goods_favo">收藏</span><span class="goods_buy">点击购买</span></div></div>');
           $('.row').append(box);
           var price = '¥'+priceArr[i]+'.00';

           var imagename = 'img/category/category1/' + nameArr[i];
           $('.row .thumbnail').last().find('img').attr('src',imagename);
           $('.row .thumbnail').last().find('h3').html(price);
           $('.row .thumbnail').last().find('div').html(titleArr[i]);
       }
   }
// 翻页按钮的点击




// 翻页按钮的点击
    function pageBtnClick(page){
        // 根据其html 内容，发送数据给后台，获取数据
        // 获取筛选词汇
        var sortword = $('.choice_active').html()
        $.post('category.php',{
            'sortWord':sortword,
            'pageinfo':page
        },function(respone,status,xhr){
            // 1 先把所有的单元格删除
            $('.row').empty()
            // 将当前的点击对象置为active

            var btnNum = $('.num_page').length;
            $(this).siblings().removeClass("page_active")
            $(this).addClass("page_active");

            // 2 解析数据
            // 1 数据的处理
            var data = dealWithData(respone)
            var total = data["total"];
            var rows = data["rows"];
            var nameArr = data["nameArr"];
            var titleArr = data["titleArr"];
            var priceArr = data["priceArr"];
            // 2 确定container的高度
            ensureConHeight(rows)
            // 确定高度
            ensureConHeight(rows)
            // 创建元素
            createGoodsList(nameArr,priceArr,titleArr)
        })
    }




})

