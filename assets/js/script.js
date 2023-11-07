
$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        speed: 400,
        spaceBetween: 100,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });


    $("#button-modal").on("click", function () {
        $(".dialogLogin").toggle();
    });

    $("#modalCadastro").on("click", function () {
        $(".dialogCadastro").toggle();
    });

    $(".exit-cadastro").on("click", function () {
        $(".dialogCadastro, .dialogLogin").hide();
   });
   $(".exit").on("click", function () {
        $(".dialogCadastro, .dialogLogin").hide();
   });
});

const menuHamburger = document.querySelector(".img-menu-responsivo");
const navLinks = document.querySelector(".nav-list");

const imagens = [
  "./assets/img/menu-btn.png",
  "./assets/img/icone-fermer-et-x-noir-1.png"
];
let contadorImagem = 0;

menuHamburger.addEventListener('click', () => {
navLinks.classList.toggle('mobile-menu');

  const menuImagem = document.querySelector(".img-menu-responsivo");
  if (menuImagem) {
    contadorImagem = (contadorImagem + 1) % imagens.length;
    menuImagem.src = imagens[contadorImagem];
  }
});





