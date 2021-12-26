<?php

<!-- Path of images is given but image files are not there due to size  -->
$a=rand(1,5);
    switch($a)
    {       case 1:
            $greet2 ="../../images/1.jpg";
            break;
            case 2:
            $greet2 ="../../images/2.png";
            break;
            case 3:
            $greet2 ="../../images/3.png";
            break;
            case 4:
            $greet2 ="../../images/4.png";
            break;
            case 5:
            $greet2 ="../../images/5.jpg";
    }
             
 echo" <img src='$greet2' height='300' width='300'>";
 
?>
