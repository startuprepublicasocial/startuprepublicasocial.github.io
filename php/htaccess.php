<?

// paginas htaccess ----------------------------------------------------

//link
$url = "localhost/templates/drwelington";
//$is_url = $conexaoHtaccess->exibi['url'].'!/';

define('url', $url);
//define('is_url', $is_url);

//explode link por "/" começando com o "0" .."1" .. "2" ... ... "20"
$link = explode('/', $_GET['page']);

#print_r($link);

if( empty($link[0]) ){
$paginaExibi = "_home.php";
}
elseif( $link[0] == '!' ){
		
	if( is_file($link[1]) ){
		$paginaExibi = "_".$link[1].".php";
	}
	elseif( is_dir($link[1]) ){
		$paginaExibi = $link[1]."/".$link[2].".php";
	}
	else{
        $paginaExibi = "_404.php";
	}
	
}
elseif( $link[0] != '!' ){
   $paginaExibi = "_".$link[0].".php";
}
else
{
   $paginaExibi = "_404.php";
}

//--------------------------------------------------------------



///// FIM htacess------------------------------------------------