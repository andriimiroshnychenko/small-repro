This is a small playgrond to see how decorators (not mandarory MobX-related) is influencing class static properties.
To reproduce:
 - clone repository;
 - make `npm i`;
 - execute `./node_modules/webpack/bin/webpack.js`;
 - execute `node dist/index.js`.

 Notice appeared error. This is related to accessing class static properties from inside other static property of the same class in `src/js/class.tsx`.

 - comment out `@computed` decorator;
 - execute `rm -rf dist/ && ./node_modules/webpack/bin/webpack.js && node dist/index.js`.

 Notice that no error are shown, and two `console.log`s printed, as intended.

 - uncomment `@computed` decorator;
 - change `defaultSorting: TestClass.defaultSorting,` to smth like `defaultSorting: 'foo',` to eliminate call of class static property;
 - execute `rm -rf dist/ && ./node_modules/webpack/bin/webpack.js && node dist/index.js`.

 No error appeared.
