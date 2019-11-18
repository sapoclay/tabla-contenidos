(function($){

	if ( $('body.single').length ){
		//Enlaces para mostrar u ocultar la tabla de contenidos
		var botonMenu = "<p><div id='botonMO'>CONTENIDO - [<a href='javascript:mostrar();'>Mostrar</a> / <a href='javascript:cerrar();''>Ocultar</a>]</div></p>";
		//Plantillas para la tabla. Por defecto está oculta
		var tmplwrap = "<div id='tabla-contenido' style='display:none;'>\n<p class='titulo'>Tabla de Contenido </p>\n{contenido}</div>";
		var tmplink = "<p {clase}><i class='fa fa-caret-right'></i> <a href={link} class='enlaces'>{texto}</a></p>\n";
		var cadena 	= "";
		
		//Preparamos el segundo y tercer nivel para que tenga una clase
		$('article h2').siblings('h3').addClass('n2');
		$('article h2').siblings('h4').addClass('n3');

		//Bucle, recorremos elementos para construir la tabla
		$('article h2, article h3, article h4').each(function(index, element){
	
			clase = "";
			if ($(this).hasClass('n2'))
				clase = 'class="n2"';
			else if($(this).hasClass('n3'))
				clase = 'class="n3"';

			texto 	 	= $(this).text();
			enlace_id	= texto.replace(/\d-\s|\?|¿/g,'');
			enlace_id 	= enlace_id.replace(/\s+/g, '_');
			$(this).attr('id',enlace_id);

			//Agregamos en una variable cadena
			cadena += tmplink.replace('{link}',"'#" + enlace_id + "'");
			cadena  = cadena.replace('{texto}',texto);
			cadena 	= cadena.replace('{clase}',clase);

		});

		//Ejemplo de link adicional, descomentar

		$('div.dc-social h3').attr('id','titulo-social');
		cadena +="<p><i class='fa fa-share-alt'></i> <a href='#titulo-social'>Compartir</a></p>\n";


		//artículos relacionados

		$('div.rel_posts h3').attr('id','quizasteinterese');
		cadena +="<p><i class='fa fa-link'></i> <a href='#quizasteinterese'>Artículos relacionados</a></p>\n";

		cadena = tmplwrap.replace('{contenido}',cadena);

		//Finalmente insertamos la cadena antes del primer elemento
		$(botonMenu).insertBefore( $('.entry-content h2').first() );

		$(cadena).insertBefore( $('.entry-content h2').first() );
	}

})(jQuery);

//funciones para mostrar u ocultar la tabla de contenido
function mostrar() {
            div = document.getElementById('tabla-contenido');
            div.style.display = '';
        }

function cerrar() {
            div = document.getElementById('tabla-contenido');
            div.style.display = 'none';
        }
