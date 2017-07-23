/**
 * Created by Alexander on 17/1/6.
 */

$(function(){

    // 1 邮箱自动补全
    $('#username').autocomplete({
        autoFocus:true,
        delay:0,
        source:function(request,response){
            var hosts = ['qq.com','163.com','126.com','sina.com'] // 起始
            term = request.term,// 获取输入值
                ix = term.indexOf('@'), // @
                name = term, // 用户名
                host = '', // 域名
                result = []; // 结果

            // 结果第一条是自己输入
            result.push(term);
            if(ix>-1){ // 如果有@的时候
                name = term.slice(0,ix); // 得到用户名
                host = term.slice(ix + 1) // 得到域名
            }
            if(name){
                // 得到找到的域名
                // 如果用户已经输入@和后面的域名，那么久直接找到相关的提示
                // 比如 alex@1，就直接提示alex@163.com
                // 如果用户还没有输入@或者后面的域名，则直接返回所有的域名
                // 使用三目运算符进行判断
                // 使用indexOf 进行查找，用户输入1 ，则会找到1开头的
                var findedHosts = (host ? $.grep(hosts,function(value,index){

                    return value.indexOf(host)>-1;
                }):hosts)

                // 最终的邮箱列表
                // 使用map 筛选数据
                findedResult = $.map(findedHosts,function(value,index){
                    return name + '@' + value
                });
                // 增加一个自我输入
                // 链接两个或者多个数组
                result = result.concat(findedResult)
            }
            // 将结果数组输出 进行显示
            response(result)
        }
    })




//    var form_div = ;
    //3 点击确定，格式正确，注册，格式错误，则提示用户
    $('#regist_btn').click(function(){
        // 1 验证用户的输入
        if(verifyRegist()){
           // 证明所有条件都已满足
           // 1 用户数据写入数据库
            $.post('regist.php',{
                'username':$('#username').val(),
                'password':$('#password').val()
            },function(respones,status,xhr){
                // 对请求响应做处理
                // 1 注册成功 提示用户
                if(respones==""){
                    $('.regist_suc').first().css('display','block');
                }
                // 2 注册不成功,同样提示用户
                if(respones == "user_exist"){
                    $('.show_info').eq(0).html("*用户名已经存在")
                    $('.show_info').eq(0).css('display','inline-block')
                    $('form .form-group').eq(0).addClass('has-error')
                }
                //

            })

        }else{

        }


    })

    // 验证方法
    function verifyRegist(){
        //校验两次密码是否输入一致
        var pwdValue = $('#password').val();
        var ensurePwdVal = $('#ensure_pwd').val();
        var userValue = $('#username').val();
        // 进来之前，先把之前的提示样式信息清空

        // 1 如果用户名为空，提示用户
        if(userValue==""){
            $('.show_info').eq(0).html("*用户名不得为空")
            $('.show_info').eq(0).css('display','inline-block')
            $('form .form-group').eq(0).addClass('has-error')
        }else{
            $('.show_info').eq(0).css('display','none')
            $('form .form-group').eq(0).removeClass('has-error')
        }
        // 2 如果密码为空，提示用户
        if(pwdValue==""){
            $('.show_info').eq(1).html("*密码不得为空")
            $('.show_info').eq(1).css('display','inline-block')
            $('form .form-group').eq(1).addClass('has-error')
        }else{
            $('.show_info').eq(1).css('display','none')
            $('form .form-group').eq(1).removeClass('has-error')
        }

        // 3 校验两次密码是否输入一致
        if(pwdValue != ensurePwdVal){
            $('.show_info').eq(2).html("*两次输入密码不一致")
            $('.show_info').eq(2).css('display','inline-block')
            $('form .form-group').eq(2).addClass('has-error')
        }else{
            $('.show_info').eq(2).css('display','none')
            $('form .form-group').eq(2).removeClass('has-error')
        }
        // 4 用户名 正则验证
        var re = /^([a-z|A-Z|0-9|_|-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(re.test(userValue)){
            $('.show_info').eq(0).css('display','none')
            $('form .form-group').eq(0).removeClass('has-error')
        }else{
            $('.show_info').eq(0).html("*用户名格式不正确")
            $('.show_info').eq(0).css('display','inline-block')
            $('form .form-group').eq(0).addClass('has-error')
        }

        // 5 密码控制不得小于6位
        if(pwdValue.length < 6){
            $('.show_info').eq(1).html("*密码不得小于6位")
            $('.show_info').eq(1).css('display','inline-block')
            $('form .form-group').eq(1).addClass('has-error')
        }else{
            $('.show_info').eq(1).css('display','none')
            $('form .form-group').eq(1).removeClass('has-error')
        }

        if(userValue!=""&&pwdValue!=""&&pwdValue == ensurePwdVal&&re.test(userValue)&&pwdValue.length >= 6){
            return true
        }else{
            return false
        }

    }


})