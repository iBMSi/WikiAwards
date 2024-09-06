function pesquisar(){
    console.log(dados);

let campoPesquisa = document.getElementById
("campo-pesquisa").value


let section = document.getElementById("resultados-pesquisa");
let resultados = ""
let titulo = ""
let descrição = ""
campoPesquisa = campoPesquisa.toLowerCase()


for(let dado  of dados){
     
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLowerCase()

    if(campoPesquisa == ""){
        section.innerHTML = "Nada para procurar"
        return
    }

    if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)){

        resultados += `
    <div class="item-resultado">
            <h2>
                <p> ${dado.titulo} </p> 

                <p class="descrição-meta">
                  ${dado.descrição} </p>

                <a href= ${dado.link} target="_blank"> ${dado.ganhador}</a>
            </h2>
        </div> `;

    }
    if(!resultados){
        section.innerHTML = "Nenhum resultado encontrado"
        return
    } 

}

section.innerHTML = resultados;

}