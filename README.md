<div align="center">

# numbers-raffle

</div>

<div align="center">

[![Acessar Deploy](https://img.shields.io/badge/Acessar%20Deploy-Github%20Pages-blue?style=for-the-badge)](https://victormartinsd.github.io/numbers-raffle/)
[![Figma Design](https://img.shields.io/badge/Figma%20Design-811?style=for-the-badge&logo=figma&logoColor=white&color=FC4A1A)](https://www.figma.com/design/7BlBZ8tH7oxo2PT19OqIh1/Sorteador-de-n%C3%BAmeros--Community-?node-id=3-376&p=f&t=H3aDiMdIvKe1RQ2N-0)
[![Notas de Estudo](https://img.shields.io/badge/%F0%9F%93%98%20Notas%20de%20Estudo-Documenta%C3%A7%C3%A3o-0ea5e9?style=for-the-badge)](./docs/notas-de-estudo.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

<div align="center">

## Sumário | Summary

</div>

<div align="center">

| Português                                       | English                                   |
| ----------------------------------------------- | ----------------------------------------- |
| [Sobre o Projeto](#sobre-o-projeto)             | [About the Project](#about-the-project)   |
| [Preview](#preview)                             | [Preview](#preview-en)                    |
| [Visão de Produto](#visao-de-produto)           | [Product Vision](#product-vision)         |
| [Casos de Uso](#casos-de-uso)                   | [Use Cases](#use-cases)                   |
| [Funcionalidades](#funcionalidades)             | [Features](#features)                     |
| [Tecnologias](#tecnologias)                     | [Technologies](#technologies)             |
| [Arquitetura](#arquitetura)                     | [Architecture](#architecture)             |
| [Como rodar localmente](#como-rodar-localmente) | [How to Run Locally](#how-to-run-locally) |
| [Limitações conhecidas](#limitacoes-conhecidas) | [Known Limitations](#known-limitations)   |
| [Aprendizado](#aprendizado)                     | [Learning](#learning)                     |

</div>

<a name="sobre-o-projeto"></a>

## Sobre o Projeto

O `numbers-raffle` é uma aplicação web para sorteio de números com intervalo configurável, quantidade definida pelo usuário e opção de repetição controlada. O foco técnico está em validar a entrada, organizar a apresentação do resultado e manter a experiência simples em uma base de JavaScript modular.

O projeto foi construído como exercício de frontend com Vite, CSS modular e JavaScript nativo, priorizando fluxo direto, feedback imediato e estrutura fácil de manter.

<a name="preview"></a>

<div align="center">

## Preview

<a href="https://victormartinsd.github.io/numbers-raffle/">
	<img src="https://github.com/user-attachments/assets/76213513-3f51-4446-b9d4-f3660f3f7e4a" alt="Preview do projeto numbers-raffle" width="1600" height="1079" />
</a>

</div>

<a name="visao-de-produto"></a>

## Visão de Produto

O sistema resolve a necessidade de gerar números aleatórios com regras claras de quantidade, intervalo e repetição. Ele entrega um fluxo simples para quem precisa sortear resultados sem calcular manualmente limites ou revisar combinações inválidas.

O público-alvo é formado por usuários que precisam de um sorteio rápido e previsível em contexto de estudo, demonstração ou uso prático. Para detalhes sobre regras de negócio e requisitos, acesse a [Especificação do Produto](./docs/PRODUCT_SPEC.md).

<a name="casos-de-uso"></a>

## Casos de Uso

- Realizar um sorteio rápido entre opções ou participantes.
- Gerar números para atividades de estudo ou demonstração.
- Validar um intervalo antes de executar a geração do resultado.
- Repetir o sorteio com parâmetros diferentes na mesma sessão.

<a name="funcionalidades"></a>

## Funcionalidades

- Definição da quantidade de números a serem sorteados.
- Configuração de intervalo mínimo e máximo.
- Alternância entre sorteio com ou sem repetição.
- Validação de entradas antes da execução do sorteio.
- Exibição sequencial e visual do resultado final.
- Reinício do fluxo para um novo sorteio.

<a name="tecnologias"></a>

## Tecnologias

### Core

| Tecnologia | Versão     | Função                                                                                     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------ |
| HTML5      | Nativo     | Estrutura semântica da aplicação e pontos de acesso do fluxo principal.                    |
| JavaScript | ES Modules | Orquestra validação, geração dos números, interação com o DOM e controle do estado visual. |
| Vite       | ^8.0.3     | Servidor de desenvolvimento e pipeline de build.                                           |

### Styling

| Tecnologia            | Versão | Função                                                             |
| --------------------- | ------ | ------------------------------------------------------------------ |
| CSS3                  | Nativo | Layout, estados visuais, responsividade e composição da interface. |
| CSS Custom Properties | Nativo | Tokens de cor, tipografia, espaçamento e consistência visual.      |
| CSS Animations        | Nativo | Animações de transição e destaque no resultado do sorteio.         |
| Google Fonts          | Nativo | Carregamento das famílias tipográficas usadas na interface.        |

### Infrastructure / Deployment

| Tecnologia     | Versão | Função                                             |
| -------------- | ------ | -------------------------------------------------- |
| GitHub Actions | Nativo | Automatiza o build e o deploy para o GitHub Pages. |
| GitHub Pages   | Nativo | Hospeda a versão publicada do projeto.             |

### Tooling

| Tecnologia               | Versão  | Função                                                               |
| ------------------------ | ------- | -------------------------------------------------------------------- |
| ESLint                   | ^10.3.0 | Regras de qualidade e consistência do código JavaScript.             |
| `@eslint/js`             | ^10.0.1 | Base das regras recomendadas do ESLint.                              |
| `globals`                | ^17.6.0 | Definição de globais do browser e de configuração.                   |
| `eslint-config-prettier` | ^10.1.8 | Evita conflitos entre ESLint e formatação.                           |
| Prettier                 | latest  | Formatação automática de arquivos do projeto.                        |
| lint-staged              | ^16.2.7 | Executa lint e formatação apenas em arquivos preparados para commit. |
| Husky                    | ^9.1.7  | Hook de pre-commit para validar alterações antes do envio.           |

<a name="arquitetura"></a>

## Arquitetura

O projeto usa uma estrutura simples e modular. A entrada principal fica em `index.html`, que carrega o módulo JavaScript e inclui metadados, fontes e assets da interface. O comportamento da aplicação é centralizado em `src/main.js`, enquanto o CSS é dividido por responsabilidade em arquivos menores.

O repositório também separa serviços e utilitários em camadas reutilizáveis. Os arquivos `src/services/api.js` e `src/services/storage.js` concentram wrappers para `fetch` e `localStorage`, e `src/utils/` reúne helpers, formatadores e validadores. Hoje, a experiência principal é conduzida diretamente pelo ponto de entrada, sem componentes de framework, hooks personalizados ou API externa integrada.

```text
numbers-raffle/
├── index.html                # Entrada da aplicação, metadados e carregamento do módulo
├── package.json              # Scripts, dependências e configuração do projeto
├── package-lock.json         # Travamento determinístico das dependências
├── vite.config.js            # Configuração do Vite
├── eslint.config.mjs         # Regras de lint e integração com Prettier
├── .husky/
│   └── pre-commit            # Hook de validação antes do commit
├── .github/
│   └── workflows/
│       └── pages.yml         # Build e deploy automatizados para o GitHub Pages
├── src/
│   ├── main.js               # Fluxo principal da interface e do sorteio
│   ├── css/
│   │   ├── index.css         # Agrupador dos estilos
│   │   ├── reset.css         # Reset visual
│   │   ├── variables.css     # Tokens de design
│   │   ├── global.css        # Estilos globais e layout
│   │   └── utility.css       # Classes utilitárias
│   ├── services/
│   │   ├── api.js            # Wrapper para requisições HTTP
│   │   └── storage.js        # Wrapper para persistência local
│   └── utils/
│       ├── formatters.js     # Formatação de datas
│       ├── helpers.js        # Helpers genéricos
│       └── validators.js     # Validações simples
├── docs/
│   ├── PRODUCT_SPEC.md       # Especificação de produto
│   └── notas-de-estudo.md    # Registro técnico de aprendizado
└── README.md                 # Documento de apresentação do projeto
```

<a name="como-rodar-localmente"></a>

## Como rodar localmente

O projeto usa `npm`.

1. Clone o repositório:

```bash
git clone https://github.com/VictorMartinsD/numbers-raffle.git
```

2. Entre no diretório do projeto:

```bash
cd numbers-raffle
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Gere a versão de produção, se necessário:

```bash
npm run build
```

<a name="limitacoes-conhecidas"></a>

## Limitações conhecidas

- Não possui persistência de sorteios.
- Não possui autenticação de usuário.
- Não possui integração com API externa.
- Não possui testes automatizados configurados.
- Não mantém histórico entre recarregamentos da página.

<a name="aprendizado"></a>

## Aprendizado

O projeto reforçou a organização de uma base em JavaScript modular, com responsabilidade clara entre entrada, validação, geração de resultados e apresentação visual. Também exigiu atenção ao fluxo de interação, principalmente nas transições de estado e na consistência da interface.

Outro aprendizado foi lidar com a experiência visual sem recorrer a frameworks adicionais, combinando DOM nativo, CSS modular e regras de validação diretas no front-end. Para o registro detalhado do processo de estudo, acesse [notas-de-estudo.md](./docs/notas-de-estudo.md).

---

Documento técnico elaborado por [Victor Martins](https://github.com/VictorMartinsD).

Front-End Developer focado em aplicações web modernas e performance.

> [!NOTE]
> Estas notas são um resumo técnico do projeto.
> O processo detalhado com todos os desafios resolvidos está documentado nos meus arquivos pessoais de estudo.
> [Veja as anotações completas deste projeto aqui](./docs/notas-de-estudo.md)

<div align="center">

## ENGLISH VERSION

</div>

<div align="center">

# numbers-raffle

</div>

<div align="center">

[![Access Deployment](https://img.shields.io/badge/Acessar%20Deploy-Github%20Pages-blue?style=for-the-badge)](https://victormartinsd.github.io/numbers-raffle/)
[![Figma Design](https://img.shields.io/badge/Figma%20Design-811?style=for-the-badge&logo=figma&logoColor=white&color=FC4A1A)](https://www.figma.com/design/7BlBZ8tH7oxo2PT19OqIh1/Sorteador-de-n%C3%BAmeros--Community-?node-id=3-376&p=f&t=H3aDiMdIvKe1RQ2N-0)
[![Study Notes](https://img.shields.io/badge/%F0%9F%93%98%20Notas%20de%20Estudo-Documenta%C3%A7%C3%A3o-0ea5e9?style=for-the-badge)](./docs/notas-de-estudo.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

<a name="about-the-project"></a>

## About the Project

`numbers-raffle` is a web application for drawing random numbers with a configurable range, user-defined quantity, and controlled repetition. The technical focus is on input validation, result presentation, and keeping the interaction flow simple in a modular JavaScript base.

The project was built as a frontend exercise with Vite, modular CSS, and native JavaScript, prioritizing a direct flow, immediate feedback, and a structure that is easy to maintain.

<a name="preview-en"></a>

## Preview

See the preview in the Portuguese section above: [Preview](#preview).

<a name="product-vision"></a>

## Product Vision

The system solves the need to generate random numbers with clear rules for quantity, range, and repetition. It provides a simple flow for users who need to draw results without manually calculating limits or checking invalid combinations.

The target audience includes users who need a fast and predictable draw in learning, demonstration, or practical use contexts. For details on business rules and requirements, access the [Product Specification](./docs/PRODUCT_SPEC.md).

<a name="use-cases"></a>

## Use Cases

- Run a quick draw among options or participants.
- Generate numbers for study or demonstration activities.
- Validate a range before executing the draw.
- Repeat the draw with different parameters in the same session.

<a name="features"></a>

## Features

- Define the quantity of numbers to draw.
- Configure minimum and maximum values.
- Toggle repetition on or off.
- Validate inputs before running the draw.
- Display the final result in a sequential visual flow.
- Restart the flow to perform a new draw.

<a name="technologies"></a>

## Technologies

### Core

| Technology | Version    | Function                                                                       |
| ---------- | ---------- | ------------------------------------------------------------------------------ |
| HTML5      | Native     | Semantic application structure and entry points for the main flow.             |
| JavaScript | ES Modules | Orchestrates validation, number generation, DOM interaction, and visual state. |
| Vite       | ^8.0.3     | Development server and build pipeline.                                         |

### Styling

| Technology            | Version | Function                                                              |
| --------------------- | ------- | --------------------------------------------------------------------- |
| CSS3                  | Native  | Layout, visual states, responsiveness, and interface composition.     |
| CSS Custom Properties | Native  | Design tokens for color, typography, spacing, and visual consistency. |
| CSS Animations        | Native  | Transition and emphasis animations for the draw result.               |
| Google Fonts          | Native  | Loads the typefaces used by the interface.                            |

### Infrastructure / Deployment

| Technology     | Version | Function                                        |
| -------------- | ------- | ----------------------------------------------- |
| GitHub Actions | Native  | Automates build and deployment to GitHub Pages. |
| GitHub Pages   | Native  | Hosts the published version of the project.     |

### Tooling

| Technology               | Version | Function                                              |
| ------------------------ | ------- | ----------------------------------------------------- |
| ESLint                   | ^10.3.0 | Code quality and consistency rules for JavaScript.    |
| `@eslint/js`             | ^10.0.1 | Base recommended rule set for ESLint.                 |
| `globals`                | ^17.6.0 | Browser and configuration global definitions.         |
| `eslint-config-prettier` | ^10.1.8 | Prevents conflicts between lint rules and formatting. |
| Prettier                 | latest  | Automatic code formatting.                            |
| lint-staged              | ^16.2.7 | Runs lint and formatting only on staged files.        |
| Husky                    | ^9.1.7  | Pre-commit hook to validate changes before commit.    |

<a name="architecture"></a>

## Architecture

The project uses a simple modular structure. The main entry point is `index.html`, which loads the JavaScript module and includes metadata, fonts, and interface assets. The application behavior is centralized in `src/main.js`, while styles are split across smaller files by responsibility.

The repository also separates reusable service and utility layers. `src/services/api.js` and `src/services/storage.js` contain wrappers for `fetch` and `localStorage`, and `src/utils/` groups helpers, formatters, and validators. The current user-facing flow is driven directly from the entry point, without framework components, custom hooks, or an external API integration.

```text
numbers-raffle/
├── index.html                # Application entry point, metadata, and module bootstrap
├── package.json              # Scripts, dependencies, and project configuration
├── package-lock.json         # Deterministic dependency lock file
├── vite.config.js            # Vite configuration
├── eslint.config.mjs         # Lint rules and Prettier integration
├── .husky/
│   └── pre-commit            # Validation hook before commit
├── .github/
│   └── workflows/
│       └── pages.yml         # Automated build and deploy to GitHub Pages
├── src/
│   ├── main.js               # Main draw flow and interface orchestration
│   ├── css/
│   │   ├── index.css         # Style entry bundle
│   │   ├── reset.css         # Visual reset
│   │   ├── variables.css     # Design tokens
│   │   ├── global.css        # Global styles and layout
│   │   └── utility.css       # Utility classes
│   ├── services/
│   │   ├── api.js            # HTTP request wrapper
│   │   └── storage.js        # Local persistence wrapper
│   └── utils/
│       ├── formatters.js     # Date formatting helpers
│       ├── helpers.js        # Generic helpers
│       └── validators.js     # Simple validations
├── docs/
│   ├── PRODUCT_SPEC.md       # Product specification
│   └── notas-de-estudo.md    # Technical study notes
└── README.md                 # Project presentation document
```

<a name="how-to-run-locally"></a>

## How to Run Locally

The project uses `npm`.

1. Clone the repository:

```bash
git clone https://github.com/VictorMartinsD/numbers-raffle.git
```

2. Enter the project directory:

```bash
cd numbers-raffle
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Build the production version if needed:

```bash
npm run build
```

<a name="known-limitations"></a>

## Known Limitations

- No draw history persistence.
- No user authentication.
- No external API integration.
- No automated tests configured.
- No history retention across page reloads.

<a name="learning"></a>

## Learning

The project reinforced how to organize a modular JavaScript base with clear responsibilities between input, validation, number generation, and visual presentation. It also required attention to interaction flow, especially in state transitions and interface consistency.

Another learning point was handling the visual experience without additional frameworks, combining native DOM APIs, modular CSS, and direct validation rules on the client side. For the detailed study record, access [notas-de-estudo.md](./docs/notas-de-estudo.md).

---

Technical document prepared by [Victor Martins](https://github.com/VictorMartinsD).

Front-End Developer focused on modern web applications and performance.

> [!NOTE]
> These notes are a technical summary of the project.
> The detailed process with all resolved challenges is documented in my personal study files.
> [See the complete notes for this project here](./docs/notas-de-estudo.md)
