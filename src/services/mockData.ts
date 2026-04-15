import type { Product } from '../types';

export const products: Product[] = [
  // --- CAMISETAS ---
  {
   id: '1',
   name: 'Camiseta Oversized "Concreto Cru"',
   description: 'Camiseta oversized com visual minimalista e urbano. Caimento solto e confortável, ideal para compor looks modernos com estética street clean.',
   price: 119.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1712876610619-f82b786aca66?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['oversized', 'minimalista', 'streetwear', 'urbano', 'casual', 'básico', 'moderno', 'neutro']
  },
  {
   id: '6',
   name: 'Camiseta "Essencial Areia"',
   description: 'Camiseta em algodão com toque macio e caimento natural. Design minimalista em tom neutro, perfeita para composições elegantes e urbanas.',
   price: 109.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1773864930587-3df0b03850d0?q=80&w=687&auto=format&fit=crop',
   tags: ['minimalista', 'casual', 'neutro', 'clean', 'urbano', 'leve', 'versátil', 'verão']
  },
  {
   id: '9',
   name: 'Regata Canelada "Brisa"',
   description: 'Regata canelada com caimento ajustado e toque leve. Ideal para dias quentes, trazendo conforto e um visual clean e despojado.',
   price: 59.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1627680925143-57883fb665b5?q=80&w=764&auto=format&fit=crop',
   tags: ['verão', 'calor', 'leve', 'casual', 'clean', 'praia', 'básico', 'conforto']
  },
  {
   id: '10',
   name: 'Camiseta Manga Longa "Linha Urbana"',
   description: 'Manga longa com caimento leve e design minimalista. Ideal para compor looks modernos com um toque urbano e sofisticado.',
   price: 129.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1766465524306-b6c9c27d1b69?q=80&w=736&auto=format&fit=crop',
   tags: ['minimalista', 'casual', 'urbano', 'clean', 'meia estação', 'moderno', 'leve', 'versátil']
  },
  {
   id: '11',
   name: 'Camisa "Brisa Noturna"',
   description: 'Camisa de botão com tecido leve e caimento fluido. Visual clean e sofisticado, ideal para compor looks elegantes em dias quentes ou ocasiões noturnas.',
   price: 149.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1709940936001-49ac064254fc?q=80&w=627&auto=format&fit=crop',
   tags: ['elegante', 'casual', 'leve', 'verão', 'noturno', 'minimalista', 'urbano', 'sofisticado']
  },
  {
   id: '12',
   name: 'Camiseta Heavyweight "Estrutura"',
   description: 'Camiseta em algodão de alta gramatura com caimento estruturado e visual clean. Ideal para quem busca um básico premium com presença e durabilidade.',
   price: 139.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1607330447952-60f90697570a?q=80&w=687&auto=format&fit=crop',
   tags: ['minimalista', 'premium', 'heavyweight', 'estruturado', 'básico', 'urbano', 'durável', 'clean']
  },
  {
   id: '13',
   name: 'Camiseta Retro "Brasil 94"',
   description: 'Camiseta de futebol clássica em verde vibrante com detalhes em amarelo. Inspirada no estilo Bloco Core e na estética vintage esportiva, traz o número 10 e gola polo contrastante.',
   price: 179.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['futebol', 'vintage', 'esporte', 'bloco core', 'brasil', 'verde', 'amarelo', 'número 10', 'brasilcore']
  },
  {
   id: '14',
   name: 'Cropped "Noites Paulistas"',
   description: 'Modelagem minimalista em branco puro com acabamento a fio. Uma peça essencial e versátil que transita do dia para a noite com facilidade e conforto.',
   price: 99.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1768935706759-f2be765b3aec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['cropped', 'branco', 'minimalista', 'clean', 'verão', 'essencial', 'moderno', 'dia e noite']
  },

  // --- CALÇAS & BERMUDAS ---
  {
   id: '2',
   name: 'Calça "Fluxo Urbano" Relaxed',
   description: 'Calça de caimento solto e confortável, ideal para o dia a dia. Visual clean e versátil que combina com diferentes estilos urbanos.',
   price: 179.90,
   category: 'pants',
   imageUrl: 'https://images.unsplash.com/photo-1627773699655-5c84a403e611?q=80&w=687&auto=format&fit=crop',
   tags: ['casual', 'streetwear', 'conforto', 'dia a dia', 'urbano', 'leve', 'versátil', 'relaxed']
  },
  {
   id: '8',
   name: 'Calça "Fluxo Urbano"',
   description: 'Calça de caimento confortável com modelagem moderna e versátil. Ideal para compor looks urbanos no dia a dia com estilo e liberdade de movimento.',
   price: 189.90,
   category: 'pants',
   imageUrl: 'https://images.unsplash.com/photo-1715624133436-d3d449d126ea?q=80&w=880&auto=format&fit=crop',
   tags: ['calça', 'casual', 'urbano', 'conforto', 'dia a dia', 'versátil', 'moderno', 'leve']
  },
  {
   id: '15',
   name: 'Regata "Essencial"',
   description: 'Regata básica com caimento leve e confortável. Ideal para os dias quentes e para compor looks minimalistas no dia a dia.',
   price: 59.90,
   category: 't-shirt',
   imageUrl: 'https://plus.unsplash.com/premium_photo-1714839367938-066e8fba6a38?q=80&w=687&auto=format&fit=crop',
   tags: ['regata', 'básico', 'verão', 'calor', 'leve', 'minimalista', 'dia a dia', 'conforto']
  },
  {
   id: '16',
   name: 'Camiseta "Brasil Retrô"',
   description: 'Camiseta inspirada nos uniformes clássicos do futebol brasileiro. Modelagem confortável e visual nostálgico que mistura esporte e estilo urbano.',
   price: 129.90,
   category: 't-shirt',
   imageUrl: 'https://images.unsplash.com/photo-1772450235614-60b59776bd46?q=80&w=687&auto=format&fit=crop',
   tags: ['brasil', 'futebol', 'retrô', 'camiseta', 'esporte', 'streetwear', 'casual', 'verão']
  },
  {
   id: '17',
   name: 'Calça Streetwear "Essential"',
   description: 'Calça com modelagem ampla e caimento solto. Tecido leve, ideal para composições urbanas e looks do dia a dia.',
   price: 189.90,
   category: 'pants',
   imageUrl: 'https://images.unsplash.com/photo-1689044611227-3267fabaf76a?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['streetwear', 'urbano', 'casual', 'oversized', 'dia a dia', 'style']
  },
  {
   id: '18',
   name: 'Calça "Daily"',
   description: 'Calça de caimento reto com visual minimalista. Tecido leve e confortável, ideal para composições casuais e urbanas no dia a dia.',
   price: 169.90,
   category: 'pants',
   imageUrl: 'https://images.unsplash.com/photo-1661954816771-72fecd3b4013?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['calça', 'casual', 'minimalista', 'urbano', 'leve', 'dia a dia']
  },
  {
    id: '19',
    name: 'Calça de Alfaiataria Desconstruída',
    description: 'O corte social encontrou o streetwear. Cintura elástica, pregas frontais e tecido fluido.',
    price: 289.90,
    category: 'pants',
    imageUrl: 'https://images.unsplash.com/photo-1594938298596-03bf315f4e1f?w=500&q=80',
    tags: ['elegante', 'social', 'festa', 'trabalho', 'moderno', 'alfaiataria']
  },
  {
    id: '20',
    name: 'Conjunto Track "Velocidade"',
    description: 'Conjunto esportivo completo em nylon com listras laterais. Inclui calça com fechamento de zíper na barra e jaqueta combinando.',
    price: 199.90,
    category: 'pants',
    imageUrl: 'https://images.unsplash.com/photo-1571941153021-ec34171444a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['conjunto', 'esporte', 'conforto', 'nylon', 'corrida', 'dia a dia', 'jaqueta']
  },

  // --- JAQUETAS & MOLETOMS ---
  {
   id: '3',
   name: 'Jaqueta Brasil Retrô Street',
   description: 'Jaqueta verde inspirada no futebol brasileiro, com estilo retrô e urbano. Perfeita para compor looks casuais com identidade e atitude.',
   price: 179.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1768983953702-ec1dea02f7a4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['brasil', 'futebol', 'streetwear', 'retrô', 'casual', 'urbano', 'verde', 'esportivo']
  },
  {
   id: '5',
   name: 'Moletom "Brisa Suave"',
   description: 'Moletom com toque macio e caimento confortável, ideal para dias mais frescos. Visual clean e aconchegante para compor looks casuais.',
   price: 199.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1607330447952-60f90697570a?q=80&w=687&auto=format&fit=crop',
   tags: ['conforto', 'casual', 'leve', 'minimalista', 'frio', 'aconchegante', 'dia a dia', 'clean']
  },
  {
   id: '21',
   name: 'Jaqueta "Trânsito Urbano"',
   description: 'Jaqueta leve com design moderno e versátil, ideal para dias de temperatura amena. Perfeita para compor looks urbanos com conforto e estilo.',
   price: 229.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1601151992772-e9c30370f045?q=80&w=687&auto=format&fit=crop',
   tags: ['jaqueta', 'casual', 'urbano', 'meia estação', 'leve', 'estilo', 'dia a dia', 'versátil']
  },
  {
   id: '22',
   name: 'Jaqueta Jeans "Anos 80"',
   description: 'O clássico que nunca morre. Lavagem clara estonada com acabamento premium, botões metálicos e corte levemente oversized para um visual autêntico e urbano.',
   price: 329.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1510853851847-5c02796e8c8a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['jeans', 'vintage', 'clássico', 'outono', 'meia estação', 'casual', 'urbano', 'lavagem clara']
  },
  {
   id: '23',
   name: 'Jaqueta "Concreto"',
   description: 'Jaqueta com design urbano e estrutura moderna, ideal para compor looks com personalidade. Perfeita para sobreposições em dias mais frescos.',
   price: 199.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1770283556451-83bdc2018cc2?q=80&w=735&auto=format&fit=crop',
   tags: ['jaqueta', 'urbano', 'street', 'estilo', 'sobreposição', 'moderno', 'casual', 'meia estação']
  },
  {
   id: '24',
   name: 'Jaqueta Jeans "Clássico Urbano"',
   description: 'Jaqueta jeans de corte tradicional com visual atemporal. Ideal para compor looks urbanos versáteis em qualquer estação.',
   price: 219.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1601183903833-bde28cdb6e57?q=80&w=1170&auto=format&fit=crop',
   tags: ['jaqueta', 'jeans', 'clássico', 'urbano', 'casual', 'versátil', 'meia estação', 'atemporal']
  },
  {
   id: '25',
   name: 'Cardigan "Vovô Moderno"',
   description: 'Tricô encorpado em tom terroso com botões grandes e modelagem solta. Uma peça de sobreposição versátil que une o clássico ao streetwear contemporâneo.',
   price: 249.90,
   category: 'jacket',
   imageUrl: 'https://images.unsplash.com/photo-1721664665470-04ee6f2e79c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   tags: ['frio', 'conforto', 'tricô', 'elegante', 'inverno', 'tendência', 'marrom', 'sobreposição']
  },

  // --- ACESSÓRIOS ---
  {
   id: '4',
   name: 'Crochê "Brisa Urbana"',
   description: 'Touca estilo bucket em crochê com textura artesanal e caimento leve. Ideal para compor looks street com um toque autêntico e despojado.',
   price: 69.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1761663151515-cb7934b61f6a?q=80&w=1026&auto=format&fit=crop',
   tags: ['crochê', 'tricô', 'bucket', 'touca', 'artesanal', 'streetwear', 'casual', 'urbano']
  },
  {
   id: '7',
   name: 'Quadro Decorativo "Conexões Urbanas"',
   description: 'Quadro decorativo com estética moderna e urbana. Ideal para compor ambientes com personalidade, trazendo arte e estilo para o dia a dia.',
   price: 89.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=764&auto=format&fit=crop',
   tags: ['decoração', 'quadro', 'arte', 'urbano', 'moderno', 'lifestyle', 'ambiente', 'design']
  },
  {
   id: '26',
   name: 'Bolsa "Essencial Urbana"',
   description: 'Bolsa prática e versátil para o dia a dia. Design clean com espaço ideal para carregar itens essenciais com estilo e funcionalidade.',
   price: 99.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1570993868197-c16e5e347fbe?q=80&w=687&auto=format&fit=crop',
   tags: ['bolsa', 'acessório', 'casual', 'urbano', 'dia a dia', 'funcional', 'versátil', 'clean']
  },
  {
   id: '27',
   name: 'Ecobag "Raiz"',
   description: 'Ecobag em tecido leve e resistente, ideal para o dia a dia. Prática, versátil e com proposta sustentável para quem busca estilo com consciência.',
   price: 49.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1570833357894-7e80e2ef99c1?q=80&w=735&auto=format&fit=crop',
   tags: ['ecobag', 'bolsa', 'sustentável', 'casual', 'dia a dia', 'leve', 'urbano', 'versátil']
  },
  {
   id: '28',
   name: 'Bolsa "Noite Elegante"',
   description: 'Bolsa com design moderno e acabamento sofisticado, ideal para compor looks elegantes em ocasiões especiais ou no dia a dia com estilo.',
   price: 139.90,
   category: 'accessories',
   imageUrl: 'https://plus.unsplash.com/premium_photo-1673384389943-d891095cd331?q=80&w=688&auto=format&fit=crop',
   tags: ['bolsa', 'acessório', 'elegante', 'moderno', 'urbano', 'sofisticado', 'versátil', 'lifestyle']
  },
  {
   id: '29',
   name: 'Óculos "Linha Clara"',
   description: 'Óculos de sol com design minimalista e moderno. Perfeito para complementar o visual com leveza e estilo em qualquer ocasião.',
   price: 119.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1656360089594-d6523d472d1a?q=80&w=1635&auto=format&fit=crop',
   tags: ['óculos', 'acessório', 'minimalista', 'moderno', 'verão', 'urbano', 'estilo', 'clean']
  },
  {
   id: '30',
   name: 'Bucket "Sol de Rua"',
   description: 'Chapéu bucket leve e estiloso, perfeito para dias de sol e rolês ao ar livre. Combina proteção e atitude em um visual tropical e urbano.',
   price: 59.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1632334007693-998f1044cdf7?q=80&w=687&auto=format&fit=crop',
   tags: ['bucket', 'chapéu', 'verão', 'praia', 'tropical', 'streetwear', 'casual', 'sol']
  },
  {
   id: '31',
   name: 'Bolsa "Dia Leve"',
   description: 'Bolsa versátil e estilosa, perfeita para acompanhar a rotina com leveza e praticidade. Design moderno que combina com diferentes ocasiões.',
   price: 109.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1559669865-5995d995c52c?q=80&w=1170&auto=format&fit=crop',
   tags: ['bolsa', 'acessório', 'casual', 'dia a dia', 'leve', 'urbano', 'versátil', 'estilo']
  },
  {
   id: '32',
   name: 'Chaveiro "Ponto Final"',
   description: 'Chaveiro moderno com design minimalista e acabamento resistente. Ideal para organizar suas chaves com estilo e personalidade no dia a dia.',
   price: 29.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1558681652-ea12005b79cd?q=80&w=735&auto=format&fit=crop',
   tags: ['chaveiro', 'acessório', 'minimalista', 'urbano', 'dia a dia', 'detalhe', 'funcional', 'estilo']
  },
  {
   id: '33',
   name: 'Chinelo "Praia Urbana"',
   description: 'Chinelo leve e confortável, ideal para dias quentes e momentos de descanso. Perfeito para compor um visual descontraído com estilo.',
   price: 49.90,
   category: 'accessories',
   imageUrl: 'https://images.unsplash.com/photo-1770384179319-7c5bf7872178?q=80&w=1170&auto=format&fit=crop',
   tags: ['chinelo', 'verão', 'praia', 'casual', 'conforto', 'leve', 'dia a dia', 'relax']
  }
];