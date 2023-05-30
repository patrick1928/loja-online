<?php
include('config.php');
$nome = $_POST['cadNome'];
$email = $_POST['cadEmail'];
$senha = $_POST['cadPassword'];
$nascimento = $_POST['cadData-nascimento'];

$infoRequest = "INSERT IGNORE INTO users(id, nome, email, senha, nascimento)
VALUES('', '$nome','$email','$senha','$nascimento')";
$verif = "select email from users";
mysqli_query($conexao, $infoRequest);

    echo "<script>
alert('Endereço de E-mail já cadastrado em nosso sistema');
window.location = '/github/loja-online/accont.html';

</script>";

mysqli_close($conexao);
?>