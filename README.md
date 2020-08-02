# Carrefour Local 🗺📌
  O carrefour local é um bot do telegram que a partir do compartilhamento da localização do usuário, o mesmo retorna o carrefour aberto mais próximo da sua localização atual em um raio de até 15 km. O bot foi desenvolvido usando as APIs do telegram, carrefour e dialog flow, o código foi escrito em JavaScript. Esse bot teve como base o ChatbotFit do Carlos Victor da Digital Innovation One.

## Getting Started
  Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

#### Node

- [Node 12 LTS](https://nodejs.org/en/download/)

#### Bot Telegram

- [Bot Telegram](https://core.telegram.org/bots)

#### DialogFlow

- [DialogFlow](https://dialogflow.cloud.google.com/)

#### Api Carrefour

- [Api Carrefour](https://dev.carrefour.com.br/node/107)

#### 1. Clone o repositório
````
git clone https://github.com/joaoCarlosAB/carrefour_local_bot.git
````

#### 2. Instalar dependências

```bash
npm install
```

#### 3. Configuração do ambiente

##### Crie um arquivo .env na raiz do projeto, nele você colocará as suas variáveis de ambiente.

###### CLIENT_ID que vai receber o id fornecido pela api do carrefour
###### BOT_TOKEN que vai receber o token do bot criado no telegram
###### E as variáveis PROJECT_ID, PRIVATE_KEY e CLIENT_EMAIL, que são fornecidas pela API do dialogflow

No fim da da configuração o seu arquivo .env deve está assim:

![envarquivo](https://user-images.githubusercontent.com/66270338/89125442-ec301f80-d4b4-11ea-8469-3a43a96e1fc2.PNG)

#### 4. Inicializar o bot

````
npm start
````

Pronto o seu bot está em execução!!!

## Chatbot em execução

### 1. Quando o bot encontra um carrefour aberto próximo da sua localização

![picasion com_dfb039a683da4197b4b6807f6abbec29](https://user-images.githubusercontent.com/66270338/89129670-74beb800-d4d5-11ea-88ec-50dbaad63dd7.gif)

### 2. Quando o bot não acha nenhum carrefour aberto próximo da sua localização

![botnacha](https://user-images.githubusercontent.com/66270338/89127976-7b92fe00-d4c8-11ea-9ae3-d8a6f0259fb8.gif)

### 3. Quando ocorre um erro de conexão a API do carrefour

![erronoservidordedados](https://user-images.githubusercontent.com/66270338/89128101-8ef29900-d4c9-11ea-99bf-96b523d1bf18.gif)

## Author

* **João Carlos**
