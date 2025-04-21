tsc --init

- tsc app.ts: Convierte a js

La mayoria de parametros no son necesarios
target, version que de js se utiliza

- "module": "NodeNext" : que el código generado sea compatible con x bundler
- "rootDir": "./src": donde están los archivos a analizar
- allowJs: true : permite que exista código js en paralelo con ts
