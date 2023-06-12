const assert = require('chai').assert;
const { processarPessoas } = require('./index'); 

describe('Teste da função processarPessoas', function() {
  it('Deve retornar o número correto de pessoas', function() {
    const listaPessoas = [
      { nome: 'João', idade: 10, email: 'joao@example.com' },
      { nome: 'Maria', idade: 15, email: 'maria@example.com' },
      { nome: 'Pedro', idade: 20, email: 'pedro@example.com' }
    ];

    const numPessoas = processarPessoas(listaPessoas);

    assert.equal(numPessoas, listaPessoas.length);
  });
});
