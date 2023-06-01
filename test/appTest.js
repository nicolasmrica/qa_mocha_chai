const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(3, 3);

describe('App', function(){
    
    before(function(){
        console.log('Before --------');
    });

    after(function(){
        console.log('\nAfter --------');
    })

    beforeEach(function(){
        console.log('\nBefore each --------');
    })

    afterEach(function(){
        console.log('\nAfter each --------');
    })
    
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            assert.equal(sayHelloResult, 'hello');
        })
    
        it('sayHello should return type string', function(){
            assert.isString(sayHelloResult);
        })
    })
    
    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            assert.isAbove(addNumbersResult, 5);
        })
    
        it('addNumbers should return type number', function(){
            assert.isNumber(addNumbersResult);
        })
    })
})

describe('Chai assertions', function(){

    before(function(){
        console.log('\nBefore --------');
    });

    after(function(){
        console.log('\nAfter --------');
    })

    beforeEach(function(){
        console.log('\nBefore each --------');
    })

    afterEach(function(){
        console.log('\nAfter each --------');
    })

    describe('assert()', function(){
        it('Testing assert(), validation of different strings', function(){
            assert('foo' !== 'bar', 'foo is not bar');
        })
        
        it('Testing assert(), validation of empty arrays', function(){
            assert(Array.isArray([]), 'empty arrays are arrays');
        })
    
        it('Testing assert(), comparing results from different functions', function(){
            assert(addNumbersResult !== sayHelloResult, 'different functions with different results');
        })
    })

    // fail() seems to be deprecated
    /* describe('fail()', function() {
        it('Testing fail(actual, expected, [message], [operator])', function(){
            assert.fail(1, 6, "whatever", "<");
        })
    }) */

    describe('isOK()', function(){
        it('Testing isOK()', function(){
            assert.isOk(1, 'everything is OK');
        })
        
        it('Testing isOK()', function(){
            assert.isOk(false, 'this will fail');
        })
    })

    describe('isNotOk()', function(){
        it('Testing isNotOk()', function(){
            assert.isNotOk(1, 'this should fail');
        })
        
        it('Testing isNotOk()', function(){
            assert.isNotOk(false, 'this will pass');
        })
    })

    describe('equal()', function(){
        it('Testing equal()', function(){
            assert.equal(7, '7', '== coerces values to strings');
        })

        it('Testing equal()', function(){
            assert.equal(NaN, undefined, 'this should fail');
        })

        it('Testing equal() with math operations', function(){
            assert.equal(4 + 3, 5 + 2, 'this should pass');
        })

        it("Testing equal() with `` and ''", function(){
            assert.equal(`hello`, 'hello', 'this should pass');
        })
        
        it('Testing equal() with "" and \'\'', function(){
            assert.equal("hello", 'hello', 'this should pass');
        })
    })

    describe('notEqual()', function(){
        it('Testing notEqual()', function(){
            assert.notEqual(7, 7.5, 'these numbers are not equal');
        })

        it('Testing notEqual()', function(){
            assert.notEqual(NaN, undefined, 'this should pass since NaN is different from undefined');
        })

        it('Testing notEqual() with math operations', function(){
            assert.notEqual('5 + 5', 10 + 1, 'this should pass');
        })

        it("Testing notEqual() with `` and ''", function(){
            assert.notEqual(`hello`, 'hello', 'this should fail');
        })
        
        it('Testing notEqual() with "" and \'\'', function(){
            assert.notEqual("hello", 'hello', 'this should fail');
        })
    })

    describe('strictEqual()', function(){
        it('Testing strictEqual()', function(){
            let auxi = 'this is a';
            assert.strictEqual(`${auxi} test`, 'this is a test', 'compared strings are strictly equal');
        })

        it('Testing strictEqual()', function(){
            assert.strictEqual(NaN, undefined, 'this should fail since NaN is different from undefined');
        })

        it('Testing strictEqual() with math operations', function(){
            assert.strictEqual(5 + 5, 10, 'this should pass');
        })

        it("Testing strictEqual() with `` and ''", function(){
            assert.strictEqual(`hello`, 'hello', 'this should fail');
        })
        
        it('Testing strictEqual() with "" and \'\'', function(){
            assert.strictEqual("hello", 'hello', 'this should fail');
        })
    })

    describe('notStrictEqual()', function(){
        it('Testing notStrictEqual()', function(){
            let auxi = 'this is a';
            assert.notStrictEqual(`${auxi} test`, 'This is a test', 'compared strings are not strictly equal');
        })

        it('Testing notStrictEqual()', function(){
            assert.notStrictEqual(NaN, undefined, 'this should pass, NaN is different from undefined');
        })

        it('Testing notStrictEqual() with math operations', function(){
            assert.notStrictEqual(5.1 + 5, 10, 'this should pass since compared values are not strictly equal');
        })

        it("Testing notStrictEqual() with `` and ''", function(){
            assert.notStrictEqual(`hello`, 'hello', 'this should fail since JavaScript takes both statements as equals');
        })
        
        it('Testing notStrictEqual() with "" and \'\'', function(){
            assert.notStrictEqual("hello", 'hello', 'this should fail since JavaScript uses "" and \'\' interchangeably');
        })
    })

    // The assert.deepEqual() method tests if two objects, and their child objects, are equal, using the == operator.
    describe('deepEqual()', function(){
        
        let x = { a : { n: 0 } };
        let y = { a : { n: 0 } };
        let z = { a : { n: 1 } };
        
        it('Testing deepEqual()', function(){
            
            assert.deepEqual(x, y);
        })
        
        it('Testing deepEqual()', function(){
            assert.deepEqual(x, z, 'this should fail since compared objects are not entirely equals');
        })

        it('Testing deepEqual() with JSON objects', function(){
            assert.deepEqual({ tea: 'green'}, { tea: 'green'});
        })

        it('Testing deepEqual() with math operations', function(){
            assert.deepEqual({ tea: 'green', value: [5 + 1]}, { tea: 'green', value: [4 + 2]});
        })

        it('Testing deepEqual() with string operations', function(){
            let part1 = 'gre', part2 = 'en';
            let obj = { tea: 'green', value: [`${part1}` + `${part2}`]};
            assert.deepEqual(obj, { tea: 'green', value: ["green"]}, 'this should pass???');
        })

        it("Testing deepEqual() with `` and ''", function(){
            assert.deepEqual(`hello`, 'hello', 'this should pass since JavaScript takes both statements as equals');
        })
        
        it('Testing deepEqual() with "" and \'\'', function(){
            assert.deepEqual("hello", 'hello', 'this should pass since JavaScript uses "" and \'\' interchangeably');
        })
    })

    // Asserts valueToCheck is strictly greater than (>) valueToBeAbove
    describe('isAbove()', function(){
        it('Testing isAbove()', function(){
            let auxi = 'this is a'.length;
            assert.isAbove(auxi, 4, 'length of string stored in auxi variable is bigger than number 4');
        })

        it('Testing isAbove()', function(){
            assert.isAbove(NaN, undefined, 'this should fail, NaN and undefined are not numbers');
        })

        it('Testing isAbove() with math operations', function(){
            assert.isAbove(5.1 + 5, 10, 'this should pass since first parameter ends up being bigger than second one');
        })

        it('Testing isAbove() to fail', function(){
            assert.isAbove(0.0000001, 0.0000002, 'this should fail since the first value is below the second one');
        })
        
        it('Testing isAbove() to pass', function(){
            assert.isAbove(7, 6.999999999, 'this should pass since first value is above than the second one');
        })
    })

    // Asserts that value is a function.
    describe('isFunction()', function testIsFunction(){
        it('Testing isFunction() to pass', function(){
            assert.isFunction(testIsFunction, 'yep, it is');
        })

        it('Testing isFunction() to fail', function(){
            let fakeFunction = {key: 1, data: 'goddamnit, carbs are freaking weakness of mine' };
            assert.isFunction(fakeFunction, 'it is not a function but an object');
        })
    })

    /* Asserts that value is an object of type ‘Object’ 
    (as revealed by Object.prototype.toString).
    The assertion does not match subclassed objects. */
    describe('isObject()', function(){
        it('Testing isObject() to pass', function(){
            let trueObject = {key: 1, data: 'I don\'t enjoy headaches'};
            assert.isObject(trueObject, 'yep, it is');
        })

        it('Testing isObject() to fail', function(){
            let fakeObject = NaN;
            assert.isObject(fakeObject, 'it is not an object');
        })
    })

    // Asserts that value is an instance of constructor.
/*     describe('instanceOf()', function(){
        it('Testing instanceOf() to pass', function(){
            let trueObject = {key: 1, data: 'I don\'t enjoy headaches'};
            assert.isObject(trueObject, 'yep, it is');
        })

        it('Testing instanceOf() to fail', function(){
            let fakeObject = NaN;
            assert.isObject(fakeObject, 'it is not an object');
        })
    }) */
})