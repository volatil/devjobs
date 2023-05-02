fetch( "data.json" ).then(value => value.json()).then((value) => {
	// console.debug( value[0].requirements );
	console.debug( value[0] );
	for( let count = 0; count <= value.length-1; count++ ) {
		const data = {
			id: value[count].id,
			nombre: value[count].company,
			logo: {
				isotipo: "https://raw.githubusercontent.com/mcornale/devjobs-web-app/10c8bcec5dce55185ede8e4ea36b4010a65ffc34/public/" + value[count].logo,
				color: value[count].logoBackground,
			},
			cargo: value[count].position,
			tiempo: value[count].postedAt,
			duracion: value[count].contract,
			direccion: value[count].location,

			descripcion: value[count].description,
			requisitos: {
				contenido: value[count].requirements.content,
				items: value[count].requirements.items,
			},
			rol: {
				contenido: value[count].role.content,
				items: value[count].role.items,
			},
		}

		$("section.cargos").append(`
			<div class="cargo" data-id="${data.id}">
				<div class="logo" style="background: ${data.logo.color}">
					<img src="${data.logo.isotipo}" alt="${data.nombre}" />
				</div>
				<div class="since">${data.tiempo} / ${data.duracion}</div>
				<div class="posicion">
					<strong>${data.cargo}</strong>
				</div>
				<div class="location">
					<img src="https://img.icons8.com/?size=16&id=21613&format=png" alt="${data.direccion}" />
					<p>${data.direccion}</p>
				</div>
				<p class="nombreempresa">${data.nombre}</p>
				<div class="content">
					<div>
						${data.descripcion}
					</div>
					<div>
						<h5>Requisitos</h5>
						<div>${data.requisitos.contenido}</div>
						<div>${data.requisitos.items}</div>
					</div>
					<div>
						<h5>Que haras</h5>
						<div>${data.rol.contenido}</div>
						<div>${data.rol.items}</div>
					</div>
				</div>
				<span class="vermas">Ver más</span>
			</div>
		`);
	}
});

$("body").on("click", ".cargo span.vermas", function(){
	$(this).parent().find(".content").fadeToggle();
	if ( $(this).html() == "Ver más" ) {
		$(this).html("Ver menos");
	} else {
		$(this).html("Ver más");
	}
});