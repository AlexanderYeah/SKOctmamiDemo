<?php
	

	require 'config.php';
	// 接受前端传过来的数据，决定链接哪一个表，返回数据
	$keyword = $_POST['keyword'];
	$tablename = "";

	switch ($keyword) {
		case '防辐射服':
			$tablename = "search1_data";
			break;
		case '待产包':
			$tablename = "search2_data";
			break;
		case '孕期防护':
			$tablename = "search3_data";
			break;
		case '孕妇装':
			$tablename = "search4_data";
			break;								
		default:
			#code...
			break;
	}

	// 操作数据库，取出全部数据
	$query = mysql_query("SELECT * FROM $tablename");
	// 将数据转换成json 格式的
	$json = "";
	while (!!$row = mysql_fetch_array($query,MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}
	// 获取所有的记录的总数 
	$json = substr($json,0,-1);
	$total = mysql_num_rows(mysql_query("SELECT * FROM $tablename"));
	echo '{"total":'.$total.',"rows":['.$json.']}';


?>