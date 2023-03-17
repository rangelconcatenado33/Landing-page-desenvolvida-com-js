//importando Fonts do Google fonts//
const importarFonts = function () {
    var importandoFonts = document.createElement('style');

    var importandoFonts2 = document.createElement('style')
    
    document.body.appendChild(importandoFonts);
    
    document.body.appendChild(importandoFonts2);
    
    importandoFonts.innerHTML = '@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap)';
    
    importandoFonts2.innerHTML = '@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap)';    
}

importarFonts()

const roboto = 'Roboto, sans-serif'

const rubic =  'Rubik, sans-serif'

//Construindo o primeiro conteiner//

const firstFunction = function () {
    
var raiz = window.document.querySelector("#raiz");

var conteiner1 = document.createElement('header');

raiz.appendChild(conteiner1);

conteiner1.setAttribute('id', 'megaBox');

var megaBox = window.document.querySelector('#megaBox');

megaBox.style.backgroundColor = 'white'

megaBox.style.justifyContent = "center"

megaBox.style.display = 'flex'

megaBox.style.flexDirection = 'column'

megaBox.style.gap = '10%'

megaBox.style.width = '100%'

megaBox.style.heigth = '100%'

}

firstFunction()


//Construindo a Barra de Navegação//
const secondfunction = function () {

var barraDeNavegacao = document.createElement('main')

megaBox.appendChild(barraDeNavegacao);

barraDeNavegacao.setAttribute('id', 'barraDeNavegacao');

barraDeNavegacao.style.display = 'flex'

barraDeNavegacao.style.flexDirection = 'row';

barraDeNavegacao.style.textAlign = 'center';

barraDeNavegacao.style.justifyContent = 'center'

barraDeNavegacao.style.gap = '20%'

var logo = document.createElement('div');

barraDeNavegacao.appendChild(logo);

logo.setAttribute('id', 'logo');

var logoM = window.document.querySelector('#logo')

logoM.style.color = 'orangered';

logoM.innerHTML = 'Faster'

logoM.style.fontSize = '60px';

logoM.style.fontFamily = 'Roboto, sans-serif';

logoM.style.width = '30px'

//Criando o menu com itens//

var menuInNavBar = document.createElement('section');

barraDeNavegacao.appendChild(menuInNavBar);

menuInNavBar.setAttribute('id', 'menuNavBar');

//item1 do menu Navbar

var item1DoMenuNavBar = document.createElement('div');

menuInNavBar.appendChild(item1DoMenuNavBar);

item1DoMenuNavBar.setAttribute('class', 'itemDoMenuNavBar');

item1DoMenuNavBar.setAttribute('id', 'item1');

item1DoMenuNavBar.innerHTML = 'Home';

//item2 do menu NavBar
var item2DoMenuNavBar = document.createElement('div');

menuInNavBar.appendChild(item2DoMenuNavBar);

item2DoMenuNavBar.setAttribute('class', 'itemDoMenuNavBar');

item2DoMenuNavBar.setAttribute('id', 'item2');

item2DoMenuNavBar.innerHTML = 'About';

//item3 do menu NavBar

var item3DoMenuNavBar = document.createElement('div');

menuInNavBar.appendChild(item3DoMenuNavBar);

item3DoMenuNavBar.setAttribute('class', 'itemDoMenuNavBar');

item3DoMenuNavBar.setAttribute('id', 'item3');

item3DoMenuNavBar.innerHTML = 'Service';

//item4 do menu Navbar

var item4DoMenuNavBar = document.createElement('div');

menuInNavBar.appendChild(item4DoMenuNavBar);

item4DoMenuNavBar.setAttribute('class', 'itemDoMenuNavBar');

item4DoMenuNavBar.setAttribute('id', 'item4');

item4DoMenuNavBar.innerHTML = 'Price';

//item5 do menu NavBar

var item5DoMenuNavBar = document.createElement('div');

menuInNavBar.appendChild(item5DoMenuNavBar);

item5DoMenuNavBar.setAttribute('class', 'itemDoMenuNavBar');

item5DoMenuNavBar.setAttribute('id', 'item5');

item5DoMenuNavBar.innerHTML = 'Contact';



//Dando Style aos itens do Menu de Navegação//

const styleDosItensDoMenuNavBar = window.document.querySelector('#menuNavBar');

styleDosItensDoMenuNavBar.style.fontFamily = 'Rubik, sans-serif';

styleDosItensDoMenuNavBar.style.fontSize = '20px';

styleDosItensDoMenuNavBar.style.display = 'flex';

styleDosItensDoMenuNavBar.style.flexDirection = 'row';

styleDosItensDoMenuNavBar.style.gap = '15%'

//Criando botao de login de conta//

const botaoGetAQuote = document.createElement('div')

barraDeNavegacao.appendChild(botaoGetAQuote);

botaoGetAQuote.setAttribute('id', 'buttonGetAQuote');

botaoGetAQuote.innerHTML = 'Get A Quote';

botaoGetAQuote.style.color = 'white';

botaoGetAQuote.style.width = '100px';

botaoGetAQuote.style.height = '5px';

botaoGetAQuote.style.backgroundColor = 'orangered';

botaoGetAQuote.style.padding = '2%';

botaoGetAQuote.style.fontFamily = 'Rubik, sans-serif'

botaoGetAQuote.style.display = 'flex';

botaoGetAQuote.style.flexDirection = 'row'

}

secondfunction();

const eventosNaNavBar = function () {
    
    //Adicionando Eventos na NavBar

var primeiroItemDaNavBar = window.document.querySelector('#item1');

primeiroItemDaNavBar.addEventListener('click', function () {
    
this.style.color = 'orangered'

});

primeiroItemDaNavBar.addEventListener('mouseleave', function () {
    
    this.style.color = 'black'

})

primeiroItemDaNavBar.addEventListener('touchend', function () {
    
    this.style.color = 'black'

});

var segundoItemDaNavBar = window.document.querySelector('#item2');

segundoItemDaNavBar.addEventListener('click', function () {
    
this.style.color = 'orangered'

});

segundoItemDaNavBar.addEventListener('mouseleave', function () {
    
    this.style.color = 'black'

})

segundoItemDaNavBar.addEventListener('touchend', function () {
    
    this.style.color = 'black'

});

var terceiroItemDaNavBar = window.document.querySelector('#item3');

terceiroItemDaNavBar.addEventListener('click', function () {
    
this.style.color = 'orangered'

});

terceiroItemDaNavBar.addEventListener('mouseleave', function () {
    
    this.style.color = 'black'

})

terceiroItemDaNavBar.addEventListener('touchend', function () {
    
    this.style.color = 'black'

});

var quartoItemDaNavBar = window.document.querySelector('#item4');

quartoItemDaNavBar.addEventListener('click', function () {
    
this.style.color = 'orangered'

});

quartoItemDaNavBar.addEventListener('mouseleave', function () {
    
    this.style.color = 'black'

})

quartoItemDaNavBar.addEventListener('touchend', function () {
    
    this.style.color = 'black'

});

var quintoItemDaNavBar = window.document.querySelector('#item5');

quintoItemDaNavBar.addEventListener('click', function () {
    
this.style.color = 'orangered'

});

quintoItemDaNavBar.addEventListener('mouseleave', function () {
    
    this.style.color = 'black'

})

quintoItemDaNavBar.addEventListener('touchend', function () {
    
    this.style.color = 'black'

});

//Adicionando eventos no botao Get A quotes: 

var eventosNoBotaoGetAQuote = window.document.querySelector('#buttonGetAQuote');

eventosNoBotaoGetAQuote.addEventListener('click', function () {
    
    this.style.color = 'black'

});

eventosNoBotaoGetAQuote.addEventListener('mouseleave', function () {
    
    this.style.color = 'white'

})

eventosNoBotaoGetAQuote.addEventListener('touchend', function () {
    
    this.style.color = 'white'

})

}

eventosNaNavBar()


const segundoConteiner = function () {
    
    //construindo o segundo conteiner

var segundoContenier = document.createElement('section');

megaBox.appendChild(segundoContenier);

segundoContenier.setAttribute('id', 'secondConteiner');

segundoContenier.style.backgroundColor = 'black';

segundoContenier.innerHTML = 'Este é o segundo Conteiner';

//Assim foi Criado Safe e Faster

var titulo1 = document.createElement('div');

segundoContenier.appendChild(titulo1);

titulo1.setAttribute('id', 'title1');

titulo1.style.fontFamily = roboto;

titulo1.style.color = 'orangered';

titulo1.style.fontSize = '50px';

titulo1.innerHTML = 'Safe & Faster';

//Criando título2(Logistics Services)

var titulo2 = document.createElement('div');

segundoContenier.appendChild(titulo2);

titulo2.setAttribute('id', 'title2');

titulo2.style.fontFamily = roboto

titulo2.style.color = 'white';

titulo2.style.fontSize = '100px';

titulo2.innerHTML = 'Logistics Services';

//Criando o input do segundo conteiner

var boxButtonInput = document.createElement('div');

segundoContenier.appendChild(boxButtonInput);

boxButtonInput.setAttribute('id', 'boxButtonInput');

var input = document.createElement('input');

boxButtonInput.appendChild(input);

input.setAttribute('id', 'input');

input.placeholder = 'tracking id';

input.style.padding = '3%'

boxButtonInput.style.fontFamily = rubic

//Criando o Botão

var button = document.createElement('button');

boxButtonInput.appendChild(button);

button.setAttribute('id', 'button');

button.innerText = 'Track & Trace';

button.style.color = 'white'

button.style.backgroundColor = 'orangered';

button.style.padding = '3%';

button.style.width = '150px'

boxButtonInput.display = 'flex'

//Alterando as posições dos elementos no segundo conteiner

segundoContenier.style.display = 'flex';

segundoContenier.style.flexDirection = 'column';

segundoContenier.style.justifyContent = 'center';

segundoContenier.style.gap = '5%';

segundoContenier.style.alignItems = 'center';

segundoContenier.style.padding = '10%'

var boxBotaoInput = document.querySelector('#boxButtonInput')

boxBotaoInput.style.display = 'flex';

boxBotaoInput.style.flexDirection = 'row';

//Eventos no segundo Conteiner

button.addEventListener('click', function () {
    
    this.style.color = 'black';

    this.style.backgroundColor = 'white'

});

button.addEventListener('mouseleave', function () {
    
    this.style.color = 'white';

    this.style.backgroundColor = 'orangered'

});

button.addEventListener('touchend', function () {
    
    this.style.color = 'white';

    this.style.backgroundColor = 'orangered'

});
}

segundoConteiner();

//Criando o terceiro conteiner

var terceiroConteiner = document.createElement('div');

megaBox.appendChild(terceiroConteiner);

terceiroConteiner.setAttribute('id','terceiroConteiner');

terceiroConteiner.style.marginTop = '5%';

terceiroConteiner.style.backgroundColor = 'Ivory';

terceiroConteiner.style.justifyContent = 'center'

//Criando primeira flex box

var box1 = document.createElement('div');

terceiroConteiner.appendChild(box1);

box1.setAttribute('id', 'box1');

box1.style.backgroundColor = 'Ivory';

box1.style.width = '500px';

box1.style.padding = '2%'

var sectionDaBox1 = document.createElement('section');

box1.appendChild(sectionDaBox1);

sectionDaBox1.setAttribute('id', 'sectionDaBox1');

var primeiraDivDaBox1 = document.createElement('div');

sectionDaBox1.appendChild(primeiraDivDaBox1);

//Assim foi criado o titulo GET A QUOTE

var primeiroTituloDoTerceiroConteiner = document.createElement('h3');

primeiraDivDaBox1.appendChild(primeiroTituloDoTerceiroConteiner);

primeiroTituloDoTerceiroConteiner.innerHTML = 'GET A QUOTE';

primeiroTituloDoTerceiroConteiner.style.fontFamily = roboto;

primeiroTituloDoTerceiroConteiner.style.color = 'orangered';

//Criando o Segundo título

 var segundoTituloDoTerceiroConteiner = document.createElement('p');

 primeiraDivDaBox1.appendChild(segundoTituloDoTerceiroConteiner);

 segundoTituloDoTerceiroConteiner.innerHTML = 'Request A Free Quote';

 segundoTituloDoTerceiroConteiner.style.fontFamily = roboto;

 segundoTituloDoTerceiroConteiner.style.fontSize = '50px';

 //Criando lorem ipsorum

 

 var paragrafoDoTerceiroConteiner = document.createElement('p');

 primeiraDivDaBox1.appendChild(paragrafoDoTerceiroConteiner);

 paragrafoDoTerceiroConteiner.style.fontFamily = rubic;

 paragrafoDoTerceiroConteiner.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime possimus illum autem aut, eveniet exercitationem provident pariatur dicta officiis maiores, dolor tempore quaerat consequuntur itaque blanditiis fuga ducimus odit.'

 //Criando a segunda section

 var segundaDivDaBox1 = document.createElement('div')

sectionDaBox1.appendChild(segundaDivDaBox1);

var section2Dabox1 = document.createElement('section');

segundaDivDaBox1.appendChild(section2Dabox1);

var div1DaSection2 = document.createElement('div');

section2Dabox1.appendChild(div1DaSection2);

//flex box section2

section2Dabox1.style.display = 'flex';

section2Dabox1.style.flexDirection = 'row';

section2Dabox1.style.gap = '5%';

//Continuando a criação dos elementos da section

var subBox1 = document.createElement('div');

section2Dabox1.appendChild(subBox1)

var titulo1DaSection2 = document.createElement('h1')

subBox1.appendChild(titulo1DaSection2);

titulo1DaSection2.innerHTML = '225'

titulo1DaSection2.style.color = 'orangered';

titulo1DaSection2.style.fontFamily = roboto;

titulo1DaSection2.style.fontSize = '40px';

var subTitulo1DaSection2 = document.createElement('h2');

subBox1.appendChild(subTitulo1DaSection2)

subTitulo1DaSection2.style.fontFamily = roboto;

subTitulo1DaSection2.innerHTML = 'SKilleds Experts'

//Criando segundo item da section2

var subBox2 = document.createElement('div');

section2Dabox1.appendChild(subBox2)

var titulo2DaSection2 = document.createElement('h1')

subBox2.appendChild(titulo2DaSection2);

titulo2DaSection2.innerHTML = '1050'

titulo2DaSection2.style.color = 'orangered';

titulo2DaSection2.style.fontFamily = roboto;

titulo2DaSection2.style.fontSize = '40px';

var subTitulo2DaSection2 = document.createElement('h2');

subBox2.appendChild(subTitulo2DaSection2)

subTitulo2DaSection2.style.fontFamily = roboto;

subTitulo2DaSection2.innerHTML = 'Happy ClIents';

//Criando terceiro item da section

var subBox3 = document.createElement('div');

section2Dabox1.appendChild(subBox3)

var titulo3DaSection2 = document.createElement('h1')

div1DaSection2.appendChild(subBox3);

subBox3.appendChild(titulo3DaSection2)

titulo3DaSection2.innerHTML = '2500'

titulo3DaSection2.style.color = 'orangered';

titulo3DaSection2.style.fontFamily = roboto;

titulo3DaSection2.style.fontSize = '40px';

var subTitulo3DaSection2 = document.createElement('h2');

subBox3.appendChild(subTitulo3DaSection2)

subTitulo3DaSection2.style.fontFamily = roboto;

subTitulo3DaSection2.innerHTML = 'Complete Projects';

//Criando Box2 

var box2 = document.createElement('div');

terceiroConteiner.appendChild(box2);

terceiroConteiner.style.display = 'flex';

terceiroConteiner.style.flexDirection = 'row'

var formulario = document.createElement('form');

box2.appendChild(formulario);

formulario.style.backgroundColor = 'orangered';

formulario.style.display = 'flex';

formulario.style.flexDirection = 'column';

formulario.style.gap = '30px';

formulario.style.padding = '10%';

formulario.style.width = '500px';

formulario.style.height = '500px'

var inpu1DoForm = document.createElement('input');

formulario.appendChild(inpu1DoForm);

inpu1DoForm.placeholder = 'Your Name';

inpu1DoForm.style.padding = '2%'

//input2 do form 

var inpu2DoForm = document.createElement('input');

formulario.appendChild(inpu2DoForm);

inpu2DoForm.placeholder = 'Your Email';

inpu2DoForm.style.padding = '2%';

//Select do formulario

var selectDoForm = document.createElement('select');

formulario.appendChild(selectDoForm);

var option = document.createElement('option');

selectDoForm.appendChild(option);

option.innerHTML = 'Select a Service';

selectDoForm.style.padding = '2%'

//Criando o botao do formulario

var botaoDoFormulario = document.createElement('button')

formulario.appendChild(botaoDoFormulario);

botaoDoFormulario.innerHTML = 'Get A Quote';

botaoDoFormulario.style.backgroundColor = 'black'

botaoDoFormulario.style.color = 'white';

botaoDoFormulario.style.fontFamily = rubic;

botaoDoFormulario.style.textAlign = 'center';

botaoDoFormulario.style.padding = '2%';

//conteiner 4

var conteiner4 = document.createElement('div');

megaBox.appendChild(conteiner4);

conteiner4.style.marginTop = '5%';

//Section1 do quarto conteiner

var subConteiner4 = document.createElement('section');

var box1DaSection1DoQuartoConteiner = document.createElement('div');

conteiner4.appendChild(subConteiner4)

subConteiner4.appendChild(box1DaSection1DoQuartoConteiner);

box1DaSection1DoQuartoConteiner.style.display = 'flex';

box1DaSection1DoQuartoConteiner.style.flexDirection = 'column';

box1DaSection1DoQuartoConteiner.style.justifyContent = 'center';

box1DaSection1DoQuartoConteiner.style.textAlign = 'center';

//Criando os titulos do quarto conteiner

var texto1 = document.createElement('h3');

box1DaSection1DoQuartoConteiner.appendChild(texto1);

texto1.innerText = 'PRICING PLAN';

texto1.style.color = 'orangered';

texto1.style.fontFamily = roboto;

var texto2 = document.createElement('h1');

box1DaSection1DoQuartoConteiner.appendChild(texto2);

texto2.innerHTML = 'Affordable Pricing Packages';

texto2.style.fontFamily = roboto;

texto2.style.color = 'black';

texto2.style.fontSize = '50px';

//Criando segunda Section do Quarto conteiner

var segundaSectionDoQuartoConteiner = document.createElement('section');

subConteiner4.appendChild(segundaSectionDoQuartoConteiner);

segundaSectionDoQuartoConteiner.style.alignItems = 'center';

segundaSectionDoQuartoConteiner.style.textAlign = 'center';

segundaSectionDoQuartoConteiner.style.justifyContent = 'center'

var box1DosubConteiner4 = document.createElement('div');

segundaSectionDoQuartoConteiner.appendChild(box1DosubConteiner4);

segundaSectionDoQuartoConteiner.style.display = 'flex';

segundaSectionDoQuartoConteiner.style.flexDirection = 'row';

segundaSectionDoQuartoConteiner.style.gap = '20px'

box1DosubConteiner4.style.backgroundColor = 'Ivory';

box1DosubConteiner4.style.width = '400px';

//configurando 

//Criando o número da Parcela

var index = document.createElement('div');

var pg = document.createElement('p');

var pg1 = document.createElement('p');

var pg2 = document.createElement('p');

box1DosubConteiner4.appendChild(index);

index.appendChild(pg);

pg.innerHTML = '$';

pg.style.fontFamily = roboto;

pg.style.fontSize = '15px';

pg.style.marginTop = '20%'

pg1.style.fontFamily = roboto;

pg1.style.fontSize = '80px';

pg1.innerHTML = '49';

index.appendChild(pg1);

pg2.innerHTML = '/Mo';

pg2.style.fontFamily = roboto;

pg2.style.fontSize = '15px';

pg2.style.marginTop = '35%'

index.appendChild(pg2);

index.style.display = 'flex';

index.style.flexDirection = 'row';

index.style.gap = '8px';

index.style.textAlign = 'center';

index.style.justifyContent = 'center';

//Criando a Faixa

var faixa = document.createElement('div');

box1DosubConteiner4.appendChild(faixa);

faixa.style.backgroundColor = 'orangered';

faixa.style.fontFamily = roboto;

faixa.innerHTML = 'Basic';

faixa.style.fontSize = '50px';

faixa.style.textAlign = 'center';

faixa.style.padding = '2%';

//criando a section

var section1DoSubConteiner4 = document.createElement('section');

section1DoSubConteiner4.style.textAlign = 'center'

box1DosubConteiner4.appendChild(section1DoSubConteiner4);

var txt1DaSection1DoSubConteiner4 = document.createElement('p');

section1DoSubConteiner4.appendChild(txt1DaSection1DoSubConteiner4);

txt1DaSection1DoSubConteiner4.innerHTML = 'HTML5 & CSS3';

txt1DaSection1DoSubConteiner4.style.fontFamily = rubic;


var txt2DaSection1DoSubConteiner4 = document.createElement('p');

section1DoSubConteiner4.appendChild(txt2DaSection1DoSubConteiner4);

txt2DaSection1DoSubConteiner4.innerHTML = 'Bootstrap 4';

txt2DaSection1DoSubConteiner4.style.fontFamily = rubic;



var txt3DaSection1DoSubConteiner4 = document.createElement('p');

section1DoSubConteiner4.appendChild(txt3DaSection1DoSubConteiner4);

txt3DaSection1DoSubConteiner4.innerHTML = 'Responsive Layout';

txt3DaSection1DoSubConteiner4.style.fontFamily = rubic;



var txt4DaSection1DoSubConteiner4 = document.createElement('p');

section1DoSubConteiner4.appendChild(txt4DaSection1DoSubConteiner4);

txt4DaSection1DoSubConteiner4.innerHTML = 'Compatible With All Browsers';

txt4DaSection1DoSubConteiner4.style.fontFamily = rubic;

//desenvolvendo os botões

var miniBox1 = document.createElement('div');

section1DoSubConteiner4.appendChild(miniBox1);

box1DosubConteiner4.style.textAlign = 'center';

box1DosubConteiner4.style.alignItems = 'center';

box1DosubConteiner4.style.justifyContent = 'center'

miniBox1.innerHTML = 'Order Now';

miniBox1.style.backgroundColor = 'orangered';

miniBox1.style.display = 'flex'

miniBox1.style.fontFamily = rubic;

miniBox1.style.fontSize = '20px';

miniBox1.style.color = 'white';

miniBox1.style.width = '150px';

miniBox1.style.padding = '1%';

miniBox1.style.textAlign = 'center';

miniBox1.style.justifyContent = 'center';

miniBox1.style.alignItems = 'center';

miniBox1.style.marginLeft = '30%';

miniBox1.style.marginTop = '9%'

//Criando Box2
var box2DosubConteiner4 = document.createElement('div')

box2DosubConteiner4.style.backgroundColor = 'Ivory';

box2DosubConteiner4.style.width = '400px';

segundaSectionDoQuartoConteiner.appendChild(box2DosubConteiner4)

//configurando 

//Criando o número da Parcela

var index2 = document.createElement('div');

var pg3 = document.createElement('p');

var pg4 = document.createElement('p');

var pg5 = document.createElement('p');

box2DosubConteiner4.appendChild(index2);

index2.appendChild(pg3);

pg3.innerHTML = '$';

pg3.style.fontFamily = roboto;

pg3.style.fontSize = '15px';

pg3.style.marginTop = '20%'

pg4.style.fontFamily = roboto;

pg4.style.fontSize = '80px';

pg4.innerHTML = '99';

index2.appendChild(pg4);

pg5.innerHTML = '/Mo';

pg5.style.fontFamily = roboto;

pg5.style.fontSize = '15px';

pg5.style.marginTop = '35%'

index2.appendChild(pg5);

index2.style.display = 'flex';

index2.style.flexDirection = 'row';

index2.style.gap = '8px';

index2.style.textAlign = 'center';

index2.style.justifyContent = 'center';

//Criando a Faixa

var faixa2 = document.createElement('div');

box2DosubConteiner4.appendChild(faixa2);

faixa2.style.backgroundColor = 'orangered';

faixa2.style.fontFamily = roboto;

faixa2.innerHTML = 'Premium';

faixa2.style.fontSize = '50px';

faixa2.style.textAlign = 'center';

faixa2.style.padding = '2%';

//criando a section

var section2DoSubConteiner4 = document.createElement('section');

section2DoSubConteiner4.style.textAlign = 'center'

box2DosubConteiner4.appendChild(section2DoSubConteiner4);

var txt1DaSection2DoSubConteiner4 = document.createElement('p');

section2DoSubConteiner4.appendChild(txt1DaSection2DoSubConteiner4);

txt1DaSection2DoSubConteiner4.innerHTML = 'HTML5 & CSS3';

txt1DaSection2DoSubConteiner4.style.fontFamily = rubic;


var txt2DaSection2DoSubConteiner4 = document.createElement('p');

section2DoSubConteiner4.appendChild(txt2DaSection2DoSubConteiner4);

txt2DaSection2DoSubConteiner4.innerHTML = 'Bootstrap 4';

txt2DaSection2DoSubConteiner4.style.fontFamily = rubic;



var txt3DaSection2DoSubConteiner4 = document.createElement('p');

section2DoSubConteiner4.appendChild(txt3DaSection2DoSubConteiner4);

txt3DaSection2DoSubConteiner4.innerHTML = 'Responsive Layout';

txt3DaSection2DoSubConteiner4.style.fontFamily = rubic;



var txt4DaSection2DoSubConteiner4 = document.createElement('p');

section2DoSubConteiner4.appendChild(txt4DaSection2DoSubConteiner4);

txt4DaSection2DoSubConteiner4.innerHTML = 'Compatible With All Browsers';

txt4DaSection2DoSubConteiner4.style.fontFamily = rubic;

//desenvolvendo os botões

var miniBox2 = document.createElement('div');

section2DoSubConteiner4.appendChild(miniBox2);

box2DosubConteiner4.style.textAlign = 'center';

box2DosubConteiner4.style.alignItems = 'center';

box2DosubConteiner4.style.justifyContent = 'center'

miniBox2.innerHTML = 'Order Now';

miniBox2.style.backgroundColor = 'orangered';

miniBox2.style.display = 'flex'

miniBox2.style.fontFamily = rubic;

miniBox2.style.fontSize = '20px';

miniBox2.style.color = 'white';

miniBox2.style.width = '150px';

miniBox2.style.padding = '1%';

miniBox2.style.textAlign = 'center';

miniBox2.style.justifyContent = 'center';

miniBox2.style.alignItems = 'center';

miniBox2.style.marginLeft = '30%';

miniBox2.style.marginTop = '9%'

//Criando terceira box
var box3DosubConteiner4 = document.createElement('div')

box3DosubConteiner4.style.backgroundColor = 'Ivory';

box3DosubConteiner4.style.width = '400px';

segundaSectionDoQuartoConteiner.appendChild(box3DosubConteiner4)

//configurando 

//Criando o número da Parcela

var index3 = document.createElement('div');

var pg6 = document.createElement('p');

var pg7 = document.createElement('p');

var pg8 = document.createElement('p');

box3DosubConteiner4.appendChild(index3);

index3.appendChild(pg6);

pg6.innerHTML = '$';

pg6.style.fontFamily = roboto;

pg6.style.fontSize = '15px';

pg6.style.marginTop = '20%'

pg7.style.fontFamily = roboto;

pg7.style.fontSize = '80px';

pg7.innerHTML = '149';

index3.appendChild(pg7);

pg8.innerHTML = '/Mo';

pg8.style.fontFamily = roboto;

pg8.style.fontSize = '15px';

pg8.style.marginTop = '35%'

index3.appendChild(pg8);

index3.style.display = 'flex';

index3.style.flexDirection = 'row';

index3.style.gap = '8px';

index3.style.textAlign = 'center';

index3.style.justifyContent = 'center';

//Criando a Faixa

var faixa3 = document.createElement('div');

box3DosubConteiner4.appendChild(faixa3);

faixa3.style.backgroundColor = 'orangered';

faixa3.style.fontFamily = roboto;

faixa3.innerHTML = 'Busines';

faixa3.style.fontSize = '50px';

faixa3.style.textAlign = 'center';

faixa3.style.padding = '2%';

//criando a section

var section3DoSubConteiner4 = document.createElement('section');

section3DoSubConteiner4.style.textAlign = 'center'

box3DosubConteiner4.appendChild(section3DoSubConteiner4);

var txt1DaSection3DoSubConteiner4 = document.createElement('p');

section3DoSubConteiner4.appendChild(txt1DaSection3DoSubConteiner4);

txt1DaSection3DoSubConteiner4.innerHTML = 'HTML5 & CSS3';

txt1DaSection3DoSubConteiner4.style.fontFamily = rubic;


var txt2DaSection3DoSubConteiner4 = document.createElement('p');

section3DoSubConteiner4.appendChild(txt2DaSection3DoSubConteiner4);

txt2DaSection3DoSubConteiner4.innerHTML = 'Bootstrap 4';

txt2DaSection3DoSubConteiner4.style.fontFamily = rubic;



var txt3DaSection3DoSubConteiner4 = document.createElement('p');

section3DoSubConteiner4.appendChild(txt3DaSection3DoSubConteiner4);

txt3DaSection3DoSubConteiner4.innerHTML = 'Responsive Layout';

txt3DaSection3DoSubConteiner4.style.fontFamily = rubic;



var txt4DaSection3DoSubConteiner4 = document.createElement('p');

section3DoSubConteiner4.appendChild(txt4DaSection3DoSubConteiner4);

txt4DaSection3DoSubConteiner4.innerHTML = 'Compatible With All Browsers';

txt4DaSection3DoSubConteiner4.style.fontFamily = rubic;

//desenvolvendo os botões

var miniBox3 = document.createElement('div');

section3DoSubConteiner4.appendChild(miniBox3);

box3DosubConteiner4.style.textAlign = 'center';

box3DosubConteiner4.style.alignItems = 'center';

box3DosubConteiner4.style.justifyContent = 'center'

miniBox3.innerHTML = 'Order Now';

miniBox3.style.backgroundColor = 'orangered';

miniBox3.style.display = 'flex'

miniBox3.style.fontFamily = rubic;

miniBox3.style.fontSize = '20px';

miniBox3.style.color = 'white';

miniBox3.style.width = '150px';

miniBox3.style.padding = '1%';

miniBox3.style.textAlign = 'center';

miniBox3.style.justifyContent = 'center';

miniBox3.style.alignItems = 'center';

miniBox3.style.marginLeft = '30%';

miniBox3.style.marginTop = '9%';

//Eventos no conteiner4

const mudarCorDaMiniBox = () => {

    miniBox1.style.backgroundColor = 'black';

    miniBox1.style.color = 'orangered';
}

const corNormal = () => {

    miniBox1.style.backgroundColor = 'orangered';

    miniBox1.style.color = 'white'
}

miniBox1.addEventListener('click', mudarCorDaMiniBox);

miniBox1.addEventListener('mouseleave', corNormal);

miniBox1.addEventListener('touchend', corNormal);

//Eventos na Segunda miniBox

const mudarCorDaMiniBox2 = () => {

    miniBox2.style.backgroundColor = 'black';

    miniBox2.style.color = 'orangered';
}

const corNormal2 = () => {

    miniBox2.style.backgroundColor = 'orangered';

    miniBox2.style.color = 'white'
}

miniBox2.addEventListener('click', mudarCorDaMiniBox2);

miniBox2.addEventListener('mouseleave', corNormal2);

miniBox2.addEventListener('touchend', corNormal2);

//Eventos na terceira miniBox

const mudarCorDaMiniBox3 = () => {

    miniBox3.style.backgroundColor = 'black';

    miniBox3.style.color = 'orangered';
}

const corNormal3 = () => {

    miniBox3.style.backgroundColor = 'orangered';

    miniBox3.style.color = 'white'
}

miniBox3.addEventListener('click', mudarCorDaMiniBox3);

miniBox3.addEventListener('mouseleave', corNormal3);

miniBox3.addEventListener('touchend', corNormal3);

var quintoConteiner = document.createElement('div');

//Criando o quinto Conteiner

megaBox.appendChild(quintoConteiner);

quintoConteiner.style.marginTop = '5%';

var section1DoQuintoConteiner = document.createElement('section');

quintoConteiner.appendChild(section1DoQuintoConteiner);

//Criando o titulo

var titleDoQuintoConteiner = document.createElement('h3');

section1DoQuintoConteiner.appendChild(titleDoQuintoConteiner);

titleDoQuintoConteiner.innerHTML = 'DELIVERY TEAM';

titleDoQuintoConteiner.style.fontFamily = roboto;

titleDoQuintoConteiner.style.color = 'orangered';

//Criando o subtitulo

var subTitleDoQuintoConteiner = document.createElement('h1');

section1DoQuintoConteiner.appendChild(subTitleDoQuintoConteiner);

subTitleDoQuintoConteiner.innerHTML = 'Meet Our Delivery Team';

subTitleDoQuintoConteiner.style.fontFamily = roboto;

subTitleDoQuintoConteiner.style.fontSize = '50px';

section1DoQuintoConteiner.style.justifyContent = 'center';

section1DoQuintoConteiner.style.textAlign = 'center';

//Desenvolvendo as box do quinto conteiner

var section2DoConteiner5 = document.createElement('section');

var segundaParteDoQuintoConteiner = document.createElement('div');

var box1DoQuintoConteiner = document.createElement('div');

quintoConteiner.appendChild(segundaParteDoQuintoConteiner);

segundaParteDoQuintoConteiner.appendChild(section2DoConteiner5);

section2DoConteiner5.appendChild(box1DoQuintoConteiner);

box1DoQuintoConteiner.style.backgroundColor = 'Ivory';

box1DoQuintoConteiner.style.width = '300px';

//Colocando as imagens nas box's

const link1 = 'https://raw.githubusercontent.com/rangelconcatenado33/Landing-page-evoluida/main/person-1.png'

const imagem1 = document.createElement('img');

box1DoQuintoConteiner.appendChild(imagem1);

imagem1.src = link1;

imagem1.style.width = '300px';

var titleDaBox1 = document.createElement('h1');

box1DoQuintoConteiner.appendChild(titleDaBox1);

titleDaBox1.innerHTML = 'Full Name';

titleDaBox1.style.fontFamily = roboto;

var subTitleDaBox1 = document.createElement('p');

box1DoQuintoConteiner.appendChild(subTitleDaBox1);

subTitleDaBox1.innerHTML = 'Designation';

subTitleDaBox1.style.fontFamily = rubic;

box1DoQuintoConteiner.style.border = '5px';

box1DoQuintoConteiner.style.borderStyle = 'Groove';

box1DoQuintoConteiner.style.borderColor = 'orangered';

box1DoQuintoConteiner.style.borderRight = 'none';

box1DoQuintoConteiner.style.borderLeft = 'none';

box1DoQuintoConteiner.style.borderTop = 'none';

box1DoQuintoConteiner.style.textAlign = 'center';

//box2 do quinto conteiner

var box2DoQuintoConteiner = document.createElement('div');

segundaParteDoQuintoConteiner.appendChild(section2DoConteiner5);

section2DoConteiner5.appendChild(box2DoQuintoConteiner);

box2DoQuintoConteiner.style.backgroundColor = 'Ivory';

box2DoQuintoConteiner.style.width = '300px';

//Colocando as imagens nas box's

const link2 = 'https://raw.githubusercontent.com/rangelconcatenado33/Landing-page-evoluida/main/person-2.png'

const imagem2 = document.createElement('img');

box2DoQuintoConteiner.appendChild(imagem2);

imagem2.src = link2;

imagem2.style.width = '300px';

var titleDaBox2 = document.createElement('h1');

box2DoQuintoConteiner.appendChild(titleDaBox2);

titleDaBox2.innerHTML = 'Full Name';

titleDaBox2.style.fontFamily = roboto;

var subTitleDaBox2 = document.createElement('p');

box2DoQuintoConteiner.appendChild(subTitleDaBox2);

subTitleDaBox2.innerHTML = 'Designation';

subTitleDaBox2.style.fontFamily = rubic;

box2DoQuintoConteiner.style.border = '5px';

box2DoQuintoConteiner.style.borderStyle = 'Groove';

box2DoQuintoConteiner.style.borderColor = 'orangered';

box2DoQuintoConteiner.style.borderRight = 'none';

box2DoQuintoConteiner.style.borderLeft = 'none';

box2DoQuintoConteiner.style.borderTop = 'none';

box2DoQuintoConteiner.style.textAlign = 'center';

//Box3 do quinto Conteiner

var box3DoQuintoConteiner = document.createElement('div');

section2DoConteiner5.appendChild(box3DoQuintoConteiner);

box3DoQuintoConteiner.style.backgroundColor = 'Ivory';

box3DoQuintoConteiner.style.width = '300px';

//Colocando as imagens nas box's

const link3 = 'https://raw.githubusercontent.com/rangelconcatenado33/Landing-page-evoluida/main/person-3.png'

const imagem3 = document.createElement('img');

box3DoQuintoConteiner.appendChild(imagem3);

imagem3.src = link3;

imagem3.style.width = '300px';

var titleDaBox3 = document.createElement('h1');

box3DoQuintoConteiner.appendChild(titleDaBox3);

titleDaBox3.innerHTML = 'Full Name';

titleDaBox3.style.fontFamily = roboto;

var subTitleDaBox3 = document.createElement('p');

box3DoQuintoConteiner.appendChild(subTitleDaBox3);

subTitleDaBox3.innerHTML = 'Designation';

subTitleDaBox3.style.fontFamily = rubic;

box3DoQuintoConteiner.style.border = '5px';

box3DoQuintoConteiner.style.borderStyle = 'Groove';

box3DoQuintoConteiner.style.borderColor = 'orangered';

box3DoQuintoConteiner.style.borderRight = 'none';

box3DoQuintoConteiner.style.borderLeft = 'none';

box3DoQuintoConteiner.style.borderTop = 'none';

box3DoQuintoConteiner.style.textAlign = 'center';

//Box 4

var box4DoQuintoConteiner = document.createElement('div');

quintoConteiner.appendChild(segundaParteDoQuintoConteiner);

segundaParteDoQuintoConteiner.appendChild(section2DoConteiner5);

section2DoConteiner5.appendChild(box4DoQuintoConteiner);

box4DoQuintoConteiner.style.backgroundColor = 'Ivory';

box4DoQuintoConteiner.style.width = '300px';


const link4 = 'https://raw.githubusercontent.com/rangelconcatenado33/Landing-page-evoluida/main/person-4.png'

const imagem4 = document.createElement('img');

box4DoQuintoConteiner.appendChild(imagem4);

imagem4.src = link4;

imagem4.style.width = '300px';

var titleDaBox4 = document.createElement('h1');

box4DoQuintoConteiner.appendChild(titleDaBox4);

titleDaBox4.innerHTML = 'Full Name';

titleDaBox4.style.fontFamily = roboto;

var subTitleDaBox4 = document.createElement('p');

box4DoQuintoConteiner.appendChild(subTitleDaBox4);

subTitleDaBox4.innerHTML = 'Designation';

subTitleDaBox4.style.fontFamily = rubic;

box4DoQuintoConteiner.style.border = '5px';

box4DoQuintoConteiner.style.borderStyle = 'Groove';

box4DoQuintoConteiner.style.borderColor = 'orangered';

box4DoQuintoConteiner.style.borderRight = 'none';

box4DoQuintoConteiner.style.borderLeft = 'none';

box4DoQuintoConteiner.style.borderTop = 'none';

box4DoQuintoConteiner.style.textAlign = 'center';

//Flex box conteiner5

section2DoConteiner5.style.display = 'flex';

section2DoConteiner5.style.justifyContent = 'center';

section2DoConteiner5.style.gap = '15px';

//Criando Sexto conteiner

const sextoConteiner = document.createElement('div');

megaBox.appendChild(sextoConteiner);

sextoConteiner.style.marginTop = '5%';

const section1DoSextoConteiner = document.createElement('section');

sextoConteiner.appendChild(section1DoSextoConteiner);

sextoConteiner.style.justifyContent = 'center';

sextoConteiner.style.alignItems = 'center';

sextoConteiner.style.textAlign = 'center'

const title1DoSextoConteiner = document.createElement('h3');

section1DoSextoConteiner.appendChild(title1DoSextoConteiner);

title1DoSextoConteiner.innerHTML = 'OUR BLOG';

title1DoSextoConteiner.style.fontFamily = roboto;

title1DoSextoConteiner.style.color = 'orangered';

///Criando Segundo Titulo

const title2DoSextoConteiner = document.createElement('h1');

section1DoSextoConteiner.appendChild(title2DoSextoConteiner);

title2DoSextoConteiner.innerText = 'Latest From Blog';

title2DoSextoConteiner.style.fontFamily = roboto;

title2DoSextoConteiner.style.fontSize = '50px';

//Desenvolvendo Box's do Sexto Conteiner

const box1DoSextoConteiner = document.createElement('div');

const secondSectionDoSextoConteiner = document.createElement('section');

sextoConteiner.appendChild(secondSectionDoSextoConteiner);

secondSectionDoSextoConteiner.appendChild(box1DoSextoConteiner);

box1DoSextoConteiner.style.width = '600px';

box1DoSextoConteiner.style.backgroundColor = 'Ivory';

const link1DoSextoConteiner = 'https://raw.githubusercontent.com/rangelconcatenado33/Landing-page-evoluida/main/news-1.png';

const imagem1DoSextoConteiner = document.createElement('img');

box1DoSextoConteiner.appendChild(imagem1DoSextoConteiner);

imagem1DoSextoConteiner.src = link1DoSextoConteiner;

//criando a segunda section

const secondSectionDaBox1DoSextoConteiner = document.createElement('section');

box1DoSextoConteiner.appendChild(secondSectionDaBox1DoSextoConteiner);

const divFourImgThisBox = document.createElement('div');

secondSectionDaBox1DoSextoConteiner.appendChild(divFourImgThisBox);

secondSectionDaBox1DoSextoConteiner.style.fontFamily = rubic

//Imagem da segunda section

const imgThisBox = document.createElement('img');

divFourImgThisBox.appendChild(imgThisBox);

const linkFourImgBox = 'https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946317-690-690.jpg';

imgThisBox.src = linkFourImgBox;

imgThisBox.style.width = '80px';

imgThisBox.style.height = '80px';

imgThisBox.style.borderRadius = '80px';

//Desenvolvendo textos da section

const paragraf = document.createElement('p');

divFourImgThisBox.appendChild(paragraf);

paragraf.innerText = 'Itachi Uchiha';

const secondDiv = document.createElement('div');

secondSectionDaBox1DoSextoConteiner.appendChild(secondDiv);

secondDiv.innerText = 'Web Desing Shinobi';

secondDiv.style.marginTop = '16px'

//Configurando Desing Da section

divFourImgThisBox.style.display = 'flex';

divFourImgThisBox.style.flexDirection = 'row';

divFourImgThisBox.style.gap = '10px';

secondSectionDaBox1DoSextoConteiner.style.display = 'flex';

secondSectionDaBox1DoSextoConteiner.style.flexDirection = 'row';

secondSectionDaBox1DoSextoConteiner.style.gap = '25px';

//titulo da box1

const bigTitleFourBox = document.createElement('h1');

bigTitleFourBox.style.fontFamily = roboto;

box1DoSextoConteiner.appendChild(bigTitleFourBox);

bigTitleFourBox.innerHTML = 'Kast Tempor Sea Justo dolor';

bigTitleFourBox.style.marginRight = '400px'

bigTitleFourBox.style.width = '500px';

bigTitleFourBox.style.fontSize = '30px';

//Paragrafo da box

const pgDaBox1 = document.createElement('p');

box1DoSextoConteiner.appendChild(pgDaBox1);

pgDaBox1.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore est atque eligendi ad? A sequi repellendus reiciendis fugit eum, voluptates eos! Assumenda modi cupiditate quae sit quo, excepturi qui?';

//Criando box 2

const box2DoSextoConteiner = document.createElement('div');

secondSectionDoSextoConteiner.appendChild(box2DoSextoConteiner);

secondSectionDoSextoConteiner.style.display = 'flex'

secondSectionDoSextoConteiner.style.flexDirection = 'row';

secondSectionDoSextoConteiner.style.justifyContent = 'center';

secondSectionDoSextoConteiner.style.textAlign = 'center';

secondSectionDoSextoConteiner.style.gap = '30px'

box2DoSextoConteiner.style.width = '600px';

box2DoSextoConteiner.style.backgroundColor = 'Ivory';

const link2DoSextoConteiner = 'https://raw.githubusercontent.com/rangelconcatenado33/Landing-page-evoluida/main/news-2.png';

const imagem2DoSextoConteiner = document.createElement('img');

box2DoSextoConteiner.appendChild(imagem2DoSextoConteiner);

imagem2DoSextoConteiner.src = link2DoSextoConteiner;

//criando a segunda section

const secondSectionDaBox2DoSextoConteiner = document.createElement('section');

box2DoSextoConteiner.appendChild(secondSectionDaBox2DoSextoConteiner);

const divFourImgThisBox2 = document.createElement('div');

secondSectionDaBox2DoSextoConteiner.appendChild(divFourImgThisBox2);

secondSectionDaBox2DoSextoConteiner.style.fontFamily = rubic

//Imagem da segunda section

const imgThisBox2 = document.createElement('img');

divFourImgThisBox2.appendChild(imgThisBox2);

const linkFourImgBox2 = 'https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946317-690-690.jpg';

imgThisBox2.src = linkFourImgBox2;

imgThisBox2.style.width = '80px';

imgThisBox2.style.height = '80px';

imgThisBox2.style.borderRadius = '80px';

//Desenvolvendo textos da section

const paragraf2 = document.createElement('p');

divFourImgThisBox2.appendChild(paragraf2);

paragraf2.innerText = 'Itachi Uchiha';

const secondDiv3 = document.createElement('div');

secondSectionDaBox2DoSextoConteiner.appendChild(secondDiv3);

secondDiv3.innerText = 'Web Desing Shinobi';

secondDiv3.style.marginTop = '16px'

//Configurando Desing Da section

divFourImgThisBox2.style.display = 'flex';

divFourImgThisBox2.style.flexDirection = 'row';

divFourImgThisBox2.style.gap = '10px';

secondSectionDaBox2DoSextoConteiner.style.display = 'flex';

secondSectionDaBox2DoSextoConteiner.style.flexDirection = 'row';

secondSectionDaBox2DoSextoConteiner.style.gap = '25px';

//titulo da box1

const bigTitleFourBox2 = document.createElement('h1');

bigTitleFourBox2.style.fontFamily = roboto;

box2DoSextoConteiner.appendChild(bigTitleFourBox2);

bigTitleFourBox2.innerHTML = 'Kast Tempor Sea Justo dolor';

bigTitleFourBox2.style.marginRight = '400px'

bigTitleFourBox2.style.width = '500px';

bigTitleFourBox2.style.fontSize = '30px';

//Paragrafo da box

const pgDaBox2 = document.createElement('p');

box2DoSextoConteiner.appendChild(pgDaBox2);

pgDaBox2.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore est atque eligendi ad? A sequi repellendus reiciendis fugit eum, voluptates eos! Assumenda modi cupiditate quae sit quo, excepturi qui?';

pgDaBox2.style.fontFamily = rubic;

pgDaBox1.style.fontFamily = rubic

//responsividade com js//

if (screen.width <= '768px') {

    var navBar = window.document.querySelector('#barraDeNavegacao');

    navBar.style.flexDirection = 'column';

    var menuNavBar = window.document.querySelector('#menuNavBar');

    menuNavBar.style.flexDirection = 'column'
}

screen.width <= '768px'? console.log(true): console.log(false);