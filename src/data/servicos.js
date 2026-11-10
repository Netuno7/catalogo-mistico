// 1. Imports das Imagens de Serviços (0 a 33 e os Oráculos)
import img0 from '../assets/0.jpeg';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
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
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.jpeg';

// Imagem em Destaque Promoção Mês de Outubro
import imgDestaque from '../assets/destaque-do-mes.png';

// Imagens dos 3 Oráculos (Iniciais)
import imgBaralhoExu from '../assets/baralho-exu.jpeg';
import imgBaralhoLucifer from '../assets/baralho-lucifer.jpeg';
import imgBaralhoPadilha from '../assets/baralho-padilha.jpeg';

// Cursos
import imgCurso1 from '../assets/curso1.jpeg';
import imgCurso2 from '../assets/curso2.jpeg';
import imgCurso3 from '../assets/curso3.jpeg';

// Depoimentos
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
import dp20 from '../assets/depoimentos/dp20.png';

export const CONFIG_SISTEMA = {
  NOME_SACERDOTISA: "Sacerdotisa Vênus",
  SUBTITULO: "Direcionamento espiritual com clareza, ética e verdade",
  WHATSAPP_NUMERO: "5522998763590",
  IMAGEM_DESTAQUE: imgDestaque,
  TEXTO_RODAPE: "Atendimentos com sigilo absoluto, ética e direcionamento de alta força espiritual.",
  REDES_SOCIAIS: [
    { nome: "Instagram", handle: "@sacerdotisavenus77", link: "https://www.instagram.com/sacerdotisavenus77?stkn=dmxsNzJ3c29zbjg3", classe: "instagram" },
    { nome: "YouTube", handle: "@sacerdotisavenus", link: "https://youtube.com/@sacerdotisavenus?si=81CJ5HFvfncWrS6B", classe: "youtube" },
    { nome: "TikTok", handle: "@bruxadelebara", link: "https://www.tiktok.com/@bruxadelebara?_r=1&_t=ZS-9A7loHjwjUf", classe: "tiktok" },
    { nome: "Facebook", handle: "Sacerdotisa Vênus", link: "https://www.facebook.com/share/1BjjXvKBNi/", classe: "facebook" }
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

// Lista de serviços com os nomes exatos extraídos das imagens da sequência
export const SERVICOS = [
  // As 3 primeiras (Oráculos)
  { id: "orac-1", nome: "Oráculo de Exu & Pomba Gira", categoria: "Consultas & Oráculos", imagem: imgBaralhoExu },
  { id: "orac-2", nome: "Consultas com Maria Padilha", categoria: "Consultas & Oráculos", imagem: imgBaralhoPadilha },
  { id: "orac-3", nome: "Jogo Completo Exu Lúcifer", categoria: "Consultas & Oráculos", imagem: imgBaralhoLucifer },

  // Sequência dos Anúncios baseada nas imagens enviados[cite: 2]
  { id: 0, nome: "Obsessão Fatal na Força da Cabra", categoria: "Trabalhos Amorosos", imagem: img0 },
  { id: 1, nome: "Ritual de Beleza e Atração", categoria: "Trabalhos Amorosos", imagem: img1 },
  { id: 2, nome: "Limpeza com Banhos", categoria: "Limpeza & Proteção", imagem: img2 },
  { id: 3, nome: "Restauração dos Laços Afetivos", categoria: "Trabalhos Amorosos", imagem: img3 },
  { id: 4, nome: "Casamento Definitivo com Fogo", categoria: "Trabalhos Amorosos", imagem: img4 },
  { id: 5, nome: "Afastamento de Rival", categoria: "Trabalhos Amorosos", imagem: img5 },
  { id: 6, nome: "Trabalho para Saúde com Banho", categoria: "Limpeza & Proteção", imagem: img6 },
  { id: 7, nome: "Casamento Definitivo com Cabra", categoria: "Trabalhos Amorosos", imagem: img7 },
  { id: 8, nome: "Chora nos Meus Pés", categoria: "Trabalhos Amorosos", imagem: img8 },
  { id: 9, nome: "Submissão com Pó de Pensamento", categoria: "Trabalhos Amorosos", imagem: img9 },
  { id: 10, nome: "Amarração Amorosa", categoria: "Trabalhos Amorosos", imagem: img10 },
  { id: 11, nome: "Tormento na Mente (Definitivo)", categoria: "Alta Magia Espiritual", imagem: img11 },
  { id: 12, nome: "Tormento na Mente (6 Meses)", categoria: "Alta Magia Espiritual", imagem: img12 },
  { id: 13, nome: "Promoção 3 Rituais em 1", categoria: "Alta Magia Espiritual", imagem: img13 },
  { id: 14, nome: "Amarração com Coração de Boi", categoria: "Trabalhos Amorosos", imagem: img14 },
  { id: 16, nome: "Submissão com Alta Magia", categoria: "Alta Magia Espiritual", imagem: img16 },
  { id: 17, nome: "Amarração Alta Magia", categoria: "Alta Magia Espiritual", imagem: img17 },
  { id: 18, nome: "Obsessão Fatal", categoria: "Trabalhos Amorosos", imagem: img18 },
  { id: 19, nome: "Pacto Padilha", categoria: "Alta Magia Espiritual", imagem: img19 },
  { id: 20, nome: "Pacto Alta Magia", categoria: "Alta Magia Espiritual", imagem: img20 },
  { id: 21, nome: "Obsessão na Redes", categoria: "Trabalhos Amorosos", imagem: img21 },
  { id: 22, nome: "Sigilo com Cabra", categoria: "Alta Magia Espiritual", imagem: img22 },
  { id: 23, nome: "Obsessão com Cabra", categoria: "Trabalhos Amorosos", imagem: img23 },
  { id: 24, nome: "Iniciação na Alta Magia", categoria: "Alta Magia Espiritual", imagem: img24 },
  { id: 25, nome: "Mesa de Obsessão Fatal", categoria: "Alta Magia Espiritual", imagem: img25 },
  { id: 26, nome: "Iniciação Alta Magia", categoria: "Alta Magia Espiritual", imagem: img26 },
  { id: 27, nome: "Caldeirão dos Desejos - Ísis", categoria: "Alta Magia Espiritual", imagem: img27 },
  { id: 28, nome: "Iniciação na Quimbanda", categoria: "Alta Magia Espiritual", imagem: img28 },
  { id: 29, nome: "Abertura de Caminhos / Cura", categoria: "Abertura de Caminhos", imagem: img29 },
  { id: 31, nome: "Mesa de Agradecimento - Pomba Gira", categoria: "Alta Magia Espiritual", imagem: img31 },
  { id: 32, nome: "Ritual de Cura e Vínculos", categoria: "Limpeza & Proteção", imagem: img32 },
  { id: 33, nome: "Aterramento de Amantes", categoria: "Trabalhos Amorosos", imagem: img33 }
];

export const CURSOS = [
  { id: "curso-1", nome: "Iniciação à Magia & Oráculos", imagem: imgCurso1 },
  { id: "curso-2", nome: "Desenvolvimento de Médium & Firmezas", imagem: imgCurso2 },
  { id: "curso-3", nome: "Consagração & Alta Magia Espiritual", imagem: imgCurso3 }
];

export const PERGUNTAS_FREQUENTES = [
  { pergunta: "Como funcionam os atendimentos por vídeo ou áudio?", resposta: "Após a confirmação da solicitação pelo WhatsApp, agendaremos o melhor horário..." },
  { pergunta: "O sigilo das minhas informações é garantido?", resposta: "Sim, 100% de sigilo absoluto. Seus dados e fotos jamais são compartilhados." },
  { pergunta: "Qual o prazo de envio para as tiragens gravadas?", resposta: "O prazo padrão de envio é de até 24h a 48h úteis." },
  { pergunta: "Como sei qual é o ritual mais indicado?", resposta: "Recomendamos iniciar por uma Consulta ou Tiragem por Perguntas." }
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
  { id: 19, imagem: dp19, alt: "Depoimento 19" },
  { id: 20, imagem: dp20, alt: "Depoimento 20" }
];