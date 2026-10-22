// 1. Imports das Imagens de Serviços (1 ao 32)
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
import img17 from '../assets/17.png';
import img18 from '../assets/18.png';
import img19 from '../assets/19.png';
import img20 from '../assets/20.png';
import img21 from '../assets/21.png';
import img22 from '../assets/22.png';
import img23 from '../assets/23.png';
import img24 from '../assets/24.png';
import img25 from '../assets/25.png';
import img26 from '../assets/26.png';
import img27 from '../assets/27.png';
import img28 from '../assets/28.png';
import img29 from '../assets/29.png';
import img30 from '../assets/30.png';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';

// Imagem em Destaque Promoção Mês de Outubro (1x1)
import imgDestaque from '../assets/outubro.jpeg';

// Imagens dos Baralhos/Oráculos
import imgBaralhoExu from '../assets/baralho-exu.jpeg';
import imgBaralhoLucifer from '../assets/baralho-lucifer.jpeg';
import imgBaralhoPadilha from '../assets/baralho-padilha.jpeg';

// Imagens dos Cursos (1x1)
import imgCurso1 from '../assets/curso1.jpeg';
import imgCurso2 from '../assets/curso2.jpeg';
import imgCurso3 from '../assets/curso3.jpeg';

// Depoimentos / Prints (dp1.png até dp19.png)
import dp1 from '../assets/depoimentos/dp1.png';
import dp2 from '../assets/depoimentos/dp2.png';
import dp3 from '../assets/depoimentos/dp3.png';
import dp4 from '../assets/depoimentos/dp4.png';
import dp5 from '../assets/depoimentos/dp5.png';
import dp6 from '../assets/depoimentos/dp6.png';
import dp7 from '../assets/depoimentos/dp7.png';
import dp8 from '../assets/depoimentos/dp8.png';
import dp9 from '../assets/depoimentos/dp9.png';
import dp10 from '../assets/depoimentos/dp10.png';
import dp11 from '../assets/depoimentos/dp11.png';
import dp12 from '../assets/depoimentos/dp12.png';
import dp13 from '../assets/depoimentos/dp13.png';
import dp14 from '../assets/depoimentos/dp14.png';
import dp15 from '../assets/depoimentos/dp15.png';
import dp16 from '../assets/depoimentos/dp16.png';
import dp17 from '../assets/depoimentos/dp17.png';
import dp18 from '../assets/depoimentos/dp18.png';
import dp19 from '../assets/depoimentos/dp19.png';

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
  "Todos",
  "Consultas & Oráculos",
  "Trabalhos Amorosos",
  "Abertura de Caminhos",
  "Limpeza & Proteção",
  "Alta Magia Espiritual"
];

export const SERVICOS = [
  {
    id: "oraculo-exu-pombagira",
    nome: "Oráculo de Exu & Pomba Gira",
    categoria: "Consultas & Oráculos",
    imagem: imgBaralhoExu,
    temVariantes: true,
    destaque: true,
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
    imagem: imgBaralhoPadilha,
    temVariantes: true,
    destaque: true,
    variantes: [
      { idVar: "p1", label: "Leitura Completa Gravada", preco: "777,00" },
      { idVar: "p2", label: "Consulta Presencial Reservada", preco: "1.777,00" }
    ]
  },
  {
    id: "oraculo-exu-lucifer",
    nome: "Jogo Completo Exu Lúcifer",
    categoria: "Consultas & Oráculos",
    imagem: imgBaralhoLucifer,
    temVariantes: false,
    preco: "666,00"
  },
  // Serviços do 1 ao 32
  { id: 1, nome: "Serviço 1", categoria: "Trabalhos Amorosos", preco: "999,00", imagem: img1, temVariantes: false },
  { id: 2, nome: "Serviço 2", categoria: "Trabalhos Amorosos", preco: "999,00", imagem: img2, temVariantes: false },
  { id: 3, nome: "Serviço 3", categoria: "Trabalhos Amorosos", preco: "3.999,00", imagem: img3, temVariantes: false },
  { id: 4, nome: "Serviço 4", categoria: "Trabalhos Amorosos", preco: "1.199,00", imagem: img4, temVariantes: false },
  { id: 6, nome: "Serviço 6", categoria: "Trabalhos Amorosos", preco: "1.199,00", imagem: img6, temVariantes: false },
  { id: 7, nome: "Serviço 7", categoria: "Trabalhos Amorosos", preco: "1.999,00", imagem: img7, temVariantes: false },
  { id: 8, nome: "Serviço 8", categoria: "Abertura de Caminhos", preco: "2.999,00", imagem: img8, temVariantes: false },
  { id: 9, nome: "Serviço 9", categoria: "Trabalhos Amorosos", preco: "4.500,00", imagem: img9, temVariantes: false },
  { id: 10, nome: "Serviço 10", categoria: "Alta Magia Espiritual", preco: "1.000,00", imagem: img10, temVariantes: false },
  { id: 11, nome: "Serviço 11", categoria: "Limpeza & Proteção", preco: "666,00", imagem: img11, temVariantes: false },
  { id: 12, nome: "Serviço 12", categoria: "Trabalhos Amorosos", preco: "999,00", imagem: img12, temVariantes: false },
  { id: 14, nome: "Serviço 14", categoria: "Limpeza & Proteção", preco: "777,00", imagem: img14, temVariantes: false },
  { id: 15, nome: "Serviço 15", categoria: "Trabalhos Amorosos", preco: "377,00", imagem: img15, temVariantes: false },
  { id: 16, nome: "Serviço 16", categoria: "Trabalhos Amorosos", preco: "2.199,00", imagem: img16, temVariantes: false },
  { id: 17, nome: "Serviço 17", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img17, temVariantes: false },
  { id: 18, nome: "Serviço 18", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img18, temVariantes: false },
  { id: 19, nome: "Serviço 19", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img19, temVariantes: false },
  { id: 20, nome: "Serviço 20", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img20, temVariantes: false },
  { id: 21, nome: "Serviço 21", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img21, temVariantes: false },
  { id: 22, nome: "Serviço 22", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img22, temVariantes: false },
  { id: 23, nome: "Serviço 23", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img23, temVariantes: false },
  { id: 24, nome: "Serviço 24", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img24, temVariantes: false },
  { id: 25, nome: "Serviço 25", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img25, temVariantes: false },
  { id: 26, nome: "Serviço 26", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img26, temVariantes: false },
  { id: 27, nome: "Serviço 27", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img27, temVariantes: false },
  { id: 28, nome: "Serviço 28", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img28, temVariantes: false },
  { id: 29, nome: "Serviço 29", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img29, temVariantes: false },
  { id: 30, nome: "Serviço 30", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img30, temVariantes: false },
  { id: 31, nome: "Serviço 31", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img31, temVariantes: false },
  { id: 32, nome: "Serviço 32", categoria: "Alta Magia Espiritual", preco: "199,00", imagem: img32, temVariantes: false }
];

export const CURSOS = [
  {
    id: "curso-1",
    nome: "Iniciação à Magia & Oráculos",
    imagem: imgCurso1,
    preco: "199,00"
  },
  {
    id: "curso-2",
    nome: "Desenvolvimento de Médium & Firmezas",
    imagem: imgCurso2,
    preco: "497,00"
  },
  {
    id: "curso-3",
    nome: "Consagração & Alta Magia Espiritual",
    imagem: imgCurso3,
    preco: "797,00"
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
  { id: 1, imagem: dp1, alt: "Depoimento 1" },
  { id: 2, imagem: dp2, alt: "Depoimento 2" },
  { id: 3, imagem: dp3, alt: "Depoimento 3" },
  { id: 4, imagem: dp4, alt: "Depoimento 4" },
  { id: 5, imagem: dp5, alt: "Depoimento 5" },
  { id: 6, imagem: dp6, alt: "Depoimento 6" },
  { id: 7, imagem: dp7, alt: "Depoimento 7" },
  { id: 8, imagem: dp8, alt: "Depoimento 8" },
  { id: 9, imagem: dp9, alt: "Depoimento 9" },
  { id: 10, imagem: dp10, alt: "Depoimento 10" },
  { id: 11, imagem: dp11, alt: "Depoimento 11" },
  { id: 12, imagem: dp12, alt: "Depoimento 12" },
  { id: 13, imagem: dp13, alt: "Depoimento 13" },
  { id: 14, imagem: dp14, alt: "Depoimento 14" },
  { id: 15, imagem: dp15, alt: "Depoimento 15" },
  { id: 16, imagem: dp16, alt: "Depoimento 16" },
  { id: 17, imagem: dp17, alt: "Depoimento 17" },
  { id: 18, imagem: dp18, alt: "Depoimento 18" },
  { id: 19, imagem: dp19, alt: "Depoimento 19" }
];