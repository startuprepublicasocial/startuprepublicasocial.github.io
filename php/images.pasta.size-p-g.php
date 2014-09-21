<?

function ImagesPasta($PastaP, $PastaM, $x, $y)
{
//define pasta
$dir = $PastaP;
$dir_g = $PastaM;

$dirhandle = opendir("$dir");

while ($arquivos = readdir($dirhandle))
{
   if($arquivos != "." && $arquivos != "..")
   {
	   
	   $_x = $x+5;
	   $_y = $y+5;
	   
	   echo '<li><img src="'.$dir_g.'/'.$arquivos.'" rel="lightbox[lightbox]">';
   } 
}//while

}//function

?>


