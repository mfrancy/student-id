async function login() {

    const ra = document.getElementById("ra").value
    const senha = document.getElementById("senha").value

    try {

        const response = await fetch("https://mfrancy.github.io/json-db/db/students.json")
        const alunos = await response.json()

        const aluno = alunos[ra]

        if (aluno && aluno.senha === senha) {

            const alunoCompleto = {
                ra: ra,
                ...aluno
            }

            localStorage.setItem("aluno", JSON.stringify(alunoCompleto))

            window.location.href = "/pages/carteirinha.html"

        } else {

            document.getElementById("erro").innerText = "RA ou senha inválidos"

        }

    } catch (e) {

        console.error(e)
        document.getElementById("erro").innerText = "Erro ao conectar com o servidor"

    }

}