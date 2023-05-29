<?php
require('config.php');
$sql = "SELECT * FROM users";
$verif = mysqli_query($conexao,$sql);
while($userData = mysqli_fetch_assoc($verif)){
    echo "$userData[name]";
}
?>