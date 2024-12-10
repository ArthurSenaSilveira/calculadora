const n0 = document.getElementById('zero');
const n1 = document.getElementById('um');
const n2 = document.getElementById('dois');
const n3 = document.getElementById('tres');
const n4 = document.getElementById('quatro');
const n5 = document.getElementById('cinco');
const n6 = document.getElementById('seis');
const n7 = document.getElementById('sete');
const n8 = document.getElementById('oito');
const n9 = document.getElementById('nove');
const porcentagem = document.getElementById('porcentagem');
const raiz = document.getElementById('raiz');
const vezes = document.getElementById('vezes');
const apagar = document.getElementById('apagar');
const menos = document.getElementById('menos');
const mais = document.getElementById('mais');
const igual = document.getElementById('igual');
const virg = document.getElementById('virg');
const res = document.getElementById('res');
const divisao = document.getElementById('dividir');

// Adicionar eventos
n0.addEventListener('click', adicionar);
n1.addEventListener('click', adicionar);
n2.addEventListener('click', adicionar);
n3.addEventListener('click', adicionar);
n4.addEventListener('click', adicionar);
n5.addEventListener('click', adicionar);
n6.addEventListener('click', adicionar);
n7.addEventListener('click', adicionar);
n8.addEventListener('click', adicionar);
n9.addEventListener('click', adicionar);
porcentagem.addEventListener('click', adicionar);
raiz.addEventListener('click', adicionar);
vezes.addEventListener('click', multiplicar);
apagar.addEventListener('click', deletar);
menos.addEventListener('click', subtrair);
mais.addEventListener('click', somar);
virg.addEventListener('click', adicionar);
igual.addEventListener('click', calcular);


function adicionar(event) {
  const valorBotao = event.target.textContent;
  const valorAtual = res.value;
  const novoValor = valorAtual + valorBotao;
  res.value = novoValor;
}

function somar(event) {
  const valorAtual = parseFloat(res.value);
  const valorBotao = parseFloat(event.target.textContent);
  const resultado = valorAtual + valorBotao;
  res.value = resultado.toString();
}

function subtrair(event) {
  const valorAtual = parseFloat(res.value);
  const valorBotao = parseFloat(event.target.textContent);
  const resultado = valorAtual - valorBotao;
  res.value = resultado.toString();
}

function multiplicar(event) {
  const valorAtual = parseFloat(res.value);
  const valorBotao = parseFloat(event.target.textContent);
  const resultado = valorAtual * valorBotao;
  res.value = resultado.toString();
}

function dividir(event) {
  const valorAtual = parseFloat(res.value);
  const valorBotao = parseFloat(event.target.textContent);
  const resultado = valorAtual / valorBotao;
  res.value = resultado.toString();
}

function porcento(event) {
  const valorAtual = parseFloat(res.value);
  const valorBotao = parseFloat(event.target.textContent);
  const resultado = (valorAtual / 100) * valorBotao;
  res.value = resultado.toString();
}

function raizquadrada(event) {
  const valorAtual = parseFloat(res.value);
  const resultado = Math.sqrt(valorAtual);
  res.value = resultado.toString();
}

function deletar() {
  res.value = '';
}

function calcular() {
  const expressao = res.value;
  if (expressao === '') {
    alert('Insira uma expressão');
    return;
  }
  try {
    const resultado = eval(expressao);
    res.value = resultado.toString();
  } catch (erro) {
    alert('Erro: ' + erro.message);
  }
}


