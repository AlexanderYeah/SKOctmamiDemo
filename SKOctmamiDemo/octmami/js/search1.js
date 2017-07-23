/**
 * Created by Alexander on 17/1/9.
 */

$(function(){

    // 0 进来之前,根据关键字去数据库拿数据
    var char = decodeURIComponent(window.location.href.split('=')[1]);

    // 1 加载完毕，就去数据库拿数据
    $.post("search1.php",{
        "keyword":char
    },function(response,status,xhr){
        // 1 取出响应数组
        var data = $.parseJSON(response);
        var total = data["total"];
        var rows = data["rows"];
        var nameArr = new Array();
        var titleArr = new Array();
        var priceArr = new Array();
        // 2 处理数据
        var i = 0;
        for(i;i<total;i++){
            // 每一行的数据
            var rowData = rows[i];
            // 将数据 push 进去
            nameArr.push(rowData["imgname"]);
            titleArr.push(rowData["title"]);
            priceArr.push(rowData["price"]);
        }
        // 3根据获取元素的数量，来改变container的高度
        var colNum = 0;
        if (total%5 == 0){
            colNum = total/5;
        }else{
            colNum = total/5 +1;
        }
        var conHeight = 298 * colNum;
        $('.container').first().css('height',conHeight)

        // 4创建单元块
       var i = 0;
       for (i;i<total;i++){
           var imgname = "img/search/search1/" + nameArr[total-1-i];
           var title = titleArr[i];
           var price = '¥'+priceArr[i]+'.00';
           var box = $('<div class="col-md-2"><div><img src=""><h5></h5><div class="price_box"><span>RMB:</span><span class="price">¥25800</span><button class="buy_btn">购买</button></div></div></div>')
           $('.row').prepend(box)
           $('.row div').first().find('img').attr('src',imgname)
           $('.row div').first().find('h5').html(title)
           $('.row div').first().find('.price').html(price)
       }


    })
    // 2 根据数据库的条数，动态的创建元素

//    for (var i =0;i<15;i++){
//        var imgname = "img/"+"1.png";
//        alert(imgname)
//        var box = $('<div class="col-md-2"><div><img src=""><h5></h5><div class="price_box"><span>RMB:</span><span class="price">¥25800</span><button class="buy_btn">购买</button></div></div></div>')
//        $('.row').prepend(box)
//        $('.row div').first().find('img').attr('src',imgname)
//        $('.row div').first().find('h5').html(imgname)
//        $('.row div').first().find('.price').html('¥'+112+'.00')
//
//    }




})
