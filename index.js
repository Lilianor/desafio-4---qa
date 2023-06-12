function processarPessoas(pessoas) {
  for (let i = 0; i < pessoas.length; i++) {
    const { nome, idade, email } = pessoas[i];
    let categoria;

    if (idade < 12) {
      categoria = "Criança";
    } else if (idade >= 12 && idade <= 17) {
      categoria = "Adolescente";
    } else {
      categoria = "Adulto";
    }

    console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}, Categoria: ${categoria}`);
  }

  return pessoas.length;
}

module.exports = {
  processarPessoas: processarPessoas
};



const listaPessoas = [
  { nome: "João", idade: 10, email: "joao@example.com" },
  { nome: "Maria", idade: 15, email: "maria@example.com" },
  { nome: "Pedro", idade: 20, email: "pedro@example.com" }
];

const numPessoas = processarPessoas(listaPessoas);
console.log(`Número de pessoas na lista: ${numPessoas}`);