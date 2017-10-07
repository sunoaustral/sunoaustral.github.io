var sessions=[];
var date_options = {year: "numeric", month: "long", day: "numeric"};

function capital(string){
	return string.charAt(0).toUpperCase()+string.slice(1);
}

function init(){
	var id=0;
	sessions.push({
		id:id,
		name:'sesión 1',
		date:new Date('September 12, 2017'),
		bitacora:"se nos presenta el proyecto solar y se nos dan instrucciones y recomendaciones.",
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
	id++
	sessions.push({
		id:id,
		name:'sesión 2',
		date:new Date('September 13, 2017'),
		bitacora:"comienza el desarrollo de la guía entregada. Comenzamos estudiando las leyes de Kirchhoff.",
		fotos:[
		
		],
	});
	id++
	sessions.push({
		id:id,
		name:'sesión 3',
		date:new Date('September 20, 2017'),
		bitacora:"Seguimos con el desarrollo de la guía, terminamos la parte de las leyes de Kirchhoff y comenzamos con ...",
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
	id++
	sessions.push({
		id:id,
		name:'Sesión X',
		date:new Date('September 27, 2017'),
		bitacora:"Se realizó la medición de resistencia de un réostato, \
		la cual nos entregó las siguientes mediciones; \
		resistencia máxima 22,2 [Ω] y resistencia mínima 0,7 [Ω].\
		Además se hizo la medición de voltaje que entrega un mini \
		panel solar de 5,5 [V] y de 170 [mA] expuesto a un foco halógeno \
		a 30 cm. de distancia, donde los rayos de luz inciden de forma \
		perpendicular en el panel.\
		",
		fotos:[
			{
				file:"assets/images/sesiones/27-9/27_9.1.png",
				desc:"",
			},
			{
				file:"assets/images/sesiones/27-9/27_9.2.png",
				desc:"",
			},
		],
	});
	id++
	sessions.push({
		id:id,
		name:'Sesión X',
		date:new Date('September 29, 2017'),
		bitacora:"Se realizó varias mediciones \
		de voltaje que entrega el mini panel solar\
		 cuando en este se varía su ángulo y la distancia\
		  entre la fuente de luz y él. De ello concluimos que\
		   mientras menor sea la distancia entre el panel y la\
		    fuente, y menor sea la variación del ángulo (para \
		    que este pueda captar gran parte de los rayos de \
		    luz) implica que mayor será la entrega de voltaje \
		    del mini panel solar.",
		fotos:[
			{
				file:"assets/images/sesiones/29-9/29_9.1.jpg",
				desc:"",
			},
			{
				file:"assets/images/sesiones/29-9/29_9.2.jpg",
				desc:"",
			},
			{
				file:"assets/images/sesiones/29-9/29_9.3.jpg",
				desc:"",
			},
		],
	});
	id++
	sessions.push({
		id:id,
		name:'Sesión X',
		date:new Date('October 3, 2017'),
		bitacora:"Se realizó la medición de corriente \
		y voltaje con diferentes variaciones de resistencias\
		, con la ayuda de una década (resistencia variable) \
		; de lo cual obtuvimos la curva característica de un \
		panel solar de 5,5 [V] y 170 [mA].",
		fotos:[
			{
				file:"assets/images/sesiones/03-10/1.jpeg",
				desc:"",
			},
			{
				file:"assets/images/sesiones/03-10/03-10.png",
				desc:"",
			},
		],
	});
	id++
	sessions.push({
		id:id,
		name:'Sesión X',
		date:new Date('October 4, 2017'),
		bitacora:"Recopilación de datos para \
		la redacción de Informe para <b>Experiencia N°\
		 2: Curva Característica de un Panel Solar</b>\
		 , donde se incluye funcionamiento de un \
		 reóstato y tres casos a obtener curva\
		  característica cuando hay un panel solar\
		  , dos paneles en paralelo y dos paneles en serie. ",
		fotos:[],
	});

}