(function($){

	if ( $('body.single').length ){

		//Plantillas para la tabla
		var tmplwrap ="<div id='tabla-contenido'>\n<p class='titulo'>Tabla de Contenido</p>\n{contenido}</div>";
		var tmpllink = "<p {clase}><i class='fa fa-caret-right'></i> <a href={link}>{texto}</a></p>\n";
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
			cadena += tmpllink.replace('{link}',"'#" + enlace_id + "'");
			cadena  = cadena.replace('{texto}',texto);
			cadena 	= cadena.replace('{clase}',clase);

		});

		//Ejemplo de link adicional, descomentar

		$('div.rel_posts h3').attr('id','quizasteinterese');
		cadena +="<p><i class='fa fa-link'></i> <a href='#quizasteinterese'>Artículos relacionados</a></p>\n";

		cadena = tmplwrap.replace('{contenido}',cadena);

		//Finalmente insertamos la cadena antes del primer elemento
		$(cadena).insertBefore( $('.entry-content h2').first() );
	}


})(jQuery);
