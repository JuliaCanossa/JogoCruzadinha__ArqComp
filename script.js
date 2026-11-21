// ============================================================
// Cruzadinha de Arquitetura Computacional
// ============================================================

// ---------- 1) DADOS ----------
// Cada palavra tem: resposta, linha e coluna onde começa,
// direção ("H" = horizontal, "V" = vertical) e a dica.
var palavras = [
  { resposta: "DMA", linha: 0, coluna: 6, direcao: "H",
    dica: "Controlador que move blocos de dados entre periféricos e a RAM sem ocupar a CPU." },
  { resposta: "MICROCONTROLADOR", linha: 0, coluna: 7, direcao: "V",
    dica: "Sou um chip único com CPU, memória e periféricos. Estou no Arduino." },
  { resposta: "QUADCORE", linha: 1, coluna: 3, direcao: "V",
    dica: "Tenho 4 núcleos de processamento no mesmo chip." },
  { resposta: "RAM", linha: 1, coluna: 9, direcao: "V",
    dica: "Sou a memória principal: temporária, mas sem mim nada roda. Perco tudo quando a energia acaba." },
  { resposta: "DUALCORE", linha: 2, coluna: 12, direcao: "V",
    dica: "Tenho 2 núcleos de processamento no mesmo chip." },
  { resposta: "ROM", linha: 3, coluna: 7, direcao: "H",
    dica: "Guardo o que nunca pode se perder, como o programa de inicialização (boot). No uso normal, a CPU só lê o que há em mim." },
  { resposta: "MEMORIADEMASSA", linha: 3, coluna: 5, direcao: "V",
    dica: "Tenho muito espaço e guardo seus arquivos mesmo desligado: HD, SSD." },
  { resposta: "ULA", linha: 4, coluna: 10, direcao: "H",
    dica: "Parte da CPU que faz as contas (soma, subtração) e as comparações lógicas (E, OU, NÃO)." },
  { resposta: "DATABUS", linha: 5, coluna: 9, direcao: "V",
    dica: "Eu transporto o conteúdo, nos dois sentidos: leitura e escrita." },
  { resposta: "REGISTRADORES", linha: 8, coluna: 2, direcao: "H",
    dica: "Sou a memória minúscula e velocíssima dentro da CPU." },
  { resposta: "CACHE", linha: 8, coluna: 0, direcao: "V",
    dica: "Sou pequena e rápida, e guardo cópias do que a CPU mais usa." },
  { resposta: "FLASH", linha: 10, coluna: 11, direcao: "V",
    dica: "Sou não volátil e apago em blocos. Guardo o programa do microcontrolador, o pendrive e o SSD." },
  { resposta: "CPU", linha: 11, coluna: 2, direcao: "V",
    dica: "Sou o cérebro do computador: busco, decodifico e executo as instruções." },
  { resposta: "EEPROM", linha: 12, coluna: 0, direcao: "H",
    dica: "Não esqueço sem energia e posso ter um único byte reescrito, sem mexer nos vizinhos. Guardo configurações no Arduino." },
  { resposta: "ADDRESSBUS", linha: 13, coluna: 5, direcao: "H",
    dica: "Eu digo onde está a posição de memória. Só a CPU fala comigo." },
  { resposta: "UC", linha: 13, coluna: 13, direcao: "V",
    dica: "Sou o maestro: dito o que cada parte da CPU deve fazer e quando." }
];

var LINHAS = 17;
var COLUNAS = 15;

// ---------- 2) VARIÁVEIS GERAIS ----------
var grade = [];    
var campos = [];   
var numeros = []; 

var linhaAtual = 0;
var colunaAtual = 0;
var direcaoAtual = "H";

// ---------- 3) FUNÇÕES AUXILIARES ----------

// Devolve a lista de casas {l, c} que uma palavra ocupa
function casasDaPalavra(p) {
  var lista = [];
  for (var i = 0; i < p.resposta.length; i++) {
    if (p.direcao == "H") {
      lista.push({ l: p.linha, c: p.coluna + i });
    } else {
      lista.push({ l: p.linha + i, c: p.coluna });
    }
  }
  return lista;
}

// Diz se existe casa jogável na posição (l, c)
function existeCasa(l, c) {
  if (l < 0 || l >= LINHAS || c < 0 || c >= COLUNAS) {
    return false;
  }
  return grade[l][c] != "";
}

// Diz se a casa faz parte de uma palavra na direção indicada
function temPalavra(l, c, direcao) {
  if (direcao == "H") {
    return existeCasa(l, c - 1) || existeCasa(l, c + 1);
  } else {
    return existeCasa(l - 1, c) || existeCasa(l + 1, c);
  }
}

// Procura a palavra que passa pela casa (l, c) na direção indicada
function acharPalavra(l, c, direcao) {
  for (var i = 0; i < palavras.length; i++) {
    var p = palavras[i];
    if (p.direcao == direcao) {
      var casas = casasDaPalavra(p);
      for (var j = 0; j < casas.length; j++) {
        if (casas[j].l == l && casas[j].c == c) {
          return p;
        }
      }
    }
  }
  return null;
}

// ---------- 4) MONTAR A GRADE E OS NÚMEROS ----------

function montarGrade() {
  // começa tudo vazio
  for (var l = 0; l < LINHAS; l++) {
    grade[l] = [];
    campos[l] = [];
    numeros[l] = [];
    for (var c = 0; c < COLUNAS; c++) {
      grade[l][c] = "";
      campos[l][c] = null;
      numeros[l][c] = 0;
    }
  }

  // coloca as letras de cada palavra na grade
  for (var i = 0; i < palavras.length; i++) {
    var casas = casasDaPalavra(palavras[i]);
    for (var j = 0; j < casas.length; j++) {
      grade[casas[j].l][casas[j].c] = palavras[i].resposta.charAt(j);
    }
  }
}

// Numera as casas onde começa alguma palavra (da esquerda para a direita, de cima para baixo)
function numerarCasas() {
  var contador = 0;
  for (var l = 0; l < LINHAS; l++) {
    for (var c = 0; c < COLUNAS; c++) {
      if (grade[l][c] != "") {
        var comecaH = !existeCasa(l, c - 1) && existeCasa(l, c + 1);
        var comecaV = !existeCasa(l - 1, c) && existeCasa(l + 1, c);
        if (comecaH || comecaV) {
          contador++;
          numeros[l][c] = contador;
        }
      }
    }
  }
  
  // guarda o número dentro de cada palavra
  for (var i = 0; i < palavras.length; i++) {
    palavras[i].numero = numeros[palavras[i].linha][palavras[i].coluna];
  }
}

// ---------- 5) DESENHAR NA TELA ----------

function desenharTabuleiro() {
  var tabuleiro = document.getElementById("tabuleiro");
  for (var l = 0; l < LINHAS; l++) {
    for (var c = 0; c < COLUNAS; c++) {
      var casa = document.createElement("div");
      casa.className = "casa";

      if (grade[l][c] == "") {
        casa.className = "casa vazia";
      } else {
        // número pequeno no canto
        if (numeros[l][c] > 0) {
          var num = document.createElement("span");
          num.className = "numero";
          num.textContent = numeros[l][c];
          casa.appendChild(num);
        }
        // campo onde o jogador digita
        var campo = document.createElement("input");
        campo.type = "text";
        campo.maxLength = 1;
        campo.autocomplete = "off";
        campo.dataset.l = l;
        campo.dataset.c = c;
        campo.addEventListener("click", cliqueNaCasa);
        campo.addEventListener("input", digitou);
        campo.addEventListener("keydown", apertouTecla);
        casa.appendChild(campo);
        campos[l][c] = campo;
      }
      tabuleiro.appendChild(casa);
    }
  }
}

function desenharPistas() {
  // ordena as palavras pelo número da pista
  var ordenadas = palavras.slice();
  ordenadas.sort(function (a, b) { return a.numero - b.numero; });

  for (var i = 0; i < ordenadas.length; i++) {
    var p = ordenadas[i];
    var item = document.createElement("li");
    item.innerHTML = "<b>" + p.numero + ".</b> " + p.dica + " (" + p.resposta.length + " letras)";
    item.addEventListener("click", cliqueNaPista.bind(null, p));
    p.itemPista = item;   // guarda o <li> para pintar depois

    if (p.direcao == "H") {
      document.getElementById("pistas-horizontais").appendChild(item);
    } else {
      document.getElementById("pistas-verticais").appendChild(item);
    }
  }
}

// ---------- 6) SELEÇÃO E DESTAQUE ----------

// Marca a casa (l, c) como atual e destaca a palavra
function selecionar(l, c) {
  linhaAtual = l;
  colunaAtual = c;

  // se a direção atual não existe nessa casa, troca
  if (!temPalavra(l, c, direcaoAtual)) {
    if (direcaoAtual == "H") {
      direcaoAtual = "V";
    } else {
      direcaoAtual = "H";
    }
  }

  campos[l][c].focus();
  campos[l][c].select();   // assim a letra nova substitui a antiga
  pintarSelecao();
}

function pintarSelecao() {
  // limpa o destaque antigo
  for (var l = 0; l < LINHAS; l++) {
    for (var c = 0; c < COLUNAS; c++) {
      if (campos[l][c] != null) {
        campos[l][c].classList.remove("palavra-ativa");
        campos[l][c].classList.remove("casa-atual");
      }
    }
  }
  for (var i = 0; i < palavras.length; i++) {
    palavras[i].itemPista.classList.remove("pista-ativa");
  }

  // destaca a palavra atual
  var p = acharPalavra(linhaAtual, colunaAtual, direcaoAtual);
  if (p != null) {
    var casas = casasDaPalavra(p);
    for (var j = 0; j < casas.length; j++) {
      campos[casas[j].l][casas[j].c].classList.add("palavra-ativa");
    }
    p.itemPista.classList.add("pista-ativa");
  }
  campos[linhaAtual][colunaAtual].classList.add("casa-atual");
}

// ---------- 7) EVENTOS: CLIQUE E TECLADO ----------

function cliqueNaCasa(evento) {
  var l = Number(evento.target.dataset.l);
  var c = Number(evento.target.dataset.c);

  // clicar de novo na mesma casa troca a direção (se der)
  if (l == linhaAtual && c == colunaAtual) {
    var outra = "H";
    if (direcaoAtual == "H") {
      outra = "V";
    }
    if (temPalavra(l, c, outra)) {
      direcaoAtual = outra;
    }
  }
  selecionar(l, c);
}

function cliqueNaPista(p) {
  direcaoAtual = p.direcao;
  selecionar(p.linha, p.coluna);
}

// Quando o jogador digita uma letra
function digitou(evento) {
  var campo = evento.target;
  var l = Number(campo.dataset.l);
  var c = Number(campo.dataset.c);

  // só letras de A a Z, em maiúscula
  var texto = campo.value.toUpperCase();
  var letra = "";
  for (var i = 0; i < texto.length; i++) {
    var ch = texto.charAt(i);
    if (ch >= "A" && ch <= "Z") {
      letra = ch;
    }
  }
  campo.value = letra;

  // se mudou a letra, apaga a cor do Conferir nessa casa
  campo.classList.remove("certa");
  campo.classList.remove("errada");

  // avança para a próxima casa
  if (letra != "") {
    var proxL = l;
    var proxC = c;
    if (direcaoAtual == "H") {
      proxC = c + 1;
    } else {
      proxL = l + 1;
    }
    if (existeCasa(proxL, proxC)) {
      selecionar(proxL, proxC);
    }
  }
}

// Setas e Backspace
function apertouTecla(evento) {
  var l = Number(evento.target.dataset.l);
  var c = Number(evento.target.dataset.c);
  var tecla = evento.key;

  if (tecla == "ArrowRight" || tecla == "ArrowLeft" || tecla == "ArrowUp" || tecla == "ArrowDown") {
    evento.preventDefault();
    var novaL = l;
    var novaC = c;
    if (tecla == "ArrowRight") { novaC = c + 1; direcaoAtual = "H"; }
    if (tecla == "ArrowLeft")  { novaC = c - 1; direcaoAtual = "H"; }
    if (tecla == "ArrowDown")  { novaL = l + 1; direcaoAtual = "V"; }
    if (tecla == "ArrowUp")    { novaL = l - 1; direcaoAtual = "V"; }
    if (existeCasa(novaL, novaC)) {
      selecionar(novaL, novaC);
    }
  }

  if (tecla == "Backspace") {
    // se a casa tem letra, o navegador apaga sozinho
    // se está vazia, volta uma casa e apaga a letra de lá
    if (evento.target.value == "") {
      evento.preventDefault();
      var antL = l;
      var antC = c;
      if (direcaoAtual == "H") {
        antC = c - 1;
      } else {
        antL = l - 1;
      }
      if (existeCasa(antL, antC)) {
        campos[antL][antC].value = "";
        campos[antL][antC].classList.remove("certa");
        campos[antL][antC].classList.remove("errada");
        selecionar(antL, antC);
      }
    }
  }
}

// ---------- 8) BOTÕES ----------

function conferir() {
  var acertos = 0;

  // limpa as cores antigas
  limparCores();

  for (var i = 0; i < palavras.length; i++) {
    var p = palavras[i];
    var casas = casasDaPalavra(p);
    var estaCerta = true;

    for (var j = 0; j < casas.length; j++) {
      var campo = campos[casas[j].l][casas[j].c];
      var esperada = p.resposta.charAt(j);
      if (campo.value != esperada) {
        estaCerta = false;
        // letra digitada errada fica vermelha
        if (campo.value != "") {
          campo.classList.add("errada");
        }
      }
    }

    if (estaCerta) {
      acertos++;
      p.itemPista.classList.add("certa");
      for (var k = 0; k < casas.length; k++) {
        campos[casas[k].l][casas[k].c].classList.add("certa");
      }
    } else {
      p.itemPista.classList.add("errada");
    }
  }

  document.getElementById("contador").textContent = acertos + " de " + palavras.length + " palavras";

  var mensagem = document.getElementById("mensagem");
  if (acertos == palavras.length) {
    mensagem.textContent = "Parabéns! Você acertou todas as palavras!";
  } else {
    mensagem.textContent = "Verde = palavra certa. Vermelho = letra errada. Continue tentando!";
  }
}

// Tira as cores de certo/errado do tabuleiro e das pistas
function limparCores() {
  for (var l = 0; l < LINHAS; l++) {
    for (var c = 0; c < COLUNAS; c++) {
      if (campos[l][c] != null) {
        campos[l][c].classList.remove("certa");
        campos[l][c].classList.remove("errada");
      }
    }
  }
  for (var i = 0; i < palavras.length; i++) {
    palavras[i].itemPista.classList.remove("certa");
    palavras[i].itemPista.classList.remove("errada");
  }
}

function reiniciar() {
  for (var l = 0; l < LINHAS; l++) {
    for (var c = 0; c < COLUNAS; c++) {
      if (campos[l][c] != null) {
        campos[l][c].value = "";
        campos[l][c].classList.remove("palavra-ativa");
        campos[l][c].classList.remove("casa-atual");
      }
    }
  }
  limparCores();
  for (var i = 0; i < palavras.length; i++) {
    palavras[i].itemPista.classList.remove("pista-ativa");
  }
  document.getElementById("contador").textContent = "0 de " + palavras.length + " palavras";
  document.getElementById("mensagem").textContent = "";
}

// ---------- 9) INÍCIO DO JOGO ----------
montarGrade();
numerarCasas();
desenharTabuleiro();
desenharPistas();

document.getElementById("btn-conferir").addEventListener("click", conferir);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciar);
