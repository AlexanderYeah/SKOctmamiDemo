/**
 * Created by Alexander on 17/2/9.
 */

$(function(){


    // 1  复选框 全部选中
    // 1.1 表头全选框
    var oHeadCheckBox = $('thead tr .thead_first input')
    var aBodyCheckBox = $('tbody tr .tbody_item1 input')
    var oTotalPrice = $('tfoot tr .tfoot_item6 span')
    var aBodySinglePrice = $('tbody tr .tbody_item5 span')
    oHeadCheckBox.click(function(){
        // 判断其状态
        if(oHeadCheckBox.is(':checked')){
            // jQuery中此处不能使用attr 进行设置checked 属性 ，应使用prop
            // bug 会造成FF IE10 chrome 浏览器 第一次选中成功 第二次不成功
            aBodyCheckBox.prop('checked',true)
            // 更新总价格
            var totalPrice = 0;

        }else{
            aBodyCheckBox.prop('checked',false)
            totalPrice  = 0;
        }
        oTotalPrice.html('&yen'+totalPrice + '.00')
    })

    function calTotalPrice (){
        var totalPrice = 0;
        for (var i=0;i<aBodyCheckBox.length;i++){
            totalPrice += Number(aBodySinglePrice.eq(i).html().substr(1,15))
        }
        alert(totalPrice)
        return totalPrice;

    }

    // 2 加减按钮功能的实现
    var aBodyMinusBtn = $('tbody tr .tbody_item4 .sale_count .minus_btn');
    var aBodyAddBtn = $('tbody tr .tbody_item4 .sale_count .add_btn');
    var aBodyInput = $('tbody tr .tbody_item4 .sale_count .show_count')
    var aBodytotalPrice = $('tbody tr .tbody_item5 span')

    // 减号按钮的点击
    for(var i=0;i < 3 ;i++){
        aBodyMinusBtn.eq(i).attr('index',i)
        aBodyMinusBtn.eq(i).click(function(){
            var index = $(this).attr('index')
            // 根据索引设置其对应input的变化
            var curVal = Number(aBodyInput.eq(index).val()) - 1
            // 边界 如果等于0，则不能够变化
            if (curVal <= 0){
                // 禁用按钮
                $(this).attr('disabled','disabled')
            }
            aBodyInput.eq(index).val(curVal)
            // 计算单行的价格
            calSinglePrice (index,curVal)
            // 如果全选框已经选中，则此时点击的话，要更新总价格
            if(oHeadCheckBox.is(':checked')){
                // 更新总价格

            }


        })
    }
    // 加号按钮的点击
    for(var i=0;i < 3 ;i++){
        aBodyAddBtn.eq(i).attr('index',i)
        aBodyAddBtn.eq(i).click(function(){
            var index = $(this).attr('index')
            // 根据索引设置其对应input的变化
            var curVal = Number(aBodyInput.eq(index).val()) + 1
            // 边界 如果等于0，则不能够变化
            if (curVal >= 0){
                // 启用按钮
                aBodyMinusBtn.eq(index).removeAttr('disabled')
            }
            aBodyInput.eq(index).val(curVal)
            // 根据数量 计算 小计价格
            calSinglePrice(index,curVal)
        })
    }
    // 3 删除按钮的点击
    var aBodyDelBtn = $('tbody tr .tbody_item6')
    for (var i=0;i < aBodyDelBtn.length;i++){

        aBodyDelBtn.eq(i).click(function(){
            aBodyDelBtn.eq(i).attr('index',i)
            // 根据索引 删除对应行
            var index = $(this).attr('index')
            $('tbody tr').eq(index).remove()
            // 动态改变table的高度
            var curTabHeight = $('#goods_table').css('height')
            var endTabHeight = Number(curTabHeight.substr(0,3)) - 123 + 'px'
           $('#goods_table').css('height',endTabHeight)
        })
    }


/*-----------------------------函数的抽取----------------------------*/
    // 计算单个价格函数
    function calSinglePrice (index,curVal){
        // 根据数量 计算 小计价格
        var singPrice = 0
        switch (index){
            case '0':singPrice = 299;
                break;
            case '1':singPrice = 425;
                break;
            case '2':singPrice = 505;
                break;
        }
        var totalPrice = '&yen'+singPrice * curVal + '.00'

        aBodytotalPrice.eq(index).html(totalPrice)
    }
    // 计算总价格函数
    function calTotalPrice (){

    }

})




