# Notas de estudo técnico

Projeto: `numbers-raffle`

Autor: [Victor Martins](https://github.com/VictorMartinsD)

Código: [https://github.com/VictorMartinsD/numbers-raffle](https://github.com/VictorMartinsD/numbers-raffle)

Deploy: [https://victormartinsd.github.io/numbers-raffle/](https://victormartinsd.github.io/numbers-raffle/)

- **Arquitetura principal:** o projeto foi estruturado com **Vite** e JavaScript em módulo, com ponto de entrada único em `src/main.js`. Esse arquivo concentra a orquestração da interface: seleção de elementos do `DOM`, validação de entradas, geração dos números e controle do fluxo visual do sorteio.

- **Camada visual:** a base de estilos foi separada em `src/css/`, com `reset.css`, `variables.css`, `global.css`, `utility.css` e `index.css`. Essa divisão reduz acoplamento entre regras globais, tokens visuais, utilitários e estilos da página principal. O carregamento também usa a classe `ready` no `document.documentElement` para evitar `FOUC`, mantendo a interface oculta até o CSS e o `DOM` estarem prontos.

- **Validação de entrada:** a lógica foi tratada diretamente no front-end. O código limita caracteres inválidos em campos numéricos, controla o tamanho dos valores, bloqueia o uso de zero em cenários específicos e impede combinações fora do intervalo permitido. Isso reduz a dependência de correções posteriores e mantém as regras mais próximas da interação do usuário.

- **Animação dos resultados:** o fluxo foi construído com criação dinâmica de elementos, `setTimeout` e `requestAnimationFrame` para coordenar entrada, destaque visual e encerramento de cada número. Também há tratamento para redistribuição espacial dos tokens e para estados diferentes quando existe apenas um resultado ou quando o último item exige centralização. Houve um ajuste manual nessa animação para controlar o deslocamento lateral que aparecia em uma etapa específica; em vez de travar o avanço do projeto, a escolha foi seguir com o conteúdo e manter o foco na evolução do JavaScript central do curso.

- **Acessibilidade:** o projeto usa uma região `aria-live` para anunciar resultados sorteados e atualiza o foco após a renderização final, ajudando leitores de tela a perceberem a mudança de estado. A navegação por teclado também recebe atenção, com suporte a `Enter` no contêiner de inputs para acionar o sorteio.

- **Regra de geração:** a função de sorteio trata dois cenários: repetição permitida e repetição bloqueada. Quando a repetição está desativada, o código usa `Set` para garantir unicidade e valida previamente se o intervalo comporta a quantidade solicitada. Isso evita estados inválidos e torna a regra de negócio explícita.

- **Tooling e entrega:** o `package.json` inclui **Vite** para build e desenvolvimento, **ESLint** com regras de qualidade, **Prettier** para formatação, `lint-staged` para execução seletiva antes do commit e **Husky** para o hook `pre-commit`. Há ainda workflow de **GitHub Actions** em `.github/workflows/pages.yml` para build e deploy no GitHub Pages.

- **Camada compartilhada:** os utilitários de `src/utils/` e os serviços em `src/services/` existem como camada compartilhada do projeto, com funções pequenas e documentadas por **JSDoc**. Mesmo quando algumas dessas funções não são usadas no fluxo principal atual, a presença delas mostra organização de base e intenção de reuso.

---

Notas de estudo técnico por Victor Martins.

## Technical study notes

Project: `numbers-raffle`

Author: [Victor Martins](https://github.com/VictorMartinsD)

Code: [https://github.com/VictorMartinsD/numbers-raffle](https://github.com/VictorMartinsD/numbers-raffle)

Deploy: [https://victormartinsd.github.io/numbers-raffle/](https://victormartinsd.github.io/numbers-raffle/)

- **Main architecture:** the project is structured with **Vite** and ES modules, with a single entry point in `src/main.js`. That file orchestrates the interface by wiring `DOM` elements, validating inputs, generating numbers, and controlling the visual flow of the draw.

- **Visual foundation:** the styling is split across `src/css/`, with `reset.css`, `variables.css`, `global.css`, `utility.css`, and `index.css`. This separation reduces coupling between global rules, design tokens, utility classes, and page-specific styles. The app also uses the `ready` class on `document.documentElement` to avoid `FOUC`, keeping the interface hidden until CSS and `DOM` are ready.

- **Input validation:** logic is handled directly on the client side. The code blocks invalid numeric characters, limits input length, prevents zero in specific scenarios, and rejects combinations outside the allowed range. That reduces reliance on later correction steps and keeps the rules close to user interaction.

- **Result animation:** the most sensitive part was the result animation. The flow was built with dynamic element creation, `setTimeout`, and `requestAnimationFrame` to coordinate entry, visual emphasis, and the end state of each number. There is also handling for token spacing and for different states when there is only one result or when the last item needs centering. One animation step required a manual adjustment because an unwanted lateral shift appeared; instead of stalling progress, the decision was to move forward with the content and keep the focus on the core JavaScript learning path.

- **Accessibility:** the project uses an `aria-live` region to announce drawn results and moves focus after the final render so screen readers can detect the state change. Keyboard navigation is also addressed, with `Enter` support on the inputs container to trigger the draw.

- **Generation rules:** the draw function handles two scenarios: repetition allowed and repetition blocked. When repetition is disabled, the code uses `Set` to guarantee uniqueness and validates in advance whether the requested quantity fits the available range. This prevents invalid states and makes the business rule explicit.

- **Tooling and delivery:** `package.json` includes **Vite** for development and build, **ESLint** for code quality rules, **Prettier** for formatting, `lint-staged` for selective pre-commit execution, and **Husky** for the `pre-commit` hook. There is also a **GitHub Actions** workflow in `.github/workflows/pages.yml` for build and deployment to GitHub Pages.

- **Shared layer:** the helpers in `src/utils/` and the services in `src/services/` exist as a shared layer for the project, with small functions documented through **JSDoc**. Even when some of those functions are not used in the current main flow, their presence shows base organization and reuse intent.

---

Technical study notes by Victor Martins.
