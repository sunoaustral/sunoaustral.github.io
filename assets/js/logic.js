var sessions=[];
var date_options = {year: "numeric", month: "long", day: "numeric"};

function capital(string){
	return string.charAt(0).toUpperCase()+string.slice(1);
}

function init(){
	sessions.push({
		id:0,
		name:'sesión 1',
		date:new Date('September 12, 2017'),
		bitacora:"",
		fotos:[
			{
				file:"assets/images/sesiones/sesion1/placa_rlc.jpeg",
				desc:"placa RLC.",
			},
			{
				file:"assets/images/sesiones/sesion1/multimetro1.jpg",
				desc:"multimetro.",
			},
		],
	});
	sessions.push({
		id:1,
		name:'sesión 2',
		date:new Date('September 13, 2017'),
		bitacora:"",
		fotos:[
		],
	});
	sessions.push({
		id:2,
		name:'sesión 3',
		date:new Date('September 20, 2017'),
		bitacora:"",
		fotos:[
			{
				file:"assets/images/sesiones/sesion3/circuito_resistecias_serie.jpeg",
				desc:"circuito resistecias en serie.",
			},
			{
				file:"assets/images/sesiones/sesion3/multimetro_rlc.jpeg",
				desc:"multimetro conectado al circuito de resistencias en serie.",
			},
			{
				file:"assets/images/sesiones/sesion3/WhatsApp Image 2017-09-20 at 12.57.09 PM.jpeg",
				desc:"compañera anotando resultados de los experimentos.",
			},
		],
	});
}