
var conteudoDaPagina = document.getElementById('conteudo')

function conteudoHome() {
    var homeHtml = `
        <div id="conteudo-home">
            <div class="slider">
                <!-- imagens do slider -->
                <div class="carregando"><div class="loading1"></div><div class="loading2"></div><h3>Carregando ...</h3></div>
            </div>
            <section>
                <h1 id="titulo-section-1" class="titulo-section"></h1>
                <div class="container-produtos">
                    <ul id="conteudo-1" class="conjunto-produtos">
                    <div class="carregando"><div class="loading1"></div><div class="loading2"></div><h3>Carregando ...</h3></div>
                    </ul>
                </div>
            </section>
            <section>
                <h1 id="titulo-section-2" class="titulo-section"></h1>
                <div class="container-produtos">
                    <ul id="conteudo-2" class="conjunto-produtos">
                    <div class="carregando"><div class="loading1"></div><div class="loading2"></div><h3>Carregando ...</h3></div>
                    </ul>
                </div>
            </section>
            <section>
                <h1 id="titulo-section-3" class="titulo-section"></h1>
                <div class="container-produtos">
                    <ul id="conteudo-3" class="conjunto-produtos">
                    <div class="carregando"><div class="loading1"></div><div class="loading2"></div><h3>Carregando ...</h3></div>
                    </ul>
                </div>
            </section>
            <section>
                <h1 id="titulo-section-3" class="titulo-section"></h1>
                <div class="container-produtos">
                    <ul id="conteudo-3" class="conjunto-produtos">
                    </ul>
                </div>
            </section>
        </div>`

conteudoDaPagina.innerHTML=homeHtml;
dadosHome()
acaoMenu()
}
conteudoHome()

function conteudoHamburgueres() {
    var HamburgueresHtml = `
    <div id="conteudo-Hamburgueres">
        <div class="slider">
            <img src="imagens/img-menu-Hamburgueres.jpg" alt="">
        </div>
        <section>
            <div class="container-produtos">
                <ul class="conjunto-produtos">
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <main>
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                        </main>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                </ul>
            </div>
        </section>
    </div>`

conteudoDaPagina.innerHTML=HamburgueresHtml;
acaoMenu()
}

function conteudoPasteis() {
    var PasteisHtml = `
    <div id="conteudo-Hamburgueres">
        <div class="slider">
            <img src="imagens/teste.jpg" alt="">
        </div>
        <section>
            <div class="container-produtos">
                <ul class="conjunto-produtos">
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                </ul>
            </div>
        </section>
    </div>`

conteudoDaPagina.innerHTML=PasteisHtml;
acaoMenu()
}

function conteudoSalgados() {
    var SalgadosHtml = `
    <div id="conteudo-Hamburgueres">
        <div class="slider">
            <img src="imagens/teste.jpg" alt="">
        </div>
        <section>
            <div class="container-produtos">
                <ul class="conjunto-produtos">
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                </ul>
            </div>
        </section>
    </div>`

conteudoDaPagina.innerHTML=SalgadosHtml;
acaoMenu()
}

function conteudoBebidas() {
    var BebidasHtml = `
    <div id="conteudo-Hamburgueres">
        <div class="slider">
            <img src="imagens/teste.jpg" alt="">
        </div>
        <section>
            <div class="container-produtos">
                <ul class="conjunto-produtos">
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                    <li class="produto">
                        <img src="imagens/teste.png" alt="">
                        <h3>TRIPLO CHEESBURGUER</h3>
                        <ul>
                            <li>Pão</li>
                            <li>3 hambúrgueres de carne</li>
                            <li>Queijo cheddar</li>
                            <li>Cebola</li>
                            <li>Picles</li>
                        </ul>
                        <div><h4>R$ 15,90</h4><button><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div>
                    </li>
                </ul>
            </div>
        </section>
    </div>`

conteudoDaPagina.innerHTML=BebidasHtml;
acaoMenu()
}