<?php
    header('Content-Type:text/html;charset=utf-8');
    define('DB_HOST','127.0.0.1');
    define('DB_USER','root');
    define('DB_PWD','123456');
    define('DB_NAME','oct_user');
	$conn = @mysql_connect(DB_HOST, DB_USER, DB_PWD) or die('数据库链接失败：'.mysql_error());
	@mysql_select_db(DB_NAME,$conn) or die('数据库错误：'.mysql_error());
	@mysql_query('SET NAMES UTF8') or die('字符集错误：'.mysql_error());


?>