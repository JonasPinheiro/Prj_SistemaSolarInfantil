import { Question } from "src/model/question.model";

export const quiz: Question[] = [
  {
    id: 1,
    question: "Qual planeta é famoso por girar 'de ré' (ao contrário dos outros) e ter um dia que dura mais tempo do que o seu ano inteiro?",
    alternatives: [
      { option: "Júpiter", correct: false },
      { option: "Mercúrio", correct: false },
      { option: "Vênus", correct: true },
      { option: "Marte", correct: false },
    ],
  },
  {
    id: 2,
    question: "Qual planeta possui uma tempestade gigantesca, conhecida como a 'Grande Mancha Vermelha', que é maior do que o planeta Terra inteiro?",
    alternatives: [
      { option: "Netuno", correct: false },
      { option: "Júpiter", correct: true },
      { option: "Urano", correct: false },
      { option: "Saturno", correct: false },
    ],
  },
  {
    id: 3,
    question: "Qual planeta está localizado na 'Zona Cachinhos Dourados', uma região com a distância perfeita do Sol para a água existir em estado líquido?",
    alternatives: [
      { option: "Vênus", correct: false },
      { option: "Terra", correct: true },
      { option: "Mercúrio", correct: false },
      { option: "Marte", correct: false },
    ],
  },
  {
    id: 4,
    question: "Onde podemos encontrar o Monte Olimpo, o maior vulcão conhecido de todo o sistema solar",
    alternatives: [
      { option: "Marte", correct: true },
      { option: "Mercúrio", correct: false },
      { option: "Terra", correct: false },
      { option: "Vênus", correct: false },
    ],
  },
  {
    id: 5,
    question: "Qual planeta do sistema solar é tão pouco denso (tão leve) que, se existisse um oceano grande o suficiente para o colocar, ele flutuaria?",
    alternatives: [
      { option: "Terra", correct: false },
      { option: "Júpiter", correct: false },
      { option: "Vênus", correct: false },
      { option: "Saturno", correct: true },
    ],
  },
  
];
