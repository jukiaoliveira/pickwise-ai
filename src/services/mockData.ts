import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Oversized "Selva de Pedra"',
    description: 'Modelagem ampla e caimento pesado. Estampa em silk nas costas com grafismos inspirados na arquitetura de São Paulo.',
    price: 129.90,
    category: 't-shirt',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    tags: ['casual', 'verão', 'oversized', 'dia a dia', 'urbano']
  },
  {
    id: '2',
    name: 'Calça Cargo "Cerrado" Utilitária',
    description: 'Feita em sarja de alta gramatura. Possui 6 bolsos funcionais e ajuste na barra. Resistente e perfeita para festivais.',
    price: 249.90,
    category: 'pants',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80',
    tags: ['festival', 'resistente', 'bolsos', 'utilitário', 'inverno', 'noite']
  },
  {
    id: '3',
    name: 'Corta-vento "Neblina" Refletivo',
    description: 'Jaqueta corta-vento impermeável com detalhes refletivos. Essencial para o clima imprevisível.',
    price: 199.90,
    category: 'jacket',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',
    tags: ['frio', 'chuva', 'noite', 'esporte', 'refletivo', 'impermeável']
  },
  {
    id: '4',
    name: 'Shoulder Bag "Corre"',
    description: 'Bolsa transversal compacta para carregar o essencial. Alça ajustável e tecido resistente à água.',
    price: 89.90,
    category: 'accessories',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
    tags: ['acessório', 'prático', 'dia a dia', 'festa', 'compacto']
  }
];