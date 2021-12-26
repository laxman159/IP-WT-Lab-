<?php
$bday = new DateTime('11.4.1987'); // Your date of birth
$today = new Datetime(date('m.d.y'));
$diff = $today->diff($bday);
printf(' Your age : %d years, %d month, %d days', $diff->y, $diff->m, $diff->d);
printf("\n");
?>

<!-- Sample Output:

 Your age : 30 years, 3 month, 0 days -->
