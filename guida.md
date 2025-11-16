dopo aver creato il progetto:

- inserire, nel package.json, gli script:

```js
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
```

- assicurarsi di avere, sempre nel package.json, una cosa del tipo:

```js
"name": "amazon-mockup",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://luigiaceto.github.io/amazon-mockup",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  ```

- mettere nel .gitignore *node_modules*, *dist*

- controlla che il sito funzioni in locale con:

```js
npm run dev
```

- se serve:

```js
rm -rf dist
```

- eseguire i due script:

```js
npm run build
npm run deploy
```