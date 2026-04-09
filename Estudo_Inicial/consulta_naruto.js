const prompt = require("prompt-sync")();

// Menu principal
async function consultaNaruto() {
  try {
    let nome = prompt("Digite o nome de algum personagem de Naruto: ").trim();

    const url = `https://dattebayo-api.onrender.com/characters?name=${encodeURIComponent(nome)}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (!dados.characters || dados.characters.length === 0) {
      console.log("Personagem não encontrado.");
      return;
    }

    const personagem = dados.characters[0];

    console.log(`--------------- Dados de ${personagem.name}: ---------------`);
    console.log("NOME: \n", personagem.name, "\n");
    console.log(
      "PRIMEIRA APARIÇÃO NO MANGÁ: \n",
      personagem.debut?.manga,
      "\n" || "Não informado",
    );
    console.log(
      "PRIMEIRA APARIÇÃO NO ANIME: \n",
      personagem.debut?.anime,
      "\n" || "Não informado",
    );
    console.log(
      "KEKKEI GENKAI: \n",
      personagem.personal?.kekkeiGenkai,
      "\n" || "Não informado",
    );
    console.log(
      "OCUPAÇÃO:\n ",
      personagem.personal?.occupation?.join("; \n "),
      "\n" || "Não informado",
    );
    console.log(
      "DUBLADORES EM JP:\n",
      personagem.voiceActors?.japanese?.join("; \n"),
      "\n" || "Não informado",
    );
  } catch (erro) {
    console.log("ERRO AO ACESSAR A API!");
    console.log(erro.message);
  }
}

consultaNaruto();
