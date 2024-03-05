# INTRODUCTION

* This repo is for learning and testing type script which is described at https://www.typescriptlang.org/.
* I use [VSCode](https://code.visualstudio.com/).
* There's online docs, in particular, RTFM @ https://www.typescriptlang.org/docs/handbook/intro.html.
* This repo contains the typescript engine and presumes node is installed (my path, ie, is /c/Program Files/nodejs).
* To look at the syntax, open up intro**N**.ts, and set example variable equal to example string then execute. In VSC
    it's compiled with 'npx tsc intro**N**.ts' from the terminal.
* As my learning continues, additional source code will be added.

# HISTORY

* strings with $ like '$ ...' indicate a bash command; you already have the $ so don't type it at the prompt
* used '$ npm init -y' to create package.json
* used '$ npm install typescript --save-dev' to install TS which autogenerated .package-lock.json and node modules/
    * run '$ npx tsc in node modules' to compile TS to JS
    * in order to create tsconfig.json for TS, '$ npx tsc -init'
* set '"main": "intro.js"' in package.json for VSCode to execute TS output with F5
* used "$ git -init" for building the repo in the initial commit

# TOPICS

The files intro1.ts, instro2.ts, and intro3.ts provide small snippets for inspecting syntax given different sorts of use of TS.

## intro1.ts
---
* **String type**
* **Any type**
* **Unknown type with casts**
* **String[] type**
* **Implicit declaration of array**
* **Readonly tuple**
* **Named tuple**
* **Explicit object**
* **Implicit object**
* **Optional type**
* **Index signature**

## intro2.ts
---
* **Int enum**
* **String enum**
* **Type alias**
* **Interface**
* **Extended interface**
* **Union type**
* **Function return type**
* **Function return type void**
* **Optional paramater**
* **Default paramater**
* **Rest parameter**
* **Functional type alias**

## intro3.ts
---
* **Named parameters**
* **As cast**
* **Angle bracket cast**
* **Forced cast**
* **Member types and visibility**
* **Implements, Extends, and Overrides**
* **Method override**
* **Abstract class**
* **Simple generics**
* **Extended generics**
* **Class generics**
* **Class generics defaults**
* **Aliased type wrapper**

## intro4.ts
---
* **Utility partial**
* **Utility required**
* **Utility record**
* **Utility omit**
* **Utility pick**
* **Utility exclude**
* **Utility returntype**
* **Utility parameters**
* **Utility readonly**

## intro4.ts
---
