/**
 * test() returns a message
 * based on the passed-in firstName
 */
export const test = async () => {

  // letConst
  (() => {
    let a; const b = 2;
  })();

  // letLoop
  (() => {
    for (let i in {}) {
    };

    for (let i = 0; ;) {
      break
    };
  })();

  // constLoop
  (() => {
    for (const i in {}) { };

    for (const i = 0; ;) { break };
  })();

  // defaultParameter
  (() => {
    function a(b = 2) { }
  })();

  // spreadRest
  (() => {
    var a = [1, 2];
    +function b(...c) {

    } (...a);
  })();

  //  destructuring
  (() => {
    var a = [1, 2], [b, c] = a, d = { e: 1, f: 2 }, {e: E, f} = d;
  })();

  // parameterDestructuring
  (() => {
    function a({b, c}) { }
  })();

  //templateString
  (() => {
    var a = 1, b = `c${a}d`;
  })();
  // forOf
  (() => {

    for (var a of [1]) { }
  })();
  // arrow
  (() => {
    var a = () => { };
  })();

  //generator
  (() => {
    function* a() { yield; };
  })();

  // conciseMethodProperty
  (() => {
    var a = 1, b = { c() { }, a };
  })();

  // computedProperty
  (() => {
    var a = 1, b = { ['x' + a]: 2 };
  })();

  // moduleImport \n import { a } from 'b'; };
  /// classes
  (() => {
    class Foo { }; class Bar extends Foo { }
  })();

  // numericLiteral
  (() => {
    var a = 0o1, b = 0b10;
  })();

  // oldOctalLiteral
  (() => {
    'use strict';
    //var a = 01;
  })();

  //  symbol
  (() => {

    var a = Symbol('b');
  })();

  //  unicodeEscape
  (() => {
    //   var a = '\\u{20BB7}';
  })();

  //  unicodeRegExp
  (() => {
    //   var a = /\\u{20BB7}/u;
  })();

  // stickyRegExp
  (() => {
    var a = /b/y;
  })();

  // aliases
  //"class": es6.classes,

//  //  // semantics
//  //  letTDZ: { dependencies: ["letConst"], fails: "'use strict'; a = 1; let a;" },
//  letLoopScope: { dependencies: ["letLoop", "forOf"], passes: "'use strict'; var x=[],i=0;for(let i=2;i<3;i++){x.push(function(){return i})};for(let i in {3:0}){x.push(function(){return i})};for(let i of [4]){x.push(function(){return i})};if(x[0]()*x[1]()*x[2]()!=24) throw 0;" },
//  constRedef: { dependencies: ["letConst"], fails: "'use strict'; const a = 1; a = 2;" },
//  objectProto: { passes: "'use strict'; var a = { b: 2 }, c = { __proto__: a }; if (c.b !== 2) throw 0;" },
//  objectSuper: { passes: "'use strict'; var a = { b: 2 }, c = { d() { return super.b; } }; Object.setPrototypeOf(c,a); if (c.d() !== 2) throw 0;" },
//  extendNatives: { dependencies: ["class"], passes: "'use strict'; class Foo extends Array { }; var a = new Foo(); a.push(1,2,3); if (a.length !== 3) throw 0;" },
//  TCO: { passes: "'use strict'; +function a(b){ if (b<6E4) a(b+1); }(0);" },
//  symbolImplicitCoercion: { fails: "'use strict'; var a = Symbol('a'); a + '';" },
//  functionNameInference: { passes: "'use strict'; var a = { b: function(){} }; if (a.name != 'b') throw 0;" },

//  // APIs
//  ObjectStatics: { is: "'use strict'; return ('getOwnPropertySymbols' in Object) && ('assign' in Object) && ('is' in Object);" },
//  ArrayStatics: { is: "'use strict'; return ('from' in Array) && ('of' in Array);" },
//  ArrayMethods: { is: "'use strict'; return ('fill' in Array.prototype) && ('find' in Array.prototype) && ('findIndex' in Array.prototype) && ('entries' in Array.prototype) && ('keys' in Array.prototype) && ('values' in Array.prototype);" },
//  TypedArrays: { is: "'use strict'; return ('ArrayBuffer' in global) && ('Int8Array' in global) && ('Uint8Array' in global) && ('Int32Array' in global) && ('Float64Array' in global);" },
//  TypedArrayStatics: { dependencies: ["TypedArrays"], is: "use strict'; return ('from' in Uint32Array) && ('of' in Uint32Array);" },
//  TypedArrayMethods: { dependencies: ["TypedArrays"], is: "'use strict'; var x = new Int8Array(1); return ('slice' in x) && ('join' in x) && ('map' in x) && ('forEach' in x);" },
//  StringMethods: { is: "'use strict'; return ('includes' in String.prototype) && ('repeat' in String.prototype);" },
//  NumberStatics: { is: "'use strict'; return ('isNaN' in Number) && ('isInteger' in Number);" },
//  MathStatics: { is: "'use strict'; return ('hypot' in Math) && ('acosh' in Math) && ('imul' in Math);" },
//  collections: { is: "'use strict'; return ('Map' in global) && ('Set' in global) && ('WeakMap' in global) && ('WeakSet' in global);" },
//  Proxy: { is: "'use strict'; return ('Proxy' in global);" },
//  Promise: { is: "'use strict'; return ('Promise' in global);" }

};

//  moduleExport
export var a = 1;





