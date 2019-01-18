var inicios = [
'¡Impacto!', '¡Sorpresa!', '¡Imposible!', '¡Increíble!', '¡Atención!', 'No lo podemos creer:', 'México:', 'Otra falla de seguridad:', 'Game Of Thrones:', '¡Al fin!', 'Video:', 'Urgente:', '¡Una locura!', 'Tiembla Whatsapp:', 'No eres tú:',
'Ahora:', 'De no creerlo:', 'Imparable:', '¡Excelente!', 'Según los astrónomos,', 'De película:', '¿Qué sucedió?', 'Ola viral:', 'Colombia:', '¿Es el fin?', '¡Batió récord!', 'Muy serio:'
]

var personajes = [
'Steve Jobs', 'Mark Zuckeberg', 'Bill Gates', 'Una IA de Facebook', 'Un robot de Google', 'Whatsapp', 'Youtube', 'Una inteligencia artificial', 'La sonda New Horizons', 'AMLO', 'El nuevo celular de Samsung', 'El nuevo iPhone', 'Jeff Bezos', 'Satya Nadella', 
'Donald Trump', 'El último Huawei', 'Satoru Iwata', 'Shigeru Miyamoto', 'Hideo Kojima', 'La última versión de Android', 'Piñera', 'La SUBTEL', 'Homero Simpson', 'José Maza', 'La Camara de Diputados', 'Elon Musk', 'Daenerys Targayen', 'Alex Smith',
'Un usuario de Movistar', 'Usuario de Entel', 'el CEO de Wom', 'Contrató Claro y'
]

var acciones = [
'se debate entre la vida y la muerte', 'acaba de fallecer en extrañas circunstancias', 'sigue ganando millones de dólares', 'se encomienda a la Virgen', 'descubrió el origen de la vida', 'encontró vida en otros planetas', 've porno en su trabajo', 
'se desbloquea con la mirada', 'filtró miles de datos personales de usuarios', 'acabó con el hambre en el mundo', 'desatará la Tercera Guerra Mundial', 'está mejor que nunca', 'es lo peor que nos ha pasado', 
'fue detenido por la policía', 'quiere llegar a la Luna', 'imprimiendo un pene en una impresora 3D', 'destronó al gobierno de Venezuela', 'fue bloqueado por el gobierno chino', 'es sorprendido fumando marihuana en vivo', 
'es pieza clave en la Operación Huracán', 'descubre su meme y se vuelve viral', 'compartió nuevas imágenes de su video prohibido', 'predijo el Apocalipsis y no nos dimos cuenta', 'pasó el pack y fue a la cárcel', 
'podría ser una sonda manejada por aliens', 'y su divertido juego basado en Black Mirror', 'estrena nueva película dirigida por Mel Gibson', 'confirmó la secuela de Breaking Bad', 'usa su celular en el baño', 
'enviaba mensajes sexuales a su amante', 'es nuestro objeto de deseo en un nuevo Mundo Bizarro', 'revive con un nuevo comercial de culto', 
]

function newQuote() {
	var randomNumber1 =Math.floor(Math.random() * (inicios.length));
	var randomNumber2 =Math.floor(Math.random() * (personajes.length));
	var randomNumber3 =Math.floor(Math.random() * (acciones.length));
	document.getElementById('quoteDisplay').innerHTML = inicios[randomNumber1] + " " + personajes[randomNumber2] + " " + acciones[randomNumber3];
}