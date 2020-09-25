/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
 * Licenciado bajo el MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
   (Función ($) {
    "use strict"; // Inicio de uso estricto

    Desplazamiento suave con jQuery easing
    $('a.js-scroll-trigger[href*-"-"]:not([href-"-"])'. haga clic en(función () {
        Si (
            ubicación. nombrededede ruta. reemplazar(/á// /, "") ==
                esto. nombrededede ruta. reemplazar(/á// /, "") &&
            ubicación. nombre de host: este. nombre de host
        ) {
            var target á $(este. hachís);
            objetivo:  objetivo. longitud
 ? objetivo
 : $("[nombre" + este. hash. rebanada(1) + "]");
            si (destino. longitud) {
                $("html, body"). animar(
                    {
                        scrollTop: destino. Desplazamiento(). arriba,
                    },
                    1000,
                    "easeInOutExpo"
                );
                devolver falso;
            }
        }
    });

    Cierra el menú responsivo cuando se hace clic en un vínculo de desencadenador de desplazamiento
    $(".js-scroll-trigger"). haga clic en(función () {
        $(".navbar-collapse"). colapso("ocultar");
    });

    Active scrollspy para agregar la clase activa a los elementos de la barra de navegación en el desplazamiento
    $("cuerpo"). scrollspy({
        objetivo: "#sideNav",
    });
})(jQuery); // Fin de uso estricto