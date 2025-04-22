_tsc --init_ Para crear un archivo tsconfig.json

La mayoria de parametros no son necesarios
target, version que de js se utiliza

- "module": "NodeNext" : que el código generado sea compatible con x bundler
- "rootDir": "./src": donde están los archivos a analizar
- allowJs: true : permite que exista código js en paralelo con ts

El tipo _unknown_ se usa cuando no sabes que valor tendrá una variable, función o en si un valor que no se conoce aun, entrada sin tipo especifico

El tipo _never_ se usa para funciones que explícitamente nunca van a retornar algo

## 🖥️ Lista de Comandos tsc

- tsc app.ts: Convierte a js un solo archivo
- tsc: Convierte a js todo el proyecto (Se debe estar en el mismo nivel de la carpeta tsconfig.json)
- tsc --watch: se convierte como si fuera un live server, por lo que, si hago un cambio en el app.ts, se volverá a compilar el proyecto
- npm init -y: Para crear un package.json con todas las opciones por default

Se pone type module en el package json para ser compatible con imports y exports

```
  "type": "module",
```

## Installing Type Packages

al escribir esta sintaxis:

```
import fs from "node:fs"
```

Typescript no sabe que tipos contendrán esos paquetes, ni librerías como lodash o React, para ello existen comandos para instalar los tipos de cada paquete individual, por ejemplo:

```
npm install @types/node
```

También, en esta pagina se encontraran varios paquetes de instalación de tipados declarados para las siguientes librerías `https://github.com/DefinitelyTyped/DefinitelyTyped`

Pero solo se deben instalar --save-dev, ya que typescript es una herramienta de desarrollo mas que nada
Varios tipos no están incorporados por ts, pero justo por esa razón se deben de instalar los paquetes que incluyan los tipos necesarios
