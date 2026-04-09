//Importa o prompt-sync para receber o input do usuário

const prompt = require("prompt-sync")();

//Menu principal
async function consultaCEP() {
    try{
    // solicita o cep, monta url, faz a requisicao http, retorna a resposta

    // recebe o cep do usuário
    let cep = prompt("Digite o seu CEP: ");
    //retira os espaços do input
    cep = cep.trim();

    const url = `http://viacep.com.br/ws/${cep}/json`

    const resposta = await fetch(url);
    const dados = await resposta.json();

    if(dados.erro) {
        console.log("CEP inválido.");
        return;
    }
    //Exibe os dados do CEP
    console.log("Dados do CEP: ");
    console.log("CEP: ", dados.cep);
    console.log("Logradouro: ", dados.logradouro);
    console.log("Bairro ", dados.bairro);
    console.log("Cidade: ", dados.localidade);
    console.log("UF: ", dados.uf);
    }
    catch(erro) {
        console.log("Erro ao acessar a API");
        console.log(erro.message);
        }
}
consultaCEP();