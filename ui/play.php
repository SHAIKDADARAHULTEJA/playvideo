<?php
header('Content-disposition:attatchment; 
	  filename=song.mp4');
header('Content-type:video/mp4');
readfile('song.mp4')
?>