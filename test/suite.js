/**
 * Copyright (c) 2010-2013 Juriy Zaytsev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Copyright (c) 2016 pre63
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export const run = () => {

  const report = [];

  //Object/array literal extensions
  //Getter accessors [-]
  (function () {
    return ({ get x() { return 1 } }).x === 1;
  })();

  //Setter accessors
  (function () {
    var value = 0;
    ({ set x(v) { value = v; } }).x = 1;
    return value === 1;
  })();


  //Trailing commas in object literals
  (function () {
    return { a: true, }.a === true;
  })();

  //Trailing commas in array literals
  (function () {
    return [1,].length === 1;
  })();

  //Reserved words as property names
  (function () {
    return ({ if: 1 }).if === 1;
  })();

  //Object static methods
  //Object.create
  (function () {
    return typeof Object.create == 'function';
  })();

  //Object.defineProperty
  (function () {
    return typeof Object.defineProperty == 'function';
  })();

  //Object.defineProperties
  (function () {
    return typeof Object.defineProperties == 'function';
  })();

  //Object.getPrototypeOf
  (function () {
    return typeof Object.getPrototypeOf == 'function';
  })();

  //Object.keys
  (function () {
    return typeof Object.keys == 'function';
  })();

  //Object.seal
  (function () {
    return typeof Object.seal == 'function';
  })();

  //Object.freeze
  (function () {
    return typeof Object.freeze == 'function';
  })();

  //Object.preventExtensions
  (function () {
    return typeof Object.preventExtensions == 'function';
  })();

  //Object.isSealed
  (function () {
    return typeof Object.isSealed == 'function';
  })();

  //Object.isFrozen
  (function () {
    return typeof Object.isFrozen == 'function';
  })();

  //Object.isExtensible
  (function () {
    return typeof Object.isExtensible == 'function';
  })();

  //Object.getOwnPropertyDescriptor
  (function () {
    return typeof Object.getOwnPropertyDescriptor == 'function';
  })();

  //Object.getOwnPropertyNames
  (function () {
    return typeof Object.getOwnPropertyNames == 'function';
  })();

  //Array methods
  //Array.isArray
  (function () {
    return typeof Array.isArray == 'function';
  })();

  //Array.prototype.indexOf
  (function () {
    return typeof Array.prototype.indexOf == 'function';
  })();

  //Array.prototype.lastIndexOf
  (function () {
    return typeof Array.prototype.lastIndexOf == 'function';
  })();

  //Array.prototype.every
  (function () {
    return typeof Array.prototype.every == 'function';
  })();

  //Array.prototype.some
  (function () {
    return typeof Array.prototype.some == 'function';
  })();

  //Array.prototype.forEach
  (function () {
    return typeof Array.prototype.forEach == 'function';
  })();

  //Array.prototype.map
  (function () {
    return typeof Array.prototype.map == 'function';
  })();

  //Array.prototype.filter
  (function () {
    return typeof Array.prototype.filter == 'function';
  })();

  //Array.prototype.reduce
  (function () {
    return typeof Array.prototype.reduce == 'function';
  })();

  //Array.prototype.reduceRight
  (function () {
    return typeof Array.prototype.reduceRight == 'function';
  })();

  //String properties and methods
  //Property access on strings
  (function () {
    return "foobar"[3] === "b";
  })();

  //String.prototype.trim
  (function () {
    return typeof String.prototype.trim == 'function';
  })();

  //Date methods
  //Date.prototype.toISOString
  (function () {
    return typeof Date.prototype.toISOString == 'function';
  })();

  //Date.now
  (function () {
    return typeof Date.now == 'function';
  })();

  //Date.prototype.toJSON
  (function () {
    try {
      return Date.prototype.toJSON.call(new Date(NaN)) === null;
    } catch (e) {
      return false;
    }
  })();

  //Function.prototype.bind

  (function () {
    return typeof Function.prototype.bind == 'function';
  })();

  //JSON

  (function () {
    return typeof JSON == 'object';
  })();

  //Immutable globals
  //undefined
  (function () {
    try {
      undefined = 12345;
      var result = typeof undefined == 'undefined';
      undefined = void 0;
      return result;
    } catch (error) {
      return true;
    }
  })();

  //NaN
  (function () {
    try {
      NaN = false;
      var result = typeof NaN == 'number';
      NaN = Math.sqrt(-1);
      return result;
    } catch (error) {
      return true;
    }
  })();

  //Infinity
  (function () {
    try {
      Infinity = false;
      var result = typeof Infinity == 'number';
      Infinity = 1 / 0;
      return result;
    } catch (error) {
      return true;
    }
  })();


  //Miscellaneous
  //Array.prototype.sort: compareFn must be function or undefined
  (function () {
    try {
      [1, 2].sort(null);
      return false;
    } catch (enull) { }
    try {
      [1, 2].sort(true);
      return false;
    } catch (etrue) { }
    try {
      [1, 2].sort({});
      return false;
    } catch (eobj) { }
    try {
      [1, 2].sort([]);
      return false;
    } catch (earr) { }
    try {
      [1, 2].sort(/a/g);
      return false;
    } catch (eregex) { }
    return true;
  })();

  //Array.prototype.sort: compareFn may be explicit undefined
  (function () {
    try {
      var arr = [2, 1];
      return arr.sort(undefined) === arr && arr[0] === 1 && arr[1] === 2;
    } catch (e) {
      return false;
    }
  })();

  //Function.prototype.apply permits array-likes
  (function () {
    return (function (a, b) { return a === 1 && b === 2; }).apply({}, { 0: 1, 1: 2, length: 2 });
  })();

  //parseInt ignores leading zeros
  (function () {
    return parseInt('010') === 10;
  })();

  //Function "prototype" property is non-enumerable
  (function () {
    return !Function().propertyIsEnumerable('prototype');
  })();

  //Arguments toStringTag is "Arguments"
  (function () {
    return (function () { return Object.prototype.toString.call(arguments) === '[object Arguments]'; } ());
  })();

  //Zero-width chars in identifiers
  (function () {
    var _\u200c\u200d = true;
    return _\u200c\u200d;
  })();

  //Unreserved words
  (function () {
    var abstract, boolean, byte, char, double, final, float, goto, int, long,
      native, short, synchronized, transient, volatile;
    return true;
  })();

  //Enumerable properties can be shadowed by non-enumerables
  (function () {
    var result = true;
    Object.prototype.length = 42;
    for (var i in Function) {
      if (i == 'length') {
        result = false;
      }
    }
    delete Object.prototype.length;
    return result;
  })();

  //Thrown functions have proper "this" values
  (function () {
    // try {
    //   throw function () { return !('a' in this); };
    // }
    // catch (e) {
    //   var a = true;
    //  // return e();
    // }
    report.push('Thrown functions have proper "this" values');
  })();

  //Strict mode
  //reserved words
  (function () {
    'use strict';
    var words = 'implements,interface,let,package,private,protected,public,static,yield'.split(',');
    for (var i = 0; i < 9; i += 1) {
      try { eval('var ' + words[i]); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    }
    return true;
  })();

  //"this" is undefined in functions
  (function () {
    'use strict';
    return this === undefined && (function () { return this === undefined; }).call();
  })();

  //"this" is not coerced to object in primitive methods
  (function () {
    'use strict';
    return (function () { return typeof this === 'string' }).call('')
      && (function () { return typeof this === 'number' }).call(1)
      && (function () { return typeof this === 'boolean' }).call(true);
  })();

  //"this" is not coerced to object in primitive accessors
  (function () {
    'use strict';

    function test(Class, instance) {
      Object.defineProperty(Class.prototype, 'test', {
        get: function () { passed = passed && this === instance; },
        set: function () { passed = passed && this === instance; },
        configurable: true
      });

      var passed = true;
      instance.test;
      instance.test = 42;
      return passed;
    }

    return test(String, '')
      && test(Number, 1)
      && test(Boolean, true);
  })();

  //legacy octal is a SyntaxError
  (function () {
    'use strict';
    try { eval('010'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('"\\010"'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    return true;
  })();

  //assignment to unresolvable identifiers is a ReferenceError
  (function () {
    'use strict';
    try { eval('__i_dont_exist = 1'); } catch (err) { return err instanceof ReferenceError; }
  })();

  //assignment to eval or arguments is a SyntaxError
  (function () {
    'use strict';
    try { eval('eval = 1'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('arguments = 1'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('eval++'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('arguments++'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    return true;
  })();

  //assignment to non-writable properties is a TypeError
  (function () {
    'use strict';
    try { Object.defineProperty({}, "x", { writable: false }).x = 1; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    try { Object.preventExtensions({}).x = 1; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    try { ({ get x() { } }).x = 1; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    try {
      (function f() { f = 123; })();
      ; return false;
    } catch (err) { if (!(err instanceof TypeError)) return false; }
    return true;
  })();

  //eval or arguments bindings is a SyntaxError
  (function () {
    'use strict';
    try { eval('var eval'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('var arguments'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('(function(eval){})'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('(function(arguments){})'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('try{}catch(eval){}'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    try { eval('try{}catch(arguments){}'); return false; } catch (err) { if (!(err instanceof SyntaxError)) return false; }
    return true;
  })();

  //arguments.caller and arguments.callee is a TypeError
  (function () {
    'use strict';
    try { arguments.caller; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    try { arguments.callee; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    return true;
  })();

  //(function(){}).caller and (function(){}).arguments is a TypeError
  (function () {
    'use strict';
    try { (function () { }).caller; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    try { (function () { }).arguments; return false; } catch (err) { if (!(err instanceof TypeError)) return false; }
    return true;
  })();

  //arguments is unmapped
  (function () {
    'use strict';
    return (function (x) {
      x = 2;
      return arguments[0] === 1;
    })(1) && (function (x) {
      arguments[0] = 2;
      return x === 1;
    })(1);
  })();

  //eval() can't create bindings
  (function () {
    'use strict';
    try { eval('var __some_unique_variable;'); __some_unique_variable; } catch (err) { return err instanceof ReferenceError; }
  })();

  //deleting bindings is a SyntaxError
  (function () {
    'use strict';
    try { eval('var x; delete x;'); } catch (err) { return err instanceof SyntaxError; }
  })();

  //deleting non-configurable properties is a TypeError
  (function () {
    'use strict';
    try { delete Object.prototype; } catch (err) { return err instanceof TypeError; }
  })();

  //"with" is a SyntaxError
  (function () {
    'use strict';
    try { eval('with({}){}'); } catch (err) { return err instanceof SyntaxError; }
  })();

  //repeated parameter names is a SyntaxError
  (function () {
    'use strict';
    try { eval('function f(x, x) { }'); } catch (err) { return err instanceof SyntaxError; }
  })();

  //function expressions with matching name and argument are valid
  (function () {
    var foo = function bar(bar) { 'use strict' };
    return typeof foo === 'function';
  })();

  //proper tail calls (tail call optimisation)
  //direct recursion
  (function () {
    // "use strict";
    // return (function f(n) {
    //   if (n <= 0) {
    //     return "foo";
    //   }
    //   return f(n - 1);
    // } (1e6)) === "foo";
    report.push('proper tail calls (tail call optimisation)');
  })();

  //mutual recursion
  (function () {
    // "use strict";
    // function f(n) {
    //   if (n <= 0) {
    //     return "foo";
    //   }
    //   return g(n - 1);
    // }
    // function g(n) {
    //   if (n <= 0) {
    //     return "bar";
    //   }
    //   return f(n - 1);
    // }
    // return f(1e6) === "foo" && f(1e6 + 1) === "bar";
    report.push('mutual recursion');
  })();

  //default function parameters
  //basic functionality
  (function () {
    return (function (a = 1, b = 2) { return a === 3 && b === 2; } (3));
  })();

  //explicit undefined defers to the default
  (function () {
    return (function (a = 1, b = 2) { return a === 1 && b === 3; } (undefined, 3));
  })();

  //defaults can refer to previous params
  (function () {
    return (function (a, b = a) { return b === 5; } (5));
  })();

  //arguments object interaction
  (function () {
    return (function (a = "baz", b = "qux", c = "quux") {
      a = "corge";
      // The arguments object is not mapped to the
      // parameters, even outside of strict mode.
      return arguments.length === 2
        && arguments[0] === "foo"
        && arguments[1] === "bar";
    } ("foo", "bar"));
  })();

  //temporal dead zone
  (function () {
    return (function (x = 1) {
      try {
        eval("(function(a=a){}())");
        return false;
      } catch (e) { }
      try {
        eval("(function(a=b,b){}())");
        return false;
      } catch (e) { }
      return true;
    } ());
  })();

  //separate scope
  (function () {
    return (function (a = function () {
      return typeof b === 'undefined';
    }) {
      var b = 1;
      return a();
    } ());
  })();

  //new Function() support
  (function () {
    return new Function("a = 1", "b = 2",
      "return a === 3 && b === 2;"
    )(3);
  })();

  //rest parameters
  //basic functionality
  (function () {
    return (function (foo, ...args) {
      return args instanceof Array && args + "" === "bar,baz";
    } ("foo", "bar", "baz"));
  })();

  //function 'length' property
  (function () {
    return function (a, ...b) { }.length === 1 && function (...c) { }.length === 0;
  })();

  //arguments object interaction
  (function () {
    return (function (foo, ...args) {
      foo = "qux";
      // The arguments object is not mapped to the
      // parameters, even outside of strict mode.
      return arguments.length === 3
        && arguments[0] === "foo"
        && arguments[1] === "bar"
        && arguments[2] === "baz";
    } ("foo", "bar", "baz"));
  })();

  //can't be used in setters
  (function () {
    return (function (...args) {
      try {
        eval("({set e(...args){}})");
      } catch (e) {
        return true;
      }
    } ());
  })();

  //new Function() support
  (function () {
    return new Function("a", "...b",
      "return b instanceof Array && a+b === 'foobar,baz';"
    )('foo', 'bar', 'baz');
  })();

  //spread (...) operator
  //with arrays, in function calls
  (function () {
    return Math.max(...[1, 2, 3]) === 3
  })();

  //with arrays, in array literals
  (function () {
    return [...[1, 2, 3]][2] === 3;
  })();

  //with sparse arrays, in function calls
  (function () {
    var a = Array(...[, ,]);
    return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
  })();

  //with sparse arrays, in array literals
  (function () {
    var a = [...[, ,]];
    return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
  })();

  //with strings, in function calls
  (function () {
    return Math.max(..."1234") === 4;
  })();

  //with strings, in array literals
  (function () {
    return ["a", ..."bcd", "e"][3] === "d";
  })();

  //with astral plane strings, in function calls
  (function () {
    return Array(..."𠮷𠮶")[0] === "𠮷";
  })();

  //with astral plane strings, in array literals
  (function () {
    return [..."𠮷𠮶"][0] === "𠮷";
  })();

  //with generator instances, in calls
  (function () {
    var iterable = (function* () { yield 1; yield 2; yield 3; } ());
    return Math.max(...iterable) === 3;
  })();

  //with generator instances, in arrays
  (function () {
    var iterable = (function* () { yield "b"; yield "c"; yield "d"; } ());
    return ["a", ...iterable, "e"][3] === "d";
  })();

  //with generic iterables, in calls
  report.push('with generic iterables, in calls');

  (function () {
    // var iterable = global.__createIterableObject([1, 2, 3]);
    // return Math.max(...iterable) === 3;
  })();

  //with generic iterables, in arrays
  (function () {
    // var iterable = global.__createIterableObject(["b", "c", "d"]);
    // return ["a", ...iterable, "e"][3] === "d";
  })();

  //with instances of iterables, in calls
  (function () {
    // var iterable = global.__createIterableObject([1, 2, 3]);
    // return Math.max(...Object.create(iterable)) === 3;
  })();

  //with instances of iterables, in arrays
  (function () {
    // var iterable = global.__createIterableObject(["b", "c", "d"]);
    // return ["a", ...Object.create(iterable), "e"][3] === "d";
  })();

  //spreading non-iterables is a runtime error
  (function () {
    try {
      Math.max(...2);
    } catch (e) {
      return Math.max(...[1, 2, 3]) === 3;
    }
  })();

  //object literal extensions
  //computed properties
  (function () {
    var x = 'y';
    return ({ [x]: 1 }).y === 1;
  })();

  //shorthand properties
  (function () {
    var a = 7, b = 8, c = { a, b };
    return c.a === 7 && c.b === 8;
  })();

  //shorthand methods
  (function () {
    return ({ y() { return 2; } }).y() === 2;
  })();

  //string-keyed shorthand methods
  (function () {
    return ({ "foo bar"() { return 4; } })["foo bar"]() === 4;
  })();

  //computed shorthand methods
  (function () {
    var x = 'y';
    return ({ [x]() { return 1 } }).y() === 1;
  })();

  //computed accessors
  (function () {
    var x = 'y',
      valueSet,
      obj = {
        get [x]() { return 1 },
        set [x](value) { valueSet = value }
      };
    obj.y = 'foo';
    return obj.y === 1 && valueSet === 'foo';
  })();

  //for..of loops
  //with arrays
  (function () {
    var arr = [5];
    for (var item of arr)
      return item === 5;
  })();

  //with sparse arrays
  (function () {
    var arr = [, ,];
    var count = 0;
    for (var item of arr)
      count += (item === undefined);
    return count === 2;
  })();

  //with strings
  (function () {
    var str = "";
    for (var item of "foo")
      str += item;
    return str === "foo";
  })();

  //with astral plane strings
  (function () {
    var str = "";
    for (var item of "𠮷𠮶")
      str += item + " ";
    return str === "𠮷 𠮶 ";
  })();

  //with generator instances
  (function () {
    var result = "";
    var iterable = (function* () { yield 1; yield 2; yield 3; } ());
    for (var item of iterable) {
      result += item;
    }
    return result === "123";
  })();

  //with generic iterables
  (function () {
    // var result = "";
    // var iterable = global.__createIterableObject([1, 2, 3]);
    // for (var item of iterable) {
    //   result += item;
    // }
    // return result === "123";
    report.push('with generic iterables');
  })();

  //with instances of generic iterables
  (function () {
    // var result = "";
    // var iterable = global.__createIterableObject([1, 2, 3]);
    // for (var item of Object.create(iterable)) {
    //   result += item;
    // }
    // return result === "123";
    report.push('with instances of generic iterables');
  })();

  //iterator closing, break
  (function () {
    // var closed = false;
    // var iter = __createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // for (var it of iter) break;
    // return closed;
    report.push('iterator closing, break');
  })();

  //iterator closing, throw
  (function () {
    // var closed = false;
    // var iter = __createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // try {
    //   for (var it of iter) throw 0;
    // } catch (e) { }
    // return closed;
    report.push('iterator closing, throw');
  })();

  //octal and binary literals
  //octal literals
  (function () {
    return 0o10 === 8 && 0O10 === 8;
  })();

  //binary literals
  (function () {
    return 0b10 === 2 && 0B10 === 2;
  })();

  //octal supported by Number()
  (function () {
    return Number('0o1') === 1;
  })();

  //binary supported by Number()
  (function () {
    return Number('0b1') === 1;
  })();

  //template literals
  //basic functionality
  (function () {
    var a = "ba", b = "QUX";
    return `foo bar
            ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
  })();

  //toString conversion
  (function () {
    var a = {
      toString: function () { return "foo"; },
      valueOf: function () { return "bar"; },
    };
    return `${a}` === "foo";
  })();

  //tagged template literals
  (function () {
    var called = false;
    function fn(parts, a, b) {
      called = true;
      return parts instanceof Array &&
        parts[0] === "foo" &&
        parts[1] === "bar\n" &&
        parts.raw[0] === "foo" &&
        parts.raw[1] === "bar\\n" &&
        a === 123 &&
        b === 456;
    }
    return fn`foo${123}bar\n${456}` && called;
  })();

  //passed array is frozen
  (function () {
    return (function (parts) {
      return Object.isFrozen(parts) && Object.isFrozen(parts.raw);
    }) `foo${0}bar${0}baz`;
  })();

  //line break normalisation
  (function () {
    var cr = eval("`x" + String.fromCharCode(13) + "y`");
    var lf = eval("`x" + String.fromCharCode(10) + "y`");
    var crlf = eval("`x" + String.fromCharCode(13, 10) + "y`");

    return cr.length === 3 && lf.length === 3 && crlf.length === 3
      && cr[1] === lf[1] && lf[1] === crlf[1] && crlf[1] === '\n';
  })();

  //RegExp "y" and "u" flags
  //"y" flag
  (function () {
    var re = new RegExp('\\w', 'y');
    re.exec('xy');
    return (re.exec('xy')[0] === 'y');
  })();

  //"y" flag, lastIndex
  (function () {
    var re = new RegExp('yy', 'y');
    re.lastIndex = 3;
    var result = re.exec('xxxyyxx')[0];
    return result === 'yy' && re.lastIndex === 5;
  })();

  //"u" flag
  (function () {
    return "𠮷".match(/^.$/u)[0].length === 2;
  })();

  //"u" flag, Unicode code point escapes
  (function () {
    return "𝌆".match(/\u{1d306}/u)[0].length === 2;
  })();

  //"u" flag, case folding
  (function () {
    return "ſ".match(/S/iu) && "S".match(/ſ/iu);
  })();

  //destructuring, declarations
  //with arrays
  (function () {
    var [a, , [b], c] = [5, null, [6]];
    return a === 5 && b === 6 && c === undefined;
  })();

  //with sparse arrays
  (function () {
    var [a, , b] = [, , ,];
    return a === undefined && b === undefined;
  })();

  //with strings
  (function () {
    var [a, b, c] = "ab";
    return a === "a" && b === "b" && c === undefined;
  })();

  //with astral plane strings
  (function () {
    var [c] = "𠮷𠮶";
    return c === "𠮷";
  })();

  //with generator instances
  (function () {
    var [a, b, c] = (function* () { yield 1; yield 2; } ());
    return a === 1 && b === 2 && c === undefined;
  })();

  //with generic iterables
  (function () {
    // var [a, b, c] = global.__createIterableObject([1, 2]);
    // return a === 1 && b === 2 && c === undefined;
  })();

  //with instances of generic iterables
  (function () {
    // var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
    // return a === 1 && b === 2 && c === undefined;
    report.push('with instances of generic iterables');
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // var [a, b] = iter;
    // return closed;
    report.push('iterator closing');
  })();

  //trailing commas in iterable patterns
  (function () {
    var [a,] = [1];
    return a === 1;
  })();

  //with objects
  (function () {
    var {c, x: d, e} = { c: 7, x: 8 };
    return c === 7 && d === 8 && e === undefined;
  })();

  //object destructuring with primitives
  (function () {
    var {toFixed} = 2;
    var {slice} = '';
    return toFixed === Number.prototype.toFixed
      && slice === String.prototype.slice;
  })();

  //trailing commas in object patterns
  (function () {
    var {a, } = { a: 1 };
    return a === 1;
  })();

  //throws on null and undefined
  (function () {
    try {
      var {a} = null;
      return false;
    } catch (e) {
      if (!(e instanceof TypeError))
        return false;
    }
    try {
      var {b} = undefined;
      return false;
    } catch (e) {
      if (!(e instanceof TypeError))
        return false;
    }
    return true;
  })();

  //computed properties
  (function () {
    var qux = "corge";
    var {[qux]: grault } = { corge: "garply" };
    return grault === "garply";
  })();

  //multiples in a single var statement
  (function () {
    var [a, b] = [5, 6], {c, d} = { c: 7, d: 8 };
    return a === 5 && b === 6 && c === 7 && d === 8;
  })();

  //nested
  (function () {
    var [e, {x: f, g}] = [9, { x: 10 }];
    var {h, x: [i]} = { h: 11, x: [12] };
    return e === 9 && f === 10 && g === undefined
      && h === 11 && i === 12;
  })();

  //in for-in loop heads
  (function () {
    for (var [i, j, k] in { qux: 1 }) {
      return i === "q" && j === "u" && k === "x";
    }
  })();

  //in for-of loop heads
  (function () {
    for (var [i, j, k] of [[1, 2, 3]]) {
      return i === 1 && j === 2 && k === 3;
    }
  })();

  //in catch heads
  (function () {
    try {
      throw [1, 2];
    } catch ([i, j]) {
      try {
        throw { k: 3, l: 4 };
      } catch ({k, l}) {
        return i === 1 && j === 2 && k === 3 && l === 4;
      }
    }
  })();

  //rest
  (function () {
    var [a, ...b] = [3, 4, 5];
    var [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
      c === 6 && d instanceof Array && d.length === 0;
  })();

  //defaults
  (function () {
    var {a = 1, b = 0, z: c = 3} = { b: 2, z: undefined };
    var [d = 0, e = 5, f = 6] = [4, , undefined];
    return a === 1 && b === 2 && c === 3
      && d === 4 && e === 5 && f === 6;
  })();

  //defaults, let temporal dead zone
  (function () {
    var {a, b = 2} = { a: 1 };
    try {
      eval("let {c = c} = {};");
      return false;
    } catch (e) { }
    try {
      eval("let {c = d, d} = {d:1};");
      return false;
    } catch (e) { }
    return a === 1 && b === 2;
  })();

  //destructuring, assignment
  //with arrays
  (function () {
    var a, b, c;
    [a, , [b], c] = [5, null, [6]];
    return a === 5 && b === 6 && c === undefined;
  })();

  //with sparse arrays
  (function () {
    var a, b;
    [a, , b] = [, , ,];
    return a === undefined && b === undefined;
  })();

  //with strings
  (function () {
    var a, b, c;
    [a, b, c] = "ab";
    return a === "a" && b === "b" && c === undefined;
  })();

  //with astral plane strings
  (function () {
    var c;
    [c] = "𠮷𠮶";
    return c === "𠮷";
  })();

  //with generator instances
  (function () {
    var a, b, c;
    [a, b, c] = (function* () { yield 1; yield 2; } ());
    return a === 1 && b === 2 && c === undefined;
  })();

  //with generic iterables
  (function () {
    // var a, b, c;
    // [a, b, c] = global.__createIterableObject([1, 2]);
    // return a === 1 && b === 2 && c === undefined;
    report.push('with generic iterables');
  })();

  //with instances of generic iterables
  (function () {
    // var a, b, c;
    // [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
    // return a === 1 && b === 2 && c === undefined;
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // var a, b;
    // [a, b] = iter;
    // return closed;
  })();

  //iterable destructuring expression
  (function () {
    var a, b, iterable = [1, 2];
    return ([a, b] = iterable) === iterable;
  })();

  //chained iterable destructuring
  (function () {
    var a, b, c, d;
    [a, b] = [c, d] = [1, 2];
    return a === 1 && b === 2 && c === 1 && d === 2;
  })();

  //trailing commas in iterable patterns
  (function () {
    var a;
    [a,] = [1];
    return a === 1;
  })();

  //with objects
  (function () {
    var c, d, e;
    ({ c, x: d, e } = { c: 7, x: 8 });
    return c === 7 && d === 8 && e === undefined;
  })();

  //object destructuring with primitives
  (function () {
    var toFixed, slice;
    ({ toFixed } = 2);
    ({ slice } = '');
    return toFixed === Number.prototype.toFixed
      && slice === String.prototype.slice;
  })();

  //trailing commas in object patterns
  (function () {
    var a;
    ({ a, } = { a: 1 });
    return a === 1;
  })();

  //object destructuring expression
  (function () {
    var a, b, obj = { a: 1, b: 2 };
    return ({ a, b } = obj) === obj;
  })();

  //parenthesised left-hand-side is a syntax error
  (function () {
    var a, b;
    ({ a, b } = { a: 1, b: 2 });
    try {
      eval("({a,b}) = {a:3,b:4};");
    }
    catch (e) {
      return a === 1 && b === 2;
    }
  })();

  //chained object destructuring
  (function () {
    var a, b, c, d;
    ({ a, b } = { c, d } = { a: 1, b: 2, c: 3, d: 4 });
    return a === 1 && b === 2 && c === 3 && d === 4;
  })();

  //throws on null and undefined
  (function () {
    var a, b;
    try {
      ({ a } = null);
      return false;
    } catch (e) {
      if (!(e instanceof TypeError))
        return false;
    }
    try {
      ({ b } = undefined);
      return false;
    } catch (e) {
      if (!(e instanceof TypeError))
        return false;
    }
    return true;
  })();

  //computed properties
  (function () {
    var grault, qux = "corge";
    ({ [qux]: grault } = { corge: "garply" });
    return grault === "garply";
  })();

  //nested
  (function () {
    var e, f, g, h, i;
    [e, { x: f, g }] = [9, { x: 10 }];
    ({ h, x: [i] } = { h: 11, x: [12] });
    return e === 9 && f === 10 && g === undefined
      && h === 11 && i === 12;
  })();

  //rest
  (function () {
    var a, b, c, d;
    [a, ...b] = [3, 4, 5];
    [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
      c === 6 && d instanceof Array && d.length === 0;
  })();

  //nested rest
  (function () {
    var a = [1, 2, 3], first, last;
    [first, ...[a[2], last]] = a;
    return first === 1 && last === 3 && (a + "") === "1,2,2";
  })();

  //empty patterns
  (function () {
    [] = [1, 2];
    ({} = { a: 1, b: 2 });
    return true;
  })();

  //defaults
  (function () {
    var a, b, c, d, e, f;
    ({ a = 1, b = 0, z: c = 3 } = { b: 2, z: undefined });
    [d = 0, e = 5, f = 6] = [4, , undefined];
    return a === 1 && b === 2 && c === 3
      && d === 4 && e === 5 && f === 6;
  })();

  //destructuring, parameters
  //with arrays
  (function () {
    return function ([a, , [b], c]) {
      return a === 5 && b === 6 && c === undefined;
    } ([5, null, [6]]);
  })();

  //with sparse arrays
  (function () {
    return function ([a, , b]) {
      return a === undefined && b === undefined;
    } ([, , ,]);
  })();

  //with strings
  (function () {
    return function ([a, b, c]) {
      return a === "a" && b === "b" && c === undefined;
    } ("ab");
  })();

  //with astral plane strings
  (function () {
    return function ([c]) {
      return c === "𠮷";
    } ("𠮷𠮶");
  })();

  //with generator instances
  (function () {
    return function ([a, b, c]) {
      return a === 1 && b === 2 && c === undefined;
    } (function* () { yield 1; yield 2; } ());
  })();

  //with generic iterables
  (function () {
    // return function ([a, b, c]) {
    //   return a === 1 && b === 2 && c === undefined;
    // } (global.__createIterableObject([1, 2]));
  })();

  //with instances of generic iterables
  (function () {
    // return function ([a, b, c]) {
    //   return a === 1 && b === 2 && c === undefined;
    // } (Object.create(global.__createIterableObject([1, 2])));
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // (function ([a, b]) { } (iter));
    // return closed;
  })();

  //trailing commas in iterable patterns
  (function () {
    return function ([a,]) {
      return a === 1;
    } ([1]);
  })();

  //with objects
  (function () {
    return function ({c, x: d, e}) {
      return c === 7 && d === 8 && e === undefined;
    } ({ c: 7, x: 8 });
  })();

  //object destructuring with primitives
  (function () {
    return function ({toFixed}, {slice}) {
      return toFixed === Number.prototype.toFixed
        && slice === String.prototype.slice;
    } (2, '');
  })();

  //trailing commas in object patterns
  (function () {
    return function ({a, }) {
      return a === 1;
    } ({ a: 1 });
  })();

  //throws on null and undefined
  (function () {
    try {
      (function ({a}) { } (null));
      return false;
    } catch (e) { }
    try {
      (function ({b}) { } (undefined));
      return false;
    } catch (e) { }
    return true;
  })();

  //computed properties
  (function () {
    var qux = "corge";
    return function ({[qux]: grault }) {
      return grault === "garply";
    } ({ corge: "garply" });
  })();

  //nested
  (function () {
    return function ([e, {x: f, g}], {h, x: [i]}) {
      return e === 9 && f === 10 && g === undefined
        && h === 11 && i === 12;
    } ([9, { x: 10 }], { h: 11, x: [12] });
  })();

  //'arguments' interaction
  (function () {
    return (function ({a, x: b, y: e}, [c, d]) {
      return arguments[0].a === 1 && arguments[0].x === 2
        && !("y" in arguments[0]) && arguments[1] + '' === "3,4";
    } ({ a: 1, x: 2 }, [3, 4]));
  })();

  //new Function() support
  (function () {
    return new Function("{a, x:b, y:e}", "[c, d]",
      "return a === 1 && b === 2 && c === 3 && "
      + "d === 4 && e === undefined;"
    )({ a: 1, x: 2 }, [3, 4]);
  })();

  //in parameters, function 'length' property
  (function () {
    return function ({a, b}, [c, d]) { }.length === 2;
  })();

  //rest
  (function () {
    return function ([a, ...b], [c, ...d]) {
      return a === 3 && b instanceof Array && (b + "") === "4,5" &&
        c === 6 && d instanceof Array && d.length === 0;
    } ([3, 4, 5], [6]);
  })();

  //empty patterns
  (function () {
    return function ([], {}) {
      return arguments[0] + '' === "3,4" && arguments[1].x === "foo";
    } ([3, 4], { x: "foo" });
  })();

  //defaults
  (function () {
    return (function ({a = 1, b = 0, c = 3, x: d = 0, y: e = 5},
      [f = 6, g = 0, h = 8]) {
      return a === 1 && b === 2 && c === 3 && d === 4 &&
        e === 5 && f === 6 && g === 7 && h === 8;
    } ({ b: 2, c: undefined, x: 4 }, [, 7, undefined]));
  })();

  //defaults, separate scope
  (function () {
    return (function ({a = function () {
      return typeof b === 'undefined';
    } }) {
      var b = 1;
      return a();
    } ({}));
  })();

  //defaults, new Function() support
  (function () {
    return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}",
      "return a === 1 && b === 2 && c === 3 && d === 4 && e === 5;"
    )({ b: 2, c: undefined, x: 4 });
  })();

  //Unicode code point escapes
  //in strings
  (function () {
    return '\u{1d306}' == '\ud834\udf06';
  })();

  //in identifiers
  (function () {
    // var \u{102C0} = { \u{102C0} : 2 };
    // return \u{102C0} ['\ud800\udec0'] === 2;
  })();

  //new.target
  report.push('new.target');
  //in constructors
  (function () {
    // var passed = false;
    // new function f() {
    //   passed = (new.target === f);
    // } ();
    // (function () {
    //   passed &= (new.target === undefined);
    // } ());
    // return passed;
  })();

  //assignment is an early error
  (function () {
    // var passed = false;
    // new function f() {
    //   passed = (new.target === f);
    // } ();

    // try {
    //   Function("new.target = function(){};");
    // } catch (e) {
    //   return passed;
    // }
  })();

  //const
  //basic support
  (function () {
    const foo = 123;
    return (foo === 123);
  })();

  //is block-scoped
  (function () {
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
  })();

  //cannot be in statements
  (function () {
    const bar = 1;
    try {
      Function("if(true) const baz = 1;")();
    } catch (e) {
      return true;
    }
  })();

  //redefining a const is an error
  (function () {
    const baz = 1;
    try {
      Function("const foo = 1; foo = 2;")();
    } catch (e) {
      return true;
    }
  })();

  //for loop statement scope
  (function () {
    const baz = 1;
    for (const baz = 0; false;) { }
    return baz === 1;
  })();

  //for-in loop iteration scope
  (function () {
    var scopes = [];
    for (const i in { a: 1, b: 1 }) {
      scopes.push(function () { return i; });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
  })();

  //for-of loop iteration scope
  (function () {
    var scopes = [];
    for (const i of ['a', 'b']) {
      scopes.push(function () { return i; });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
  })();

  //temporal dead zone
  (function () {
    var passed = (function () { try { qux; } catch (e) { return true; } } ());
    function fn() { passed &= qux === 456; }
    const qux = 456;
    fn();
    return passed;
  })();

  //basic support (strict mode)
  (function () {
    "use strict";
    const foo = 123;
    return (foo === 123);
  })();

  //is block-scoped (strict mode)
  (function () {
    'use strict';
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
  })();

  //cannot be in statements (strict mode)
  (function () {
    'use strict';
    const bar = 1;
    try {
      Function("'use strict'; if(true) const baz = 1;")();
    } catch (e) {
      return true;
    }
  })();

  //redefining a const (strict mode)
  (function () {
    'use strict';
    const baz = 1;
    try {
      Function("'use strict'; const foo = 1; foo = 2;")();
    } catch (e) {
      return true;
    }
  })();

  //for loop statement scope (strict mode)
  (function () {
    'use strict';
    const baz = 1;
    for (const baz = 0; false;) { }
    return baz === 1;
  })();

  //for-in loop iteration scope (strict mode)
  (function () {
    'use strict';
    var scopes = [];
    for (const i in { a: 1, b: 1 }) {
      scopes.push(function () { return i; });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
  })();

  //for-of loop iteration scope (strict mode)
  (function () {
    'use strict';
    var scopes = [];
    for (const i of ['a', 'b']) {
      scopes.push(function () { return i; });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
  })();

  //temporal dead zone (strict mode)
  (function () {
    'use strict';
    var passed = (function () { try { qux; } catch (e) { return true; } } ());
    function fn() { passed &= qux === 456; }
    const qux = 456;
    fn();
    return passed;
  })();

  //let
  //basic support
  (function () {
    let foo = 123;
    return (foo === 123);
  })();

  //is block-scoped
  (function () {
    let bar = 123;
    { let bar = 456; }
    return bar === 123;
  })();

  //cannot be in statements
  (function () {
    let bar = 1;
    try {
      Function("if(true) let baz = 1;")();
    } catch (e) {
      return true;
    }
  })();

  //for loop statement scope
  (function () {
    let baz = 1;
    for (let baz = 0; false;) { }
    return baz === 1;
  })();

  //temporal dead zone
  (function () {
    var passed = (function () { try { qux; } catch (e) { return true; } } ());
    function fn() { passed &= qux === 456; }
    let qux = 456;
    fn();
    return passed;
  })();

  //for/for-in loop iteration scope
  (function () {
    let scopes = [];
    for (let i = 0; i < 2; i++) {
      scopes.push(function () { return i; });
    }
    let passed = (scopes[0]() === 0 && scopes[1]() === 1);

    scopes = [];
    for (let i in { a: 1, b: 1 }) {
      scopes.push(function () { return i; });
    }
    passed &= (scopes[0]() === "a" && scopes[1]() === "b");
    return passed;
  })();

  //basic support (strict mode)
  (function () {
    'use strict';
    let foo = 123;
    return (foo === 123);
  })();

  //is block-scoped (strict mode)
  (function () {
    'use strict';
    let bar = 123;
    { let bar = 456; }
    return bar === 123;
  })();

  //cannot be in statements (strict mode)
  (function () {
    'use strict';
    let bar = 1;
    try {
      Function("'use strict'; if(true) let baz = 1;")();
    } catch (e) {
      return true;
    }
  })();

  //for loop statement scope (strict mode)
  (function () {
    'use strict';
    let baz = 1;
    for (let baz = 0; false;) { }
    return baz === 1;
  })();

  //temporal dead zone (strict mode)
  (function () {
    'use strict';
    var passed = (function () { try { qux; } catch (e) { return true; } } ());
    function fn() { passed &= qux === 456; }
    let qux = 456;
    fn();
    return passed;
  })();

  //for/for-in loop iteration scope (strict mode)
  (function () {
    'use strict';
    let scopes = [];
    for (let i = 0; i < 2; i++) {
      scopes.push(function () { return i; });
    }
    let passed = (scopes[0]() === 0 && scopes[1]() === 1);

    scopes = [];
    for (let i in { a: 1, b: 1 }) {
      scopes.push(function () { return i; });
    }
    passed &= (scopes[0]() === "a" && scopes[1]() === "b");
    return passed;
  })();

  //block-level function declaration
  //arrow functions
  //0 parameters
  (function () {
    return (() => 5)() === 5;
  })();

  //1 parameter, no brackets
  (function () {
    var b = x => x + "foo";
    return (b("fee fie foe ") === "fee fie foe foo");
  })();

  //multiple parameters
  (function () {
    var c = (v, w, x, y, z) => "" + v + w + x + y + z;
    return (c(6, 5, 4, 3, 2) === "65432");
  })();

  //lexical "this" binding
  (function () {
    var d = { x: "bar", y: function () { return z => this.x + z; } }.y();
    var e = { x: "baz", y: d };
    return d("ley") === "barley" && e.y("ley") === "barley";
  })();

  //"this" unchanged by call or apply
  (function () {
    var d = { x: "foo", y: function () { return () => this.x; } };
    var e = { x: "bar" };
    return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
  })();

  //can't be bound, can be curried
  (function () {
    var d = { x: "bar", y: function () { return z => this.x + z; } };
    var e = { x: "baz" };
    return d.y().bind(e, "ley")() === "barley";
  })();

  //lexical "arguments" binding
  (function () {
    var f = (function () { return z => arguments[0]; } (5));
    return f(6) === 5;
  })();

  //no line break between params and =>
  (function () {
    return (() => {
      try { Function("x\n => 2")(); } catch (e) { return true; }
    })();
    ;
  })();

  //correct precedence
  (function () {
    return (() => {
      try { Function("0 || () => 2")(); } catch (e) { return true; }
    })();
    ;
  })();

  //no "prototype" property
  (function () {
    var a = () => 5;
    return !a.hasOwnProperty("prototype");
  })();

  //lexical "super" binding in constructors
  (function () {
    // "use strict";
    // var received;

    // class B {
    //   constructor(arg) {
    //     received = arg;
    //   }
    // }
    // class C extends B {
    //   constructor() {
    //     var callSuper = () => super('foo');
    //     callSuper();
    //   }
    // }
    // return new C instanceof C && received === 'foo';
    report.push('lexical "super" binding in constructors');
  })();

  //lexical "super" binding in methods
  (function () {
    class B {
      qux() {
        return "quux";
      }
    }
    class C extends B {
      baz() {
        return x => super.qux();
      }
    }
    var arrow = new C().baz();
    return arrow() === "quux";
  })();

  //lexical "new.target" binding
  (function () {
    // function C() {
    //   return x => new.target;
    // }
    // return new C()() === C && C()() === undefined;
  })();

  //class
  //class statement
  (function () {
    "use strict";
    class C { }
    return typeof C === "function";
  })();

  //is block-scoped
  (function () {
    "use strict";
    class C { }
    var c1 = C;
    {
      class C { }
      var c2 = C;
    }
    return C === c1;
  })();

  //class expression
  (function () {
    "use strict";
    return typeof class C { } === "function";
  })();

  //anonymous class
  (function () {
    "use strict";
    return typeof class { } === "function";
  })();

  //constructor
  (function () {
    "use strict";
    class C {
      constructor() { this.x = 1; }
    }
    return C.prototype.constructor === C
      && new C().x === 1;
  })();

  //prototype methods
  (function () {
    "use strict";
    class C {
      method() { return 2; }
    }
    return typeof C.prototype.method === "function"
      && new C().method() === 2;
  })();

  //string-keyed methods
  (function () {
    "use strict";
    class C {
      "foo bar"() { return 2; }
    }
    return typeof C.prototype["foo bar"] === "function"
      && new C()["foo bar"]() === 2;
  })();

  //computed prototype methods
  (function () {
    "use strict";
    var foo = "method";
    class C {
      [foo]() { return 2; }
    }
    return typeof C.prototype.method === "function"
      && new C().method() === 2;
  })();

  //optional semicolons
  (function () {
    "use strict";
    class C {
      ;
      method() { return 2; };
      method2() { return 2; }
      method3() { return 2; };
    }
    return typeof C.prototype.method === "function"
      && typeof C.prototype.method2 === "function"
      && typeof C.prototype.method3 === "function";
  })();

  //static methods
  (function () {
    "use strict";
    class C {
      static method() { return 3; }
    }
    return typeof C.method === "function"
      && C.method() === 3;
  })();

  //computed static methods
  (function () {
    "use strict";
    var foo = "method";
    class C {
      static [foo]() { return 3; }
    }
    return typeof C.method === "function"
      && C.method() === 3;
  })();

  //accessor properties
  (function () {
    "use strict";
    var baz = false;
    class C {
      get foo() { return "foo"; }
      set bar(x) { baz = x; }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
  })();

  //computed accessor properties
  (function () {
    "use strict";
    var garply = "foo", grault = "bar", baz = false;
    class C {
      get [garply]() { return "foo"; }
      set [grault](x) { baz = x; }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
  })();

  //static accessor properties
  (function () {
    "use strict";
    var baz = false;
    class C {
      static get foo() { return "foo"; }
      static set bar(x) { baz = x; }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
  })();

  //computed static accessor properties
  (function () {
    "use strict";
    var garply = "foo", grault = "bar", baz = false;
    class C {
      static get [garply]() { return "foo"; }
      static set [grault](x) { baz = x; }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
  })();

  //class name is lexically scoped
  (function () {
    "use strict";
    class C {
      method() { return typeof C === "function"; }
    }
    var M = C.prototype.method;
    C = undefined;
    return C === undefined && M();
  })();

  //computed names, temporal dead zone
  (function () {
    "use strict";
    try {
      var B = class C {
        [C]() { }
      }
    } catch (e) {
      return true;
    }
  })();

  //methods aren't enumerable
  (function () {
    "use strict";
    class C {
      foo() { }
      static bar() { }
    }
    return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
  })();

  //implicit strict mode
  (function () {
    "use strict";
    class C {
      static method() { return this === undefined; }
    }
    return (0, C.method)();
  })();

  //constructor requires new
  (function () {
    "use strict";
    class C { }
    try {
      C();
    }
    catch (e) {
      return true;
    }
  })();

  //extends
  (function () {
    "use strict";
    class B { }
    class C extends B { }
    return new C() instanceof B
      && B.isPrototypeOf(C);
  })();

  //extends expressions
  (function () {
    "use strict";
    var B;
    class C extends (B = class { }) { }
    return new C() instanceof B
      && B.isPrototypeOf(C);
  })();

  //extends null
  (function () {
    class C extends null {
      constructor() {
        super();
        return Object.create(null);
      }
    }
    return Function.prototype.isPrototypeOf(C)
      && Object.getPrototypeOf(C.prototype) === null;
  })();

  //new.target
  report.push('new.target');
  (function () {
    // var passed = false;
    // new function f() {
    //   passed = new.target === f;
    // } ();

    // class A {
    //   constructor() {
    //     passed &= new.target === B;
    //   }
    // }
    // class B extends A { }
    // new B();
    // return passed;
  })();

  //super
  //statement in constructors
  (function () {
    "use strict";
    var passed = false;
    class B {
      constructor(a) { passed = (a === "barbaz"); }
    }
    class C extends B {
      constructor(a) { super("bar" + a); }
    }
    new C("baz");
    return passed;
  })();

  //expression in constructors
  (function () {
    "use strict";
    class B {
      constructor(a) { return ["foo" + a]; }
    }
    class C extends B {
      constructor(a) { return super("bar" + a); }
    }
    return new C("baz")[0] === "foobarbaz";
  })();

  //in methods, property access
  (function () {
    "use strict";
    class B { }
    B.prototype.qux = "foo";
    B.prototype.corge = "baz";
    class C extends B {
      quux(a) { return super.qux + a + super["corge"]; }
    }
    C.prototype.qux = "garply";
    return new C().quux("bar") === "foobarbaz";
  })();

  //in methods, method calls
  (function () {
    "use strict";
    class B {
      qux(a) { return "foo" + a; }
    }
    class C extends B {
      qux(a) { return super.qux("bar" + a); }
    }
    return new C().qux("baz") === "foobarbaz";
  })();

  //method calls use correct "this" binding
  (function () {
    "use strict";
    class B {
      qux(a) { return this.foo + a; }
    }
    class C extends B {
      qux(a) { return super.qux("bar" + a); }
    }
    var obj = new C();
    obj.foo = "foo";
    return obj.qux("baz") === "foobarbaz";
  })();

  //constructor calls use correct "new.target" binding
  (function () {
    // var passed;
    // class B {
    //   constructor() { passed = (new.target === C); }
    // }
    // class C extends B {
    //   constructor() { super(); }
    // }
    // new C();
    // return passed;
    report.push('constructor calls use correct "new.target" binding');
  })();

  //is statically bound
  (function () {
    "use strict";
    class B {
      qux() { return "bar"; }
    }
    class C extends B {
      qux() { return super.qux() + this.corge; }
    }
    var obj = {
      qux: C.prototype.qux,
      corge: "ley"
    };
    return obj.qux() === "barley";
  })();

  //super() invokes the correct constructor
  (function () {
    "use strict";
    // checks that super() is *not* a synonym of super.constructor()
    var passed;
    class B {
      constructor() {
        passed = true;
      }
    };
    B.prototype.constructor = function () {
      passed = false;
    };
    class C extends B { };
    new C;
    return passed;
  })();

  //generators
  //basic functionality
  (function () {
    function* generator() {
      yield 5; yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //generator function expressions
  (function () {
    var generator = function* () {
      yield 5; yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //correct "this" binding
  (function () {
    function* generator() {
      yield this.x; yield this.y;
    };
    var iterator = { g: generator, x: 5, y: 6 }.g();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //can't use "this" with new
  (function () {
    function* generator() {
      yield this.x; yield this.y;
    };
    try {
      (new generator()).next();
    }
    catch (e) {
      return true;
    }
  })();

  //sending
  (function () {
    var sent;
    function* generator() {
      sent = [yield 5, yield 6];
    };
    var iterator = generator();
    iterator.next();
    iterator.next("foo");
    iterator.next("bar");
    return sent[0] === "foo" && sent[1] === "bar";
  })();

  //%GeneratorPrototype%
  (function () {
    function* generatorFn() { }
    var ownProto = Object.getPrototypeOf(generatorFn());
    var passed = ownProto === generatorFn.prototype;

    var sharedProto = Object.getPrototypeOf(ownProto);
    passed &= sharedProto !== Object.prototype &&
      sharedProto === Object.getPrototypeOf(function* () { }.prototype) &&
      sharedProto.hasOwnProperty('next');

    return passed;
  })();

  //%GeneratorPrototype% prototype chain
  (function () {
    function* generatorFn() { }
    var g = generatorFn();
    var ownProto = Object.getPrototypeOf(g);
    var passed = ownProto === generatorFn.prototype;

    var sharedProto = Object.getPrototypeOf(ownProto);
    var iterProto = Object.getPrototypeOf(sharedProto);

    passed &= iterProto.hasOwnProperty(Symbol.iterator) &&
      !sharedProto.hasOwnProperty(Symbol.iterator) &&
      !ownProto.hasOwnProperty(Symbol.iterator) &&
      g[Symbol.iterator]() === g;

    return passed;
  })();

  //%GeneratorPrototype%.constructor
  (function () {
    // function* g() { }
    // var iterator = new g.constructor("a", "b", "c", "yield a; yield b; yield c;")(5, 6, 7);
    // var item = iterator.next();
    // var passed = item.value === 5 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === 6 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === 7 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === undefined && item.done === true;

    // passed &= g.constructor === (function* () { }).constructor;
    // return passed;
    report.push('%GeneratorPrototype%.constructor');
  })();

  //%GeneratorPrototype%.throw
  (function () {
    var passed = false;
    function* generator() {
      try {
        yield 5; yield 6;
      } catch (e) {
        passed = (e === "foo");
      }
    };
    var iterator = generator();
    iterator.next();
    iterator.throw("foo");
    return passed;
  })();

  //%GeneratorPrototype%.return
  (function () {
    function* generator() {
      yield 5; yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.return("quxquux");
    passed &= item.value === "quxquux" && item.done === true;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //yield operator precedence
  (function () {
    var passed;
    function* generator() {
      passed = yield 0 ? true : false;
    };
    var iterator = generator();
    iterator.next();
    iterator.next(true);
    return passed;
  })();

  //yield *, arrays
  (function () {
    var iterator = (function* generator() {
      yield* [5, 6];
    } ());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //yield *, sparse arrays
  (function () {
    var iterator = (function* generator() {
      yield* [, ,];
    } ());
    var item = iterator.next();
    var passed = item.value === undefined && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //yield *, strings
  (function () {
    var iterator = (function* generator() {
      yield* "56";
    } ());
    var item = iterator.next();
    var passed = item.value === "5" && item.done === false;
    item = iterator.next();
    passed &= item.value === "6" && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //yield *, astral plane strings
  (function () {
    var iterator = (function* generator() {
      yield* "𠮷𠮶";
    } ());
    var item = iterator.next();
    var passed = item.value === "𠮷" && item.done === false;
    item = iterator.next();
    passed &= item.value === "𠮶" && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //yield *, generator instances
  (function () {
    var iterator = (function* generator() {
      yield* (function* () { yield 5; yield 6; yield 7; } ());
    } ());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //yield *, generic iterables
  (function () {
    // var iterator = (function* generator() {
    //   yield* global.__createIterableObject([5, 6, 7]);
    // } ());
    // var item = iterator.next();
    // var passed = item.value === 5 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === 6 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === 7 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === undefined && item.done === true;
    // return passed;
    report.push('yield *, generic iterables');
  })();

  //yield *, instances of iterables
  (function () {
    // var iterator = (function* generator() {
    //   yield* Object.create(__createIterableObject([5, 6, 7]));
    // } ());
    // var item = iterator.next();
    // var passed = item.value === 5 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === 6 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === 7 && item.done === false;
    // item = iterator.next();
    // passed &= item.value === undefined && item.done === true;
    // return passed;
    report.push('yield *, instances of iterables');
  })();

  //yield * on non-iterables is a runtime error
  (function () {
    var iterator = (function* generator() {
      yield* [5];
    } ());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    iterator = (function* generator() {
      yield* 5;
    } ());
    try {
      iterator.next();
    } catch (e) {
      return passed;
    }
  })();

  //yield *, iterator closing
  (function () {
    // var closed = '';
    // var iter = __createIterableObject([1, 2, 3], {
    //   'return': function () {
    //     closed += 'a';
    //     return { done: true };
    //   }
    // });
    // var gen = (function* generator() {
    //   try {
    //     yield* iter;
    //   } finally {
    //     closed += 'b';
    //   }
    // })();
    // ;
    // gen.next();
    // gen['return']();
    // return closed === 'ab';
    report.push('yield *, iterator closing');
  })();

  //yield *, iterator closing via throw()
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'throw': undefined,
    //   'return': function () {
    //     closed = true;
    //     return { done: true };
    //   }
    // });
    // var gen = (function* () {
    //   try {
    //     yield* iter;
    //   } catch (e) { }
    // })();
    // ;
    // gen.next();
    // gen['throw']();
    // return closed;
    report.push('yield *, iterator closing via throw()');
  })();

  //shorthand generator methods
  (function () {
    var o = {
      * generator() {
        yield 5; yield 6;
      },
    };
    var iterator = o.generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //string-keyed shorthand generator methods
  (function () {
    var o = {
      * "foo bar"() {
        yield 5; yield 6;
      },
    };
    var iterator = o["foo bar"]();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //computed shorthand generators
  (function () {
    var garply = "generator";
    var o = {
      *[garply]() {
        yield 5; yield 6;
      },
    };
    var iterator = o.generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //shorthand generator methods, classes
  (function () {
    "use strict";
    class C {
      * generator() {
        yield 5; yield 6;
      }
    };
    var iterator = new C().generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //computed shorthand generators, classes
  (function () {
    "use strict";
    var garply = "generator";
    class C {
      *[garply]() {
        yield 5; yield 6;
      }
    }
    var iterator = new C().generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
  })();

  //shorthand generators can't be constructors
  (function () {
    "use strict";
    class C {
      * generator() {
        yield 5; yield 6;
      }
    };
    try {
      Function("class D { * constructor() { return {}; } }");
    } catch (e) {
      return true;
    }
  })();

  //typed arrays
  //Int8Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Int8Array(buffer); view[0] = 0x80;
    return view[0] === -0x80;
  })();

  //Uint8Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Uint8Array(buffer); view[0] = 0x100;
    return view[0] === 0;
  })();

  //Uint8ClampedArray
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
    return view[0] === 0xFF;
  })();

  //Int16Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Int16Array(buffer); view[0] = 0x8000;
    return view[0] === -0x8000;
  })();

  //Uint16Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Uint16Array(buffer); view[0] = 0x10000;
    return view[0] === 0;
  })();

  //Int32Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Int32Array(buffer); view[0] = 0x80000000;
    return view[0] === -0x80000000;
  })();

  //Uint32Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Uint32Array(buffer); view[0] = 0x100000000;
    return view[0] === 0;
  })();

  //Float32Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Float32Array(buffer); view[0] = 0.1;
    return view[0] === 0.10000000149011612;
  })();

  //Float64Array
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new Float64Array(buffer); view[0] = 0.1;
    return view[0] === 0.1;
  })();

  //DataView (Int8)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt8(0, 0x80);
    return view.getInt8(0) === -0x80;
  })();

  //DataView (Uint8)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint8(0, 0x100);
    return view.getUint8(0) === 0;
  })();

  //DataView (Int16)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt16(0, 0x8000);
    return view.getInt16(0) === -0x8000;
  })();

  //DataView (Uint16)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint16(0, 0x10000);
    return view.getUint16(0) === 0;
  })();

  //DataView (Int32)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt32(0, 0x80000000);
    return view.getInt32(0) === -0x80000000;
  })();

  //DataView (Uint32)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint32(0, 0x100000000);
    return view.getUint32(0) === 0;
  })();

  //DataView (Float32)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setFloat32(0, 0.1);
    return view.getFloat32(0) === 0.10000000149011612;
  })();

  //DataView (Float64)
  (function () {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setFloat64(0, 0.1);
    return view.getFloat64(0) === 0.1;
  })();

  //ArrayBuffer[Symbol.species]
  (function () {
    return typeof ArrayBuffer[Symbol.species] === 'function';
  })();

  //constructors require new
  (function () {
    var buffer = new ArrayBuffer(64);
    var constructors = [
      'ArrayBuffer',
      'DataView',
      'Int8Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'Int16Array',
      'Uint16Array',
      'Int32Array',
      'Uint32Array',
      'Float32Array',
      'Float64Array'
    ];
    return constructors.every(function (constructor) {
      try {
        if (constructor in global) {
          global[constructor](constructor === "ArrayBuffer" ? 64 : buffer);
        }
        return false;
      } catch (e) {
        return true;
      }
    });
  })();

  //constructors accept generic iterables
  (function () {
    // var constructors = [
    //   'Int8Array',
    //   'Uint8Array',
    //   'Uint8ClampedArray',
    //   'Int16Array',
    //   'Uint16Array',
    //   'Int32Array',
    //   'Uint32Array',
    //   'Float32Array',
    //   'Float64Array'
    // ];
    // for (var i = 0; i < constructors.length; i++) {
    //   var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
    //   if (arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3) return false;
    // }
    // return true;
    report.push('constructors accept generic iterables');
  })();

  //correct prototype chains
  (function () {
    var constructors = [
      'Int8Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'Int16Array',
      'Uint16Array',
      'Int32Array',
      'Uint32Array',
      'Float32Array',
      'Float64Array'
    ];
    var constructor = Object.getPrototypeOf(Int8Array);
    var prototype = Object.getPrototypeOf(Int8Array.prototype);
    if (constructor === Function.prototype || prototype === Object.prototype) return false;
    for (var i = 0; i < constructors.length; i += 1) {
      if (!(constructors[i] in global
        && Object.getPrototypeOf(global[constructors[i]]) === constructor
        && Object.getPrototypeOf(global[constructors[i]].prototype) === prototype
        && Object.getOwnPropertyNames(global[constructors[i]].prototype).sort() + ''
        === "BYTES_PER_ELEMENT,constructor")) {
        return false;
      }
    }
    return true;
  })();

  //%TypedArray%.from
  (function () {
    return typeof Int8Array.from === "function" &&
      typeof Uint8Array.from === "function" &&
      typeof Uint8ClampedArray.from === "function" &&
      typeof Int16Array.from === "function" &&
      typeof Uint16Array.from === "function" &&
      typeof Int32Array.from === "function" &&
      typeof Uint32Array.from === "function" &&
      typeof Float32Array.from === "function" &&
      typeof Float64Array.from === "function";
  })();

  //%TypedArray%.of
  (function () {
    return typeof Int8Array.of === "function" &&
      typeof Uint8Array.of === "function" &&
      typeof Uint8ClampedArray.of === "function" &&
      typeof Int16Array.of === "function" &&
      typeof Uint16Array.of === "function" &&
      typeof Int32Array.of === "function" &&
      typeof Uint32Array.of === "function" &&
      typeof Float32Array.of === "function" &&
      typeof Float64Array.of === "function";
  })();

  //%TypedArray%.prototype.subarray
  (function () {
    return typeof Int8Array.prototype.subarray === "function" &&
      typeof Uint8Array.prototype.subarray === "function" &&
      typeof Uint8ClampedArray.prototype.subarray === "function" &&
      typeof Int16Array.prototype.subarray === "function" &&
      typeof Uint16Array.prototype.subarray === "function" &&
      typeof Int32Array.prototype.subarray === "function" &&
      typeof Uint32Array.prototype.subarray === "function" &&
      typeof Float32Array.prototype.subarray === "function" &&
      typeof Float64Array.prototype.subarray === "function";
  })();

  //%TypedArray%.prototype.join
  (function () {
    return typeof Int8Array.prototype.join === "function" &&
      typeof Uint8Array.prototype.join === "function" &&
      typeof Uint8ClampedArray.prototype.join === "function" &&
      typeof Int16Array.prototype.join === "function" &&
      typeof Uint16Array.prototype.join === "function" &&
      typeof Int32Array.prototype.join === "function" &&
      typeof Uint32Array.prototype.join === "function" &&
      typeof Float32Array.prototype.join === "function" &&
      typeof Float64Array.prototype.join === "function";
  })();

  //%TypedArray%.prototype.indexOf
  (function () {
    return typeof Int8Array.prototype.indexOf === "function" &&
      typeof Uint8Array.prototype.indexOf === "function" &&
      typeof Uint8ClampedArray.prototype.indexOf === "function" &&
      typeof Int16Array.prototype.indexOf === "function" &&
      typeof Uint16Array.prototype.indexOf === "function" &&
      typeof Int32Array.prototype.indexOf === "function" &&
      typeof Uint32Array.prototype.indexOf === "function" &&
      typeof Float32Array.prototype.indexOf === "function" &&
      typeof Float64Array.prototype.indexOf === "function";
  })();

  //%TypedArray%.prototype.lastIndexOf
  (function () {
    return typeof Int8Array.prototype.lastIndexOf === "function" &&
      typeof Uint8Array.prototype.lastIndexOf === "function" &&
      typeof Uint8ClampedArray.prototype.lastIndexOf === "function" &&
      typeof Int16Array.prototype.lastIndexOf === "function" &&
      typeof Uint16Array.prototype.lastIndexOf === "function" &&
      typeof Int32Array.prototype.lastIndexOf === "function" &&
      typeof Uint32Array.prototype.lastIndexOf === "function" &&
      typeof Float32Array.prototype.lastIndexOf === "function" &&
      typeof Float64Array.prototype.lastIndexOf === "function";
  })();

  //%TypedArray%.prototype.slice
  (function () {
    return typeof Int8Array.prototype.slice === "function" &&
      typeof Uint8Array.prototype.slice === "function" &&
      typeof Uint8ClampedArray.prototype.slice === "function" &&
      typeof Int16Array.prototype.slice === "function" &&
      typeof Uint16Array.prototype.slice === "function" &&
      typeof Int32Array.prototype.slice === "function" &&
      typeof Uint32Array.prototype.slice === "function" &&
      typeof Float32Array.prototype.slice === "function" &&
      typeof Float64Array.prototype.slice === "function";
  })();

  //%TypedArray%.prototype.every
  (function () {
    return typeof Int8Array.prototype.every === "function" &&
      typeof Uint8Array.prototype.every === "function" &&
      typeof Uint8ClampedArray.prototype.every === "function" &&
      typeof Int16Array.prototype.every === "function" &&
      typeof Uint16Array.prototype.every === "function" &&
      typeof Int32Array.prototype.every === "function" &&
      typeof Uint32Array.prototype.every === "function" &&
      typeof Float32Array.prototype.every === "function" &&
      typeof Float64Array.prototype.every === "function";
  })();

  //%TypedArray%.prototype.filter
  (function () {
    return typeof Int8Array.prototype.filter === "function" &&
      typeof Uint8Array.prototype.filter === "function" &&
      typeof Uint8ClampedArray.prototype.filter === "function" &&
      typeof Int16Array.prototype.filter === "function" &&
      typeof Uint16Array.prototype.filter === "function" &&
      typeof Int32Array.prototype.filter === "function" &&
      typeof Uint32Array.prototype.filter === "function" &&
      typeof Float32Array.prototype.filter === "function" &&
      typeof Float64Array.prototype.filter === "function";
  })();

  //%TypedArray%.prototype.forEach
  (function () {
    return typeof Int8Array.prototype.forEach === "function" &&
      typeof Uint8Array.prototype.forEach === "function" &&
      typeof Uint8ClampedArray.prototype.forEach === "function" &&
      typeof Int16Array.prototype.forEach === "function" &&
      typeof Uint16Array.prototype.forEach === "function" &&
      typeof Int32Array.prototype.forEach === "function" &&
      typeof Uint32Array.prototype.forEach === "function" &&
      typeof Float32Array.prototype.forEach === "function" &&
      typeof Float64Array.prototype.forEach === "function";
  })();

  //%TypedArray%.prototype.map
  (function () {
    return typeof Int8Array.prototype.map === "function" &&
      typeof Uint8Array.prototype.map === "function" &&
      typeof Uint8ClampedArray.prototype.map === "function" &&
      typeof Int16Array.prototype.map === "function" &&
      typeof Uint16Array.prototype.map === "function" &&
      typeof Int32Array.prototype.map === "function" &&
      typeof Uint32Array.prototype.map === "function" &&
      typeof Float32Array.prototype.map === "function" &&
      typeof Float64Array.prototype.map === "function";
  })();

  //%TypedArray%.prototype.reduce
  (function () {
    return typeof Int8Array.prototype.reduce === "function" &&
      typeof Uint8Array.prototype.reduce === "function" &&
      typeof Uint8ClampedArray.prototype.reduce === "function" &&
      typeof Int16Array.prototype.reduce === "function" &&
      typeof Uint16Array.prototype.reduce === "function" &&
      typeof Int32Array.prototype.reduce === "function" &&
      typeof Uint32Array.prototype.reduce === "function" &&
      typeof Float32Array.prototype.reduce === "function" &&
      typeof Float64Array.prototype.reduce === "function";
  })();

  //%TypedArray%.prototype.reduceRight
  (function () {
    return typeof Int8Array.prototype.reduceRight === "function" &&
      typeof Uint8Array.prototype.reduceRight === "function" &&
      typeof Uint8ClampedArray.prototype.reduceRight === "function" &&
      typeof Int16Array.prototype.reduceRight === "function" &&
      typeof Uint16Array.prototype.reduceRight === "function" &&
      typeof Int32Array.prototype.reduceRight === "function" &&
      typeof Uint32Array.prototype.reduceRight === "function" &&
      typeof Float32Array.prototype.reduceRight === "function" &&
      typeof Float64Array.prototype.reduceRight === "function";
  })();

  //%TypedArray%.prototype.reverse
  (function () {
    return typeof Int8Array.prototype.reverse === "function" &&
      typeof Uint8Array.prototype.reverse === "function" &&
      typeof Uint8ClampedArray.prototype.reverse === "function" &&
      typeof Int16Array.prototype.reverse === "function" &&
      typeof Uint16Array.prototype.reverse === "function" &&
      typeof Int32Array.prototype.reverse === "function" &&
      typeof Uint32Array.prototype.reverse === "function" &&
      typeof Float32Array.prototype.reverse === "function" &&
      typeof Float64Array.prototype.reverse === "function";
  })();

  //%TypedArray%.prototype.some
  (function () {
    return typeof Int8Array.prototype.some === "function" &&
      typeof Uint8Array.prototype.some === "function" &&
      typeof Uint8ClampedArray.prototype.some === "function" &&
      typeof Int16Array.prototype.some === "function" &&
      typeof Uint16Array.prototype.some === "function" &&
      typeof Int32Array.prototype.some === "function" &&
      typeof Uint32Array.prototype.some === "function" &&
      typeof Float32Array.prototype.some === "function" &&
      typeof Float64Array.prototype.some === "function";
  })();

  //%TypedArray%.prototype.sort
  (function () {
    return typeof Int8Array.prototype.sort === "function" &&
      typeof Uint8Array.prototype.sort === "function" &&
      typeof Uint8ClampedArray.prototype.sort === "function" &&
      typeof Int16Array.prototype.sort === "function" &&
      typeof Uint16Array.prototype.sort === "function" &&
      typeof Int32Array.prototype.sort === "function" &&
      typeof Uint32Array.prototype.sort === "function" &&
      typeof Float32Array.prototype.sort === "function" &&
      typeof Float64Array.prototype.sort === "function";
  })();

  //%TypedArray%.prototype.copyWithin
  (function () {
    return typeof Int8Array.prototype.copyWithin === "function" &&
      typeof Uint8Array.prototype.copyWithin === "function" &&
      typeof Uint8ClampedArray.prototype.copyWithin === "function" &&
      typeof Int16Array.prototype.copyWithin === "function" &&
      typeof Uint16Array.prototype.copyWithin === "function" &&
      typeof Int32Array.prototype.copyWithin === "function" &&
      typeof Uint32Array.prototype.copyWithin === "function" &&
      typeof Float32Array.prototype.copyWithin === "function" &&
      typeof Float64Array.prototype.copyWithin === "function";
  })();

  //%TypedArray%.prototype.find
  (function () {
    return typeof Int8Array.prototype.find === "function" &&
      typeof Uint8Array.prototype.find === "function" &&
      typeof Uint8ClampedArray.prototype.find === "function" &&
      typeof Int16Array.prototype.find === "function" &&
      typeof Uint16Array.prototype.find === "function" &&
      typeof Int32Array.prototype.find === "function" &&
      typeof Uint32Array.prototype.find === "function" &&
      typeof Float32Array.prototype.find === "function" &&
      typeof Float64Array.prototype.find === "function";
  })();

  //%TypedArray%.prototype.findIndex
  (function () {
    return typeof Int8Array.prototype.findIndex === "function" &&
      typeof Uint8Array.prototype.findIndex === "function" &&
      typeof Uint8ClampedArray.prototype.findIndex === "function" &&
      typeof Int16Array.prototype.findIndex === "function" &&
      typeof Uint16Array.prototype.findIndex === "function" &&
      typeof Int32Array.prototype.findIndex === "function" &&
      typeof Uint32Array.prototype.findIndex === "function" &&
      typeof Float32Array.prototype.findIndex === "function" &&
      typeof Float64Array.prototype.findIndex === "function";
  })();

  //%TypedArray%.prototype.fill
  (function () {
    return typeof Int8Array.prototype.fill === "function" &&
      typeof Uint8Array.prototype.fill === "function" &&
      typeof Uint8ClampedArray.prototype.fill === "function" &&
      typeof Int16Array.prototype.fill === "function" &&
      typeof Uint16Array.prototype.fill === "function" &&
      typeof Int32Array.prototype.fill === "function" &&
      typeof Uint32Array.prototype.fill === "function" &&
      typeof Float32Array.prototype.fill === "function" &&
      typeof Float64Array.prototype.fill === "function";
  })();

  //%TypedArray%.prototype.keys
  (function () {
    return typeof Int8Array.prototype.keys === "function" &&
      typeof Uint8Array.prototype.keys === "function" &&
      typeof Uint8ClampedArray.prototype.keys === "function" &&
      typeof Int16Array.prototype.keys === "function" &&
      typeof Uint16Array.prototype.keys === "function" &&
      typeof Int32Array.prototype.keys === "function" &&
      typeof Uint32Array.prototype.keys === "function" &&
      typeof Float32Array.prototype.keys === "function" &&
      typeof Float64Array.prototype.keys === "function";
  })();

  //%TypedArray%.prototype.values
  (function () {
    return typeof Int8Array.prototype.values === "function" &&
      typeof Uint8Array.prototype.values === "function" &&
      typeof Uint8ClampedArray.prototype.values === "function" &&
      typeof Int16Array.prototype.values === "function" &&
      typeof Uint16Array.prototype.values === "function" &&
      typeof Int32Array.prototype.values === "function" &&
      typeof Uint32Array.prototype.values === "function" &&
      typeof Float32Array.prototype.values === "function" &&
      typeof Float64Array.prototype.values === "function";
  })();

  //%TypedArray%.prototype.entries
  (function () {
    return typeof Int8Array.prototype.entries === "function" &&
      typeof Uint8Array.prototype.entries === "function" &&
      typeof Uint8ClampedArray.prototype.entries === "function" &&
      typeof Int16Array.prototype.entries === "function" &&
      typeof Uint16Array.prototype.entries === "function" &&
      typeof Int32Array.prototype.entries === "function" &&
      typeof Uint32Array.prototype.entries === "function" &&
      typeof Float32Array.prototype.entries === "function" &&
      typeof Float64Array.prototype.entries === "function";
  })();

  //%TypedArray%.prototype[Symbol.iterator]
  (function () {
    return typeof Int8Array.prototype[Symbol.iterator] === "function" &&
      typeof Uint8Array.prototype[Symbol.iterator] === "function" &&
      typeof Uint8ClampedArray.prototype[Symbol.iterator] === "function" &&
      typeof Int16Array.prototype[Symbol.iterator] === "function" &&
      typeof Uint16Array.prototype[Symbol.iterator] === "function" &&
      typeof Int32Array.prototype[Symbol.iterator] === "function" &&
      typeof Uint32Array.prototype[Symbol.iterator] === "function" &&
      typeof Float32Array.prototype[Symbol.iterator] === "function" &&
      typeof Float64Array.prototype[Symbol.iterator] === "function";
  })();

  //%TypedArray%[Symbol.species]
  (function () {
    return typeof Int8Array[Symbol.species] === "function" &&
      typeof Uint8Array[Symbol.species] === "function" &&
      typeof Uint8ClampedArray[Symbol.species] === "function" &&
      typeof Int16Array[Symbol.species] === "function" &&
      typeof Uint16Array[Symbol.species] === "function" &&
      typeof Int32Array[Symbol.species] === "function" &&
      typeof Uint32Array[Symbol.species] === "function" &&
      typeof Float32Array[Symbol.species] === "function" &&
      typeof Float64Array[Symbol.species] === "function";
  })();

  //Map
  //basic functionality
  (function () {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
  })();

  //constructor arguments
  (function () {
    var key1 = {};
    var key2 = {};
    var map = new Map([[key1, 123], [key2, 456]]);

    return map.has(key1) && map.get(key1) === 123 &&
      map.has(key2) && map.get(key2) === 456;
  })();

  //constructor requires new
  (function () {
    new Map();
    try {
      Map();
      return false;
    } catch (e) {
      return true;
    }
  })();

  //constructor accepts null
  (function () {
    new Map(null);
    return true;
  })();

  //constructor invokes set
  (function () {
    var passed = false;
    var _set = Map.prototype.set;

    Map.prototype.set = function (k, v) {
      passed = true;
    };

    new Map([[1, 2]]);
    Map.prototype.set = _set;

    return passed;
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // try {
    //   new Map(iter);
    // } catch (e) { }
    // return closed;
    report.push('iterator closing');
  })();

  //Map.prototype.set returns this
  (function () {
    var map = new Map();
    return map.set(0, 0) === map;
  })();

  //-0 key converts to +0
  (function () {
    var map = new Map();
    map.set(-0, "foo");
    var k;
    map.forEach(function (value, key) {
      k = 1 / key;
    });
    return k === Infinity && map.get(+0) == "foo";
  })();

  //Map.prototype.size
  (function () {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.size === 1;
  })();

  //Map.prototype.delete
  (function () {
    return typeof Map.prototype.delete === "function";
  })();

  //Map.prototype.clear
  (function () {
    return typeof Map.prototype.clear === "function";
  })();

  //Map.prototype.forEach
  (function () {
    return typeof Map.prototype.forEach === "function";
  })();

  //Map.prototype.keys
  (function () {
    return typeof Map.prototype.keys === "function";
  })();

  //Map.prototype.values
  (function () {
    return typeof Map.prototype.values === "function";
  })();

  //Map.prototype.entries
  (function () {
    return typeof Map.prototype.entries === "function";
  })();

  //Map.prototype[Symbol.iterator]
  (function () {
    return typeof Map.prototype[Symbol.iterator] === "function";
  })();

  //Map.prototype isn't an instance
  (function () {
    new Map();
    var obj = {};
    try {
      Map.prototype.has(obj);
    }
    catch (e) {
      return true;
    }
  })();

  //Map iterator prototype chain
  (function () {
    // Iterator instance
    var iterator = new Map()[Symbol.iterator]();
    // %MapIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1.hasOwnProperty(Symbol.iterator) &&
      !iterator.hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
  })();

  //Map[Symbol.species]
  (function () {
    var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
    return 'get' in prop && Map[Symbol.species] === Map;
  })();

  //Set
  //basic functionality
  (function () {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);

    return set.has(123);
  })();

  //constructor arguments
  (function () {
    var obj1 = {};
    var obj2 = {};
    var set = new Set([obj1, obj2]);

    return set.has(obj1) && set.has(obj2);
  })();

  //constructor requires new
  (function () {
    new Set();
    try {
      Set();
      return false;
    } catch (e) {
      return true;
    }
  })();

  //constructor accepts null
  (function () {
    new Set(null);
    return true;
  })();

  //constructor invokes add
  (function () {
    var passed = false;
    var _add = Set.prototype.add;

    Set.prototype.add = function (v) {
      passed = true;
    };

    new Set([1]);
    Set.prototype.add = _add;

    return passed;
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // var add = Set.prototype.add;
    // Set.prototype.add = function () { throw 0 };
    // try {
    //   new Set(iter);
    // } catch (e) { }
    // Set.prototype.add = add;
    // return closed;
    report.push('iterator closing');
  })();

  //Set.prototype.add returns this
  (function () {
    var set = new Set();
    return set.add(0) === set;
  })();

  //-0 key converts to +0
  (function () {
    var set = new Set();
    set.add(-0);
    var k;
    set.forEach(function (value) {
      k = 1 / value;
    });
    return k === Infinity && set.has(+0);
  })();

  //Set.prototype.size
  (function () {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);
    set.add(456);

    return set.size === 2;
  })();

  //Set.prototype.delete
  (function () {
    return typeof Set.prototype.delete === "function";
  })();

  //Set.prototype.clear
  (function () {
    return typeof Set.prototype.clear === "function";
  })();

  //Set.prototype.forEach
  (function () {
    return typeof Set.prototype.forEach === "function";
  })();

  //Set.prototype.keys
  (function () {
    return typeof Set.prototype.keys === "function";
  })();

  //Set.prototype.values
  (function () {
    return typeof Set.prototype.values === "function";
  })();

  //Set.prototype.entries
  (function () {
    return typeof Set.prototype.entries === "function";
  })();

  //Set.prototype[Symbol.iterator]
  (function () {
    return typeof Set.prototype[Symbol.iterator] === "function";
  })();

  //Set.prototype isn't an instance
  (function () {
    new Set();
    var obj = {};
    try {
      Set.prototype.has(obj);
    }
    catch (e) {
      return true;
    }
  })();

  //Set iterator prototype chain
  (function () {
    // Iterator instance
    var iterator = new Set()[Symbol.iterator]();
    // %SetIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1.hasOwnProperty(Symbol.iterator) &&
      !iterator.hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
  })();

  //Set[Symbol.species]
  (function () {
    var prop = Object.getOwnPropertyDescriptor(Set, Symbol.species);
    return 'get' in prop && Set[Symbol.species] === Set;
  })();

  //WeakMap
  //basic functionality
  (function () {
    var key = {};
    var weakmap = new WeakMap();

    weakmap.set(key, 123);

    return weakmap.has(key) && weakmap.get(key) === 123;
  })();

  //constructor arguments
  (function () {
    var key1 = {};
    var key2 = {};
    var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

    return weakmap.has(key1) && weakmap.get(key1) === 123 &&
      weakmap.has(key2) && weakmap.get(key2) === 456;
  })();

  //constructor requires new
  (function () {
    new WeakMap();
    try {
      WeakMap();
      return false;
    } catch (e) {
      return true;
    }
  })();

  //constructor accepts null
  (function () {
    new WeakMap(null);
    return true;
  })();

  //constructor invokes set
  (function () {
    var passed = false;
    var _set = WeakMap.prototype.set;

    WeakMap.prototype.set = function (k, v) {
      passed = true;
    };

    new WeakMap([[{}, 42]]);
    WeakMap.prototype.set = _set;

    return passed;
  })();

  //frozen objects as keys
  (function () {
    var f = Object.freeze({});
    var m = new WeakMap;
    m.set(f, 42);
    return m.get(f) === 42;
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // try {
    //   new WeakMap(iter);
    // } catch (e) { }
    // return closed;
    report.push('iterator closing');
  })();

  //WeakMap.prototype.set returns this
  (function () {
    var weakmap = new WeakMap();
    var key = {};
    return weakmap.set(key, 0) === weakmap;
  })();

  //WeakMap.prototype.delete
  (function () {
    return typeof WeakMap.prototype.delete === "function";
  })();

  //no WeakMap.prototype.clear method
  (function () {
    if (!("clear" in WeakMap.prototype)) {
      return true;
    }
    var m = new WeakMap();
    var key = {};
    m.set(key, 2);
    m.clear();
    return m.has(key);
  })();

  //.has, .get and .delete methods accept primitives
  (function () {
    var m = new WeakMap;
    return m.has(1) === false
      && m.get(1) === undefined
      && m.delete(1) === false;
  })();

  //WeakMap.prototype isn't an instance
  (function () {
    new WeakMap();
    var obj = {};
    try {
      WeakMap.prototype.has(obj);
    }
    catch (e) {
      return true;
    }
  })();

  //WeakSet
  //basic functionality
  (function () {
    var obj1 = {};
    var weakset = new WeakSet();

    weakset.add(obj1);
    weakset.add(obj1);

    return weakset.has(obj1);
  })();

  //constructor arguments
  (function () {
    var obj1 = {}, obj2 = {};
    var weakset = new WeakSet([obj1, obj2]);

    return weakset.has(obj1) && weakset.has(obj2);
  })();

  //constructor requires new
  (function () {
    new WeakSet();
    try {
      WeakSet();
      return false;
    } catch (e) {
      return true;
    }
  })();

  //constructor accepts null
  (function () {
    new WeakSet(null);
    return true;
  })();

  //constructor invokes add
  (function () {
    var passed = false;
    var _add = WeakSet.prototype.add;

    WeakSet.prototype.add = function (v) {
      passed = true;
    };

    new WeakSet([{}]);
    WeakSet.prototype.add = _add;

    return passed;
  })();

  //iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // try {
    //   new WeakSet(iter);
    // } catch (e) { }
    // return closed;
    report.push('iterator closing');
  })();

  //WeakSet.prototype.add returns this
  (function () {
    var weakset = new WeakSet();
    var obj = {};
    return weakset.add(obj) === weakset;
  })();

  //WeakSet.prototype.delete
  (function () {
    return typeof WeakSet.prototype.delete === "function";
  })();

  //no WeakSet.prototype.clear method
  (function () {
    if (!("clear" in WeakSet.prototype)) {
      return true;
    }
    var s = new WeakSet();
    var key = {};
    s.add(key);
    s.clear();
    return s.has(key);
  })();

  //.has and .delete methods accept primitives
  (function () {
    var s = new WeakSet;
    return s.has(1) === false
      && s.delete(1) === false;
  })();

  //WeakSet.prototype isn't an instance
  (function () {
    new WeakSet();
    var obj = {};
    try {
      WeakSet.prototype.has(obj);
    }
    catch (e) {
      return true;
    }
  })();

  //Proxy
  //constructor requires new
  (function () {
    new Proxy({}, {});
    try {
      Proxy({}, {});
      return false;
    } catch (e) {
      return true;
    }
  })();

  //no "prototype" property
  (function () {
    new Proxy({}, {});
    return !Proxy.hasOwnProperty('prototype');
  })();

  //"get" handler
  (function () {
    var proxied = {};
    var proxy = new Proxy(proxied, {
      get: function (t, k, r) {
        return t === proxied && k === "foo" && r === proxy && 5;
      }
    });
    return proxy.foo === 5;
  })();

  //"get" handler, instances of proxies
  (function () {
    var proxied = {};
    var proxy = Object.create(new Proxy(proxied, {
      get: function (t, k, r) {
        return t === proxied && k === "foo" && r === proxy && 5;
      }
    }));
    return proxy.foo === 5;
  })();

  //"get" handler invariants
  (function () {
    var passed = false;
    var proxied = {};
    var proxy = new Proxy(proxied, {
      get: function () {
        passed = true;
        return 4;
      }
    });
    // The value reported for a property must be the same as the value of the corresponding
    // target object property if the target object property is a non-writable,
    // non-configurable own data property.
    Object.defineProperty(proxied, "foo", { value: 5, enumerable: true });
    try {
      proxy.foo;
      return false;
    }
    catch (e) { }
    // The value reported for a property must be undefined if the corresponding target
    // object property is a non-configurable own accessor property that has undefined
    // as its [[Get]] attribute.
    Object.defineProperty(proxied, "bar",
      { set: function () { }, enumerable: true });
    try {
      proxy.bar;
      return false;
    }
    catch (e) { }
    return passed;
  })();

  //"set" handler
  (function () {
    // var proxied = {};
    // var passed = false;
    // var proxy = new Proxy(proxied, {
    //   set: function (t, k, v, r) {
    //     passed = t === proxied && k + v === "foobar" && r === proxy;
    //   }
    // });
    // proxy.foo = "bar";
    // return passed;
    report.push('"set" handler');
  })();

  //"set" handler, instances of proxies
  (function () {
    // var proxied = {};
    // var passed = false;
    // var proxy = Object.create(new Proxy(proxied, {
    //   set: function (t, k, v, r) {
    //     passed = t === proxied && k + v === "foobar" && r === proxy;
    //   }
    // }));
    // proxy.foo = "bar";
    // return passed;
    report.push('"set" handler, instances of proxies');
  })();

  //"set" handler invariants
  (function () {
    // var passed = false;
    // new Proxy({}, {});
    // // Cannot change the value of a property to be different from the value of
    // // the corresponding target object if the corresponding target object
    // // property is a non-writable, non-configurable own data property.
    // var proxied = {};
    // var proxy = new Proxy(proxied, {
    //   set: function () {
    //     passed = true;
    //     return true;
    //   }
    // });
    // Object.defineProperty(proxied, "foo", { value: 2, enumerable: true });
    // proxy.foo = 2;
    // try {
    //   proxy.foo = 4;
    //   return false;
    // } catch (e) { }
    // // Cannot set the value of a property if the corresponding target
    // // object property is a non-configurable own accessor property
    // // that has undefined as its [[Set]] attribute.
    // Object.defineProperty(proxied, "bar",
    //   { get: function () { }, enumerable: true });
    // try {
    //   proxy.bar = 2;
    //   return false;
    // } catch (e) { }
    // return passed;
    report.push('"set" handler invariants');
  })();

  //"has" handler
  (function () {
    var proxied = {};
    var passed = false;
    "foo" in new Proxy(proxied, {
      has: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    });
    return passed;
  })();

  //"has" handler, instances of proxies
  (function () {
    var proxied = {};
    var passed = false;
    "foo" in Object.create(new Proxy(proxied, {
      has: function (t, k) {
        passed = t === proxied && k === "foo";
      }
    }));
    return passed;
  })();

  //"has" handler invariants
  (function () {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be reported as non-existent, if it exists as a
    // non-configurable own property of the target object.
    var proxied = {};
    var proxy = new Proxy(proxied, {
      has: function () {
        passed = true;
        return false;
      }
    });
    Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
    try {
      'foo' in proxy;
      return false;
    } catch (e) { }
    // A property cannot be reported as non-existent, if it exists as an
    // own property of the target object and the target object is not extensible.
    proxied.bar = 2;
    Object.preventExtensions(proxied);
    try {
      'bar' in proxy;
      return false;
    } catch (e) { }
    return passed;
  })();

  //"deleteProperty" handler
  (function () {
    // var proxied = {};
    // var passed = false;
    // delete new Proxy(proxied, {
    //   deleteProperty: function (t, k) {
    //     passed = t === proxied && k === "foo";
    //   }
    // }).foo;
    // return passed;
    report.push('"deleteProperty" handler');
  })();

  //"deleteProperty" handler invariant
  (function () {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be reported as deleted, if it exists as a non-configurable
    // own property of the target object.
    var proxied = {};
    Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
    try {
      delete new Proxy(proxied, {
        deleteProperty: function () {
          passed = true;
          return true;
        }
      }).foo;
      return false;
    } catch (e) { }
    return passed;
  })();

  //"getOwnPropertyDescriptor" handler
  (function () {
    var proxied = {};
    var fakeDesc = { value: "foo", configurable: true };
    var returnedDesc = Object.getOwnPropertyDescriptor(
      new Proxy(proxied, {
        getOwnPropertyDescriptor: function (t, k) {
          return t === proxied && k === "foo" && fakeDesc;
        }
      }),
      "foo"
    );
    return (returnedDesc.value === fakeDesc.value
      && returnedDesc.configurable === fakeDesc.configurable
      && returnedDesc.writable === false
      && returnedDesc.enumerable === false);
  })();

  //"getOwnPropertyDescriptor" handler invariants
  (function () {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be reported as non-existent, if it exists as a non-configurable
    // own property of the target object.
    var proxied = {};
    var proxy = new Proxy(proxied, {
      getOwnPropertyDescriptor: function () {
        passed = true;
        return undefined;
      }
    });
    Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
    try {
      Object.getOwnPropertyDescriptor(proxy, "foo");
      return false;
    } catch (e) { }
    // A property cannot be reported as non-existent, if it exists as an own property
    // of the target object and the target object is not extensible.
    proxied.bar = 3;
    Object.preventExtensions(proxied);
    try {
      Object.getOwnPropertyDescriptor(proxy, "bar");
      return false;
    } catch (e) { }
    // A property cannot be reported as existent, if it does not exists as an own property
    // of the target object and the target object is not extensible.
    try {
      Object.getOwnPropertyDescriptor(new Proxy(proxied, {
        getOwnPropertyDescriptor: function () {
          return { value: 2, configurable: true, writable: true, enumerable: true };
        }
      }), "baz");
      return false;
    } catch (e) { }
    // A property cannot be reported as non-configurable, if it does not exists as an own
    // property of the target object or if it exists as a configurable own property of
    // the target object.
    try {
      Object.getOwnPropertyDescriptor(new Proxy({}, {
        getOwnPropertyDescriptor: function () {
          return { value: 2, configurable: false, writable: true, enumerable: true };
        }
      }), "baz");
      return false;
    } catch (e) { }
    try {
      Object.getOwnPropertyDescriptor(new Proxy({ baz: 1 }, {
        getOwnPropertyDescriptor: function () {
          return { value: 1, configurable: false, writable: true, enumerable: true };
        }
      }), "baz");
      return false;
    } catch (e) { }
    return passed;
  })();

  //"defineProperty" handler
  (function () {
    var proxied = {};
    var passed = false;
    Object.defineProperty(
      new Proxy(proxied, {
        defineProperty: function (t, k, d) {
          passed = t === proxied && k === "foo" && d.value === 5;
          return true;
        }
      }),
      "foo",
      { value: 5, configurable: true }
    );
    return passed;
  })();

  //"defineProperty" handler invariants
  (function () {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be added, if the target object is not extensible.
    var proxied = Object.preventExtensions({});
    var proxy = new Proxy(proxied, {
      defineProperty: function () {
        passed = true;
        return true;
      }
    });
    try {
      Object.defineProperty(proxy, "foo", { value: 2 });
      return false;
    } catch (e) { }
    // A property cannot be non-configurable, unless there exists a corresponding
    // non-configurable own property of the target object.
    try {
      Object.defineProperty(
        new Proxy({ bar: true }, {
          defineProperty: function () {
            return true;
          }
        }),
        "bar",
        { value: 5, configurable: false, writable: true, enumerable: true }
      );
      return false;
    } catch (e) { }
    return passed;
  })();

  //"getPrototypeOf" handler
  (function () {
    var proxied = {};
    var fakeProto = {};
    var proxy = new Proxy(proxied, {
      getPrototypeOf: function (t) {
        return t === proxied && fakeProto;
      }
    });
    return Object.getPrototypeOf(proxy) === fakeProto;
  })();

  //"getPrototypeOf" handler invariant
  (function () {
    var passed = false;
    new Proxy({}, {});
    // If the target object is not extensible, [[GetPrototypeOf]] applied to the proxy object
    // must return the same value as [[GetPrototypeOf]] applied to the proxy object's target object.
    try {
      Object.getPrototypeOf(new Proxy(Object.preventExtensions({}), {
        getPrototypeOf: function () {
          passed = true;
          return {};
        }
      }));
      return false;
    } catch (e) { }
    return passed;
  })();

  //"setPrototypeOf" handler
  (function () {
    var proxied = {};
    var newProto = {};
    var passed = false;
    Object.setPrototypeOf(
      new Proxy(proxied, {
        setPrototypeOf: function (t, p) {
          passed = t === proxied && p === newProto;
          return true;
        }
      }),
      newProto
    );
    return passed;
  })();

  //"setPrototypeOf" handler invariant
  (function () {
    var passed = false;
    new Proxy({}, {});
    Object.setPrototypeOf({}, {});
    // If the target object is not extensible, the argument value must be the
    // same as the result of [[GetPrototypeOf]] applied to target object.
    try {
      Object.setPrototypeOf(
        new Proxy(Object.preventExtensions({}), {
          setPrototypeOf: function () {
            passed = true;
            return true;
          }
        }), {});
      return false;
    } catch (e) { }
    return passed;
  })();

  //"isExtensible" handler
  (function () {
    var proxied = {};
    var passed = false;
    Object.isExtensible(
      new Proxy(proxied, {
        isExtensible: function (t) {
          passed = t === proxied; return true;
        }
      })
    );
    return passed;
  })();

  //"isExtensible" handler invariant
  (function () {
    var passed = false;
    new Proxy({}, {});
    // [[IsExtensible]] applied to the proxy object must return the same value
    // as [[IsExtensible]] applied to the proxy object's target object with the same argument.
    try {
      Object.isExtensible(new Proxy({}, {
        isExtensible: function (t) {
          passed = true;
          return false;
        }
      }));
      return false;
    } catch (e) { }
    try {
      Object.isExtensible(new Proxy(Object.preventExtensions({}), {
        isExtensible: function (t) {
          return true;
        }
      }));
      return false;
    } catch (e) { }
    return true;
  })();

  //"preventExtensions" handler
  (function () {
    var proxied = {};
    var passed = false;
    Object.preventExtensions(
      new Proxy(proxied, {
        preventExtensions: function (t) {
          passed = t === proxied;
          return Object.preventExtensions(proxied);
        }
      })
    );
    return passed;
  })();

  //"preventExtensions" handler invariant
  (function () {
    var passed = false;
    new Proxy({}, {});
    // [[PreventExtensions]] applied to the proxy object only returns true
    // if [[IsExtensible]] applied to the proxy object's target object is false.
    try {
      Object.preventExtensions(new Proxy({}, {
        preventExtensions: function () {
          passed = true;
          return true;
        }
      }));
      return false;
    } catch (e) { }
    return passed;
  })();

  //"ownKeys" handler
  (function () {
    var proxied = {};
    var passed = false;
    Object.keys(
      new Proxy(proxied, {
        ownKeys: function (t) {
          passed = t === proxied; return [];
        }
      })
    );
    return passed;
  })();

  //"ownKeys" handler invariant
  (function () {
    var passed = false;
    new Proxy({}, {});
    // The Type of each result List element is either String or Symbol.
    try {
      Object.keys(new Proxy({}, {
        ownKeys: function () {
          passed = true;
          return [2];
        }
      }));
      return false;
    } catch (e) { }
    // The result List must contain the keys of all non-configurable own properties of the target object.
    var proxied = {};
    Object.defineProperty(proxied, "foo", { value: 2, writable: true, enumerable: true });
    try {
      Object.keys(new Proxy(proxied, {
        ownKeys: function () {
          return [];
        }
      }));
      return false;
    } catch (e) { }
    // If the target object is not extensible, then the result List must contain all the keys
    // of the own properties of the target object and no other values.
    try {
      Object.keys(new Proxy(Object.preventExtensions({ b: 1 }), {
        ownKeys: function () {
          return ['a'];
        }
      }));
      return false;
    } catch (e) { }
    return passed;
  })();

  //"apply" handler
  (function () {
    var proxied = function () { };
    var passed = false;
    var host = {
      method: new Proxy(proxied, {
        apply: function (t, thisArg, args) {
          passed = t === proxied && thisArg === host && args + "" === "foo,bar";
        }
      })
    };
    host.method("foo", "bar");
    return passed;
  })();

  //"apply" handler invariant
  (function () {
    var passed = false;
    new Proxy(function () { }, {
      apply: function () { passed = true; }
    })();
    ;
    // A Proxy exotic object only has a [[Call]] internal method if the
    // initial value of its [[ProxyTarget]] internal slot is an object
    // that has a [[Call]] internal method.
    try {
      new Proxy({}, {
        apply: function () { }
      })();
      ;
      return false;
    } catch (e) { }
    return passed;
  })();

  //"construct" handler
  (function () {
    var proxied = function () { };
    var passed = false;
    new new Proxy(proxied, {
      construct: function (t, args) {
        passed = t === proxied && args + "" === "foo,bar";
        return {};
      }
    })("foo", "bar");
    return passed;
  })();

  //"construct" handler invariants
  (function () {
    var passed = false;
    new Proxy({}, {});
    // A Proxy exotic object only has a [[Construct]] internal method if the
    // initial value of its [[ProxyTarget]] internal slot is an object
    // that has a [[Construct]] internal method.
    try {
      new new Proxy({}, {
        construct: function (t, args) {
          return {};
        }
      })();
      ;
      return false;
    } catch (e) { }
    // The result of [[Construct]] must be an Object.
    try {
      new new Proxy(function () { }, {
        construct: function (t, args) {
          passed = true;
          return 5;
        }
      })();
      ;
      return false;
    } catch (e) { }
    return passed;
  })();

  //Proxy.revocable
  (function () {
    var obj = Proxy.revocable({}, { get: function () { return 5; } });
    var passed = (obj.proxy.foo === 5);
    obj.revoke();
    try {
      obj.proxy.foo;
    } catch (e) {
      passed &= e instanceof TypeError;
    }
    return passed;
  })();

  //Array.isArray support
  (function () {
    return Array.isArray(new Proxy([], {}));
  })();

  //JSON.stringify support
  (function () {
    return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
  })();

  //Reflect
  //Reflect.get
  (function () {
    return Reflect.get({ qux: 987 }, "qux") === 987;
  })();

  //Reflect.set
  (function () {
    var obj = {};
    Reflect.set(obj, "quux", 654);
    return obj.quux === 654;
  })();

  //Reflect.has
  (function () {
    return Reflect.has({ qux: 987 }, "qux");
  })();

  //Reflect.deleteProperty
  (function () {
    var obj = { bar: 456 };
    Reflect.deleteProperty(obj, "bar");
    return !("bar" in obj);
  })();

  //Reflect.getOwnPropertyDescriptor
  (function () {
    var obj = { baz: 789 };
    var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
    return desc.value === 789 &&
      desc.configurable && desc.writable && desc.enumerable;
  })();

  //Reflect.defineProperty
  (function () {
    var obj = {};
    Reflect.defineProperty(obj, "foo", { value: 123 });
    return obj.foo === 123 &&
      Reflect.defineProperty(Object.freeze({}), "foo", { value: 123 }) === false;
  })();

  //Reflect.getPrototypeOf
  (function () {
    return Reflect.getPrototypeOf([]) === Array.prototype;
  })();

  //Reflect.setPrototypeOf
  (function () {
    var obj = {};
    Reflect.setPrototypeOf(obj, Array.prototype);
    return obj instanceof Array;
  })();

  //Reflect.isExtensible
  (function () {
    return Reflect.isExtensible({}) &&
      !Reflect.isExtensible(Object.preventExtensions({}));
  })();

  //Reflect.preventExtensions
  (function () {
    var obj = {};
    Reflect.preventExtensions(obj);
    return !Object.isExtensible(obj);
  })();

  //Reflect.ownKeys, string keys
  (function () {
    var obj = Object.create({ C: true });
    obj.A = true;
    Object.defineProperty(obj, 'B', { value: true, enumerable: false });

    return Reflect.ownKeys(obj).sort() + '' === "A,B";
  })();

  //Reflect.ownKeys, symbol keys
  (function () {
    var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
    var proto = {};
    proto[s1] = true;
    var obj = Object.create(proto);
    obj[s2] = true;
    Object.defineProperty(obj, s3, { value: true, enumerable: false });

    var keys = Reflect.ownKeys(obj);
    return keys.indexOf(s2) > -1 && keys.indexOf(s3) > -1 && keys.length === 2;
  })();

  //Reflect.apply
  (function () {
    return Reflect.apply(Array.prototype.push, [1, 2], [3, 4, 5]) === 5;
  })();

  //Reflect.construct
  (function () {
    return Reflect.construct(function (a, b, c) {
      this.qux = a + b + c;
    }, ["foo", "bar", "baz"]).qux === "foobarbaz";
  })();

  //Reflect.construct sets new.target meta-property
  (function () {
    // return Reflect.construct(function (a, b, c) {
    //   if (new.target === Object) {
    //     this.qux = a + b + c;
    //   }
    // }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
  })();

  //Reflect.construct creates instances from third argument
  (function () {
    function F() { }
    var obj = Reflect.construct(function () { this.y = 1; }, [], F);
    return obj.y === 1 && obj instanceof F;
  })();

  //Reflect.construct, Array subclassing
  (function () {
    function F() { }
    var obj = Reflect.construct(Array, [], F);
    obj[2] = 'foo';
    return obj.length === 3 && obj instanceof F;
  })();

  //Reflect.construct, RegExp subclassing
  (function () {
    function F() { }
    var obj = Reflect.construct(RegExp, ["baz", "g"], F);
    return RegExp.prototype.exec.call(obj, "foobarbaz")[0] === "baz"
      && obj.lastIndex === 9 && obj instanceof F;
  })();

  //Reflect.construct, Function subclassing
  (function () {
    function F() { }
    var obj = Reflect.construct(Function, ["return 2"], F);
    return obj() === 2 && obj instanceof F;
  })();

  //Reflect.construct, Promise subclassing


  (function () {
    function F() { }
    var p1 = Reflect.construct(Promise, [function (resolve, reject) { resolve("foo"); }], F);
    var p2 = Reflect.construct(Promise, [function (resolve, reject) { reject("quux"); }], F);
    var score = +(p1 instanceof F && p2 instanceof F);

    function thenFn(result) { score += (result === "foo"); check(); }
    function catchFn(result) { score += (result === "quux"); check(); }
    function shouldNotRun(result) { score = -Infinity; }

    p1.then = p2.then = Promise.prototype.then;
    p1.catch = p2.catch = Promise.prototype.catch;

    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);

    function check() {
      if (score === 4) return true;
    }
  })();

  //Promise
  //basic functionality


  (function () {
    var p1 = new Promise(function (resolve, reject) { resolve("foo"); });
    var p2 = new Promise(function (resolve, reject) { reject("quux"); });
    var score = 0;

    function thenFn(result) { score += (result === "foo"); check(); }
    function catchFn(result) { score += (result === "quux"); check(); }
    function shouldNotRun(result) { score = -Infinity; }

    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);

    p1.then(function () {
      // Promise.prototype.then() should return a new Promise
      score += p1.then() !== p1;
      check();
    });

    function check() {
      if (score === 4) return true;
    }
  })();

  //constructor requires new
  (function () {
    new Promise(function () { });
    try {
      Promise(function () { });
      return false;
    } catch (e) {
      return true;
    }
  })();

  //Promise.prototype isn't an instance
  (function () {
    new Promise(function () { });
    try {
      Promise.prototype.then(function () { });
    } catch (e) {
      return true;
    }
  })();

  //Promise.all


  (function () {
    var fulfills = Promise.all([
      new Promise(function (resolve) { setTimeout(resolve, 2000, "foo"); }),
      new Promise(function (resolve) { setTimeout(resolve, 1000, "bar"); }),
    ]);
    var rejects = Promise.all([
      new Promise(function (_, reject) { setTimeout(reject, 2000, "baz"); }),
      new Promise(function (_, reject) { setTimeout(reject, 1000, "qux"); }),
    ]);
    var score = 0;
    fulfills.then(function (result) { score += (result + "" === "foo,bar"); check(); });
    rejects.catch(function (result) { score += (result === "qux"); check(); });

    function check() {
      if (score === 2) asyncTestPassed();
    }
  })();

  //Promise.all, generic iterables


  (function () {
    //   var fulfills = Promise.all(global.__createIterableObject([
    //     new Promise(function (resolve) { setTimeout(resolve, 2000, "foo"); }),
    //     new Promise(function (resolve) { setTimeout(resolve, 1000, "bar"); }),
    //   ]));
    //   var rejects = Promise.all(global.__createIterableObject([
    //     new Promise(function (_, reject) { setTimeout(reject, 2000, "baz"); }),
    //     new Promise(function (_, reject) { setTimeout(reject, 1000, "qux"); }),
    //   ]));
    //   var score = 0;
    //   fulfills.then(function (result) { score += (result + "" === "foo,bar"); check(); });
    //   rejects.catch(function (result) { score += (result === "qux"); check(); });

    //   function check() {
    //     if (score === 2) asyncTestPassed();
    //   }
  })();

  //Promise.race


  (function () {
    var fulfills = Promise.race([
      new Promise(function (resolve) { setTimeout(resolve, 1000, "foo"); }),
      new Promise(function (_, reject) { setTimeout(reject, 2000, "bar"); }),
    ]);
    var rejects = Promise.race([
      new Promise(function (_, reject) { setTimeout(reject, 1000, "baz"); }),
      new Promise(function (resolve) { setTimeout(resolve, 2000, "qux"); }),
    ]);
    var score = 0;
    fulfills.then(function (result) { score += (result === "foo"); check(); });
    rejects.catch(function (result) { score += (result === "baz"); check(); });

    function check() {
      if (score === 2) asyncTestPassed();
    }
  })();

  //Promise.race, generic iterables
  (function () {
    // var fulfills = Promise.race(global.__createIterableObject([
    //   new Promise(function (resolve) { setTimeout(resolve, 1000, "foo"); }),
    //   new Promise(function (_, reject) { setTimeout(reject, 2000, "bar"); }),
    // ]));
    // var rejects = Promise.race(global.__createIterableObject([
    //   new Promise(function (_, reject) { setTimeout(reject, 1000, "baz"); }),
    //   new Promise(function (resolve) { setTimeout(resolve, 2000, "qux"); }),
    // ]));
    // var score = 0;
    // fulfills.then(function (result) { score += (result === "foo"); check(); });
    // rejects.catch(function (result) { score += (result === "baz"); check(); });

    // function check() {
    //   if (score === 2) asyncTestPassed();
    // }
    report.push('Promise.race, generic iterables');
  })();

  //Promise[Symbol.species]
  (function () {
    var prop = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
    return 'get' in prop && Promise[Symbol.species] === Promise;
  })();

  //Symbol
  //basic functionality
  (function () {
    var object = {};
    var symbol = Symbol();
    var value = {};
    object[symbol] = value;
    return object[symbol] === value;
  })();

  //typeof support
  (function () {
    return typeof Symbol() === "symbol";
  })();

  //symbol keys are hidden to pre-ES6 code
  (function () {
    var object = {};
    var symbol = Symbol();
    object[symbol] = 1;

    for (var x in object) { }
    var passed = !x;

    if (Object.keys && Object.getOwnPropertyNames) {
      passed &= Object.keys(object).length === 0
        && Object.getOwnPropertyNames(object).length === 0;
    }

    return passed;
  })();

  //Object.defineProperty support
  (function () {
    var object = {};
    var symbol = Symbol();
    var value = {};

    if (Object.defineProperty) {
      Object.defineProperty(object, symbol, { value: value });
      return object[symbol] === value;
    }

    return passed;
  })();

  //symbols inherit from Symbol.prototype
  (function () {
    var symbol = Symbol();
    var passed = symbol.foo === undefined;
    Symbol.prototype.foo = 2;
    passed &= symbol.foo === 2;
    delete Symbol.prototype.foo;
    return passed;
  })();

  //cannot coerce to string or number
  (function () {
    var symbol = Symbol();

    try {
      symbol + "";
      return false;
    }
    catch (e) { }

    try {
      symbol + 0;
      return false;
    } catch (e) { }

    return true;
  })();

  //can convert with String()
  (function () {
    return String(Symbol("foo")) === "Symbol(foo)";
  })();

  //new Symbol() throws
  (function () {
    var symbol = Symbol();
    try {
      new Symbol();
    } catch (e) {
      return true;
    }
  })();

  //Object(symbol)
  (function () {
    var symbol = Symbol();
    var symbolObject = Object(symbol);

    return typeof symbolObject === "object" &&
      symbolObject instanceof Symbol &&
      symbolObject == symbol &&
      symbolObject !== symbol &&
      symbolObject.valueOf() === symbol;
  })();

  //JSON.stringify ignores symbol primitives
  (function () {
    var object = { foo: Symbol() };
    object[Symbol()] = 1;
    var array = [Symbol()];
    return JSON.stringify(object) === '{}' && JSON.stringify(array) === '[null]' && JSON.stringify(Symbol()) === undefined;
  })();

  //JSON.stringify ignores symbol objects
  (function () {
    var testSymbolObject = function (sym) {
      var object = { foo: sym };
      try {
        // some browsers throw a TypeError when setting symbol object keys.
        // this isn't part of this test, so, ignore it if so.
        object[sym] = 1;
      } catch (e) { } // some browsers throw a TypeError when setting symbol object keys.
      var array = [sym];
      return JSON.stringify(object) === '{"foo":{}}' && JSON.stringify(array) === '[{}]' && JSON.stringify(sym) === '{}';
    };
    var objSym = Object(Symbol());
    var symNoToJSON = Object(Symbol());
    Object.defineProperty(symNoToJSON, 'toJSON', { enumerable: false, value: null }); // ensure it overrides the prototype, but is not callable
    return testSymbolObject(objSym) && testSymbolObject(symNoToJSON);
  })();

  //global symbol registry
  (function () {
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
      Symbol.keyFor(symbol) === 'foo';
  })();

  //well-known symbols
  //Symbol.hasInstance
  (function () {
    var passed = false;
    var obj = { foo: true };
    var C = function () { };
    Object.defineProperty(C, Symbol.hasInstance, {
      value: function (inst) { passed = inst.foo; return false; }
    });
    obj instanceof C;
    return passed;
  })();

  //Symbol.isConcatSpreadable
  (function () {
    var a = [], b = [];
    b[Symbol.isConcatSpreadable] = false;
    a = a.concat(b);
    return a[0] === b;
  })();

  //Symbol.iterator, existence
  (function () {
    return "iterator" in Symbol;
  })();

  //Symbol.iterator, arguments object
  (function () {
    return (function () {
      return typeof arguments[Symbol.iterator] === 'function'
        && Object.hasOwnProperty.call(arguments, Symbol.iterator);
    } ());
  })();

  //Symbol.species, existence
  (function () {
    return "species" in Symbol;
  })();

  //Symbol.species, Array.prototype.concat
  (function () {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function () {
      return { foo: 1 };
    };
    return Array.prototype.concat.call(obj, []).foo === 1;
  })();

  //Symbol.species, Array.prototype.filter
  (function () {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function () {
      return { foo: 1 };
    };
    return Array.prototype.filter.call(obj, Boolean).foo === 1;
  })();

  //Symbol.species, Array.prototype.map
  (function () {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function () {
      return { foo: 1 };
    };
    return Array.prototype.map.call(obj, Boolean).foo === 1;
  })();

  //Symbol.species, Array.prototype.slice
  (function () {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function () {
      return { foo: 1 };
    };
    return Array.prototype.slice.call(obj, 0).foo === 1;
  })();

  //Symbol.species, Array.prototype.splice
  (function () {
    var obj = [];
    obj.constructor = {};
    obj.constructor[Symbol.species] = function () {
      return { foo: 1 };
    };
    return Array.prototype.splice.call(obj, 0).foo === 1;
  })();

  //Symbol.species, RegExp.prototype[Symbol.split]
  (function () {
    var passed = false;
    var obj = { constructor: {} };
    obj[Symbol.split] = RegExp.prototype[Symbol.split];
    obj.constructor[Symbol.species] = function () {
      passed = true;
      return /./;
    };
    "".split(obj);
    return passed;
  })();

  //Symbol.species, Promise.prototype.then
  (function () {
    var promise = new Promise(function (resolve) { resolve(42); });
    var FakePromise1 = promise.constructor = function (exec) { exec(function () { }, function () { }); };
    var FakePromise2 = function (exec) { exec(function () { }, function () { }); };
    Object.defineProperty(FakePromise1, Symbol.species, { value: FakePromise2 });
    return promise.then(function () { }) instanceof FakePromise2;
  })();

  //Symbol.replace
  (function () {
    var O = {};
    O[Symbol.replace] = function () {
      return 42;
    };
    return ''.replace(O) === 42;
  })();

  //Symbol.search
  (function () {
    var O = {};
    O[Symbol.search] = function () {
      return 42;
    };
    return ''.search(O) === 42;
  })();

  //Symbol.split
  (function () {
    var O = {};
    O[Symbol.split] = function () {
      return 42;
    };
    return ''.split(O) === 42;
  })();

  //Symbol.match
  (function () {
    var O = {};
    O[Symbol.match] = function () {
      return 42;
    };
    return ''.match(O) === 42;
  })();

  //Symbol.match, RegExp constructor
  (function () {
    var re = /./;
    re[Symbol.match] = false;
    var foo = { constructor: RegExp };
    foo[Symbol.match] = true;
    return RegExp(re) !== re && RegExp(foo) === foo;
  })();

  //Symbol.match, String.prototype.startsWith
  (function () {
    var re = /./;
    try {
      '/./'.startsWith(re);
    } catch (e) {
      re[Symbol.match] = false;
      return '/./'.startsWith(re);
    }
  })();

  //Symbol.match, String.prototype.endsWith
  (function () {
    var re = /./;
    try {
      '/./'.endsWith(re);
    } catch (e) {
      re[Symbol.match] = false;
      return '/./'.endsWith(re);
    }
  })();

  //Symbol.match, String.prototype.includes
  (function () {
    var re = /./;
    try {
      '/./'.includes(re);
    } catch (e) {
      re[Symbol.match] = false;
      return '/./'.includes(re);
    }
  })();

  //Symbol.toPrimitive
  (function () {
    var a = {}, b = {}, c = {};
    var passed = 0;
    a[Symbol.toPrimitive] = function (hint) { passed += hint === "number"; return 0; };
    b[Symbol.toPrimitive] = function (hint) { passed += hint === "string"; return 0; };
    c[Symbol.toPrimitive] = function (hint) { passed += hint === "default"; return 0; };

    a >= 0;
    b in {};
    c == 0;
    return passed === 3;
  })();

  //Symbol.toStringTag
  (function () {
    var a = {};
    a[Symbol.toStringTag] = "foo";
    return (a + "") === "[object foo]";
  })();

  //Symbol.toStringTag affects existing built-ins
  (function () {
    var s = Symbol.toStringTag;
    var passed = true;
    [
      [Array.prototype, []],
      [String.prototype, ''],
      [arguments, arguments],
      [Function.prototype, function () { }],
      [Error.prototype, new Error()],
      [Boolean.prototype, true],
      [Number.prototype, 2],
      [Date.prototype, new Date()],
      [RegExp.prototype, /./]
    ].forEach(function (pair) {
      pair[0][s] = "foo";
      passed &= (Object.prototype.toString.call(pair[1]) === "[object foo]");
      delete pair[0][s];
    });
    return passed;
  })();

  //Symbol.toStringTag, new built-ins
  (function () {
    var passed = true;
    var s = Symbol.toStringTag;
    [
      [String, "String Iterator"],
      [Array, "Array Iterator"],
      [Map, "Map Iterator"],
      [Set, "Set Iterator"]
    ].forEach(function (pair) {
      var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
      passed = passed
        && iterProto.hasOwnProperty(s)
        && iterProto[s] === pair[1];
    });
    passed = passed
      && Object.getPrototypeOf(function* () { })[s] === "GeneratorFunction"
      && Object.getPrototypeOf(function* () { } ())[s] === "Generator"
      && Map.prototype[s] === "Map"
      && Set.prototype[s] === "Set"
      && ArrayBuffer.prototype[s] === "ArrayBuffer"
      && DataView.prototype[s] === "DataView"
      && Promise.prototype[s] === "Promise"
      && Symbol.prototype[s] === "Symbol"
      && typeof Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === "function";
    return passed;
  })();

  //Symbol.toStringTag, misc. built-ins
  (function () {
    var s = Symbol.toStringTag;
    return Math[s] === "Math"
      && JSON[s] === "JSON";
  })();

  //Symbol.unscopables
  (function () {
    // var a = { foo: 1, bar: 2 };
    // a[Symbol.unscopables] = { bar: true };
    // with (a) {
    //   return foo === 1 && typeof bar === "undefined";
    // }
  })();

  //Object static methods
  //Object.assign
  (function () {
    var o = Object.assign({ a: true }, { b: true }, { c: true });
    return "a" in o && "b" in o && "c" in o;
  })();

  //Object.is
  (function () {
    return typeof Object.is === 'function' &&
      Object.is(NaN, NaN) &&
      !Object.is(-0, 0);
  })();

  //Object.getOwnPropertySymbols
  (function () {
    var o = {};
    var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
    o[sym] = true;
    o[sym2] = true;
    o[sym3] = true;
    var result = Object.getOwnPropertySymbols(o);
    return result[0] === sym
      && result[1] === sym2
      && result[2] === sym3;
  })();

  //Object.setPrototypeOf
  (function () {
    return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
  })();

  //function "name" property
  //function statements
  (function () {
    function foo() { };
    return foo.name === 'foo' &&
      (function () { }).name === '';
  })();

  //function expressions
  (function () {
    return (function foo() { }).name === 'foo' &&
      (function () { }).name === '';
  })();

  //new Function
  (function () {
    return (new Function).name === "anonymous";
  })();

  //bound functions
  (function () {
    function foo() { };
    return foo.bind({}).name === "bound foo" &&
      (function () { }).bind({}).name === "bound ";
  })();

  //variables (function)
  (function () {
    var foo = function () { };
    var bar = function baz() { };
    return foo.name === "foo" && bar.name === "baz";
  })();

  //object methods (function)
  (function () {
    var o = { foo: function () { }, bar: function baz() { } };
    o.qux = function () { };
    return o.foo.name === "foo" &&
      o.bar.name === "baz" &&
      o.qux.name === "";
  })();

  //accessor properties
  (function () {
    var o = { get foo() { }, set foo(x) { } };
    var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
    return descriptor.get.name === "get foo" &&
      descriptor.set.name === "set foo";
  })();

  //shorthand methods
  (function () {
    var o = { foo() { } };
    return o.foo.name === "foo";
  })();

  //shorthand methods (no lexical binding)
  (function () {
    var f = "foo";
    return ({ f() { return f; } }).f() === "foo";
  })();

  //symbol-keyed methods
  (function () {
    var sym1 = Symbol("foo");
    var sym2 = Symbol();
    var o = {
      [sym1]: function () { },
      [sym2]: function () { }
    };

    return o[sym1].name === "[foo]" &&
      o[sym2].name === "";
  })();

  //class statements
  (function () {
    "use strict";
    class foo { };
    class bar { static name() { } };
    return foo.name === "foo" &&
      typeof bar.name === "function";
  })();

  //class expressions
  (function () {
    "use strict";
    return class foo { }.name === "foo" &&
      typeof class bar { static name() { } }.name === "function";
  })();

  //variables (class)
  (function () {
    var foo = class { };
    var bar = class baz { };
    var qux = class { static name() { } };
    return foo.name === "foo" &&
      bar.name === "baz" &&
      typeof qux.name === "function";
  })();

  //object methods (class)
  (function () {
    var o = { foo: class { }, bar: class baz { } };
    o.qux = class { };
    return o.foo.name === "foo" &&
      o.bar.name === "baz" &&
      o.qux.name === "";
  })();

  //class prototype methods
  (function () {
    "use strict";
    class C { foo() { } };
    return (new C).foo.name === "foo";
  })();

  //class static methods
  (function () {
    "use strict";
    class C { static foo() { } };
    return C.foo.name === "foo";
  })();

  //isn't writable, is configurable
  (function () {
    var descriptor = Object.getOwnPropertyDescriptor(function f() { }, "name");
    return descriptor.enumerable === false &&
      descriptor.writable === false &&
      descriptor.configurable === true;
  })();

  //String static methods
  //String.raw
  (function () {
    return typeof String.raw === 'function';
  })();

  //String.fromCodePoint
  (function () {
    return typeof String.fromCodePoint === 'function';
  })();

  //String.prototype methods
  //String.prototype.codePointAt
  (function () {
    return typeof String.prototype.codePointAt === 'function';
  })();

  //String.prototype.normalize
  (function () {
    return typeof String.prototype.normalize === "function"
      && "c\u0327\u0301".normalize("NFC") === "\u1e09"
      && "\u1e09".normalize("NFD") === "c\u0327\u0301";
  })();

  //String.prototype.repeat
  (function () {
    return typeof String.prototype.repeat === 'function'
      && "foo".repeat(3) === "foofoofoo";
  })();

  //String.prototype.startsWith
  (function () {
    return typeof String.prototype.startsWith === 'function'
      && "foobar".startsWith("foo");
  })();

  //String.prototype.startsWith throws on RegExp
  (function () {
    try {
      "a".startsWith(/./);
    } catch (e) {
      return typeof String.prototype.startsWith === 'function';
    }
  })();

  //String.prototype.endsWith
  (function () {
    return typeof String.prototype.endsWith === 'function'
      && "foobar".endsWith("bar");
  })();

  //String.prototype.endsWith throws on RegExp
  (function () {
    try {
      "a".endsWith(/./);
    } catch (e) {
      return typeof String.prototype.endsWith === 'function';
    }
  })();

  //String.prototype.includes
  (function () {
    return typeof String.prototype.includes === 'function'
      && "foobar".includes("oba");
  })();

  //String.prototype[Symbol.iterator]
  (function () {
    return typeof String.prototype[Symbol.iterator] === 'function';
  })();

  //String iterator prototype chain
  (function () {
    // Iterator instance
    var iterator = ''[Symbol.iterator]();
    // %StringIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1.hasOwnProperty(Symbol.iterator) &&
      !iterator.hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
  })();

  //RegExp.prototype properties
  //RegExp.prototype.flags
  (function () {
    return /./igm.flags === "gim" && /./.flags === "";
  })();

  //RegExp.prototype[Symbol.match]
  (function () {
    return typeof RegExp.prototype[Symbol.match] === 'function';
  })();

  //RegExp.prototype[Symbol.replace]
  (function () {
    return typeof RegExp.prototype[Symbol.replace] === 'function';
  })();

  //RegExp.prototype[Symbol.split]
  (function () {
    return typeof RegExp.prototype[Symbol.split] === 'function';
  })();

  //RegExp.prototype[Symbol.search]
  (function () {
    return typeof RegExp.prototype[Symbol.search] === 'function';
  })();

  //RegExp[Symbol.species]
  (function () {
    var prop = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
    return 'get' in prop && RegExp[Symbol.species] === RegExp;
  })();

  //Array static methods
  //Array.from, array-like objects
  (function () {
    return Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar";
  })();

  //Array.from, generator instances
  (function () {
    var iterable = (function* () { yield 1; yield 2; yield 3; } ());
    return Array.from(iterable) + '' === "1,2,3";
  })();

  //Array.from, generic iterables
  (function () {
    // var iterable = global.__createIterableObject([1, 2, 3]);
    // return Array.from(iterable) + '' === "1,2,3";
  })();

  //Array.from, instances of generic iterables
  (function () {
    // var iterable = global.__createIterableObject([1, 2, 3]);
    // return Array.from(Object.create(iterable)) + '' === "1,2,3";
  })();

  //Array.from map function, array-like objects
  (function () {
    return Array.from({ 0: "foo", 1: "bar", length: 2 }, function (e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1";
  })();

  //Array.from map function, generator instances
  (function () {
    var iterable = (function* () { yield "foo"; yield "bar"; yield "bal"; } ());
    return Array.from(iterable, function (e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1,bald2";
  })();

  //Array.from map function, generic iterables
  report.push('Array.from map function, generic iterables');
  (function () {
    // var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
    // return Array.from(iterable, function (e, i) {
    //   return e + this.baz + i;
    // }, { baz: "d" }) + '' === "food0,bard1,bald2";
  })();

  //Array.from map function, instances of iterables
  (function () {
    // var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
    // return Array.from(Object.create(iterable), function (e, i) {
    //   return e + this.baz + i;
    // }, { baz: "d" }) + '' === "food0,bard1,bald2";
  })();

  //Array.from, iterator closing
  (function () {
    // var closed = false;
    // var iter = global.__createIterableObject([1, 2, 3], {
    //   'return': function () { closed = true; return {}; }
    // });
    // try {
    //   Array.from(iter, function () { throw 42 });
    // } catch (e) { }
    // return closed;
  })();

  //Array.of
  (function () {
    return typeof Array.of === 'function' &&
      Array.of(2)[0] === 2;
  })();

  //Array[Symbol.species]
  (function () {
    var prop = Object.getOwnPropertyDescriptor(Array, Symbol.species);
    return 'get' in prop && Array[Symbol.species] === Array;
  })();

  //Array.prototype methods
  //Array.prototype.copyWithin
  (function () {
    return typeof Array.prototype.copyWithin === 'function';
  })();

  //Array.prototype.find
  (function () {
    return typeof Array.prototype.find === 'function';
  })();

  //Array.prototype.findIndex
  (function () {
    return typeof Array.prototype.findIndex === 'function';
  })();

  //Array.prototype.fill
  (function () {
    return typeof Array.prototype.fill === 'function';
  })();

  //Array.prototype.keys
  (function () {
    return typeof Array.prototype.keys === 'function';
  })();

  //Array.prototype.values
  (function () {
    return typeof Array.prototype.values === 'function';
  })();

  //Array.prototype.entries
  (function () {
    return typeof Array.prototype.entries === 'function';
  })();

  //Array.prototype[Symbol.iterator]
  (function () {
    return typeof Array.prototype[Symbol.iterator] === 'function';
  })();

  //Array iterator prototype chain
  (function () {
    // Iterator instance
    var iterator = [][Symbol.iterator]();
    // %ArrayIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
      !proto1.hasOwnProperty(Symbol.iterator) &&
      !iterator.hasOwnProperty(Symbol.iterator) &&
      iterator[Symbol.iterator]() === iterator;
  })();

  //Array.prototype[Symbol.unscopables]
  (function () {
    var unscopables = Array.prototype[Symbol.unscopables];
    if (!unscopables) {
      return false;
    }
    var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
    for (var i = 0; i < ns.length; i++) {
      if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
    }
    return true;
  })();

  //Number properties
  //Number.isFinite
  (function () {
    return typeof Number.isFinite === 'function';
  })();

  //Number.isInteger
  (function () {
    return typeof Number.isInteger === 'function';
  })();

  //Number.isSafeInteger
  (function () {
    return typeof Number.isSafeInteger === 'function';
  })();

  //Number.isNaN
  (function () {
    return typeof Number.isNaN === 'function';
  })();

  //Number.EPSILON
  (function () {
    return typeof Number.EPSILON === 'number';
  })();

  //Number.MIN_SAFE_INTEGER
  (function () {
    return typeof Number.MIN_SAFE_INTEGER === 'number';
  })();

  //Number.MAX_SAFE_INTEGER
  (function () {
    return typeof Number.MAX_SAFE_INTEGER === 'number';
  })();

  //Math methods
  //Math.clz32
  (function () {
    return typeof Math.clz32 === "function";
  })();

  //Math.imul
  (function () {
    return typeof Math.imul === "function";
  })();

  //Math.sign
  (function () {
    return typeof Math.sign === "function";
  })();

  //Math.log10
  (function () {
    return typeof Math.log10 === "function";
  })();

  //Math.log2
  (function () {
    return typeof Math.log2 === "function";
  })();

  //Math.log1p
  (function () {
    return typeof Math.log1p === "function";
  })();

  //Math.expm1
  (function () {
    return typeof Math.expm1 === "function";
  })();

  //Math.cosh
  (function () {
    return typeof Math.cosh === "function";
  })();

  //Math.sinh
  (function () {
    return typeof Math.sinh === "function";
  })();

  //Math.tanh
  (function () {
    return typeof Math.tanh === "function";
  })();

  //Math.acosh
  (function () {
    return typeof Math.acosh === "function";
  })();

  //Math.asinh
  (function () {
    return typeof Math.asinh === "function";
  })();

  //Math.atanh
  (function () {
    return typeof Math.atanh === "function";
  })();

  //Math.trunc
  (function () {
    return typeof Math.trunc === "function";
  })();

  //Math.fround
  (function () {
    return typeof Math.fround === "function";
  })();

  //Math.cbrt
  (function () {
    return typeof Math.cbrt === "function";
  })();

  //Math.hypot
  (function () {
    return Math.hypot() === 0 &&
      Math.hypot(1) === 1 &&
      Math.hypot(9, 12, 20) === 25 &&
      Math.hypot(27, 36, 60, 100) === 125;
  })();

  //Date.prototype[Symbol.toPrimitive]
  //Array is subclassable
  //length property (accessing)
  (function () {
    "use strict";
    class C extends Array { }
    var c = new C();
    var len1 = c.length;
    c[2] = 'foo';
    var len2 = c.length;
    return len1 === 0 && len2 === 3;
  })();

  //length property (setting)
  (function () {
    "use strict";
    class C extends Array { }
    var c = new C();
    c[2] = 'foo';
    c.length = 1;
    return c.length === 1 && !(2 in c);
  })();

  //correct prototype chain
  (function () {
    "use strict";
    class C extends Array { }
    var c = new C();
    return c instanceof C && c instanceof Array && Object.getPrototypeOf(C) === Array;
  })();

  //Array.isArray support
  (function () {
    class C extends Array { }
    return Array.isArray(new C());
  })();

  //Array.prototype.concat
  (function () {
    class C extends Array { }
    var c = new C();
    return c.concat(1) instanceof C;
  })();

  //Array.prototype.filter
  (function () {
    class C extends Array { }
    var c = new C();
    return c.filter(Boolean) instanceof C;
  })();

  //Array.prototype.map
  (function () {
    class C extends Array { }
    var c = new C();
    return c.map(Boolean) instanceof C;
  })();

  //Array.prototype.slice
  (function () {
    class C extends Array { }
    var c = new C();
    c.push(2, 4, 6);
    return c.slice(1, 2) instanceof C;
  })();

  //Array.prototype.splice
  (function () {
    class C extends Array { }
    var c = new C();
    c.push(2, 4, 6);
    return c.splice(1, 2) instanceof C;
  })();

  //Array.from
  (function () {
    class C extends Array { }
    return C.from({ length: 0 }) instanceof C;
  })();

  //Array.of
  (function () {
    class C extends Array { }
    return C.of(0) instanceof C;
  })();

  //RegExp is subclassable
  //basic functionality
  (function () {
    "use strict";
    class R extends RegExp { }
    var r = new R("baz", "g");
    return r.global && r.source === "baz";
  })();

  //correct prototype chain
  (function () {
    "use strict";
    class R extends RegExp { }
    var r = new R("baz", "g");
    return r instanceof R && r instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
  })();

  //RegExp.prototype.exec
  (function () {
    class R extends RegExp { }
    var r = new R("baz", "g");
    return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
  })();

  //RegExp.prototype.test
  (function () {
    class R extends RegExp { }
    var r = new R("baz");
    return r.test("foobarbaz");
  })();

  //Function is subclassable
  //can be called
  (function () {
    "use strict";
    class C extends Function { }
    var c = new C("return 'foo';");
    return c() === 'foo';
  })();

  //correct prototype chain
  (function () {
    class C extends Function { }
    var c = new C("return 'foo';");
    return c instanceof C && c instanceof Function && Object.getPrototypeOf(C) === Function;
  })();

  //can be used with "new"
  (function () {
    "use strict";
    class C extends Function { }
    var c = new C("this.bar = 2;");
    c.prototype.baz = 3;
    return new c().bar === 2 && new c().baz === 3;
  })();

  //Function.prototype.call
  (function () {
    "use strict";
    class C extends Function { }
    var c = new C("x", "return this.bar + x;");
    return c.call({ bar: 1 }, 2) === 3;
  })();

  //Function.prototype.apply
  (function () {
    "use strict";
    class C extends Function { }
    var c = new C("x", "return this.bar + x;");
    return c.apply({ bar: 1 }, [2]) === 3;
  })();

  //Function.prototype.bind
  (function () {
    class C extends Function { }
    var c = new C("x", "y", "return this.bar + x + y;").bind({ bar: 1 }, 2);
    return c(6) === 9 && c instanceof C;
  })();

  //Promise is subclassable
  report.push('Promise is subclassable');

  //basic functionality
  (function () {
    // class P extends Promise { }
    // var p1 = new P(function (resolve, reject) { resolve("foo"); });
    // var p2 = new P(function (resolve, reject) { reject("quux"); });
    // var score = +(p1 instanceof P);

    // function thenFn(result) { score += (result === "foo"); check(); }
    // function catchFn(result) { score += (result === "quux"); check(); }
    // function shouldNotRun(result) { score = -Infinity; }

    // p1.then(thenFn, shouldNotRun);
    // p2.then(shouldNotRun, catchFn);
    // p1.catch(shouldNotRun);
    // p2.catch(catchFn);

    // p1.then(function () {
    //   // P.prototype.then() should return a new P
    //   score += p1.then() instanceof P && p1.then() !== p1;
    //   check();
    // });

    // function check() {
    //   if (score === 5) asyncTestPassed();
    // }
  })();

  //correct prototype chain
  (function () {
    // "use strict";
    // class C extends Promise { }
    // var c = new C(function (resolve, reject) { resolve("foo"); });
    // return c instanceof C && c instanceof Promise && Object.getPrototypeOf(C) === Promise;
  })();

  //Promise.all
  (function () {
    // class P extends Promise { }
    // var fulfills = P.all([
    //   new Promise(function (resolve) { setTimeout(resolve, 2000, "foo"); }),
    //   new Promise(function (resolve) { setTimeout(resolve, 1000, "bar"); }),
    // ]);
    // var rejects = P.all([
    //   new Promise(function (_, reject) { setTimeout(reject, 2000, "baz"); }),
    //   new Promise(function (_, reject) { setTimeout(reject, 1000, "qux"); }),
    // ]);
    // var score = +(fulfills instanceof P);
    // fulfills.then(function (result) { score += (result + "" === "foo,bar"); check(); });
    // rejects.catch(function (result) { score += (result === "qux"); check(); });

    // function check() {
    //   if (score === 3) asyncTestPassed();
    // }
  })();

  //Promise.race
  (function () {
    // class P extends Promise { }
    // var fulfills = P.race([
    //   new Promise(function (resolve) { setTimeout(resolve, 1000, "foo"); }),
    //   new Promise(function (_, reject) { setTimeout(reject, 2000, "bar"); }),
    // ]);
    // var rejects = P.race([
    //   new Promise(function (_, reject) { setTimeout(reject, 1000, "baz"); }),
    //   new Promise(function (resolve) { setTimeout(resolve, 2000, "qux"); }),
    // ]);
    // var score = +(fulfills instanceof P);
    // fulfills.then(function (result) { score += (result === "foo"); check(); });
    // rejects.catch(function (result) { score += (result === "baz"); check(); });

    // function check() {
    //   if (score === 3) asyncTestPassed();
    // }
  })();

  //miscellaneous subclassables
  report.push('miscellaneous subclassables');

  //Boolean is subclassable
  (function () {
    // "use strict";
    // class C extends Boolean { }
    // var c = new C(true);
    // return c instanceof Boolean
    //   && c instanceof C
    //   && c == true;
  })();

  //Number is subclassable
  (function () {
    // "use strict";
    // class C extends Number { }
    // var c = new C(6);
    // return c instanceof Number
    //   && c instanceof C
    //   && +c === 6;
  })();

  //String is subclassable
  (function () {
    // "use strict";
    // class C extends String { }
    // var c = new C("golly");
    // return c instanceof String
    //   && c instanceof C
    //   && c + '' === "golly"
    //   && c[0] === "g"
    //   && c.length === 5;
  })();

  //Error is subclassable
  (function () {
    // "use strict";
    // class C extends Error { }
    // var c = new C();
    // return c instanceof Error
    //   && c instanceof C
    //   && Object.prototype.toString.call(c) === "[object Error]";
  })();

  //Map is subclassable
  (function () {
    // "use strict";
    // var key = {};
    // class M extends Map { }
    // var map = new M();

    // map.set(key, 123);

    // return map instanceof M && map.has(key) && map.get(key) === 123;
  })();

  //Set is subclassable
  (function () {
    // "use strict";
    // var obj = {};
    // class S extends Set { }
    // var set = new S();

    // set.add(123);
    // set.add(123);

    // return set instanceof S && set.has(123);
  })();

  //prototype of bound functions
  //basic functions
  (function () {
    function correctProtoBound(proto) {
      var f = function () { };
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(f, proto);
      }
      else {
        f.__proto__ = proto;
      }
      var boundF = Function.prototype.bind.call(f, null);
      return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype)
      && correctProtoBound({})
      && correctProtoBound(null);
  })();

  //generator functions
  (function () {
    function correctProtoBound(proto) {
      var f = function* () { };
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(f, proto);
      }
      else {
        f.__proto__ = proto;
      }
      var boundF = Function.prototype.bind.call(f, null);
      return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype)
      && correctProtoBound({})
      && correctProtoBound(null);
  })();

  //arrow functions
  (function () {
    function correctProtoBound(proto) {
      var f = () => 5;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(f, proto);
      }
      else {
        f.__proto__ = proto;
      }
      var boundF = Function.prototype.bind.call(f, null);
      return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype)
      && correctProtoBound({})
      && correctProtoBound(null);
  })();

  //classes
  (function () {
    function correctProtoBound(proto) {
      class C { }
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(C, proto);
      }
      else {
        C.__proto__ = proto;
      }
      var boundF = Function.prototype.bind.call(C, null);
      return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype)
      && correctProtoBound({})
      && correctProtoBound(null);
  })();

  //subclasses
  (function () {
    function correctProtoBound(superclass) {
      class C extends superclass {
        constructor() {
          super();
          return Object.create(null);
        }
      }
      var boundF = Function.prototype.bind.call(C, null);
      return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
    }
    return correctProtoBound(function () { })
      && correctProtoBound(Array)
      && correctProtoBound(null);
  })();

  //Proxy, internal 'get' calls
  //ToPrimitive
  (function () {
    // ToPrimitive -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ toString: Function() }, { get: function (o, k) { get.push(k); return o[k]; } });
    p + 3;
    return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString";
  })();

  //CreateListFromArrayLike
  (function () {
    // CreateListFromArrayLike -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ length: 2, 0: 0, 1: 0 }, { get: function (o, k) { get.push(k); return o[k]; } });
    Function.prototype.apply({}, p);
    return get + '' === "length,0,1";
  })();

  //instanceof operator
  (function () {
    // InstanceofOperator -> GetMethod -> GetV -> [[Get]]
    // InstanceofOperator -> OrdinaryHasInstance -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function(), { get: function (o, k) { get.push(k); return o[k]; } });
    ({}) instanceof p;
    return get[0] === Symbol.hasInstance && get.slice(1) + '' === "prototype";
  })();

  //HasBinding
  (function () {
    // HasBinding -> Get -> [[Get]]
    // var get = [];
    // var p = new Proxy({ foo: 1 }, { get: function (o, k) { get.push(k); return o[k]; } });
    // p[Symbol.unscopables] = p;
    // with (p) {
    //   typeof foo;
    // }
    // return get[0] === Symbol.unscopables && get.slice(1) + '' === "foo";
    report.push('HasBinding');
  })();

  //CreateDynamicFunction
  (function () {
    // CreateDynamicFunction -> GetPrototypeFromConstructor -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function, { get: function (o, k) { get.push(k); return o[k]; } });
    new p;
    return get + '' === "prototype";
  })();

  //ClassDefinitionEvaluation
  (function () {
    // ClassDefinitionEvaluation -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function(), { get: function (o, k) { get.push(k); return o[k]; } });
    class C extends p { }
    return get + '' === "prototype";
  })();

  //IteratorComplete, IteratorValue
  (function () {
    // IteratorComplete -> Get -> [[Get]]
    // IteratorValue -> Get -> [[Get]]
    var get = [];
    var iterable = {};
    iterable[Symbol.iterator] = function () {
      return {
        next: function () {
          return new Proxy({ value: 2, done: false }, { get: function (o, k) { get.push(k); return o[k]; } });
        }
      };
    }
    var i = 0;
    for (var e of iterable) {
      if (++i >= 2) break;
    }
    return get + '' === "done,value,done,value";
  })();

  //ToPropertyDescriptor
  (function () {
    // ToPropertyDescriptor -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({
      enumerable: true, configurable: true, value: true,
      writable: true, get: Function(), set: Function()
    }, { get: function (o, k) { get.push(k); return o[k]; } });
    try {
      // This will throw, since it will have true for both "get" and "value",
      // but not before performing a Get on every property.
      Object.defineProperty({}, "foo", p);
    } catch (e) {
      return get + '' === "enumerable,configurable,value,writable,get,set";
    }
  })();

  //Object.assign
  (function () {
    // Object.assign -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ foo: 1, bar: 2 }, { get: function (o, k) { get.push(k); return o[k]; } });
    Object.assign({}, p);
    return get + '' === "foo,bar";
  })();

  //Object.defineProperties
  (function () {
    // Object.defineProperties -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ foo: {}, bar: {} }, { get: function (o, k) { get.push(k); return o[k]; } });
    Object.defineProperties({}, p);
    return get + '' === "foo,bar";
  })();

  //Function.prototype.bind
  (function () {
    // Function.prototype.bind -> Get -> [[Get]]
    var get = [];
    var p = new Proxy(Function(), { get: function (o, k) { get.push(k); return o[k]; } });
    Function.prototype.bind.call(p);
    return get + '' === "length,name";
  })();

  //Error.prototype.toString
  (function () {
    // Error.prototype.toString -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function (o, k) { get.push(k); return o[k]; } });
    Error.prototype.toString.call(p);
    return get + '' === "name,message";
  })();

  //String.raw
  (function () {
    // String.raw -> Get -> [[Get]]
    var get = [];
    var raw = new Proxy({ length: 2, 0: '', 1: '' }, { get: function (o, k) { get.push(k); return o[k]; } });
    var p = new Proxy({ raw: raw }, { get: function (o, k) { get.push(k); return o[k]; } });
    String.raw(p);
    return get + '' === "raw,length,0,1";
  })();

  //RegExp constructor
  (function () {
    // RegExp -> Get -> [[Get]]
    var get = [];
    var re = { constructor: null };
    re[Symbol.match] = true;
    var p = new Proxy(re, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp(p);
    return get[0] === Symbol.match && get.slice(1) + '' === "constructor,source,flags";
  })();

  //RegExp.prototype.flags
  (function () {
    // RegExp.prototype.flags -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function (o, k) { get.push(k); return o[k]; } });
    Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
    return get + '' === "global,ignoreCase,multiline,unicode,sticky";
  })();

  //RegExp.prototype.test
  (function () {
    // RegExp.prototype.test -> RegExpExec -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function () { return null; } }, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp.prototype.test.call(p);
    return get + '' === "exec";
  })();

  //RegExp.prototype.toString
  (function () {
    // RegExp.prototype.toString -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp.prototype.toString.call(p);
    return get + '' === "source,flags";
  })();

  //RegExp.prototype[Symbol.match]
  (function () {
    // RegExp.prototype[Symbol.match] -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function () { return null; } }, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp.prototype[Symbol.match].call(p);
    p.global = true;
    RegExp.prototype[Symbol.match].call(p);
    return get + '' === "global,exec,global,unicode,exec";
  })();

  //RegExp.prototype[Symbol.replace]
  (function () {
    // RegExp.prototype[Symbol.replace] -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function () { return null; } }, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp.prototype[Symbol.replace].call(p);
    p.global = true;
    RegExp.prototype[Symbol.replace].call(p);
    return get + '' === "global,exec,global,unicode,exec";
  })();

  //RegExp.prototype[Symbol.search]
  (function () {
    // RegExp.prototype[Symbol.search] -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ exec: function () { return null; } }, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp.prototype[Symbol.search].call(p);
    return get + '' === "lastIndex,exec";
  })();

  //RegExp.prototype[Symbol.split]
  (function () {
    // RegExp.prototype[Symbol.split] -> Get -> [[Get]]
    var get = [];
    var constructor = Function();
    constructor[Symbol.species] = Object;
    var p = new Proxy({ constructor: constructor, flags: '', exec: function () { return null; } }, { get: function (o, k) { get.push(k); return o[k]; } });
    RegExp.prototype[Symbol.split].call(p, "");
    return get + '' === "constructor,flags,exec";
  })();

  //Array.from
  (function () {
    // Array.from -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ length: 2, 0: '', 1: '' }, { get: function (o, k) { get.push(k); return o[k]; } });
    Array.from(p);
    return get[0] === Symbol.iterator && get.slice(1) + '' === "length,0,1";
  })();

  //Array.prototype.concat
  (function () {
    // Array.prototype.concat -> Get -> [[Get]]
    var get = [];
    var arr = [1];
    arr.constructor = undefined;
    var p = new Proxy(arr, { get: function (o, k) { get.push(k); return o[k]; } });
    Array.prototype.concat.call(p, p);
    return get[0] === "constructor"
      && get[1] === Symbol.isConcatSpreadable
      && get[2] === "length"
      && get[3] === "0"
      && get[4] === get[1] && get[5] === get[2] && get[6] === get[3]
      && get.length === 7;
  })();

  //Array.prototype iteration methods
  (function () {
    // Array.prototype methods -> Get -> [[Get]]
    var methods = ['copyWithin', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach',
      'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'some'];
    var get;
    var p = new Proxy({ length: 2, 0: '', 1: '' }, { get: function (o, k) { get.push(k); return o[k]; } });
    for (var i = 0; i < methods.length; i += 1) {
      get = [];
      Array.prototype[methods[i]].call(p, Function());
      if (get + '' !== (
        methods[i] === 'fill' ? "length" :
          methods[i] === 'every' ? "length,0" :
            methods[i] === 'lastIndexOf' || methods[i] === 'reduceRight' ? "length,1,0" :
              "length,0,1"
      )) {
        return false;
      }
    }
    return true;
  })();

  //Array.prototype.pop
  (function () {
    // Array.prototype.pop -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0, 1, 2, 3], { get: function (o, k) { get.push(k); return o[k]; } });
    Array.prototype.pop.call(p);
    return get + '' === "length,3";
  })();

  //Array.prototype.reverse
  (function () {
    // Array.prototype.reverse -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0, , 2, , 4, ,], { get: function (o, k) { get.push(k); return o[k]; } });
    Array.prototype.reverse.call(p);
    return get + '' === "length,0,4,2";
  })();

  //Array.prototype.shift
  (function () {
    // Array.prototype.shift -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0, 1, 2, 3], { get: function (o, k) { get.push(k); return o[k]; } });
    Array.prototype.shift.call(p);
    return get + '' === "length,0,1,2,3";
  })();

  //Array.prototype.splice
  (function () {
    // Array.prototype.splice -> Get -> [[Get]]
    var get = [];
    var p = new Proxy([0, 1, 2, 3], { get: function (o, k) { get.push(k); return o[k]; } });
    Array.prototype.splice.call(p, 1, 1);
    Array.prototype.splice.call(p, 1, 0, 1);
    return get + '' === "length,constructor,1,2,3,length,constructor,2,1";
  })();

  //Array.prototype.toString
  (function () {
    // Array.prototype.toString -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({ join: Function() }, { get: function (o, k) { get.push(k); return o[k]; } });
    Array.prototype.toString.call(p);
    return get + '' === "join";
  })();

  //JSON.stringify
  (function () {
    // JSON.stringify -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function (o, k) { get.push(k); return o[k]; } });
    JSON.stringify(p);
    return get + '' === "toJSON";
  })();

  //Promise resolve functions
  (function () {
    // Promise resolve functions -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({}, { get: function (o, k) { get.push(k); return o[k]; } });
    new Promise(function (resolve) { resolve(p); });
    return get + '' === "then";
  })();

  //String.prototype.match
  (function () {
    // String.prototype.match -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function (o, k) { get.push(k); return o[k]; } });
    "".match(p);
    return get[0] === Symbol.match && get[1] === Symbol.toPrimitive && get.length === 2;
  })();

  //String.prototype.replace
  (function () {
    // String.prototype.replace functions -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function (o, k) { get.push(k); return o[k]; } });
    "".replace(p);
    return get[0] === Symbol.replace && get[1] === Symbol.toPrimitive && get.length === 2;
  })();

  //String.prototype.search
  (function () {
    // String.prototype.search functions -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function (o, k) { get.push(k); return o[k]; } });
    "".search(p);
    return get[0] === Symbol.search && get[1] === Symbol.toPrimitive && get.length === 2;
  })();

  //String.prototype.split
  (function () {
    // String.prototype.split functions -> Get -> [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, { get: function (o, k) { get.push(k); return o[k]; } });
    "".split(p);
    return get[0] === Symbol.split && get[1] === Symbol.toPrimitive && get.length === 2;
  })();

  //Date.prototype.toJSON
  (function () {
    // Date.prototype.toJSON -> ToPrimitive -> Get -> [[Get]]
    // Date.prototype.toJSON -> Invoke -> GetMethod -> GetV -> [[Get]]
    var get = [];
    var p = new Proxy({ toString: Function(), toISOString: Function() }, { get: function (o, k) { get.push(k); return o[k]; } });
    Date.prototype.toJSON.call(p);
    return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString,toISOString";
  })();

  //Proxy, internal 'set' calls
  //Object.assign
  (function () {
    // Object.assign -> Set -> [[Set]]
    var set = [];
    var p = new Proxy({}, { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    Object.assign(p, { foo: 1, bar: 2 });
    return set + '' === "foo,bar";
  })();

  //Array.from
  (function () {
    // Array.from -> Set -> [[Set]]
    var set = [];
    var p = new Proxy({}, { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    Array.from.call(function () { return p; }, { length: 2, 0: 1, 1: 2 });
    return set + '' === "length";
  })();

  //Array.of
  (function () {
    // Array.from -> Set -> [[Set]]
    var set = [];
    var p = new Proxy({}, { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    Array.of.call(function () { return p; }, 1, 2, 3);
    return set + '' === "length";
  })();

  //Array.prototype.copyWithin
  (function () {
    // Array.prototype.copyWithin -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([1, 2, 3, 4, 5, 6], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.copyWithin(0, 3);
    return set + '' === "0,1,2";
  })();

  //Array.prototype.fill
  (function () {
    // Array.prototype.fill -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([1, 2, 3, 4, 5, 6], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.fill(0, 3);
    return set + '' === "3,4,5";
  })();

  //Array.prototype.pop
  (function () {
    // Array.prototype.pop -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.pop();
    return set + '' === "length";
  })();

  //Array.prototype.push
  (function () {
    // Array.prototype.push -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.push(0, 0, 0);
    return set + '' === "0,1,2,length";
  })();

  //Array.prototype.reverse
  (function () {
    // Array.prototype.reverse -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([0, 0, 0, ,], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.reverse();
    return set + '' === "3,1,2";
  })();

  //Array.prototype.shift
  (function () {
    // Array.prototype.shift -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([0, 0, , 0], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.shift();
    return set + '' === "0,2,length";
  })();

  //Array.prototype.splice
  (function () {
    // Array.prototype.splice -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([1, 2, 3], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.splice(1, 0, 0);
    return set + '' === "3,2,1,length";
  })();

  //Array.prototype.unshift
  (function () {
    // Array.prototype.unshift -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([0, 0, , 0], { set: function (o, k, v) { set.push(k); o[k] = v; return true; } });
    p.unshift(0, 1);
    return set + '' === "5,3,2,0,1,length";
  })();

  //Proxy, internal 'defineProperty' calls
  //[[Set]]
  (function () {
    // [[Set]] -> [[DefineOwnProperty]]
    var def = [];
    var p = new Proxy({ foo: 1, bar: 2 }, { defineProperty: function (o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; } });
    p.foo = 2; p.bar = 4;
    return def + '' === "foo,bar";
  })();

  //SetIntegrityLevel
  (function () {
    // SetIntegrityLevel -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
    var def = [];
    var p = new Proxy({ foo: 1, bar: 2 }, { defineProperty: function (o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; } });
    Object.freeze(p);
    return def + '' === "foo,bar";
  })();

  //Proxy, internal 'deleteProperty' calls
  //Array.prototype.copyWithin
  (function () {
    // Array.prototype.copyWithin -> DeletePropertyOrThrow -> [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, 0, , , ,], { deleteProperty: function (o, v) { del.push(v); return delete o[v]; } });
    p.copyWithin(0, 3);
    return del + '' === "0,1,2";
  })();

  //Array.prototype.pop
  (function () {
    // Array.prototype.pop -> DeletePropertyOrThrow -> [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, 0], { deleteProperty: function (o, v) { del.push(v); return delete o[v]; } });
    p.pop();
    return del + '' === "2";
  })();

  //Array.prototype.reverse
  (function () {
    // Array.prototype.reverse -> DeletePropertyOrThrow -> [[Delete]]
    var del = [];
    var p = new Proxy([0, , 2, , 4, ,], { deleteProperty: function (o, v) { del.push(v); return delete o[v]; } });
    p.reverse();
    return del + '' === "0,4,2";
  })();

  //Array.prototype.shift
  (function () {
    // Array.prototype.shift -> DeletePropertyOrThrow -> [[Delete]]
    var del = [];
    var p = new Proxy([0, , 0, , 0, 0], { deleteProperty: function (o, v) { del.push(v); return delete o[v]; } });
    p.shift();
    return del + '' === "0,2,5";
  })();

  //Array.prototype.splice
  (function () {
    // Array.prototype.splice -> DeletePropertyOrThrow -> [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, 0, 0, , 0], { deleteProperty: function (o, v) { del.push(v); return delete o[v]; } });
    p.splice(2, 2, 0);
    return del + '' === "3,5";
  })();

  //Array.prototype.unshift
  (function () {
    // Array.prototype.unshift -> DeletePropertyOrThrow -> [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, , 0, , 0], { deleteProperty: function (o, v) { del.push(v); return delete o[v]; } });
    p.unshift(0);
    return del + '' === "5,3";
  })();

  //Proxy, internal 'getOwnPropertyDescriptor' calls
  //[[Set]]
  (function () {
    // [[Set]] -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({},
      { getOwnPropertyDescriptor: function (o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); } });
    p.foo = 1; p.bar = 1;
    return gopd + '' === "foo,bar";
  })();

  //Object.assign
  (function () {
    // Object.assign -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({ foo: 1, bar: 2 },
      { getOwnPropertyDescriptor: function (o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); } });
    Object.assign({}, p);
    return gopd + '' === "foo,bar";
  })();

  //Object.prototype.hasOwnProperty
  (function () {
    // Object.prototype.hasOwnProperty -> HasOwnProperty -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({ foo: 1, bar: 2 },
      { getOwnPropertyDescriptor: function (o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); } });
    p.hasOwnProperty('garply');
    return gopd + '' === "garply";
  })();

  //Function.prototype.bind
  (function () {
    // Function.prototype.bind -> HasOwnProperty -> [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy(Function(),
      { getOwnPropertyDescriptor: function (o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); } });
    p.bind();
    return gopd + '' === "length";
  })();

  //Proxy, internal 'ownKeys' calls
  //SetIntegrityLevel
  (function () {
    // SetIntegrityLevel -> [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy({}, { ownKeys: function (o) { ownKeysCalled++; return Object.keys(o); } });
    Object.freeze(p);
    return ownKeysCalled === 1;
  })();

  //TestIntegrityLevel
  (function () {
    // TestIntegrityLevel -> [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy(Object.preventExtensions({}), { ownKeys: function (o) { ownKeysCalled++; return Object.keys(o); } });
    Object.isFrozen(p);
    return ownKeysCalled === 1;
  })();

  //SerializeJSONObject
  (function () {
    // SerializeJSONObject -> EnumerableOwnNames -> [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy({}, { ownKeys: function (o) { ownKeysCalled++; return Object.keys(o); } });
    JSON.stringify({ a: p, b: p });
    return ownKeysCalled === 2;
  })();

  //Object static methods accept primitives
  //Object.getPrototypeOf
  (function () {
    return Object.getPrototypeOf('a').constructor === String;
  })();

  //Object.getOwnPropertyDescriptor
  (function () {
    return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
  })();

  //Object.getOwnPropertyNames
  (function () {
    var s = Object.getOwnPropertyNames('a');
    return s.length === 2 &&
      ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
  })();

  //Object.seal
  (function () {
    return Object.seal('a') === 'a';
  })();

  //Object.freeze
  (function () {
    return Object.freeze('a') === 'a';
  })();

  //Object.preventExtensions
  (function () {
    return Object.preventExtensions('a') === 'a';
  })();

  //Object.isSealed
  (function () {
    return Object.isSealed('a') === true;
  })();

  //Object.isFrozen
  (function () {
    return Object.isFrozen('a') === true;
  })();

  //Object.isExtensible
  (function () {
    return Object.isExtensible('a') === false;
  })();

  //Object.keys
  (function () {
    var s = Object.keys('a');
    return s.length === 1 && s[0] === '0';
  })();

  //own property order
  //Object.keys
  (function () {
    var obj = {
      // Non-negative integer names appear first in value order
      2: true,
      0: true,
      1: true,
      // Other string names appear in source order
      ' ': true,
      // Non-negative integers are sorted above other names
      9: true,
      D: true,
      B: true,
      // Negative integers are treated as other names
      '-1': true,
    };
    // Other string names are added in order of creation
    obj.A = true;
    // Non-negative integer names, conversely, ignore order of creation
    obj[3] = true;
    // Having a total of 20+ properties doesn't affect property order
    "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function (key) {
      obj[key] = true;
    });
    // Object.defineProperty doesn't affect the above rules
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    // Deleting and reinserting a property doesn't preserve its position
    delete obj[2];
    obj[2] = true;

    var forInOrder = '';
    for (var key in obj) forInOrder += key;

    return Object.keys(obj).join('') === forInOrder;
  })();

  //Object.getOwnPropertyNames
  (function () {
    var obj = {
      2: true,
      0: true,
      1: true,
      ' ': true,
      9: true,
      D: true,
      B: true,
      '-1': true
    };
    obj.A = true;
    obj[3] = true;
    "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function (key) {
      obj[key] = true;
    });
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;

    return Object.getOwnPropertyNames(obj).join('') === "012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC";
  })();

  //Object.assign
  (function () {
    var result = '';
    var target = {};

    "012349 DBACEFGHIJKLMNOPQRST".split('').concat(-1).forEach(function (key) {
      Object.defineProperty(target, key, {
        set: function () {
          result += key;
        }
      })
    });

    var obj = { 2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1' };
    Object.defineProperty(obj, 'A', { value: 'A', enumerable: true });
    Object.defineProperty(obj, '3', { value: '3', enumerable: true });
    Object.defineProperty(obj, 'C', { value: 'C', enumerable: true });
    Object.defineProperty(obj, '4', { value: '4', enumerable: true });
    delete obj[2];
    obj[2] = true;

    "EFGHIJKLMNOPQRST".split('').forEach(function (key) {
      obj[key] = key;
    });

    Object.assign(target, obj);

    return result === "012349 DB-1ACEFGHIJKLMNOPQRST";
  })();

  //JSON.stringify
  (function () {
    var obj = {
      2: true,
      0: true,
      1: true,
      ' ': true,
      9: true,
      D: true,
      B: true,
      '-1': true
    };
    obj.A = true;
    obj[3] = true;
    "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function (key) {
      obj[key] = true;
    });
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;

    return JSON.stringify(obj) ===
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"M":true,"N":true,"O":true,"P":true,"Q":true,"R":true,"S":true,"T":true,"U":true,"V":true,"W":true,"X":true,"Y":true,"Z":true,"C":true}';
  })();

  //JSON.parse
  (function () {
    var result = '';
    JSON.parse(
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"A":true,"C":true}',
      function reviver(k, v) {
        result += k;
        return v;
      }
    );
    return result === "012349 DB-1EFGHIJKLAC";
  })();

  //Reflect.ownKeys, string key order
  (function () {
    var obj = {
      2: true,
      0: true,
      1: true,
      ' ': true,
      9: true,
      D: true,
      B: true,
      '-1': true
    };
    obj.A = true;
    obj[3] = true;
    "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function (key) {
      obj[key] = true;
    });
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;

    return Reflect.ownKeys(obj).join('') === "012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC";
  })();

  //Reflect.ownKeys, symbol key order
  (function () {
    var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
    var obj = {
      1: true,
      A: true,
    };
    obj.B = true;
    obj[sym1] = true;
    obj[2] = true;
    obj[sym2] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, sym3, { value: true, enumerable: true });
    Object.defineProperty(obj, 'D', { value: true, enumerable: true });

    var result = Reflect.ownKeys(obj);
    var l = result.length;
    return result[l - 3] === sym1 && result[l - 2] === sym2 && result[l - 1] === sym3;
  })();

  //miscellaneous
  //no escaped reserved words as identifiers
  (function () {
    var \u0061;
    try {
      eval('var v\\u0061r');
    } catch (e) {
      return true;
    }
  })();

  //duplicate property names in strict mode
  (function () {
    'use strict';
    return this === undefined && ({ a: 1, a: 1 }).a === 1;
  })();

  //no semicolon needed after do-while
  (function () {
    do { } while (false) return true;
  })();

  //no assignments allowed in for-in head in strict mode
  (function () {
    'use strict';
    try {
      eval('for (var i = 0 in {}) {}');
    }
    catch (e) {
      return true;
    }
  })();

  //accessors aren't constructors
  (function () {
    var f = (Object.getOwnPropertyDescriptor({ get a() { } }, 'a')).get;
    try {
      new f;
    } catch (e) {
      return true;
    }
  })();

  //Invalid Date
  (function () {
    return new Date(NaN) + "" === "Invalid Date";
  })();

  //RegExp constructor can alter flags
  (function () {
    return new RegExp(/./im, "g").global === true;
  })();

  //RegExp.prototype.toString generic and uses "flags" property
  (function () {
    return RegExp.prototype.toString.call({ source: 'foo', flags: 'bar' }) === '/foo/bar';
  })();

  //built-in prototypes are not instances
  (function () {
    try {
      RegExp.prototype.exec(); return false;
    } catch (e) { }
    try {
      Date.prototype.valueOf(); return false;
    } catch (e) { }

    if (![Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError].every(function (E) {
      return Object.prototype.toString.call(E.prototype) === '[object Object]';
    })) {
      return false;
    }

    return true;
  })();

  //function 'length' is configurable
  (function () {
    var fn = function (a, b) { };

    var desc = Object.getOwnPropertyDescriptor(fn, "length");
    if (desc.configurable) {
      Object.defineProperty(fn, "length", { value: 1 });
      return fn.length === 1;
    }

    return false;
  })();

  //non-strict function semantics
  //hoisted block-level function declaration
  (function () {
    // Note: only available outside of strict mode.
    if (!this) return false;
    var passed = f() === 1;
    function f() { return 1; }

    passed &= typeof g === 'undefined';
    { function g() { return 1; } }
    passed &= g() === 1;

    passed &= h() === 2;
    { function h() { return 1; } }
    function h() { return 2; }
    passed &= h() === 1;

    return passed;
  })();

  // labeled function statements
  (function () {
    // Note: only available outside of strict mode.
    // if (!this) return false;

    // label: function foo() { return 2; }
    // return foo() === 2;
  })();

  //function statements in if-statement clauses
  (function () {
    //  Note: only available outside of strict mode.
    if (!this) return false;

    // Note: doesn't compile
    //  if (true) function foo() { return 2; }
    // if (false) { } else function bar() { return 3; }
    //if (true) function baz() { return 4; } else { }
    // if (false) function qux() { return 5; } else function qux() { return 6; }
    // return foo() === 2 && bar() === 3 && baz() === 4 && qux() === 6;
    report.push('function statements in if-statement clauses');
  })();

  //__proto__ in object literals
  //basic support
  (function () {
    return { __proto__: [] } instanceof Array
      && !({ __proto__: null } instanceof Object);
  })();

  //multiple __proto__ is an error
  (function () {
    try {
      eval("({ __proto__ : [], __proto__: {} })");
    }
    catch (e) {
      return true;
    }
  })();

  //not a computed property
  (function () {
    if (!({ __proto__: [] } instanceof Array)) {
      return false;
    }
    var a = "__proto__";
    return !({ [a]: [] } instanceof Array);
  })();

  //not a shorthand property
  (function () {
    if (!({ __proto__: [] } instanceof Array)) {
      return false;
    }
    var __proto__ = [];
    return !({ __proto__ } instanceof Array);
  })();

  //not a shorthand method
  (function () {
    if (!({ __proto__: [] } instanceof Array)) {
      return false;
    }
    return !({ __proto__() { } } instanceof Function);
  })();

  //Object.prototype.__proto__
  //get prototype
  (function () {
    var A = function () { };
    return (new A()).__proto__ === A.prototype;
  })();

  //set prototype
  (function () {
    var o = {};
    o.__proto__ = Array.prototype;
    return o instanceof Array;
  })();

  //absent from Object.create(null)
  (function () {
    var o = Object.create(null), p = {};
    o.__proto__ = p;
    return Object.getPrototypeOf(o) !== p;
  })();

  //present in hasOwnProperty()
  (function () {
    return Object.prototype.hasOwnProperty('__proto__');
  })();

  //correct property descriptor
  (function () {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    var A = function () { };

    return (desc
      && "get" in desc
      && "set" in desc
      && desc.configurable
      && !desc.enumerable);
  })();

  //present in Object.getOwnPropertyNames()
  (function () {
    return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') > -1;
  })();

  //String.prototype HTML methods
  //existence
  (function () {
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (typeof String.prototype[names[i]] !== 'function') {
        return false;
      }
    }
    return true;
  })();

  //tags' names are lowercase
  (function () {
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (""[names[i]]().toLowerCase() !== ""[names[i]]()) {
        return false;
      }
    }
    return true;
  })();

  //quotes in arguments are escaped
  (function () {
    var i, names = ["anchor", "fontcolor", "fontsize", "link"];
    for (i = 0; i < names.length; i++) {
      if (""[names[i]]('"') !== ""[names[i]]('&' + 'quot;')) {
        return false;
      }
    }
    return true;
  })();

  //RegExp.prototype.compile
  //basic functionality
  (function () {
    if (typeof RegExp.prototype.compile !== 'function')
      return false
    var rx = /a/;
    rx.compile('b');
    return rx.test('b');
  })();

  //returns this
  (function () {
    var rx = /a/;
    return rx.compile('b') === rx;
  })();

  //RegExp syntax extensions
  //hyphens in character sets
  (function () {
    return /[\w-_]/.exec("-")[0] === "-";
  })();

  //invalid character escapes
  (function () {
    return /\z/.exec("\\z")[0] === "z"
      && /[\z]/.exec("[\\z]")[0] === "z";
  })();

  //invalid control-character escapes
  (function () {
    return /\c2/.exec("\\c2")[0] === "\\c2";
  })();

  //invalid Unicode escapes
  (function () {
    return /\u1/.exec("u1")[0] === "u1"
      && /[\u1]/.exec("u")[0] === "u";
  })();

  //invalid hexadecimal escapes
  (function () {
    return /\x1/.exec("x1")[0] === "x1"
      && /[\x1]/.exec("x")[0] === "x";
  })();

  //incomplete patterns and quantifiers
  (function () {
    return /x{1/.exec("x{1")[0] === "x{1"
      && /x]1/.exec("x]1")[0] === "x]1";
  })();

  //octal escape sequences
  (function () {
    return /\041/.exec("!")[0] === "!"
      && /[\041]/.exec("!")[0] === "!";
  })();

  //invalid backreferences become octal escapes
  (function () {
    return /\41/.exec("!")[0] === "!"
      && /[\41]/.exec("!")[0] === "!";
  })();


  //SIMD (Single Instruction, Multiple Data)
  report.push('SIMD (Single Instruction, Multiple Data)');
  //basic support
  // (function () {
  //   return typeof SIMD !== 'undefined';
  // })();

  // //Float32x4
  // (function () {
  //   return typeof SIMD.Float32x4 === 'function';
  // })();

  // //Int32x4
  // (function () {
  //   return typeof SIMD.Int32x4 === 'function';
  // })();

  // //Int16x8
  // (function () {
  //   return typeof SIMD.Int16x8 === 'function';
  // })();

  // //Int8x16
  // (function () {
  //   return typeof SIMD.Int8x16 === 'function';
  // })();

  // //Uint32x4
  // (function () {
  //   return typeof SIMD.Uint32x4 === 'function';
  // })();

  // //Uint16x8
  // (function () {
  //   return typeof SIMD.Uint16x8 === 'function';
  // })();

  // //Uint8x16
  // (function () {
  //   return typeof SIMD.Uint8x16 === 'function';
  // })();

  // //Bool32x4
  // (function () {
  //   return typeof SIMD.Bool32x4 === 'function';
  // })();

  // //Bool16x8
  // (function () {
  //   return typeof SIMD.Bool16x8 === 'function';
  // })();

  // //Bool8x16
  // (function () {
  //   return typeof SIMD.Bool8x16 === 'function';
  // })();

  // //SIMD.%type%.abs
  // (function () {
  //   return typeof SIMD.Float32x4.abs === 'function';
  // })();

  // //SIMD.%type%.add
  // (function () {
  //   return typeof SIMD.Float32x4.add === 'function';
  // })();

  // //SIMD.%integerType%.addSaturate
  // (function () {
  //   return typeof SIMD.Int16x8.addSaturate === 'function';
  // })();

  // //SIMD.%booleanType%.and
  // (function () {
  //   return typeof SIMD.Bool16x8.and === 'function';
  // })();

  // //SIMD.%booleanType%.anyTrue
  // (function () {
  //   return typeof SIMD.Bool32x4.anyTrue === 'function';
  // })();

  // //SIMD.%booleanType%.allTrue
  // (function () {
  //   return typeof SIMD.Bool32x4.allTrue === 'function';
  // })();

  // //SIMD.%type%.check
  // (function () {
  //   return typeof SIMD.Float32x4.check === 'function';
  // })();

  // //SIMD.%type%.equal
  // (function () {
  //   return typeof SIMD.Float32x4.equal === 'function';
  // })();

  // //SIMD.%type%.extractLane
  // (function () {
  //   return typeof SIMD.Float32x4.extractLane === 'function';
  // })();

  // //SIMD.%type%.greaterThan
  // (function () {
  //   return typeof SIMD.Float32x4.greaterThan === 'function';
  // })();

  // //SIMD.%type%.greaterThanOrEqual
  // (function () {
  //   return typeof SIMD.Float32x4.greaterThanOrEqual === 'function';
  // })();

  // //SIMD.%type%.lessThan
  // (function () {
  //   return typeof SIMD.Float32x4.lessThan === 'function';
  // })();

  // //SIMD.%type%.lessThanOrEqual
  // (function () {
  //   return typeof SIMD.Float32x4.lessThanOrEqual === 'function';
  // })();

  // //SIMD.%type%.mul
  // (function () {
  //   return typeof SIMD.Float32x4.mul === 'function';
  // })();

  // //SIMD.%type%.div
  // (function () {
  //   return typeof SIMD.Float32x4.div === 'function';
  // })();

  // //SIMD.%type%.load
  // (function () {
  //   return typeof SIMD.Float32x4.load === 'function';
  // })();

  // //SIMD.%type%.load1
  // (function () {
  //   return typeof SIMD.Float32x4.load1 === 'function';
  // })();

  // //SIMD.%type%.load2
  // (function () {
  //   return typeof SIMD.Float32x4.load2 === 'function';
  // })();

  // //SIMD.%type%.load3
  // (function () {
  //   return typeof SIMD.Float32x4.load3 === 'function';
  // })();

  // //SIMD.%type%.max
  // (function () {
  //   return typeof SIMD.Float32x4.max === 'function';
  // })();

  // //SIMD.%type%.maxNum
  // (function () {
  //   return typeof SIMD.Float32x4.maxNum === 'function';
  // })();

  // //SIMD.%type%.min
  // (function () {
  //   return typeof SIMD.Float32x4.min === 'function';
  // })();

  // //SIMD.%type%.minNum
  // (function () {
  //   return typeof SIMD.Float32x4.minNum === 'function';
  // })();

  // //SIMD.%type%.neg
  // (function () {
  //   return typeof SIMD.Float32x4.neg === 'function';
  // })();

  // //SIMD.%booleanType%.not
  // (function () {
  //   return typeof SIMD.Bool16x8.not === 'function';
  // })();

  // //SIMD.%type%.notEqual
  // (function () {
  //   return typeof SIMD.Float32x4.notEqual === 'function';
  // })();

  // //SIMD.%booleanType%.or
  // (function () {
  //   return typeof SIMD.Bool16x8.or === 'function';
  // })();

  // //SIMD.%type%.reciprocalApproximation
  // (function () {
  //   return typeof SIMD.Float32x4.reciprocalApproximation === 'function';
  // })();

  // //SIMD.%type%.reciprocalSqrtApproximation
  // (function () {
  //   return typeof SIMD.Float32x4.reciprocalSqrtApproximation === 'function';
  // })();

  // //SIMD.%type%.replaceLane
  // (function () {
  //   return typeof SIMD.Float32x4.replaceLane === 'function';
  // })();

  // //SIMD.%type%.select
  // (function () {
  //   return typeof SIMD.Float32x4.select === 'function';
  // })();

  // //SIMD.%integerType%.shiftLeftByScalar
  // (function () {
  //   return typeof SIMD.Int32x4.shiftLeftByScalar === 'function';
  // })();

  // //SIMD.%integerType%.shiftRightByScalar
  // (function () {
  //   return typeof SIMD.Int32x4.shiftRightByScalar === 'function';
  // })();

  // //SIMD.%type%.shuffle
  // (function () {
  //   return typeof SIMD.Float32x4.shuffle === 'function';
  // })();

  // //SIMD.%type%.splat
  // (function () {
  //   return typeof SIMD.Float32x4.splat === 'function';
  // })();

  // //SIMD.%type%.sqrt
  // (function () {
  //   return typeof SIMD.Float32x4.sqrt === 'function';
  // })();

  // //SIMD.%type%.store
  // (function () {
  //   return typeof SIMD.Float32x4.store === 'function';
  // })();

  // //SIMD.%type%.store1
  // (function () {
  //   return typeof SIMD.Float32x4.store1 === 'function';
  // })();

  // //SIMD.%type%.store2
  // (function () {
  //   return typeof SIMD.Float32x4.store2 === 'function';
  // })();

  // //SIMD.%type%.store3
  // (function () {
  //   return typeof SIMD.Float32x4.store3 === 'function';
  // })();

  // //SIMD.%type%.sub
  // (function () {
  //   return typeof SIMD.Float32x4.sub === 'function';
  // })();

  // //SIMD.%integerType%.subSaturate
  // (function () {
  //   return typeof SIMD.Int16x8.subSaturate === 'function';
  // })();

  // //SIMD.%type%.swizzle
  // (function () {
  //   return typeof SIMD.Float32x4.swizzle === 'function';
  // })();

  // //SIMD.%booleanType%.xor
  // (function () {
  //   return typeof SIMD.Bool16x8.xor === 'function';
  // })();

  // //SIMD.%type%.fromTIMDBits
  // (function () {
  //   return 'Float32x4,Int32x4,Int8x16,Uint32x4,Uint16x8,Uint8x16'.split(',').every(function (type) {
  //     return typeof SIMD.Int16x8['from' + type + 'Bits'] === 'function';
  //   });
  // })();

  // //SIMD.%type%.fromTIMD
  // (function () {
  //   return 'Float32x4,Uint32x4'.split(',').every(function (type) {
  //     return typeof SIMD.Int32x4['from' + type] === 'function';
  //   });
  // })();

  //function.sent
  //class decorators
  //class properties
  //object rest properties
  //object spread properties
  //System.global
  //shared memory and atomics
  report.push('shared memory and atomics');

  //SharedArrayBuffer
  // (function () {
  //   return typeof SharedArrayBuffer === 'function';
  // })();

  // //SharedArrayBuffer[Symbol.species]
  // (function () {
  //   return SharedArrayBuffer[Symbol.species]() === SharedArrayBuffer;
  // })();

  // //SharedArrayBuffer.prototype.byteLength
  // (function () {
  //   return 'byteLength' in SharedArrayBuffer.prototype;
  // })();

  // //SharedArrayBuffer.prototype.slice
  // (function () {
  //   return typeof SharedArrayBuffer.prototype.slice === 'function';
  // })();

  // //SharedArrayBuffer.prototype[Symbol.toStringTag]
  // (function () {
  //   return SharedArrayBuffer.prototype[Symbol.toStringTag] === 'SharedArrayBuffer';
  // })();

  // //Atomics.add
  // (function () {
  //   return typeof Atomics.add == 'function';
  // })();

  // //Atomics.and
  // (function () {
  //   return typeof Atomics.and == 'function';
  // })();

  // //Atomics.compareExchange
  // (function () {
  //   return typeof Atomics.compareExchange == 'function';
  // })();

  // //Atomics.exchange
  // (function () {
  //   return typeof Atomics.exchange == 'function';
  // })();

  // //Atomics.wait
  // (function () {
  //   return typeof Atomics.wait == 'function';
  // })();

  // //Atomics.wake
  // (function () {
  //   return typeof Atomics.wake == 'function';
  // })();

  // //Atomics.isLockFree
  // (function () {
  //   return typeof Atomics.isLockFree == 'function';
  // })();

  // //Atomics.load
  // (function () {
  //   return typeof Atomics.load == 'function';
  // })();

  // //Atomics.or
  // (function () {
  //   return typeof Atomics.or == 'function';
  // })();

  // //Atomics.store
  // (function () {
  //   return typeof Atomics.store == 'function';
  // })();

  // //Atomics.sub
  // (function () {
  //   return typeof Atomics.sub == 'function';
  // })();

  // //Atomics.xor
  // (function () {
  //   return typeof Atomics.xor == 'function';
  // })();

  //Async iteration
  //async generators
  (function () {
    // async function* generator() {
    //   yield 42;
    // }

    // var iterator = generator();
    // iterator.next().then(function (step) {
    //   if (iterator[Symbol.asyncIterator]() === iterator && step.done === false && step.value === 42) asyncTestPassed();
    // });
    report.push('async generators');
  })();

  //for-await-of loops
  (function () {
    //   var asyncIterable = {};
    //   asyncIterable[Symbol.asyncIterator] = function () {
    //     var i = 0;
    //     return {
    //       next: function () {
    //         switch (i++) {
    //           case 1: return Promise.resolve({ done: false, value: 'a' });
    //           case 2: return Promise.resolve({ done: false, value: 'b' });
    //         } return Promise.resolve({ done: true });
    //       }
    //     };
    //   };

    //   (async function () {
    //     var result = '';
    //     for await(var value of asyncIterable) result += value;
    //   if (result === 'ab') asyncTestPassed();
    // })();;
    report.push('for-await-of loops');
  })();

  //string trimming
  //String.prototype.trimLeft
  (function () {
    return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
  })();

  //String.prototype.trimRight
  (function () {
    return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
  })();

  //String.prototype.trimStart
  (function () {
    // return ' \t \n abc   \t\n'.trimStart() === 'abc   \t\n';
  })();

  //String.prototype.trimEnd
  (function () {
    // return ' \t \n abc   \t\n'.trimEnd() === ' \t \n abc';
  })();

  // //Observable
  report.push('Observables');
  // //basic support
  // (function () {
  //   return typeof Observable !== 'undefined';
  // })();

  // //Symbol.observable well known symbol
  // (function () {
  //   return typeof Symbol.observable === 'symbol';
  // })();

  // //Observable.prototype.subscribe
  // (function () {
  //   return 'subscribe' in Observable.prototype;
  // })();

  // //Observable constructor behavior
  // (function () {
  //   if (!(new Observable(function () { }) instanceof Observable)) return false;

  //   var nonCallableCheckPassed,
  //     primitiveCheckPassed,
  //     newCheckPassed;

  //   try { new Observable({}) } catch (e) { nonCallableCheckPassed = true }
  //   try { new Observable(false) } catch (e) { primitiveCheckPassed = true }
  //   try { Observable(function () { }) } catch (e) { newCheckPassed = true }

  //   return nonCallableCheckPassed && primitiveCheckPassed && newCheckPassed;
  // })();

  // //Observable.prototype.forEach
  // (function () {
  //   var o = new Observable(function () { });
  //   return 'forEach' in Observable.prototype && o.forEach(function (e) { return true }) instanceof Promise;
  // })();

  // //Observable.prototype[Symbol.observable]
  // (function () {
  //   var o = new Observable(function () { });
  //   return Symbol.observable in Observable.prototype && o[Symbol.observable]() === o;
  // })();

  // //Observable.of
  // (function () {
  //   return Observable.of(1, 2, 3) instanceof Observable;
  // })();

  // //Observable.from
  // (function () {
  //   return (Observable.from([1, 2, 3, 4]) instanceof Observable) && (Observable.from(new Set([1, 2, 3])) instanceof Observable);
  // })();

  //private fields
  report.push('private fields');

  //basic support
  (function () {
    // class C {
    //   #x;
    //   constructor(x) {
    //     this.#x = x;
    //   }
    //   x() {
    //     return this.#x;
    //   }
    // }
    // return new C(42).x() === 42;
  })();

  //initializers
  (function () {
    // class C {
    //   #x = 42;
    //   x() {
    //     return this.#x;
    //   }
    // }
    // return new C().x() === 42;
  })();

  //bind (::) operator
  report.push('bind (::) operator');

  //binary form
  (function () {
    // function foo() { this.garply += "foo"; return this; }
    // var obj = { garply: "bar" };
    // return typeof obj::foo === "function" && obj::foo().garply === "barfoo";
  })();

  //unary form
  (function () {
    // var obj = { garply: "bar", foo: function () { this.garply += "foo"; return this; } };
    // return typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";
  })();

  //do expression
  report.push('do expression');

  //Realms
  //String.prototype.at
  //Math methods for 64-bit integers
  report.push('Math methods for 64-bit integers');

  //Math.iaddh
  (function () {
    // return Math.iaddh(0xffffffff, 1, 1, 1) === 3;
  })();

  //Math.isubh
  (function () {
    // return Math.isubh(0, 4, 1, 1) === 2;
  })();

  //Math.imulh
  (function () {
    //return Math.imulh(0xffffffff, 7) === -1;
  })();

  //Math.umulh
  (function () {
    // return Math.umulh(0xffffffff, 7) === 6;
  })();

  //additional meta properties
  //function.callee
  (function () {
    // var f = _ => function.callee === f;
    // return f();
  })();

  //function.count
  (function () {
    // return (_ => function.count)(1, 2, 3) === 3;
  })();

  //function.arguments
  (function () {
    // var arr = (_ => function.arguments)(1, 2, 3);
    // return Array.isArray(arr)
    //   && arr.length === 3
    //   && arr[0] === 1
    //   && arr[1] === 2
    //   && arr[2] === 3;
    report.push('function.arguments');
  })();

  //method parameter decorators
  //function expression decorators
  //RegExp named capture groups
  //RegExp lookbehind
  //Reflect.isCallable / Reflect.isConstructor
  report.push('Reflect');

  //Reflect.isCallable
  (function () {
    // return Reflect.isCallable(function () { })
    //   && Reflect.isCallable(_ => _)
    //   && !Reflect.isCallable(class { });
  })();

  //Reflect.isConstructor
  (function () {
    // return Reflect.isConstructor(function () { })
    //   && !Reflect.isConstructor(_ => _)
    //   && Reflect.isConstructor(class { });
  })();

  //zones
  report.push('Zone');

  //Zone
  // (function () {
  //   return typeof Zone == 'function';
  // })();

  // //Zone.current
  // (function () {
  //   return 'current' in Zone;
  // })();

  // //Zone.prototype.name
  // (function () {
  //   return 'name' in Zone.prototype;
  // })();

  // //Zone.prototype.parent
  // (function () {
  //   return 'parent' in Zone.prototype;
  // })();

  // //Zone.prototype.fork
  // (function () {
  //   return typeof Zone.prototype.fork == 'function';
  // })();

  // //Zone.prototype.run
  // (function () {
  //   return typeof Zone.prototype.run == 'function';
  // })();

  // //Zone.prototype.wrap
  // (function () {
  //   return typeof Zone.prototype.wrap == 'function';
  // })();


  //syntactic tail calls
  report.push('syntactic tail calls');

  //direct recursion
  (function () {
    // "use strict";
    // return (function f(n) {
    //   if (n <= 0) {
    //     return "foo";
    //   }
    //   return continue f(n - 1);
    // } (1e6)) === "foo";
  })();

  //mutual recursion
  report.push('mutual recursion');

  (function () {
    // "use strict";
    // function f(n) {
    //   if (n <= 0) {
    //     return "foo";
    //   }
    //   return continue g(n - 1);
    // }
    // function g(n) {
    //   if (n <= 0) {
    //     return "bar";
    //   }
    //   return continue f(n - 1);
    // }
    // return f(1e6) === "foo" && f(1e6 + 1) === "bar";
  })();

  //Metadata reflection API
  //Reflect.defineMetadata
  (function () {
    return typeof Reflect.defineMetadata == 'function';
  })();

  //Reflect.hasMetadata
  (function () {
    return typeof Reflect.hasMetadata == 'function';
  })();

  //Reflect.hasOwnMetadata
  (function () {
    return typeof Reflect.hasOwnMetadata == 'function';
  })();

  //Reflect.getMetadata
  (function () {
    return typeof Reflect.getMetadata == 'function';
  })();

  //Reflect.getOwnMetadata
  (function () {
    return typeof Reflect.getOwnMetadata == 'function';
  })();

  //Reflect.getMetadataKeys
  (function () {
    return typeof Reflect.getMetadataKeys == 'function';
  })();

  //Reflect.getOwnMetadataKeys
  (function () {
    return typeof Reflect.getOwnMetadataKeys == 'function';
  })();

  //Reflect.deleteMetadata
  (function () {
    return typeof Reflect.deleteMetadata == 'function';
  })();

  //Reflect.metadata
  (function () {
    return typeof Reflect.metadata == 'function';
  })();

  //Intl object
  //exists on global
  (function () {
    return typeof Intl === 'object';
  })();

  //has prototype of Object
  (function () {
    return Intl.constructor === Object;
  })();

  //Intl.Collator
  //exists on intl object
  (function () {
    return typeof Intl.Collator === 'function';
  })();

  //creates new Collator instances
  (function () {
    return new Intl.Collator() instanceof Intl.Collator;
  })();

  //constructor called without new creates instances
  (function () {
    return Intl.Collator() instanceof Intl.Collator;
  })();

  //calling Collator with Collator instance throws error
  (function () {
    try {
      Intl.Collator.call(Intl.Collator());
      return false;
    } catch (e) {
      return e instanceof TypeError;
    }
  })();

  //accepts valid language tags
  (function () {
    try {
      // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
      var validLanguageTags = [
        "de", // ISO 639 language code
        "de-DE", // + ISO 3166-1 country code
        "DE-de", // tags are case-insensitive
        "cmn", // ISO 639 language code
        "cmn-Hans", // + script code
        "CMN-hANS", // tags are case-insensitive
        "cmn-hans-cn", // + ISO 3166-1 country code
        "es-419", // + UN M.49 region code
        "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
        "i-klingon", // grandfathered tag
        "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
        "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
        "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
        "x-en-US-12345", // anything goes in private use tags
        "x-12345-12345-en-US",
        "x-en-US-12345-12345",
        "x-en-u-foo",
        "x-en-u-foo-u-bar"
      ];
      for (var i in validLanguageTags) {
        Intl.Collator(validLanguageTags[i]);
      }
      return true;
    } catch (e) {
      return false;
    }
  })();

  //Intl.Collator.prototype.compare
  //exists on Collator prototype
  (function () {
    return typeof Intl.Collator().compare === 'function';
  })();

  //Intl.Collator.prototype.resolvedOptions
  //exists on Collator prototype
  (function () {
    return typeof Intl.Collator().resolvedOptions === 'function';
  })();

  //NumberFormat
  //exists on intl object
  (function () {
    return typeof Intl.NumberFormat === 'function';
  })();

  //exists on intl object
  (function () {
    return typeof Intl.NumberFormat === 'function';
  })();

  //creates new NumberFormat instances
  (function () {
    return new Intl.NumberFormat() instanceof Intl.NumberFormat;
  })();

  //constructor called without new creates instances
  (function () {
    return Intl.NumberFormat() instanceof Intl.NumberFormat;
  })();

  //calling NumberFormat with NumberFormat instance throws error
  (function () {
    try {
      Intl.NumberFormat.call(Intl.NumberFormat());
      return false;
    } catch (e) {
      return e instanceof TypeError;
    }
  })();

  //accepts valid language tags
  (function () {
    try {
      // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
      var validLanguageTags = [
        "de", // ISO 639 language code
        "de-DE", // + ISO 3166-1 country code
        "DE-de", // tags are case-insensitive
        "cmn", // ISO 639 language code
        "cmn-Hans", // + script code
        "CMN-hANS", // tags are case-insensitive
        "cmn-hans-cn", // + ISO 3166-1 country code
        "es-419", // + UN M.49 region code
        "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
        "i-klingon", // grandfathered tag
        "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
        "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
        "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
        "x-en-US-12345", // anything goes in private use tags
        "x-12345-12345-en-US",
        "x-en-US-12345-12345",
        "x-en-u-foo",
        "x-en-u-foo-u-bar"
      ];
      for (var i in validLanguageTags) {
        Intl.NumberFormat(validLanguageTags[i]);
      }
      return true;
    } catch (e) {
      return false;
    }
  })();

  //DateTimeFormat
  //exists on intl object
  (function () {
    return typeof Intl.DateTimeFormat === 'function';
  })();

  //creates new DateTimeFormat instances
  (function () {
    return new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
  })();

  //constructor called without new creates instances
  (function () {
    return Intl.DateTimeFormat() instanceof Intl.DateTimeFormat;
  })();

  //calling DateTimeFormat with DateTimeFormat instance throws error
  (function () {
    try {
      Intl.DateTimeFormat.call(Intl.DateTimeFormat());
      return false;
    } catch (e) {
      return e instanceof TypeError;
    }
  })();

  //accepts valid language tags
  (function () {
    try {
      // Taken from https://github.com/tc39/test262/blob/83b07ff15eadb141c3d6f4d236a8733b720041d2/test/intl402/6.2.2_a.js
      var validLanguageTags = [
        "de", // ISO 639 language code
        "de-DE", // + ISO 3166-1 country code
        "DE-de", // tags are case-insensitive
        "cmn", // ISO 639 language code
        "cmn-Hans", // + script code
        "CMN-hANS", // tags are case-insensitive
        "cmn-hans-cn", // + ISO 3166-1 country code
        "es-419", // + UN M.49 region code
        "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
        "i-klingon", // grandfathered tag
        "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
        "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
        "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
        "x-en-US-12345", // anything goes in private use tags
        "x-12345-12345-en-US",
        "x-en-US-12345-12345",
        "x-en-u-foo",
        "x-en-u-foo-u-bar"
      ];
      for (var i in validLanguageTags) {
        Intl.DateTimeFormat(validLanguageTags[i]);
      }
      return true;
    } catch (e) {
      return false;
    }
  })();

  //resolvedOptions().timeZone defaults to the host environment
  (function () {
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz !== undefined && tz.length > 0;
  })();

  //accepts IANA timezone names
  (function () {
    try {
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'Australia/Sydney',
        timeZoneName: 'long'
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  })();

  //String.prototype.localeCompare
  //exists on String prototype
  (function () {
    return typeof String.prototype.localeCompare === 'function';
  })();

  //Number.prototype.toLocaleString
  //exists on Number prototype
  (function () {
    return typeof Number.prototype.toLocaleString === 'function';
  })();

  //Array.prototype.toLocaleString
  //exists on Array prototype
  (function () {
    return typeof Array.prototype.toLocaleString === 'function';
  })();

  //Object.prototype.toLocaleString
  //exists on Object prototype
  (function () {
    return typeof Object.prototype.toLocaleString === 'function';
  })();

  //Date.prototype.toLocaleString
  //exists on Date prototype
  (function () {
    return typeof Date.prototype.toLocaleString === 'function';
  })();

  //Date.prototype.toLocaleDateString
  //exists on Date prototype
  (function () {
    return typeof Date.prototype.toLocaleDateString === 'function';
  })();

  //Date.prototype.toLocaleTimeString
  //exists on Date prototype
  (function () {
    return typeof Date.prototype.toLocaleTimeString === 'function';
  })();

  return report;
};
