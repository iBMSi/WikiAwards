## WikiAwards: Um Banco de Dados Interativo de Premiações de Jogos

### Introdução

O WikiAwards é um projeto web que tem como objetivo criar um repositório online das principais premiações da indústria de jogos. 
Utilizando HTML, CSS e JavaScript, o projeto permite aos usuários pesquisar por jogos, explorar categorias e visualizar informações detalhadas sobre os vencedores de cada ano.

### Estrutura do Projeto

O projeto é composto por quatro arquivos principais:

* **index.html:** Define a estrutura da página, incluindo o layout, os elementos interativos (botões, campos de pesquisa) e a organização do conteúdo.
* **style.css:** Estiliza a página, definindo cores, fontes, tamanhos, espaçamentos e responsividade para diferentes dispositivos.
* **app.js:** Contém a lógica JavaScript para a interação com o usuário, a filtragem dos dados e a atualização da interface.
* **dados.js:** Contém o banco de dados completo das informações do site.

### Análise Detalhada do Código

#### HTML

* **Cabeçalho:** Define o título da página e importa os arquivos CSS e JavaScript.
* **Corpo:**
  * **Seção de navegação:** Contém os botões para filtrar os resultados por ano.
  * **Campo de pesquisa:** Permite aos usuários pesquisar por jogos ou categorias.
  * **Seção de resultados:** Exibe os resultados da pesquisa, incluindo o nome do jogo, ano, categoria e outras informações relevantes.
* **Rodapé:** Contém informações sobre os créditos do projeto.

#### CSS

* **Estilização geral:** Define a aparência da página, incluindo cores, fontes e layout.
* **Responsividade:** Utiliza media queries para adaptar a interface a diferentes tamanhos de tela.
* **Componentes:** Estiliza cada elemento individual da página, como botões, inputs e a caixa de resultados.

#### JavaScript
* **Array de dados:** Armazena as informações sobre os jogos premiados em cada ano, incluindo o nome do jogo, categoria, ano e outras informações relevantes.
* **Funções de filtragem:**
  * `clickXX()`: Filtra os dados com base no ano selecionado.
  * `pesquisar()`: Filtra os dados com base no termo de pesquisa.
* **Manipulação do DOM:** Atualiza a seção de resultados da página com base nos resultados da filtragem.

### Exemplo de Código e Explicação

**HTML:**

```html
<section>
  <input type="text" id="campo-pesquisa" placeholder="Pesquisar">
  <button onclick="pesquisar()">Pesquisar</button>
  <div id="resultados-pesquisa"></div>
</section>
