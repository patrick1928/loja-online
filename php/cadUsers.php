<?php
include('config.php');
$nome = $_POST['cadNome'];
$email = $_POST['cadEmail'];
$senha = $_POST['cadPassword'];
$nascimento = $_POST['cadData-nascimento'];

$infoRequest = "INSERT IGNORE INTO users(id, nome, email, senha, nascimento)
VALUES('', '$nome','$email','$senha','$nascimento')";
mysqli_query($conexao, $infoRequest);
if(mysqli_errno($conexao)){
    echo "<script>
alert('Endereço de E-mail já cadastrado em nosso sistema');
window.location = '/projetos-php/Loja online/accont.html';

</script>";
}else{
echo "<script>
alert('usuario cadastrado com sucesso!');
window.location = '/projetos-php/Loja online/accont.html';

</script>";
}
?>