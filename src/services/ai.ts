import type { Product, Recommendation } from '../types';
import { products } from './mockData';

// Função utilitária para simular o tempo de resposta de uma API/IA real
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRecommendations = async (prompt: string): Promise<Recommendation[]> => {

  const thinkingTime = Math.floor(Math.random() * 1000) + 1500;
  await delay(thinkingTime);

  const normalizedPrompt = prompt.toLowerCase();
  
  if (normalizedPrompt.length < 3) return [];

  // avaliação do produto
  const scoredProducts = products.map(product => {
    let score = 0;
    const matchedKeywords: string[] = [];

    product.tags.forEach(tag => {
      if (normalizedPrompt.includes(tag.toLowerCase())) {
        score += 3;
        matchedKeywords.push(tag);
      }
    });

    // verifica se menciona a categoria 
    if (normalizedPrompt.includes(product.category === 'pants' ? 'calça' : product.category)) {
      score += 2;
    }

    // 3. Verifica palavras do nome ou descrição
    const promptWords = normalizedPrompt.split(' ').filter(word => word.length > 3);
    promptWords.forEach(word => {
      if (product.name.toLowerCase().includes(word) || product.description.toLowerCase().includes(word)) {
        score += 1;
      }
    });

    return { product, score, matchedKeywords };
  });

  // filtra apenas os produtos que tiveram alguma pontuação e ordenamos do maior pro menor
  const bestMatches = scoredProducts
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // não combinou, retornamos um array vazio
  if (bestMatches.length === 0) return [];

  // pega no máximo os 3 melhores produtos e formatamos no padrão Recommendation
  return bestMatches.slice(0, 3).map(item => {
    // A "IA" gera uma justificativa baseada nas tags que deram match
    const reasonText = item.matchedKeywords.length > 0 
      ? `Ideal porque combina com: ${item.matchedKeywords.join(', ')}.`
      : `Peça versátil que se encaixa no que você descreveu.`;

    return {
      product: item.product,
      reason: `Nossa IA selecionou esta peça para você. ${reasonText}`
    };
  });
};