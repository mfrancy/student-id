const aluno = JSON.parse(localStorage.getItem("aluno"))

if(!aluno){

window.location.href = "index.html"

}else{

document.getElementById("nomeAluno").innerText = aluno.nome
document.getElementById("raAluno").innerText = aluno.ra
document.getElementById("cursoAluno").innerText = aluno.curso
document.getElementById("statusAluno").innerText = aluno.status
// document.getElementById("matriculaAluno").innerText = aluno.matricula

if(aluno.foto){
document.getElementById("fotoAluno").src = aluno.foto
}



new QRCode(document.getElementById("qrCode"), {
  text: aluno.ra,
  width: 90,
  height: 90
});}

function logout() {
  const btnLogout = document.getElementById('btn-logout')
  window.location.href = "../index.html"
}