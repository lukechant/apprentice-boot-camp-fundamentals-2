const { Checkout } = require('../../main/checkout/checkout.js');

describe('Receipt', function () {
  test('A single item is added to the receipt on checkout', function () {
    let checkout = new Checkout();
    checkout.scan('A');
    expect(checkout.getReceipt()).toEqual(expect.stringContaining(
      'A: 50\n' +
      'Total: 50'));
  });

  test('One of each item is added to the receipt on checkout', function () {
    let checkout = new Checkout();
    checkout.scan('A');
    checkout.scan('B');
    checkout.scan('C');
    checkout.scan('D');

    expect(checkout.getReceipt()).toEqual(expect.stringContaining(
      'A: 50\n' +
      'B: 30\n' +
      'C: 20\n' +
      'D: 15\n' +
      'Total: 115'));
  });

  test('Offers are applied to receipt when multi-buy checked out', function () {
    let checkout = new Checkout();
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('B');
    checkout.scan('A');
    checkout.scan('C');
    checkout.scan('D');
    checkout.scan('B');
    checkout.scan('A');
    checkout.scan('A');

    expect(checkout.getReceipt()).toEqual(expect.stringContaining(
      'A: 50\n' +
      'A: 50\n' +
      'B: 30\n' +
      'A: 50\n' +
      'C: 20\n' +
      'D: 15\n' +
      'B: 30 - 15 (2 for 45)\n' +
      'A: 50\n' +
      'A: 50 - 30 (5 for 220)\n' +
      'Total: 300'));
  });
});