*tsc --init* Para crear un archivo tsconfig.json

- tsc app.ts: Convierte a js

La mayoria de parametros no son necesarios
target, version que de js se utiliza

- "module": "NodeNext" : que el código generado sea compatible con x bundler
- "rootDir": "./src": donde están los archivos a analizar
- allowJs: true : permite que exista código js en paralelo con ts

El tipo *unknown* se usa cuando no sabes que valor tendrá una variable, función o en si un valor que no se conoce aun, entrada sin tipo especifico

El tipo *never* se usa para funciones que explícitamente nunca van a retornar algo

