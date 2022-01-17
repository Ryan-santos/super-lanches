function divConteudo(){document.querySelector('main#boss').innerHTML=`
  <div id="conteudo">
    <div id="slider">
        <!-- imagens do slider -->
    </div>
    <section>
        <h1 id="titulo-section-1" class="titulo-section"></h1>
        <div class="container-produtos">
            <ul id="conteudo-1" class="conjunto-produtos">
                <!-- conteudo da section 1 (produtos) -->
            </ul>
        </div>
    </section>
    <section>
        <h1 id="titulo-section-2" class="titulo-section"></h1>
        <div class="container-produtos">
            <ul id="conteudo-2" class="conjunto-produtos">
                <!-- conteudo da section 2 (produtos) -->
            </ul>
        </div>
    </section>
    <section>
        <h1 id="titulo-section-3" class="titulo-section"></h1>
        <div class="container-produtos">
            <ul id="conteudo-3" class="conjunto-produtos">
                <!-- conteudo da section 3 (produtos) -->
            </ul>
        </div>
    </section>
</div>`
}

let dados = ''

async function fetchDados() {
  try {
      const response = await fetch('https://dados-super-lanches-home.herokuapp.com/')
      dados = await response.json()
      window.document.querySelector('#buttons-links').innerHTML+=`<button class="bnt" onclick="conteudohome()">${dados[0]['values'][0]}</button>`
      for (var x = 1; x < dados.length; x++) {
        window.document.querySelector('#buttons-links').innerHTML+=`<button class="bnt" onclick="conteudoMenu(dadosDoMenu = dados[${x}])">${dados[x]['values'][0]}</button>`
      }
      window.document.querySelectorAll('button.bnt')[0].classList.add('bntAtivo')
      window.document.querySelector('.bntAtivo').disabled = true;
      const bntPgOn = document.querySelectorAll('.bnt');
        function bntAtivoCor(){
            bntPgOn.forEach((item) => item.classList.remove('bntAtivo'), window.document.querySelector('.bntAtivo').disabled = false);
            this.classList.add('bntAtivo'), window.document.querySelector('.bntAtivo').disabled = true;
            acaoMenu()
        }
        bntPgOn.forEach((item) => item.addEventListener('click', bntAtivoCor));
      conteudohome()
      acaoMenu()
  } catch (error) {
    console.log(error)
  }
}
fetchDados()

// funcao que aplica o conteudo da pagina 1 da planiha
function conteudohome() {
  document.querySelector('#conteiner-topo').classList.remove('block')
  document.querySelector('#conteiner-topo').classList.add('none')
  document.querySelector('#boss').classList.add('magin-s')
  divConteudo()

  let D0V = dados[0]['values']
  var dadosImagens = ""
  if(window.matchMedia("(max-width: 700px)").matches){
    dadosImagens = [D0V[3][2], D0V[4][2], D0V[5][2], D0V[6][2], D0V[7][2]]
  }else{
    dadosImagens = [D0V[3][0], D0V[4][0], D0V[5][0], D0V[6][0], D0V[7][0]]
  }

  for (var x = 0; x < dadosImagens.length; x++) {
    if(dadosImagens[x] == undefined){
      x++
    }else{
     window.document.querySelector('#slider').innerHTML+=`<img src="${dadosImagens[x]}" alt="">` 
    }
  }
  sliders()

  function section1() {
    document.querySelector('#titulo-section-1').innerHTML=`${D0V[8]}`
    imprimir(dadosConteudo = [D0V[10], D0V[11], D0V[12], D0V[13], D0V[14]], localConteudo = document.querySelector('#conteudo-1'))
  }section1()
  
  function section2() {
    document.querySelector('#titulo-section-2').innerHTML=`${D0V[15]}`
    imprimir(dadosConteudo = [D0V[17], D0V[18], D0V[19], D0V[20], D0V[21]], localConteudo = document.querySelector('#conteudo-2'))
  }section2()
  
  function section3() {
    document.querySelector('#titulo-section-3').innerHTML=`${D0V[22]}`
    imprimir(dadosConteudo = [D0V[24], D0V[25], D0V[26], D0V[27], D0V[28]], localConteudo = document.querySelector('#conteudo-3'))
  }section3()

  document.querySelectorAll('#boss section').forEach((item) => item.classList.add('magin-s'))
  document.querySelectorAll('#boss section').forEach((item) => item.classList.remove('magin-n'))
  attInfoQuantidade()
}

// funcao que aplica o conteudo do menu no html deacordo com o parametro pasado
function conteudoMenu(dadosDoMenu) {
  divConteudo()

  function section1() {
    document.querySelector('#titulo-section-1').innerHTML=``
    imprimir(dadosConteudo = dadosDoMenu['values'].slice(2), localConteudo = document.querySelector('#conteudo-1'), textoTopo = dadosDoMenu['values'][0])
  }section1()

  document.querySelector('#boss').classList.remove('magin-s')
  document.querySelectorAll('#boss section').forEach((item) => item.classList.add('magin-n'))
  document.querySelectorAll('#boss section').forEach((item) => item.classList.remove('magin-s'))
  attInfoQuantidade()
}

// funcao que impreme na tela os produtos
function imprimir(dadosConteudo, localConteudo, textoTopo) {
  if(!textoTopo == false){
    document.querySelector('#slider').parentNode.removeChild(document.querySelector('#slider'))
    document.querySelector('#conteiner-topo').classList.remove('none')
    document.querySelector('#conteiner-topo').classList.add('block')
    document.querySelector('#conteiner-topo .titulo').innerHTML=`<h1>Menu de ${textoTopo}</h1>`
  }
    for (var x = 0; x < dadosConteudo.length; x++) {
      let produtoName = dadosConteudo[x][0].replace(/ /g,'-')
      var estruturaProduto = `
      <li id="${produtoName}" class="produto">
        <img src="${dadosConteudo[x][1].replace('*','')}" alt="">
        <main>
          <h3>${dadosConteudo[x][0].replace('*','')}</h3>
            <ul>
                <li>${dadosConteudo[x][3].replace('*','')}</li>
                <li>${dadosConteudo[x][4].replace('*','')}</li>
                <li>${dadosConteudo[x][5].replace('*','')}</li>
                <li>${dadosConteudo[x][6].replace('*','')}</li>
                <li>${dadosConteudo[x][7].replace('*','')}</li>
                <li>${dadosConteudo[x][8].replace('*','')}</li>
                <li>${dadosConteudo[x][9].replace('*','')}</li>
                <li>${dadosConteudo[x][10].replace('*','')}</li>
                <li>${dadosConteudo[x][11].replace('*','')}</li>
                <li>${dadosConteudo[x][12].replace('*','')}</li>
            </ul>
          <div class="preco"><h4>${dadosConteudo[x][2].replace('*','')}</h4><div><button class="bnt-subtrair none" onclick="tiraCesta(produto='${produtoName}', preco='${dadosConteudo[x][2].replace('R$ ','')}')"><abbr title="subtrair"><i class="fas fa-minus"></i></abbr></button><button class="infQuantidade none"></button><button class="bnt-Adicionar" onclick="adicionaCesta(produto='${produtoName}', preco='${dadosConteudo[x][2].replace('R$ ','')}')"><abbr title="Adicionar"><i class="fas fa-plus"></i></abbr></button></div></div>
        </main>
      </li>`
      localConteudo.innerHTML+=estruturaProduto
  }
}

