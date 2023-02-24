function Enviar() {
  var nome = document.getElementById('nomeid')
  var tel = document.getElementById('foneid')
  var email = document.getElementById('emailid')
  if (nome.value != '') {
    alert(
      'Obrigado sr(a) ' +
        nome.value + tel.value + email.value ' os seus dados foram encaminhados com sucesso'
    )
  }
}
