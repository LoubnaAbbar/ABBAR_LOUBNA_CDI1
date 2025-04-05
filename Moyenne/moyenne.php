<?php

function calculerMoyenne($note1, $note2, $note3) {
    $moyenne = ($note1 + $note2 + $note3) / 3;
    return $moyenne;
}

function afficherResultat($nom, $moyenne) {
    if ($moyenne >= 10) {
        echo "$nom a une moyenne de " . round($moyenne, 2) . " : C'est suffisant <br>";
    } else {
        echo "$nom a une moyenne de " . round($moyenne, 2) . " : C'est insuffisant<br>";
    }
}


$moyenneAlice = calculerMoyenne(12, 15, 8);
afficherResultat("Alice", $moyenneAlice);

$moyenneBob = calculerMoyenne(9, 7, 10);
afficherResultat("Bob", $moyenneBob);

$moyenneClaire = calculerMoyenne(16, 18, 17);
afficherResultat("Claire", $moyenneClaire);

$moyenneDavid = calculerMoyenne(5, 6, 4);
afficherResultat("David", $moyenneDavid);

$moyenneEmma = calculerMoyenne(10, 10, 10);
afficherResultat("Emma", $moyenneEmma);

?>