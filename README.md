# Cruzadinha de Arquitetura Computacional

Jogo de cruzadinha que roda no navegador para treinar termos de Arquitetura Computacional.
Feito somente com HTML, CSS e JavaScript puros.

**Jogue aqui:** https://SEU-USUARIO.github.io/arqcomp-cruzadinha/ *(placeholder: troque pelo link publicado)*

## Como jogar

1. Leia as pistas em **Horizontais** e **Verticais** (o número da pista está no canto da casa).
2. Clique numa casa e digite as letras. O cursor avança sozinho para a próxima casa.
3. Use as **setas** para se mover e **Backspace** para apagar. Clicar de novo na mesma casa troca a direção.
4. Clique em **Conferir**: casas verdes = palavra certa, casas vermelhas = letra errada.
5. O contador mostra quantas palavras estão certas (ex.: "8 de 16 palavras").
6. **Reiniciar** limpa tudo e zera o contador.

## Estrutura

```
index.html   página
style.css    cores e layout
script.js    lógica do jogo
README.md    este arquivo
```

## Palavras e pistas (16 palavras)

| Nº | Dir. | Palavra | Pista |
|----|------|---------|-------|
| 1 | H | DMA | Controlador que move blocos de dados entre periféricos e a RAM sem ocupar a CPU. |
| 2 | V | MICROCONTROLADOR | Sou um chip único com CPU, memória e periféricos. Estou no Arduino. |
| 3 | V | QUADCORE | Tenho 4 núcleos de processamento no mesmo chip. |
| 4 | V | RAM | Sou a memória principal: temporária, mas sem mim nada roda. Perco tudo quando a energia acaba. |
| 5 | V | DUALCORE | Tenho 2 núcleos de processamento no mesmo chip. |
| 6 | V | MEMORIADEMASSA | Tenho muito espaço e guardo seus arquivos mesmo desligado: HD, SSD. |
| 7 | H | ROM | Guardo o que nunca pode se perder, como o programa de inicialização (boot). No uso normal, a CPU só lê o que há em mim. |
| 8 | H | ULA | Parte da CPU que faz as contas (soma, subtração) e as comparações lógicas (E, OU, NÃO). |
| 9 | V | DATABUS | Eu transporto o conteúdo, nos dois sentidos: leitura e escrita. |
| 10 | V | CACHE | Sou pequena e rápida, e guardo cópias do que a CPU mais usa. |
| 11 | H | REGISTRADORES | Sou a memória minúscula e velocíssima dentro da CPU. |
| 12 | V | FLASH | Sou não volátil e apago em blocos. Guardo o programa do microcontrolador, o pendrive e o SSD. |
| 13 | V | CPU | Sou o cérebro do computador: busco, decodifico e executo as instruções. |
| 14 | H | EEPROM | Não esqueço sem energia e posso ter um único byte reescrito, sem mexer nos vizinhos. Guardo configurações no Arduino. |
| 15 | H | ADDRESSBUS | Eu digo onde está a posição de memória. Só a CPU fala comigo. |
| 16 | V | UC | Sou o maestro: dito o que cada parte da CPU deve fazer e quando. |

## Publicação

GitHub Pages: *Settings → Pages → Branch `main`, pasta `/ (root)`*.
