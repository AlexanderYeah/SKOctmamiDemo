<?php
	
	 require 'config.php';

	// 接受到前端发送过来的数据
	$user = $_POST['username'];
	$password = $_POST['password'];
	
	// 1 第一步,查询一下数据库用户名是否存在，存在的话去提示用户
	// 如果返回ok 则证明用户名不存在
	$query1 = mysql_query("SELECT user FROM  user_data WHERE user='$user'") or die('ok');
	// 如果存在数据，则证明用户名存在 
	$total = mysql_num_rows($query1);
	if ($total != 0) {
		// 此时要返回用户名存在
		echo "user_exist";		
	}
	// 将数据插入数据库
	$query2 = mysql_query("INSERT INTO user_data(user,pwd) VALUES ('$user','$password')") or die('SQL错误'.mysql_error());

?>