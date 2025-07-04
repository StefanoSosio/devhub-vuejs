# DevHub Vue.js

Un progetto Vue.js 3 che dimostra le principali funzionalità e concetti del framework.

## 📋 Sommario

- [Caratteristiche](#caratteristiche)
- [Prerequisiti](#prerequisiti)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Struttura del Progetto](#struttura-del-progetto)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Scripts Disponibili](#scripts-disponibili)
- [Link Utili](#link-utili)

## ✨ Caratteristiche

Questo progetto è un'applicazione che copre i seguenti concetti di Vue.js:

- **Composition API** con `<script setup>`
- **Vue Router** per la navigazione
- **Pinia** per la gestione dello stato
- **Ciclo di vita dei componenti**
- **Direttive e direttive personalizzate**
- **Chiamate HTTP** con Fetch API
- **Autenticazione JWT**

## 🚀 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 16 o superiore)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 📦 Installazione

1. Clona il repository:
```bash
git clone <url-del-repository>
cd devhub-vuejs
```

2. Installa le dipendenze:
```bash
npm install
```

## 🏃‍♂️ Utilizzo

### Modalità Sviluppo

Per avviare il server di sviluppo:

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

### Build di Produzione

Per creare la build di produzione:

```bash
npm run build
```

### Preview della Build

Per visualizzare l'anteprima della build:

```bash
npm run preview
```

## 📁 Struttura del Progetto

```
devhub-vuejs/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── MsgComponent.vue      # Componente di esempio
│   ├── router/
│   │   └── index.js             # Configurazione delle rotte
│   ├── stores/
│   │   ├── user.js              # Store Pinia per l'utente
│   │   └── prova.js             # Store di esempio
│   ├── views/
│   │   ├── HomeView.vue         # Pagina principale
│   │   ├── TestView.vue         # Pagina di test
│   │   ├── DirettiveView.vue    # Demo delle direttive
│   │   ├── LifecycleView.vue    # Demo del ciclo di vita
│   │   ├── HttpView.vue         # Demo chiamate HTTP
│   │   └── PiniaView.vue        # Demo di Pinia
│   ├── App.vue                  # Componente radice
│   └── main.js                  # Entry point dell'applicazione
├── package.json
├── vite.config.js              # Configurazione Vite
├── eslint.config.js            # Configurazione ESLint
└── README.md
```

## 🛠️ Tecnologie Utilizzate

### Dipendenze Principali
- **Vue 3** (`^3.5.13`) - Framework JavaScript progressivo
- **Vue Router** (`^4.5.0`) - Router ufficiale per Vue.js
- **Pinia** (`^3.0.1`) - Store per la gestione dello stato

### Strumenti di Sviluppo
- **Vite** (`^6.2.4`) - Build tool e dev server
- **ESLint** (`^9.22.0`) - Linter per JavaScript/Vue
- **Vue DevTools** (`^7.7.2`) - Plugin per il debug


## 📝 Scripts Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue ESLint con auto-fix


## 🔗 Link Utili

### Documentazione Ufficiale
- [Vue.js 3](https://vuejs.org/) - Documentazione ufficiale di Vue.js
- [Vue Router](https://router.vuejs.org/) - Router ufficiale per Vue.js
- [Pinia](https://pinia.vuejs.org/) - Store ufficiale per Vue.js
- [Vite](https://vitejs.dev/) - Build tool e dev server

### Altre risorse
- [Vue School](https://vueschool.io/) - Piattaforma di apprendimento per Vue.js

### Community e Supporto
- [Vue.js GitHub](https://github.com/vuejs/core) - Repository ufficiale
- [Vue.js Discord](https://discord.gg/vue) - Community Discord ufficiale
- [Vue.js Forum](https://forum.vuejs.org/) - Forum della community
