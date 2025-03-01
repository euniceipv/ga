//sempre que o site carregar a data e hora atual devem ser obtidas
var timenow = new Date();
var mainsection = document.getElementById("happening-now"); //refere a toda a section do happening now

acordion();
backToTop();




// Função para tornar o menu sticky
window.onscroll = function () { //evento que é ativado sempre que fazemos scroll na página

  // Seleciona o elemento do menu
  var menu = document.querySelector('.menu');

  var footer = document.querySelector('.footer');

  //posição original do menu
  var posicaoInicial = menu.offsetTop; //distância inicial do menu ao topo da página

  // Se passar do limite do footer, volta ao normal
  if (window.scrollY + window.innerHeight > footer.offsetTop) {
    menu.style.position = 'relative';
    menu.style.maxWidth = '100%';
    document.body.style.paddingTop = '0';

  }


  // Se o scroll passou da posição inicial do menu
  if (window.scrollY > posicaoInicial) {
    // Fixa o menu no topo
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.right = '0';
    menu.style.maxWidth = '64rem';  // Mantém largura máxima do site
    menu.style.margin = '0 auto';   // Centra o menu
    menu.style.zIndex = '1000';     // fica por cima de outros elementos
    // Adiciona espaço ao bocy para compensar o menu fixo
    document.body.style.paddingTop = '3.5rem';
  } else {
    // Volta o menu à posição normal
    menu.style.position = 'relative';
    //menu.style.maxWidth = '100%';
    menu.style.left = 'auto';
    menu.style.right = 'auto';
    // Remove o espaço extra
    document.body.style.paddingTop = '0';
  }
};


//-----------------------------HERO----------------------------//
//hero v0.1 (update this for next commit)
var slideindex = 0;



const slides = Array.from(document.getElementsByClassName("imagem_responsiva"));
console.log(slides);


initialslide();
function initialslide() {
  slides[slideindex].classList.add("displayslide");
}


function showSlide(index) {
  if (index >= slides.length) {
    slideindex = 0;
  }
  else if (index < 0) {
    slideindex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displayslide");
  });
  slides[slideindex].classList.add("displayslide");
}
function prevslide() {
  slideindex--;
  showSlide(slideindex);
  console.log(slideindex);
}
function nextslide() {
  slideindex++;
  showSlide(slideindex);
  console.log(slideindex);
}
//--------------------------------------ENDOFHERO--------------------------//



//-------------------------------------HAPPENINGNOW-------------------------------------//
//Programa v0.75 (update this for next commit)+
//colocar a informação no ficheiro é um risco podes usar o local storage 
//toda a informação do happening now  vai ficar contida num ficheiro de texto
//leitura de ficheiro
//modificar lista
//adicionar atualização





var listanow = document.getElementById("nowlist");
var listanext = document.getElementById("nextlist");



//adicionar elementos a lista "now"
function adicionarelementosalistanow(text) {
  var newli = document.createElement("li");

  var element = newli.appendChild(document.createTextNode(text));

  listanow.appendChild(element);
}

//adicionar elementos a lista "next"
function adicionarelementosalistanext(text1) {
  var newli1 = document.createElement("li");

  var element1 = newli1.appendChild(document.createTextNode(text1));

  listanext.appendChild(element1)
}



//Programa


//dia0
localStorage.setItem(1, "20h00 Welcome dinner Pousada de Viseu");

//dia1
localStorage.setItem(2, "08h30 Registration & Coffee Foyer Serviços Centrais");
localStorage.setItem(3, "09h00 Campus Tour ???");
localStorage.setItem(4, "10h00 Welcome and Opening;Aula  Magna");
localStorage.setItem(5, "11h00 General Assembly  & parallel sessions 1 Várias salas paralelas");
localStorage.setItem(6, "13h00 Lunch CAFAC");
localStorage.setItem(7, "14h30 General Assembly & parallel sessions 2 Várias salas paralelas");
localStorage.setItem(8, "16h00 Coffee break CAFAC");
localStorage.setItem(9, "16h30 Parallel sessions 3 Várias salas paralelas");
localStorage.setItem(10, "18h00 End of day");
localStorage.setItem(11, "19h00 Reception at Câmara Municipal de Viseu //localização");
localStorage.setItem(12, "20h30 Dinner with wine tasting LUSOVINI (Nelas)");

//dia 2
localStorage.setItem(13, "08h30 Registration & Coffee Foyer Serviços Centrais");
localStorage.setItem(14, "09h00 Parallel sessions 4 Várias salas paralelas");
localStorage.setItem(15, "10h30 Coffee break CAFAC");
localStorage.setItem(16, "11h00 Parallel sessions 5 Várias salas paralelas");
localStorage.setItem(17, "13h00 Lunch CAFAC");
localStorage.setItem(18, "14h30 Várias salas paralelas 6 Várias salas paralelas");
localStorage.setItem(19, "15h30 Coffee break CAFAC");
localStorage.setItem(20, "16h30 Parallel sessions 7 Várias salas paralelas");
localStorage.setItem(21, "17h30 Closing ceremony;Aula Magna");
localStorage.setItem(22, "20h00 Quinta da Magarenha localização");

//dia 3
localStorage.setItem(23, "00h00 Visit to São Pedro do Sul;Meeting point: ???");




//use set interval para ir verificando minuto a minuto a hora 
checktime();

setInterval(() => {


  timenow = new Date();
  //temponaconsola();
  checktime();
}, 30000); //change to one minute (1 second = 1000 milliseconds) 60000



var diaAtual;                //para criar relação com o dia que estiver aberto (mudarDia())
function checktime() {
  //console.log("time now: "+timenow);

  daynow = timenow.getDate();
  monthnow = timenow.getMonth();


  if (monthnow == 0 && daynow == 22) {     //é aqui que se muda os dias  
    dia0();                               //se o dia 0 for hoje
    diaAtual = "0";
    
  }
  else if (monthnow == 1 && daynow == 19) {
    dia1();
    diaAtual = "1";

  }
  else if (monthnow == 3 && daynow == 2) {
    dia2();
    diaAtual = "2";
  }
  else if (monthnow == 3 && daynow == 3) {
    dia3();
    diaAtual = "3";
   
  }
  else {
    mainsection.style.display = "none"; //esconder o happening now  "enable"-on "none"-off
    diaAtual = "0";
  }
}

//dia0();
//dia1();
//dia2();
//dia3();


function dia0() {
  mainsection.style.display = "enable";
  h0 = timenow.getHours();
  console.log(h0);
  var textdia0 = localStorage.getItem(1);

  if (h0 > 20 || h0 == 20) {
    limparlista();
    adicionarelementosalistanow(textdia0);
    //disable next
  }
  else {
    limparlista();
    adicionarelementosalistanext(textdia0);
    adicionarelementosalistanow("Nothing yet") //or disable
  }
}

function dia1() {
  mainsection.style.display = "enable";
  h1 = timenow.getHours();
  m1 = timenow.getMinutes();
  console.log(h1);
  console.log(m1);


  var option1;
  if (h1 >= 8 && m1 >= 30) {
    option1 = 2;
  }
  if (h1 >= 9) {
    option1 = 3;
  }
  if (h1 >= 10) {
    option1 = 4;
  }
  if (h1 >= 11) {
    option1 = 5;
  }
  if (h1 >= 13) {
    option1 = 6;
  }
  if (h1 >= 14 && m1 >= 30) {
    option1 = 7;
  }
  if (h1 >= 16) {
    option1 = 8;
  }
  if (h1 >= 16 && m1 >= 30) {
    option1 = 9;
  }
  if (h1 >= 18) {
    option1 = 10;
  }
  if (h1 >= 19 && m1 >= 30) {
    option1 = 11;
  }
  if (h1 >= 20 && m1 >= 30) {
    option1 = 12;
  }


  limparlista();
  var textdia1 = localStorage.getItem(option1);
  option1 = option1 + 1;
  if (option1 == 13) {
    adicionarelementosalistanext("Nothing yet");//or disable
  }
  else {
    var textdia1next = localStorage.getItem(option1);
    adicionarelementosalistanext(textdia1next);
  }
  adicionarelementosalistanow(textdia1);
}

function dia2() {
  mainsection.style.display = "enable";
  h2 = timenow.getHours();
  m2 = timenow.getMinutes();
  console.log(h2);
  console.log(m2);


  var option2;
  if (h2 >= 8 && m2 >= 30) {
    option2 = 13;
  }
  if (h2 >= 9) {
    option2 = 14;
  }
  if (h2 >= 10 && m2 >= 30) {
    option2 = 15;
  }
  if (h2 >= 11) {
    option2 = 16;
  }
  if (h2 >= 13) {
    option2 = 17;
  }
  if (h2 >= 14 && m2 >= 30) {
    option2 = 18;
  }
  if (h2 >= 15 && m2 >= 30) {
    option2 = 19;
  }
  if (h2 >= 16 && m2 >= 30) {
    option2 = 20;
  }
  if (h2 >= 17 && m2 >= 30) {
    option2 = 21;
  }
  if (h2 >= 20) {
    option = 22;
  }

  console.log("AQUIIII" + option2);


  limparlista();

  var textdia2 = localStorage.getItem(option2);
  adicionarelementosalistanow(textdia2);

  option2 = option2 + 1;
  console.log("AQUIIII" + option2);
  if (option2 == 23) {
    adicionarelementosalistanext("Nothing yet");//or disable
  }
  else {
    var textdia2next = localStorage.getItem(option2);
    adicionarelementosalistanext(textdia2next);
  }

}

function dia3() {
  mainsection.style.display = "enable";
  h3 = timenow.getHours();
  var textdia3 = localStorage.getItem(23);
  var horavisita = 14; //colocar hora da visita aqui
  if (h3 > horavisita || h3 == horavisita) {
    limparlista();
    adicionarelementosalistanow(textdia3);
    //disable next
  }
  else {
    limparlista();
    adicionarelementosalistanext(textdia3);
    adicionarelementosalistanow("Nothing Yet") //or disable
  }
}


function limparlista() {
  listanext.innerHTML = '';
  listanow.innerHTML = '';
}

//no need
/*
function addlist(t){
    var textnow = localStorage.getItem(t);
    var textnext = localStorage.getItem(t+1);
    adicionarelementosalistanow(textnow);
    adicionarelementosalistanext(textnext);
}
*/
// extra
function temponaconsola() {

  const currenthour = timenow.getHours();
  const currentminute = timenow.getMinutes();
  const currentsecs = timenow.getSeconds();

  var firstpart;
  var secondpart;
  //this is not finished yet 
  if (currentminute < 10) {
    firstpart = currenthour + ":0" + currentminute;
  } else {
    firstpart = currenthour + currentminute + ":";
  }
  if (currentsecs < 10) {
    secondpart = ":0" + currentsecs;
  } else {
    secondpart = ":" + currentsecs;
  }

  time = firstpart + secondpart;
  console.log(time);

}
//----------------------------ENDOFHAPPENINGNOW-----------------------------------//

//----------------------------PROGRAM---------------------------------------------//



  // Elementos do DOM
  const tabs = document.querySelectorAll('.programa__tab');
  const listas = document.querySelectorAll('.programa__lista');

  // Dados das localizações
  const locationData = {
    'Pousada de Viseu': {
      image: 'img/mainpage/pousada.jpg',
      address: 'Rua do Hospital, 3500-161 Viseu',
      coordinates: '40.653571, -7.912932',
      mapsLink: 'https://maps.app.goo.gl/dss9F79bCi7x8wbp9',
      description: 'The Pousada de Viseu is a historic and luxurious hotel located in the heart of the city of Viseu, Portugal. It occupies a 19th-century building that originally operated as a hospital, known as the Hospital of São Teotónio, and has been completely renovated and converted into a pousada by the Pousadas de Portugal network.'
    },
    'Room 9': {
      image: 'img/mainpage/begining.jpg',
    }
    // Adicionar mais locais conforme necessário
  };



  // Elementos do Modal
  const modal = document.getElementById('locationModal');
  const modalTitle = modal.querySelector('.modal__title');
  const modalImage = modal.querySelector('.modal__image');
  const modalAddress = modal.querySelector('.modal__address');
  const modalDescription = modal.querySelector('.modal__description');
  const modalClose = modal.querySelector('.modal__close');
  const locationPin = modal.querySelector('.modal__location-pin');

  mudarDia(diaAtual);


  // Função para mudar de dia
  function mudarDia(numeroDia) {
    // Remove classes ativas de todas as tabs e listas
    tabs.forEach(tab => tab.classList.remove('programa__tab--active'));
    listas.forEach(lista => lista.classList.remove('programa__lista--active'));

    // Adiciona classe ativa à tab e lista selecionadas
    const tabAtiva = document.querySelector(`.programa__tab[data-day="${numeroDia}"]`);
    const listaAtiva = document.querySelector(`.programa__lista[data-day="${numeroDia}"]`);

    if (tabAtiva && listaAtiva) {
      tabAtiva.classList.add('programa__tab--active');
      listaAtiva.classList.add('programa__lista--active');
    }
  }


  // Event Listeners para as tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const dia = this.getAttribute('data-day');
      mudarDia(dia);
    });
  });

  // Função para abrir o modal
  function openLocationModal(locationName) {
    const location = locationData[locationName];
    if (location) {
      modalTitle.textContent = locationName;
      modalImage.src = location.image;
      modalAddress.textContent = location.address;
      locationPin.href = location.mapsLink;
      modalDescription.textContent = location.description;
      modal.style.display = 'block';
    }
  }

  // Event Listeners para os pinos de localização
  document.querySelectorAll('.programa__pin').forEach(pin => {
    pin.addEventListener('click', function (e) {
      e.preventDefault();
      const locationName = this.parentNode.textContent.trim().replace('📍', '').trim();
      openLocationModal(locationName);
    });
  });

  // Fechar modal
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Fechar modal ao clicar fora
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });



//----------------------------ENDPROGRAM------------------------------------------//

//----------------------------BACKTOP---------------------------------------------//
function backToTop()
{
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
}

//----------------------------ENDBACKTOP------------------------------------------//
//----------------------------MENUS ACORDION PÁGINA HTGH------------------------------------------//

function acordion()
{
  const accordionButtons = document.querySelectorAll('.accordion__button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle classe active no botão
            this.classList.toggle('accordion__button--active');
            
            // Encontra o conteúdo associado
            const content = this.nextElementSibling;
            
            // Se o conteúdo estiver visível, esconde-o
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Esconde todos os outros conteúdos abertos
                const allContent = document.querySelectorAll('.accordion__content');
                allContent.forEach(item => {
                    item.style.display = 'none';
                });
                
                // Remove classe active de todos os outros botões
                accordionButtons.forEach(btn => {
                    if (btn !== this) {
                        btn.classList.remove('accordion__button--active');
                    }
                });
                
                // Mostra o conteúdo clicado
                content.style.display = 'block';
            }
        });
    });
}



//----------------------------END MENUS ACORDION PÁGINA HTGH------------------------------------------//

//---||---TESTINGGROUND---||---//


/* const n1 = new Date(2025,11,1,13,50,0,5);
  const n2 = new Date(2025,11,1,13,50,0,5);


  if (n1 > n2) {
    console.log("Date 1 is greater than Date 2");
  } else if (n1 < n2) {
    console.log("Date 1 is less than Date 2");
  } else {
    console.log("Both Dates are same");
  }
*/

/*
function addlist(){

  t++//move this

    if (t == 23)
      t=1;
    console.log(t);

    var textnow = localStorage.getItem(t);
    var textnext = localStorage.getItem(t+1);


    adicionarelementosalistanow(textnow);
    adicionarelementosalistanext(textnext);


    //console.log("texto now"+textnow);
    //console.log("texto next"+textnext);
}
*/




//LER FICHEIRO TXT <NO USE> SAFETY FIRST!!!
/*
const timeofthega = new Date(2025,11,1,13,5,3,5); // 1 e 2 de abirl de 2025 





//variaveis para o now
var dia;
var hora;
var nomesessao;
var sala;

//variaveis para o next
var dia1;
var hora1;
var nomesessao1;
var sala1;


var numerodaproximalinha = 0;
var contar=0;


var diaautal=1; //para teste
var horaatual="08h30"; //para teste
const localização= "Js/programa.txt";

//ler file BY THE LOVE OF GOD FIX THIS
fetch(localização)
  .then((r) => r.text())
  .then((text) => {
    var line = text.split("\n"); //DECLARE THIS OUTSIDE IN THEORY YOU CAN SEPARATE THIS (i really hope so)
    //console.log(line);



    line.forEach(element => {
    var conteudo  = element.split(";"); //ALSO DECLARE THIS OUTSIDE!!
    //console.log(conteudo);

      dia = parseInt(conteudo[0]);//this can go horrible wrong i am just saying
      hora = conteudo[1];
      nomesessao = conteudo[2];
      sala = conteudo[3];

      var acontecimento = hora+" "+nomesessao+" "+sala;
      
      contar++;

      // adicionarelementsalista(acontecimento);

      if(dia == diaautal && hora == horaatual){
        //adicionarelementosalistanow(acontecimento);
      
        numerodaproximalinha = contar;
        return numerodaproximalinha;
      }
      
      //quando há mais que um evento a lista subrepoem os elementos suggestion add content.split a função de adiconar (both of them : )
    });

  
    //proxima linha
    var conteudo1 = line[numerodaproximalinha].split(";");
    //console.log("Numero da proxima linha:"+numerodaproximalinha);
    //console.log("proxima linha: "+conteudo1);
    
    //dia1 = conteudo1[0];
    hora1 = conteudo1[1];
    //console.log("conteudo1" + hora1);
    nomesessao1 = conteudo1[2];
    sala1 = conteudo1[3];

    var nextacontecimento = hora1+" "+nomesessao1+" "+sala1;
    //adicionarelementosalistanext(nextacontecimento);

   })
  .catch((e) => console.error(e));
 */


/* dias da GA
const march31 = new Date("2025-03-31");
const april1 = new Date("2025-04-01");
const april2 = new Date("2025-04-02");
const april3 = new Date("2025-04-03");

console.log("march31: "+march31);
console.log("april1: "+april1);
console.log("april2: "+april2);
console.log("april3: "+april3);
*/