# NexusPay

> Projeto educacional de simulação financeira com HTML, CSS e JavaScript. Não é um banco, uma corretora ou uma plataforma de investimentos real.

O NexusPay é uma interface web para praticar desenvolvimento front-end e lógica de programação usando um cenário de carteira financeira fictícia. O usuário pode explorar saldo, alocação de ativos, movimentações e informações de perfil em uma experiência demonstrativa.

## O que existe no projeto

- Painel com saldo fictício e áreas de alocação para criptomoedas, renda fixa e ações.
- Simulação de transferências entre o saldo disponível e categorias de ativos.
- Histórico de movimentações exibido na interface.
- Personalização local do nome do perfil.
- Atualização demonstrativa de valores usando dados armazenados no navegador.
- Uma área separada de conteúdo educacional em `Learn-Module/`.

Os valores e rendimentos exibidos fazem parte de uma simulação. O arquivo `js/rendasAtivosAI.js` aplica percentuais fixos ao saldo local — por exemplo, 0,1% para renda fixa, 0,2% para Bitcoin e 0,5% para ações. Esses números não representam cotações, taxas oficiais ou resultados reais de mercado. Apesar do nome do arquivo, essa lógica não utiliza um modelo de inteligência artificial.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap e Boxicons
- `localStorage` para persistência local dos dados demonstrativos

## Executar localmente

O projeto não possui um comando próprio de instalação na raiz. Para servir os arquivos estáticos, use um servidor HTTP local:

```bash
git clone https://github.com/duartexz-dev/NexusPay.git
cd NexusPay
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador. Também é possível usar a extensão Live Server do VS Code.

## Estrutura atual

```text
NexusPay/
├── Learn-Module/
│   ├── homeLearn.html
│   ├── homeLearn.css
│   └── homeLearn.js
├── backend/
│   └── .gitignore
├── html/
│   ├── home.html
│   └── home.css
├── js/
│   ├── Cadastro.js
│   ├── Home.js
│   ├── api.js
│   ├── effects.js
│   └── rendasAtivosAI.js
├── index.html
├── script.js
└── style.css
```

### Observações sobre a integração de API

O arquivo `js/api.js` exporta um handler que consulta a CoinGecko e espera a variável de ambiente `COINGECKO_API_KEY`. Ele requer um ambiente de execução capaz de hospedar esse tipo de handler; servir o repositório como arquivos estáticos não cria automaticamente uma rota de API. A documentação não pressupõe que essa integração esteja implantada ou conectada ao painel.

A pasta `backend/` contém atualmente apenas um arquivo `.gitignore`; ela não representa um backend funcional.

## Limitações importantes

- Os dados de saldo, ativos e histórico são demonstrativos e ficam no armazenamento local do navegador.
- Não existe autenticação real de usuários nem banco de dados.
- Não são realizadas compras, vendas, transferências bancárias ou operações financeiras.
- Os rendimentos simulados não acompanham o mercado e não devem ser usados para decisões financeiras.
- A existência de um handler para CoinGecko não significa que a aplicação esteja conectada a uma API em produção.

## Objetivo de aprendizagem

O projeto serve como exercício de construção de interfaces, manipulação do DOM, eventos, armazenamento local, organização de arquivos e implementação de regras de negócio simuladas.

---

Desenvolvido por Arthur Duarte para fins de estudo.
