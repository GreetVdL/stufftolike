// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redux = require("redux");
var _styleScss = require("../css/style.scss");
var _newsitem = require("./components/newsitem");
var _newsitemDefault = parcelHelpers.interopDefault(_newsitem);
var _song = require("./components/song");
var _songDefault = parcelHelpers.interopDefault(_song);
var _photo = require("./components/photo");
var _photoDefault = parcelHelpers.interopDefault(_photo);
// import { photosStore } from "./data/photos";
// import { musicStore } from "./data/music";
// import { newsStore } from "./data/news";
var _data = require("./data");
var _dataDefault = parcelHelpers.interopDefault(_data);
// Click event listener for cards
document.querySelectorAll(".like").forEach((card)=>{
    card.addEventListener("click", (event)=>{
        event.target.style.color = "yellow";
        if (event.target.parentElement.classList.contains("photo")) {
            const targetObject = _dataDefault.default.getState().photosReducer.filter((item)=>item.id === event.target.parentElement.id
            )[0];
            targetObject.render(targetObject.likesHolder);
        }
    });
}); // console.log(store.getState());

},{"../css/style.scss":"efzMA","redux":"ifMRI","./components/newsitem":"ie6yB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./components/song":"dpBmu","./components/photo":"1Hh7W","./data":"M6jpw"}],"efzMA":[function() {},{}],"ifMRI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__DO_NOT_USE__ActionTypes", ()=>ActionTypes
);
parcelHelpers.export(exports, "applyMiddleware", ()=>applyMiddleware
);
parcelHelpers.export(exports, "bindActionCreators", ()=>bindActionCreators
);
parcelHelpers.export(exports, "combineReducers", ()=>combineReducers
);
parcelHelpers.export(exports, "compose", ()=>compose
);
parcelHelpers.export(exports, "createStore", ()=>createStore
);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val;
    switch(type){
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
            return type;
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch(constructorName){
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val;
    typeOfVal = miniKindOf(val);
    return typeOfVal;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== 'function') throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        if (typeof action.type === 'undefined') throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        if (isDispatching) throw new Error('Reducers may not dispatch actions.');
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                function observeState() {
                    if (observer.next) observer.next(getState());
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(message);
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {
    } // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    if (!isPlainObject(inputState)) return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === 'undefined') throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {
    };
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'undefined') warning("No reducer provided for key \"" + key + "\"");
        if (typeof reducers[key] === 'function') finalReducers[key] = reducers[key];
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    unexpectedKeyCache = {
    };
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) state = {
        };
        if (shapeAssertionError) throw shapeAssertionError;
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) warning(warningMessage);
        var hasChanged = false;
        var nextState = {
        };
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var actionType = action && action.type;
                throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') return bindActionCreator(actionCreators, dispatch);
    if (typeof actionCreators !== 'object' || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    var boundActionCreators = {
    };
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
    if (funcs.length === 0) return function(arg) {
        return arg;
    };
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return _objectSpread2Default.default(_objectSpread2Default.default({
            }, store), {
            }, {
                dispatch: _dispatch
            });
        };
    };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */ function isCrushed() {
}
if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') warning("You are currently using minified code outside of NODE_ENV === \"production\". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.");

},{"@babel/runtime/helpers/esm/objectSpread2":"1LUOm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1LUOm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _definePropertyJsDefault.default(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
exports.default = _objectSpread2;

},{"./defineProperty.js":"6QWaj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6QWaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ie6yB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _newsitemScss = require("./Newsitem.scss");
var _newsitem = require("./Newsitem");
var _newsitemDefault = parcelHelpers.interopDefault(_newsitem);
exports.default = _newsitemDefault.default;

},{"./Newsitem.scss":"hE7xZ","./Newsitem":"ftMev","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hE7xZ":[function() {},{}],"ftMev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import * as redux from "redux";
// import { newsStore, newsReducer } from "../../data/news.js";
var _nanoid = require("nanoid");
class Newsitem {
    #name;
    #holder;
    // #post;
    #title;
    #date;
    #intro;
    #link;
    constructor(name, date, title, intro, href){
        this.#name = name;
        this.#holder = document.querySelector("#news");
        this.likesHolder = document.querySelector(".likes__main");
        // this.#post = newsStore.getState().filter((post) => post.name === name)[0];
        this.#title = title;
        this.#date = date;
        this.#intro = intro;
        this.#link = href;
        this.id = _nanoid.nanoid();
        this.liked = false;
        this.render(this.#holder);
    }
    render = (holder)=>{
        holder.insertAdjacentHTML("beforeend", `
      <div class="card post" id="${this.id}">
        <h2 class="post__title">${this.#title}</h2>
        <p class="post__date">${this.#date}</p>
        <p class="post__intro">${this.#intro}</p>
        <a class="post__link" href="${this.#link}" target="blank">Read article</a>
        <div class="like">
          <svg class="icon icon-star-empty">
            <use href="#icon-star-full"></use>
          </svg>
        </div>
      </div>
      `);
    };
}
exports.default = Newsitem;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","nanoid":"4OOvb"}],"4OOvb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid
);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet
);
parcelHelpers.export(exports, "customRandom", ()=>customRandom
);
parcelHelpers.export(exports, "urlAlphabet", ()=>_indexJs.urlAlphabet
);
parcelHelpers.export(exports, "random", ()=>random
);
var _indexJs = require("./url-alphabet/index.js");
if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative' && typeof crypto === 'undefined') throw new Error("React Native does not have a built-in secure random generator. If you don’t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID.");
if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') throw new Error("Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support");
if (typeof crypto === 'undefined') throw new Error("Your browser does not have secure random generator. If you don’t need unpredictable IDs, you can use nanoid/non-secure.");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes))
;
let customRandom = (alphabet, size, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * size / alphabet.length);
    return ()=>{
        let id = '';
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size)=>customRandom(alphabet, size, random)
;
let nanoid = (size = 21)=>{
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    while(size--){
        let byte = bytes[size] & 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte < 63) id += '_';
        else id += '-';
    }
    return id;
};

},{"./url-alphabet/index.js":"iiQl7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iiQl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>urlAlphabet
);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dpBmu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _songScss = require("./Song.scss");
var _song = require("./Song");
var _songDefault = parcelHelpers.interopDefault(_song);
exports.default = _songDefault.default;

},{"./Song.scss":"639zH","./Song":"lQ6Z4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"639zH":[function() {},{}],"lQ6Z4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import * as redux from "redux";
// import { musicStore, musicReducer } from "../../data/music.js";
var _nanoid = require("nanoid");
class Song {
    #holder;
    // #song;
    #author;
    #title;
    #path;
    #photo;
    constructor(songURL, title, img, author){
        this.#holder = document.querySelector("#music");
        this.likesHolder = document.querySelector(".likes__main");
        // this.#song = musicStore
        //   .getState()
        //   .filter((song) => song.title === title)[0];
        this.#author = author;
        this.#title = title;
        this.#path = songURL;
        this.#photo = img;
        this.id = _nanoid.nanoid();
        this.liked = false;
        this.render(this.#holder);
    }
    render = (holder)=>{
        holder.insertAdjacentHTML("beforeend", `
      <div class="card song" id="${this.id}">
        <h2 class="song__author">${this.#author}</h2>
        <h3 class="song__title">${this.#title}</h3>
        <img class="song__photo" src="${this.#photo}" alt= "{this.#title}">
        <audio class="song__path" controls src="${this.#path}"></audio>
        <div class="like">
        <svg class="icon icon-star-empty">
          <use href="#icon-star-full"></use>
        </svg>
      </div>
      </div>
      `);
    };
}
exports.default = Song;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","nanoid":"4OOvb"}],"1Hh7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _photoScss = require("./Photo.scss");
var _photo = require("./Photo");
var _photoDefault = parcelHelpers.interopDefault(_photo);
exports.default = _photoDefault.default;

},{"./Photo.scss":"4yhL8","./Photo":"gf4nt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4yhL8":[function() {},{}],"gf4nt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import * as redux from "redux";
// import { photosStore, photosReducer } from "../../data/photos.js";
var _nanoid = require("nanoid");
class Photo {
    #name;
    #holder;
    // #photoItem;
    #description;
    #photo;
    // #id;
    constructor(name, img, desc){
        this.#name = name;
        this.#holder = document.querySelector("#photos");
        this.likesHolder = document.querySelector(".likes__main");
        // this.#photoItem = photosStore
        //   .getState()
        //   .filter((photo) => photo.name === name)[0];
        // console.log(this.#photoItem);
        this.#description = desc;
        this.#photo = img;
        this.id = _nanoid.nanoid();
        this.liked = false;
        this.render(this.#holder);
    }
    render = (holder)=>{
        holder.insertAdjacentHTML("beforeend", `
      <div class="card photo" id="${this.id}">
        <img class="photo__img" src="${this.#photo}" alt="${this.#description}">
        <p class="photo__desc">${this.#description}</p>
        <div class="like">
          <svg class="icon icon-star-empty">
            <use href="#icon-star-full"></use>
          </svg>
        </div>
      </div>
      `);
    };
}
exports.default = Photo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","nanoid":"4OOvb"}],"M6jpw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
var _news = require("./news");
var _newsDefault = parcelHelpers.interopDefault(_news);
var _music = require("./music");
var _musicDefault = parcelHelpers.interopDefault(_music);
var _photos = require("./photos");
var _photosDefault = parcelHelpers.interopDefault(_photos);
var _likes = require("./likes");
var _likesDefault = parcelHelpers.interopDefault(_likes);
// const saveStoreToLocalStorage = (store) => (next) => (action) => {
//   console.log(action.type);
//   console.group("prevState");
//   console.log(store.getState());
//   console.groupEnd("prevState");
//   next(action);
//   console.group("nextState");
//   console.log(store.getState());
//   console.groupEnd("nextState");
//   window.localStorage.setItem("store", JSON.stringify(store.getState()));
// };
const rootReducer = _redux.combineReducers({
    newsReducer: _newsDefault.default,
    musicReducer: _musicDefault.default,
    photosReducer: _photosDefault.default
});
exports.default = _redux.createStore(rootReducer);

},{"redux":"ifMRI","./news":"fJgQd","./music":"fs6CZ","./photos":"6iDTk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./likes":"LSTUt"}],"fJgQd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleNews", ()=>toggleNews
);
var _redux = require("redux");
var _newsitem = require("../components/newsitem");
var _newsitemDefault = parcelHelpers.interopDefault(_newsitem);
/**
 * ACTIONTYPES
 */ const TOGGLENEWS = "TOGGLENEWS";
const toggleNews = ()=>({
        type: TOGGLENEWS
    })
;
/**
 * INITIAL DATA
 */ const initialState = [
    new _newsitemDefault.default("democracy", "16 09 2021", "Poll Finds Most Americans Would Swap Democracy For $100 Best Buy Gift Card", "According to the results of a new poll released Thursday by the Pew Research Center, the majority of Americans would swap democracy for a $100 Best Buy gift card.", "https://www.theonion.com/poll-finds-most-americans-would-swap-democracy-for-100-1847682668"),
    new _newsitemDefault.default("luchtbalonnen", "03 10 2021", "Honderden luchtballonnen stijgen op tijdens festival in VS", "Honderden ballonnen stegen zaterdag op in Albuquerque, in alle denkbare kleuren, vormen en maten. In de Amerikaanse stad is zaterdag het internationale luchtballonfestival van start gegaan.", "https://www.standaard.be/cnt/dmf20211003_93538427"),
    new _newsitemDefault.default("alligator", "02 10 2021", "Man ziet alligator in tuin en grijpt op hoogst originele wijze in", "Een man in Florida heeft op spectaculaire wijze een alligator kunnen vangen. Het reptiel verschool zich in de tuin van de buren, maar Abdul Gene Malik vond een oplossing om het dier te vangen. ", "https://www.standaard.be/cnt/dmf20211002_93599532"),
    new _newsitemDefault.default("klimaat", "24 10 2021", "Nog één week voor de klimaattop: hoe zit het nu eigenlijk met onze planeet?", "Na de zomer van 2021 stellen we ons de vraag: valt het klimaat nog te redden, of komen alle beloftes van de wereldleiders rijkelijk te laat?", "https://www.standaard.be/cnt/dmf20211022_94506296"),
    new _newsitemDefault.default("zeespiegel", "15 10 2021", "Dreiging voor steden als zeespiegel jaren blijft stijgen", "Als de opwarming van de aarde in het huidige tempo doorgaat, moeten zo’n vijftig steden ‘ongekende aanpassingsmaatregelen’ nemen om te voorkomen dat ze door stijgend waterpeil onder water komen te staan.", "https://www.standaard.be/cnt/dmf20211015_93918618"), 
];
/**
 * REDUCER
 */ const newsReducer = (state = initialState, { type , payload  })=>{
    switch(type){
        case TOGGLENEWS:
            return {
                ...state
            };
        default:
            return state;
    }
};
exports.default = newsReducer;

},{"redux":"ifMRI","../components/newsitem":"ie6yB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fs6CZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleSong", ()=>toggleSong
);
var _redux = require("redux");
var _song = require("../components/song");
var _songDefault = parcelHelpers.interopDefault(_song);
// Songs and their images
const changesSong = new URL(require("f05dabcd18bc6e23"));
const changesImg = new URL(require("1ab89ed192bafe4b"));
const mosquitoesSong = new URL(require("8ffa39f285ce86c6"));
const mosquitoesImg = new URL(require("942d5e2dc826489"));
const biscayaSong = new URL(require("e845d0cef57403cf"));
const biscayaImg = new URL(require("ebcd0aa0863af56d"));
const danceSong = new URL(require("a5ac90bdc993c624"));
const danceImg = new URL(require("28dc058371e7c750"));
/**
 * ACTIONTYPES
 */ const TOGGLESONG = "TOGGLESONG";
const toggleSong = ()=>({
        type: TOGGLESONG
    })
;
/**
 * INITIAL DATA
 */ const initialState = [
    new _songDefault.default(changesSong, "Changes", changesImg, "Black Sabbath"),
    new _songDefault.default(mosquitoesSong, "No More Mosquitoes", mosquitoesImg, "Four Tet"),
    new _songDefault.default(biscayaSong, "Biscaya", biscayaImg, "James Last"),
    new _songDefault.default(danceSong, "I don't care to dance", danceImg, "J.E. Sunde"), 
];
/**
 * REDUCER
 */ const musicReducer = (state = initialState, { type , payload  })=>{
    switch(type){
        case TOGGLESONG:
            return {
                ...state
            };
        default:
            return state;
    }
};
exports.default = musicReducer;

},{"redux":"ifMRI","../components/song":"dpBmu","f05dabcd18bc6e23":"8mUG8","1ab89ed192bafe4b":"aYSjE","8ffa39f285ce86c6":"46MSr","942d5e2dc826489":"c3BZv","e845d0cef57403cf":"6Lw9F","ebcd0aa0863af56d":"hlaSN","a5ac90bdc993c624":"hY6AB","28dc058371e7c750":"d3N4D","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8mUG8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "Black Sabbath-Changes.e44e0f1e.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aYSjE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "blacksabbath.566860f8.jpeg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"46MSr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "Four Tet-No More Mosquitoes.66f6576f.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"c3BZv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "fourtet.28de3197.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6Lw9F":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "James Last-Biscaya.79e28431.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hlaSN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "jameslast.e6d5fd08.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hY6AB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "JE Sunde-I Don't Care To Dance.8799bf65.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"d3N4D":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "jesunde.982cafd6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6iDTk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "togglePhoto", ()=>togglePhoto
);
var _redux = require("redux");
var _photo = require("../components/photo");
var _photoDefault = parcelHelpers.interopDefault(_photo);
// Photos
const lama = new URL(require("676d6bcd1a6ee56d"));
const palmtrees = new URL(require("2b52d4b06755bc02"));
const santa = new URL(require("8cd1004c19adfabf"));
const beach = new URL(require("ce7d915acbc4fc3"));
/**
 * ACTIONTYPES
 */ const TOGGLEPHOTO = "TOGGLEPHOTO";
const togglePhoto = ()=>({
        type: TOGGLEPHOTO
    })
;
/**
 * INITIAL DATA
 */ const initialState = [
    new _photoDefault.default("lama", lama, "A fluffy lama"),
    new _photoDefault.default("palmtree", palmtrees, "A bunch of palmtrees"),
    new _photoDefault.default("santa", santa, "A Santa Cruz Beach playground"),
    new _photoDefault.default("beach", beach, "Lampuuk Beach in Aceh-Indonesia."), 
];
/**
 * REDUCER
 */ const photosReducer = (state = initialState, { type  })=>state
;
exports.default = photosReducer;

},{"redux":"ifMRI","../components/photo":"1Hh7W","676d6bcd1a6ee56d":"2U0mM","2b52d4b06755bc02":"lnyNm","8cd1004c19adfabf":"1Kayb","ce7d915acbc4fc3":"lCtaX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2U0mM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "lama.b2ddd191.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lnyNm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "palmtrees.0568284f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1Kayb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "santacruz.1772fe76.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lCtaX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "beach.728d49bb.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"LSTUt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "remove", ()=>remove
);
// import { nanoid } from "nanoid";
/**
 * TYPES
 */ const ADD = "ADD";
const REMOVE = "REMOVE";
const add = (obj)=>({
        type: ADD,
        payload: obj
    })
;
const remove = (obj)=>({
        type: REMOVE,
        payload: obj
    })
;
/**
 * INITIALSTATE
 */ const initState = [];
/**
 * REDUCER
 */ const likesReducer = (state = initState, { type , payload  })=>{
    switch(type){
        case ADD:
            return [
                ...state,
                payload
            ];
        case REMOVE:
            return state.filter((obj)=>obj !== payload
            );
        default:
            return state;
    }
};
exports.default = likesReducer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["cSv3F","3auaO"], "3auaO", "parcelRequirebe21")

//# sourceMappingURL=index.8b7fb9b3.js.map
