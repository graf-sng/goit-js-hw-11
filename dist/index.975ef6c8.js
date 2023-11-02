// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lodashDebounce = require("lodash.debounce");
var _lodashDebounceDefault = parcelHelpers.interopDefault(_lodashDebounce);
var _catApi = require("./cat-api");
var _slimSelect = require("slim-select");
var _slimSelectDefault = parcelHelpers.interopDefault(_slimSelect);
var _notiflixReportAio = require("notiflix/build/notiflix-report-aio");
const elements = {
    select: document.querySelector(".breed-select"),
    info: document.querySelector(".cat-info"),
    loader: document.querySelector(".loader")
};
elements.select.classList.add("is-hidden");
elements.info.classList.add("is-hidden");
// elements.error.classList.add('is-hidden');
(0, _catApi.fetchBreeds)().then((data)=>{
    setTimeout(()=>{
        data.forEach(({ id , name  })=>{
            elements.select.insertAdjacentHTML("beforeend", `
          <option value="${id}">${name}</option>`);
        });
        new (0, _slimSelectDefault.default)({
            select: elements.select
        });
        elements.select.classList.remove("is-hidden");
        elements.loader.classList.add("is-hidden");
    }, 1000);
}).catch((err)=>{
    (0, _notiflixReportAio.Report).failure("Oops! ", `Something went wrong! Try reloading the page!`);
    // elements.error.classList.remove('is-hidden');
    elements.select.classList.add("is-hidden");
    elements.info.classList.add("is-hidden");
    elements.loader.classList.add("is-hidden");
});
elements.select.addEventListener("change", (0, _lodashDebounceDefault.default)(handlerClick, 300));
function handlerClick(e) {
    elements.info.innerHTML = "";
    (0, _catApi.fetchCatByBreed)(e.target.value).then((data)=>{
        elements.loader.classList.remove("is-hidden");
        elements.info.classList.add("is-hidden");
        setTimeout(()=>{
            const [{ breeds: [{ name ="Default cat" , temperament ="Default temperament" , description ="Default description" ,  }, ] = [] , url ="https://cdn2.thecatapi.com/images/OOD3VXAQn.jpg" ,  }, ] = data;
            elements.info.innerHTML = `
        <img src="${url}" alt="${name}" width="300">
        <div class='about-cat'> 
        <h1>${name}</h1>
             <p>${description}</p>
             <p><b>Temperament:</b> ${temperament}</p>
          </img>
        </div>`;
            elements.info.classList.remove("is-hidden");
            elements.loader.classList.add("is-hidden");
        }, 1000);
    }).catch((err)=>{
        (0, _notiflixReportAio.Report).failure("Oops! ", `Something went wrong! Try reloading the page!`);
        // elements.error.classList.remove('is-hidden');
        elements.info.classList.add("is-hidden");
        elements.loader.classList.add("is-hidden");
    });
}

},{"./cat-api":"d7YdZ","lodash.debounce":"3JP5n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","slim-select":"lzHUr","notiflix/build/notiflix-report-aio":"hNopu"}],"d7YdZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchBreeds", ()=>fetchBreeds);
parcelHelpers.export(exports, "fetchCatByBreed", ()=>fetchCatByBreed);
const BASE_URL = "https://api.thecatapi.com/v1";
function fetchBreeds() {
    const END_POINT = "/breeds";
    const API_KEY = "live_JaGwEH6MjDQQotHROv3JeSJQWvKIVcj00lv8loXjOFIWkAySD9X5ySt69HlOu8M4";
    const params = new URLSearchParams({
        api_key: API_KEY
    });
    return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp)=>{
        if (!resp.ok) throw new Error(resp.statusText || "Error");
        return resp.json();
    });
}
function fetchCatByBreed(id) {
    const END_POINT = "/images/search";
    const API_KEY = "live_JaGwEH6MjDQQotHROv3JeSJQWvKIVcj00lv8loXjOFIWkAySD9X5ySt69HlOu8M4";
    const params = new URLSearchParams({
        api_key: API_KEY,
        breed_ids: id
    });
    return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp)=>{
        if (!resp.ok) {
            elements.select.classList.add("is-hidden");
            throw new Error(resp.statusText || "Error");
        }
        return resp.json();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"3JP5n":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = "Expected a function";
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result1, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result1 = func.apply(thisArg, args);
        return result1;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result1;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result1;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result1 : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result1;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;

},{}],"lzHUr":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function generateID() {
        return Math.random().toString(36).substring(2, 10);
    }
    function hasClassInTree(element, className) {
        function hasClass(e, c) {
            if (c && e && e.classList && e.classList.contains(c)) return e;
            if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) return e;
            return null;
        }
        function parentByClass(e, c) {
            if (!e || e === document) return null;
            else if (hasClass(e, c)) return e;
            else return parentByClass(e.parentNode, c);
        }
        return hasClass(element, className) || parentByClass(element, className);
    }
    function debounce(func, wait = 50, immediate = false) {
        let timeout;
        return function(...args) {
            const context = self;
            const later = ()=>{
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    function isEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function kebabCase(str) {
        const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match)=>"-" + match.toLowerCase());
        return str[0] === str[0].toUpperCase() ? result.substring(1) : result;
    }
    class Settings {
        constructor(settings){
            this.id = "";
            this.style = "";
            this.class = [];
            this.isMultiple = false;
            this.isOpen = false;
            this.isFullOpen = false;
            this.intervalMove = null;
            if (!settings) settings = {};
            this.id = "ss-" + generateID();
            this.style = settings.style || "";
            this.class = settings.class || [];
            this.disabled = settings.disabled !== undefined ? settings.disabled : false;
            this.alwaysOpen = settings.alwaysOpen !== undefined ? settings.alwaysOpen : false;
            this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true;
            this.searchPlaceholder = settings.searchPlaceholder || "Search";
            this.searchText = settings.searchText || "No Results";
            this.searchingText = settings.searchingText || "Searching...";
            this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false;
            this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true;
            this.contentLocation = settings.contentLocation || document.body;
            this.contentPosition = settings.contentPosition || "absolute";
            this.openPosition = settings.openPosition || "auto";
            this.placeholderText = settings.placeholderText !== undefined ? settings.placeholderText : "Select Value";
            this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false;
            this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false;
            this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false;
            this.minSelected = settings.minSelected || 0;
            this.maxSelected = settings.maxSelected || 1000;
            this.timeoutDelay = settings.timeoutDelay || 200;
            this.maxValuesShown = settings.maxValuesShown || 20;
            this.maxValuesMessage = settings.maxValuesMessage || "{number} selected";
        }
    }
    class Optgroup {
        constructor(optgroup){
            this.id = !optgroup.id || optgroup.id === "" ? generateID() : optgroup.id;
            this.label = optgroup.label || "";
            this.selectAll = optgroup.selectAll === undefined ? false : optgroup.selectAll;
            this.selectAllText = optgroup.selectAllText || "Select All";
            this.closable = optgroup.closable || "off";
            this.options = [];
            if (optgroup.options) for (const o of optgroup.options)this.options.push(new Option(o));
        }
    }
    class Option {
        constructor(option){
            this.id = !option.id || option.id === "" ? generateID() : option.id;
            this.value = option.value === undefined ? option.text : option.value;
            this.text = option.text || "";
            this.html = option.html || "";
            this.selected = option.selected !== undefined ? option.selected : false;
            this.display = option.display !== undefined ? option.display : true;
            this.disabled = option.disabled !== undefined ? option.disabled : false;
            this.mandatory = option.mandatory !== undefined ? option.mandatory : false;
            this.placeholder = option.placeholder !== undefined ? option.placeholder : false;
            this.class = option.class || "";
            this.style = option.style || "";
            this.data = option.data || {};
        }
    }
    class Store {
        constructor(type, data){
            this.selectType = "single";
            this.data = [];
            this.selectType = type;
            this.setData(data);
        }
        validateDataArray(data) {
            if (!Array.isArray(data)) return new Error("Data must be an array");
            for (let dataObj of data){
                if (dataObj instanceof Optgroup || "label" in dataObj) {
                    if (!("label" in dataObj)) return new Error("Optgroup must have a label");
                    if ("options" in dataObj && dataObj.options) {
                        for (let option of dataObj.options)return this.validateOption(option);
                    }
                } else if (dataObj instanceof Option || "text" in dataObj) return this.validateOption(dataObj);
                else return new Error("Data object must be a valid optgroup or option");
            }
            return null;
        }
        validateOption(option) {
            if (!("text" in option)) return new Error("Option must have a text");
            return null;
        }
        partialToFullData(data) {
            let dataFinal = [];
            data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup || "label" in dataObj) {
                    let optOptions = [];
                    if ("options" in dataObj && dataObj.options) dataObj.options.forEach((option)=>{
                        optOptions.push(new Option(option));
                    });
                    if (optOptions.length > 0) dataFinal.push(new Optgroup(dataObj));
                }
                if (dataObj instanceof Option || "text" in dataObj) dataFinal.push(new Option(dataObj));
            });
            return dataFinal;
        }
        setData(data) {
            this.data = this.partialToFullData(data);
            if (this.selectType === "single") this.setSelectedBy("value", this.getSelected());
        }
        getData() {
            return this.filter(null, true);
        }
        getDataOptions() {
            return this.filter(null, false);
        }
        addOption(option) {
            this.setData(this.getData().concat(new Option(option)));
        }
        setSelectedBy(selectedType, selectedValues) {
            let firstOption = null;
            let hasSelected = false;
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup) for (let option of dataObj.options){
                    if (!firstOption) firstOption = option;
                    option.selected = hasSelected ? false : selectedValues.includes(option[selectedType]);
                    if (option.selected && this.selectType === "single") hasSelected = true;
                }
                if (dataObj instanceof Option) {
                    if (!firstOption) firstOption = dataObj;
                    dataObj.selected = hasSelected ? false : selectedValues.includes(dataObj[selectedType]);
                    if (dataObj.selected && this.selectType === "single") hasSelected = true;
                }
            }
            if (this.selectType === "single" && firstOption && !hasSelected) firstOption.selected = true;
        }
        getSelected() {
            let selectedOptions = this.getSelectedOptions();
            let selectedValues = [];
            selectedOptions.forEach((option)=>{
                selectedValues.push(option.value);
            });
            return selectedValues;
        }
        getSelectedOptions() {
            return this.filter((opt)=>{
                return opt.selected;
            }, false);
        }
        getSelectedIDs() {
            let selectedOptions = this.getSelectedOptions();
            let selectedIDs = [];
            selectedOptions.forEach((op)=>{
                selectedIDs.push(op.id);
            });
            return selectedIDs;
        }
        getOptgroupByID(id) {
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup && dataObj.id === id) return dataObj;
            }
            return null;
        }
        getOptionByID(id) {
            let options = this.filter((opt)=>{
                return opt.id === id;
            }, false);
            return options.length ? options[0] : null;
        }
        search(search, searchFilter) {
            search = search.trim();
            if (search === "") return this.getData();
            return this.filter((opt)=>{
                return searchFilter(opt, search);
            }, true);
        }
        filter(filter, includeOptgroup) {
            const dataSearch = [];
            this.data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup) {
                    let optOptions = [];
                    dataObj.options.forEach((option)=>{
                        if (!filter || filter(option)) {
                            if (!includeOptgroup) dataSearch.push(new Option(option));
                            else optOptions.push(new Option(option));
                        }
                    });
                    if (optOptions.length > 0) {
                        let optgroup = new Optgroup(dataObj);
                        optgroup.options = optOptions;
                        dataSearch.push(optgroup);
                    }
                }
                if (dataObj instanceof Option) {
                    if (!filter || filter(dataObj)) dataSearch.push(new Option(dataObj));
                }
            });
            return dataSearch;
        }
        getSelectType() {
            return this.selectType;
        }
    }
    class Render {
        constructor(settings, store, callbacks){
            this.classes = {
                main: "ss-main",
                placeholder: "ss-placeholder",
                values: "ss-values",
                single: "ss-single",
                max: "ss-max",
                value: "ss-value",
                valueText: "ss-value-text",
                valueDelete: "ss-value-delete",
                valueOut: "ss-value-out",
                deselect: "ss-deselect",
                deselectPath: "M10,10 L90,90 M10,90 L90,10",
                arrow: "ss-arrow",
                arrowClose: "M10,30 L50,70 L90,30",
                arrowOpen: "M10,70 L50,30 L90,70",
                content: "ss-content",
                openAbove: "ss-open-above",
                openBelow: "ss-open-below",
                search: "ss-search",
                searchHighlighter: "ss-search-highlight",
                searching: "ss-searching",
                addable: "ss-addable",
                addablePath: "M50,10 L50,90 M10,50 L90,50",
                list: "ss-list",
                optgroup: "ss-optgroup",
                optgroupLabel: "ss-optgroup-label",
                optgroupLabelText: "ss-optgroup-label-text",
                optgroupActions: "ss-optgroup-actions",
                optgroupSelectAll: "ss-selectall",
                optgroupSelectAllBox: "M60,10 L10,10 L10,90 L90,90 L90,50",
                optgroupSelectAllCheck: "M30,45 L50,70 L90,10",
                optgroupClosable: "ss-closable",
                option: "ss-option",
                optionDelete: "M10,10 L90,90 M10,90 L90,10",
                highlighted: "ss-highlighted",
                open: "ss-open",
                close: "ss-close",
                selected: "ss-selected",
                error: "ss-error",
                disabled: "ss-disabled",
                hide: "ss-hide"
            };
            this.store = store;
            this.settings = settings;
            this.callbacks = callbacks;
            this.main = this.mainDiv();
            this.content = this.contentDiv();
            this.updateClassStyles();
            this.updateAriaAttributes();
            this.settings.contentLocation.appendChild(this.content.main);
        }
        enable() {
            this.main.main.classList.remove(this.classes.disabled);
            this.content.search.input.disabled = false;
        }
        disable() {
            this.main.main.classList.add(this.classes.disabled);
            this.content.search.input.disabled = true;
        }
        open() {
            this.main.arrow.path.setAttribute("d", this.classes.arrowOpen);
            this.main.main.classList.add(this.settings.openPosition === "up" ? this.classes.openAbove : this.classes.openBelow);
            this.main.main.setAttribute("aria-expanded", "true");
            this.moveContent();
            const selectedOptions = this.store.getSelectedOptions();
            if (selectedOptions.length) {
                const selectedId = selectedOptions[selectedOptions.length - 1].id;
                const selectedOption = this.content.list.querySelector('[data-id="' + selectedId + '"]');
                if (selectedOption) this.ensureElementInView(this.content.list, selectedOption);
            }
        }
        close() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.setAttribute("aria-expanded", "false");
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.main.arrow.path.setAttribute("d", this.classes.arrowClose);
        }
        updateClassStyles() {
            this.main.main.className = "";
            this.main.main.removeAttribute("style");
            this.content.main.className = "";
            this.content.main.removeAttribute("style");
            this.main.main.classList.add(this.classes.main);
            this.content.main.classList.add(this.classes.content);
            if (this.settings.style !== "") {
                this.main.main.style.cssText = this.settings.style;
                this.content.main.style.cssText = this.settings.style;
            }
            if (this.settings.class.length) {
                for (const c of this.settings.class)if (c.trim() !== "") {
                    this.main.main.classList.add(c.trim());
                    this.content.main.classList.add(c.trim());
                }
            }
            if (this.settings.contentPosition === "relative") this.content.main.classList.add("ss-" + this.settings.contentPosition);
        }
        updateAriaAttributes() {
            this.main.main.role = "combobox";
            this.main.main.setAttribute("aria-haspopup", "listbox");
            this.main.main.setAttribute("aria-controls", this.content.main.id);
            this.main.main.setAttribute("aria-expanded", "false");
            this.content.main.setAttribute("role", "listbox");
        }
        mainDiv() {
            var _a;
            const main = document.createElement("div");
            main.dataset.id = this.settings.id;
            main.id = this.settings.id;
            main.tabIndex = 0;
            main.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        this.callbacks.open();
                        e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
                        return false;
                    case "Tab":
                        this.callbacks.close();
                        return true;
                    case "Enter":
                    case " ":
                        this.callbacks.open();
                        const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
                        if (highlighted) highlighted.click();
                        return false;
                    case "Escape":
                        this.callbacks.close();
                        return false;
                }
            };
            main.onclick = (e)=>{
                if (this.settings.disabled) return;
                this.settings.isOpen ? this.callbacks.close() : this.callbacks.open();
            };
            const values = document.createElement("div");
            values.classList.add(this.classes.values);
            main.appendChild(values);
            const deselect = document.createElement("div");
            deselect.classList.add(this.classes.deselect);
            const selectedOptions = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
            if (!this.settings.allowDeselect || this.settings.isMultiple && selectedOptions && selectedOptions.length <= 0) deselect.classList.add(this.classes.hide);
            else deselect.classList.remove(this.classes.hide);
            deselect.onclick = (e)=>{
                e.stopPropagation();
                if (this.settings.disabled) return;
                let shouldDelete = true;
                const before = this.store.getSelectedOptions();
                const after = [];
                if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                if (shouldDelete) {
                    if (this.settings.isMultiple) {
                        this.callbacks.setSelected([], false);
                        this.updateDeselectAll();
                    } else this.callbacks.setSelected([
                        ""
                    ], false);
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                }
            };
            const deselectSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            deselectSvg.setAttribute("viewBox", "0 0 100 100");
            const deselectPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            deselectPath.setAttribute("d", this.classes.deselectPath);
            deselectSvg.appendChild(deselectPath);
            deselect.appendChild(deselectSvg);
            main.appendChild(deselect);
            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            arrow.classList.add(this.classes.arrow);
            arrow.setAttribute("viewBox", "0 0 100 100");
            const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            arrowPath.setAttribute("d", this.classes.arrowClose);
            if (this.settings.alwaysOpen) arrow.classList.add(this.classes.hide);
            arrow.appendChild(arrowPath);
            main.appendChild(arrow);
            return {
                main: main,
                values: values,
                deselect: {
                    main: deselect,
                    svg: deselectSvg,
                    path: deselectPath
                },
                arrow: {
                    main: arrow,
                    path: arrowPath
                }
            };
        }
        mainFocus(eventType) {
            if (eventType !== "click") this.main.main.focus({
                preventScroll: true
            });
        }
        placeholder() {
            const placeholderOption = this.store.filter((o)=>o.placeholder, false);
            let placeholderText = this.settings.placeholderText;
            if (placeholderOption.length) {
                if (placeholderOption[0].html !== "") placeholderText = placeholderOption[0].html;
                else if (placeholderOption[0].text !== "") placeholderText = placeholderOption[0].text;
            }
            const placeholder = document.createElement("div");
            placeholder.classList.add(this.classes.placeholder);
            placeholder.innerHTML = placeholderText;
            return placeholder;
        }
        renderValues() {
            if (!this.settings.isMultiple) {
                this.renderSingleValue();
                return;
            }
            this.renderMultipleValues();
        }
        renderSingleValue() {
            const selected = this.store.filter((o)=>{
                return o.selected && !o.placeholder;
            }, false);
            const selectedSingle = selected.length > 0 ? selected[0] : null;
            if (!selectedSingle) this.main.values.innerHTML = this.placeholder().outerHTML;
            else {
                const singleValue = document.createElement("div");
                singleValue.classList.add(this.classes.single);
                if (selectedSingle.html) singleValue.innerHTML = selectedSingle.html;
                else singleValue.innerText = selectedSingle.text;
                this.main.values.innerHTML = singleValue.outerHTML;
            }
            if (!this.settings.allowDeselect || !selected.length) this.main.deselect.main.classList.add(this.classes.hide);
            else this.main.deselect.main.classList.remove(this.classes.hide);
        }
        renderMultipleValues() {
            let currentNodes = this.main.values.childNodes;
            let selectedOptions = this.store.filter((opt)=>{
                return opt.selected && opt.display;
            }, false);
            if (selectedOptions.length === 0) {
                this.main.values.innerHTML = this.placeholder().outerHTML;
                return;
            } else {
                const placeholder = this.main.values.querySelector("." + this.classes.placeholder);
                if (placeholder) placeholder.remove();
            }
            if (selectedOptions.length > this.settings.maxValuesShown) {
                const singleValue = document.createElement("div");
                singleValue.classList.add(this.classes.max);
                singleValue.textContent = this.settings.maxValuesMessage.replace("{number}", selectedOptions.length.toString());
                this.main.values.innerHTML = singleValue.outerHTML;
                return;
            } else {
                const maxValuesMessage = this.main.values.querySelector("." + this.classes.max);
                if (maxValuesMessage) maxValuesMessage.remove();
            }
            let removeNodes = [];
            for(let i = 0; i < currentNodes.length; i++){
                const node = currentNodes[i];
                const id = node.getAttribute("data-id");
                if (id) {
                    const found = selectedOptions.filter((opt)=>{
                        return opt.id === id;
                    }, false);
                    if (!found.length) removeNodes.push(node);
                }
            }
            for (const n of removeNodes){
                n.classList.add(this.classes.valueOut);
                setTimeout(()=>{
                    if (this.main.values.hasChildNodes() && this.main.values.contains(n)) this.main.values.removeChild(n);
                }, 100);
            }
            currentNodes = this.main.values.childNodes;
            for(let d = 0; d < selectedOptions.length; d++){
                let shouldAdd = true;
                for(let i = 0; i < currentNodes.length; i++)if (selectedOptions[d].id === String(currentNodes[i].dataset.id)) shouldAdd = false;
                if (shouldAdd) {
                    if (currentNodes.length === 0) this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                    else if (d === 0) this.main.values.insertBefore(this.multipleValue(selectedOptions[d]), currentNodes[d]);
                    else currentNodes[d - 1].insertAdjacentElement("afterend", this.multipleValue(selectedOptions[d]));
                }
            }
            this.updateDeselectAll();
        }
        multipleValue(option) {
            const value = document.createElement("div");
            value.classList.add(this.classes.value);
            value.dataset.id = option.id;
            const text = document.createElement("div");
            text.classList.add(this.classes.valueText);
            text.innerText = option.text;
            value.appendChild(text);
            if (!option.mandatory) {
                const deleteDiv = document.createElement("div");
                deleteDiv.classList.add(this.classes.valueDelete);
                deleteDiv.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.settings.disabled) return;
                    let shouldDelete = true;
                    const before = this.store.getSelectedOptions();
                    const after = before.filter((o)=>{
                        return o.selected && o.id !== option.id;
                    }, true);
                    if (this.settings.minSelected && after.length < this.settings.minSelected) return;
                    if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                    if (shouldDelete) {
                        let selectedValues = [];
                        for (const o of after){
                            if (o instanceof Optgroup) for (const c of o.options)selectedValues.push(c.value);
                            if (o instanceof Option) selectedValues.push(o.value);
                        }
                        this.callbacks.setSelected(selectedValues, false);
                        if (this.settings.closeOnSelect) this.callbacks.close();
                        if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                        this.updateDeselectAll();
                    }
                };
                const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                deleteSvg.setAttribute("viewBox", "0 0 100 100");
                const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                deletePath.setAttribute("d", this.classes.optionDelete);
                deleteSvg.appendChild(deletePath);
                deleteDiv.appendChild(deleteSvg);
                value.appendChild(deleteDiv);
            }
            return value;
        }
        contentDiv() {
            const main = document.createElement("div");
            main.dataset.id = this.settings.id;
            main.id = this.settings.id;
            const search = this.searchDiv();
            main.appendChild(search.main);
            const list = this.listDiv();
            main.appendChild(list);
            return {
                main: main,
                search: search,
                list: list
            };
        }
        moveContent() {
            if (this.settings.contentPosition === "relative") {
                this.moveContentBelow();
                return;
            }
            if (this.settings.openPosition === "down") {
                this.moveContentBelow();
                return;
            } else if (this.settings.openPosition === "up") {
                this.moveContentAbove();
                return;
            }
            if (this.putContent() === "up") this.moveContentAbove();
            else this.moveContentBelow();
        }
        searchDiv() {
            const main = document.createElement("div");
            const input = document.createElement("input");
            const addable = document.createElement("div");
            main.classList.add(this.classes.search);
            const searchReturn = {
                main,
                input
            };
            if (!this.settings.showSearch) {
                main.classList.add(this.classes.hide);
                input.readOnly = true;
            }
            input.type = "search";
            input.placeholder = this.settings.searchPlaceholder;
            input.tabIndex = -1;
            input.setAttribute("aria-label", this.settings.searchPlaceholder);
            input.setAttribute("autocapitalize", "off");
            input.setAttribute("autocomplete", "off");
            input.setAttribute("autocorrect", "off");
            input.oninput = debounce((e)=>{
                this.callbacks.search(e.target.value);
            }, 100);
            input.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
                        return false;
                    case "Tab":
                        this.callbacks.close();
                        return true;
                    case "Escape":
                        this.callbacks.close();
                        return false;
                    case "Enter":
                    case " ":
                        if (this.callbacks.addable && e.ctrlKey) {
                            addable.click();
                            return false;
                        } else {
                            const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
                            if (highlighted) {
                                highlighted.click();
                                return false;
                            }
                        }
                        return true;
                }
            };
            main.appendChild(input);
            if (this.callbacks.addable) {
                addable.classList.add(this.classes.addable);
                const plus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                plus.setAttribute("viewBox", "0 0 100 100");
                const plusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                plusPath.setAttribute("d", this.classes.addablePath);
                plus.appendChild(plusPath);
                addable.appendChild(plus);
                addable.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (!this.callbacks.addable) return;
                    const inputValue = this.content.search.input.value.trim();
                    if (inputValue === "") {
                        this.content.search.input.focus();
                        return;
                    }
                    const runFinish = (oo)=>{
                        let newOption = new Option(oo);
                        this.callbacks.addOption(newOption);
                        if (this.settings.isMultiple) {
                            let values = this.store.getSelected();
                            values.push(newOption.value);
                            this.callbacks.setSelected(values, true);
                        } else this.callbacks.setSelected([
                            newOption.value
                        ], true);
                        this.callbacks.search("");
                        if (this.settings.closeOnSelect) setTimeout(()=>{
                            this.callbacks.close();
                        }, 100);
                    };
                    const addableValue = this.callbacks.addable(inputValue);
                    if (addableValue === false || addableValue === undefined || addableValue === null) return;
                    if (addableValue instanceof Promise) addableValue.then((value)=>{
                        if (typeof value === "string") runFinish({
                            text: value,
                            value: value
                        });
                        else runFinish(value);
                    });
                    else if (typeof addableValue === "string") runFinish({
                        text: addableValue,
                        value: addableValue
                    });
                    else runFinish(addableValue);
                    return;
                };
                main.appendChild(addable);
                searchReturn.addable = {
                    main: addable,
                    svg: plus,
                    path: plusPath
                };
            }
            return searchReturn;
        }
        searchFocus() {
            this.content.search.input.focus();
        }
        getOptions(notPlaceholder = false, notDisabled = false, notHidden = false) {
            let query = "." + this.classes.option;
            if (notPlaceholder) query += ":not(." + this.classes.placeholder + ")";
            if (notDisabled) query += ":not(." + this.classes.disabled + ")";
            if (notHidden) query += ":not(." + this.classes.hide + ")";
            return Array.from(this.content.list.querySelectorAll(query));
        }
        highlight(dir) {
            const options = this.getOptions(true, true, true);
            if (options.length === 0) return;
            if (options.length === 1) {
                if (!options[0].classList.contains(this.classes.highlighted)) {
                    options[0].classList.add(this.classes.highlighted);
                    return;
                }
            }
            for(let i = 0; i < options.length; i++)if (options[i].classList.contains(this.classes.highlighted)) {
                const prevOption = options[i];
                prevOption.classList.remove(this.classes.highlighted);
                const prevParent = prevOption.parentElement;
                if (prevParent && prevParent.classList.contains(this.classes.open)) {
                    const optgroupLabel = prevParent.querySelector("." + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                let selectOption = options[dir === "down" ? i + 1 < options.length ? i + 1 : 0 : i - 1 >= 0 ? i - 1 : options.length - 1];
                selectOption.classList.add(this.classes.highlighted);
                this.ensureElementInView(this.content.list, selectOption);
                const selectParent = selectOption.parentElement;
                if (selectParent && selectParent.classList.contains(this.classes.close)) {
                    const optgroupLabel = selectParent.querySelector("." + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                return;
            }
            options[dir === "down" ? 0 : options.length - 1].classList.add(this.classes.highlighted);
            this.ensureElementInView(this.content.list, options[dir === "down" ? 0 : options.length - 1]);
        }
        listDiv() {
            const options = document.createElement("div");
            options.classList.add(this.classes.list);
            return options;
        }
        renderError(error) {
            this.content.list.innerHTML = "";
            const errorDiv = document.createElement("div");
            errorDiv.classList.add(this.classes.error);
            errorDiv.textContent = error;
            this.content.list.appendChild(errorDiv);
        }
        renderSearching() {
            this.content.list.innerHTML = "";
            const searchingDiv = document.createElement("div");
            searchingDiv.classList.add(this.classes.searching);
            searchingDiv.textContent = this.settings.searchingText;
            this.content.list.appendChild(searchingDiv);
        }
        renderOptions(data) {
            this.content.list.innerHTML = "";
            if (data.length === 0) {
                const noResults = document.createElement("div");
                noResults.classList.add(this.classes.search);
                noResults.innerHTML = this.settings.searchText;
                this.content.list.appendChild(noResults);
                return;
            }
            for (const d of data){
                if (d instanceof Optgroup) {
                    const optgroupEl = document.createElement("div");
                    optgroupEl.classList.add(this.classes.optgroup);
                    const optgroupLabel = document.createElement("div");
                    optgroupLabel.classList.add(this.classes.optgroupLabel);
                    optgroupEl.appendChild(optgroupLabel);
                    const optgroupLabelText = document.createElement("div");
                    optgroupLabelText.classList.add(this.classes.optgroupLabelText);
                    optgroupLabelText.textContent = d.label;
                    optgroupLabel.appendChild(optgroupLabelText);
                    const optgroupActions = document.createElement("div");
                    optgroupActions.classList.add(this.classes.optgroupActions);
                    optgroupLabel.appendChild(optgroupActions);
                    if (this.settings.isMultiple && d.selectAll) {
                        const selectAll = document.createElement("div");
                        selectAll.classList.add(this.classes.optgroupSelectAll);
                        let allSelected = true;
                        for (const o1 of d.options)if (!o1.selected) {
                            allSelected = false;
                            break;
                        }
                        if (allSelected) selectAll.classList.add(this.classes.selected);
                        const selectAllText = document.createElement("span");
                        selectAllText.textContent = d.selectAllText;
                        selectAll.appendChild(selectAllText);
                        const selectAllSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        selectAllSvg.setAttribute("viewBox", "0 0 100 100");
                        selectAll.appendChild(selectAllSvg);
                        const selectAllBox = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        selectAllBox.setAttribute("d", this.classes.optgroupSelectAllBox);
                        selectAllSvg.appendChild(selectAllBox);
                        const selectAllCheck = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        selectAllCheck.setAttribute("d", this.classes.optgroupSelectAllCheck);
                        selectAllSvg.appendChild(selectAllCheck);
                        selectAll.addEventListener("click", (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            const currentSelected = this.store.getSelected();
                            if (allSelected) {
                                const newSelected = currentSelected.filter((s)=>{
                                    for (const o of d.options){
                                        if (s === o.value) return false;
                                    }
                                    return true;
                                });
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            } else {
                                const newSelected = currentSelected.concat(d.options.map((o)=>o.value));
                                for (const o5 of d.options)if (!this.store.getOptionByID(o5.id)) this.callbacks.addOption(o5);
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            }
                        });
                        optgroupActions.appendChild(selectAll);
                    }
                    if (d.closable !== "off") {
                        const optgroupClosable = document.createElement("div");
                        optgroupClosable.classList.add(this.classes.optgroupClosable);
                        const optgroupClosableSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        optgroupClosableSvg.setAttribute("viewBox", "0 0 100 100");
                        optgroupClosableSvg.classList.add(this.classes.arrow);
                        optgroupClosable.appendChild(optgroupClosableSvg);
                        const optgroupClosableArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        optgroupClosableSvg.appendChild(optgroupClosableArrow);
                        if (d.options.some((o)=>o.selected) || this.content.search.input.value.trim() !== "") {
                            optgroupClosable.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                        } else if (d.closable === "open") {
                            optgroupEl.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                        } else if (d.closable === "close") {
                            optgroupEl.classList.add(this.classes.close);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
                        }
                        optgroupLabel.addEventListener("click", (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            if (optgroupEl.classList.contains(this.classes.close)) {
                                optgroupEl.classList.remove(this.classes.close);
                                optgroupEl.classList.add(this.classes.open);
                                optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                            } else {
                                optgroupEl.classList.remove(this.classes.open);
                                optgroupEl.classList.add(this.classes.close);
                                optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
                            }
                        });
                        optgroupActions.appendChild(optgroupClosable);
                    }
                    optgroupEl.appendChild(optgroupLabel);
                    for (const o2 of d.options)optgroupEl.appendChild(this.option(o2));
                    this.content.list.appendChild(optgroupEl);
                }
                if (d instanceof Option) this.content.list.appendChild(this.option(d));
            }
        }
        option(option) {
            if (option.placeholder) {
                const placeholder = document.createElement("div");
                placeholder.classList.add(this.classes.option);
                placeholder.classList.add(this.classes.hide);
                return placeholder;
            }
            const optionEl = document.createElement("div");
            optionEl.dataset.id = option.id;
            optionEl.id = option.id;
            optionEl.classList.add(this.classes.option);
            optionEl.setAttribute("role", "option");
            if (option.class) option.class.split(" ").forEach((dataClass)=>{
                optionEl.classList.add(dataClass);
            });
            if (option.style) optionEl.style.cssText = option.style;
            if (this.settings.searchHighlight && this.content.search.input.value.trim() !== "") optionEl.innerHTML = this.highlightText(option.html !== "" ? option.html : option.text, this.content.search.input.value, this.classes.searchHighlighter);
            else if (option.html !== "") optionEl.innerHTML = option.html;
            else optionEl.textContent = option.text;
            if (this.settings.showOptionTooltips && optionEl.textContent) optionEl.setAttribute("title", optionEl.textContent);
            if (!option.display) optionEl.classList.add(this.classes.hide);
            if (option.disabled) optionEl.classList.add(this.classes.disabled);
            if (option.selected && this.settings.hideSelected) optionEl.classList.add(this.classes.hide);
            if (option.selected) {
                optionEl.classList.add(this.classes.selected);
                optionEl.setAttribute("aria-selected", "true");
                this.main.main.setAttribute("aria-activedescendant", optionEl.id);
            } else {
                optionEl.classList.remove(this.classes.selected);
                optionEl.setAttribute("aria-selected", "false");
            }
            optionEl.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const selectedOptions = this.store.getSelected();
                const element = e.currentTarget;
                const elementID = String(element.dataset.id);
                if (option.disabled || option.selected && !this.settings.allowDeselect) return;
                if (this.settings.isMultiple && this.settings.maxSelected <= selectedOptions.length && !option.selected || this.settings.isMultiple && this.settings.minSelected >= selectedOptions.length && option.selected) return;
                let shouldUpdate = false;
                const before = this.store.getSelectedOptions();
                let after = [];
                if (this.settings.isMultiple) {
                    if (option.selected) after = before.filter((o)=>o.id !== elementID);
                    else after = before.concat(option);
                }
                if (!this.settings.isMultiple) {
                    if (option.selected) after = [];
                    else after = [
                        option
                    ];
                }
                if (!this.callbacks.beforeChange) shouldUpdate = true;
                if (this.callbacks.beforeChange) {
                    if (this.callbacks.beforeChange(after, before) === false) shouldUpdate = false;
                    else shouldUpdate = true;
                }
                if (shouldUpdate) {
                    if (!this.store.getOptionByID(elementID)) this.callbacks.addOption(option);
                    this.callbacks.setSelected(after.map((o)=>o.value), false);
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                }
            });
            return optionEl;
        }
        destroy() {
            this.main.main.remove();
            this.content.main.remove();
        }
        highlightText(str, search, className) {
            let completedString = str;
            const regex = new RegExp("(" + search.trim() + ")(?![^<]*>[^<>]*</)", "i");
            if (!str.match(regex)) return str;
            const matchStartPosition = str.match(regex).index;
            const matchEndPosition = matchStartPosition + str.match(regex)[0].toString().length;
            const originalTextFoundByRegex = str.substring(matchStartPosition, matchEndPosition);
            completedString = completedString.replace(regex, `<mark class="${className}">${originalTextFoundByRegex}</mark>`);
            return completedString;
        }
        moveContentAbove() {
            const mainHeight = this.main.main.offsetHeight;
            const contentHeight = this.content.main.offsetHeight;
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.classList.add(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.content.main.classList.add(this.classes.openAbove);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-" + (mainHeight + contentHeight - 1) + "px 0px 0px 0px";
            this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";
            this.content.main.style.left = containerRect.left + window.scrollX + "px";
            this.content.main.style.width = containerRect.width + "px";
        }
        moveContentBelow() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.add(this.classes.openBelow);
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.add(this.classes.openBelow);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-1px 0px 0px 0px";
            if (this.settings.contentPosition !== "relative") {
                this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";
                this.content.main.style.left = containerRect.left + window.scrollX + "px";
                this.content.main.style.width = containerRect.width + "px";
            }
        }
        ensureElementInView(container, element) {
            const cTop = container.scrollTop + container.offsetTop;
            const cBottom = cTop + container.clientHeight;
            const eTop = element.offsetTop;
            const eBottom = eTop + element.clientHeight;
            if (eTop < cTop) container.scrollTop -= cTop - eTop;
            else if (eBottom > cBottom) container.scrollTop += eBottom - cBottom;
        }
        putContent() {
            const mainHeight = this.main.main.offsetHeight;
            const mainRect = this.main.main.getBoundingClientRect();
            const contentHeight = this.content.main.offsetHeight;
            const spaceBelow = window.innerHeight - (mainRect.top + mainHeight);
            if (spaceBelow <= contentHeight) {
                if (mainRect.top > contentHeight) return "up";
                else return "down";
            }
            return "down";
        }
        updateDeselectAll() {
            if (!this.store || !this.settings) return;
            const selected = this.store.getSelectedOptions();
            const hasSelectedItems = selected && selected.length > 0;
            const isMultiple = this.settings.isMultiple;
            const allowDeselect = this.settings.allowDeselect;
            const deselectButton = this.main.deselect.main;
            const hideClass = this.classes.hide;
            if (allowDeselect && !(isMultiple && !hasSelectedItems)) deselectButton.classList.remove(hideClass);
            else deselectButton.classList.add(hideClass);
        }
    }
    class Select {
        constructor(select){
            this.listen = false;
            this.observer = null;
            this.select = select;
            this.select.addEventListener("change", this.valueChange.bind(this), {
                passive: true
            });
            this.observer = new MutationObserver(this.observeCall.bind(this));
            this.changeListen(true);
        }
        enable() {
            this.select.disabled = false;
        }
        disable() {
            this.select.disabled = true;
        }
        hideUI() {
            this.select.tabIndex = -1;
            this.select.style.display = "none";
            this.select.setAttribute("aria-hidden", "true");
        }
        showUI() {
            this.select.removeAttribute("tabindex");
            this.select.style.display = "";
            this.select.removeAttribute("aria-hidden");
        }
        changeListen(listen) {
            this.listen = listen;
            if (listen) {
                if (this.observer) this.observer.observe(this.select, {
                    subtree: true,
                    childList: true,
                    attributes: true
                });
            }
            if (!listen) {
                if (this.observer) this.observer.disconnect();
            }
        }
        valueChange(ev) {
            if (this.listen && this.onValueChange) this.onValueChange(this.getSelectedValues());
            return true;
        }
        observeCall(mutations) {
            if (!this.listen) return;
            let classChanged = false;
            let disabledChanged = false;
            let optgroupOptionChanged = false;
            for (const m of mutations){
                if (m.target === this.select) {
                    if (m.attributeName === "disabled") disabledChanged = true;
                    if (m.attributeName === "class") classChanged = true;
                }
                if (m.target.nodeName === "OPTGROUP" || m.target.nodeName === "OPTION") optgroupOptionChanged = true;
            }
            if (classChanged && this.onClassChange) this.onClassChange(this.select.className.split(" "));
            if (disabledChanged && this.onDisabledChange) {
                this.changeListen(false);
                this.onDisabledChange(this.select.disabled);
                this.changeListen(true);
            }
            if (optgroupOptionChanged && this.onOptionsChange) {
                this.changeListen(false);
                this.onOptionsChange(this.getData());
                this.changeListen(true);
            }
        }
        getData() {
            let data = [];
            const nodes = this.select.childNodes;
            for (const n of nodes){
                if (n.nodeName === "OPTGROUP") data.push(this.getDataFromOptgroup(n));
                if (n.nodeName === "OPTION") data.push(this.getDataFromOption(n));
            }
            return data;
        }
        getDataFromOptgroup(optgroup) {
            let data = {
                id: optgroup.id,
                label: optgroup.label,
                selectAll: optgroup.dataset ? optgroup.dataset.selectall === "true" : false,
                selectAllText: optgroup.dataset ? optgroup.dataset.selectalltext : "Select all",
                closable: optgroup.dataset ? optgroup.dataset.closable : "off",
                options: []
            };
            const options = optgroup.childNodes;
            for (const o of options)if (o.nodeName === "OPTION") data.options.push(this.getDataFromOption(o));
            return data;
        }
        getDataFromOption(option) {
            return {
                id: option.id,
                value: option.value,
                text: option.text,
                html: option.dataset && option.dataset.html ? option.dataset.html : "",
                selected: option.selected,
                display: option.style.display === "none" ? false : true,
                disabled: option.disabled,
                mandatory: option.dataset ? option.dataset.mandatory === "true" : false,
                placeholder: option.dataset.placeholder === "true",
                class: option.className,
                style: option.style.cssText,
                data: option.dataset
            };
        }
        getSelectedValues() {
            let values = [];
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === "OPTGROUP") {
                    const optgroupOptions = o.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === "OPTION") {
                        const option = oo;
                        if (option.selected) values.push(option.value);
                    }
                }
                if (o.nodeName === "OPTION") {
                    const option = o;
                    if (option.selected) values.push(option.value);
                }
            }
            return values;
        }
        setSelected(value) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === "OPTGROUP") {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === "OPTION") {
                        const option = oo;
                        option.selected = value.includes(option.value);
                    }
                }
                if (o.nodeName === "OPTION") {
                    const option = o;
                    option.selected = value.includes(option.value);
                }
            }
            this.changeListen(true);
        }
        updateSelect(id, style, classes) {
            this.changeListen(false);
            if (id) this.select.dataset.id = id;
            if (style) this.select.style.cssText = style;
            if (classes) {
                this.select.className = "";
                classes.forEach((c)=>{
                    if (c.trim() !== "") this.select.classList.add(c.trim());
                });
            }
            this.changeListen(true);
        }
        updateOptions(data) {
            this.changeListen(false);
            this.select.innerHTML = "";
            for (const d of data){
                if (d instanceof Optgroup) this.select.appendChild(this.createOptgroup(d));
                if (d instanceof Option) this.select.appendChild(this.createOption(d));
            }
            this.select.dispatchEvent(new Event("change"));
            this.changeListen(true);
        }
        createOptgroup(optgroup) {
            const optgroupEl = document.createElement("optgroup");
            optgroupEl.id = optgroup.id;
            optgroupEl.label = optgroup.label;
            if (optgroup.selectAll) optgroupEl.dataset.selectAll = "true";
            if (optgroup.closable !== "off") optgroupEl.dataset.closable = optgroup.closable;
            if (optgroup.options) for (const o of optgroup.options)optgroupEl.appendChild(this.createOption(o));
            return optgroupEl;
        }
        createOption(info) {
            const optionEl = document.createElement("option");
            optionEl.id = info.id;
            optionEl.value = info.value;
            optionEl.innerHTML = info.text;
            if (info.html !== "") optionEl.setAttribute("data-html", info.html);
            if (info.selected) optionEl.selected = info.selected;
            if (info.disabled) optionEl.disabled = true;
            if (info.display === false) optionEl.style.display = "none";
            if (info.placeholder) optionEl.setAttribute("data-placeholder", "true");
            if (info.mandatory) optionEl.setAttribute("data-mandatory", "true");
            if (info.class) info.class.split(" ").forEach((optionClass)=>{
                optionEl.classList.add(optionClass);
            });
            if (info.data && typeof info.data === "object") Object.keys(info.data).forEach((key)=>{
                optionEl.setAttribute("data-" + kebabCase(key), info.data[key]);
            });
            return optionEl;
        }
        destroy() {
            this.changeListen(false);
            this.select.removeEventListener("change", this.valueChange.bind(this));
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
            delete this.select.dataset.id;
            this.showUI();
        }
    }
    class SlimSelect {
        constructor(config){
            var _a;
            this.events = {
                search: undefined,
                searchFilter: (opt, search)=>{
                    return opt.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                },
                addable: undefined,
                beforeChange: undefined,
                afterChange: undefined,
                beforeOpen: undefined,
                afterOpen: undefined,
                beforeClose: undefined,
                afterClose: undefined
            };
            this.windowResize = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.windowScroll = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.documentClick = (e)=>{
                if (!this.settings.isOpen) return;
                if (e.target && !hasClassInTree(e.target, this.settings.id)) this.close(e.type);
            };
            this.windowVisibilityChange = ()=>{
                if (document.hidden) this.close();
            };
            this.selectEl = typeof config.select === "string" ? document.querySelector(config.select) : config.select;
            if (!this.selectEl) {
                if (config.events && config.events.error) config.events.error(new Error("Could not find select element"));
                return;
            }
            if (this.selectEl.tagName !== "SELECT") {
                if (config.events && config.events.error) config.events.error(new Error("Element isnt of type select"));
                return;
            }
            if (this.selectEl.dataset.ssid) this.destroy();
            this.settings = new Settings(config.settings);
            const debounceEvents = [
                "afterChange",
                "beforeOpen",
                "afterOpen",
                "beforeClose",
                "afterClose"
            ];
            for(const key in config.events){
                if (!config.events.hasOwnProperty(key)) continue;
                if (debounceEvents.indexOf(key) !== -1) this.events[key] = debounce(config.events[key], 100);
                else this.events[key] = config.events[key];
            }
            this.settings.disabled = ((_a = config.settings) === null || _a === void 0 ? void 0 : _a.disabled) ? config.settings.disabled : this.selectEl.disabled;
            this.settings.isMultiple = this.selectEl.multiple;
            this.settings.style = this.selectEl.style.cssText;
            this.settings.class = this.selectEl.className.split(" ");
            this.select = new Select(this.selectEl);
            this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class);
            this.select.hideUI();
            this.select.onValueChange = (values)=>{
                this.setSelected(values);
            };
            this.select.onClassChange = (classes)=>{
                this.settings.class = classes;
                this.render.updateClassStyles();
            };
            this.select.onDisabledChange = (disabled)=>{
                if (disabled) this.disable();
                else this.enable();
            };
            this.select.onOptionsChange = (data)=>{
                this.setData(data);
            };
            this.store = new Store(this.settings.isMultiple ? "multiple" : "single", config.data ? config.data : this.select.getData());
            if (config.data) this.select.updateOptions(this.store.getData());
            const callbacks = {
                open: this.open.bind(this),
                close: this.close.bind(this),
                addable: this.events.addable ? this.events.addable : undefined,
                setSelected: this.setSelected.bind(this),
                addOption: this.addOption.bind(this),
                search: this.search.bind(this),
                beforeChange: this.events.beforeChange,
                afterChange: this.events.afterChange
            };
            this.render = new Render(this.settings, this.store, callbacks);
            this.render.renderValues();
            this.render.renderOptions(this.store.getData());
            const selectAriaLabel = this.selectEl.getAttribute("aria-label");
            const selectAriaLabelledBy = this.selectEl.getAttribute("aria-labelledby");
            if (selectAriaLabel) this.render.main.main.setAttribute("aria-label", selectAriaLabel);
            else if (selectAriaLabelledBy) this.render.main.main.setAttribute("aria-labelledby", selectAriaLabelledBy);
            if (this.selectEl.parentNode) this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling);
            document.addEventListener("click", this.documentClick);
            window.addEventListener("resize", this.windowResize, false);
            if (this.settings.openPosition === "auto") window.addEventListener("scroll", this.windowScroll, false);
            document.addEventListener("visibilitychange", this.windowVisibilityChange);
            if (this.settings.disabled) this.disable();
            if (this.settings.alwaysOpen) this.open();
            this.selectEl.slim = this;
        }
        enable() {
            this.settings.disabled = false;
            this.select.enable();
            this.render.enable();
        }
        disable() {
            this.settings.disabled = true;
            this.select.disable();
            this.render.disable();
        }
        getData() {
            return this.store.getData();
        }
        setData(data) {
            const selected = this.store.getSelected();
            const err = this.store.validateDataArray(data);
            if (err) {
                if (this.events.error) this.events.error(err);
                return;
            }
            this.store.setData(data);
            const dataClean = this.store.getData();
            this.select.updateOptions(dataClean);
            this.render.renderValues();
            this.render.renderOptions(dataClean);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        getSelected() {
            return this.store.getSelected();
        }
        setSelected(value, runAfterChange = true) {
            const selected = this.store.getSelected();
            this.store.setSelectedBy("value", Array.isArray(value) ? value : [
                value
            ]);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            if (this.render.content.search.input.value !== "") this.search(this.render.content.search.input.value);
            else this.render.renderOptions(data);
            if (runAfterChange && this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        addOption(option) {
            const selected = this.store.getSelected();
            if (!this.store.getDataOptions().some((o)=>{
                var _a;
                return o.value === ((_a = option.value) !== null && _a !== void 0 ? _a : option.text);
            })) this.store.addOption(option);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            this.render.renderOptions(data);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        open() {
            if (this.settings.disabled || this.settings.isOpen) return;
            if (this.events.beforeOpen) this.events.beforeOpen();
            this.render.open();
            if (this.settings.showSearch) this.render.searchFocus();
            this.settings.isOpen = true;
            setTimeout(()=>{
                if (this.events.afterOpen) this.events.afterOpen();
                if (this.settings.isOpen) this.settings.isFullOpen = true;
            }, this.settings.timeoutDelay);
            if (this.settings.contentPosition === "absolute") {
                if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
                this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500);
            }
        }
        close(eventType = null) {
            if (!this.settings.isOpen || this.settings.alwaysOpen) return;
            if (this.events.beforeClose) this.events.beforeClose();
            this.render.close();
            if (this.render.content.search.input.value !== "") this.search("");
            this.render.mainFocus(eventType);
            this.settings.isOpen = false;
            this.settings.isFullOpen = false;
            setTimeout(()=>{
                if (this.events.afterClose) this.events.afterClose();
            }, this.settings.timeoutDelay);
            if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
        }
        search(value) {
            if (this.render.content.search.input.value !== value) this.render.content.search.input.value = value;
            if (!this.events.search) {
                this.render.renderOptions(value === "" ? this.store.getData() : this.store.search(value, this.events.searchFilter));
                return;
            }
            this.render.renderSearching();
            const searchResp = this.events.search(value, this.store.getSelectedOptions());
            if (searchResp instanceof Promise) {
                searchResp.then((data)=>{
                    this.render.renderOptions(this.store.partialToFullData(data));
                }).catch((err)=>{
                    this.render.renderError(typeof err === "string" ? err : err.message);
                });
                return;
            } else if (Array.isArray(searchResp)) this.render.renderOptions(this.store.partialToFullData(searchResp));
            else this.render.renderError("Search event must return a promise or an array of data");
        }
        destroy() {
            document.removeEventListener("click", this.documentClick);
            window.removeEventListener("resize", this.windowResize, false);
            if (this.settings.openPosition === "auto") window.removeEventListener("scroll", this.windowScroll, false);
            document.removeEventListener("visibilitychange", this.windowVisibilityChange);
            this.store.setData([]);
            this.render.destroy();
            this.select.destroy();
        }
    }
    return SlimSelect;
});

},{}],"hNopu":[function(require,module,exports) {
var global = arguments[3];
/*
* Notiflix Report AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.6
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/ /* global define */ (function(root, factory) {
    if (typeof define === "function" && define.amd) define([], function() {
        return factory(root);
    });
    else if (typeof module.exports === "object") module.exports = factory(root);
    else root.Notiflix = factory(root);
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this, function(window) {
    "use strict";
    // COMMON: SSR check: begin
    if (typeof window === "undefined" && typeof window.document === "undefined") return false;
    // COMMON: SSR check: end
    // COMMON: Variables: begin
    var notiflixNamespace = "Notiflix";
    var notiflixConsoleDocs = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation";
    var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    // COMMON: Variables: end
    // REPORT: Default Settings: begin
    var typesReport = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    };
    var newReportSettings;
    var reportSettings = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: false,
        zindex: 4002,
        backOverlay: true,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: false,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: true,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: true,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
            svgColor: "#32c682",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#32c682",
            buttonColor: "#fff",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            svgColor: "#ff5549",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#ff5549",
            buttonColor: "#fff",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            svgColor: "#eebf31",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#eebf31",
            buttonColor: "#fff",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            svgColor: "#26c0d3",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#26c0d3",
            buttonColor: "#fff",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    };
    // REPORT: Default Settings: end
    // COMMON: Console Error: begin
    var commonConsoleError = function(message) {
        return console.error("%c " + notiflixNamespace + " Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + message + notiflixConsoleDocs);
    };
    // COMMON: Console Error: end
    // COMMON: Check Head or Body: begin
    var commonCheckHeadOrBody = function(element) {
        if (!element) element = "head";
        if (window.document[element] === null) {
            commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
            return false;
        }
        return true;
    };
    // COMMON: Check Head or Body: end
    // COMMON: Set Internal CSS Codes: begin
    var commonSetInternalCSSCodes = function(getInternalCSSCodes, styleElementId) {
        // check doc head
        if (!commonCheckHeadOrBody("head")) return false;
        // internal css
        if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
            var internalCSS = window.document.createElement("style");
            internalCSS.id = styleElementId;
            internalCSS.innerHTML = getInternalCSSCodes();
            window.document.head.appendChild(internalCSS);
        }
    };
    // COMMON: Set Internal CSS Codes: end
    // COMMON: Extend Options: begin
    var commonExtendOptions = function() {
        // variables
        var extended = {};
        var deep = false;
        var i = 0;
        // check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }
        // merge the object into the extended object
        var merge = function(obj) {
            for(var prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // if property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
                else extended[prop] = obj[prop];
            }
        };
        // loop through each object and conduct a merge
        for(; i < arguments.length; i++)merge(arguments[i]);
        return extended;
    };
    // COMMON: Extend Options: end
    // COMMON: Get Plaintext: begin
    var commonGetPlaintext = function(html) {
        var htmlPool = window.document.createElement("div");
        htmlPool.innerHTML = html;
        return htmlPool.textContent || htmlPool.innerText || "";
    };
    // COMMON: Get Plaintext: end
    // REPORT: SVG Icon Success: begin
    var reportSvgIconSuccess = function(width, color) {
        if (!width) width = "110px";
        if (!color) color = "#32c682";
        var reportSvgSuccess = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return reportSvgSuccess;
    };
    // REPORT: SVG Icon Success: end
    // REPORT: SVG Icon Failure: begin
    var reportSvgIconFailure = function(width, color) {
        if (!width) width = "110px";
        if (!color) color = "#ff5549";
        var reportSvgFailure = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return reportSvgFailure;
    };
    // REPORT: SVG Icon Failure: end
    // REPORT: SVG Icon Warning: begin
    var reportSvgIconWarning = function(width, color) {
        if (!width) width = "110px";
        if (!color) color = "#eebf31";
        var reportSvgWarning = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return reportSvgWarning;
    };
    // REPORT: SVG Icon Warning: end
    // REPORT: SVG Icon Info: begin
    var reportSvgIconInfo = function(width, color) {
        if (!width) width = "110px";
        if (!color) color = "#26c0d3";
        var reportSvgInfo = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return reportSvgInfo;
    };
    // REPORT: SVG Icon Info: end
    // REPORT: Get Internal CSS Codes: begin
    var reportGetInternalCSSCodes = function() {
        var reportCSS = '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
        return reportCSS || null;
    };
    // REPORT: Get Internal CSS Codes: end
    // REPORT: Create: begin
    var reportCreate = function(reportType, title, message, buttonText, callbackOrOptions, options) {
        // check doc body
        if (!commonCheckHeadOrBody("body")) return false;
        // if not initialized pretend like init
        if (!newReportSettings) Notiflix.Report.init({});
        // create a backup for settings
        var newReportSettingsBackup = {};
        // check callbackOrOptions and options: begin
        if (typeof callbackOrOptions === "object" && !Array.isArray(callbackOrOptions) || typeof options === "object" && !Array.isArray(options)) {
            // new options
            var newOptions = {};
            if (typeof callbackOrOptions === "object") newOptions = callbackOrOptions;
            else if (typeof options === "object") newOptions = options;
            // extend the backup settings with new settings
            newReportSettingsBackup = commonExtendOptions(true, newReportSettings, {});
            // extend new settings with the options
            newReportSettings = commonExtendOptions(true, newReportSettings, newOptions);
        }
        // check callbackOrOptions and callback: end
        // report type
        var theType = newReportSettings[reportType.toLocaleLowerCase("en")];
        // check the arguments: begin
        if (typeof title !== "string") title = "Notiflix " + reportType;
        if (typeof message !== "string") {
            if (reportType === typesReport.Success) message = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein';
            else if (reportType === typesReport.Failure) message = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford';
            else if (reportType === typesReport.Warning) message = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk';
            else if (reportType === typesReport.Info) message = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung';
        }
        if (typeof buttonText !== "string") buttonText = "Okay";
        // check the arguments: end
        // if plainText is true => HTML tags not allowed: begin
        if (newReportSettings.plainText) {
            title = commonGetPlaintext(title);
            message = commonGetPlaintext(message);
            buttonText = commonGetPlaintext(buttonText);
        }
        // if plainText is true => HTML tags not allowed: end
        // if plainText is false but the contents length more than ${title | message | buttonText}MaxLength => Possible HTML tags error: begin
        if (!newReportSettings.plainText) {
            if (title.length > newReportSettings.titleMaxLength) {
                title = "Possible HTML Tags Error";
                message = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.';
                buttonText = "Okay";
            }
            if (message.length > newReportSettings.messageMaxLength) {
                title = "Possible HTML Tags Error";
                message = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.';
                buttonText = "Okay";
            }
            if (buttonText.length > newReportSettings.buttonMaxLength) {
                title = "Possible HTML Tags Error";
                message = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.';
                buttonText = "Okay";
            }
        }
        // if plainText is false but the contents length more than ${title | message | buttonText}MaxLength => Possible HTML tags error: end
        // max length: begin
        if (title.length > newReportSettings.titleMaxLength) title = title.substring(0, newReportSettings.titleMaxLength) + "...";
        if (message.length > newReportSettings.messageMaxLength) message = message.substring(0, newReportSettings.messageMaxLength) + "...";
        if (buttonText.length > newReportSettings.buttonMaxLength) buttonText = buttonText.substring(0, newReportSettings.buttonMaxLength) + "...";
        // max length: end
        // if cssAnimaion is false => duration: begin
        if (!newReportSettings.cssAnimation) newReportSettings.cssAnimationDuration = 0;
        // if cssAnimaion is false => duration: end
        // report wrap: begin
        var ntflxReportWrap = window.document.createElement("div");
        ntflxReportWrap.id = reportSettings.ID;
        ntflxReportWrap.className = newReportSettings.className;
        ntflxReportWrap.style.zIndex = newReportSettings.zindex;
        ntflxReportWrap.style.borderRadius = newReportSettings.borderRadius;
        ntflxReportWrap.style.fontFamily = '"' + newReportSettings.fontFamily + '", ' + defaultFontFamily;
        // rtl: begin
        if (newReportSettings.rtl) {
            ntflxReportWrap.setAttribute("dir", "rtl");
            ntflxReportWrap.classList.add("nx-rtl-on");
        }
        // rtl: end
        // position: begin
        ntflxReportWrap.style.display = "flex";
        ntflxReportWrap.style.flexWrap = "wrap";
        ntflxReportWrap.style.flexDirection = "column";
        ntflxReportWrap.style.alignItems = "center";
        ntflxReportWrap.style.justifyContent = "center";
        // position: end
        // overlay: begin
        var reportOverlay = "";
        var reportOverlayClickToClose = newReportSettings.backOverlayClickToClose === true;
        if (newReportSettings.backOverlay) reportOverlay = '<div class="' + newReportSettings.className + "-overlay" + (newReportSettings.cssAnimation ? " nx-with-animation" : "") + (reportOverlayClickToClose ? " nx-report-click-to-close" : "") + '" style="background:' + (theType.backOverlayColor || newReportSettings.backOverlayColor) + ";animation-duration:" + newReportSettings.cssAnimationDuration + 'ms;"></div>';
        // overlay: end
        // svg icon: begin
        var svgIcon = "";
        if (reportType === typesReport.Success) svgIcon = reportSvgIconSuccess(newReportSettings.svgSize, theType.svgColor);
        else if (reportType === typesReport.Failure) svgIcon = reportSvgIconFailure(newReportSettings.svgSize, theType.svgColor);
        else if (reportType === typesReport.Warning) svgIcon = reportSvgIconWarning(newReportSettings.svgSize, theType.svgColor);
        else if (reportType === typesReport.Info) svgIcon = reportSvgIconInfo(newReportSettings.svgSize, theType.svgColor);
        // svg icon: end
        ntflxReportWrap.innerHTML = reportOverlay + '<div class="' + newReportSettings.className + "-content" + (newReportSettings.cssAnimation ? " nx-with-animation " : "") + " nx-" + newReportSettings.cssAnimationStyle + '" style="width:' + newReportSettings.width + "; background:" + newReportSettings.backgroundColor + "; animation-duration:" + newReportSettings.cssAnimationDuration + 'ms;">' + '<div style="width:' + newReportSettings.svgSize + "; height:" + newReportSettings.svgSize + ';" class="' + newReportSettings.className + '-icon">' + svgIcon + "</div>" + '<h5 class="' + newReportSettings.className + '-title" style="font-weight:500; font-size:' + newReportSettings.titleFontSize + "; color:" + theType.titleColor + ';">' + title + "</h5>" + '<p class="' + newReportSettings.className + '-message" style="font-size:' + newReportSettings.messageFontSize + "; color:" + theType.messageColor + ';">' + message + "</p>" + '<a id="NXReportButton" class="' + newReportSettings.className + '-button" style="font-weight:500; font-size:' + newReportSettings.buttonFontSize + "; background:" + theType.buttonBackground + "; color:" + theType.buttonColor + ';">' + buttonText + "</a>" + "</div>";
        // if there is no report element
        if (!window.document.getElementById(ntflxReportWrap.id)) {
            // append
            window.document.body.appendChild(ntflxReportWrap);
            // report remove: begin
            var reportRemove = function() {
                var elementWrapper = window.document.getElementById(ntflxReportWrap.id);
                elementWrapper.classList.add("nx-remove");
                var timeout = setTimeout(function() {
                    if (elementWrapper.parentNode !== null) elementWrapper.parentNode.removeChild(elementWrapper);
                    clearTimeout(timeout);
                }, newReportSettings.cssAnimationDuration);
            };
            // report remove: end
            // callback: begin
            var elementButton = window.document.getElementById("NXReportButton");
            elementButton.addEventListener("click", function() {
                // if callback: begin
                if (typeof callbackOrOptions === "function") callbackOrOptions();
                // if callback: end
                // remove report
                reportRemove();
            });
            // callback: end
            // overlay click to close: begin
            if (reportOverlay && reportOverlayClickToClose) {
                var elementOverlay = window.document.querySelector(".nx-report-click-to-close");
                elementOverlay.addEventListener("click", function() {
                    reportRemove();
                });
            }
        // overlay click to close: end
        }
        // report wrap: end
        // extend new settings with the backup settings
        newReportSettings = commonExtendOptions(true, newReportSettings, newReportSettingsBackup);
    };
    // REPORT: Create: end
    var Notiflix = {
        Report: {
            // Init
            init: function(userReportOptions) {
                // extend options
                newReportSettings = commonExtendOptions(true, reportSettings, userReportOptions);
                // internal css if exist
                commonSetInternalCSSCodes(reportGetInternalCSSCodes, "NotiflixReportInternalCSS");
            },
            // Merge First Init
            merge: function(userReportExtendOptions) {
                // if initialized already
                if (newReportSettings) newReportSettings = commonExtendOptions(true, newReportSettings, userReportExtendOptions);
                else {
                    commonConsoleError("You have to initialize the Report module before call Merge function.");
                    return false;
                }
            },
            // Success
            success: function(title, message, buttonText, callbackOrOptions, options) {
                reportCreate(typesReport.Success, title, message, buttonText, callbackOrOptions, options);
            },
            // Failure
            failure: function(title, message, buttonText, callbackOrOptions, options) {
                reportCreate(typesReport.Failure, title, message, buttonText, callbackOrOptions, options);
            },
            // Warning
            warning: function(title, message, buttonText, callbackOrOptions, options) {
                reportCreate(typesReport.Warning, title, message, buttonText, callbackOrOptions, options);
            },
            // Info
            info: function(title, message, buttonText, callbackOrOptions, options) {
                reportCreate(typesReport.Info, title, message, buttonText, callbackOrOptions, options);
            }
        }
    };
    if (typeof window.Notiflix === "object") return commonExtendOptions(true, window.Notiflix, {
        Report: Notiflix.Report
    });
    else return {
        Report: Notiflix.Report
    };
});

},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
