const hello = require('../src/helpers/hello-world');

test('validando la prueba unitaria de la funcion hello', () => {// 
  expect(hello()).toEqual('Hello World');
});