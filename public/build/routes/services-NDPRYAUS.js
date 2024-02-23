import {
  createHotContext
} from "/build/_shared/chunk-AXWZE5KF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Services/Services.jsx
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/si/index.mjs
function SiCodesignal(props) {
  return GenIcon({ "tag": "svg", "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M24 1.212 13.012 2.787 12 5.62l-1.01-2.833L0 1.212 3.672 11.45l4.512.646 3.815 10.691 3.816-10.691 4.512-.646zm-3.625 4.406-4.52.648-.73 2.044 4.517-.647-.734 2.047-4.514.647L12 17.064l-2.393-6.707-4.514-.647-.735-2.047 4.518.647-.73-2.044-4.52-.648-.735-2.047 6.676.956L12 11.345l2.434-6.818 6.676-.956Z" }, "child": [] }] })(props);
}

// app/components/Services/Services.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Services/Services.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Services/Services.jsx"
  );
}
var Services = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "section services-section", id: "services", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Our Services" }, void 0, false, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We are a full service web development and analytics agency, specializing in helping local business get ranked increased business via digital mediums. While our main service is subscription websites, we offer a range of services." }, void 0, false, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Services/Services.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Services/Services.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-box-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiCodesignal, {}, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 34,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Subscription Websites" }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 37,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We design and develop full-stack websites for small businesses, creating stylish, modern websites that include design and development, hosting, analytics and contact forms." }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 36,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-box-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa fa-user" }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Website Redesigns" }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We can build your website and let you manage everything else, whether you require a brand new site or a redesign/refresh of your current one." }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 47,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 45,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-box-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa fa-comment" }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 52,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Content Management Systems" }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 55,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity." }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 56,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-box-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa fa-comment" }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 61,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 60,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Analytics" }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity." }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 65,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 63,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-box-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa fa-comment" }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 70,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 69,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Digital Marketing" }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 73,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity." }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 72,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-box-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa fa-comment" }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 79,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feature-content", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Search Engine Optimization" }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 82,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity." }, void 0, false, {
            fileName: "app/components/Services/Services.jsx",
            lineNumber: 83,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Services/Services.jsx",
          lineNumber: 81,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Services/Services.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Services/Services.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Services/Services.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = Services;
var Services_default = Services;
var _c;
$RefreshReg$(_c, "Services");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/services.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/services.jsx"
  );
  import.meta.hot.lastModified = "1705000963000";
}
var services = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Services_default, {}, void 0, false, {
    fileName: "app/routes/services.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/services.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var services_default = services;
export {
  services_default as default
};
//# sourceMappingURL=/build/routes/services-NDPRYAUS.js.map
