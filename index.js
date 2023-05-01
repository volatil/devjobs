fetch( "data.json" ).then(value => value.json()).then((value) => {
	console.table( value[0] );
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
		}

		$("section.cargos").append(`
			<div class="cargo" data-id="${data.id}">
				<div class="logo" style="background: ${data.logo.color}">
					<img src="${data.logo.isotipo}" alt="${data.nombre}" />
				</div>
				<div class="since">${data.tiempo} / ${data.duracion}</div>
				<div class="cargo">
					<strong>${data.cargo}</strong>
				</div>
				<div class="location">${data.direccion}</div>
				<span>${data.nombre}</span>
			</div>
		`);
	}
});