// 1. Imports das Imagens Gerais
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img14 from '../assets/14.png';
import img15 from '../assets/15.png';
import img16 from '../assets/16.png';

// Imagem em Destaque Promoção Mês de Outubro (1x1)
import imgDestaque from '../assets/outubro.jpeg';

// Imagens dos Baralhos/Oráculos
import imgBaralhoExu from '../assets/baralho-exu.jpeg';
import imgBaralhoLucifer from '../assets/baralho-lucifer.jpeg';
import imgBaralhoPadilha from '../assets/baralho-padilha.jpeg';

// Depoimentos / Prints
import dep1 from '../assets/depoimentos/1.png';
import dep2 from '../assets/depoimentos/2.png';
import dep3 from '../assets/depoimentos/3.png';
import dep4 from '../assets/depoimentos/4.png';
import dep5 from '../assets/depoimentos/5.png';
import dep6 from '../assets/depoimentos/6.png';
import dep7 from '../assets/depoimentos/7.png';
import dep8 from '../assets/depoimentos/8.png';
import dep9 from '../assets/depoimentos/9.png';

// 2. Configurações Gerais do Sistema
export const CONFIG_SISTEMA = {
  NOME_SACERDOTISA: "Sacerdotisa Vênus",
  SUBTITULO: "Direcionamento espiritual com clareza, ética e verdade",
  WHATSAPP_NUMERO: "5522998763590",
  MOEDA: "R$",
  IMAGEM_DESTAQUE: imgDestaque,
  TEXTO_RODAPE: "Atendimentos com sigilo absoluto, ética e direcionamento de alta força espiritual.",
  MENSAGEM_BOAS_VINDAS: "Seja bem-vindo(a) ao portal de direcionamento espiritual e alta magia.",
  REDES_SOCIAIS: [
    {
      nome: "Instagram",
      handle: "@sacerdotisavenus77",
      link: "https://www.instagram.com/sacerdotisavenus77?stkn=dmxsNzJ3c29zbjg3",
      classe: "instagram"
    },
    {
      nome: "YouTube",
      handle: "@sacerdotisavenus",
      link: "https://youtube.com/@sacerdotisavenus?si=81CJ5HFvfncWrS6B",
      classe: "youtube"
    },
    {
      nome: "TikTok",
      handle: "@bruxadelebara",
      link: "https://www.tiktok.com/@bruxadelebara?_r=1&_t=ZS-9A7loHjwjUf",
      classe: "tiktok"
    },
    {
      nome: "Facebook",
      handle: "Sacerdotisa Vênus",
      link: "https://www.facebook.com/share/1BjjXvKBNi/",
      classe: "facebook"
    }
  ]
};

export const CATEGORIAS_SERVICOS = [
  "Consultas & Oráculos",
  "Amooor & União",
  "Abertura de Caminhos",
  "Limpeza & Proteção",
  "Alta Magia Espiritual"
];

export const SERVICOS = [
  {
    id: "oraculo-exu-pombagira",
    nome: "Oráculo de Exu & Pomba Gira",
    categoria: "Consultas & Oráculos",
    descricao: "Orientação direta na força da Esquerda para cortar ilusões, revelar verdades e indicar caminhos.",
    imagem: imgBaralhoExu,
    temVariantes: true,
    destaque: true,
    tag: "Alta Força",
    variantes: [
      { idVar: "e1", label: "01 Pergunta Objetiva", preco: "47,00" },
      { idVar: "e2", label: "02 Perguntas Objetivas", preco: "87,00" },
      { idVar: "e3", label: "03 Perguntas Objetivas", preco: "137,00" },
      { idVar: "e4", label: "05 Perguntas Objetivas", preco: "177,00" },
      { idVar: "e5", label: "07 Perguntas Objetivas", preco: "177,00" }
    ]
  },
  {
    id: "oraculo-maria-padilha",
    nome: "Consultas com Maria Padilha",
    categoria: "Consultas & Oráculos",
    descricao: "Leitura profunda, aconselhamento sentimental e revelações sob a regência da Rainha Maria Padilha.",
    imagem: imgBaralhoPadilha,
    temVariantes: true,
    destaque: true,
    tag: "Recomendado",
    variantes: [
      { idVar: "p1", label: "Leitura Completa Gravada", preco: "777,00" },
      { idVar: "p2", label: "Consulta Presencial Reservada", preco: "1.777,00" }
    ]
  },
  {
    id: "oraculo-exu-lucifer",
    nome: "Jogo Completo Exu Lúcifer",
    categoria: "Consultas & Oráculos",
    descricao: "Consulta de alta força transformadora e direcionamento supremo com a regência e energia de Exu Lúcifer.",
    imagem: imgBaralhoLucifer,
    temVariantes: false,
    preco: "666,00"
  },
  {
    id: 1,
    nome: "Broxamento Masculino",
    categoria: "Alta Magia Espiritual",
    descricao: "Trabalho de amarração de desejo: impede que a pessoa sinta atração física por terceiros, focando-a no(a) solicitante.",
    preco: "999,00",
    imagem: img1,
    temVariantes: false
  },
  {
    id: 2,
    nome: "Broxamento Feminino",
    categoria: "Alta Magia Espiritual",
    descricao: "Impede o interesse e a atração da pessoa por outras pessoas, direcionando a paixão para o(a) parceiro(a).",
    preco: "999,00",
    imagem: img2,
    temVariantes: false
  },
  {
    id: 3,
    nome: "Sigidi",
    categoria: "Alta Magia Espiritual",
    descricao: "Ritual ancestral de alta intensidade para submissão, domínio amoroso, paixão incontrolável e atração extrema.",
    preco: "3.999,00",
    imagem: img3,
    destaque: true,
    tag: "Alta Intensidade",
    temVariantes: false
  },
  {
    id: 4,
    nome: "Afastamento de Rival",
    categoria: "Alta Magia Espiritual",
    descricao: "Corte imediato de energias e afastamento de terceiros que atrapalham o seu relacionamento ou sucesso profissional.",
    preco: "1.199,00",
    imagem: img4,
    temVariantes: false
  },
  {
    id: 6,
    nome: "Amarração Amorosa Com Coração De Boi",
    categoria: "Alta Magia Espiritual",
    descricao: "Ritual poderoso focado em criar saudades intensas, união afetiva, submissão e o retorno rápido da pessoa amada.",
    preco: "1.199,00",
    imagem: img6,
    temVariantes: false
  },
  {
    id: 7,
    nome: "Tormenta Da Mente",
    categoria: "Alta Magia Espiritual",
    descricao: "Atua nos pensamentos da pessoa amada, fazendo com que ela pense, lembre e busque você constantemente.",
    preco: "1.999,00",
    imagem: img7,
    temVariantes: false
  },
  {
    id: 8,
    nome: "Sigidi De Prosperidade",
    categoria: "Abertura de Caminhos",
    descricao: "Abertura de caminhos financeiros, desbloqueio de prosperidade, atração de clientes e expansão de negócios.",
    preco: "2.999,00",
    imagem: img8,
    temVariantes: false
  },
  {
    id: 9,
    nome: "Obsessão Amorosa",
    categoria: "Alta Magia Espiritual",
    descricao: "Magnetismo de atração profunda: desperta o desejo ininterrupto, paixão ardente e busca constante.",
    preco: "4.500,00",
    imagem: img9,
    temVariantes: false
  },
  {
    id: 10,
    nome: "Chora Nos Meus Pés",
    categoria: "Alta Magia Espiritual",
    descricao: "Indução de arrependimento, carinho, submissão afetiva e necessidade da sua presença na vida da pessoa.",
    preco: "1.000,00",
    imagem: img10,
    temVariantes: false
  },
  {
    id: 11,
    nome: "Ritual Da Saúde e Purificação",
    categoria: "Limpeza & Proteção",
    descricao: "Limpeza energética, alinhamento dos chakras, remoção de cargas negativas, ansiedade e restauração da vitalidade.",
    preco: "666,00",
    imagem: img11,
    temVariantes: false
  },
  {
    id: 12,
    nome: "União de Laços",
    categoria: "Amooor & União",
    descricao: "Harmonização de casais, fortalecimento da cumplicidade, paciência, diálogo e carinho no relacionamento.",
    preco: "999,00",
    imagem: img12,
    temVariantes: false
  },
  {
    id: 14,
    nome: "Limpeza e Quebra de Demanda",
    categoria: "Limpeza & Proteção",
    descricao: "Remoção profunda de cargas negativas, inveja, feitiços e quebra de demandas para purificar seus caminhos.",
    preco: "777,00",
    imagem: img14,
    temVariantes: false
  },
  {
    id: 15,
    nome: "Adoçamento Amoroso",
    categoria: "Amooor & União",
    descricao: "Atrito e brigas zeradas: adoça os sentimentos, traz carinho, paciência e aproximação afetiva.",
    preco: "377,00",
    imagem: img15,
    temVariantes: false
  },
  {
    id: 16,
    nome: "Ritual de Submissão",
    categoria: "Alta Magia Espiritual",
    descricao: "Trabalho de alta intensidade focado em domínio, respeito, flexibilidade e submissão das vontades da pessoa.",
    preco: "2.199,00",
    imagem: img16,
    temVariantes: false
  }
];

export const PERGUNTAS_FREQUENTES = [
  {
    pergunta: "Como funcionam os atendimentos por vídeo ou áudio?",
    resposta: "Após a confirmação da solicitação pelo WhatsApp, agendaremos o melhor horário para realizar a sua chamada ou o envio do material gravado com a leitura completa das suas cartas."
  },
  {
    pergunta: "O sigilo das minhas informações é garantido?",
    resposta: "Sim, 100% de sigilo absoluto. Seus dados, fotos e nomes jamais são compartilhados ou divulgados sob nenhuma hipótese."
  },
  {
    pergunta: "Qual o prazo de envio para as tiragens gravadas?",
    resposta: "O prazo padrão de envio é de até 24h a 48h úteis após a confirmação das informações necessárias para a tiragem."
  },
  {
    pergunta: "Como sei qual é o ritual mais indicado para o meu caso?",
    resposta: "Recomendamos sempre iniciar por uma Consulta ou Tiragem por Perguntas. Assim, as entidades revelam exatamente o diagnóstico do seu momento e o trabalho mais adequado."
  }
];

export const DEPOIMENTOS = [
  { id: 1, imagem: dep1, alt: "Depoimento e Feedback 1" },
  { id: 2, imagem: dep2, alt: "Depoimento e Feedback 2" },
  { id: 3, imagem: dep3, alt: "Depoimento e Feedback 3" },
  { id: 4, imagem: dep4, alt: "Depoimento e Feedback 4" },
  { id: 5, imagem: dep5, alt: "Depoimento e Feedback 5" },
  { id: 6, imagem: dep6, alt: "Depoimento e Feedback 6" },
  { id: 7, imagem: dep7, alt: "Depoimento e Feedback 7" },
  { id: 8, imagem: dep8, alt: "Depoimento e Feedback 8" },
  { id: 9, imagem: dep9, alt: "Depoimento e Feedback 9" }
];
