# PickWise AI 🇧🇷👕

O PickWise AI é um conceito de e-commerce focado em streetwear nacional, que utiliza uma simulação de Inteligência Artificial para ajudar o usuário a encontrar o "corre" perfeito baseado no seu estilo, clima ou ocasião.

Desenvolvido como um projeto prático para consolidar meus conhecimentos de front-end após concluir minha graduação em Análise e Desenvolvimento de Sistemas (ADS) na FEPI, o objetivo principal foi unir uma arquitetura de código limpa com uma interface autêntica e cheia de personalidade.

## 🚀 Funcionalidades
- **Busca Inteligente (Motor Simulado):** Um algoritmo local que analisa o prompt do usuário, cruza com as *tags* dos produtos e devolve recomendações justificadas, simulando o comportamento e o tempo de resposta de uma IA real.
- **Carrinho de Compras Global:** Um *Slide-over Drawer* responsivo, com cálculo dinâmico de totais e controle de quantidades.
- **Identidade "Brazilcore":** Design construído 100% do zero, fugindo de templates genéricos e valorizando uma estética urbana brasileira com tipografias fortes.

## 🛠️ Stack Tecnológica
- **React + Vite:** Para uma experiência de desenvolvimento e build ultrarrápidos.
- **TypeScript:** Tipagem forte (`interfaces` de Produtos e Carrinho) para garantir segurança e escalabilidade no código.
- **Tailwind CSS:** Utilizado para toda a estilização, incluindo a configuração de um tema próprio no `tailwind.config.js`.
- **Zustand:** Escolhido para o gerenciamento de estado global do carrinho pela sua simplicidade e ausência de *boilerplates* complexos.

## 🧠 Aprendizados e Próximos Passos
Como estou em constante aprendizado, este projeto foi um excelente laboratório. Consegui aprimorar minha visão sobre organização de pastas (separando lógica em `services` e estados em `store`) e entendi na prática o poder do Zustand comparado à passagem manual de *props*.

**O que pretendo implementar no futuro:**
- [ ] Conectar o motor de busca a uma API real (como OpenAI ou Gemini).
- [ ] Implementar testes unitários e de integração (Vitest / Testing Library).
- [ ] Criar um backend real para o gerenciamento do catálogo de produtos.

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/pickwise-ai.git](https://github.com/SEU_USUARIO/pickwise-ai.git)

2. Acesse a pasta do projeto:
    ```bash
    cd pickwise-ai

3. Instale as dependências:
    ```bash
    npm install

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev

Foco na evolução contínua por Julia!