<?php
	
	require 'config.php';	
	// 接受到前端发送过来的数据
	$user = $_POST['username'];
	$pwd = $_POST['password'];

	// 查询数据库内容
	// 根据提交的用户名查找出对应的一行
	$query = mysql_query("SELECT user,pwd FROM user_data WHERE user='$user'") or die('no_user'.mysql_close());

	// 取出关联数组,
	while (!!$row = mysql_fetch_array($query,MYSQL_ASSOC)) {
		// 取出密码，和用户提交的密码进行对比
		$feedpwd = $row['pwd'];
		if ($feedpwd == $pwd) {
			echo "success";
		}else{
			echo "fail";
		}
	}


?>