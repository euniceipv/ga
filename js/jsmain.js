//sempre que o site carregar a data e hora atual devem ser obtidas
var timenow = new Date();
//use set interval para ir verificando a hora 
checktime();
setInterval(() => {
  timenow = new Date(); // ?
  checktime();
}, 1800000); // meia-hora (milliseconds)

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

//--------------------------------------END OF HERO--------------------------//

//-------------------------------------DAY-------------------------------------//

var diaAtual;                //para criar relação com o dia que estiver aberto (mudarDia())
function checktime() {
  daynow = timenow.getDate();
  monthnow = timenow.getMonth(); // zero-based !

  //fake it:
  //daynow = 1; monthnow = 3; // 1/jan para garantir que não arranca

  if (monthnow == 2 && daynow == 30) {    // 30/March
    diaAtual = "0";
  }
  else if (monthnow == 2 && daynow == 31) { // 31/March
    diaAtual = "1";
  }
  else if (monthnow == 3 && daynow == 1) { // 1/April
    diaAtual = "2";
  }
  else if (monthnow == 3 && daynow == 2) { // 2/April
    diaAtual = "3";
   
  } else {
    diaAtual = "0";
  }
}

//----------------------------END OF DAY-----------------------------------//

//----------------------------PROGRAM---------------------------------------------//

  // Elementos do DOM
  const tabs = document.querySelectorAll('.programa__tab');
  const listas = document.querySelectorAll('.programa__lista');

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

//----------------------------END OF PROGRAM------------------------------------------//

//----------------------------BACK TO TOP---------------------------------------------//
  
function backToTop()
{
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
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

//----------------------------END OF BACK TO TOP------------------------------------------//

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


