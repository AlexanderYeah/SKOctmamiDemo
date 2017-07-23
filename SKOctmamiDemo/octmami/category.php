<?php
	require 'config.php';

	// 获取前端发送的数据 

	$pageinfo = 1;

	// 获取前端的分类词汇
	$sortWord = $_POST['sortWord'];
	
	
	switch ($sortWord) {
		case '默认':
		// 操作数据库，取出全部的数
		$query  = mysql_query("SELECT imgname,title,price FROM category1_data  LIMIT $pageinfo ,20") or die("查询出错1".mysql_error());
			break;
		case '价格':
		// 操作数据库，取出全部的数
		$query  = mysql_query("SELECT imgname,title,price FROM category1_data order by price  LIMIT $pageinfo,20") or die("查询出错2:".mysql_error());
			break;
		case '销量':
		// 操作数据库，取出全部的数
		$query  = mysql_query("SELECT * FROM category1_data order by salecount LIMIT $pageinfo ,20") or die("查询出错3".mysql_error());
			break;					
		default:
		$query  = mysql_query("SELECT imgname,title,price FROM category1_data LIMIT $pageinfo ,20") or die("查询出错4".mysql_error());
			break;
	}


	// 操作数据库，取出全部的数
	$json = "";
	while (!!$row = mysql_fetch_array($query,MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}
	// 获取记录的总数
	$json = substr($json, 0,-1);
	$total = mysql_num_rows(mysql_query("SELECT * FROM category1_data"));
	echo '{"total":'.$total.',"rows":['.$json.']}';

?>