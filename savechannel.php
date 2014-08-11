<?php
require_once("../cnx.php");
$channel=mysql_real_escape_string($_POST['channel']);
$rs=mysql_query("SELECT * FROM android WHERE channel='$channel'");
$tot = mysql_num_rows($rs);
if($tot<1){
	if(mysql_query("INSERT INTO android (channel) VALUES ('$channel')")){
		echo "ok";
	}else{
		echo "mal";
	}
}
?>