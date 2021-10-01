const _ = require('lodash')

function foo(cart, item, quantity) {
    let test = _.cloneDeep(cart)
  test.items.push({ item, quantity });
  return test;
}

function fooFinal() {
  const originalCart = {
    items: [],
  };
  const cart = foo(originalCart, "Test", 4);

  console.log(cart, " cart =>> ", originalCart);
}

fooFinal();
