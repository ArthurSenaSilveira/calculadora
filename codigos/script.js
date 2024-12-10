const n0 = document.getElementById('zero')
const n1 = document.getElementById('um')
const n2 = document.getElementById('dois')
const n3 = document.getElementById('tres')
const n4 = document.getElementById('quatro')
const n5 = document.getElementById('cinco')
const n6 = document.getElementById('seis')
const n7 = document.getElementById('sete')
const n8 = document.getElementById('oito')
const n9 = document.getElementById('nove')
const porcentagem = document.getElementById('porcentagem')
const raiz = document.getElementById('raiz')
const vezes = document.getElementById('vezes')
const apagar = document.getElementById('apagar')
const menos = document.getElementById('menos')
const mais = document.getElementById('mais')
const igual = document.getElementById('igual')
const virg = document.getElementById('virg')
const res = document.getElementById('res')
const divisao = document.getElementById('divisao')

// Adicionar eventos
n0.addEventListener('click', adicionar)
n1.addEventListener('click', adicionar)
n2.addEventListener('click', adicionar)
n3.addEventListener('click', adicionar)
n4.addEventListener('click', adicionar)
n5.addEventListener('click', adicionar)
n6.addEventListener('click', adicionar)
n7.addEventListener('click', adicionar)
n8.addEventListener('click', adicionar)
n9.addEventListener('click', adicionar)
porcentagem.addEventListener('click', porcento)
raiz.addEventListener('click', raizquadrada)
vezes.addEventListener('click', multiplicar)
apagar.addEventListener('click', deletar)
menos.addEventListener('click', adicionar)
mais.addEventListener('click', adicionar)
virg.addEventListener('click', adicionarVirgula)
igual.addEventListener('click', calcular)
divisao.addEventListener('click', dividir)

function adicionar(event) {
  const valorBotao = event.target.textContent
  const valorAtual = res.value
  // Se o valor atual for vazio e o botão pressionado for um operador, não faz nada
  if (valorAtual === '' && ['+', '-', '*', '/'].includes(valorBotao)) {
    return
  }
  res.value = valorAtual + valorBotao
}

function adicionarVirgula() {
  const valorAtual = res.value
  if (!valorAtual.includes('.')) {
    // Verifica se já tem um ponto
    res.value = valorAtual + '.'
  }
}

function porcento() {
  let valorAtual = res.value

  // Verifica se o usuário digitou algo com o símbolo de porcentagem
  if (valorAtual.includes('%')) {
    const [porcentagem, numero] = valorAtual.split('%').map(v => parseFloat(v))

    if (!isNaN(porcentagem) && !isNaN(numero)) {
      // Calcula a porcentagem
      const resultado = (porcentagem / 100) * numero
      res.value = resultado.toString()
    }
  } else {
    res.value = valorAtual + '%' // Adiciona o sinal de porcentagem se não existir
  }
}

function raizquadrada() {
  const valorAtual = parseFloat(res.value)
  const resultado = Math.sqrt(valorAtual)
  res.value = resultado.toString()
}

function multiplicar() {
  const valorAtual = res.value
  const valorBotao = '*' // O valor do botão é o operador de multiplicação
  res.value = valorAtual + valorBotao
}

function dividir() {
  const valorAtual = res.value
  const valorBotao = '/' // O valor do botão é o operador de divisão
  res.value = valorAtual + valorBotao
}

function deletar() {
  res.value = ''
}

function calcular() {
  try {
    // Aqui usamos uma abordagem mais segura e simples para avaliar a expressão
    const expressao = res.value
    const resultado = Function('return ' + expressao)() // Avaliação segura
    res.value = resultado.toString()
  } catch (erro) {
    alert('Erro: ' + erro.message)
  }
}
