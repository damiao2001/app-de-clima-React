🌤️ My Weather App - Projeto em React + Vite
Este é um projeto simples de um aplicativo de previsão do tempo desenvolvido com React e Vite, criado como prática para quem está começando na área de desenvolvimento frontend. A aplicação permite ao usuário:

✅ Funcionalidades
🔍 Autocomplete de cidades ao digitar no campo de busca (usando a API da OpenWeatherMap).

📍 Sugestões de cidades com clique para facilitar a escolha.

🌡️ Previsão do tempo atual (temperatura, descrição e ícone do clima).

🎨 Interface moderna e responsiva com styled-components.

📦 Código modularizado e organizado em components, services, e styles.

🛠️ Tecnologias utilizadas
React com Vite para um setup rápido com Hot Module Replacement (HMR).

Styled-components para estilização em CSS-in-JS.

Axios para chamadas HTTP.

ESLint com regras básicas de boas práticas de código.

Baseado no template oficial Vite + React:

"This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules."

🔌 Observações
Utiliza @vitejs/plugin-react para suporte ao Fast Refresh com Babel.

Para projetos maiores ou em produção, recomenda-se usar TypeScript com validação de tipos via typescript-eslint.

🚀 Objetivo
Este projeto foi criado com fins didáticos por um desenvolvedor iniciante, com o objetivo de aplicar conceitos aprendidos em React, consumo de APIs e organização de um projeto frontend real.

🔐 Configuração do .env
Este projeto utiliza variáveis de ambiente para armazenar as chaves das APIs e URLs utilizadas, garantindo mais segurança e organização.
Você deve criar um arquivo chamado .env na raiz do projeto com o seguinte conteúdo:

env
Copiar
Editar
# Chave da sua API do OpenWeather
VITE_OPENWEATHER_KEY=SUA_KEY_AQUI

# Endpoint da API de Autocomplete de Cidades (geolocalização)
VITE_CITY_API_URL=https://api.openweathermap.org/geo/1.0/direct

# Endpoint da API de Clima Atual
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather

# Endpoint da API de Previsão do Tempo (opcional, ainda não implementado)
VITE_FORECAST_API_URL=https://api.openweathermap.org/data/2.5/forecast
🔎 Onde conseguir a VITE_OPENWEATHER_KEY?
Você pode obter uma chave gratuita da OpenWeather em:
🔗 https://openweathermap.org/api

⚠️ Importante:
Nunca suba o arquivo .env para o GitHub. Ele deve estar listado no .gitignore (o Vite já ignora isso por padrão).

Substitua SUA_KEY_AQUI pela sua chave real da API.
