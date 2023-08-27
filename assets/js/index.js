const arriendos = [
	{
		name: "Casa de campo",
		description: "Un lugar ideal para descansar de la ciudad",
		src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
		rooms: 2,
		m: 170,
	},
	{
		name: "Casa de playa",
		description: "Despierta tus días oyendo el oceano",
		src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
		rooms: 2,
		m: 130,
	},
	{
		name: "Casa en el centro",
		description: "Ten cerca de ti todo lo que necesitas",
		src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
		rooms: 1,
		m: 80,
	},
	{
		name: "Casa rodante",
		description: "Conviertete en un nómada del mundo sin salir de tu casa",
		src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
		rooms: 1,
		m: 6,
	},
	{
		name: "Departamento",
		description: "Desde las alturas todo se ve mejor",
		src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
		rooms: 3,
		m: 200,
	},
	{
		name: "Mansión",
		description: "Vive una vida lujosa en la mansión de tus sueños ",
		src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
		rooms: 5,
		m: 500,
	},
];

const btnNav = document.querySelector("#btn");
let roomIn = document.querySelector("#rooms");
const sizeIn = document.querySelector("#sizeIn");
const sizeOut = document.querySelector("#sizeOut");
const totalOut = document.querySelector("#totalSrc");
const father = document.querySelector("#propiedades");
let totalFiltrado = 0;
// ------------------------------------creardivs-------------
const crearTarjeta = (arriendo) => {
	const card = document.createElement("div");
	card.classList.add("propiedad");

	const template = `
		<img src="${arriendo.src}">
		<h2>${arriendo.name}</h2>
		<h3>${arriendo.description}</h3>
		<p>rooms: ${arriendo.rooms}</p>
		<p>m: ${arriendo.m}</p>
	`;

	card.innerHTML = template;
	father.appendChild(card);
};

for (let arriendo of arriendos) {
	crearTarjeta(arriendo);
	totalFiltrado++;
	totalOut.textContent = totalFiltrado;
}
// ---------------------------filtro--------------------
btnNav.addEventListener("click", () => {
	father.innerHTML = "";
	const rooms = Number(roomIn.value);
	const desde = Number(sizeIn.value);
	const hasta = parseInt(sizeOut.value);
	totalFiltrado = 0;
	for (let arriendo of arriendos) {
		if (
			arriendo.rooms >= rooms &&
			arriendo.m >= desde &&
			arriendo.m <= hasta
		) {
			crearTarjeta(arriendo);
			totalFiltrado++;
		}
	}
	if (totalFiltrado == 0 || rooms == 0 || desde == 0 || hasta == 0) {
		alert("Error en la busqueda o en los valores ingresado");
		father.innerHTML = "";
		totalFiltrado = "no hay coincidencias con la busqueda";
	}
	totalOut.textContent = totalFiltrado;
});
