// Seleciona o elemento <select> pelo ID (caso ainda exista no formulário)
var select = document.getElementById("selectCountry");

// Array com a lista de países (caso ainda seja necessário)
var countries = [
    "Afeganistão", "Albânia", "Argélia", "Andorra", "Angola", "Antártida", "Antígua e Barbuda", "Argentina", 
    "Armênia", "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bahrein", "Bangladesh", "Barbados", 
    "Belarus", "Bélgica", "Belize", "Benin", "Bermudas", "Butão", "Bolívia", "Bósnia e Herzegovina", 
    "Botsuana", "Brasil", "Brunei", "Bulgária", "Burkina Faso", "Burundi", "Camboja", "Camarões", 
    "Canadá", "Cabo Verde", "República Centro-Africana", "Chade", "Chile", "China", "Colômbia", 
    "Comores", "Congo", "Costa Rica", "Costa do Marfim", "Croácia", "Cuba", "Chipre", "República Tcheca", 
    "Dinamarca", "Djibuti", "Dominica", "República Dominicana", "Timor-Leste", "Equador", "Egito", 
    "El Salvador", "Guiné Equatorial", "Eritreia", "Estônia", "Etiópia", "Fiji", "Finlândia", "França", 
    "Gabão", "Gâmbia", "Geórgia", "Alemanha", "Gana", "Grécia", "Groenlândia", "Granada", "Guatemala", 
    "Guiné", "Guiné-Bissau", "Guiana", "Haiti", "Honduras", "Hong Kong", "Hungria", "Islândia", "Índia", 
    "Indonésia", "Irã", "Iraque", "Irlanda", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", 
    "Cazaquistão", "Quênia", "Kiribati", "Coreia do Norte", "Coreia do Sul", "Kuwait", "Quirguistão", 
    "Laos", "Letônia", "Líbano", "Lesoto", "Libéria", "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", 
    "Macedônia", "Madagascar", "Malawi", "Malásia", "Maldivas", "Mali", "Malta", "Ilhas Marshall", 
    "Mauritânia", "Maurício", "México", "Micronésia", "Moldávia", "Mônaco", "Mongólia", "Marrocos", 
    "Moçambique", "Namíbia", "Nauru", "Nepal", "Holanda", "Nova Zelândia", "Nicarágua", "Níger", 
    "Nigéria", "Noruega", "Omã", "Paquistão", "Panamá", "Papua-Nova Guiné", "Paraguai", "Peru", 
    "Filipinas", "Polônia", "Portugal", "Catar", "Romênia", "Rússia", "Ruanda", "Samoa", "San Marino", 
    "São Tomé e Príncipe", "Arábia Saudita", "Senegal", "Sérvia e Montenegro", "Seicheles", "Serra Leoa", 
    "Singapura", "Eslováquia", "Eslovênia", "Ilhas Salomão", "Somália", "África do Sul", "Espanha", 
    "Sri Lanka", "Sudão", "Suriname", "Suazilândia", "Suécia", "Suíça", "Síria", "Taiwan", "Tajiquistão", 
    "Tanzânia", "Tailândia", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia", "Turquia", "Turcomenistão", 
    "Uganda", "Ucrânia", "Emirados Árabes Unidos", "Reino Unido", "Estados Unidos", "Uruguai", 
    "Uzbequistão", "Vanuatu", "Venezuela", "Vietnã", "Iêmen", "Zâmbia", "Zimbábue"
];

// Preenche o <select> com os países
if (select) {
    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option"); // Cria um elemento <option>
        var txt = document.createTextNode(countries[i]); // Cria o texto do país
        option.appendChild(txt); // Adiciona o texto ao <option>
        option.setAttribute("value", countries[i]); // Define o valor do <option>
        select.appendChild(option); // Adiciona o <option> ao <select>
    }

    // Adiciona um evento de mudança ao <select>
    select.addEventListener("change", function(event) {
        if (!event.target.value) {
            alert("Por favor, selecione um país."); // Alerta se nenhum país for selecionado
        } else {
            alert("Você escolheu " + event.target.value + ". Parabéns!"); // Alerta com o país selecionado
        }
    });
}

// Função para lidar com o "Lembrar de Mim"
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se há dados salvos no localStorage
    const savedEmail = localStorage.getItem("rememberMeEmail");
    const savedPassword = localStorage.getItem("rememberMePassword");

    // Seleciona os elementos do formulário
    const emailInput = document.querySelector("input[name='email']");
    const passwordInput = document.querySelector("input[name='password']");
    const rememberMeCheckbox = document.querySelector("#rememberMe");

    // Se houver dados salvos, preenche os campos e marca o checkbox
    if (savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
        rememberMeCheckbox.checked = true;
    }

    // Adiciona um evento ao formulário para salvar os dados ao enviar
    document.querySelector("form").addEventListener("submit", function(event) {
        const rememberMe = rememberMeCheckbox.checked;
        const email = emailInput.value;
        const password = passwordInput.value;

        if (rememberMe) {
            // Salva os dados no localStorage
            localStorage.setItem("rememberMeEmail", email);
            localStorage.setItem("rememberMePassword", password);
        } else {
            // Remove os dados do localStorage
            localStorage.removeItem("rememberMeEmail");
            localStorage.removeItem("rememberMePassword");
        }
    });
});