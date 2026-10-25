

export const fotosRecuerdos = [
  {
    id: 1,
    numero: 1,
    titulo: "Nuestra sesión de Fotos",
    fecha: "04/11/2018",
    contenido:
      "¿Te acuerdas de esa sesión de fotos, amor? Fue en Palestina con un amigo que estaba empezando en la fotografía. Todo lo que hicimos fue mágico para mí, y obvio cómo olvidar después cuando llegamos a tu casa la pelea con tu mamá jajajaja, nunca voy a superar eso. Fue un día hermoso porque además pudimos compartir un momento mágico juntos. 🥹❤️",
    foto: "/img6.jpeg",
  },
  {
    id: 2,
    numero: 2,
    titulo: "Calvojit",
    fecha: "15/01/2021",
    contenido:
      "Esta es la mejor foto de toda la historia. El nene tenía pura lana en esa cabeza y tras de eso se le alborotaba jajajajaj, entonces para cambiarle ese look pues tocaba peluquearlo. El primer look fue todo un éxito: ¡calvo completamente! Jajajaja nunca se va a superar esa foto, es la más divertida y tierna de todas.",
    foto: "/img18.jpeg",
  },
  {
    id: 3,
    numero: 3,
    titulo: "Primera izada de bandera de nuestro hijo",
    fecha: "23/04/2026",
    contenido:
      "Ese día fue muy especial para nosotros: ver a nuestro hijo tan feliz y orgulloso de su bandera es algo que nunca olvidaré. Felicitarlo, abrazarlo y decirle lo mucho que lo amamos y lo orgullosos que estamos de él. Ese día recordé todos los momentos vividos y todo lo que hemos logrado como familia. 🥹❤️",
    foto: "/img5.jpeg",
  },
  {
    id: 4,
    numero: 4,
    titulo: "Día de la madre",
    fecha: "10/05/2026",
    contenido:
      "Quiero que sepas lo orgulloso que estoy de ti como mamá. Admiro la forma tan hermosa en la que amas a nuestro hijo; en cada desvelo, en cada preocupación, en cada abrazo y en cada sacrificio silencioso para verlo feliz. Eres una gran mamá, perfecta porque amas de una manera sincera y real. Gracias por amar a nuestro hijo con tanta devoción. Feliz día a la mejor mamá que pudo tener mi hijo. 🥹❤️",
    foto: "/img13.jpeg",
  },

];

// Mapeo unificado para el libro: cada página tiene los datos exactos de su foto
export const albumPaginas = fotosRecuerdos.map((item) => ({
  ...item,
  imagen: item.foto,
  tituloMemoria: item.titulo,
  fechaMemoria: item.fecha,
  notaMemoria: item.contenido,
  razon: item.titulo, 
}));
