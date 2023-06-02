// Função para fazer a requisição ao servidor
async function checkPageChange() {
    // Faz uma requisição ao servidor para verificar se houve alteração
    await fetch('/192.168.1.9')
      .then(response => response.json())
      .then(data => {
        if (data.hasChanged) {
          // Recarrega a página se houve alteração
          location.reload();
        } else {
          // Se não houve alteração, faz outra requisição após um intervalo de tempo
          setTimeout(checkPageChange, 1000); // Verifica novamente após 5 segundos
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro na requisição:', error);
        // Se ocorrer um erro, faz outra requisição após um intervalo de tempo
        setTimeout(checkPageChange, 1000); // Verifica novamente após 5 segundos
      });
  }
  
  // Inicia a verificação da alteração da página
  checkPageChange();