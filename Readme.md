# Contexto
Você é um desenvolvedor web e professor de Arquitetura Computacional. Vai me
ajudar a criar um jogo de cruzadinha para a atividade 
"Cruzadinha de Arquitetura Computacional" 

# Objetivo
Cruzadinha que roda no navegador para treinar termos de Arquitetura Computacional.
O jogador lê a pista e descobre a palavra. O jogo será publicado no GitHub

# Palavras (16 termos; usar no mínimo 12 no tabuleiro)
Termo	Dica no tabuleiro	Casa (resposta)
CPU	Sou o cérebro do computador: busco, decodifico e executo as instruções CPU

ULA	Faço as contas (soma, subtração) e as comparações lógicas (E, OU, NÃO)	ULA

UC (Unidade de Controle)	Sou o maestro: dito o que cada parte da CPU deve fazer e quando	UC

Registradores	Sou a memória minúscula e velocíssima dentro da CPU	REGISTRADORES

RAM	Sou temporária, mas sem mim nada roda. Perco tudo quando a energia acaba	RAM

Address bus (barramento de endereço)	Eu digo onde está a posição de memória. Só a CPU fala comigo	ADDRESSBUS

Data bus (barramento de dados)	Eu transporto o conteúdo, nos dois sentidos: leitura e escrita	DATABUS

ROM	Sou memória só de leitura e guardo o que não pode se perder, como o boot	ROM

EEPROM	Posso ser apagada e regravada eletricamente, byte a byte, e não esqueço sem energia	EEPROM]

Flash	Sou não volátil e apago em blocos. Guardo o programa do microcontrolador, o pendrive e o SSD	FLASH

Cache	Sou pequena e rápida, e guardo cópias do que a CPU mais usa	CACHE

Memória de massa (armazenamento)	Tenho muito espaço e guardo seus arquivos mesmo desligado: HD, SSD	MEMORIADEMASSA

DMA	Transfiro dados entre memória e periféricos sem incomodar a CPU	DMA

Microcontrolador	Sou um chip único com CPU, memória e periféricos. Estou no Arduino	MICROCONTROLADOR

Dual core	Tenho 2 núcleos de processamento no mesmo chip	DUALCORE

Quad core	Tenho 4 núcleos de processamento no mesmo chip	QUADCORE

Nas casas: maiúsculas, sem acento, sem espaço.

# Regras das pistas
Não pode conter a resposta, parte dela, nem a sigla por extenso.
  Ex.: a pista de DUALCORE não pode ter "dual" nem "core"; a de DATABUS não pode
  ter "data" nem "bus"; a de MEMORIADEMASSA não pode ter "memória" nem "massa".
  
- Correta segundo o e-book (PAIXÃO, 2017) e com uma única resposta possível.
- 
- Exemplo (ULA) — Ruim: "Unidade Lógica e Aritmética." Boa: "Parte da CPU que faz
  as contas e as operações lógicas."

# Os 7 critérios do jogo (todos obrigatórios)
1. TABULEIRO: no mínimo 12 palavras da lista, cruzadas entre si. Cada palavra
   precisa cruzar com pelo menos uma outra. Todas as palavras devem formar um
   único conjunto conectado.
2. PISTAS: numeradas e separadas em duas listas, "Horizontais" e "Verticais".
   A numeração das pistas deve bater com os números nas casas do tabuleiro.
3. DIGITAÇÃO: o jogador digita as letras direto nas casas do tabuleiro (uma letra
   por casa, maiúscula, avanço automático para a próxima casa, setas e Backspace
   funcionando).
4. BOTÃO "CONFERIR": mostra quais palavras estão certas e quais estão erradas
   (por exemplo, colorindo as casas ou marcando as pistas).
5. CONTADOR DE ACERTOS: exibe, por exemplo, "8 de 12 palavras", atualizado ao
   clicar em Conferir.
6. BOTÃO "REINICIAR": limpa todas as letras e os destaques do tabuleiro e zera o
   contador.
7. TECNOLOGIA: somente HTML, CSS e JavaScript puros (sem frameworks nem
   bibliotecas), com index.html na raiz. Estrutura: index.html, style.css,
   script.js e README.md.

# Como quero que você trabalhe (nesta ordem)
Etapa 1 — Escolha as palavras e desenhe a grade (linhas x colunas) em texto,
  com as posições, a direção (H/V) e a numeração. Liste cada cruzamento
  (palavra A × palavra B na letra X) para provar o critério 1.
Etapa 2 — Escreva uma pista por palavra usada, respeitando as regras, e conte
  as palavras de cada pista.
Etapa 3 — Gere index.html, style.css e script.js completos, prontos para
  rodar abrindo o arquivo no navegador.
Etapa 4 — Gere o README.md (nome do jogo, como jogar, lista de palavras com as
  pistas, link do site publicado como placeholder).
Etapa 5 — Faça um checklist final marcando, um a um, os 7 critérios, com a
  evidência de onde cada um está cumprido.
Pare ao fim de cada etapa e espere meu "ok" antes de seguir.

# GitHub e entrega (para orientar o plano de commits)
- Repositório público arqcomp-cruzadinha; no mínimo 6 commits em 2+ dias.
- Mensagens "tipo: descrição curta" com feat, fix, style ou docs.
- Nada de dados pessoais (RA, e-mail, telefone) nos arquivos.
- Publicar em GitHub Pages (branch main, pasta / root) e enviar só o link no Moodle.

# CSS
   - Utilize uma paleta de **cores vivas e vibrantes** .
   - O layout deve ser limpo, centralizado, responsivo e com boa legibilidade (fontes modernas, sombras suaves e bom espaçamento).

# JavaScript (Lógica de Algoritmos - 1º Semestre)
   - O código deve ser **extremamente simples, direto e fácil de explicar oralmente**.
   - Evite bibliotecas externas ou frameworks complexos; use JavaScript puro.
   - Inclua comentários claros no código explicando o passo a passo da lógica para facilitar a apresentação.
