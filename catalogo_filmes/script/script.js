const URL_FILMES = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"

const catalogo = document.getElementById("catalogo")
const modelo = document.getElementById("modelo-ficha")

function corDaFaixaEtaria(idade){
    if(idade <= 14) return "verde"
    if(idade < 18) return "amarelo"
    return "vermelho"
}

function mediaOpinioes(opinioes){
    if(!opinioes || opinioes.length === 0) return 0
    const soma = opinioes.reduce((total, o) => {
        return total + o.rating
    }, 0)
    return soma / opinioes.length
}

function criarEstrelas(media){
    const cheias = Math.round(media)
    const fragmento = document.createDocumentFragment()

    for(let i = 1; i <= 5; i++){
        const estrela = document.createElement("span")
        estrela.textContent = "★"
        estrela.className = i <= cheias ? "estrela-cheia" : "estrela-vazia"
        fragmento.appendChild(estrela)
    }
    return fragmento
}

function preencherFichas(filme, todos = []){
    const ficha = modelo.content.cloneNode(true)
    ficha.querySelector(".titulo").textContent = filme.titulo
    ficha.querySelector(".resumo").textContent = filme.resumo

    const capa = ficha.querySelector(".capa")
    capa.src = filme.figura
    capa.alt = "Capa de "+filme.titulo

    ficha.querySelector(".generos").textContent = filme.generos.join(", ")
    ficha.querySelector(".elenco span").textContent = filme.elenco.join(", ")

    const faixa = ficha.querySelector(".faixa-etaria")
    faixa.textContent = filme.classificacao === 0 ? "Livre" : filme.classificacao
    faixa.classList.add(corDaFaixaEtaria(filme.classificacao))

    ficha.querySelector(".estrelas").appendChild(
        criarEstrelas(mediaOpinioes(filme.opinioes))
    )

    const areaSimilares = ficha.querySelector(".similares")
    filme.titulosSemelhantes.forEach((id) => {
        const similar = todos.find((f) => f.id === id)
        if(!similar) return

        const img = document.createElement("img")
        img.src = similar.figura
        img.alt = similar.titulo
        img.title = similar.titulo
        areaSimilares.appendChild(img)
    })
    catalogo.appendChild(ficha)
}

async function carregarFilmes(){
    try{
        const resposta = await fetch(URL_FILMES)
        if(!resposta.ok){
            throw new Error("Erro HTTP "+ resposta.status)
        }
        const filmes = await resposta.json()
        console.log(filmes)
        filmes.forEach((filme) => {
            preencherFichas(filme, filmes)
        })
    }catch(erro){
        console.error("Não foi possível carregar os filmes:", erro)
        catalogo.textContent = "Não foi possível carregar o catálogo."
    }
}

carregarFilmes()

