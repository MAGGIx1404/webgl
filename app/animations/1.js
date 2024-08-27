/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    109: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n(14),
        o =
          (n(44),
          n(83),
          n(11),
          n(29),
          n(108),
          function (e, p) {
            p = void 0 !== p ? Math.pow(10, p) : 1e3;
            return Math.round(e * p) / p;
          });
      function l() {
        return (
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform)
        );
      }
      function c() {
        var e = document.createElement("canvas");
        return (
          !(!e.getContext || !e.getContext("2d")) &&
          0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        );
      }
      var d = (function () {
        var e = Object(r.a)(
          regeneratorRuntime.mark(function e(t) {
            var n, r, o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch(t);
                    case 3:
                      return (n = e.sent), (e.next = 6), n.blob();
                    case 6:
                      return (
                        (r = e.sent),
                        (e.next = 9),
                        createImageBitmap(r, {
                          premultiplyAlpha: "none",
                        })
                      );
                    case 9:
                      return ((o = e.sent).src = t), e.abrupt("return", o);
                    case 14:
                      (e.prev = 14), (e.t0 = e.catch(0)), console.error(e.t0);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    },
    16: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return r.a;
      }),
        n.d(t, "a", function () {
          return E;
        }),
        n.d(t, "b", function () {
          return U;
        }),
        n.d(t, "f", function () {
          return N;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return W;
        }),
        n.d(t, "g", function () {
          return se;
        }),
        n.d(t, "h", function () {
          return le;
        });
      var r = n(19),
        o = n(316),
        l = new (n.n(o).a)(),
        c = n(0),
        d = n(1),
        h =
          (n(90),
          n(140),
          n(11),
          n(29),
          n(120),
          n(51),
          n(73),
          n(61),
          /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
        v = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        m = Math.PI / 180,
        f = (Math.PI, Math.sin),
        y = Math.cos,
        w = Math.abs,
        x = Math.sqrt,
        C =
          (Math.atan2,
          function (e) {
            return "number" == typeof e;
          }),
        _ = 1e5,
        O = function (e) {
          return Math.round(e * _) / _ || 0;
        };
      function k(e, t, n, r, o, l, c, d, h) {
        if (e !== d || t !== h) {
          (n = w(n)), (r = w(r));
          var v = (o % 360) * m,
            C = y(v),
            _ = f(v),
            O = Math.PI,
            k = 2 * O,
            A = (e - d) / 2,
            S = (t - h) / 2,
            P = C * A + _ * S,
            M = -_ * A + C * S,
            j = P * P,
            B = M * M,
            D = j / (n * n) + B / (r * r);
          D > 1 && ((n = x(D) * n), (r = x(D) * r));
          var T = n * n,
            R = r * r,
            F = (T * R - T * B - R * j) / (T * B + R * j);
          F < 0 && (F = 0);
          var E = (l === c ? -1 : 1) * x(F),
            L = E * ((n * M) / r),
            Y = E * ((-r * P) / n),
            z = (e + d) / 2 + (C * L - _ * Y),
            U = (t + h) / 2 + (_ * L + C * Y),
            N = (P - L) / n,
            V = (M - Y) / r,
            I = (-P - L) / n,
            $ = (-M - Y) / r,
            G = N * N + V * V,
            H = (V < 0 ? -1 : 1) * Math.acos(N / x(G)),
            K =
              (N * $ - V * I < 0 ? -1 : 1) *
              Math.acos((N * I + V * $) / x(G * (I * I + $ * $)));
          isNaN(K) && (K = O),
            !c && K > 0 ? (K -= k) : c && K < 0 && (K += k),
            (H %= k),
            (K %= k);
          var i,
            W = Math.ceil(w(K) / (k / 4)),
            Q = [],
            J = K / W,
            Z = ((4 / 3) * f(J / 2)) / (1 + y(J / 2)),
            X = C * n,
            ee = _ * n,
            te = _ * -r,
            ne = C * r;
          for (i = 0; i < W; i++)
            (P = y((o = H + i * J))),
              (M = f(o)),
              (N = y((o += J))),
              (V = f(o)),
              Q.push(P - Z * M, M + Z * P, N + Z * V, V - Z * N, N, V);
          for (i = 0; i < Q.length; i += 2)
            (P = Q[i]),
              (M = Q[i + 1]),
              (Q[i] = P * X + M * te + z),
              (Q[i + 1] = P * ee + M * ne + U);
          return (Q[i - 2] = d), (Q[i - 1] = h), Q;
        }
      }
      function A(e) {
        var i,
          t,
          n,
          r,
          o,
          l,
          c,
          d,
          m,
          f,
          y,
          x,
          C,
          _,
          O,
          a =
            (e + "")
              .replace(v, function (e) {
                var t = +e;
                return t < 1e-4 && t > -1e-4 ? 0 : t;
              })
              .match(h) || [],
          path = [],
          A = 0,
          S = 0,
          P = 2 / 3,
          M = a.length,
          j = 0,
          B = "ERROR: malformed path: " + e,
          line = function (e, t, n, r) {
            (f = (n - e) / 3),
              (y = (r - t) / 3),
              c.push(e + f, t + y, n - f, r - y, n, r);
          };
        if (!e || !isNaN(a[0]) || isNaN(a[1])) return console.log(B), path;
        for (i = 0; i < M; i++)
          if (
            ((C = o),
            isNaN(a[i]) ? (l = (o = a[i].toUpperCase()) !== a[i]) : i--,
            (n = +a[i + 1]),
            (r = +a[i + 2]),
            l && ((n += A), (r += S)),
            i || ((d = n), (m = r)),
            "M" === o)
          )
            c && (c.length < 8 ? (path.length -= 1) : (j += c.length)),
              (A = d = n),
              (S = m = r),
              (c = [n, r]),
              path.push(c),
              (i += 2),
              (o = "L");
          else if ("C" === o)
            c || (c = [0, 0]),
              l || (A = S = 0),
              c.push(
                n,
                r,
                A + 1 * a[i + 3],
                S + 1 * a[i + 4],
                (A += 1 * a[i + 5]),
                (S += 1 * a[i + 6])
              ),
              (i += 6);
          else if ("S" === o)
            (f = A),
              (y = S),
              ("C" !== C && "S" !== C) ||
                ((f += A - c[c.length - 4]), (y += S - c[c.length - 3])),
              l || (A = S = 0),
              c.push(f, y, n, r, (A += 1 * a[i + 3]), (S += 1 * a[i + 4])),
              (i += 4);
          else if ("Q" === o)
            (f = A + (n - A) * P),
              (y = S + (r - S) * P),
              l || (A = S = 0),
              (A += 1 * a[i + 3]),
              (S += 1 * a[i + 4]),
              c.push(f, y, A + (n - A) * P, S + (r - S) * P, A, S),
              (i += 4);
          else if ("T" === o)
            (f = A - c[c.length - 4]),
              (y = S - c[c.length - 3]),
              c.push(
                A + f,
                S + y,
                n + (A + 1.5 * f - n) * P,
                r + (S + 1.5 * y - r) * P,
                (A = n),
                (S = r)
              ),
              (i += 2);
          else if ("H" === o) line(A, S, (A = n), S), (i += 1);
          else if ("V" === o)
            line(A, S, A, (S = n + (l ? S - A : 0))), (i += 1);
          else if ("L" === o || "Z" === o)
            "Z" === o && ((n = d), (r = m), (c.closed = !0)),
              ("L" === o || w(A - n) > 0.5 || w(S - r) > 0.5) &&
                (line(A, S, n, r), "L" === o && (i += 2)),
              (A = n),
              (S = r);
          else if ("A" === o) {
            if (
              ((_ = a[i + 4]),
              (O = a[i + 5]),
              (f = a[i + 6]),
              (y = a[i + 7]),
              (t = 7),
              _.length > 1 &&
                (_.length < 3
                  ? ((y = f), (f = O), t--)
                  : ((y = O), (f = _.substr(2)), (t -= 2)),
                (O = _.charAt(1)),
                (_ = _.charAt(0))),
              (x = k(
                A,
                S,
                +a[i + 1],
                +a[i + 2],
                +a[i + 3],
                +_,
                +O,
                (l ? A : 0) + 1 * f,
                (l ? S : 0) + 1 * y
              )),
              (i += t),
              x)
            )
              for (t = 0; t < x.length; t++) c.push(x[t]);
            (A = c[c.length - 2]), (S = c[c.length - 1]);
          } else console.log(B);
        return (
          (i = c.length) < 6
            ? (path.pop(), (i = 0))
            : c[0] === c[i - 2] && c[1] === c[i - 1] && (c.closed = !0),
          (path.totalPoints = j + i),
          path
        );
      }
      function S(e) {
        C(e[0]) && (e = [e]);
        var t,
          s,
          i,
          n,
          r = "",
          o = e.length;
        for (s = 0; s < o; s++) {
          for (
            n = e[s],
              r += "M" + O(n[0]) + "," + O(n[1]) + " C",
              t = n.length,
              i = 2;
            i < t;
            i++
          )
            r +=
              O(n[i++]) +
              "," +
              O(n[i++]) +
              " " +
              O(n[i++]) +
              "," +
              O(n[i++]) +
              " " +
              O(n[i++]) +
              "," +
              O(n[i]) +
              " ";
          n.closed && (r += "z");
        }
        return r;
      }
      var P,
        M,
        j = function () {
          return (
            P ||
            ("undefined" != typeof window &&
              (P = window.gsap) &&
              P.registerPlugin &&
              P)
          );
        },
        B = function () {
          (P = j())
            ? (P.registerEase("_CE", E.create), (M = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        },
        D = function (e) {
          return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
        },
        T = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        R = /[cLlsSaAhHvVtTqQ]/g,
        F = function e(t, n, r, o, l, c, d, h, v, m, f) {
          var y,
            w = (t + r) / 2,
            x = (n + o) / 2,
            C = (r + l) / 2,
            _ = (o + c) / 2,
            O = (l + d) / 2,
            k = (c + h) / 2,
            A = (w + C) / 2,
            S = (x + _) / 2,
            P = (C + O) / 2,
            M = (_ + k) / 2,
            j = (A + P) / 2,
            B = (S + M) / 2,
            D = d - t,
            T = h - n,
            R = Math.abs((r - d) * T - (o - h) * D),
            F = Math.abs((l - d) * T - (c - h) * D);
          return (
            m ||
              ((m = [
                {
                  x: t,
                  y: n,
                },
                {
                  x: d,
                  y: h,
                },
              ]),
              (f = 1)),
            m.splice(f || m.length - 1, 0, {
              x: j,
              y: B,
            }),
            (R + F) * (R + F) > v * (D * D + T * T) &&
              ((y = m.length),
              e(t, n, w, x, A, S, j, B, v, m, f),
              e(j, B, P, M, O, k, d, h, v, m, f + 1 + (m.length - y))),
            m
          );
        },
        E = (function () {
          function e(t, data, n) {
            Object(c.a)(this, e),
              M || B(),
              (this.id = t),
              this.setData(data, n);
          }
          return (
            Object(d.a)(
              e,
              [
                {
                  key: "setData",
                  value: function (data, e) {
                    e = e || {};
                    var t,
                      n,
                      r,
                      i,
                      o,
                      l,
                      c,
                      d,
                      p,
                      h = (data = data || "0,0,1,1").match(T),
                      v = 1,
                      m = [],
                      f = [],
                      y = e.precision || 1,
                      w = y <= 1;
                    if (
                      ((this.data = data),
                      (R.test(data) ||
                        (~data.indexOf("M") && data.indexOf("C") < 0)) &&
                        (h = A(data)[0]),
                      4 === (t = h.length))
                    )
                      h.unshift(0, 0), h.push(1, 1), (t = 8);
                    else if ((t - 2) % 6) throw "Invalid CustomEase";
                    for (
                      (0 == +h[0] && 1 == +h[t - 2]) ||
                        (function (e, t, n) {
                          n ||
                            0 === n ||
                            (n = Math.max(+e[e.length - 1], +e[1]));
                          var i,
                            r = -1 * +e[0],
                            o = -n,
                            l = e.length,
                            c = 1 / (+e[l - 2] + r),
                            d =
                              -t ||
                              (Math.abs(+e[l - 1] - +e[1]) <
                              0.01 * (+e[l - 2] - +e[0])
                                ? (function (e) {
                                    var i,
                                      t = e.length,
                                      n = 1e20;
                                    for (i = 1; i < t; i += 6)
                                      +e[i] < n && (n = +e[i]);
                                    return n;
                                  })(e) + o
                                : +e[l - 1] + o);
                          for (d = d ? 1 / d : -c, i = 0; i < l; i += 2)
                            (e[i] = (+e[i] + r) * c),
                              (e[i + 1] = (+e[i + 1] + o) * d);
                        })(h, e.height, e.originY),
                        this.segment = h,
                        i = 2;
                      i < t;
                      i += 6
                    )
                      (n = {
                        x: +h[i - 2],
                        y: +h[i - 1],
                      }),
                        (r = {
                          x: +h[i + 4],
                          y: +h[i + 5],
                        }),
                        m.push(n, r),
                        F(
                          n.x,
                          n.y,
                          +h[i],
                          +h[i + 1],
                          +h[i + 2],
                          +h[i + 3],
                          r.x,
                          r.y,
                          1 / (2e5 * y),
                          m,
                          m.length - 1
                        );
                    for (t = m.length, i = 0; i < t; i++)
                      (c = m[i]),
                        (d = m[i - 1] || c),
                        (c.x > d.x ||
                          (d.y !== c.y && d.x === c.x) ||
                          c === d) &&
                        c.x <= 1
                          ? ((d.cx = c.x - d.x),
                            (d.cy = c.y - d.y),
                            (d.n = c),
                            (d.nx = c.x),
                            w &&
                              i > 1 &&
                              Math.abs(
                                d.cy / d.cx - m[i - 2].cy / m[i - 2].cx
                              ) > 2 &&
                              (w = 0),
                            d.cx < v &&
                              (d.cx
                                ? (v = d.cx)
                                : ((d.cx = 0.001),
                                  i === t - 1 &&
                                    ((d.x -= 0.001),
                                    (v = Math.min(v, 0.001)),
                                    (w = 0)))))
                          : (m.splice(i--, 1), t--);
                    if (
                      ((o = 1 / (t = (1 / v + 1) | 0)), (l = 0), (c = m[0]), w)
                    ) {
                      for (i = 0; i < t; i++)
                        (p = i * o),
                          c.nx < p && (c = m[++l]),
                          (n = c.y + ((p - c.x) / c.cx) * c.cy),
                          (f[i] = {
                            x: p,
                            cx: o,
                            y: n,
                            cy: 0,
                            nx: 9,
                          }),
                          i && (f[i - 1].cy = n - f[i - 1].y);
                      f[t - 1].cy = m[m.length - 1].y - n;
                    } else {
                      for (i = 0; i < t; i++)
                        c.nx < i * o && (c = m[++l]), (f[i] = c);
                      l < m.length - 1 && (f[i - 1] = m[m.length - 2]);
                    }
                    return (
                      (this.ease = function (p) {
                        var e = f[(p * t) | 0] || f[t - 1];
                        return (
                          e.nx < p && (e = e.n), e.y + ((p - e.x) / e.cx) * e.cy
                        );
                      }),
                      (this.ease.custom = this),
                      this.id && P && P.registerEase(this.id, this.ease),
                      this
                    );
                  },
                },
                {
                  key: "getSVGData",
                  value: function (t) {
                    return e.getSVGData(this, t);
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t, data, n) {
                    return new e(t, data, n).ease;
                  },
                },
                {
                  key: "register",
                  value: function (e) {
                    (P = e), B();
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    return P.parseEase(e);
                  },
                },
                {
                  key: "getSVGData",
                  value: function (t, n) {
                    var a,
                      r,
                      i,
                      o,
                      l,
                      c,
                      d,
                      h,
                      v,
                      m,
                      f = (n = n || {}).width || 100,
                      y = n.height || 100,
                      w = n.x || 0,
                      x = (n.y || 0) + y,
                      C = P.utils.toArray(n.path)[0];
                    if (
                      (n.invert && ((y = -y), (x = 0)),
                      "string" == typeof t && (t = P.parseEase(t)),
                      t.custom && (t = t.custom),
                      t instanceof e)
                    )
                      a = S(
                        (function (e, a, b, t, n, r, o) {
                          for (var l, c, i, d, h, v = e.length; --v > -1; )
                            for (c = (l = e[v]).length, i = 0; i < c; i += 2)
                              (d = l[i]),
                                (h = l[i + 1]),
                                (l[i] = d * a + h * t + r),
                                (l[i + 1] = d * b + h * n + o);
                          return (e._dirty = 1), e;
                        })([t.segment], f, 0, 0, -y, w, x)
                      );
                    else {
                      for (
                        a = [w, x],
                          o = 1 / (d = Math.max(5, 200 * (n.precision || 1))),
                          h = 5 / (d += 2),
                          v = D(w + o * f),
                          r = ((m = D(x + t(o) * -y)) - x) / (v - w),
                          i = 2;
                        i < d;
                        i++
                      )
                        (l = D(w + i * o * f)),
                          (c = D(x + t(i * o) * -y)),
                          (Math.abs((c - m) / (l - v) - r) > h ||
                            i === d - 1) &&
                            (a.push(v, m), (r = (c - m) / (l - v))),
                          (v = l),
                          (m = c);
                      a = "M" + a.join(",");
                    }
                    return C && C.setAttribute("d", a), a;
                  },
                },
              ]
            ),
            e
          );
        })();
      j() && P.registerPlugin(E),
        (E.version = "3.7.1"),
        r.a.registerPlugin(E),
        (r.a.ticker.baseFPS = 60),
        (r.a.ticker.maxDeltaRatio = r.a.ticker.baseFPS / 30),
        (r.a.ticker.ratio = function () {
          return Math.min(
            r.a.ticker.maxDeltaRatio,
            r.a.ticker.deltaRatio(r.a.ticker.baseFPS)
          );
        });
      var L = function (time, e, t) {
        l.emit("beforerender", time, e, t), l.emit("render", time, e, t);
      };
      l.on("render:pause", function () {
        r.a.ticker.remove(L);
      }),
        l.on("render:restart", function () {
          r.a.ticker.add(L);
        });
      n(37), n(228), n(97);
      var Y = n(317),
        z = new (n.n(Y).a)().getResult(),
        U = {
          device: "desktop",
          browser: "chrome",
          screen: {
            width: 0,
            height: 0,
          },
          isIOS:
            "ios" ===
            (z.os.name || "")
              .toLowerCase()
              .replace(/(mobile|phone)+/g, "")
              .trim(),
        };
      function N() {
        function e() {
          var e = window.innerWidth,
            t = window.innerHeight;
          (U.screen.width = e), (U.screen.height = t), l.emit("resize", e, t);
        }
        !(function () {
          switch ((z.device.type || "").toLowerCase()) {
            case "mobile":
            case "tablet":
              U.device = "mobile";
          }
        })(),
          (function () {
            var e = (z.browser.name || "")
              .toLowerCase()
              .replace(/(mobile|phone)+/g, "")
              .trim();
            switch (e) {
              case "chrome":
              case "firefox":
              case "safari":
              case "edge":
                U.browser = e;
            }
          })();
        var t,
          n,
          r,
          o =
            ((t = e),
            (n = U.isIOS ? 500 : 50),
            (r = null),
            function () {
              clearTimeout(r), (r = setTimeout(t, n));
            });
        U.isIOS || window.addEventListener("resize", o),
          window.addEventListener("orientationchange", o),
          e(),
          o();
      }
      n(143),
        n(290),
        n(144),
        n(145),
        n(146),
        n(147),
        n(148),
        n(149),
        n(150),
        n(151),
        n(152),
        n(153),
        n(154),
        n(155),
        n(156),
        n(157),
        n(158),
        n(159),
        n(160),
        n(161),
        n(162),
        n(163),
        n(164),
        n(165),
        n(166),
        n(167),
        n(25);
      var V = n(3),
        I = {
          SCREEN: 1,
          CUSTOM: 2,
        },
        $ = {
          DOT: 1,
          LINE: 2,
        },
        G = new V.t();
      function H(e) {
        return Math.exp(Math.log(e) * r.a.ticker.ratio());
      }
      function K(e, t, n) {
        var a = new V.w(e, e, {
            format: t,
            type: V.g,
            magFilter: n,
            minFilter: n,
            depthBuffer: !1,
          }),
          s = a.clone(),
          r = {
            read: a,
            write: s,
            swap: function () {
              var e = r.read;
              (r.read = r.write), (r.write = e);
            },
          };
        return r;
      }
      var W = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Object(c.a)(this, e);
            var n = se.renderer.extensions.has("OES_texture_float_linear");
            (this._linear = se.renderer.capabilities.isWebGL2
              ? n
              : se.renderer.extensions.has("OES_texture_half_float_linear")),
              (this._simRes = t.simRes || 128),
              (this._dyeRes = t.dyeRes || 512),
              (this._simTexelSize = 1 / this._simRes),
              (this._dyeTexelSize = 1 / this._dyeRes),
              (this._pressureIterations = t.pressureIterations || 3),
              (this._densityDissipation = t.densityDissipation || 0.97),
              (this._velocityDissipation = t.velocityDissipation || 0.98),
              (this._pressureDissipation = t.pressureDissipation || 0.8),
              (this._curlStrength = t.curlStrength || 10),
              (this._splatRadius = t.splatRadius || 0.12),
              (this._splatForce = t.splatForce || 6e3),
              (this._splatMode =
                $[(t.splatMode && t.splatMode.toUpperCase()) || "LINE"]),
              (this._borders = void 0 !== t.borders && t.borders),
              (this._mode = I[(t.mode && t.mode.toUpperCase()) || "SCREEN"]),
              (this._aspect = 1),
              (this._enabled = !1),
              (this.points = [
                {
                  position: new V.t(0.5, 0.5),
                  prevPosition: new V.t(0.5, 0.5),
                  lastUpdate: 0,
                  velocity: 0,
                },
              ]),
              this._createRTs(),
              this._createMaterials(),
              this._createScene(),
              (this.dyeUniform = {
                value: null,
              }),
              (this.velUniform = {
                value: null,
              }),
              this.enable();
          }
          return (
            Object(d.a)(e, [
              {
                key: "_createRTs",
                value: function () {
                  (this._density = K(
                    this._dyeRes,
                    V.m,
                    this._linear ? V.h : V.j
                  )),
                    (this._velocity = K(
                      this._simRes,
                      V.m,
                      this._linear ? V.h : V.j
                    )),
                    (this._pressure = K(this._simRes, V.m, V.j)),
                    (this._divergence = new V.w(this._simRes, this._simRes, {
                      format: V.m,
                      type: V.g,
                      magFilter: V.j,
                      minFilter: V.j,
                      depthBuffer: !1,
                    })),
                    (this._curl = new V.w(this._simRes, this._simRes, {
                      format: V.m,
                      type: V.g,
                      magFilter: V.j,
                      minFilter: V.j,
                      depthBuffer: !1,
                    }));
                },
              },
              {
                key: "_createMaterials",
                value: function () {
                  var e = se.renderer.capabilities,
                    t = e.getMaxPrecision("highp"),
                    i = e.getMaxPrecision("mediump"),
                    n = "\n            precision ".concat(
                      t,
                      " float;\n            \nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 texelSize;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nvoid main () {\n    vUv = uv;\n    vL = vUv - vec2(texelSize.x, 0.0);\n    vR = vUv + vec2(texelSize.x, 0.0);\n    vT = vUv + vec2(0.0, texelSize.y);\n    vB = vUv - vec2(0.0, texelSize.y);\n    gl_Position = vec4(position, 1.0);\n}\n\n        "
                    ),
                    r = "\n            precision ".concat(
                      t,
                      " float;\n            \nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main () {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n\n        "
                    ),
                    a = "\n            precision ".concat(
                      t,
                      " float;\n            \nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 texelSize;\n\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nvoid main () {\n    vL = uv - vec2(texelSize.x, 0.0);\n    vR = uv + vec2(texelSize.x, 0.0);\n    vT = uv + vec2(0.0, texelSize.y);\n    vB = uv - vec2(0.0, texelSize.y);\n    gl_Position = vec4(position, 1.0);\n}\n\n        "
                    );
                  (this._materialClear = new V.n({
                    uniforms: {
                      texelSize: {
                        value: new V.t(),
                      },
                      uTexture: {
                        value: null,
                      },
                      value: {
                        value: this._pressureDissipation,
                      },
                    },
                    vertexShader: r,
                    fragmentShader: "\n                precision "
                      .concat(i, " float;\n                precision ")
                      .concat(
                        i,
                        " sampler2D;\n                \nuniform sampler2D uTexture;\nuniform float value;\n\nvarying highp vec2 vUv;\n\nvoid main () {\n    gl_FragColor.rgb = value * texture2D(uTexture, vUv).rgb;\n    gl_FragColor.a = 1.0;\n}\n\n            "
                      ),
                    depthTest: !1,
                    depthWrite: !1,
                  })),
                    (this._materialSplat = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        uTarget: {
                          value: null,
                        },
                        aspectRatio: {
                          value: 1,
                        },
                        color: {
                          value: new V.u(),
                        },
                        point: {
                          value: new V.t(),
                        },
                        prevPoint: {
                          value: new V.t(),
                        },
                        radius: {
                          value: 1,
                        },
                        isDye: {
                          value: !1,
                        },
                      },
                      vertexShader: r,
                      fragmentShader: "\n                precision "
                        .concat(t, " float;\n                precision ")
                        .concat(
                          t,
                          " sampler2D;\n                \nuniform sampler2D uTarget;\nuniform float aspectRatio;\nuniform vec3 color;\nuniform vec2 point;\nuniform vec2 prevPoint;\nuniform float radius;\nuniform bool isDye;\n\nvarying vec2 vUv;\n\nfloat line(vec2 uv, vec2 point1, vec2 point2) {\n    vec2 pa = uv - point1, ba = point2 - point1;\n    pa.x *= aspectRatio;\n    ba.x *= aspectRatio;\n    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\n    return length(pa - ba * h);\n}\n\nfloat cubicIn(float t) {\n  return t * t * t;\n}\n\nvoid main () {\n    vec3 splat =  cubicIn(clamp(1.0 - line(vUv, prevPoint.xy, point.xy) / radius, 0.0, 1.0)) * color;\n\n    vec3 base = texture2D(uTarget, vUv).xyz;\n    vec3 result = base + splat;\n    if (isDye) result = clamp(result, vec3(0.0), vec3(1.0));\n\n    gl_FragColor = vec4(result, 1.0);\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    })),
                    (this._materialCurl = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        uVelocity: {
                          value: null,
                        },
                      },
                      vertexShader: a,
                      fragmentShader: "\n                precision "
                        .concat(i, " float;\n                precision ")
                        .concat(
                          i,
                          " sampler2D;\n                \nuniform sampler2D uVelocity;\n\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n    float L = texture2D(uVelocity, vL).y;\n    float R = texture2D(uVelocity, vR).y;\n    float T = texture2D(uVelocity, vT).x;\n    float B = texture2D(uVelocity, vB).x;\n    float vorticity = R - L - T + B;\n    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    })),
                    (this._materialVorticity = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        uVelocity: {
                          value: null,
                        },
                        uCurl: {
                          value: null,
                        },
                        curl: {
                          value: this._curlStrength,
                        },
                        dt: {
                          value: 1 / 60,
                        },
                      },
                      vertexShader: n,
                      fragmentShader: "\n                precision "
                        .concat(t, " float;\n                precision ")
                        .concat(
                          t,
                          " sampler2D;\n                \nuniform sampler2D uVelocity;\nuniform sampler2D uCurl;\nuniform float curl;\nuniform float dt;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nvoid main () {\n    float L = texture2D(uCurl, vL).x;\n    float R = texture2D(uCurl, vR).x;\n    float T = texture2D(uCurl, vT).x;\n    float B = texture2D(uCurl, vB).x;\n    float C = texture2D(uCurl, vUv).x;\n    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n    force /= length(force) + 0.0001;\n    force *= curl * C;\n    force.y *= -1.0;\n    vec2 vel = texture2D(uVelocity, vUv).xy;\n    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    })),
                    (this._materialDivergence = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        uVelocity: {
                          value: null,
                        },
                      },
                      vertexShader: n,
                      fragmentShader: "\n                precision "
                        .concat(i, " float;\n                precision ")
                        .concat(
                          i,
                          " sampler2D;\n                \nuniform sampler2D uVelocity;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n    float L = texture2D(uVelocity, vL).x;\n    float R = texture2D(uVelocity, vR).x;\n    float T = texture2D(uVelocity, vT).y;\n    float B = texture2D(uVelocity, vB).y;\n    vec2 C = texture2D(uVelocity, vUv).xy;\n\n    float div = 0.5 * (R - L + T - B);\n    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    })),
                    (this._materialPressure = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        uPressure: {
                          value: null,
                        },
                        uDivergence: {
                          value: null,
                        },
                      },
                      vertexShader: n,
                      fragmentShader: "\n                precision "
                        .concat(i, " float;\n                precision ")
                        .concat(
                          i,
                          " sampler2D;\n                \nuniform sampler2D uPressure;\nuniform sampler2D uDivergence;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n    float L = texture2D(uPressure, vL).x;\n    float R = texture2D(uPressure, vR).x;\n    float T = texture2D(uPressure, vT).x;\n    float B = texture2D(uPressure, vB).x;\n    float C = texture2D(uPressure, vUv).x;\n    float divergence = texture2D(uDivergence, vUv).x;\n    float pressure = (L + R + B + T - divergence) * 0.25;\n    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    })),
                    (this._materialGradientSubstract = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        uPressure: {
                          value: null,
                        },
                        uVelocity: {
                          value: null,
                        },
                      },
                      vertexShader: n,
                      fragmentShader: "\n                precision "
                        .concat(i, " float;\n                precision ")
                        .concat(
                          i,
                          " sampler2D;\n                \nuniform sampler2D uPressure;\nuniform sampler2D uVelocity;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n    float L = texture2D(uPressure, vL).x;\n    float R = texture2D(uPressure, vR).x;\n    float T = texture2D(uPressure, vT).x;\n    float B = texture2D(uPressure, vB).x;\n    vec2 velocity = texture2D(uVelocity, vUv).xy;\n    velocity.xy -= vec2(R - L, T - B);\n    gl_FragColor = vec4(velocity, 0.0, 1.0);\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    })),
                    (this._materialAdvection = new V.n({
                      uniforms: {
                        texelSize: {
                          value: new V.t(),
                        },
                        dyeTexelSize: {
                          value: new V.t().setScalar(1 / this._dyeRes),
                        },
                        uVelocity: {
                          value: null,
                        },
                        uSource: {
                          value: null,
                        },
                        dt: {
                          value: 1 / 60,
                        },
                        dissipation: {
                          value: 1,
                        },
                      },
                      vertexShader: r,
                      fragmentShader: "\n                precision "
                        .concat(t, " float;\n                precision ")
                        .concat(t, " sampler2D;\n                ")
                        .concat(
                          this._linear ? "" : "#define MANUAL_FILTERING",
                          "\n                \nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform vec2 dyeTexelSize;\nuniform float dt;\nuniform float dissipation;\n\nvarying vec2 vUv;\n\nvec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n    vec2 st = uv / tsize - 0.5;\n    vec2 iuv = floor(st);\n    vec2 fuv = fract(st);\n    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n}\n\nvoid main () {\n    vec4 result;\n\n    #ifdef MANUAL_FILTERING\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        result = bilerp(uSource, coord, dyeTexelSize);\n    #else\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        result = texture2D(uSource, coord);\n    #endif\n\n    gl_FragColor.rgb = result.rgb * dissipation;\n    gl_FragColor.a = 1.0;\n}\n\n            "
                        ),
                      depthTest: !1,
                      depthWrite: !1,
                    }));
                },
              },
              {
                key: "_createScene",
                value: function () {
                  (this._scene = new V.p()),
                    (this._camera = new V.k(-1, 1, 1, -1, 0, 1));
                  var e = new V.b();
                  e.setAttribute(
                    "position",
                    new V.a(
                      new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                      3
                    )
                  ),
                    e.setAttribute(
                      "uv",
                      new V.a(new Float32Array([0, 0, 2, 0, 0, 2]), 2)
                    ),
                    (this._mesh = new V.i(e, this._materialClear)),
                    (this._mesh.frustumCulled = !1),
                    this._scene.add(this._mesh);
                },
              },
              {
                key: "_update",
                value: function (e, t) {
                  var n = this,
                    i = t / 1e3,
                    r = se.renderer.autoClear;
                  (se.renderer.autoClear = !1),
                    (this._aspect =
                      le.globalUniforms.resolution.value.x /
                      le.globalUniforms.resolution.value.y),
                    this.points.forEach(function (t) {
                      if (
                        (G.copy(t.position).sub(t.prevPosition),
                        0 !== Math.abs(G.x) || 0 !== Math.abs(G.y))
                      ) {
                        var r = e - t.lastUpdate;
                        if (n._splatMode === $.LINE && r < 0.014) return;
                        t.velocity += 2 * G.length();
                        var o = r > 0.1;
                        (n._mesh.material = n._materialSplat),
                          (n._materialSplat.uniforms.isDye.value = !1),
                          (n._materialSplat.uniforms.uTarget.value =
                            n._velocity.read.texture),
                          (n._materialSplat.uniforms.aspectRatio.value =
                            n._aspect),
                          n._materialSplat.uniforms.point.value.copy(
                            t.position
                          ),
                          n._materialSplat.uniforms.prevPoint.value.copy(
                            o ? t.position : t.prevPosition
                          ),
                          n._materialSplat.uniforms.color.value
                            .set(G.x, G.y, 0)
                            .multiplyScalar(n._splatForce)
                            .multiplyScalar(o ? 0 : 1),
                          (n._materialSplat.uniforms.radius.value =
                            n._splatRadius * t.velocity),
                          se.renderer.setRenderTarget(n._velocity.write),
                          se.renderer.render(n._scene, n._camera),
                          n._velocity.swap(),
                          (n._materialSplat.uniforms.isDye.value = !0),
                          (n._materialSplat.uniforms.uTarget.value =
                            n._density.read.texture),
                          n._materialSplat.uniforms.color.value.setScalar(1),
                          se.renderer.setRenderTarget(n._density.write),
                          se.renderer.render(n._scene, n._camera),
                          n._density.swap(),
                          (t.lastUpdate = e),
                          t.prevPosition.copy(t.position);
                      }
                      (t.velocity *= H(0.9)),
                        (t.velocity = Math.min(1, t.velocity));
                    }),
                    (this._mesh.material = this._materialCurl),
                    this._materialCurl.uniforms.texelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    (this._materialCurl.uniforms.uVelocity.value =
                      this._velocity.read.texture),
                    se.renderer.setRenderTarget(this._curl),
                    se.renderer.render(this._scene, this._camera),
                    (this._mesh.material = this._materialVorticity),
                    this._materialVorticity.uniforms.texelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    (this._materialVorticity.uniforms.uVelocity.value =
                      this._velocity.read.texture),
                    (this._materialVorticity.uniforms.uCurl.value =
                      this._curl.texture),
                    (this._materialVorticity.uniforms.curl.value =
                      this._curlStrength),
                    (this._materialVorticity.uniforms.dt.value = i),
                    se.renderer.setRenderTarget(this._velocity.write),
                    se.renderer.render(this._scene, this._camera),
                    this._velocity.swap(),
                    (this._mesh.material = this._materialDivergence),
                    this._materialDivergence.uniforms.texelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    (this._materialDivergence.uniforms.uVelocity.value =
                      this._velocity.read.texture),
                    se.renderer.setRenderTarget(this._divergence),
                    se.renderer.render(this._scene, this._camera),
                    (this._mesh.material = this._materialClear),
                    (this._materialClear.uniforms.uTexture.value =
                      this._pressure.read.texture),
                    (this._materialClear.uniforms.value.value = H(
                      this._pressureDissipation
                    )),
                    se.renderer.setRenderTarget(this._pressure.write),
                    se.renderer.render(this._scene, this._camera),
                    this._pressure.swap(),
                    (this._mesh.material = this._materialPressure),
                    this._materialPressure.uniforms.texelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    (this._materialPressure.uniforms.uDivergence.value =
                      this._divergence.texture);
                  for (var o = 0; o < this._pressureIterations; o++)
                    (this._materialPressure.uniforms.uPressure.value =
                      this._pressure.read.texture),
                      se.renderer.setRenderTarget(this._pressure.write),
                      se.renderer.render(this._scene, this._camera),
                      this._pressure.swap();
                  (this._mesh.material = this._materialGradientSubstract),
                    this._materialGradientSubstract.uniforms.texelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    (this._materialGradientSubstract.uniforms.uPressure.value =
                      this._pressure.read.texture),
                    (this._materialGradientSubstract.uniforms.uVelocity.value =
                      this._velocity.read.texture),
                    se.renderer.setRenderTarget(this._velocity.write),
                    se.renderer.render(this._scene, this._camera),
                    this._velocity.swap(),
                    (this._mesh.material = this._materialAdvection),
                    this._materialAdvection.uniforms.texelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    this._materialAdvection.uniforms.dyeTexelSize.value.setScalar(
                      this._simTexelSize
                    ),
                    (this._materialAdvection.uniforms.uVelocity.value =
                      this._velocity.read.texture),
                    (this._materialAdvection.uniforms.uSource.value =
                      this._velocity.read.texture),
                    (this._materialAdvection.uniforms.dt.value = i),
                    (this._materialAdvection.uniforms.dissipation.value = H(
                      this._velocityDissipation
                    )),
                    se.renderer.setRenderTarget(this._velocity.write),
                    se.renderer.render(this._scene, this._camera),
                    this._velocity.swap(),
                    this._materialAdvection.uniforms.dyeTexelSize.value.setScalar(
                      this._dyeTexelSize
                    ),
                    (this._materialAdvection.uniforms.uVelocity.value =
                      this._velocity.read.texture),
                    (this._materialAdvection.uniforms.uSource.value =
                      this._density.read.texture),
                    (this._materialAdvection.uniforms.dissipation.value = H(
                      this._densityDissipation
                    )),
                    se.renderer.setRenderTarget(this._density.write),
                    se.renderer.render(this._scene, this._camera),
                    this._density.swap(),
                    (se.renderer.autoClear = r),
                    (this.dyeUniform.value = this._density.read.texture),
                    (this.velUniform.value = this._velocity.read.texture);
                },
              },
              {
                key: "_moveFinger",
                value: function (e) {
                  this.points[0].position.copy(e);
                },
              },
              {
                key: "enable",
                value: function () {
                  this._enabled ||
                    ((this._enabled = !0),
                    l.on("beforerender", this._update, this),
                    l.on("touch", this._moveFinger, this));
                },
              },
            ]),
            e
          );
        })(),
        Q = n(122),
        J = n(195),
        Z = (n(87), n(38)),
        X = n(4),
        ee = n(2),
        te = n(88),
        ne = n(318);
      function re(e, t, n) {
        return (
          (t = Object(X.a)(t)),
          Object(Z.a)(
            e,
            ie()
              ? Reflect.construct(t, n || [], Object(X.a)(e).constructor)
              : t.apply(e, n)
          )
        );
      }
      function ie() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (ie = function () {
          return !!e;
        })();
      }
      var ae = (function (e) {
          function t() {
            var e;
            Object(c.a)(this, t), (e = re(this, t, [ne.a]));
            var n = function () {
              e.material.uniforms.resolution.value
                .setScalar(1)
                .divide(le.globalUniforms.resolution.value);
            };
            return l.on("resize", n), n(), e;
          }
          return Object(ee.a)(t, e), Object(d.a)(t);
        })(te.a),
        oe = {
          container: null,
          renderer: null,
          renderPass: null,
          init: function () {
            var e = (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              ).container,
              t = "#uniforms" === window.location.hash;
            this.container = e;
            var n = new V.x({
              alpha: !1,
              antialias: !1,
              preserveDrawingBuffer: t,
            });
            (this.renderer = n),
              n.setClearColor(new V.d("#000000")),
              n.setClearAlpha(1);
            var r = new V.l(45, U.screen.width / U.screen.height, 0.1, 1e3);
            (this.camera = r),
              (n.capabilities.writeFloatTexture =
                this.checkWriteFloatTexture()),
              this.container.prepend(n.domElement),
              (n.debug.checkShaderErrors = !1),
              (n.capabilities.floatGPGPU = "safari" !== U.browser);
            var rt = new V.w(2, 2, {
              minFilter: V.h,
              magFilter: V.h,
              format: V.m,
            });
            rt.texture.name = "EffectComposer.rt1";
            var o = new Q.a(n, rt);
            o.renderToScreen = !0;
            var c = new V.p(),
              d = new J.a(c, r, void 0, new V.d("#000000"), 1);
            o.addPass(d), (this.renderPass = d);
            var h = new ae();
            (h.renderToScreen = !0), o.addPass(h);
            var v = function (e, t) {
              var l = le.globalUniforms.resolution.value,
                c = le.globalUniforms.resolution2.value;
              n.setSize(c.x, c.y, !1),
                o.setSize(l.x, l.y),
                (n.domElement.style.width = "".concat(e, "px")),
                (n.domElement.style.height = "".concat(t, "px")),
                (r.aspect = l.x / l.y),
                r.updateProjectionMatrix();
            };
            v(),
              l.on("resize", v),
              l.on("render", function (time, e) {
                o.render(e);
              });
            var m = document.querySelector("#__nuxt"),
              f = new V.t(),
              track = function (e) {
                var t,
                  n =
                    (null === (t = e.touches) || void 0 === t
                      ? void 0
                      : t.length) > 0
                      ? e.touches[0]
                      : e,
                  r = n.clientX,
                  o = n.clientY;
                f.set(r, o),
                  (f.x /= U.screen.width),
                  (f.y /= U.screen.height),
                  (f.y = 1 - f.y),
                  l.emit("touch", f);
              };
            m.addEventListener("pointerdown", track),
              m.addEventListener("pointermove", track),
              m.addEventListener("touchstart", track),
              m.addEventListener("touchmove", track),
              t &&
                m.addEventListener("click", function () {
                  var e,
                    t = "image/octet-stream";
                  try {
                    var r = "image/jpeg";
                    (e = n.domElement.toDataURL(r)),
                      y(
                        e.replace(r, t),
                        "".concat(Math.round(1e3 * Math.random()), ".jpg")
                      );
                  } catch (e) {
                    console.log(e);
                  }
                });
            var y = function (e, t) {
              var link = document.createElement("a");
              "string" == typeof link.download &&
                (document.body.appendChild(link),
                (link.download = t),
                (link.href = e),
                link.click(),
                document.body.removeChild(link));
            };
          },
          checkWriteFloatTexture: function () {
            if (
              !this.renderer.capabilities.isWebGL2 &&
              !this.renderer.extensions.get("OES_texture_float")
            )
              return !1;
            var rt = new V.w(1, 1, {
                minFilter: V.j,
                magFilter: V.j,
                format: V.m,
                type: V.f,
              }),
              e = new V.p(),
              t = new V.b();
            t.setAttribute(
              "position",
              new V.a(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
            ),
              t.setAttribute(
                "uv",
                new V.a(new Float32Array([0, 0, 2, 0, 0, 2]), 2)
              ),
              e.add(
                new V.i(
                  t,
                  new V.q({
                    vertexShader:
                      " void main() { gl_Position = vec4(position, 1.0); } ",
                    fragmentShader:
                      " void main() { gl_FragColor.rgb = vec3(0.0, 1.0 / 10.0, 1.0 / 20.0); gl_FragColor.a = 1.0; } ",
                  })
                )
              ),
              this.renderer.setRenderTarget(rt),
              this.renderer.render(e, this.camera);
            var n = new Float32Array(4);
            return (
              this.renderer.readRenderTargetPixels(rt, 0, 0, 1, 1, n),
              !(0 !== n[0] || n[1] < 0.1 || n[2] < 0.05 || n[3] < 1)
            );
          },
        },
        se = oe,
        ue = {
          globalUniforms: {
            resolution: {
              value: new V.t(2, 2),
              global: !0,
            },
            resolution2: {
              value: new V.t(2, 2),
              global: !0,
            },
            time: {
              value: 0,
              global: !0,
            },
          },
          physicsUniforms: {
            dtRatio: {
              value: 1,
              global: !0,
            },
          },
        };
      l.on("resize", function (e, t) {
        var n = "safari" === U.browser && U.screen.width > 1100;
        ue.globalUniforms.resolution.value
          .set(e, t)
          .multiplyScalar(Math.min(window.devicePixelRatio, n ? 1 : 1.5) || 1)
          .floor(),
          ue.globalUniforms.resolution2.value
            .set(e, t)
            .multiplyScalar(
              Math.max(window.devicePixelRatio, n ? 1 : 1.25) || 1
            )
            .floor();
      }),
        l.on("render", function (time) {
          (ue.globalUniforms.time.value = time),
            (ue.physicsUniforms.dtRatio.value = r.a.ticker.ratio());
        });
      var le = ue;
    },
    194: function (e, t, n) {
      "use strict";
      var r = n(14),
        o = (n(44), n(37), n(62)),
        l = n.n(o);
      function c() {
        return (c = Object(r.a)(
          regeneratorRuntime.mark(function e() {
            var video;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!l.a.isIos) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (video = document.createElement("video")).setAttribute(
                          "playsinline",
                          "playsinline"
                        ),
                        video.setAttribute("aria-hidden", !0),
                        video.setAttribute("src", ""),
                        (e.prev = 5),
                        (e.next = 8),
                        video.play()
                      );
                    case 8:
                      e.next = 14;
                      break;
                    case 10:
                      if (
                        ((e.prev = 10),
                        (e.t0 = e.catch(5)),
                        "NotAllowedError" !== e.t0.name)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return", !0);
                    case 14:
                      return (e.prev = 14), (video = null), e.finish(14);
                    case 17:
                      return e.abrupt("return", !1);
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 10, 14, 17]]
            );
          })
        )).apply(this, arguments);
      }
      t.a = function () {
        return c.apply(this, arguments);
      };
    },
    239: function (e, t, n) {
      "use strict";
      t.a = function (e) {
        var t = e.query,
          n = e.enablePreview;
        t.preview && n();
      };
    },
    240: function (e, t, n) {
      "use strict";
      var r = n(14),
        o = (n(44), n(90), n(19)),
        l = n(323),
        c = n.n(l),
        d = n(324),
        h = n.n(d),
        v = n(242),
        m = n.n(v),
        f = n(321),
        y = n.n(f),
        w = (n(11), n(16)),
        x = n(0),
        C = n(1),
        _ =
          (n(143),
          n(144),
          n(145),
          n(146),
          n(147),
          n(148),
          n(149),
          n(150),
          n(151),
          n(152),
          n(153),
          n(154),
          n(155),
          n(156),
          n(157),
          n(158),
          n(159),
          n(160),
          n(161),
          n(162),
          n(163),
          n(164),
          n(165),
          n(166),
          n(167),
          n(3)),
        O = n(195),
        k = n(122),
        A = (n(87), n(38)),
        S = n(4),
        P = n(2),
        M = (n(28), n(34), n(39), n(40), n(31), n(25), n(9)),
        j = n(322),
        B = n(88);
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                Object(M.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function R(e, t, n) {
        return (
          (t = Object(S.a)(t)),
          Object(A.a)(
            e,
            F()
              ? Reflect.construct(t, n || [], Object(S.a)(e).constructor)
              : t.apply(e, n)
          )
        );
      }
      function F() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (F = function () {
          return !!e;
        })();
      }
      var E = (function (e) {
        function t() {
          return (
            Object(x.a)(this, t),
            R(this, t, [
              new _.q({
                uniforms: T(
                  T(
                    {
                      tDiffuse: {
                        value: null,
                      },
                      tVel: w.g.fluidSim.velUniform,
                    },
                    w.h.globalUniforms
                  ),
                  w.h.physicsUniforms
                ),
                vertexShader:
                  "\n                //- edit\n\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n                    gl_Position = vec4(position, 1.0);\n                }\n            ",
                fragmentShader:
                  "\n                //- edit\n                uniform float dtRatio;\n                uniform sampler2D tDiffuse;\n                uniform sampler2D tVel;\n\n                varying vec2 vUv;\n\n                void main() {\n                    vec2 vel = texture2D(tVel, vUv).rg;\n                    vec4 prev = texture2D(tDiffuse, vUv);\n\n                    vec2 prevUV = prev.rg;\n                    vec2 prevVel = prev.ba;\n\n                    vec2 disp = vUv - prevUV;\n                    vec2 dispNor = clamp(normalize(disp), vec2(-1.0), vec2(1.0));\n                    float len = length(disp);\n\n                    prevVel += dispNor * (len * 0.03) * dtRatio;\n                    prevVel += vel * -0.00002 * dtRatio;\n\n                    prevVel *= exp2(log2(0.925) * dtRatio);\n\n                    prevUV += prevVel * dtRatio;\n\n                    gl_FragColor = vec4(prevUV.x, prevUV.y, prevVel.x, prevVel.y);\n                }\n             ",
                depthWrite: !0,
                depthTest: !1,
              }),
            ])
          );
        }
        return Object(P.a)(t, e), Object(C.a)(t);
      })(B.a);
      function L(e, t, n) {
        return (
          (t = Object(S.a)(t)),
          Object(A.a)(
            e,
            Y()
              ? Reflect.construct(t, n || [], Object(S.a)(e).constructor)
              : t.apply(e, n)
          )
        );
      }
      function Y() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (Y = function () {
          return !!e;
        })();
      }
      var z = (function (e) {
        function t() {
          return (
            Object(x.a)(this, t),
            L(this, t, [
              new _.q({
                uniforms: {},
                vertexShader:
                  "\n\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n                    gl_Position = vec4(position, 1.0);\n                }\n            ",
                fragmentShader:
                  "\n\n                varying vec2 vUv;\n\n                void main() {\n                    gl_FragColor = vec4(vUv, 0.0, 0.0);\n                }\n             ",
                depthWrite: !0,
                depthTest: !1,
              }),
            ])
          );
        }
        return Object(P.a)(t, e), Object(C.a)(t);
      })(B.a);
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                Object(M.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var V = (function () {
        function e(t) {
          Object(x.a)(this, e),
            (this.scene = t),
            this.createElastic(),
            this.init();
        }
        return (
          Object(C.a)(e, [
            {
              key: "createElastic",
              value: function () {
                var e = this,
                  rt = new _.w(2, 2, {
                    minFilter: _.j,
                    magFilter: _.j,
                    format: _.m,
                    type: w.g.renderer.capabilities.writeFloatTexture
                      ? _.f
                      : _.g,
                  }),
                  t = new k.a(w.g.renderer, rt);
                (this.elasticComposer = t),
                  (t.renderToScreen = !1),
                  (this.elasticPass = new E()),
                  (this.uvPass = new z());
                var n = w.h.globalUniforms.resolution.value,
                  r = function () {
                    t.setSize(n.x, n.y),
                      t.removePass(e.elasticPass),
                      t.addPass(e.uvPass),
                      t.render(),
                      t.render(),
                      t.removePass(e.uvPass),
                      t.addPass(e.elasticPass);
                  };
                w.c.on("resize", r), r();
              },
            },
            {
              key: "init",
              value: function () {
                var e = this,
                  t = new _.r().load("/images/bg4.png");
                (t.wrapS = _.o), (t.wrapT = _.o);
                var n = new _.r().load("/images/logo.png"),
                  r = [0, 1, 2, 3];
                this.material = new _.q({
                  extensions: {
                    derivatives: !0,
                  },
                  uniforms: N(
                    {
                      tBg: {
                        value: t,
                      },
                      tLogo: {
                        value: n,
                      },
                      uColorBg: {
                        value: new _.d("#000000"),
                      },
                      uColorLogo: {
                        value: new _.d("#FF0000"),
                      },
                      uNoise: {
                        value: r[Math.floor(Math.random() * r.length)],
                      },
                      uNoise1Opts: {
                        value: new _.t(1.25, 0.25),
                      },
                      uNoise2Opts: {
                        value: new _.t(2, 0.8),
                      },
                      uNoise3Opts: {
                        value: new _.u(5, 2, 3.8),
                      },
                      uNoise4Opts: {
                        value: new _.v(-3.8, -2, -3.9, -2.5),
                      },
                      uGlobalShape: {
                        value: 0,
                      },
                      uGlobalOpen: {
                        value: 0,
                      },
                      uNoiseMultiplier: {
                        value: 0,
                      },
                      uDye: w.g.fluidSim.dyeUniform,
                      uVel: w.g.fluidSim.velUniform,
                      uUV: {
                        value: this.elasticComposer.readBuffer.texture,
                      },
                      uLogoAnimation: {
                        value: 0,
                      },
                    },
                    w.h.globalUniforms
                  ),
                  vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = vec4(position, 1.0);
                    }
                  `,
                  fragmentShader: `
                    uniform vec3 uColorBg;
uniform vec2 resolution;
uniform float uLogoAnimation;
uniform vec3 uColorLogo;
uniform float uNoise;
uniform sampler2D tBg;
uniform sampler2D uDye;
uniform sampler2D uVel;
uniform sampler2D tLogo;
uniform sampler2D uUV;
uniform vec2 uNoise1Opts;
uniform vec2 uNoise2Opts;
uniform vec3 uNoise3Opts;
uniform vec4 uNoise4Opts;
uniform float uGlobalShape;
uniform float uGlobalOpen;
uniform float uNoiseMultiplier;
uniform float time;

// varying
varying vec2 vUv;

// functions
vec2 rotateUV(vec2 uv, float rotation, vec2 mid) {
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec2 scaleUV(vec2 uv, float scale, vec2 mid) {
    uv -= mid;
    uv *= 1.0 / scale;
    uv += mid;
    return uv;
}

float cubicInOut(float t) {
    return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float quadraticInOut(float t) {
    float p = 2.0 * t * t;
    return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

float quadraticOut(float t) {
    return -t * (t - 2.0);
}

float ft(float x, float a1, float a2, float b1, float b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

float fc(float x, float a1, float a2, float b1, float b2) {
    return clamp(ft(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));
}

float stp(float a, float b, float t) {
    return clamp((t - a) / (b - a), 0.0, 1.0);
}

float fl(float a, float b, float c, float f, float e) {
    float p = mix(b - f, c, e);
    return stp(p + f, p, a);
}

vec3 hash(vec3 p3) {
    p3 = fract(p3 * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz+33.33);
    return fract((p3.xxy + p3.yxx)*p3.zyx) - 0.5;
}

vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx+33.33);
    return fract((p3.xx+p3.yz)*p3.zy);
}

float noise(in vec3 p) {
    const float K1 = 0.333333333;
    const float K2 = 0.166666667;

    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
    vec3 e = step(vec3(0.0), d0 - d0.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);
    vec3 d1 = d0 - (i1 - 1.0 * K2);
    vec3 d2 = d0 - (i2 - 2.0 * K2);
    vec3 d3 = d0 - (1.0 - 3.0 * K2);
    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
    vec4 n = h * h * h * h * vec4(dot(d0, hash(i)), dot(d1, hash(i + i1)), dot(d2, hash(i + i2)), dot(d3, hash(i + 1.0)));
    return dot(n, vec4(52.0));
}

float cellNoise(in vec2 uv, in float aspect) {
    uv -= 0.5;
    uv.x *= aspect;
    uv += 0.5;
    uv *= uNoise2Opts.x;

    vec2 i_st = floor(uv);
    vec2 f_st = fract(uv);

    float m_dist = 1.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = hash22(i_st + neighbor);
            point = 0.5 + 0.5 * sin(time * uNoise2Opts.y + 6.2831 * point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);
            m_dist = min(m_dist, dist);
        }
    }

    return m_dist;
}

float linearNoise(in vec2 uv, in float aspect) {
    uv -= 0.5;
    uv.x *= aspect;
    uv += 0.5;
    uv = rotateUV(uv, uNoise3Opts.z, vec2(0.5));
    uv *= uNoise3Opts.x;
    return (sin(uv.x + time * uNoise3Opts.y) + 1.0) * 0.5;
}

float linearNoise2(in vec2 uv, in float aspect) {
    uv = rotateUV(uv, uNoise4Opts.z, vec2(0.5));
    vec2 multX = rotateUV(vec2(aspect + uNoise4Opts.w * aspect, 1.0), uNoise4Opts.z, vec2(0.0));
    uv -= 0.5;
    uv *= multX;
    float len = (sin(length(uv) * uNoise4Opts.x + time * uNoise4Opts.y) + 1.0) * 0.5;
    return len;
}

void main() {
    float ww = fwidth(vUv.y);
    float aspect = resolution.x / resolution.y;

    vec2 bgUV = texture2D(uUV, vUv).rg;

    vec2 vel = texture2D(uVel, bgUV).rg * -0.001 * uNoiseMultiplier;
    float dye = fc(quadraticOut(texture2D(uDye, bgUV).r), 0.01, 1.0, 0.0, 0.6);

    float n1 = 0.0;

    if (uNoise < 1.0) {
        n1 = quadraticInOut(fc(noise(vec3(bgUV * uNoise1Opts.x + 24.143, time * uNoise1Opts.y + 65.343)), -0.2, 0.7, 0.0, 0.6));
    } else if (uNoise < 2.0) {
        n1 = fc(cellNoise(vUv, aspect), 0.4, 0.8, 0.0, 0.6);
    } else if (uNoise < 3.0) {
        n1 = quadraticInOut(fc(linearNoise(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
    } else {
        n1 = quadraticInOut(fc(linearNoise2(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
    }

    n1 *= uNoiseMultiplier;

    // logo
    vec2 uvLogo = bgUV;

    // normalize uv
    uvLogo -= 0.5;
    uvLogo.x *= aspect;
    uvLogo += 0.5;
    uvLogo = scaleUV(uvLogo, min(resolution.x, resolution.y) * 0.00025 + ww * 300.0, vec2(0.5));

    // merge the logo and the background
    vec2 dLogo = 1.0 - texture2D(tLogo, uvLogo).rg;
    float borderLogo = ww + 0.0175;

    // add the noise to the logo to "disolve" it
    float logoDF = dLogo.r + n1;

    float shapeInside = fl(logoDF, 0.15, 1.0, borderLogo, fc(uLogoAnimation, 0.0, 1.0, 0.01, 0.85));
    vec3 bg = mix(uColorBg, uColorLogo, shapeInside);

    // bg
    vec2 uv = bgUV;
    uv -= 0.5;
    uv.x *= aspect;
    uv += 0.5;
    uv = scaleUV(uv, resolution.y * 0.00003 +  ww * 20.0, vec2(0.5));

    // get sdf
    float dist = 1.0 - texture2D(tBg, uv).r;

    // get mix
    float diff = 0.075;
    diff += n1;
    diff += uGlobalOpen;
    diff += dye * uNoiseMultiplier;
    diff *= uGlobalShape;

    float border = ww + 0.0175;
    float shape = fl(dist, 0.0, 1.0, border, fc(diff, 0.0, 1.0, 0.0, 1.0));

    vec3 colorFront = mix(uColorLogo, uColorBg, shapeInside * dye * 3.0);

    bg = mix(bg, colorFront, shape);

    gl_FragColor.rgb = bg;
    gl_FragColor.a = 1.0;
}
                  `,
                  transparent: !1,
                });
                var o = new _.b();
                o.setAttribute(
                  "position",
                  new _.a(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
                ),
                  o.setAttribute(
                    "uv",
                    new _.a(new Float32Array([0, 0, 2, 0, 0, 2]), 2)
                  ),
                  (this.mesh = new _.i(o, this.material)),
                  (this.mesh.frustumCulled = !1),
                  (this.mesh.onBeforeRender = function (t) {
                    e.elasticComposer.render(),
                      (e.material.uniforms.uUV.value =
                        e.elasticComposer.readBuffer.texture);
                  }),
                  this.scene.add(this.mesh);
              },
            },
          ]),
          e
        );
      })();
      function I(e, t, n) {
        return (
          (t = Object(S.a)(t)),
          Object(A.a)(
            e,
            $()
              ? Reflect.construct(t, n || [], Object(S.a)(e).constructor)
              : t.apply(e, n)
          )
        );
      }
      function $() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return ($ = function () {
          return !!e;
        })();
      }
      var G = (function (e) {
        function t() {
          var e;
          Object(x.a)(this, t), (e = I(this, t));
          var n = new _.l(45, w.b.screen.width / w.b.screen.height, 0.1, 1e3);
          n.position.set(0, 0, 5);
          var r = function (e, t) {
            var r = w.h.globalUniforms.resolution.value;
            (n.aspect = r.x / r.y), n.updateProjectionMatrix();
          };
          return w.c.on("resize", r), r(), e.createBg1(), e;
        }
        return (
          Object(P.a)(t, e),
          Object(C.a)(t, [
            {
              key: "createBg1",
              value: function () {
                this.bg1 = new V(this);
              },
            },
          ]),
          t
        );
      })(_.p);
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                Object(M.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function W(e, t, n) {
        return (
          (t = Object(S.a)(t)),
          Object(A.a)(
            e,
            Q()
              ? Reflect.construct(t, n || [], Object(S.a)(e).constructor)
              : t.apply(e, n)
          )
        );
      }
      function Q() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (Q = function () {
          return !!e;
        })();
      }
      var J,
        Z = (function (e) {
          function t() {
            return (
              Object(x.a)(this, t),
              W(this, t, [
                {
                  uniforms: K(
                    {
                      tScene: {
                        value: null,
                      },
                    },
                    w.h.globalUniforms
                  ),
                  vertexShader:
                    "\n\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n                    gl_Position = vec4(position, 1.0);\n                }\n            ",
                  fragmentShader:
                    "\n\n                uniform sampler2D tScene;\n                varying vec2 vUv;\n\n                void main() {\n                    vec2 uv = vUv;\n                    vec3 scene = texture2D(tScene, uv).rgb;\n\n                    gl_FragColor = vec4(scene, 1.0);\n                }\n            ",
                  depthTest: !1,
                  depthWrite: !1,
                },
              ])
            );
          }
          return Object(P.a)(t, e), Object(C.a)(t);
        })(_.q),
        X = (function () {
          function e() {
            Object(x.a)(this, e),
              this.initGlobalPlane(),
              this.initScenes(),
              (this.mainUniforms = this.bgScene.bg1.material.uniforms);
          }
          return (
            Object(C.a)(e, [
              {
                key: "initGlobalPlane",
                value: function () {
                  var e = this,
                    t = new _.b();
                  t.setAttribute(
                    "position",
                    new _.a(
                      new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                      3
                    )
                  ),
                    t.setAttribute(
                      "uv",
                      new _.a(new Float32Array([0, 0, 2, 0, 0, 2]), 2)
                    ),
                    (this.material = new Z()),
                    (this.mainMesh = new _.i(t, this.material)),
                    (this.mainMesh.frustumCulled = !1),
                    w.g.renderPass.scene.add(this.mainMesh),
                    (this.mainMesh.onBeforeRender = function () {
                      e.render();
                    });
                },
              },
              {
                key: "initScenes",
                value: function () {
                  this.bgScene = new G();
                  var e = new k.a(w.g.renderer);
                  (this.bgComposer = e), (e.renderToScreen = !1);
                  var t = new _.l(
                      45,
                      w.b.screen.width / w.b.screen.height,
                      0.1,
                      1e3
                    ),
                    n = w.h.globalUniforms.resolution.value;
                  (e.__resize = function () {
                    e.setSize(n.x, n.y),
                      (t.aspect = n.x / n.y),
                      t.updateProjectionMatrix();
                  }),
                    w.c.on("resize", e.__resize),
                    e.__resize(),
                    (this.bgPass = new O.a(this.bgScene, t)),
                    this.bgComposer.addPass(this.bgPass);
                },
              },
              {
                key: "render",
                value: function () {
                  this.bgComposer.render(),
                    (this.material.uniforms.tScene.value =
                      this.bgComposer.readBuffer.texture);
                },
              },
            ]),
            e
          );
        })(),
        ee = {
          container: null,
          ready: new Promise(function (e) {
            J = e;
          }),
          init: function (e) {
            Object(w.f)(),
              w.c.once("webgl_start", this.start, this),
              w.c.emit("webgl_ready"),
              w.c.emit("webgl_start", {
                container: e,
              });
          },
          start: function (e) {
            e && e.container
              ? (this.container = e.container)
              : ((this.container = document.createElement("div")),
                (this.container.id = "app"),
                document.body.prepend(this.container)),
              w.a.create("io", "M0,0 C0.6,0 0,3 1,1"), // for directions
              w.g.init({
                container: this.container,
              }),
              (w.g.fluidSim = new w.d({
                borders: !1,
                simRes: 128,
                dyeRes: 128,
                curlStrength: 0.001,
                splatRadius: "desktop" === w.b.device ? 0.25 : 0.175,
                splatForce: 500,
                pressureIterations: 2,
                densityDissipation: 0.93,
                velocityDissipation: 0.97,
                pressureDissipation: 0.8,
              })),
              (this.main = new X());
            //   J();
          },
        },
        te = new ((function () {
          function e() {
            Object(x.a)(this, e),
              (this.PERF = 0),
              (this.PERFS = {
                PERF_BAD: 0,
                PERF_LOW: 1,
                PERF_GOOD: 2,
                PERF_HIGH: 3,
              });
          }
          return (
            Object(C.a)(e, [
              {
                key: "getPerfs",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    for (
                      var n = e.PERFS.PERF_BAD,
                        r = (window.performance || Date).now(),
                        i = 0;
                      i < 2e4;
                      i++
                    )
                      Math.pow(Math.sin(Math.random()), 2);
                    var o,
                      l,
                      c,
                      d = (window.performance || Date).now() - r;
                    (o = window.navigator.userAgent),
                      (l = o.indexOf("MSIE ")),
                      (c = o.indexOf("Trident/")),
                      (n =
                        l > 0 || c > 0
                          ? e.PERFS.PERF_BAD
                          : d < 7
                          ? e.PERFS.PERF_HIGH
                          : d < 14
                          ? e.PERFS.PERF_GOOD
                          : d < 22
                          ? e.PERFS.PERF_LOW
                          : e.PERFS.PERF_BAD),
                      (e.PERF = n),
                      t();
                  });
                },
              },
            ]),
            e
          );
        })())(),
        ne = n(109);
      t.a = function (e, t) {
        return re.apply(this, arguments);
      };
      function re() {
        return (re = Object(r.a)(
          regeneratorRuntime.mark(function e(t, n) {
            var r, l;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.app,
                      "#uniforms" === window.location.hash &&
                        ((l = new y.a()),
                        Object.assign(l.dom.style, {
                          zIndex: 99999,
                        }),
                        document.body.appendChild(l.dom),
                        n("stats", l)),
                      o.a.registerPlugin(c.a),
                      o.a.registerPlugin(h.a),
                      o.a.registerPlugin(m.a),
                      (e.next = 10),
                      te.getPerfs()
                    );
                  case 10:
                    n("dpr", window.devicePixelRatio || 1),
                      n("document", document.documentElement),
                      n("webp", Object(ne.a)()),
                      n("performances", te),
                      n("webgl", ee);
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    241: function (e, t, n) {
      "use strict";
    },
    284: function (e, t, n) {
      e.exports = {};
    },
    285: function (e, t, n) {
      e.exports = {};
    },
    286: function (e, t, n) {
      e.exports = {};
    },
    302: function (e, t, n) {
      e.exports = {};
    },
    303: function (e, t, n) {
      e.exports = {};
    },
    312: function (e, t, n) {
      "use strict";
    },
    327: function (e, t, n) {
      "use strict";
      n(51), n(11), n(42);
      var r = n(14),
        o = (n(43), n(44), n(69)),
        l = n.n(o),
        c = n(62),
        d = n.n(c),
        h = n(194),
        v = n(109),
        m = n(70),
        f = {
          data: function () {
            return {
              copy: m.a,
            };
          },
          beforeMount: function () {
            this.isLowPower(),
              (this.$root.smooth =
                d.a.isDesktop &&
                !Object(v.c)() &&
                (d.a.isChrome || d.a.isSafari) &&
                this.$performances.PERF >= this.$performances.PERFS.PERF_GOOD),
              this.$root.smooth &&
                document.documentElement.classList.add("is-smooth"),
              d.a.addClasses(document.documentElement),
              this.loadFonts(),
              this.setViewport("--vhf"),
              this.setViewport("--vh"),
              this.setTheme(),
              window.scrollTo(0, 0);
          },
          mounted: function () {
            this.onRoute(),
              this.onResize(l.a.width, l.a.height),
              l.a.addListener(this.onResize);
          },
          methods: {
            isLowPower: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Object(h.a)();
                        case 2:
                          (e.$nuxt.isLowPower = t.sent),
                            e.$nuxt.isLowPower &&
                              document.documentElement.classList.add(
                                "--low-power"
                              );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            loadFonts: function () {
              var e = this;
              if (document.fonts) {
                var t = new FontFace(
                    "AK Monument Grotesk",
                    "url(/fonts/ABCMonumentGrotesk-Regular.woff2)",
                    {
                      style: "normal",
                      weight: "200",
                    }
                  ),
                  n = new FontFace(
                    "AK Monument Grotesk",
                    "url(/fonts/ABCMonumentGrotesk-Medium.woff2)",
                    {
                      style: "normal",
                      weight: "400",
                    }
                  ),
                  r = new FontFace(
                    "AK Monument Grotesk",
                    "url(/fonts/ABCMonumentGrotesk-Bold.woff2)",
                    {
                      style: "normal",
                      weight: "800",
                    }
                  );
                Promise.all([t.load(), n.load(), r.load()]).then(function () {
                  document.fonts.add(t),
                    document.fonts.add(n),
                    document.fonts.add(r),
                    e.$root.$emit("fonts:loaded");
                });
              } else this.$root.$emit("fonts:loaded");
            },
            setTheme: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {
                        color: "black",
                        background: "white",
                      },
                t = document.documentElement;
              t.style.setProperty("--color", e.color),
                t.style.setProperty("--background", e.background);
            },
            setViewport: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "--vh",
                t = document.documentElement,
                n = 0.01 * l.a.height;
              t.style.setProperty(e, "".concat(n, "px"));
            },
            onRoute: function () {
              var e = this;
              this.$router.beforeEach(function (t, n, r) {
                var o = e.$refs.page.$children[0];
                t.path !== n.path
                  ? (Object.assign(o.$el.style, {
                      position: "fixed",
                      top: "".concat(-1 * window.scrollY, "px"),
                      left: 0,
                      width: "100%",
                    }),
                    o.animateOut({
                      to: t,
                    }),
                    r())
                  : r();
              });
            },
            onResize: function (e, t) {
              this.setViewport("--vh");
            },
          },
        },
        y = f,
        w = n(27),
        component = Object(w.a)(
          y,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              [
                t("Header"),
                e._v(" "),
                t("ClientOnly", [t("WebGL")], 1),
                e._v(" "),
                t("Nuxt", {
                  ref: "page",
                }),
                e._v(" "),
                t(
                  "div",
                  {
                    staticStyle: {
                      display: "none",
                    },
                  },
                  e._l(e.copy.home.projects.entries, function (n, r) {
                    return t(
                      "div",
                      {
                        key: r,
                      },
                      e._l(n.assets, function (o, l) {
                        return t("div", {
                          key: "project-".concat(r, "-").concat(l),
                          staticStyle: {
                            display: "none",
                          },
                          attrs: {
                            "data-src": e.$img(o, {
                              quality: n.imageQuality,
                            }),
                            "data-webp": e.$img(o, {
                              format: "webp",
                              quality: n.imageQuality,
                            }),
                          },
                        });
                      }),
                      0
                    );
                  }),
                  0
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
      installComponents(component, {
        Header: n(312).default,
        WebGL: n(502).default,
      });
    },
    328: function (e, t, n) {
      "use strict";
      var r = n(14),
        o = (n(11), n(43), n(42), n(44), n(69)),
        l = n.n(o),
        c = n(62),
        d = n.n(c),
        h = n(194),
        v = n(109),
        m = n(70),
        f = {
          data: function () {
            return {
              copy: m.a,
            };
          },
          beforeMount: function () {
            this.isLowPower(),
              (this.$root.smooth =
                d.a.isDesktop &&
                !Object(v.c)() &&
                (d.a.isChrome || d.a.isSafari) &&
                this.$performances.PERF >= this.$performances.PERFS.PERF_GOOD),
              this.$root.smooth &&
                document.documentElement.classList.add("is-smooth"),
              d.a.addClasses(document.documentElement),
              this.loadFonts(),
              this.setViewport("--vhf"),
              this.setViewport("--vh"),
              this.setTheme(),
              window.scrollTo(0, 0);
          },
          mounted: function () {
            this.onRoute(),
              this.onResize(l.a.width, l.a.height),
              l.a.addListener(this.onResize);
          },
          methods: {
            isLowPower: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Object(h.a)();
                        case 2:
                          (e.$nuxt.isLowPower = t.sent),
                            e.$nuxt.isLowPower &&
                              document.documentElement.classList.add(
                                "--low-power"
                              );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            loadFonts: function () {
              var e = this;
              if (document.fonts) {
                var t = new FontFace(
                    "AK Monument Grotesk",
                    "url(/fonts/ABCMonumentGrotesk-Regular.woff2)",
                    {
                      style: "normal",
                      weight: "200",
                    }
                  ),
                  n = new FontFace(
                    "AK Monument Grotesk",
                    "url(/fonts/ABCMonumentGrotesk-Medium.woff2)",
                    {
                      style: "normal",
                      weight: "400",
                    }
                  ),
                  r = new FontFace(
                    "AK Monument Grotesk",
                    "url(/fonts/ABCMonumentGrotesk-Bold.woff2)",
                    {
                      style: "normal",
                      weight: "800",
                    }
                  );
                Promise.all([t.load(), n.load(), r.load()]).then(function () {
                  document.fonts.add(t),
                    document.fonts.add(n),
                    document.fonts.add(r),
                    e.$root.$emit("fonts:loaded");
                });
              } else this.$root.$emit("fonts:loaded");
            },
            setTheme: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {
                        color: "black",
                        background: "white",
                      },
                t = document.documentElement;
              t.style.setProperty("--color", e.color),
                t.style.setProperty("--background", e.background);
            },
            setViewport: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "--vh",
                t = document.documentElement,
                n = 0.01 * l.a.height;
              t.style.setProperty(e, "".concat(n, "px"));
            },
            onRoute: function () {
              var e = this;
              this.$router.beforeEach(function (t, n, r) {
                var o = e.$refs.page.$children[0];
                t.path !== n.path
                  ? (Object.assign(o.$el.style, {
                      position: "fixed",
                      top: "".concat(-1 * window.scrollY, "px"),
                      left: 0,
                      width: "100%",
                    }),
                    o.animateOut({
                      to: t,
                    }),
                    r())
                  : r();
              });
            },
            onResize: function (e, t) {
              this.setViewport("--vh");
            },
          },
        },
        y = f,
        w = n(27),
        component = Object(w.a)(
          y,
          function () {
            var e = this._self._c;
            return e(
              "div",
              [
                e("Nuxt", {
                  ref: "page",
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    329: function (e, t, n) {
      "use strict";
      var r = n(27),
        component = Object(r.a)(
          {},
          function () {
            var e = this._self._c;
            return e(
              "div",
              [
                e("Nuxt", {
                  ref: "page",
                }),
                this._v(" "),
                e("Footer", {
                  attrs: {
                    theme: "light",
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
      installComponents(component, {
        Footer: n(241).default,
      });
    },
    346: function (e, t, n) {
      n(347), (e.exports = n(348));
    },
    397: function (e, t, n) {
      e.exports = {};
    },
    403: function (e, t, n) {
      "use strict";
      n(284);
    },
    404: function (e, t, n) {
      "use strict";
      n(285);
    },
    405: function (e, t, n) {
      "use strict";
      n(286);
    },
    474: function (e, t, n) {
      "use strict";
      n(302);
    },
    475: function (e, t, n) {
      "use strict";
      n(303);
    },
    476: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return r;
        }),
        n.d(t, "getters", function () {
          return o;
        }),
        n.d(t, "mutations", function () {
          return l;
        });
      var r = function () {
          return {
            ready: !1,
            menu: !1,
          };
        },
        o = {
          ready: function (e) {
            return e.ready;
          },
          menu: function (e) {
            return e.menu;
          },
        },
        l = {
          SET_READY: function (e, t) {
            e.ready = t;
          },
          SET_MENU: function (e, menu) {
            e.menu = menu;
          },
        };
    },
    500: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(19),
        o = n(70),
        l = {
          data: function () {
            return {
              copy: o.a.header,
            };
          },
          mounted: function () {
            this.$nextTick(this.animateIn);
          },
          methods: {
            animateIn: function () {
              document.documentElement.classList.add("--menu"),
                r.a
                  .timeline({
                    paused: !0,
                  })
                  .to(this.$el, {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: "none",
                  })
                  .fromTo(
                    this.$refs.ul,
                    {
                      autoAlpha: 0,
                    },
                    {
                      autoAlpha: 0,
                      duration: 0.4,
                      ease: "none",
                    }
                  )
                  .fromTo(
                    this.$refs.li,
                    {
                      y: 20,
                      autoAlpha: 0,
                    },
                    {
                      y: 100,
                      autoAlpha: 1,
                      duration: 0.7,
                      stagger: 0.07,
                      ease: "expo.out",
                    },
                    "-=0.4"
                  )
                  .restart();
            },
            animateOut: function () {
              return (
                document.documentElement.classList.remove("--menu"),
                r.a
                  .timeline({
                    paused: !0,
                  })
                  .to(this.$refs.ul, {
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: "none",
                  })
                  .to(this.$el, {
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: "none",
                  })
                  .restart()
              );
            },
          },
        },
        c = (n(404), n(27)),
        component = Object(c.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "menu u-abs u-center",
              },
              [
                t(
                  "ul",
                  {
                    ref: "ul",
                  },
                  e._l(e.copy.links, function (link, n) {
                    return t(
                      "li",
                      {
                        key: n,
                        ref: "li",
                        refInFor: !0,
                        class: [link.type],
                        on: {
                          click: function (t) {
                            return e.$emit("close");
                          },
                        },
                      },
                      [
                        "external" === link.type
                          ? [
                              t(
                                "a",
                                {
                                  attrs: {
                                    href: link.url,
                                    target: "_blank",
                                  },
                                },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(link.text) +
                                      "\n        "
                                  ),
                                ]
                              ),
                            ]
                          : [
                              t(
                                "NuxtLink",
                                {
                                  attrs: {
                                    to: {
                                      path: link.url,
                                    },
                                    exact: "",
                                  },
                                },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(link.text) +
                                      "\n        "
                                  ),
                                ]
                              ),
                            ],
                      ],
                      2
                    );
                  }),
                  0
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    501: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(19),
        o = {
          mounted: function () {
            r.a.set(this.$refs.transform, {
              yPercent: 100,
            }),
              this.$root.$on("logo:animateIn", this.animateIn),
              this.$root.$on("logo:animateOut", this.animateOut);
          },
          methods: {
            animateIn: function () {
              var e = (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      delay: 0,
                    }
              ).delay;
              r.a.killTweensOf(this.$refs.transform),
                r.a
                  .timeline({
                    paused: !0,
                  })
                  .to(
                    this.$refs.transform,
                    {
                      yPercent: 0,
                      duration: 1,
                      ease: "expo.inOut",
                    },
                    e
                  )
                  .restart();
            },
            animateOut: function () {
              r.a.killTweensOf(this.$refs.transform),
                r.a
                  .timeline({
                    paused: !0,
                  })
                  .to(
                    this.$refs.transform,
                    {
                      yPercent: 100,
                      duration: 1,
                      ease: "expo.inOut",
                    },
                    0
                  )
                  .restart();
            },
          },
        },
        l = o,
        c = (n(405), n(27)),
        component = Object(c.a)(
          l,
          function () {
            var e = this._self._c;
            return e(
              "div",
              {
                staticClass: "logo",
              },
              [
                e(
                  "div",
                  {
                    ref: "transform",
                  },
                  [
                    e(
                      "svg",
                      {
                        attrs: {
                          width: "72",
                          height: "77",
                          viewBox: "0 0 72 77",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        e("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M17.3781 2.81803C17.3771 2.07095 17.0716 1.35476 16.5288 0.826499C15.986 0.298234 15.2501 0.00101025 14.4824 0L2.8957 0C2.12771 0 1.39118 0.296899 0.848135 0.825383C0.305087 1.35387 2.66589e-06 2.07064 2.66589e-06 2.81803V14.094C-0.00051385 14.4642 0.0740307 14.8309 0.21937 15.173C0.364709 15.5151 0.577993 15.826 0.846986 16.0878C1.11598 16.3495 1.43539 16.5571 1.78695 16.6985C2.1385 16.84 2.51529 16.9125 2.8957 16.912H10.6568C11.4224 16.9171 12.1549 17.2166 12.6945 17.7452C13.234 18.2739 13.5368 18.9888 13.5368 19.7339V29.3144C13.5368 30.0622 13.8417 30.7793 14.3847 31.3084C14.9276 31.8375 15.6641 32.1353 16.4325 32.1363H24.2564C25.0243 32.1363 25.7609 32.4332 26.3039 32.9617C26.847 33.4901 27.1521 34.2069 27.1521 34.9543V41.8484C27.1521 42.5961 26.8471 43.3133 26.3042 43.8424C25.7612 44.3715 25.0247 44.6692 24.2564 44.6702H16.3828C15.6148 44.6702 14.8783 44.9671 14.3353 45.4956C13.7922 46.0241 13.4871 46.7409 13.4871 47.4883V58.7642C13.4882 59.5113 13.7936 60.2275 14.3364 60.7557C14.8792 61.284 15.6152 61.5812 16.3828 61.5822H24.272C25.04 61.5822 25.7766 61.8791 26.3196 62.4076C26.8627 62.9361 27.1677 63.6529 27.1677 64.4003V74.0739C27.1672 74.4443 27.2417 74.8111 27.387 75.1535C27.5323 75.4958 27.7455 75.8069 28.0145 76.069C28.2834 76.3311 28.6028 76.539 28.9544 76.6809C29.306 76.8227 29.6828 76.8958 30.0634 76.8958L68.935 77C69.704 77 70.4415 76.7027 70.9853 76.1735C71.5291 75.6443 71.8346 74.9266 71.8346 74.1781V62.8946C71.8346 62.1462 71.5291 61.4284 70.9853 60.8992C70.4415 60.37 69.704 60.0727 68.935 60.0727H33.5477C33.1673 60.0732 32.7905 60.0007 32.4389 59.8592C32.0874 59.7178 31.768 59.5102 31.499 59.2484C31.23 58.9867 31.0167 58.6758 30.8714 58.3337C30.726 57.9916 30.6515 57.6249 30.652 57.2547V49.4454C30.652 48.698 30.9571 47.9812 31.5001 47.4528C32.0432 46.9243 32.7797 46.6274 33.5477 46.6274H41.658C42.0384 46.6279 42.4152 46.5553 42.7667 46.4139C43.1183 46.2725 43.4377 46.0649 43.7067 45.8031C43.9757 45.5413 44.189 45.2305 44.3343 44.8884C44.4796 44.5462 44.5542 44.1796 44.5537 43.8093V34.3892C44.5537 33.6418 44.8588 32.925 45.4018 32.3965C45.9449 31.868 46.6814 31.5711 47.4494 31.5711H55.2693C55.6499 31.5716 56.0269 31.4991 56.3787 31.3577C56.7304 31.2163 57.0501 31.0088 57.3194 30.7471C57.5887 30.4854 57.8024 30.1746 57.9482 29.8324C58.0939 29.4903 58.1689 29.1235 58.1689 28.7531V20.0126C58.1674 19.6422 58.2409 19.2752 58.3852 18.9324C58.5296 18.5897 58.7419 18.2781 59.0101 18.0153C59.2783 17.7525 59.5972 17.5437 59.9483 17.4009C60.2995 17.2581 60.6762 17.1841 61.0568 17.1831H69.1043C69.8706 17.1841 70.6059 16.8891 71.1489 16.3629C71.6918 15.8367 71.9979 15.1223 72 14.3766V3.1006C72.0005 2.73039 71.926 2.36372 71.7806 2.02159C71.6353 1.67946 71.422 1.36861 71.153 1.10683C70.884 0.84505 70.5646 0.637495 70.2131 0.496053C69.8615 0.354612 69.4847 0.282064 69.1043 0.282567H57.5176C57.1372 0.282064 56.7604 0.354612 56.4089 0.496053C56.0573 0.637495 55.7379 0.84505 55.4689 1.10683C55.1999 1.36861 54.9866 1.67946 54.8413 2.02159C54.6959 2.36372 54.6214 2.73039 54.6219 3.1006V11.8373C54.6209 12.5843 54.3155 13.3005 53.7726 13.8288C53.2298 14.3571 52.4939 14.6543 51.7262 14.6553H43.6787C43.2981 14.6548 42.9211 14.7273 42.5694 14.8687C42.2176 15.0101 41.8979 15.2176 41.6286 15.4793C41.3593 15.7411 41.1456 16.0519 40.9999 16.394C40.8541 16.7362 40.7791 17.1029 40.7791 17.4733V26.8973C40.7791 27.6447 40.474 28.3615 39.931 28.89C39.3879 29.4185 38.6514 29.7154 37.8834 29.7154H33.8263C33.0586 29.7144 32.3227 29.4171 31.7799 28.8889C31.237 28.3606 30.9316 27.6444 30.9306 26.8973V18.0423C30.9316 17.2975 30.6297 16.5827 30.0908 16.0539C29.5519 15.5251 28.8198 15.2255 28.0545 15.2204H20.2738C19.8934 15.2209 19.5166 15.1484 19.165 15.0069C18.8135 14.8655 18.4941 14.658 18.2251 14.3962C17.9561 14.1344 17.7428 13.8235 17.5975 13.4814C17.4521 13.1393 17.3776 12.7726 17.3781 12.4024V2.81803Z",
                            fill: "currentColor",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    502: function (e, t, n) {
      "use strict";
      n.r(t);
      n(37);
      var r = n(19),
        o = n(16),
        l = {
          mounted: function () {
            var e = this;
            this.$document.classList.add("--locked"),
              this.$webgl.init(this.$el),
              this.$root.$on("webgl:pause", this.onPause),
              this.$root.$on("webgl:restart", this.onRestart),
              this.$nextTick(function () {
                e.animateIn();
              });
          },
          methods: {
            onPause: function () {
              r.a.to(this.$el, {
                autoAlpha: 0,
                duration: 0.4,
                ease: "none",
                onComplete: function () {
                  o.c.emit("render:pause");
                },
              });
            },
            onRestart: function () {
              o.c.emit("render:restart"),
                r.a
                  .timeline({
                    paused: !0,
                  })
                  .to(this.$el, {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: "none",
                  })
                  .to(this.$el, {
                    scale: 1,
                    duration: 2.75,
                    ease: "expo.out",
                  })
                  .restart();
            },
            animateIn: function () {
              var e,
                t = this,
                n =
                  null === (e = this.$webgl) ||
                  void 0 === e ||
                  null === (e = e.main) ||
                  void 0 === e
                    ? void 0
                    : e.mainUniforms,
                o = "index" === this.$route.name ? 1.5 : 0,
                l = "#uniforms" === window.location.hash;
              n &&
                r.a
                  .timeline({
                    paused: !0,
                  })
                  .to(
                    n.uLogoAnimation,
                    {
                      value: l ? 0 : 1,
                      duration: 1.5,
                      ease: "io",
                    },
                    0
                  )
                  .to(
                    n.uGlobalShape,
                    {
                      value: 1,
                      duration: 1.75,
                      ease: "power2.inOut",
                    },
                    0.75
                  )
                  .to(
                    n.uNoiseMultiplier,
                    {
                      value: 1,
                      duration: 1.75,
                      ease: "power2.inOut",
                    },
                    0.75
                  )
                  .add(function () {
                    t.$store.commit("app/SET_READY", !0),
                      t.$document.classList.remove("--locked");
                  }, o)
                  .restart();
            },
          },
        },
        c = (n(474), n(27)),
        component = Object(c.a)(
          l,
          function () {
            return (0, this._self._c)("div", {
              staticClass: "webgl",
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    70: function (e, t, n) {
      "use strict";
      n(28), n(34), n(39), n(40), n(31), n(11), n(25);
      var r = n(9);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var l = {
        BAYC: "https://boredapeyachtclub.com/#/terms",
        MAYC: "https://boredapeyachtclub.com/#/mayc/terms",
        Sewer_Pass: "https://mdvmm.xyz/license",
        "HV-MTL": "https://mdvmm.xyz/hvmtl-license",
        Otherside: "https://otherside.xyz/license",
        CryptoPunks: "https://licenseterms.cryptopunks.app/",
        Meebits: "https://licenseterms.meebits.app/",
      };
      t.a = {
        home: {
          tagline: [
            "Shaping web3",
            "through",
            "storytelling,",
            "experiences,",
            "and community.",
          ],
          about: {
            paragraph:
              "We believe that the potential of web3 can be realized when we start with imagination, not limitations. No borders, no rulers, just people making cool shit, together. In the Yugaverse, fans and players are owners and creators, and in the game of web3, everyone can create and play together on one team.",
          },
          projects: {
            title: {
              mobile: "The Yugaverse",
              desktop:
                "The Yugaverse The Yugaverse The Yugaverse The Yugaverse",
            },
            entries: [
              {
                title: "Bored Ape Yacht Club",
                background: "#131313",
                logo: "/images/bayc.png",
                assets: [
                  "/BAYC/1.png",
                  "/BAYC/2.png",
                  "/BAYC/3.png",
                  "/BAYC/4.png",
                  "/BAYC/5.png",
                  "/BAYC/6.png",
                  "/BAYC/7.png",
                  "/BAYC/8.png",
                  "/BAYC/9.png",
                  "/BAYC/10.png",
                  "/BAYC/11.png",
                  "/BAYC/12.png",
                  "/BAYC/13.png",
                  "/BAYC/14.png",
                  "/BAYC/15.png",
                ],
                imageQuality: 70,
                imageRendering: "auto",
                button: {
                  url: "https://boredapeyachtclub.com/#/",
                  text: "Discover",
                },
              },
              {
                title: "Mutant Ape Yacht Club",
                background: "#D3DE5D",
                logo: "/images/mayc.png",
                assets: [
                  "/MAYC/1.png",
                  "/MAYC/2.png",
                  "/MAYC/3.png",
                  "/MAYC/4.png",
                  "/MAYC/5.png",
                  "/MAYC/6.png",
                  "/MAYC/7.png",
                  "/MAYC/8.png",
                  "/MAYC/9.png",
                  "/MAYC/10.png",
                  "/MAYC/11.png",
                  "/MAYC/12.png",
                  "/MAYC/13.png",
                  "/MAYC/14.png",
                  "/MAYC/15.png",
                  "/MAYC/16.png",
                  "/MAYC/17.png",
                  "/MAYC/18.png",
                  "/MAYC/19.png",
                ],
                imageQuality: 70,
                imageRendering: "auto",
                button: {
                  url: "https://boredapeyachtclub.com/#/mayc",
                  text: "Discover",
                },
              },
              {
                title: "Bored Ape Kennel Club",
                background: "#000000",
                logo: "/images/bakc.jpg",
                assets: [
                  "/BAKC/1.png",
                  "/BAKC/2.png",
                  "/BAKC/3.png",
                  "/BAKC/4.png",
                  "/BAKC/5.png",
                  "/BAKC/6.png",
                  "/BAKC/7.png",
                  "/BAKC/8.png",
                  "/BAKC/9.png",
                  "/BAKC/10.png",
                  "/BAKC/11.png",
                  "/BAKC/12.png",
                  "/BAKC/13.png",
                  "/BAKC/14.png",
                  "/BAKC/15.png",
                  "/BAKC/16.png",
                  "/BAKC/17.png",
                  "/BAKC/18.png",
                ],
                imageQuality: 70,
                imageRendering: "auto",
                button: {
                  url: "https://boredapeyachtclub.com/#/kennel-club",
                  text: "Discover",
                },
              },
              {
                title: "CryptoPunks",
                background: "#EA34B0",
                logo: "/images/cryptopunks.svg",
                assets: [
                  "/Cryptopunks/1.png",
                  "/Cryptopunks/2.png",
                  "/Cryptopunks/3.png",
                  "/Cryptopunks/4.png",
                  "/Cryptopunks/5.png",
                  "/Cryptopunks/6.png",
                  "/Cryptopunks/7.png",
                  "/Cryptopunks/8.png",
                  "/Cryptopunks/9.png",
                  "/Cryptopunks/10.png",
                  "/Cryptopunks/11.png",
                  "/Cryptopunks/12.png",
                  "/Cryptopunks/13.png",
                  "/Cryptopunks/14.png",
                  "/Cryptopunks/15.png",
                  "/Cryptopunks/16.png",
                  "/Cryptopunks/17.png",
                ],
                imageQuality: 100,
                imageRendering: "pixelated",
                button: {
                  url: "https://cryptopunks.app/",
                  text: "Discover",
                },
              },
              {
                title: "Meebits",
                background: "#FFFFFF",
                logo: "/images/meebits.svg",
                assets: [
                  "/Meebits/1.jpeg",
                  "/Meebits/2.jpeg",
                  "/Meebits/3.jpeg",
                  "/Meebits/4.jpeg",
                  "/Meebits/5.jpeg",
                  "/Meebits/6.jpeg",
                  "/Meebits/7.jpeg",
                  "/Meebits/8.jpeg",
                  "/Meebits/9.jpeg",
                  "/Meebits/10.jpeg",
                  "/Meebits/11.jpeg",
                  "/Meebits/12.jpeg",
                  "/Meebits/13.jpeg",
                  "/Meebits/14.jpeg",
                  "/Meebits/15.jpeg",
                  "/Meebits/16.jpeg",
                  "/Meebits/17.jpeg",
                ],
                imageQuality: 70,
                imageRendering: "auto",
                button: {
                  url: "https://meebits.app/",
                  text: "Discover",
                },
              },
              {
                title: "Otherside",
                background: "#131313",
                logo: "/images/otherside.svg",
                assets: [
                  "/Otherside/otherside_1.jpg",
                  "/Otherside/otherside_2.jpg",
                  "/Otherside/otherside_3.jpg",
                  "/Otherside/otherside_4.jpg",
                  "/Otherside/otherside_5.jpg",
                  "/Otherside/otherside_6.jpg",
                  "/Otherside/otherside_7.jpg",
                  "/Otherside/otherside_8.jpg",
                  "/Otherside/otherside_9.jpg",
                  "/Otherside/otherside_10.jpg",
                  "/Otherside/otherside_11.jpg",
                  "/Otherside/otherside_12.jpg",
                  "/Otherside/otherside_13.jpg",
                  "/Otherside/otherside_14.jpg",
                  "/Otherside/otherside_15.jpg",
                  "/Otherside/otherside_16.jpg",
                ],
                imageQuality: 70,
                imageRendering: "auto",
                button: {
                  url: "https://twitter.com/yugalabs/status/1505014986556551172",
                  text: "Discover",
                },
              },
            ],
          },
          apecoin: {
            title: "The Yugaverse runs on <u>ApeCoin</u>.",
            paragraph:
              "Owned and operated by the ApeCoin DAO, APE is a token supporting what’s next in web3. Yuga Labs is a contributor to ApeCoin, a community member of the ApeCoin DAO, and will be using ApeCoin as the primary token in Yuga Labs projects.",
            cta: {
              text: "Learn more",
              url: "https://apecoin.com",
            },
          },
          footer: {
            label: "Join us",
            buttons: [
              {
                type: "internal",
                text: "Work at Yuga",
                url: "/careers",
              },
              {
                type: "external",
                text: "Partner with Yuga",
                url: "mailto:hi@yugalabs.io",
              },
            ],
          },
        },
      };
    },
  },
  [[346, 44, 2, 45]],
]);
