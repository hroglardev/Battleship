(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();var e=function(t,e,r){var n=document.createElement(t);e&&(n.id=e),r&&(n.innerText=r);for(var i=arguments.length,o=new Array(i>3?i-3:0),a=3;a<i;a++)o[a-3]=arguments[a];return o&&function(t,e){e.forEach((function(e){t.classList.add(e)}))}(n,o),n};function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=function(t){return document.querySelector(t)},o=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];r.forEach((function(e){return t.appendChild(e)}))};const a=t.p+"assets/icons/logo..svg";function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function u(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:String(e)}function l(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}var f=new WeakSet,p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f),this.size=10,this.board=new Array(this.size*this.size).fill(null),this.attackedTargets=[],this.placeShip=this.placeShip.bind(this)}var e,r,n;return e=t,(r=[{key:"placeShip",value:function(t,e,r,n){for(var i=this,o=[],a=0;a<t.shipLength;a++)if(n){if(!(r+(t.shipLength-1)<=this.size-1))return!1;o.push(Number("".concat(r+a).concat(e)))}else{if(!(e+(t.shipLength-1)<=this.size-1))return!1;o.push(Number("".concat(r).concat(e+a)))}var c=function(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}(this,f,y).call(this,o);return c&&o.forEach((function(e){return i.board[e]=t})),c}},{key:"receiveAttack",value:function(t,e){var r=Number("".concat(e).concat(t));if("water"===this.board[r]||this.attackedTargets.includes(r))return{success:!1,targetType:null};var n=this.board[r];return null!==n&&"water"!==n?(n.hit(),this.attackedTargets.push(r),{success:!0,targetType:"ship",targetIndex:r}):(this.board[r]="water",this.attackedTargets.push(r),{success:!0,targetType:"water",targetIndex:r})}},{key:"reportSunk",value:function(){return this.board.filter((function(t){return"water"!==t&&null!==t})).every((function(t){return t.isSunk()}))}},{key:"resetBoard",value:function(){this.board=this.board.map((function(t){return null})),this.attackedTargets=[]}}])&&s(e.prototype,r),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){var e=this;return t.every((function(t){return null===e.board[t]}))}var h=[{type:"Carrier",length:5},{type:"Battleship",length:4},{type:"Cruiser",length:3},{type:"Submarine",length:3},{type:"Destroyer",length:2}];function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var e=function(t,e){if("object"!=d(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==d(e)?e:String(e)}var b=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e<1)throw new Error("Ship length must be greater than 0.");this.shipLength=e,this.hits=0}var e,r,n;return e=t,(r=[{key:"hit",value:function(){this.isSunk()||(this.hits+=1)}},{key:"isSunk",value:function(){return this.hits===this.shipLength}}])&&m(e.prototype,r),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function k(t){var e=function(t,e){if("object"!=g(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==g(e)?e:String(e)}var A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.board=new p,this.isActive=!1}var e,r,n;return e=t,(r=[{key:"toggleActive",value:function(){this.isActive=!this.isActive}},{key:"placeRandomShips",value:function(){var t,e=S(h);try{for(e.s();!(t=e.n()).done;)for(var r=t.value,n=!1;!n;){var i=Math.floor(Math.random()*this.board.size),o=Math.floor(Math.random()*this.board.size),a=r.length,c=new b(a),s=Math.random()<.5;n=this.board.placeShip(c,i,o,s)}}catch(t){e.e(t)}finally{e.f()}}},{key:"randomAttack",value:function(){for(var t={success:!1};!t.success;){var e=Math.floor(Math.random()*this.board.size),r=Math.floor(Math.random()*this.board.size);t=this.board.receiveAttack(e,r)}return this.toggleActive(),t}}])&&T(e.prototype,r),n&&T(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,j(n.key),n)}}function j(t){var e=function(t,e){if("object"!=E(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==E(e)?e:String(e)}var L,P,O,z,C,I,M,B,N,G,$=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.player1=new A(e),this.orientation=!1,this.player2=new A("Computer"),this.selectedShip=h[0],this.player2.placeRandomShips()}var e,r,n;return e=t,(r=[{key:"changeOrientation",value:function(){this.orientation=!this.orientation}},{key:"nextShip",value:function(){var t=h.indexOf(this.selectedShip);this.selectedShip=h[t+1]}},{key:"resetGame",value:function(){this.player1.board.resetBoard(),this.player2.board.resetBoard(),this.selectedShip=h[0],this.orientation=!1,this.player2.placeRandomShips()}}])&&x(e.prototype,r),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=function(){var t=i("#aside");t.innerHtml="";var r=L.selectedShip,n=e("label","",r.type);n.setAttribute("for",r.type);for(var a=e("div",r.type,"","ship-selector",!L.orientation&&"horizontal"),c=0;c<r.length;){var s=e("div","","","select-ship-cell");o(a,s),c++}o(t,n,a),i("#messages").innerText="Place your ".concat(r.type," by clicking on the grid");var u=e("button","swap","Swap orientation");u.addEventListener("click",(function(){L.changeOrientation(),a.classList.toggle("horizontal")})),o(t,u)},R=function(){var t=e("div","reset-container"),n=e("button","reset-game","Play again"),a=i("#header");n.addEventListener("click",(function(){var t;L.resetGame(),D(),(t=".grid-container",r(document.querySelectorAll(t))).forEach((function(t){return t.remove()})),X("placeShips",L.player1.board.board),n.remove()})),o(t,n),o(a,t)},X=function(t,r){var n=i("#playing-grids"),a=e("div","","","grid-container"),c=e("div",t,"","grid"),s=e("p","","","grid-label");"placeShips"===t&&r.forEach((function(e,r){var n=Y(r,t);null!==e&&"water"===e&&(n.innerText="X",n.classList.add("water")),null!==e&&"water"!==e&&(n.innerText="O"),s.id="player-grid-label",s.innerText="Admiral ".concat(L.player1.name,"'s waters"),i("#player"),o(c,n)})),"enemyGrid"===t&&r.forEach((function(e,r){var n=Y(r,t);s.innerText="Enemy waters",o(c,n)})),o(n,a),o(a,s,c)},Y=function(t,r){var n=e("div","","","cell"),o=1===t.toString().length?"".concat(t.toString()):"".concat(t.toString()[1]),a=1===t.toString().length?"0":"".concat(t.toString()[0]);return n.dataset.x=o,n.dataset.y=a,"placeShips"===r&&n.addEventListener("click",(function(){var t=L.selectedShip,e=L.orientation;if(L.player1.board.placeShip(new b(t.length),+n.dataset.x,+n.dataset.y,e)){var r=i('label[for="'.concat(t.type,'"]')),o=document.getElementById("".concat(t.type)),a=i(".grid-container");if(r.remove(),o.remove(),a.remove(),X("placeShips",L.player1.board.board),"Destroyer"===t.type)i("#swap").remove(),X("enemyGrid",L.player2.board.board),i("#placeShips").style.pointerEvents="none",i("#messages").innerText="Take aim and attack the enemy";else L.nextShip(),i("#swap").remove(),D()}})),n.id=t,"enemyGrid"===r&&n.addEventListener("click",(function(){L.player1.toggleActive();var t=i("#messages"),e=L.player2.board.receiveAttack(+n.dataset.x,+n.dataset.y);e.success&&("ship"===e.targetType?n.classList.add("hit"):n.classList.add("water"),n.innerText="ship"===e.targetType?"O":"X",t.innerText="ship"===e.targetType?"You hit the enemy's ship":"Your missile landed in water");var r=L.player2.board.reportSunk(),o=i("#enemyGrid");if(o.classList.add("inactive"),r)return t.innerText="You've sunken all enemy ships",void R();setTimeout((function(){t.innerText="Enemy is taking aim"}),1500),setTimeout((function(){var e=L.player1.randomAttack();if(e.success){var r=document.getElementById("".concat(e.targetIndex));"ship"===e.targetType?r.classList.add("hit"):r.classList.add("water"),r.innerText="ship"===e.targetType?"O":"X",t.innerText="ship"===e.targetType?"The enemy managed to hit you":"Enemy missile landed in water"}if(L.player1.board.reportSunk())return o.classList.add("inactive"),t.innerText="The enemy has sunken all your ships!",void R();setTimeout((function(){o.classList.remove("inactive"),t.innerText="Take aim and attack the enemy"}),1e3)}),2500)})),n},q=function(t,e,r){e.preventDefault(),L=new $(r),t.remove(),X("placeShips",L.player1.board.board),D()};P=i("#header"),O=e("img",null,null,"logo"),z=e("h1",null,"Battleship","page-title"),O.src=a,o(P,O,z),C="player-one-name",I=i("#main"),M=e("form","create-player"),B=e("label","","What's your name Admiral?"),N=e("input",C),G=e("button","submit","Start"),M.setAttribute("novalidate",!0),B.setAttribute("for",C),N.type="text",N.name=C,o(I,M),o(M,B,N,G),M.addEventListener("submit",(function(t){return q(M,t,N.value)}))})();
//# sourceMappingURL=main.bundle.js.map