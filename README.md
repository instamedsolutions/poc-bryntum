# Welcome to Instamed webapp

## Installation

### copy repo
```bash
git clone git@github.com:instamedsolutions/webapp.git webapp
```
**Note : L'installation doit être faite dans le même dossier parent que le projet Symfony**

La version de Node utilisée est la **14**. Pour changer de version, vous pouvez utiliser [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

```bash
yarn install
npm start ## to launch locally
```

## Build

Build application in __dist__ directory.
```bash
npm run build:all # Build for test & dev environments
```

## Tests

### unit test

```bash
npm run jest
npm run jest:watch
```

### end to end

before launch it, remember to copy/paste `cypress.env.example.json` to `cypress.env.json`
and fill values

```bash
npm run cy
npm run cy:open # usefull for dev
```

### linters

```bash
npm run lint
npm run tsc # typescript validation
```

### launch all (before commit)

```bash
npm run validate
```

## Project structure
```bash
./
├── index.html # entry point
├── public
│   ├── assets  # all assets
│   │   └── images   # images dir
│   └── locales # translation dir cf n18next
│       └── fr
│           └── translation.json # json translation file
├──── cypress # all end to end tests
├──── assets  # all assets
│     ├── images   # images dir
│     ├── styles   # css dir
│     └── locales # translation dir cf n18next
│       └── fr
│           └── translation.json # json translation file
└── src # code source
    ├── app           # Instamed App
    │   ├── core        # internal engine
    │   └── structure   # structural components
    ├── auth          # Instamed Auth part / and all other public route
    │   ├── core         # internal engine
    │   └── pages        # structural components
    ├── services      # all external services
    ├── components    # splited components who could be lazy loaded
    ├── styles        # all css items
    ├── utils         # all generic and utils functions
    ├── i18n.js       # translation loader
    ├── main.tsx      # react app and provider loader
    └── App.tsx       # main app router
```
