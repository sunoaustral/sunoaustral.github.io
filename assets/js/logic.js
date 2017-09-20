var sessions=[];

function init(){
	sessions.push({
		id:0,
		name:'sesión 1',
		date:new Date('September 12, 2017'),
		bitacora:"",
		fotos:[
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
				file:"/assets/images/sesiones/sesion1/circuito_resistecias_serie",
				desc:"circuito resistecias en serie.",
			},
		],
	});
}