<?php
include('config.php');
$nome = $_POST['cadNome'];
$email = $_POST['cadEmail'];
$senha = $_POST['cadPassword'];
$nascimento = $_POST['cadData-nascimento'];

$infoRequest = "INSERT IGNORE INTO users(id, nome, email, senha, nascimento)
VALUES('', '$nome','$email','$senha','$nascimento')";
$verif = "select email from users";
$a = mysqli_query($conexao, $verif);
mysqli_query($conexao, $infoRequest);
if($a == $email){
    echo "<script>
alert('Endereço de E-mail já cadastrado em nosso sistema');
window.location = 'accont.html';

</script>";
}else{
echo "<script>
alert('usuario cadastrado com sucesso!');
window.location = '/github/loja-online/accont.html';

</script>";
}
mysqli_close($conexao);
?>