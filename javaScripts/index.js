function acaoMenu(){
    var navMenu = document.getElementById('janela-menu');
        let indicadorMenu = document.querySelectorAll('#indicador-menu');

        if(window.matchMedia("(max-width: 700px)").matches){
          if(navMenu.style.transform == 'translateY(60px)'){
            navMenu.style.transform = 'translateY(-100vh)';
            indicadorMenu.forEach((item) => item.classList.add('fa-angle-down'));
            indicadorMenu.forEach((item) => item.classList.remove('fa-angle-up'));
            }else{
            navMenu.style.transform = 'translateY(60px)';
            indicadorMenu.forEach((item) => item.classList.add('fa-angle-up'));
            indicadorMenu.forEach((item) => item.classList.remove('fa-angle-down'));
            } 
        }else{
          if(navMenu.style.transform == 'translateY(60px)'){
          navMenu.style.transform = 'translateY(-' + String(navMenu.offsetHeight) + 'px)';
          indicadorMenu.forEach((item) => item.classList.add('fa-angle-down'));
          indicadorMenu.forEach((item) => item.classList.remove('fa-angle-up'));
          }else{
          navMenu.style.transform = 'translateY(60px)';
          indicadorMenu.forEach((item) => item.classList.add('fa-angle-up'));
          indicadorMenu.forEach((item) => item.classList.remove('fa-angle-down'));
          } 
        }
}

function sliders(){
  var slider = tns({
    "container": "#slider",
    "autoHeight": true,
    "items": 1,
    "controls": false,
    "navPosition": "bottom",
    "swipeAngle": false,
    "speed": 600,
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "autoplayTimeout": 10000,
    })   
}

var cesta = []

function adicionaCesta(produto, preco) {
  cesta.push({produto, preco})

  att(produto)
  calculaTotal()
  previaCesta()
  listaPedidos()
}

function tiraCesta(produto){
  // faz uma verificacao em cada produto da cesta e quando chegar no produto certo tira ele da cesta e para o loop
  for(var x = 0; x < cesta.length; x++){
    if(cesta[x].produto === produto) {
      cesta.splice(cesta.map(el => el.produto).lastIndexOf(produto), 1)
      break;
    }
  }

  att(produto)
  calculaTotal()
  previaCesta()
  listaPedidos()
}

function attInfoQuantidade() {
  for(var x = 0; x < cesta.length; x++){
    console.log(x)
    att(produto = cesta[x].produto)
}}

function att(produto){
  //Detecta a quantidade do produto na cesta e imprime
  document.querySelectorAll('#'+produto+' .infQuantidade').forEach((item) => item.innerHTML = `${cesta.filter(function (e) {return e.produto == produto}).length}`)
  document.querySelector('#janela-sacola .icon-cesta span').innerHTML = `${cesta.length}`
  document.querySelectorAll('#janela-comprar .items-cesta #'+produto+' span').forEach((item) => item.innerHTML = `${cesta.filter(function (e) {return e.produto == produto}).length}x`)
    
  if(cesta.filter(function (e) {return e.produto == produto}).length > 0){
  // tira a clase none fazendo os butoes aparecer no produto
    document.querySelectorAll('#'+produto+' .infQuantidade').forEach((item) => item.classList.remove('none'));
    document.querySelectorAll('#'+produto+' .bnt-subtrair').forEach((item) => item.classList.remove('none'));
  }else if(cesta.filter(function (e) {return e.produto == produto}).length == 0){
  //caso nao tenha mais o produto na cesta tira a quantidade da tela e o bnt - 
    document.querySelectorAll('#'+produto+' .infQuantidade').forEach((item) => item.classList.add('none'));
    document.querySelectorAll('#'+produto+' .bnt-subtrair').forEach((item) => item.classList.add('none'));

  //caso nao tenha mais o produto na cesta tira ele ta tela de compra
    let itemRemover = document.querySelector('#janela-comprar .items-cesta #'+produto+'')
    itemRemover.parentNode.removeChild(itemRemover)
  }
}

function calculaTotal(){
  //calcula o valor total dos produtos
  var valorTotal = 0
  for (var x = 0; x < cesta.length; x++){
    valorTotal += Number(cesta[x].preco.replace(',','.'))
  }

  //imprime o valor total na previa da cesta
  document.querySelector('#janela-sacola .previa-sacola h1').innerHTML = `Valor total: R$ ${valorTotal.toFixed(2).replace('.',',')}`

  //imprime o valor total na tela de compra
  document.querySelector('#janela-comprar .conteiner-finalizar h1 span').innerHTML = `${valorTotal.toFixed(2).replace('.',',')}`

  return valorTotal
}

function previaCesta(){
  let janelaCesta = document.querySelector('#janela-sacola')
  //ativa a janela da cesta de compras
  if(document.querySelector('#tela-comprar').style.transform == 'translateY(0px)' || cesta.length == 0){
    janelaCesta.style.transform = 'translateY(' + String(janelaCesta.offsetHeight) + 'px)';
    document.querySelector('.footer-container').style.marginBottom = '0px'
    }else{
    janelaCesta.style.transform = 'translateY(0)';
    document.querySelector('.footer-container').style.marginBottom = ''+ String(janelaCesta.offsetHeight) + 'px'
  }

  // caso a tela seja menor ele simplifica as infs da previa da Cesta
  if(window.matchMedia("(max-width: 700px)").matches){
    let textoValor = document.querySelector('#janela-sacola .previa-sacola h1')
    textoValor.innerHTML = textoValor.innerHTML.replace('Valor total:','')
  
    let textoBntComprar = document.querySelector('#janela-sacola .previa-sacola button')
    textoBntComprar.innerHTML = textoBntComprar.innerHTML.replace('Comprar','<i class="fas fa-check"></i>')
  }
}previaCesta()

function ativaTelaComprar() {
  let telaComprar = document.querySelector('#tela-comprar')

  if(telaComprar.style.transform == 'translateY(100vh)'){
    telaComprar.style.transform = 'translateY(0)'
    document.querySelector('html').style.overflow = 'hidden'
  }else{
    telaComprar.style.transform = 'translateY(100vh)'
    document.querySelector('html').removeAttribute("style")
  }   
  previaCesta()
}

function listaPedidos() {
  document.querySelector('#janela-comprar .items-cesta').innerHTML=''
  for (var x = 0; x < cesta.length; x++) {
    let produto = cesta[x].produto.replace(/ /g,'-')
    let preco = cesta[x].preco.replace('R$ ','')
  
  if(document.querySelectorAll('#janela-comprar .items-cesta #'+produto+'').length == 0){
    document.querySelector('#janela-comprar .items-cesta').innerHTML+=`<li  id="${produto}"><h1>${cesta[x].produto.replace(/-/g,' ')}</h1><p>${cesta[x].preco}</p><div class="acoes"><button onclick="tiraCesta(produto='${produto}')"><i class="fas fa-minus"></i></button><span>-</span><button onclick="adicionaCesta(produto='${produto}', preco='${preco}')"><i class="fas fa-plus"></i></button></div></li>`
  }
  }

  if(cesta.length == 0){
    document.querySelector('#janela-comprar').innerHTML+= `<div id="notificacao">
      <div class="conteiner-notificacao">
      <i class="fas fa-shopping-basket"></i>
        <h1>Sua cesta está vazia!</h1>
        <p>Você não está com fome ?  😟</p>
      </div>
    </div>`
    setTimeout(function() {document.querySelector('#janela-comprar #notificacao').classList.add('teste')}, 0)
  }else if(!!document.querySelector('#janela-comprar #notificacao')){
    let removerNotificacao = document.querySelector('#janela-comprar #notificacao')
    removerNotificacao.parentNode.removeChild(removerNotificacao)
  }
  attInfoQuantidade()
}

function retirarOUentregar(res) {
  let bnts = document.querySelectorAll('#janela-comprar .formulario  .opca1 button')
  bnts.forEach((item) => item.removeAttribute("style"))
  bnts.forEach((item) => item.classList.remove('res'))
  bnts.forEach((item) => item.disabled = false)
  
   if(res == 0){
    // adiciona style e desativa click no retinar
    bnts[0].style.background = '#FD7014'
    bnts[0].classList.add('res')
    bnts[0].disabled = true
    
    // adiciona a clas none que tira da tela
    document.querySelectorAll('#janela-comprar .formulario  #endereco').forEach((item) => item.classList.add('none'))
    document.querySelectorAll('#janela-comprar .formulario  #endereco input').forEach((item) => item.classList.remove('necessario'))
   }else if(res == 1){
    // adiciona style bntAtivo e desativa click no entregar
    bnts[1].style.background = '#FD7014'
    bnts[1].classList.add('res')
    bnts[1].disabled = true

    // remove a clas none que coloca na tela o endereco
    document.querySelectorAll('#janela-comprar .formulario  #endereco').forEach((item) => item.classList.remove('none'))
    document.querySelectorAll('#janela-comprar .formulario  #endereco input').forEach((item) => item.classList.add('necessario'))
   }
}

function tipoPagamento(res) {
  let bnts = document.querySelectorAll('#janela-comprar .formulario .opca2 button')
  bnts.forEach((item) => item.removeAttribute("style"))
  bnts.forEach((item) => item.classList.remove('res'))
  bnts.forEach((item) => item.disabled = false)

  document.querySelector('#janela-comprar .formulario  .opca3').classList.add('none')
  document.querySelector('#janela-comprar .formulario  .opca3').classList.remove('necessario')
  document.querySelector('#janela-comprar .formulario  .avisoPix').classList.add('none')

  if(res == 0){
    // adiciona style e desativa click
    bnts[0].style.background = '#FD7014'
    bnts[0].classList.add('res')
    bnts[0].disabled = true

    document.querySelector('#janela-comprar .formulario  .opca3').classList.remove('none')
    document.querySelector('#janela-comprar .formulario  .opca3').classList.add('necessario')
   }else if(res == 1){
    // adiciona style e desativa click
    bnts[1].style.background = '#FD7114'
    bnts[1].classList.add('res')
    bnts[1].disabled = true
   }else if(res == 2){
    // adiciona style e desativa click
    bnts[2].style.background = '#FD7014'
    bnts[2].classList.add('res')
    bnts[2].disabled = true
    document.querySelector('#janela-comprar .formulario  .avisoPix').classList.remove('none')
   }
   trocoS_N()
}

function trocoS_N(res) {
  let bnt = document.querySelector('#janela-comprar .formulario  .opca3 button')
  let input = document.querySelector('#janela-comprar .formulario  .opca3 input')
  bnt.classList.remove('res')
  input.classList.remove('res')
  if(res == 0){
    bnt.removeAttribute("style")
    input.classList.add('res')
    input.style.opacity = '1'
    
  }else if(res == 1){
    bnt.style.background = '#FD7014'
    bnt.classList.add('res')
    input.style.opacity = '0.4'
  }
}

function verificaForm() {
  let necessario = document.querySelectorAll('#janela-comprar .formulario .necessario')
  for(var x = 0; x < necessario.length; x++ ){
    if(necessario[x].value == ''){
      necessario[x].focus()
      break 
    }else if(necessario[x] == document.querySelector('#janela-comprar .formulario .opca1')){
      if(necessario[2].querySelector('.res') == null){
       necessario[2].style.border = '2px solid #fd7014'
       break
      }else{
        necessario[2].removeAttribute("style")
      }
    }else if(necessario[x] == document.querySelector('#janela-comprar .formulario .opca2')){
      if(necessario[x].querySelector('.res') == null){
       necessario[x].style.border = '2px solid #fd7014'
       break
      }else{
        necessario[x].removeAttribute("style")
      }
    }else if(necessario[x] == document.querySelector('#janela-comprar .formulario .opca3')){
      if(necessario[x].querySelector('.res') == null){
       necessario[x].style.border = '2px solid #fd7014'
       break
      }else if(necessario[x].querySelector('.res') == document.querySelector('#janela-comprar .formulario .opca3 input')){
        necessario[x].removeAttribute("style")
        if(document.querySelector('#janela-comprar .formulario .opca3 input').value.replace('Sim, para:','') == ''){
          document.querySelector('#janela-comprar .formulario .opca3 input').focus()
          break
        }
      }else{
        necessario[x].removeAttribute("style")
      }
    }
    if(x+1 >= necessario.length){ console.log("Tudo preenchido!"),mandaPedido4()}
    }
}

function mandaPedido4(){
  document.querySelectorAll('#janela-comprar .formulario .res').forEach((item) => console.log(item.value || item.innerText))
  document.querySelector('#janela-comprar').innerHTML+= `<div id="notificacao">
    <div class="conteiner-notificacao">
      <i class="fas fa-check"></i>
      <h1>O pedido está sendo preparado</h1>
      <ul>
          <li>Número do pedido: <span>400</span> </li>
          <li>Quantidade de produtos: <span>${cesta.length}</span></li>
          <li>Valor total: <span>R$ ${calculaTotal().toFixed(2).replace('.',',')}</span></li>
          <li>Meio de pagamento: <span> ${document.querySelector('#janela-comprar .formulario .opca2 .res').innerText}</span></li>
      </ul>
      <p>Quando seu pedido estiver pronto iremos te notificar através do número de WhatsApp ${document.querySelectorAll('#janela-comprar .formulario .res')[1].value}.</p>
    </div>
  </div>`
  setTimeout(function() {document.querySelector('#janela-comprar #notificacao').classList.add('teste')}, 100)
}