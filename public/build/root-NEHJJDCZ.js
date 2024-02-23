import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "/build/_shared/chunk-47QHGZ6T.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-OAUAXIS2.css";

// app/components/Navigtion.jsx
var import_react2 = __toESM(require_react(), 1);

// app/assets/hamburger.svg
var hamburger_default = "/build/_assets/hamburger-CBTORC4H.svg";

// node_modules/react-parallax-tilt/dist/modern/index.js
var import_react = __toESM(require_react(), 1);
function i(t2, e2, i2, n2) {
  return new (i2 || (i2 = Promise))(function(s2, r2) {
    function l2(t3) {
      try {
        o2(n2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        o2(n2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function o2(t3) {
      var e3;
      t3.done ? s2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function(t4) {
        t4(e3);
      })).then(l2, a2);
    }
    o2((n2 = n2.apply(t2, e2 || [])).next());
  });
}
var n = (t2, e2, i2, n2) => {
  t2.style.transition = `${e2} ${i2}ms ${n2}`;
};
var s = (t2, e2, i2) => Math.min(Math.max(t2, e2), i2);
var r = class {
  constructor(t2, e2) {
    this.glareAngle = 0, this.glareOpacity = 0, this.calculateGlareSize = (t3) => {
      const { width: e3, height: i3 } = t3, n3 = Math.sqrt(Math.pow(e3, 2) + Math.pow(i3, 2));
      return { width: n3, height: n3 };
    }, this.setSize = (t3) => {
      const e3 = this.calculateGlareSize(t3);
      this.glareEl.style.width = `${e3.width}px`, this.glareEl.style.height = `${e3.height}px`;
    }, this.update = (t3, e3, i3, n3) => {
      this.updateAngle(t3, e3.glareReverse), this.updateOpacity(t3, e3, i3, n3);
    }, this.updateAngle = (t3, e3) => {
      const { xPercentage: i3, yPercentage: n3 } = t3, s2 = 180 / Math.PI, r3 = i3 ? Math.atan2(n3, -i3) * s2 : 0;
      this.glareAngle = r3 - (e3 ? 180 : 0);
    }, this.updateOpacity = (t3, e3, i3, n3) => {
      const { xPercentage: r3, yPercentage: l2 } = t3, { glarePosition: a2, glareReverse: o2, glareMaxOpacity: h } = e3, p = i3 ? -1 : 1, c = n3 ? -1 : 1, g = o2 ? -1 : 1;
      let d = 0;
      switch (a2) {
        case "top":
          d = -r3 * p * g;
          break;
        case "right":
          d = l2 * c * g;
          break;
        case "bottom":
        case void 0:
          d = r3 * p * g;
          break;
        case "left":
          d = -l2 * c * g;
          break;
        case "all":
          d = Math.hypot(r3, l2);
      }
      const u = s(d, 0, 100);
      this.glareOpacity = u * h / 100;
    }, this.render = (t3) => {
      const { glareColor: e3 } = t3;
      this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`, this.glareEl.style.opacity = this.glareOpacity.toString(), this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${e3} 100%)`;
    }, this.glareWrapperEl = document.createElement("div"), this.glareEl = document.createElement("div"), this.glareWrapperEl.appendChild(this.glareEl), this.glareWrapperEl.className = "glare-wrapper", this.glareEl.className = "glare";
    const i2 = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", borderRadius: e2, WebkitMaskImage: "-webkit-radial-gradient(white, black)", pointerEvents: "none" }, n2 = this.calculateGlareSize(t2), r2 = { position: "absolute", top: "50%", left: "50%", transformOrigin: "0% 0%", pointerEvents: "none", width: `${n2.width}px`, height: `${n2.height}px` };
    Object.assign(this.glareWrapperEl.style, i2), Object.assign(this.glareEl.style, r2);
  }
};
var l = class {
  constructor() {
    this.glareAngle = 0, this.glareOpacity = 0, this.tiltAngleX = 0, this.tiltAngleY = 0, this.tiltAngleXPercentage = 0, this.tiltAngleYPercentage = 0, this.update = (t2, e2) => {
      this.updateTilt(t2, e2), this.updateTiltManualInput(t2, e2), this.updateTiltReverse(e2), this.updateTiltLimits(e2);
    }, this.updateTilt = (t2, e2) => {
      const { xPercentage: i2, yPercentage: n2 } = t2, { tiltMaxAngleX: s2, tiltMaxAngleY: r2 } = e2;
      this.tiltAngleX = i2 * s2 / 100, this.tiltAngleY = n2 * r2 / 100 * -1;
    }, this.updateTiltManualInput = (t2, e2) => {
      const { tiltAngleXManual: i2, tiltAngleYManual: n2, tiltMaxAngleX: s2, tiltMaxAngleY: r2 } = e2;
      (null !== i2 || null !== n2) && (this.tiltAngleX = null !== i2 ? i2 : 0, this.tiltAngleY = null !== n2 ? n2 : 0, t2.xPercentage = 100 * this.tiltAngleX / s2, t2.yPercentage = 100 * this.tiltAngleY / r2);
    }, this.updateTiltReverse = (t2) => {
      const e2 = t2.tiltReverse ? -1 : 1;
      this.tiltAngleX = e2 * this.tiltAngleX, this.tiltAngleY = e2 * this.tiltAngleY;
    }, this.updateTiltLimits = (t2) => {
      const { tiltAxis: e2 } = t2;
      this.tiltAngleX = s(this.tiltAngleX, -90, 90), this.tiltAngleY = s(this.tiltAngleY, -90, 90);
      e2 && (this.tiltAngleX = "x" === e2 ? this.tiltAngleX : 0, this.tiltAngleY = "y" === e2 ? this.tiltAngleY : 0);
    }, this.updateTiltAnglesPercentage = (t2) => {
      const { tiltMaxAngleX: e2, tiltMaxAngleY: i2 } = t2;
      this.tiltAngleXPercentage = this.tiltAngleX / e2 * 100, this.tiltAngleYPercentage = this.tiltAngleY / i2 * 100;
    }, this.render = (t2) => {
      t2.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
    };
  }
};
var a = Object.assign(Object.assign({ scale: 1, perspective: 1e3, flipVertically: false, flipHorizontally: false, reset: true, transitionEasing: "cubic-bezier(.03,.98,.52,.99)", transitionSpeed: 400, trackOnWindow: false, gyroscope: false }, { tiltEnable: true, tiltReverse: false, tiltAngleXInitial: 0, tiltAngleYInitial: 0, tiltMaxAngleX: 20, tiltMaxAngleY: 20, tiltAxis: void 0, tiltAngleXManual: null, tiltAngleYManual: null }), { glareEnable: false, glareMaxOpacity: 0.7, glareColor: "#ffffff", glarePosition: "bottom", glareReverse: false, glareBorderRadius: "0" });
var o = class extends import_react.PureComponent {
  constructor() {
    super(...arguments), this.wrapperEl = { node: null, size: { width: 0, height: 0, left: 0, top: 0 }, clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 }, updateAnimationId: null, scale: 1 }, this.tilt = null, this.glare = null, this.addDeviceOrientationEventListener = () => i(this, void 0, void 0, function* () {
      if (!window.DeviceOrientationEvent)
        return;
      const t2 = DeviceOrientationEvent.requestPermission;
      if ("function" == typeof t2) {
        "granted" === (yield t2()) && window.addEventListener("deviceorientation", this.onMove);
      } else
        window.addEventListener("deviceorientation", this.onMove);
    }), this.setSize = () => {
      this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size);
    }, this.mainLoop = (t2) => {
      null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.processInput(t2), this.update(t2.type), this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame);
    }, this.onEnter = (t2) => {
      const { onEnter: e2 } = this.props;
      this.setSize(), this.wrapperEl.node.style.willChange = "transform", this.setTransitions(), e2 && e2(t2.type);
    }, this.onMove = (t2) => {
      this.mainLoop(t2), this.emitOnMove(t2);
    }, this.onLeave = (t2) => {
      const { onLeave: e2 } = this.props;
      if (this.setTransitions(), e2 && e2(t2.type), this.props.reset) {
        const t3 = new CustomEvent("autoreset");
        this.onMove(t3);
      }
    }, this.processInput = (t2) => {
      const { scale: e2 } = this.props;
      switch (t2.type) {
        case "mousemove":
          this.wrapperEl.clientPosition.x = t2.pageX, this.wrapperEl.clientPosition.y = t2.pageY, this.wrapperEl.scale = e2;
          break;
        case "touchmove":
          this.wrapperEl.clientPosition.x = t2.touches[0].pageX, this.wrapperEl.clientPosition.y = t2.touches[0].pageY, this.wrapperEl.scale = e2;
          break;
        case "deviceorientation":
          this.processInputDeviceOrientation(t2), this.wrapperEl.scale = e2;
          break;
        case "autoreset":
          const { tiltAngleXInitial: i2, tiltAngleYInitial: n2, tiltMaxAngleX: r2, tiltMaxAngleY: l2 } = this.props, a2 = n2 / l2 * 100;
          this.wrapperEl.clientPosition.xPercentage = s(i2 / r2 * 100, -100, 100), this.wrapperEl.clientPosition.yPercentage = s(a2, -100, 100), this.wrapperEl.scale = 1;
      }
    }, this.processInputDeviceOrientation = (t2) => {
      if (!t2.gamma || !t2.beta || !this.props.gyroscope)
        return;
      const { tiltMaxAngleX: e2, tiltMaxAngleY: i2 } = this.props, n2 = t2.gamma;
      this.wrapperEl.clientPosition.xPercentage = t2.beta / e2 * 100, this.wrapperEl.clientPosition.yPercentage = n2 / i2 * 100, this.wrapperEl.clientPosition.xPercentage = s(this.wrapperEl.clientPosition.xPercentage, -100, 100), this.wrapperEl.clientPosition.yPercentage = s(this.wrapperEl.clientPosition.yPercentage, -100, 100);
    }, this.update = (t2) => {
      const { tiltEnable: e2, flipVertically: i2, flipHorizontally: n2 } = this.props;
      "autoreset" !== t2 && "deviceorientation" !== t2 && "propChange" !== t2 && this.updateClientInput(), e2 && this.tilt.update(this.wrapperEl.clientPosition, this.props), this.updateFlip(), this.tilt.updateTiltAnglesPercentage(this.props), this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i2, n2);
    }, this.updateClientInput = () => {
      const { trackOnWindow: t2 } = this.props;
      let e2, i2;
      if (t2) {
        const { x: t3, y: n2 } = this.wrapperEl.clientPosition;
        e2 = n2 / window.innerHeight * 200 - 100, i2 = t3 / window.innerWidth * 200 - 100;
      } else {
        const { size: { width: t3, height: n2, left: s2, top: r2 }, clientPosition: { x: l2, y: a2 } } = this.wrapperEl;
        e2 = (a2 - r2) / n2 * 200 - 100, i2 = (l2 - s2) / t3 * 200 - 100;
      }
      this.wrapperEl.clientPosition.xPercentage = s(e2, -100, 100), this.wrapperEl.clientPosition.yPercentage = s(i2, -100, 100);
    }, this.updateFlip = () => {
      const { flipVertically: t2, flipHorizontally: e2 } = this.props;
      t2 && (this.tilt.tiltAngleX += 180, this.tilt.tiltAngleY *= -1), e2 && (this.tilt.tiltAngleY += 180);
    }, this.renderFrame = () => {
      this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props);
    };
  }
  componentDidMount() {
    if (this.tilt = new l(), this.initGlare(), this.addEventListeners(), "undefined" == typeof CustomEvent)
      return;
    const t2 = new CustomEvent("autoreset");
    this.mainLoop(t2);
    const e2 = new CustomEvent("initial");
    this.emitOnMove(e2);
  }
  componentWillUnmount() {
    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners();
  }
  componentDidUpdate() {
    const t2 = new CustomEvent("propChange");
    this.mainLoop(t2), this.emitOnMove(t2);
  }
  addEventListeners() {
    const { trackOnWindow: t2, gyroscope: e2 } = this.props;
    window.addEventListener("resize", this.setSize), t2 && (window.addEventListener("mouseenter", this.onEnter), window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseout", this.onLeave), window.addEventListener("touchstart", this.onEnter), window.addEventListener("touchmove", this.onMove), window.addEventListener("touchend", this.onLeave)), e2 && this.addDeviceOrientationEventListener();
  }
  removeEventListeners() {
    const { trackOnWindow: t2, gyroscope: e2 } = this.props;
    window.removeEventListener("resize", this.setSize), t2 && (window.removeEventListener("mouseenter", this.onEnter), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseout", this.onLeave), window.removeEventListener("touchstart", this.onEnter), window.removeEventListener("touchmove", this.onMove), window.removeEventListener("touchend", this.onLeave)), e2 && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove);
  }
  setWrapperElSize() {
    const t2 = this.wrapperEl.node.getBoundingClientRect();
    this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth, this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight, this.wrapperEl.size.left = t2.left + window.scrollX, this.wrapperEl.size.top = t2.top + window.scrollY;
  }
  initGlare() {
    const { glareEnable: t2, glareBorderRadius: e2 } = this.props;
    t2 && (this.glare = new r(this.wrapperEl.size, e2), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
  }
  emitOnMove(t2) {
    const { onMove: e2 } = this.props;
    if (!e2)
      return;
    let i2 = 0, n2 = 0;
    this.glare && (i2 = this.glare.glareAngle, n2 = this.glare.glareOpacity), e2({ tiltAngleX: this.tilt.tiltAngleX, tiltAngleY: this.tilt.tiltAngleY, tiltAngleXPercentage: this.tilt.tiltAngleXPercentage, tiltAngleYPercentage: this.tilt.tiltAngleYPercentage, glareAngle: i2, glareOpacity: n2, eventType: t2.type });
  }
  resetWrapperElTransform() {
    this.wrapperEl.node.style.transform = "";
  }
  renderPerspective() {
    const { perspective: t2 } = this.props;
    this.wrapperEl.node.style.transform += `perspective(${t2}px) `;
  }
  renderScale() {
    const { scale: t2 } = this.wrapperEl;
    this.wrapperEl.node.style.transform += `scale3d(${t2},${t2},${t2})`;
  }
  setTransitions() {
    const { transitionSpeed: t2, transitionEasing: e2 } = this.props;
    n(this.wrapperEl.node, "all", t2, e2), this.glare && n(this.glare.glareEl, "opacity", t2, e2);
  }
  render() {
    const { children: e2, className: i2, style: n2 } = this.props;
    return import_react.default.createElement("div", { ref: (t2) => this.wrapperEl.node = t2, onMouseEnter: this.onEnter, onMouseMove: this.onMove, onMouseLeave: this.onLeave, onTouchStart: this.onEnter, onTouchMove: this.onMove, onTouchEnd: this.onLeave, className: i2, style: n2 }, e2);
  }
};
o.defaultProps = a;

// app/assets/logo_transparent_new_black_sm.svg
var logo_transparent_new_black_sm_default = "/build/_assets/logo_transparent_new_black_sm-A2ZIM7ZE.svg";

// app/components/Navigtion.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navigtion.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navigtion.jsx"
  );
  import.meta.hot.lastModified = "1707489242000";
}
var Navigtion = () => {
  _s();
  const [showNav, setShowNav] = (0, import_react2.useState)(false);
  const [showNavbar, setShowNavbar] = (0, import_react2.useState)(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const toggleNavItems = () => {
    setShowNav(!showNav);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "navbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(o, { className: "tilt", tiltMaxAngleX: 40, tiltMaxAngleY: 40, perspective: 1e3, transitionSpeed: 1e3, scale: 1.2, gyroscope: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: logo_transparent_new_black_sm_default, alt: "logo" }, void 0, false, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 40,
      columnNumber: 35
    }, this) }, void 0, false, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-icon", onClick: handleShowNavbar, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: hamburger_default, alt: "menu", className: "hamburger-img" }, void 0, false, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 44,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 43,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `nav-elements ${showNavbar && "active"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: "Home" }, void 0, false, {
          fileName: "app/components/Navigtion.jsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/Navigtion.jsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/about", children: "About Us" }, void 0, false, {
          fileName: "app/components/Navigtion.jsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/Navigtion.jsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/services", children: "Services" }, void 0, false, {
          fileName: "app/components/Navigtion.jsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/Navigtion.jsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/contact", children: "Contact" }, void 0, false, {
        fileName: "app/components/Navigtion.jsx",
        lineNumber: 51,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Navigtion.jsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 47,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Navigtion.jsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigtion.jsx",
    lineNumber: 38,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Navigtion.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s(Navigtion, "MfKagFLaTtD0fWyb5MDnaS7vXbs=");
_c = Navigtion;
var Navigtion_default = Navigtion;
var _c;
$RefreshReg$(_c, "Navigtion");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer/Footer.jsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer/Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer/Footer.jsx"
  );
}
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 29,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/services", children: "Our Services" }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 32,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/contact", children: "Contact Us" }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 35,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/privacy", children: "Privacy Policy" }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: "FAQ" }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer/Footer.jsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer/Footer.jsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer/Footer.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "row", children: "Dissentient Digital Copyright \xA9 2023 - All rights reserved" }, void 0, false, {
      fileName: "app/components/Footer/Footer.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer/Footer.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer/Footer.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c2 = Footer;
var Footer_default = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.jsx"
  );
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@700&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@700&family=Raleway:wght@400;700&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigtion_default, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
            error.status,
            " ",
            error.statusText
          ] }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.data }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer_default, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 34,
      columnNumber: 12
    }, this);
  } else if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@700&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@700&family=Raleway:wght@400;700&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap", rel: "stylesheet" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigtion_default, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "about-container ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("class", { className: "about-us", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Error" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "The stack trace is:" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("pre", { children: error.stack }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 99,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 95,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 94,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer_default, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 68,
      columnNumber: 12
    }, this);
  } else {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 107,
      columnNumber: 12
    }, this);
  }
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c3 = ErrorBoundary;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@400;700&display=swap", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigtion_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_c22 = App;
var _c3;
var _c22;
$RefreshReg$(_c3, "ErrorBoundary");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-NEHJJDCZ.js.map
