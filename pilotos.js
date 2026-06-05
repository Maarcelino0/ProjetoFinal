const pilotos = [
    {
        id: 1,
        nome: "Max Verstappen",
        equipa: "Red Bull",
        numero: 3,
        pais: "Países Baixos",
        foto: "fotos/max.avif"
    },
    {
        id: 2,
        nome: "Isack Hadjar",
        equipa: "Red Bull",
        numero: 6,
        pais: "França",
        foto: "fotos/isack.avif"
    },
    {
        id: 3,
        nome: "Lando Norris",
        equipa: "McLaren",
        numero: 1,
        pais: "Reino Unido",
        foto: "fotos/lando.avif"
    },
    {
        id: 4,
        nome: "Oscar Piastri",
        equipa: "McLaren",
        numero: 81,
        pais: "Austrália",
        foto: "fotos/oscar.avif"
    },
    {
        id: 5,
        nome: "Charles Leclerc",
        equipa: "Ferrari",
        numero: 16,
        pais: "Mónaco",
        foto: "fotos/charles.avif"
    },
    {
        id: 6,
        nome: "Lewis Hamilton",
        equipa: "Ferrari",
        numero: 44,
        pais: "Reino Unido",
        foto: "fotos/lewis.avif"
    },
    {
        id: 7,
        nome: "George Russell",
        equipa: "Mercedes",
        numero: 63,
        pais: "Reino Unido",
        foto: "fotos/george.avif"
    },
    {
        id: 8,
        nome: "Kimi Antonelli",
        equipa: "Mercedes",
        numero: 12,
        pais: "Itália",
        foto: "fotos/kimi.avif"
    },
    {
        id: 9,
        nome: "Franco Colapinto",
        equipa: "Alpine",
        numero: 43,
        pais: "Argentina",
        foto: "fotos/franco.avif"
    },
    {
        id: 10,
        nome: "Pierre Gasly",
        equipa: "Alpine",
        numero: 10,
        pais: "França",
        foto: "fotos/pierre.avif"
    },
    {
        id: 11,
        nome: "Liam Lawson",
        equipa: "Racing Bulls",
        numero: 30,
        pais: "Nova Zelândia",
        foto: "fotos/liam.avif"
    },
    {
        id: 12,
        nome: "Arvid Lindblad",
        equipa: "Racing Bulls",
        numero: 41,
        pais: "Reino Unido",
        foto: "fotos/arvid.avif"
    },
    {
        id: 13,
        nome: "Esteban Ocon",
        equipa: "Haas",
        numero: 31,
        pais: "França",
        foto: "fotos/esteban.avif"
    },
    {
        id: 14,
        nome: "Oliver Bearman",
        equipa: "Haas",
        numero: 87,
        pais: "Reino Unido",
        foto: "fotos/oliver.avif"
    },
    {
        id: 15,
        nome: "Carlos Sainz",
        equipa: "WIlliams",
        numero: 55,
        pais: "Espanha",
        foto: "fotos/carlos.avif"
    },
    {
        id: 16,
        nome: "Alexander Albon",
        equipa: "Williams",
        numero: 23,
        pais: "Tailândia",
        foto: "fotos/alexander.avif"
    },
    {
        id: 17,
        nome: "Nico Hülkenberg",
        equipa: "Audi",
        numero: 27,
        pais: "Alemanha",
        foto: "fotos/nico.avif"
    },
    {
        id: 18,
        nome: "Gabriel Bortoleto",
        equipa: "Audi",
        numero: 5,
        pais: "Brasil",
        foto: "fotos/gabriel.avif"
    },
    {
        id: 19,
        nome: "Sergio Pérez",
        equipa: "Cadillac",
        numero: 11,
        pais: "México",
        foto: "fotos/sergio.avif"
    },
    {
        id: 20,
        nome: "Valterri Bottas",
        equipa: "Cadillac",
        numero: 77,
        pais: "Finlândia",
        foto: "fotos/valtteri.avif"
    },
    {
        id: 21,
        nome: "Fernando Alonso",
        equipa: "Aston Martin",
        numero: 14,
        pais: "Espanha",
        foto: "fotos/fernando.avif"
    },
    {
        id: 22,
        nome: "Lance Stroll",
        equipa: "Aston Martin",
        numero: 18,
        pais: "Canadá",
        foto: "fotos/lance.avif"
    }
];

/* Mapeamento de países para emojis de bandeiras */
const bandeiras = {
    "Países Baixos": "NL",
    "França": "FR",
    "Reino Unido": "UK",
    "Austrália": "AU",
    "Mónaco": "MC",
    "Itália": "IT",
    "Argentina": "AR",
    "Nova Zelândia": "NZ",
    "Espanha": "ES",
    "Alemanha": "DE",
    "Brasil": "BR",
    "México": "MX",
    "Canadá": "CA",
    "Tailândia": "TH",
    "Finlândia": "FI"
};

const grid = document.getElementById("pilotos-grid");

pilotos.forEach(piloto => {
    /* Separa o primeiro nome do apelido */
    const partesNome = piloto.nome.split(" ");
    const primeiroNome = partesNome[0];
    const apelido = partesNome.slice(1).join(" ");

    const pilotoElement = document.createElement("div");
    pilotoElement.classList.add("piloto");
    pilotoElement.setAttribute("data-equipa", piloto.equipa);

    pilotoElement.innerHTML = `
        <div class="piloto-info">
            <h2 class="piloto-nome">
                <span class="primeiro-nome">${primeiroNome}</span>
                <span class="apelido">${apelido}</span>
            </h2>
            <p class="piloto-equipa">${piloto.equipa}</p>
            <div class="piloto-numero">${piloto.numero}</div>
            <p class="piloto-pais">${bandeiras[piloto.pais] || ""}</p>
        </div>
        <div class="piloto-foto-wrapper">
            <img src="${piloto.foto}" alt="${piloto.nome}">
        </div>
    `;

    grid.appendChild(pilotoElement);
});
