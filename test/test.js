if (typeof module !== 'undefined' && module.exports) {
    var QUnit = require('qunitjs');
    var test = QUnit.test;
    require('qunit-tap')(QUnit, console.log);
    var DateFormatter = require('../src/dateformatter.js');
}

test('Test should always pass!', function(assert) {
    assert.equal(1 == "1", true);
});

if (typeof module !== 'undefined' && module.exports) {
    QUnit.load();
}