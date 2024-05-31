

window.onload = function() {
    const container = document.getElementById('button-container');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < letters.length; i++) {
        const button = document.createElement('button');
        button.textContent = letters[i];
        // Añade un evento de clic a cada botón
        button.addEventListener('click', function() {
            this.style.display = 'none';
        });
        container.appendChild(button);
    }
}




//base de datos

const temasDeConversacion = [
    {
      tema: "Arte",
      palabras: [
        "Artista", "Boceto", "Cuadro", "Dibujo", "Escultura", "Fotografía", 
        "Galería", "Historia", "Instalación", "Joya", "Kitsch", "Lienzo", 
        "Mural", "Naturaleza", "Óleo", "Pintura", "Quimera", "Retrato", 
        "Símbolo", "Técnica", "Urbano", "Vanguardista", "Warhol", "Xenofobia", 
        "Yeso", "Zen"
      ]
    },
    {
      tema: "Viajes",
      palabras: [
        "Australia", "Brasil", "Crucero", "Destino", "Europa", "Francia", 
        "Grecia", "Hotel", "Isla", "Japón", "Kilimanjaro", "Londres", 
        "Maldivas", "Nueva York", "Océano", "Pasaporte", "Qatar", "Roma", 
        "Safari", "Turismo", "Uruguay", "Viaje", "Washington", "Xian", 
        "Yakarta", "Zúrich"
      ]
    },
    {
      tema: "Cocina",
      palabras: [
        "Aperitivo", "Barbacoa", "Ceviche", "Dulce", "Ensalada", "Fondue", 
        "Gazpacho", "Helado", "Ingrediente", "Jugo", "Kebab", "Lasaña", 
        "Mousse", "Noodles", "Omelette", "Pizza", "Quiche", "Risotto", 
        "Sopa", "Tapas", "Utensilios", "Vinagre", "Wok", "Xocolatl", 
        "Yogur", "Zumo"
      ]
    },
    {
      tema: "Deportes",
      palabras: [
        "Atletismo", "Béisbol", "Ciclismo", "Deportes", "Escalada", "Fútbol", 
        "Gimnasia", "Hockey", "Indoor", "Judo", "Karate", "Lucha", 
        "Maratón", "Natación", "Olímpico", "Patinaje", "Quinto", "Rugby", 
        "Surf", "Tenis", "UFC", "Voleibol", "Windsurf", "X Games", 
        "Yoga", "Zumba"
      ]
    },
    {
      tema: "Educación",
      palabras: [
        "Aula", "Biblioteca", "Clase", "Docente", "Estudio", "Formación", 
        "Grado", "Historia", "Investigación", "Jornada", "Kinesiología", 
        "Lectura", "Matemáticas", "Notas", "Orientación", "Profesor", 
        "Química", "Redacción", "Seminario", "Taller", "Universidad", 
        "Vocación", "Web", "Xenón", "Yacimiento", "Zoología"
      ]
    },
    {
      tema: "Familia",
      palabras: [
        "Amor", "Boda", "Casa", "Dedicación", "Educación", "Familia", 
        "Generosidad", "Hogar", "Infancia", "Juego", "Kin", "Lazos", 
        "Madre", "Niños", "Organización", "Padre", "Querencia", "Raíces", 
        "Soporte", "Tíos", "Unión", "Valores", "Well-being", "Xenial", 
        "Yerno", "Zumbido"
      ]
    },
    {
      tema: "Historia",
      palabras: [
        "Antigua", "Batalla", "Civilización", "Dinastía", "Época", "Faraón", 
        "Guerra", "Historia", "Imperio", "Joya", "Káiser", "Leyenda", 
        "Monarquía", "Nobleza", "Origen", "Pirámide", "Quijote", "Rey", 
        "Siglo", "Tradición", "Usurpador", "Victoria", "Waterloo", "Xenofobia", 
        "Yugo", "Zar"
      ]
    },
    {
      tema: "Hobbies",
      palabras: [
        "Arte", "Bordado", "Cocina", "Danza", "Escritura", "Fotografía", 
        "Guitarra", "Horticultura", "Instrumento", "Jardinería", "Karate", 
        "Lectura", "Música", "Naturaleza", "Origami", "Pintura", "Quilting", 
        "Reciclaje", "Senderismo", "Teatro", "Urbex", "Viajar", "Weaving", 
        "Xilografía", "Yoga", "Zoología"
      ]
    },
    {
      tema: "Idiomas",
      palabras: [
        "Alemán", "Bilingüe", "Castellano", "Dialecto", "Español", "Francés", 
        "Gramática", "Habla", "Italiano", "Japonés", "Koiné", "Lenguaje", 
        "Multilingüe", "Nativo", "Ortografía", "Portugués", "Quechua", 
        "Ruso", "Sueco", "Traducción", "Ucraniano", "Vocabulario", "Welsh", 
        "Xhosa", "Yoruba", "Zulú"
      ]
    },
    {
      tema: "Juegos",
      palabras: [
        "Ajedrez", "Baraja", "Cartas", "Dados", "Estrategia", "Futbolín", 
        "Go", "Hockey", "I Spy", "Juegos", "Karaoke", "Lotería", 
        "Mahjong", "Naipes", "Oca", "Parchís", "Quoridor", "Rummy", 
        "Scrabble", "Trivial", "Uno", "Videojuegos", "Warhammer", "Xadrez", 
        "Yo-yo", "Zelda"
      ]
    },
    {
      tema: "Tecnología",
      palabras: [
        "Automatización", "Bitcoin", "Computadora", "Drones", "Electrónica", 
        "Fibra óptica", "Google", "Hardware", "Internet", "Java", "Kinect", 
        "Laptop", "Móvil", "Nanotecnología", "Online", "Programación", 
        "Quantum", "Robótica", "Software", "Tecnología", "USB", "Virtual", 
        "Web", "Xcode", "YouTube", "Zoom"
      ]
    },
    {
      tema: "Libros",
      palabras: [
        "Autor", "Biblioteca", "Cuento", "Drama", "Ensayo", "Ficción", 
        "Género", "Historia", "Ilustración", "Joyas", "Kindle", "Lectura", 
        "Manuscrito", "Novela", "Obra", "Poesía", "Quijote", "Relato", 
        "Saga", "Título", "Utopía", "Volumen", "Wordsworth", "Xenofobia", 
        "Yeats", "Zafón"
      ]
    },
    {
      tema: "Música",
      palabras: [
        "Álbum", "Banda", "Concierto", "Disco", "Estudio", "Festival", 
        "Guitarra", "Himno", "Instrumento", "Jazz", "Karaoke", "Letra", 
        "Melodía", "Nota", "Ópera", "Piano", "Quinteto", "Ritmo", 
        "Sinfonía", "Tema", "Ukelele", "Voz", "World music", "Xilófono", 
        "YouTube", "Zampoña"
      ]
    },
    {
      tema: "Naturaleza",
      palabras: [
        "Árbol", "Bosque", "Cascada", "Desierto", "Ecosistema", "Fauna", 
        "Geología", "Hábitat", "Isla", "Jungla", "Kilimanjaro", "Lago", 
        "Montaña", "Nube", "Océano", "Parque", "Quercus", "Río", 
        "Selva", "Tierra", "Universo", "Valle", "Wild", "Xerófito", 
        "Yellowstone", "Zebra"
      ]
    },
    {
      tema: "Política",
      palabras: [
        "Asamblea", "Bilateral", "Constitución", "Democracia", "Elección", 
        "Federación", "Gobierno", "Hegemonía", "Ideología", "Justicia", 
        "Knesset", "Ley", "Ministro", "Nación", "Organización", "Parlamento", 
        "Quórum", "Reforma", "Sufragio"
      ]
    }
]
function seleccionarTema() {
    // Obtener un número aleatorio entre 0 y la longitud de la matriz de temas
    const indiceAleatorio = Math.floor(Math.random() * temasDeConversacion.length);
    // Obtener el tema correspondiente al índice aleatorio
    const temaSeleccionado = temasDeConversacion[indiceAleatorio];
    // Obtener el elemento de resultado del HTML
    const resultadoTemaElemento = document.getElementById("resultadoTema");
    // Actualizar el contenido del elemento con el tema seleccionado
    resultadoTemaElemento.textContent = "Tema seleccionado: " + temaSeleccionado.tema;
  }
  