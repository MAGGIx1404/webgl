(window.webpackJsonp = window.webpackJsonp || []).push([
  [38, 19, 20, 21, 22, 23, 24, 25],
  {
    506: function (t, e, o) {
      "use strict";
      o(51);
      e.a = {};
    },
    507: function (t, e, o) {
      "use strict";
      e.a = {};
    },
    512: function (t, e, o) {
      t.exports = {};
    },
    513: function (t, e, o) {
      "use strict";
      var n = o(19),
        r = o(69),
        l = o.n(r),
        c = o(506);
      e.a = {
        mixins: [c.a],
        transition: {
          mode: "",
          leave: function (t, e) {
            n.a.delayedCall(2, e);
          },
        },
        data: function () {
          return {};
        },
        mounted: function () {
          var t = this;
          this.addEvents(),
            this.$nextTick(function () {
              t.onResize(l.a.width, l.a.height), t.animateIn();
            });
        },
        beforeDestroy: function () {},
        destroyed: function () {
          this.removeEvents();
        },
        methods: {
          addEvents: function () {
            l.a.addListener(this.onResize);
          },
          removeEvents: function () {
            l.a.removeListener(this.onResize);
          },
          animateIn: function () {
            n.a
              .timeline({
                paused: !0,
                onStart: function () {
                  console.log("onStart");
                },
              })
              .set(
                this.$el,
                {
                  autoAlpha: 1,
                  zIndex: 5,
                  height: "100vh",
                },
                0
              )
              .to(
                this.$el,
                {
                  autoAlpha: 1,
                  duration: 0.4,
                  ease: "none",
                },
                0.5
              )
              .set(this.$el, {
                clearProps: "zIndex",
                height: "",
              })
              .restart();
          },
          animateOut: function (t) {
            t.to;
            this.setMask(0, l.a.width, 0),
              n.a
                .timeline({
                  paused: !0,
                })
                .to(this.$el, {
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "none",
                })
                .restart();
          },
          onResize: function (t, e) {},
        },
      };
    },
    514: function (t, e, o) {
      "use strict";
      var n = o(199),
        r =
          (o(84),
          o(83),
          o(71),
          o(332),
          o(11),
          o(108),
          o(43),
          o(515),
          o(333),
          o(334),
          o(335),
          o(336),
          o(337),
          o(338),
          o(339),
          o(340),
          o(341),
          o(342),
          o(343),
          o(344),
          o(345),
          o(25),
          o(42),
          o(19)),
        l = o(69),
        c = o.n(l),
        h = o(516),
        d = o.n(h),
        f = o(109);
      e.a = {};
    },
    515: function (t, e, o) {
      "use strict";
      var n = o(7),
        r = o(330);
      n(
        {
          target: "String",
          proto: !0,
          forced: o(331)("fixed"),
        },
        {
          fixed: function () {
            return r(this, "tt", "", "");
          },
        }
      );
    },
    516: function (t, e, o) {
      t.exports = (function () {
        var t = 0;
        function e(e) {
          return "__private_" + t++ + "_" + e;
        }
        function i(t, e) {
          if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError(
              "attempted to use private field on non-instance"
            );
          return t;
        }
        function o() {}
        o.prototype = {
          on: function (t, e, i) {
            var o = this.e || (this.e = {});
            return (
              (o[t] || (o[t] = [])).push({
                fn: e,
                ctx: i,
              }),
              this
            );
          },
          once: function (t, e, i) {
            var o = this;
            function n() {
              o.off(t, n), e.apply(i, arguments);
            }
            return (n._ = e), this.on(t, n, i);
          },
          emit: function (t) {
            for (
              var e = [].slice.call(arguments, 1),
                i = ((this.e || (this.e = {}))[t] || []).slice(),
                o = 0,
                n = i.length;
              o < n;
              o++
            )
              i[o].fn.apply(i[o].ctx, e);
            return this;
          },
          off: function (t, e) {
            var i = this.e || (this.e = {}),
              o = i[t],
              n = [];
            if (o && e)
              for (var s = 0, r = o.length; s < r; s++)
                o[s].fn !== e && o[s].fn._ !== e && n.push(o[s]);
            return n.length ? (i[t] = n) : delete i[t], this;
          },
        };
        var n = o;
        n.TinyEmitter = o;
        var s,
          r = "virtualscroll",
          l = e("options"),
          a = e("el"),
          c = e("emitter"),
          u = e("event"),
          h = e("touchStart"),
          d = e("bodyTouchAction");
        return (function () {
          function t(t) {
            var e = this;
            Object.defineProperty(this, l, {
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, a, {
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, c, {
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, u, {
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, h, {
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, d, {
                writable: !0,
                value: void 0,
              }),
              (this._onWheel = function (t) {
                var o = i(e, l)[l],
                  n = i(e, u)[u];
                (n.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                  (n.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                  s.isFirefox &&
                    1 === t.deltaMode &&
                    ((n.deltaX *= o.firefoxMultiplier),
                    (n.deltaY *= o.firefoxMultiplier)),
                  (n.deltaX *= o.mouseMultiplier),
                  (n.deltaY *= o.mouseMultiplier),
                  e._notify(t);
              }),
              (this._onMouseWheel = function (t) {
                var o = i(e, u)[u];
                (o.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
                  (o.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
                  e._notify(t);
              }),
              (this._onTouchStart = function (t) {
                var o = t.targetTouches ? t.targetTouches[0] : t;
                (i(e, h)[h].x = o.pageX), (i(e, h)[h].y = o.pageY);
              }),
              (this._onTouchMove = function (t) {
                var o = i(e, l)[l];
                o.preventTouch &&
                  !t.target.classList.contains(o.unpreventTouchClass) &&
                  t.preventDefault();
                var n = i(e, u)[u],
                  s = t.targetTouches ? t.targetTouches[0] : t;
                (n.deltaX = (s.pageX - i(e, h)[h].x) * o.touchMultiplier),
                  (n.deltaY = (s.pageY - i(e, h)[h].y) * o.touchMultiplier),
                  (i(e, h)[h].x = s.pageX),
                  (i(e, h)[h].y = s.pageY),
                  e._notify(t);
              }),
              (this._onKeyDown = function (t) {
                var o = i(e, u)[u];
                o.deltaX = o.deltaY = 0;
                var n = window.innerHeight - 40;
                switch (t.keyCode) {
                  case 37:
                  case 38:
                    o.deltaY = i(e, l)[l].keyStep;
                    break;
                  case 39:
                  case 40:
                    o.deltaY = -i(e, l)[l].keyStep;
                    break;
                  case 32:
                    o.deltaY = n * (t.shiftKey ? 1 : -1);
                    break;
                  default:
                    return;
                }
                e._notify(t);
              }),
              (i(this, a)[a] = window),
              t && t.el && ((i(this, a)[a] = t.el), delete t.el),
              s ||
                (s = {
                  hasWheelEvent: "onwheel" in document,
                  hasMouseWheelEvent: "onmousewheel" in document,
                  hasTouch: "ontouchstart" in document,
                  hasTouchWin:
                    navigator.msMaxTouchPoints &&
                    navigator.msMaxTouchPoints > 1,
                  hasPointer: !!window.navigator.msPointerEnabled,
                  hasKeyDown: "onkeydown" in document,
                  isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
                }),
              (i(this, l)[l] = Object.assign(
                {
                  mouseMultiplier: 1,
                  touchMultiplier: 2,
                  firefoxMultiplier: 15,
                  keyStep: 120,
                  preventTouch: !1,
                  unpreventTouchClass: "vs-touchmove-allowed",
                  useKeyboard: !0,
                  useTouch: !0,
                },
                t
              )),
              (i(this, c)[c] = new n()),
              (i(this, u)[u] = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0,
              }),
              (i(this, h)[h] = {
                x: null,
                y: null,
              }),
              (i(this, d)[d] = null),
              void 0 !== i(this, l)[l].passive &&
                (this.listenerOptions = {
                  passive: i(this, l)[l].passive,
                });
          }
          var e = t.prototype;
          return (
            (e._notify = function (t) {
              var e = i(this, u)[u];
              (e.x += e.deltaX),
                (e.y += e.deltaY),
                i(this, c)[c].emit(r, {
                  x: e.x,
                  y: e.y,
                  deltaX: e.deltaX,
                  deltaY: e.deltaY,
                  originalEvent: t,
                });
            }),
            (e._bind = function () {
              s.hasWheelEvent &&
                i(this, a)[a].addEventListener(
                  "wheel",
                  this._onWheel,
                  this.listenerOptions
                ),
                s.hasMouseWheelEvent &&
                  i(this, a)[a].addEventListener(
                    "mousewheel",
                    this._onMouseWheel,
                    this.listenerOptions
                  ),
                s.hasTouch &&
                  i(this, l)[l].useTouch &&
                  (i(this, a)[a].addEventListener(
                    "touchstart",
                    this._onTouchStart,
                    this.listenerOptions
                  ),
                  i(this, a)[a].addEventListener(
                    "touchmove",
                    this._onTouchMove,
                    this.listenerOptions
                  )),
                s.hasPointer &&
                  s.hasTouchWin &&
                  ((i(this, d)[d] = document.body.style.msTouchAction),
                  (document.body.style.msTouchAction = "none"),
                  i(this, a)[a].addEventListener(
                    "MSPointerDown",
                    this._onTouchStart,
                    !0
                  ),
                  i(this, a)[a].addEventListener(
                    "MSPointerMove",
                    this._onTouchMove,
                    !0
                  )),
                s.hasKeyDown &&
                  i(this, l)[l].useKeyboard &&
                  document.addEventListener("keydown", this._onKeyDown);
            }),
            (e._unbind = function () {
              s.hasWheelEvent &&
                i(this, a)[a].removeEventListener("wheel", this._onWheel),
                s.hasMouseWheelEvent &&
                  i(this, a)[a].removeEventListener(
                    "mousewheel",
                    this._onMouseWheel
                  ),
                s.hasTouch &&
                  (i(this, a)[a].removeEventListener(
                    "touchstart",
                    this._onTouchStart
                  ),
                  i(this, a)[a].removeEventListener(
                    "touchmove",
                    this._onTouchMove
                  )),
                s.hasPointer &&
                  s.hasTouchWin &&
                  ((document.body.style.msTouchAction = i(this, d)[d]),
                  i(this, a)[a].removeEventListener(
                    "MSPointerDown",
                    this._onTouchStart,
                    !0
                  ),
                  i(this, a)[a].removeEventListener(
                    "MSPointerMove",
                    this._onTouchMove,
                    !0
                  )),
                s.hasKeyDown &&
                  i(this, l)[l].useKeyboard &&
                  document.removeEventListener("keydown", this._onKeyDown);
            }),
            (e.on = function (t, e) {
              i(this, c)[c].on(r, t, e);
              var o = i(this, c)[c].e;
              o && o[r] && 1 === o[r].length && this._bind();
            }),
            (e.off = function (t, e) {
              i(this, c)[c].off(r, t, e);
              var o = i(this, c)[c].e;
              (!o[r] || o[r].length <= 0) && this._unbind();
            }),
            (e.destroy = function () {
              i(this, c)[c].off(), this._unbind();
            }),
            t
          );
        })();
      })();
    },
    520: function (t, e, o) {
      "use strict";
      o(512);
    },
    528: function (t, e, o) {
      "use strict";
      e.a = {
        xs: 320,
        sm: 700,
        md: 1024,
        lg: 1440,
      };
    },
    550: function (t, e, o) {
      t.exports = {};
    },
    551: function (t, e, o) {
      t.exports = {};
    },
    552: function (t, e, o) {
      t.exports = {};
    },
    553: function (t, e, o) {
      t.exports = {};
    },
    554: function (t, e, o) {
      t.exports = {};
    },
    574: function (t, e, o) {
      "use strict";
      o(550);
    },
    575: function (t, e, o) {
      "use strict";
      o(551);
    },
    576: function (t, e, o) {
      "use strict";
      o(552);
    },
    577: function (t, e, o) {
      "use strict";
      o(553);
    },
    578: function (t, e, o) {
      "use strict";
      o(554);
    },
    586: function (t, e, o) {
      t.exports = {};
    },
    603: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(19),
        r = o(3),
        l = {
          props: {
            copy: {
              type: Object,
              default: function () {},
            },
          },
        },
        c = o(27),
        component = Object(c.a)(
          l,
          function () {
            return (0, this._self._c)("div", {
              staticClass: "webgl-events",
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    617: function (t, e, o) {
      "use strict";
      o(586);
    },
    639: function (t, e, o) {
      "use strict";
      o.r(e);
      o(28), o(34), o(39), o(40), o(31), o(11), o(25);
      var n = o(9),
        r = (o(97), o(19)),
        l = o(106),
        c = o(69),
        h = o.n(c),
        d = o(513),
        f = o(514),
        v = o(70);
      function m(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      var _ = {
          mixins: [d.a, f.a],
          data: function () {
            return {
              copy: v.a.home,
              autocreate: !1,
            };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var o = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? m(Object(o), !0).forEach(function (e) {
                    Object(n.a)(t, e, o[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(o)
                  )
                : m(Object(o)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(o, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(l.b)({
              ready: "app/ready",
            })
          ),
          mounted: function () {
            var t = this;
            this.$nuxt.context.from &&
              this.ready &&
              (this.onCreate(),
              setTimeout(function () {
                t._onResizeForce();
              }));
          },
          methods: {
            animateIn: function () {
              var t = this;
              r.a
                .timeline({
                  paused: !0,
                })
                .add(function () {
                  t.$root.$emit("webgl:restart");
                }, 0)
                .to(
                  this.$el,
                  {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: "none",
                  },
                  0.5
                )
                .add(function () {
                  t.$root.$emit("logo:animateOut");
                }, 0.5)
                .restart();
            },
          },
        },
        y = _,
        w = (o(617), o(27)),
        component = Object(w.a)(
          y,
          function () {
            var t = this,
              e = t._self._c;
            return e("HomeWebGL", {
              attrs: {
                copy: t.copy,
              },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        HomeWebGL: o(603).default,
      });
    },
  },
]);
