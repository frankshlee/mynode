var doubled = require('../blah');

exports['calculate'] = function (test) {
    test.equal(doubled.calculate(2), 4);
    test.done();
};
