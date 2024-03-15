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
})({"86oZd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// IMAGES
var _bgImageDaytimeJpg = require("./assets/mobile/bg-image-daytime.jpg");
var _bgImageDaytimeJpgDefault = parcelHelpers.interopDefault(_bgImageDaytimeJpg);
var _bgImageDaytimeJpg1 = require("./assets/tablet/bg-image-daytime.jpg");
var _bgImageDaytimeJpgDefault1 = parcelHelpers.interopDefault(_bgImageDaytimeJpg1);
var _bgImageDaytimeJpg2 = require("./assets/desktop/bg-image-daytime.jpg");
var _bgImageDaytimeJpgDefault2 = parcelHelpers.interopDefault(_bgImageDaytimeJpg2);
var _bgImageNighttimeJpg = require("./assets/mobile/bg-image-nighttime.jpg");
var _bgImageNighttimeJpgDefault = parcelHelpers.interopDefault(_bgImageNighttimeJpg);
var _bgImageNighttimeJpg1 = require("./assets/tablet/bg-image-nighttime.jpg");
var _bgImageNighttimeJpgDefault1 = parcelHelpers.interopDefault(_bgImageNighttimeJpg1);
var _bgImageNighttimeJpg2 = require("./assets/desktop/bg-image-nighttime.jpg");
var _bgImageNighttimeJpgDefault2 = parcelHelpers.interopDefault(_bgImageNighttimeJpg2);
console.log("by michelcwn");
console.log("https://github.com/michelcwn");
console.log("Ig0Y8WaBtSgFrRAAASmwgA==pDN7ZAyflo3Z6JhK");
console.log("854307c784774bf9bd848ba9c7e54e36");
// DOM ELEMENTS
const greeting = document.querySelector(".info__details__greeting");
const currentTime = document.querySelector(".info__details__time");
const currentLocation = document.querySelector(".info__details__location");
const bodyBackground = document.querySelector("body");
const main = document.querySelector(".main");
const info = document.querySelector(".info");
const infoDetails = document.querySelector(".info__details");
const quote = document.querySelector(".main__quote");
const btn = document.querySelector(".info__more__button");
const btnText = document.querySelector(".info__more__button__text");
const btnDown = document.querySelector(".arrow-down");
const btnUp = document.querySelector(".arrow-up");
// quote
const quoteText = document.querySelector(".main__quote__text");
const quoteAuthor = document.querySelector(".main__quote__author");
const quoteIcon = document.querySelector(".main__quote__icon");
// expand
const expand = document.querySelector(".expand");
const expandValueTimezone = document.querySelector(".expand__value-timezone");
const expandValueDayWeek = document.querySelector(".expand__value-days-week");
const expandValueDays = document.querySelector(".expand__value-days");
const expandValueWeekNumber = document.querySelector(".expand__value-week-number");
// GET IP //
async function getUserIP() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        console.log("User IP:", data.ip); // Affiche l'adresse IP de l'utilisateur
        return data.ip;
    } catch (error) {
        console.error("Unable to get user IP:", error);
    }
}
// GET QUOTES //
let category = "life";
async function fetchQuote() {
    const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": "Ig0Y8WaBtSgFrRAAASmwgA==pDN7ZAyflo3Z6JhK"
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const { quote } = data[0];
        const { author } = data[0];
        quoteText.textContent = `"${quote}"`;
        quoteAuthor.textContent = author;
    } catch (error) {
        console.error("Could not fetch the quote:", error);
    }
}
quoteIcon.addEventListener("click", fetchQuote);
fetchQuote();
// FETCH IP DATA //
const fetchIpData = async (ip)=>{
    try {
        const apiKey = "854307c784774bf9bd848ba9c7e54e36";
        // Utilisation de AllOrigins
        const allOriginsUrl = "https://api.allorigins.win/raw?url=";
        const targetUrl = encodeURIComponent(`https://api.findip.net/${ip}/?token=${apiKey}`);
        const response = await fetch(allOriginsUrl + targetUrl);
        if (!response.ok) throw new Error(`Erreur lors de la r\xe9cup\xe9ration des donn\xe9es : ${response.statusText}`);
        const data = await response.json();
        // Assurez-vous que le chemin d'accès à la timezone est correct selon la structure de l'objet JSON retourné
        const timezone = data?.location?.time_zone;
        return timezone;
    } catch (error) {
        console.error("Erreur lors de la r\xe9cup\xe9ration des informations IP:", error);
    }
};
// Location & Time
const formatTime = function(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours(); // Pas besoin de convertir pour le format 24 heures
    let minutes = date.getMinutes();
    // Formate les minutes pour avoir toujours deux chiffres
    const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesFormatted}`;
};
const getCurrentHour = function(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    return hours;
};
// TIMEZONE //
const fetchTimeZone = async function(timezone) {
    try {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
        const data = await response.json();
        const dataString = data.utc_datetime;
        const currentHour = getCurrentHour(dataString);
        // Sélection des icônes
        const iconSun = document.querySelector(".info__icon--sun");
        const iconMoon = document.querySelector(".info__icon--moon");
        // Initialisation des variables pour les images
        let imageUrl;
        // Déterminer quelle icône afficher et choisir l'image correspondante
        if (currentHour >= 6 && currentHour < 18) {
            iconSun.classList.remove("hidden");
            iconMoon.classList.add("hidden");
            imageUrl = window.innerWidth <= 375 ? (0, _bgImageDaytimeJpgDefault.default) : window.innerWidth <= 768 ? (0, _bgImageDaytimeJpgDefault1.default) : (0, _bgImageDaytimeJpgDefault2.default);
            greeting.textContent = "Good Morning, it's currently";
            expand.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
            expand.style.color = "var(--color-black)";
        } else {
            iconSun.classList.add("hidden");
            iconMoon.classList.remove("hidden");
            imageUrl = window.innerWidth <= 375 ? (0, _bgImageNighttimeJpgDefault.default) : window.innerWidth <= 768 ? (0, _bgImageNighttimeJpgDefault1.default) : (0, _bgImageNighttimeJpgDefault2.default);
            greeting.textContent = currentHour < 6 ? "Good Night, it's currently" : "Good Evening, it's currently";
            expand.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            expand.style.color = "var(--color-white)";
        }
        // Appliquer l'image de fond
        bodyBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${imageUrl})`;
        // Mettre à jour les contenus textuels
        currentLocation.textContent = data.timezone;
        expandValueTimezone.textContent = data.timezone;
        currentTime.textContent = formatTime(dataString);
    } catch (error) {
        console.log(error);
    }
};
// Exécution asynchrone pour chaîner les appels de fonction
(async ()=>{
    try {
        const userIp = await getUserIP();
        const timezone = await fetchIpData(userIp);
        await fetchTimeZone(timezone);
    } catch (error) {
        console.error(error);
    }
})();
// HANDLER
let appliedEffects = false;
btn.addEventListener("click", function(e) {
    e.preventDefault();
    quote.classList.toggle("hidden");
    expand.classList.toggle("hidden");
    btnDown.classList.toggle("hidden");
    btnUp.classList.toggle("hidden");
    main.style.minHeight = main.style.minHeight === "50vh" ? "100vh" : "50vh";
    if (appliedEffects) {
        // Si les effets sont déjà appliqués, les retirer
        document.documentElement.style.setProperty("--after-left", "10");
        document.documentElement.style.setProperty("--after-right", "10");
        document.documentElement.style.setProperty("--after-bottom", "10");
        document.documentElement.style.setProperty("--after-filter", "none");
        appliedEffects = false; // Réinitialiser l'indicateur
    } else {
        // Si les effets ne sont pas appliqués, les appliquer
        document.documentElement.style.setProperty("--after-left", "-10px");
        document.documentElement.style.setProperty("--after-right", "-10px");
        document.documentElement.style.setProperty("--after-bottom", "-10px");
        document.documentElement.style.setProperty("--after-filter", "blur(10px)");
        appliedEffects = true; // Mettre à jour l'indicateur
    }
    btnText.textContent = btnText.textContent === "more" ? "less" : "more";
});
// EXPAND //
function dayOfTheYear() {
    const currentDay = new Date();
    const startYear = new Date(currentDay.getFullYear(), 0, 0);
    const difference = currentDay - startYear;
    const oneDay = 86400000;
    const day = Math.floor(difference / oneDay);
    expandValueDays.textContent = `${day}`;
}
dayOfTheYear();
function dayOfTheWeek() {
    const now = new Date();
    const dayOfTheWeek = now.getDay();
    const correctedDay = dayOfTheWeek === 0 ? 7 : dayOfTheWeek;
    expandValueDayWeek.textContent = `${correctedDay}`;
}
dayOfTheWeek();
function getWeekNumber() {
    const now = new Date();
    const FirstJanuary = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - FirstJanuary) / 86400000);
    const weekNumber = Math.ceil((now.getDay() + 1 + days) / 7);
    expandValueWeekNumber.textContent = `${weekNumber}`;
}
getWeekNumber();

},{"./assets/mobile/bg-image-daytime.jpg":"lTVM3","./assets/tablet/bg-image-daytime.jpg":"PdiU6","./assets/desktop/bg-image-daytime.jpg":"fSGD3","./assets/mobile/bg-image-nighttime.jpg":"bbM4y","./assets/tablet/bg-image-nighttime.jpg":"gCck3","./assets/desktop/bg-image-nighttime.jpg":"3lqj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTVM3":[function(require,module,exports) {
module.exports = require("e9ec5deabed28cd5").getBundleURL("fqV6O") + "bg-image-daytime.703da775.jpg" + "?" + Date.now();

},{"e9ec5deabed28cd5":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
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
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"PdiU6":[function(require,module,exports) {
module.exports = require("56ad6415a4e00de3").getBundleURL("fqV6O") + "bg-image-daytime.7589cbbc.jpg" + "?" + Date.now();

},{"56ad6415a4e00de3":"lgJ39"}],"fSGD3":[function(require,module,exports) {
module.exports = require("e605827e6db01228").getBundleURL("fqV6O") + "bg-image-daytime.6652f412.jpg" + "?" + Date.now();

},{"e605827e6db01228":"lgJ39"}],"bbM4y":[function(require,module,exports) {
module.exports = require("48defdc43d1d66fb").getBundleURL("fqV6O") + "bg-image-nighttime.2497ea5e.jpg" + "?" + Date.now();

},{"48defdc43d1d66fb":"lgJ39"}],"gCck3":[function(require,module,exports) {
module.exports = require("dc9bd6a64f0c80c9").getBundleURL("fqV6O") + "bg-image-nighttime.9dd05ef5.jpg" + "?" + Date.now();

},{"dc9bd6a64f0c80c9":"lgJ39"}],"3lqj0":[function(require,module,exports) {
module.exports = require("de5f53972d95ce39").getBundleURL("fqV6O") + "bg-image-nighttime.40ecd80f.jpg" + "?" + Date.now();

},{"de5f53972d95ce39":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}]},["86oZd","6rimH"], "6rimH", "parcelRequire9a0f")

//# sourceMappingURL=index.8cfc62b9.js.map
