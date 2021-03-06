/* interact.js v1.2.9 | https://raw.github.com/taye/interact.js/master/LICENSE */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(m, J, r) {
    m != Array.prototype && m != Object.prototype && (m[J] = r.value)
}
;
$jscomp.getGlobal = function(m) {
    return "undefined" != typeof window && window === m ? m : "undefined" != typeof global && null != global ? global : m
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(m, J, r, M) {
    if (J) {
        r = $jscomp.global;
        m = m.split(".");
        for (M = 0; M < m.length - 1; M++) {
            var B = m[M];
            B in r || (r[B] = {});
            r = r[B]
        }
        m = m[m.length - 1];
        M = r[m];
        J = J(M);
        J != M && null != J && $jscomp.defineProperty(r, m, {
            configurable: !0,
            writable: !0,
            value: J
        })
    }
}
;
$jscomp.polyfill("Math.hypot", function(m) {
    return m ? m : function(m, r, M) {
        m = Number(m);
        r = Number(r);
        var B, u = Math.max(Math.abs(m), Math.abs(r));
        for (B = 2; B < arguments.length; B++)
            u = Math.max(u, Math.abs(arguments[B]));
        if (1E100 < u || 1E-100 > u) {
            m /= u;
            r /= u;
            var x = m * m + r * r;
            for (B = 2; B < arguments.length; B++) {
                var F = Number(arguments[B]) / u;
                x += F * F
            }
            return Math.sqrt(x) * u
        }
        x = m * m + r * r;
        for (B = 2; B < arguments.length; B++)
            F = Number(arguments[B]),
            x += F * F;
        return Math.sqrt(x)
    }
}, "es6-impl", "es3");
(function(m) {
    function J() {}
    function r(a) {
        if (!a || "object" !== typeof a)
            return !1;
        var b = Y(a) || v;
        return /object|function/.test(typeof b.Element) ? a instanceof b.Element : 1 === a.nodeType && "string" === typeof a.nodeName
    }
    function M(a) {
        return a === v || !(!a || !a.Window) && a instanceof a.Window
    }
    function B(a) {
        return u(a) && !0 && x(a.splice)
    }
    function u(a) {
        return !!a && "object" === typeof a
    }
    function x(a) {
        return "function" === typeof a
    }
    function F(a) {
        return "number" === typeof a
    }
    function K(a) {
        return "boolean" === typeof a
    }
    function P(a) {
        return "string" === typeof a
    }
    function fa(a) {
        if (!P(a))
            return !1;
        S.querySelector(a);
        return !0
    }
    function C(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function qa(a, b) {
        for (var c in b) {
            var d = !1, e;
            for (e in za)
                if (0 === c.indexOf(e) && za[e].test(c)) {
                    d = !0;
                    break
                }
            d || (a[c] = b[c])
        }
        return a
    }
    function ra(a, b) {
        a.page = a.page || {};
        a.page.x = b.page.x;
        a.page.y = b.page.y;
        a.client = a.client || {};
        a.client.x = b.client.x;
        a.client.y = b.client.y;
        a.timeStamp = b.timeStamp
    }
    function Qa(a, b, c) {
        a.page.x = c.page.x - b.page.x;
        a.page.y = c.page.y - b.page.y;
        a.client.x = c.client.x - b.client.x;
        a.client.y = c.client.y - b.client.y;
        a.timeStamp = (new Date).getTime() - b.timeStamp;
        b = Math.max(a.timeStamp / 1E3, .001);
        a.page.speed = ga(a.page.x, a.page.y) / b;
        a.page.vx = a.page.x / b;
        a.page.vy = a.page.y / b;
        a.client.speed = ga(a.client.x, a.page.y) / b;
        a.client.vx = a.client.x / b;
        a.client.vy = a.client.y / b
    }
    function Ra(a) {
        return a instanceof v.Event || ha && v.Touch && a instanceof v.Touch
    }
    function sa(a, b, c) {
        c = c || {};
        a = a || "page";
        c.x = b[a + "X"];
        c.y = b[a + "Y"];
        return c
    }
    function Aa(a, b) {
        b = b || {};
        Sa && Ra(a) ? (sa("screen", a, b),
        b.x += v.scrollX,
        b.y += v.scrollY) : sa("page", a, b);
        return b
    }
    function Ta(a, b) {
        b = b || {};
        Sa && Ra(a) ? sa("screen", a, b) : sa("client", a, b);
        return b
    }
    function Q(a) {
        return F(a.pointerId) ? a.pointerId : a.identifier
    }
    function Ba(a) {
        return a instanceof kb ? a.correspondingUseElement : a
    }
    function Y(a) {
        if (M(a))
            return a;
        a = a.ownerDocument || a;
        return a.defaultView || a.parentWindow || v
    }
    function Ca(a) {
        return (a = a instanceof Ua ? a.getBoundingClientRect() : a.getClientRects()[0]) && {
            left: a.left,
            right: a.right,
            top: a.top,
            bottom: a.bottom,
            width: a.width || a.right - a.left,
            height: a.height || a.bottom - a.top
        }
    }
    function ta(a) {
        var b = Ca(a);
        if (!lb && b) {
            var c = (c = Y(a)) || v;
            a = c.scrollX || c.document.documentElement.scrollLeft;
            c = c.scrollY || c.document.documentElement.scrollTop;
            b.left += a;
            b.right += a;
            b.top += c;
            b.bottom += c
        }
        return b
    }
    function Da(a) {
        var b = [];
        B(a) ? (b[0] = a[0],
        b[1] = a[1]) : "touchend" === a.type ? 1 === a.touches.length ? (b[0] = a.touches[0],
        b[1] = a.changedTouches[0]) : 0 === a.touches.length && (b[0] = a.changedTouches[0],
        b[1] = a.changedTouches[1]) : (b[0] = a.touches[0],
        b[1] = a.touches[1]);
        return b
    }
    function Va(a) {
        for (var b = {
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0
        }, c, d = 0; d < a.length; d++)
            for (c in b)
                b[c] += a[d][c];
        for (c in b)
            b[c] /= a.length;
        return b
    }
    function Ea(a) {
        if (a.length || a.touches && 1 < a.touches.length) {
            a = Da(a);
            var b = Math.min(a[0].pageX, a[1].pageX)
              , c = Math.min(a[0].pageY, a[1].pageY);
            return {
                x: b,
                y: c,
                left: b,
                top: c,
                width: Math.max(a[0].pageX, a[1].pageX) - b,
                height: Math.max(a[0].pageY, a[1].pageY) - c
            }
        }
    }
    function Fa(a, b) {
        b = b || H.deltaSource;
        var c = b + "X";
        b += "Y";
        a = Da(a);
        return ga(a[0][c] - a[1][c], a[0][b] - a[1][b])
    }
    function Ga(a, b, c) {
        c = c || H.deltaSource;
        var d = c + "X";
        c += "Y";
        a = Da(a);
        d = 180 * Math.atan((a[0][c] - a[1][c]) / (a[0][d] - a[1][d])) / Math.PI;
        F(b) && (b = (d - b) % 360,
        315 < b ? d -= 360 + d / 360 | 0 : 135 < b ? d -= 180 + d / 360 | 0 : -315 > b ? d += 360 + d / 360 | 0 : -135 > b && (d += 180 + d / 360 | 0));
        return d
    }
    function na(a, b) {
        var c = a ? a.options.origin : H.origin;
        "parent" === c ? c = N(b) : "self" === c ? c = a.getRect(b) : fa(c) && (c = Ha(b, c) || {
            x: 0,
            y: 0
        });
        x(c) && (c = c(a && b));
        r(c) && (c = ta(c));
        c.x = "x"in c ? c.x : c.left;
        c.y = "y"in c ? c.y : c.top;
        return c
    }
    function Wa(a, b, c, d) {
        var e = 1 - a;
        return e * e * b + 2 * e * a * c + a * a * d
    }
    function ba(a, b) {
        for (; b; ) {
            if (b === a)
                return !0;
            b = b.parentNode
        }
        return !1
    }
    function Ha(a, b) {
        for (a = N(a); r(a); ) {
            if (T(a, b))
                return a;
            a = N(a)
        }
        return null
    }
    function N(a) {
        if ((a = a.parentNode) && a instanceof Xa)
            for (; (a = a.host) && a && a instanceof Xa; )
                ;
        return a
    }
    function ua(a, b) {
        return a._context === b.ownerDocument || ba(a._context, b)
    }
    function ca(a, b, c) {
        return (a = a.options.ignoreFrom) && r(c) ? P(a) ? Ia(c, a, b) : r(a) ? ba(a, c) : !1 : !1
    }
    function da(a, b, c) {
        return (a = a.options.allowFrom) ? r(c) ? P(a) ? Ia(c, a, b) : r(a) ? ba(a, c) : !1 : !1 : !0
    }
    function Ya(a, b) {
        if (!b)
            return !1;
        b = b.options.drag.axis;
        return "xy" === a || "xy" === b || b === a
    }
    function Ja(a, b) {
        a = a.options;
        /^resize/.test(b) && (b = "resize");
        return a[b].snap && a[b].snap.enabled
    }
    function Ka(a, b) {
        a = a.options;
        /^resize/.test(b) && (b = "resize");
        return a[b].restrict && a[b].restrict.enabled
    }
    function ia(a, b, c) {
        for (var d = a.options, e = d[c.name].max, d = d[c.name].maxPerElement, k = 0, h = 0, f = 0, q = 0, G = w.length; q < G; q++) {
            var n = w[q]
              , t = n.prepared.name;
            if (n.interacting() && (k++,
            k >= va || n.target === a && (h += t === c.name | 0,
            h >= e || n.element === b && (f++,
            t !== c.name || f >= d))))
                return !1
        }
        return 0 < va
    }
    function wa() {
        this.prevDropElement = this.prevDropTarget = this.dropElement = this.dropTarget = this.element = this.target = null;
        this.prepared = {
            name: null,
            axis: null,
            edges: null
        };
        this.matches = [];
        this.matchElements = [];
        this.inertiaStatus = {
            active: !1,
            smoothEnd: !1,
            ending: !1,
            startEvent: null,
            upCoords: {},
            xe: 0,
            ye: 0,
            sx: 0,
            sy: 0,
            t0: 0,
            vx0: 0,
            vys: 0,
            duration: 0,
            resumeDx: 0,
            resumeDy: 0,
            lambda_v0: 0,
            one_ve_v0: 0,
            i: null
        };
        if (x(Function.prototype.bind))
            this.boundInertiaFrame = this.inertiaFrame.bind(this),
            this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
        else {
            var a = this;
            this.boundInertiaFrame = function() {
                return a.inertiaFrame()
            }
            ;
            this.boundSmoothEndFrame = function() {
                return a.smoothEndFrame()
            }
        }
        this.activeDrops = {
            dropzones: [],
            elements: [],
            rects: []
        };
        this.pointers = [];
        this.pointerIds = [];
        this.downTargets = [];
        this.downTimes = [];
        this.holdTimers = [];
        this.prevCoords = {
            page: {
                x: 0,
                y: 0
            },
            client: {
                x: 0,
                y: 0
            },
            timeStamp: 0
        };
        this.curCoords = {
            page: {
                x: 0,
                y: 0
            },
            client: {
                x: 0,
                y: 0
            },
            timeStamp: 0
        };
        this.startCoords = {
            page: {
                x: 0,
                y: 0
            },
            client: {
                x: 0,
                y: 0
            },
            timeStamp: 0
        };
        this.pointerDelta = {
            page: {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                speed: 0
            },
            client: {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                speed: 0
            },
            timeStamp: 0
        };
        this.downEvent = null;
        this.downPointer = {};
        this.prevEvent = this._curEventTarget = this._eventTarget = null;
        this.tapTime = 0;
        this.prevTap = null;
        this.startOffset = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.restrictOffset = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.snapOffsets = [];
        this.gesture = {
            start: {
                x: 0,
                y: 0
            },
            startDistance: 0,
            prevDistance: 0,
            distance: 0,
            scale: 1,
            startAngle: 0,
            prevAngle: 0
        };
        this.snapStatus = {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            realX: 0,
            realY: 0,
            snappedX: 0,
            snappedY: 0,
            targets: [],
            locked: !1,
            changed: !1
        };
        this.restrictStatus = {
            dx: 0,
            dy: 0,
            restrictedX: 0,
            restrictedY: 0,
            snap: null,
            restricted: !1,
            changed: !1
        };
        this.restrictStatus.snap = this.snapStatus;
        this.resizing = this.dragging = this.gesturing = this.pointerWasMoved = this.pointerIsDown = !1;
        this.resizeAxes = "xy";
        this.mouse = !1;
        w.push(this)
    }
    function Za(a, b, c) {
        var d = w.length
          , e = /mouse/i.test(a.pointerType || b) || 4 === a.pointerType
          , k = Q(a);
        if (/down|start/i.test(b))
            for (a = 0; a < d; a++) {
                var h = w[a];
                var f = c;
                if (h.inertiaStatus.active && h.target.options[h.prepared.name].inertia.allowResume && h.mouse === e)
                    for (; f; ) {
                        if (f === h.element)
                            return h;
                        f = N(f)
                    }
            }
        if (e || !ha && !U) {
            for (a = 0; a < d; a++)
                if (w[a].mouse && !w[a].inertiaStatus.active)
                    return w[a];
            for (a = 0; a < d; a++)
                if (w[a].mouse && (!/down/.test(b) || !w[a].inertiaStatus.active))
                    return h;
            h = new wa;
            h.mouse = !0;
            return h
        }
        for (a = 0; a < d; a++)
            if (-1 !== y(w[a].pointerIds, k))
                return w[a];
        if (/up|end|out/i.test(b))
            return null;
        for (a = 0; a < d; a++)
            if (h = w[a],
            !(h.prepared.name && !h.target.options.gesture.enabled || h.interacting() || !e && h.mouse))
                return h;
        return new wa
    }
    function $a(a) {
        return function(b) {
            var c, d = Ba(b.path ? b.path[0] : b.target), e = Ba(b.currentTarget), k;
            if (ha && /touch/.test(b.type))
                for (ab = (new Date).getTime(),
                k = 0; k < b.changedTouches.length; k++) {
                    var h = b.changedTouches[k];
                    if (c = Za(h, b.type, d))
                        c._updateEventTargets(d, e),
                        c[a](h, b, d, e)
                }
            else {
                if (!U && /mouse/.test(b.type)) {
                    for (k = 0; k < w.length; k++)
                        if (!w[k].mouse && w[k].pointerIsDown)
                            return;
                    if (500 > (new Date).getTime() - ab)
                        return
                }
                if (c = Za(b, b.type, d))
                    c._updateEventTargets(d, e),
                    c[a](b, b, d, e)
            }
        }
    }
    function I(a, b, c, d, e, k) {
        var h = a.target
          , f = a.snapStatus
          , q = a.restrictStatus
          , G = a.pointers
          , n = (h && h.options || H).deltaSource
          , t = n + "X"
          , z = n + "Y"
          , p = h ? h.options : H
          , m = na(h, e)
          , r = "start" === d
          , l = "end" === d;
        var A = r ? a.startCoords : a.curCoords;
        e = e || a.element;
        var g = C({}, A.page);
        A = C({}, A.client);
        g.x -= m.x;
        g.y -= m.y;
        A.x -= m.x;
        A.y -= m.y;
        var ja = p[c].snap && p[c].snap.relativePoints;
        !Ja(h, c) || r && ja && ja.length || (this.snap = {
            range: f.range,
            locked: f.locked,
            x: f.snappedX,
            y: f.snappedY,
            realX: f.realX,
            realY: f.realY,
            dx: f.dx,
            dy: f.dy
        },
        f.locked && (g.x += f.dx,
        g.y += f.dy,
        A.x += f.dx,
        A.y += f.dy));
        !Ka(h, c) || r && p[c].restrict.elementRect || !q.restricted || (g.x += q.dx,
        g.y += q.dy,
        A.x += q.dx,
        A.y += q.dy,
        this.restrict = {
            dx: q.dx,
            dy: q.dy
        });
        this.pageX = g.x;
        this.pageY = g.y;
        this.clientX = A.x;
        this.clientY = A.y;
        this.x0 = a.startCoords.page.x - m.x;
        this.y0 = a.startCoords.page.y - m.y;
        this.clientX0 = a.startCoords.client.x - m.x;
        this.clientY0 = a.startCoords.client.y - m.y;
        this.ctrlKey = b.ctrlKey;
        this.altKey = b.altKey;
        this.shiftKey = b.shiftKey;
        this.metaKey = b.metaKey;
        this.button = b.button;
        this.buttons = b.buttons;
        this.target = e;
        this.t0 = a.downTimes[0];
        this.type = c + (d || "");
        this.interaction = a;
        this.interactable = h;
        e = a.inertiaStatus;
        e.active && (this.detail = "inertia");
        k && (this.relatedTarget = k);
        l ? "client" === n ? (this.dx = A.x - a.startCoords.client.x,
        this.dy = A.y - a.startCoords.client.y) : (this.dx = g.x - a.startCoords.page.x,
        this.dy = g.y - a.startCoords.page.y) : r ? this.dy = this.dx = 0 : "inertiastart" === d ? (this.dx = a.prevEvent.dx,
        this.dy = a.prevEvent.dy) : "client" === n ? (this.dx = A.x - a.prevEvent.clientX,
        this.dy = A.y - a.prevEvent.clientY) : (this.dx = g.x - a.prevEvent.pageX,
        this.dy = g.y - a.prevEvent.pageY);
        a.prevEvent && "inertia" === a.prevEvent.detail && !e.active && p[c].inertia && p[c].inertia.zeroResumeDelta && (e.resumeDx += this.dx,
        e.resumeDy += this.dy,
        this.dx = this.dy = 0);
        "resize" === c && a.resizeAxes ? p.resize.square ? ("y" === a.resizeAxes ? this.dx = this.dy : this.dy = this.dx,
        this.axes = "xy") : (this.axes = a.resizeAxes,
        "x" === a.resizeAxes ? this.dy = 0 : "y" === a.resizeAxes && (this.dx = 0)) : "gesture" === c && (this.touches = [G[0], G[1]],
        r ? (this.distance = Fa(G, n),
        this.box = Ea(G),
        this.scale = 1,
        this.ds = 0,
        this.angle = Ga(G, void 0, n),
        this.da = 0) : l || b instanceof I ? (this.distance = a.prevEvent.distance,
        this.box = a.prevEvent.box,
        this.scale = a.prevEvent.scale,
        this.ds = this.scale - 1,
        this.angle = a.prevEvent.angle,
        this.da = this.angle - a.gesture.startAngle) : (this.distance = Fa(G, n),
        this.box = Ea(G),
        this.scale = this.distance / a.gesture.startDistance,
        this.angle = Ga(G, a.gesture.prevAngle, n),
        this.ds = this.scale - a.gesture.prevScale,
        this.da = this.angle - a.gesture.prevAngle));
        r ? (this.timeStamp = a.downTimes[0],
        this.velocityY = this.velocityX = this.speed = this.duration = this.dt = 0) : "inertiastart" === d ? (this.timeStamp = a.prevEvent.timeStamp,
        this.dt = a.prevEvent.dt,
        this.duration = a.prevEvent.duration,
        this.speed = a.prevEvent.speed,
        this.velocityX = a.prevEvent.velocityX,
        this.velocityY = a.prevEvent.velocityY) : (this.timeStamp = (new Date).getTime(),
        this.dt = this.timeStamp - a.prevEvent.timeStamp,
        this.duration = this.timeStamp - a.downTimes[0],
        b instanceof I ? (b = this[t] - a.prevEvent[t],
        z = this[z] - a.prevEvent[z],
        c = this.dt / 1E3,
        this.speed = ga(b, z) / c,
        this.velocityX = b / c,
        this.velocityY = z / c) : (this.speed = a.pointerDelta[n].speed,
        this.velocityX = a.pointerDelta[n].vx,
        this.velocityY = a.pointerDelta[n].vy));
        (l || "inertiastart" === d) && 600 < a.prevEvent.speed && 150 > this.timeStamp - a.prevEvent.timeStamp && (d = 180 * Math.atan2(a.prevEvent.velocityY, a.prevEvent.velocityX) / Math.PI,
        0 > d && (d += 360),
        l = 112.5 <= d && 247.5 > d,
        z = 202.5 <= d && 337.5 > d,
        this.swipe = {
            up: z,
            down: !z && 22.5 <= d && 157.5 > d,
            left: l,
            right: !l && (292.5 <= d || 67.5 > d),
            angle: d,
            speed: a.prevEvent.speed,
            velocity: {
                x: a.prevEvent.velocityX,
                y: a.prevEvent.velocityY
            }
        })
    }
    function bb() {
        this.originalEvent.preventDefault()
    }
    function cb(a) {
        var b = "";
        "drag" === a.name && (b = xa.drag);
        if ("resize" === a.name)
            if (a.axis)
                b = xa[a.name + a.axis];
            else if (a.edges) {
                for (var b = "resize", c = ["top", "bottom", "left", "right"], d = 0; 4 > d; d++)
                    a.edges[c[d]] && (b += c[d]);
                b = xa[b]
            }
        return b
    }
    function db(a, b, c) {
        var d = this.getRect(c)
          , e = !1
          , k = null
          , h = C({}, b.curCoords.page);
        a = this.options;
        if (!d)
            return null;
        if (V.resize && a.resize.enabled) {
            e = a.resize;
            var f = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            };
            if (u(e.edges)) {
                for (var q in f) {
                    var G = f
                      , n = q;
                    a: {
                        var t = q;
                        var z = e.edges[q]
                          , g = h
                          , p = b._eventTarget
                          , m = c
                          , l = d
                          , A = e.margin || oa;
                        if (z) {
                            if (!0 === z) {
                                var x = F(l.width) ? l.width : l.right - l.left
                                  , ja = F(l.height) ? l.height : l.bottom - l.top;
                                0 > x && ("left" === t ? t = "right" : "right" === t && (t = "left"));
                                0 > ja && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top"));
                                if ("left" === t) {
                                    t = g.x < (0 <= x ? l.left : l.right) + A;
                                    break a
                                }
                                if ("top" === t) {
                                    t = g.y < (0 <= ja ? l.top : l.bottom) + A;
                                    break a
                                }
                                if ("right" === t) {
                                    t = g.x > (0 <= x ? l.right : l.left) - A;
                                    break a
                                }
                                if ("bottom" === t) {
                                    t = g.y > (0 <= ja ? l.bottom : l.top) - A;
                                    break a
                                }
                            }
                            t = r(p) ? r(z) ? z === p : Ia(p, z, m) : !1
                        } else
                            t = !1
                    }
                    G[n] = t
                }
                f.left = f.left && !f.right;
                f.top = f.top && !f.bottom;
                e = f.left || f.right || f.top || f.bottom
            } else
                c = "y" !== a.resize.axis && h.x > d.right - oa,
                d = "x" !== a.resize.axis && h.y > d.bottom - oa,
                e = c || d,
                k = (c ? "x" : "") + (d ? "y" : "")
        }
        a = e ? "resize" : V.drag && a.drag.enabled ? "drag" : null;
        V.gesture && 2 <= b.pointerIds.length && !b.dragging && !b.resizing && (a = "gesture");
        return a ? {
            name: a,
            axis: k,
            edges: f
        } : null
    }
    function Z(a, b) {
        if (!u(a))
            return null;
        var c = a.name;
        b = b.options;
        return ("resize" === c && b.resize.enabled || "drag" === c && b.drag.enabled || "gesture" === c && b.gesture.enabled) && V[c] ? a : null
    }
    function pa(a, b) {
        var c = {}
          , d = R[a.type]
          , e = Ba(a.path ? a.path[0] : a.target)
          , k = e;
        b = b ? !0 : !1;
        for (var h in a)
            c[h] = a[h];
        c.originalEvent = a;
        for (c.preventDefault = bb; r(k); ) {
            for (a = 0; a < d.selectors.length; a++)
                if (h = d.contexts[a],
                T(k, d.selectors[a]) && ba(h, e) && ba(h, k)) {
                    h = d.listeners[a];
                    c.currentTarget = k;
                    for (var f = 0; f < h.length; f++)
                        if (h[f][1] === b)
                            h[f][0](c)
                }
            k = N(k)
        }
    }
    function ya(a) {
        return pa.call(this, a, !0)
    }
    function p(a, b) {
        return D.get(a, b) || new E(a,b)
    }
    function E(a, b) {
        this._element = a;
        this._iEvents = this._iEvents || {};
        if (fa(a)) {
            this.selector = a;
            var c = (a = b && b.context) ? Y(a) : v;
            a && (c.Node ? a instanceof c.Node : r(a) || a === c.document) && (this._context = a)
        } else
            c = Y(a),
            r(a, c) && (U ? (n.add(this._element, L.down, l.pointerDown),
            n.add(this._element, L.move, l.pointerHover)) : (n.add(this._element, "mousedown", l.pointerDown),
            n.add(this._element, "mousemove", l.pointerHover),
            n.add(this._element, "touchstart", l.pointerDown),
            n.add(this._element, "touchmove", l.pointerHover)));
        this._doc = c.document;
        -1 === y(ka, this._doc) && eb(this._doc);
        D.push(this);
        this.set(b)
    }
    function O(a, b) {
        var c = !1;
        return function() {
            c || (v.console.warn(b),
            c = !0);
            return a.apply(this, arguments)
        }
    }
    function fb(a) {
        for (var b = 0; b < w.length; b++)
            w[b].pointerEnd(a, a)
    }
    function eb(a) {
        if (-1 === y(ka, a)) {
            var b = a.defaultView || a.parentWindow, c;
            for (c in R)
                n.add(a, c, pa),
                n.add(a, c, ya, !0);
            U ? (L = gb === b.MSPointerEvent ? {
                up: "MSPointerUp",
                down: "MSPointerDown",
                over: "mouseover",
                out: "mouseout",
                move: "MSPointerMove",
                cancel: "MSPointerCancel"
            } : {
                up: "pointerup",
                down: "pointerdown",
                over: "pointerover",
                out: "pointerout",
                move: "pointermove",
                cancel: "pointercancel"
            },
            n.add(a, L.down, l.selectorDown),
            n.add(a, L.move, l.pointerMove),
            n.add(a, L.over, l.pointerOver),
            n.add(a, L.out, l.pointerOut),
            n.add(a, L.up, l.pointerUp),
            n.add(a, L.cancel, l.pointerCancel),
            n.add(a, L.move, l.autoScrollMove)) : (n.add(a, "mousedown", l.selectorDown),
            n.add(a, "mousemove", l.pointerMove),
            n.add(a, "mouseup", l.pointerUp),
            n.add(a, "mouseover", l.pointerOver),
            n.add(a, "mouseout", l.pointerOut),
            n.add(a, "touchstart", l.selectorDown),
            n.add(a, "touchmove", l.pointerMove),
            n.add(a, "touchend", l.pointerUp),
            n.add(a, "touchcancel", l.pointerCancel),
            n.add(a, "mousemove", l.autoScrollMove),
            n.add(a, "touchmove", l.autoScrollMove));
            n.add(b, "blur", fb);
            try {
                if (b.frameElement) {
                    var d = b.frameElement.ownerDocument
                      , e = d.defaultView;
                    n.add(d, "mouseup", l.pointerEnd);
                    n.add(d, "touchend", l.pointerEnd);
                    n.add(d, "touchcancel", l.pointerEnd);
                    n.add(d, "pointerup", l.pointerEnd);
                    n.add(d, "MSPointerUp", l.pointerEnd);
                    n.add(e, "blur", fb)
                }
            } catch (k) {
                p.windowParentError = k
            }
            n.add(a, "dragstart", function(a) {
                for (var b = 0; b < w.length; b++) {
                    var c = w[b];
                    if (c.element && (c.element === a.target || ba(c.element, a.target))) {
                        c.checkAndPreventDefault(a, c.target, c.element);
                        break
                    }
                }
            });
            n.useAttachEvent && (n.add(a, "selectstart", function(a) {
                var b = w[0];
                b.currentAction() && b.checkAndPreventDefault(a)
            }),
            n.add(a, "dblclick", $a("ie8Dblclick")));
            ka.push(a)
        }
    }
    function y(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b)
                return c;
        return -1
    }
    function T(a, b, c) {
        if (la)
            return la(a, b, c);
        v !== m && (b = b.replace(/\/deep\//g, " "));
        return a[La](b)
    }
    function Ia(a, b, c) {
        for (; r(a); ) {
            if (T(a, b))
                return !0;
            a = N(a);
            if (a === c)
                return T(a, b)
        }
        return !1
    }
    if (m) {
        var v = function() {
            var a = m.document.createTextNode("");
            return a.ownerDocument !== m.document && "function" === typeof m.wrap && m.wrap(a) === a ? m.wrap(m) : m
        }(), S = v.document, Xa = v.DocumentFragment || J, Ua = v.SVGElement || J, mb = v.SVGSVGElement || J, kb = v.SVGElementInstance || J, nb = v.HTMLElement || v.Element, gb = v.PointerEvent || v.MSPointerEvent, L, ga = Math.hypot || function(a, b) {
            return Math.sqrt(a * a + b * b)
        }
        , ma = {}, ka = [], D = [], w = [], Ma = !1, R = {}, H = {
            base: {
                accept: null,
                actionChecker: null,
                styleCursor: !0,
                preventDefault: "auto",
                origin: {
                    x: 0,
                    y: 0
                },
                deltaSource: "page",
                allowFrom: null,
                ignoreFrom: null,
                _context: S,
                dropChecker: null
            },
            drag: {
                enabled: !1,
                manualStart: !0,
                max: Infinity,
                maxPerElement: 1,
                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,
                axis: "xy"
            },
            drop: {
                enabled: !1,
                accept: null,
                overlap: "pointer"
            },
            resize: {
                enabled: !1,
                manualStart: !1,
                max: Infinity,
                maxPerElement: 1,
                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,
                square: !1,
                preserveAspectRatio: !1,
                axis: "xy",
                margin: NaN,
                edges: null,
                invert: "none"
            },
            gesture: {
                manualStart: !1,
                enabled: !1,
                max: Infinity,
                maxPerElement: 1,
                restrict: null
            },
            perAction: {
                manualStart: !1,
                max: Infinity,
                maxPerElement: 1,
                snap: {
                    enabled: !1,
                    endOnly: !1,
                    range: Infinity,
                    targets: null,
                    offsets: null,
                    relativePoints: null
                },
                restrict: {
                    enabled: !1,
                    endOnly: !1
                },
                autoScroll: {
                    enabled: !1,
                    container: null,
                    margin: 60,
                    speed: 300
                },
                inertia: {
                    enabled: !1,
                    resistance: 10,
                    minSpeed: 100,
                    endSpeed: 10,
                    allowResume: !0,
                    zeroResumeDelta: !0,
                    smoothEndDuration: 300
                }
            },
            _holdDuration: 600
        }, g = {
            interaction: null,
            i: null,
            x: 0,
            y: 0,
            scroll: function() {
                var a = g.interaction.target.options[g.interaction.prepared.name].autoScroll
                  , b = a.container || Y(g.interaction.element)
                  , c = (new Date).getTime()
                  , d = (c - g.prevTimeX) / 1E3
                  , e = (c - g.prevTimeY) / 1E3;
                if (a.velocity) {
                    var k = a.velocity.x;
                    a = a.velocity.y
                } else
                    k = a = a.speed;
                d *= k;
                e *= a;
                if (1 <= d || 1 <= e)
                    M(b) ? b.scrollBy(g.x * d, g.y * e) : b && (b.scrollLeft += g.x * d,
                    b.scrollTop += g.y * e),
                    1 <= d && (g.prevTimeX = c),
                    1 <= e && (g.prevTimeY = c);
                g.isScrolling && (aa(g.i),
                g.i = W(g.scroll))
            },
            isScrolling: !1,
            prevTimeX: 0,
            prevTimeY: 0,
            start: function(a) {
                g.isScrolling = !0;
                aa(g.i);
                g.interaction = a;
                g.prevTimeX = (new Date).getTime();
                g.prevTimeY = (new Date).getTime();
                g.i = W(g.scroll)
            },
            stop: function() {
                g.isScrolling = !1;
                aa(g.i)
            }
        }, ha = "ontouchstart"in v || v.DocumentTouch && S instanceof v.DocumentTouch, U = gb && !/Chrome/.test(navigator.userAgent), oa = ha || U ? 20 : 10, Na = 1, ab = 0, va = Infinity, xa = S.all && !v.atob ? {
            drag: "move",
            resizex: "e-resize",
            resizey: "s-resize",
            resizexy: "se-resize",
            resizetop: "n-resize",
            resizeleft: "w-resize",
            resizebottom: "s-resize",
            resizeright: "e-resize",
            resizetopleft: "se-resize",
            resizebottomright: "se-resize",
            resizetopright: "ne-resize",
            resizebottomleft: "ne-resize",
            gesture: ""
        } : {
            drag: "move",
            resizex: "ew-resize",
            resizey: "ns-resize",
            resizexy: "nwse-resize",
            resizetop: "ns-resize",
            resizeleft: "ew-resize",
            resizebottom: "ns-resize",
            resizeright: "ew-resize",
            resizetopleft: "nwse-resize",
            resizebottomright: "nwse-resize",
            resizetopright: "nesw-resize",
            resizebottomleft: "nesw-resize",
            gesture: ""
        }, V = {
            drag: !0,
            resize: !0,
            gesture: !0
        }, hb = "onmousewheel"in S ? "mousewheel" : "wheel", ea = "dragstart dragmove draginertiastart dragend dragenter dragleave dropactivate dropdeactivate dropmove drop resizestart resizemove resizeinertiastart resizeend gesturestart gesturemove gestureinertiastart gestureend down move up cancel tap doubletap hold".split(" "), X = {}, Sa = "Opera" == navigator.appName && ha && navigator.userAgent.match("Presto"), lb = /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion), La = "matches"in Element.prototype ? "matches" : "webkitMatchesSelector"in Element.prototype ? "webkitMatchesSelector" : "mozMatchesSelector"in Element.prototype ? "mozMatchesSelector" : "oMatchesSelector"in Element.prototype ? "oMatchesSelector" : "msMatchesSelector", la, W = m.requestAnimationFrame, aa = m.cancelAnimationFrame, n = function() {
            function a(b, c, d, k) {
                var t, l = y(q, b), g = G[l], p = d;
                if (g && g.events) {
                    if (e) {
                        var z = n[l];
                        var m = y(z.supplied, d);
                        p = z.wrapped[m]
                    }
                    if ("all" === c)
                        for (c in g.events)
                            g.events.hasOwnProperty(c) && a(b, c, "all");
                    else {
                        if (g.events[c]) {
                            var r = g.events[c].length;
                            if ("all" === d) {
                                for (t = 0; t < r; t++)
                                    a(b, c, g.events[c][t], !!k);
                                return
                            }
                            for (t = 0; t < r; t++)
                                if (g.events[c][t] === d) {
                                    b[h](f + c, p, k || !1);
                                    g.events[c].splice(t, 1);
                                    e && z && (z.useCount[m]--,
                                    0 === z.useCount[m] && (z.supplied.splice(m, 1),
                                    z.wrapped.splice(m, 1),
                                    z.useCount.splice(m, 1)));
                                    break
                                }
                            g.events[c] && 0 === g.events[c].length && (g.events[c] = null,
                            g.typeCount--)
                        }
                        g.typeCount || (G.splice(l, 1),
                        q.splice(l, 1),
                        n.splice(l, 1))
                    }
                }
            }
            function b() {
                this.returnValue = !1
            }
            function c() {
                this.cancelBubble = !0
            }
            function d() {
                this.immediatePropagationStopped = this.cancelBubble = !0
            }
            var e = "attachEvent"in v && !("addEventListener"in v)
              , k = e ? "attachEvent" : "addEventListener"
              , h = e ? "detachEvent" : "removeEventListener"
              , f = e ? "on" : ""
              , q = []
              , G = []
              , n = [];
            return {
                add: function(a, h, g, l) {
                    var t = y(q, a)
                      , m = G[t];
                    m || (m = {
                        events: {},
                        typeCount: 0
                    },
                    t = q.push(a) - 1,
                    G.push(m),
                    n.push(e ? {
                        supplied: [],
                        wrapped: [],
                        useCount: []
                    } : null));
                    m.events[h] || (m.events[h] = [],
                    m.typeCount++);
                    if (-1 === y(m.events[h], g)) {
                        if (e) {
                            var t = n[t]
                              , p = y(t.supplied, g)
                              , z = t.wrapped[p] || function(e) {
                                e.immediatePropagationStopped || (e.target = e.srcElement,
                                e.currentTarget = a,
                                e.preventDefault = e.preventDefault || b,
                                e.stopPropagation = e.stopPropagation || c,
                                e.stopImmediatePropagation = e.stopImmediatePropagation || d,
                                /mouse|click/.test(e.type) && (e.pageX = e.clientX + Y(a).document.documentElement.scrollLeft,
                                e.pageY = e.clientY + Y(a).document.documentElement.scrollTop),
                                g(e))
                            }
                            ;
                            l = a[k](f + h, z, !!l);
                            -1 === p ? (t.supplied.push(g),
                            t.wrapped.push(z),
                            t.useCount.push(1)) : t.useCount[p]++
                        } else
                            l = a[k](h, g, l || !1);
                        m.events[h].push(g);
                        return l
                    }
                },
                remove: a,
                useAttachEvent: e,
                _elements: q,
                _targets: G,
                _attachedListeners: n
            }
        }(), za = {
            webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
        };
        wa.prototype = {
            getPageXY: function(a, b) {
                return Aa(a, b, this)
            },
            getClientXY: function(a, b) {
                return Ta(a, b, this)
            },
            setEventXY: function(a, b) {
                b = 1 < b.length ? Va(b) : b[0];
                Aa(b, ma, this);
                a.page.x = ma.x;
                a.page.y = ma.y;
                Ta(b, ma, this);
                a.client.x = ma.x;
                a.client.y = ma.y;
                a.timeStamp = (new Date).getTime()
            },
            pointerOver: function(a, b, c) {
                function d(a, b) {
                    a && r(c) && ua(a, c) && !ca(a, c, c) && da(a, c, c) && T(c, b) && (e.push(a),
                    k.push(c))
                }
                if (!this.prepared.name && this.mouse) {
                    var e = []
                      , k = []
                      , h = this.element;
                    this.addPointer(a);
                    !this.target || !ca(this.target, this.element, c) && da(this.target, this.element, c) || (this.element = this.target = null,
                    this.matches = [],
                    this.matchElements = []);
                    var f = D.get(c)
                      , q = f && !ca(f, c, c) && da(f, c, c) && Z(f.getAction(a, b, this, c), f);
                    q && !ia(f, c, q) && (q = null);
                    q ? (this.target = f,
                    this.element = c,
                    this.matches = [],
                    this.matchElements = []) : (D.forEachSelector(d),
                    this.validateSelector(a, b, e, k) ? (this.matches = e,
                    this.matchElements = k,
                    this.pointerHover(a, b, this.matches, this.matchElements),
                    n.add(c, U ? L.move : "mousemove", l.pointerHover)) : this.target && (ba(h, c) ? (this.pointerHover(a, b, this.matches, this.matchElements),
                    n.add(this.element, U ? L.move : "mousemove", l.pointerHover)) : (this.element = this.target = null,
                    this.matches = [],
                    this.matchElements = [])))
                }
            },
            pointerHover: function(a, b, c, d, e, k) {
                c = this.target;
                if (!this.prepared.name && this.mouse) {
                    var h;
                    this.setEventXY(this.curCoords, [a]);
                    e ? h = this.validateSelector(a, b, e, k) : c && (h = Z(c.getAction(this.pointers[0], b, this, this.element), this.target));
                    c && c.options.styleCursor && (c._doc.documentElement.style.cursor = h ? cb(h) : "")
                } else
                    this.prepared.name && this.checkAndPreventDefault(b, c, this.element)
            },
            pointerOut: function(a, b, c) {
                this.prepared.name || (D.get(c) || n.remove(c, U ? L.move : "mousemove", l.pointerHover),
                this.target && this.target.options.styleCursor && !this.interacting() && (this.target._doc.documentElement.style.cursor = ""))
            },
            selectorDown: function(a, b, c, d) {
                function e(a, b, d) {
                    d = la ? d.querySelectorAll(b) : void 0;
                    ua(a, f) && !ca(a, f, c) && da(a, f, c) && T(f, b, d) && (k.matches.push(a),
                    k.matchElements.push(f))
                }
                var k = this
                  , h = n.useAttachEvent ? C({}, b) : b
                  , f = c
                  , q = this.addPointer(a);
                this.holdTimers[q] = setTimeout(function() {
                    k.pointerHold(n.useAttachEvent ? h : a, h, c, d)
                }, H._holdDuration);
                this.pointerIsDown = !0;
                if (this.inertiaStatus.active && this.target.selector)
                    for (; r(f); ) {
                        if (f === this.element && Z(this.target.getAction(a, b, this, this.element), this.target).name === this.prepared.name) {
                            aa(this.inertiaStatus.i);
                            this.inertiaStatus.active = !1;
                            this.collectEventTargets(a, b, c, "down");
                            return
                        }
                        f = N(f)
                    }
                if (!this.interacting()) {
                    this.setEventXY(this.curCoords, [a]);
                    for (this.downEvent = b; r(f) && !g; ) {
                        this.matches = [];
                        this.matchElements = [];
                        D.forEachSelector(e);
                        var g = this.validateSelector(a, b, this.matches, this.matchElements);
                        f = N(f)
                    }
                    if (g)
                        return this.prepared.name = g.name,
                        this.prepared.axis = g.axis,
                        this.prepared.edges = g.edges,
                        this.collectEventTargets(a, b, c, "down"),
                        this.pointerDown(a, b, c, d, g);
                    this.downTimes[q] = (new Date).getTime();
                    this.downTargets[q] = c;
                    qa(this.downPointer, a);
                    ra(this.prevCoords, this.curCoords);
                    this.pointerWasMoved = !1
                }
                this.collectEventTargets(a, b, c, "down")
            },
            pointerDown: function(a, b, c, d, e) {
                if (!e && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name)
                    this.checkAndPreventDefault(b, this.target, this.element);
                else {
                    this.pointerIsDown = !0;
                    this.downEvent = b;
                    var k = this.addPointer(a), h;
                    if (1 < this.pointerIds.length && this.target._element === this.element) {
                        var f = Z(e || this.target.getAction(a, b, this, this.element), this.target);
                        ia(this.target, this.element, f) && (h = f);
                        this.prepared.name = null
                    } else
                        this.prepared.name || (f = D.get(d)) && !ca(f, d, c) && da(f, d, c) && (h = Z(e || f.getAction(a, b, this, d), f, c)) && ia(f, d, h) && (this.target = f,
                        this.element = d);
                    var q = (f = this.target) && f.options;
                    !f || !e && this.prepared.name ? this.inertiaStatus.active && d === this.element && Z(f.getAction(a, b, this, this.element), f).name === this.prepared.name && (aa(this.inertiaStatus.i),
                    this.inertiaStatus.active = !1,
                    this.checkAndPreventDefault(b, f, this.element)) : (h = h || Z(e || f.getAction(a, b, this, d), f, this.element),
                    this.setEventXY(this.startCoords, this.pointers),
                    h && (q.styleCursor && (f._doc.documentElement.style.cursor = cb(h)),
                    this.resizeAxes = "resize" === h.name ? h.axis : null,
                    "gesture" === h && 2 > this.pointerIds.length && (h = null),
                    this.prepared.name = h.name,
                    this.prepared.axis = h.axis,
                    this.prepared.edges = h.edges,
                    this.snapStatus.snappedX = this.snapStatus.snappedY = this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN,
                    this.downTimes[k] = (new Date).getTime(),
                    this.downTargets[k] = c,
                    qa(this.downPointer, a),
                    ra(this.prevCoords, this.startCoords),
                    this.pointerWasMoved = !1,
                    this.checkAndPreventDefault(b, f, this.element)))
                }
            },
            setModifications: function(a, b) {
                var c = this.target
                  , d = !0
                  , e = Ja(c, this.prepared.name) && (!c.options[this.prepared.name].snap.endOnly || b);
                b = Ka(c, this.prepared.name) && (!c.options[this.prepared.name].restrict.endOnly || b);
                e ? this.setSnapping(a) : this.snapStatus.locked = !1;
                b ? this.setRestriction(a) : this.restrictStatus.restricted = !1;
                e && this.snapStatus.locked && !this.snapStatus.changed ? d = b && this.restrictStatus.restricted && this.restrictStatus.changed : b && this.restrictStatus.restricted && !this.restrictStatus.changed && (d = !1);
                return d
            },
            setStartOffsets: function(a, b, c) {
                a = b.getRect(c);
                var d = na(b, c);
                c = b.options[this.prepared.name].snap;
                b = b.options[this.prepared.name].restrict;
                if (a) {
                    this.startOffset.left = this.startCoords.page.x - a.left;
                    this.startOffset.top = this.startCoords.page.y - a.top;
                    this.startOffset.right = a.right - this.startCoords.page.x;
                    this.startOffset.bottom = a.bottom - this.startCoords.page.y;
                    var e = "width"in a ? a.width : a.right - a.left;
                    var k = "height"in a ? a.height : a.bottom - a.top
                } else
                    this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0;
                this.snapOffsets.splice(0);
                d = c && "startCoords" === c.offset ? {
                    x: this.startCoords.page.x - d.x,
                    y: this.startCoords.page.y - d.y
                } : c && c.offset || {
                    x: 0,
                    y: 0
                };
                if (a && c && c.relativePoints && c.relativePoints.length)
                    for (var h = 0; h < c.relativePoints.length; h++)
                        this.snapOffsets.push({
                            x: this.startOffset.left - e * c.relativePoints[h].x + d.x,
                            y: this.startOffset.top - k * c.relativePoints[h].y + d.y
                        });
                else
                    this.snapOffsets.push(d);
                a && b.elementRect ? (this.restrictOffset.left = this.startOffset.left - e * b.elementRect.left,
                this.restrictOffset.top = this.startOffset.top - k * b.elementRect.top,
                this.restrictOffset.right = this.startOffset.right - e * (1 - b.elementRect.right),
                this.restrictOffset.bottom = this.startOffset.bottom - k * (1 - b.elementRect.bottom)) : this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0
            },
            start: function(a, b, c) {
                this.interacting() || !this.pointerIsDown || this.pointerIds.length < ("gesture" === a.name ? 2 : 1) || (-1 === y(w, this) && w.push(this),
                this.prepared.name || this.setEventXY(this.startCoords, this.pointers),
                this.prepared.name = a.name,
                this.prepared.axis = a.axis,
                this.prepared.edges = a.edges,
                this.target = b,
                this.element = c,
                this.setStartOffsets(a.name, b, c),
                this.setModifications(this.startCoords.page),
                this.prevEvent = this[this.prepared.name + "Start"](this.downEvent))
            },
            pointerMove: function(a, b, c, d, e) {
                if (this.inertiaStatus.active) {
                    d = this.inertiaStatus.upCoords.page;
                    var k = this.inertiaStatus.upCoords.client;
                    this.setEventXY(this.curCoords, [{
                        pageX: d.x + this.inertiaStatus.sx,
                        pageY: d.y + this.inertiaStatus.sy,
                        clientX: k.x + this.inertiaStatus.sx,
                        clientY: k.y + this.inertiaStatus.sy
                    }])
                } else
                    this.recordPointer(a),
                    this.setEventXY(this.curCoords, this.pointers);
                d = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y;
                var k = this.mouse ? 0 : y(this.pointerIds, Q(a));
                if (this.pointerIsDown && !this.pointerWasMoved) {
                    var h = this.curCoords.client.x - this.startCoords.client.x;
                    var f = this.curCoords.client.y - this.startCoords.client.y;
                    this.pointerWasMoved = ga(h, f) > Na
                }
                d || this.pointerIsDown && !this.pointerWasMoved || (this.pointerIsDown && clearTimeout(this.holdTimers[k]),
                this.collectEventTargets(a, b, c, "move"));
                if (this.pointerIsDown)
                    if (d && this.pointerWasMoved && !e)
                        this.checkAndPreventDefault(b, this.target, this.element);
                    else if (Qa(this.pointerDelta, this.prevCoords, this.curCoords),
                    this.prepared.name) {
                        if (this.pointerWasMoved && (!this.inertiaStatus.active || a instanceof I && /inertiastart/.test(a.type))) {
                            if (!this.interacting() && (Qa(this.pointerDelta, this.prevCoords, this.curCoords),
                            "drag" === this.prepared.name)) {
                                h = Math.abs(h);
                                f = Math.abs(f);
                                d = this.target.options.drag.axis;
                                var q = h > f ? "x" : h < f ? "y" : "xy";
                                if ("xy" !== q && "xy" !== d && d !== q) {
                                    this.prepared.name = null;
                                    for (var g = c; r(g); ) {
                                        if ((f = D.get(g)) && f !== this.target && !f.options.drag.manualStart && "drag" === f.getAction(this.downPointer, this.downEvent, this, g).name && Ya(q, f)) {
                                            this.prepared.name = "drag";
                                            this.target = f;
                                            this.element = g;
                                            break
                                        }
                                        g = N(g)
                                    }
                                    if (!this.prepared.name) {
                                        var n = this;
                                        f = function(a, b, d) {
                                            d = la ? d.querySelectorAll(b) : void 0;
                                            if (a !== n.target && ua(a, c) && !a.options.drag.manualStart && !ca(a, g, c) && da(a, g, c) && T(g, b, d) && "drag" === a.getAction(n.downPointer, n.downEvent, n, g).name && Ya(q, a) && ia(a, g, "drag"))
                                                return a
                                        }
                                        ;
                                        for (g = c; r(g); ) {
                                            if (h = D.forEachSelector(f)) {
                                                this.prepared.name = "drag";
                                                this.target = h;
                                                this.element = g;
                                                break
                                            }
                                            g = N(g)
                                        }
                                    }
                                }
                            }
                            if ((f = !!this.prepared.name && !this.interacting()) && (this.target.options[this.prepared.name].manualStart || !ia(this.target, this.element, this.prepared))) {
                                this.stop(b);
                                return
                            }
                            if (this.prepared.name && this.target) {
                                f && this.start(this.prepared, this.target, this.element);
                                if (this.setModifications(this.curCoords.page, e) || f)
                                    this.prevEvent = this[this.prepared.name + "Move"](b);
                                this.checkAndPreventDefault(b, this.target, this.element)
                            }
                        }
                        ra(this.prevCoords, this.curCoords);
                        (this.dragging || this.resizing) && this.autoScrollMove(a)
                    }
            },
            dragStart: function(a) {
                var b = new I(this,a,"drag","start",this.element);
                this.dragging = !0;
                this.target.fire(b);
                this.activeDrops.dropzones = [];
                this.activeDrops.elements = [];
                this.activeDrops.rects = [];
                this.dynamicDrop || this.setActiveDrops(this.element);
                a = this.getDropEvents(a, b);
                a.activate && this.fireActiveDrops(a.activate);
                return b
            },
            dragMove: function(a) {
                var b = this.target
                  , c = new I(this,a,"drag","move",this.element)
                  , d = this.getDrop(c, a, this.element);
                this.dropTarget = d.dropzone;
                this.dropElement = d.element;
                a = this.getDropEvents(a, c);
                b.fire(c);
                a.leave && this.prevDropTarget.fire(a.leave);
                a.enter && this.dropTarget.fire(a.enter);
                a.move && this.dropTarget.fire(a.move);
                this.prevDropTarget = this.dropTarget;
                this.prevDropElement = this.dropElement;
                return c
            },
            resizeStart: function(a) {
                a = new I(this,a,"resize","start",this.element);
                if (this.prepared.edges) {
                    var b = this.target.getRect(this.element);
                    if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
                        var c = C({}, this.prepared.edges);
                        c.top = c.top || c.left && !c.bottom;
                        c.left = c.left || c.top && !c.right;
                        c.bottom = c.bottom || c.right && !c.top;
                        c.right = c.right || c.bottom && !c.left;
                        this.prepared._linkedEdges = c
                    } else
                        this.prepared._linkedEdges = null;
                    this.target.options.resize.preserveAspectRatio && (this.resizeStartAspectRatio = b.width / b.height);
                    this.resizeRects = {
                        start: b,
                        current: C({}, b),
                        restricted: C({}, b),
                        previous: C({}, b),
                        delta: {
                            left: 0,
                            right: 0,
                            width: 0,
                            top: 0,
                            bottom: 0,
                            height: 0
                        }
                    };
                    a.rect = this.resizeRects.restricted;
                    a.deltaRect = this.resizeRects.delta
                }
                this.target.fire(a);
                this.resizing = !0;
                return a
            },
            resizeMove: function(a) {
                a = new I(this,a,"resize","move",this.element);
                var b = this.prepared.edges
                  , c = this.target.options.resize.invert
                  , d = "reposition" === c || "negate" === c;
                if (b) {
                    var e = a.dx
                      , k = a.dy
                      , h = this.resizeRects.start
                      , f = this.resizeRects.current
                      , q = this.resizeRects.restricted
                      , g = this.resizeRects.delta
                      , n = C(this.resizeRects.previous, q)
                      , l = b;
                    if (this.target.options.resize.preserveAspectRatio) {
                        var m = this.resizeStartAspectRatio
                          , b = this.prepared._linkedEdges;
                        if (l.left && l.bottom || l.right && l.top)
                            k = -e / m;
                        else if (l.left || l.right)
                            k = e / m;
                        else if (l.top || l.bottom)
                            e = k * m
                    } else if (this.target.options.resize.square)
                        if (b = this.prepared._linkedEdges,
                        l.left && l.bottom || l.right && l.top)
                            k = -e;
                        else if (l.left || l.right)
                            k = e;
                        else if (l.top || l.bottom)
                            e = k;
                    b.top && (f.top += k);
                    b.bottom && (f.bottom += k);
                    b.left && (f.left += e);
                    b.right && (f.right += e);
                    d ? (C(q, f),
                    "reposition" === c && (q.top > q.bottom && (b = q.top,
                    q.top = q.bottom,
                    q.bottom = b),
                    q.left > q.right && (b = q.left,
                    q.left = q.right,
                    q.right = b))) : (q.top = Math.min(f.top, h.bottom),
                    q.bottom = Math.max(f.bottom, h.top),
                    q.left = Math.min(f.left, h.right),
                    q.right = Math.max(f.right, h.left));
                    q.width = q.right - q.left;
                    q.height = q.bottom - q.top;
                    for (var p in q)
                        g[p] = q[p] - n[p];
                    a.edges = this.prepared.edges;
                    a.rect = q;
                    a.deltaRect = g
                }
                this.target.fire(a);
                return a
            },
            gestureStart: function(a) {
                a = new I(this,a,"gesture","start",this.element);
                a.ds = 0;
                this.gesture.startDistance = this.gesture.prevDistance = a.distance;
                this.gesture.startAngle = this.gesture.prevAngle = a.angle;
                this.gesture.scale = 1;
                this.gesturing = !0;
                this.target.fire(a);
                return a
            },
            gestureMove: function(a) {
                if (!this.pointerIds.length)
                    return this.prevEvent;
                a = new I(this,a,"gesture","move",this.element);
                a.ds = a.scale - this.gesture.scale;
                this.target.fire(a);
                this.gesture.prevAngle = a.angle;
                this.gesture.prevDistance = a.distance;
                Infinity === a.scale || null === a.scale || void 0 === a.scale || isNaN(a.scale) || (this.gesture.scale = a.scale);
                return a
            },
            pointerHold: function(a, b, c) {
                this.collectEventTargets(a, b, c, "hold")
            },
            pointerUp: function(a, b, c, d) {
                var e = this.mouse ? 0 : y(this.pointerIds, Q(a));
                clearTimeout(this.holdTimers[e]);
                this.collectEventTargets(a, b, c, "up");
                this.collectEventTargets(a, b, c, "tap");
                this.pointerEnd(a, b, c, d);
                this.removePointer(a)
            },
            pointerCancel: function(a, b, c, d) {
                var e = this.mouse ? 0 : y(this.pointerIds, Q(a));
                clearTimeout(this.holdTimers[e]);
                this.collectEventTargets(a, b, c, "cancel");
                this.pointerEnd(a, b, c, d);
                this.removePointer(a)
            },
            ie8Dblclick: function(a, b, c) {
                this.prevTap && b.clientX === this.prevTap.clientX && b.clientY === this.prevTap.clientY && c === this.prevTap.target && (this.downTargets[0] = c,
                this.downTimes[0] = (new Date).getTime(),
                this.collectEventTargets(a, b, c, "tap"))
            },
            pointerEnd: function(a, b, c, d) {
                var e = this.target
                  , k = e && e.options
                  , h = k && this.prepared.name && k[this.prepared.name].inertia;
                var f = this.inertiaStatus;
                if (this.interacting()) {
                    if (f.active && !f.ending)
                        return;
                    var q = (new Date).getTime(), g, l = !1, n = Ja(e, this.prepared.name) && k[this.prepared.name].snap.endOnly, m = Ka(e, this.prepared.name) && k[this.prepared.name].restrict.endOnly, p = 0, r = 0, k = this.dragging ? "x" === k.drag.axis ? Math.abs(this.pointerDelta.client.vx) : "y" === k.drag.axis ? Math.abs(this.pointerDelta.client.vy) : this.pointerDelta.client.speed : this.pointerDelta.client.speed, h = (g = h && h.enabled && "gesture" !== this.prepared.name && b !== f.startEvent) && 50 > q - this.curCoords.timeStamp && k > h.minSpeed && k > h.endSpeed;
                    g && !h && (n || m) && (g = {},
                    g.snap = g.restrict = g,
                    n && (this.setSnapping(this.curCoords.page, g),
                    g.locked && (p += g.dx,
                    r += g.dy)),
                    m && (this.setRestriction(this.curCoords.page, g),
                    g.restricted && (p += g.dx,
                    r += g.dy)),
                    p || r) && (l = !0);
                    if (h || l) {
                        ra(f.upCoords, this.curCoords);
                        this.pointers[0] = f.startEvent = new I(this,b,this.prepared.name,"inertiastart",this.element);
                        f.t0 = q;
                        e.fire(f.startEvent);
                        h ? (f.vx0 = this.pointerDelta.client.vx,
                        f.vy0 = this.pointerDelta.client.vy,
                        f.v0 = k,
                        this.calcInertia(f),
                        b = C({}, this.curCoords.page),
                        e = na(e, this.element),
                        b.x = b.x + f.xe - e.x,
                        b.y = b.y + f.ye - e.y,
                        e = {
                            useStatusXY: !0,
                            x: b.x,
                            y: b.y,
                            dx: 0,
                            dy: 0,
                            snap: null
                        },
                        e.snap = e,
                        p = r = 0,
                        n && (b = this.setSnapping(this.curCoords.page, e),
                        b.locked && (p += b.dx,
                        r += b.dy)),
                        m && (e = this.setRestriction(this.curCoords.page, e),
                        e.restricted && (p += e.dx,
                        r += e.dy)),
                        f.modifiedXe += p,
                        f.modifiedYe += r,
                        f.i = W(this.boundInertiaFrame)) : (f.smoothEnd = !0,
                        f.xe = p,
                        f.ye = r,
                        f.sx = f.sy = 0,
                        f.i = W(this.boundSmoothEndFrame));
                        f.active = !0;
                        return
                    }
                    (n || m) && this.pointerMove(a, b, c, d, !0)
                }
                this.dragging ? (f = new I(this,b,"drag","end",this.element),
                m = this.getDrop(f, b, this.element),
                this.dropTarget = m.dropzone,
                this.dropElement = m.element,
                m = this.getDropEvents(b, f),
                m.leave && this.prevDropTarget.fire(m.leave),
                m.enter && this.dropTarget.fire(m.enter),
                m.drop && this.dropTarget.fire(m.drop),
                m.deactivate && this.fireActiveDrops(m.deactivate),
                e.fire(f)) : this.resizing ? (f = new I(this,b,"resize","end",this.element),
                e.fire(f)) : this.gesturing && (f = new I(this,b,"gesture","end",this.element),
                e.fire(f));
                this.stop(b)
            },
            collectDrops: function(a) {
                var b = [], c = [], d;
                a = a || this.element;
                for (d = 0; d < D.length; d++)
                    if (D[d].options.drop.enabled) {
                        var e = D[d]
                          , k = e.options.drop.accept;
                        if (!(r(k) && k !== a || P(k) && !T(a, k)))
                            for (var k = e.selector ? e._context.querySelectorAll(e.selector) : [e._element], h = 0, f = k.length; h < f; h++) {
                                var g = k[h];
                                g !== a && (b.push(e),
                                c.push(g))
                            }
                    }
                return {
                    dropzones: b,
                    elements: c
                }
            },
            fireActiveDrops: function(a) {
                var b;
                for (b = 0; b < this.activeDrops.dropzones.length; b++) {
                    var c = this.activeDrops.dropzones[b];
                    var d = this.activeDrops.elements[b];
                    d !== e && (a.target = d,
                    c.fire(a));
                    var e = d
                }
            },
            setActiveDrops: function(a) {
                a = this.collectDrops(a, !0);
                this.activeDrops.dropzones = a.dropzones;
                this.activeDrops.elements = a.elements;
                this.activeDrops.rects = [];
                for (a = 0; a < this.activeDrops.dropzones.length; a++)
                    this.activeDrops.rects[a] = this.activeDrops.dropzones[a].getRect(this.activeDrops.elements[a])
            },
            getDrop: function(a, b, c) {
                var d = [];
                Ma && this.setActiveDrops(c);
                for (var e = 0; e < this.activeDrops.dropzones.length; e++) {
                    var k = this.activeDrops.elements[e];
                    d.push(this.activeDrops.dropzones[e].dropCheck(a, b, this.target, c, k, this.activeDrops.rects[e]) ? k : null)
                }
                c = (b = d[0]) ? 0 : -1;
                for (var h, e = [], f, k = 1; k < d.length; k++)
                    if ((a = d[k]) && a !== b)
                        if (!b)
                            b = a,
                            c = k;
                        else if (a.parentNode !== a.ownerDocument)
                            if (b.parentNode === a.ownerDocument)
                                b = a,
                                c = k;
                            else {
                                if (!e.length)
                                    for (h = b; h.parentNode && h.parentNode !== h.ownerDocument; )
                                        e.unshift(h),
                                        h = h.parentNode;
                                if (b instanceof nb && a instanceof Ua && !(a instanceof mb)) {
                                    if (a === b.parentNode)
                                        continue;
                                    h = a.ownerSVGElement
                                } else
                                    h = a;
                                for (f = []; h.parentNode !== h.ownerDocument; )
                                    f.unshift(h),
                                    h = h.parentNode;
                                for (h = 0; f[h] && f[h] === e[h]; )
                                    h++;
                                h = [f[h - 1], f[h], e[h]];
                                for (f = h[0].lastChild; f; ) {
                                    if (f === h[1]) {
                                        b = a;
                                        c = k;
                                        e = [];
                                        break
                                    } else if (f === h[2])
                                        break;
                                    f = f.previousSibling
                                }
                            }
                d = c;
                return {
                    dropzone: this.activeDrops.dropzones[d] || null,
                    element: this.activeDrops.elements[d] || null
                }
            },
            getDropEvents: function(a, b) {
                a = {
                    enter: null,
                    leave: null,
                    activate: null,
                    deactivate: null,
                    move: null,
                    drop: null
                };
                this.dropElement !== this.prevDropElement && (this.prevDropTarget && (a.leave = {
                    target: this.prevDropElement,
                    dropzone: this.prevDropTarget,
                    relatedTarget: b.target,
                    draggable: b.interactable,
                    dragEvent: b,
                    interaction: this,
                    timeStamp: b.timeStamp,
                    type: "dragleave"
                },
                b.dragLeave = this.prevDropElement,
                b.prevDropzone = this.prevDropTarget),
                this.dropTarget && (a.enter = {
                    target: this.dropElement,
                    dropzone: this.dropTarget,
                    relatedTarget: b.target,
                    draggable: b.interactable,
                    dragEvent: b,
                    interaction: this,
                    timeStamp: b.timeStamp,
                    type: "dragenter"
                },
                b.dragEnter = this.dropElement,
                b.dropzone = this.dropTarget));
                "dragend" === b.type && this.dropTarget && (a.drop = {
                    target: this.dropElement,
                    dropzone: this.dropTarget,
                    relatedTarget: b.target,
                    draggable: b.interactable,
                    dragEvent: b,
                    interaction: this,
                    timeStamp: b.timeStamp,
                    type: "drop"
                },
                b.dropzone = this.dropTarget);
                "dragstart" === b.type && (a.activate = {
                    target: null,
                    dropzone: null,
                    relatedTarget: b.target,
                    draggable: b.interactable,
                    dragEvent: b,
                    interaction: this,
                    timeStamp: b.timeStamp,
                    type: "dropactivate"
                });
                "dragend" === b.type && (a.deactivate = {
                    target: null,
                    dropzone: null,
                    relatedTarget: b.target,
                    draggable: b.interactable,
                    dragEvent: b,
                    interaction: this,
                    timeStamp: b.timeStamp,
                    type: "dropdeactivate"
                });
                "dragmove" === b.type && this.dropTarget && (a.move = {
                    target: this.dropElement,
                    dropzone: this.dropTarget,
                    relatedTarget: b.target,
                    draggable: b.interactable,
                    dragEvent: b,
                    interaction: this,
                    dragmove: b,
                    timeStamp: b.timeStamp,
                    type: "dropmove"
                },
                b.dropzone = this.dropTarget);
                return a
            },
            currentAction: function() {
                return this.dragging && "drag" || this.resizing && "resize" || this.gesturing && "gesture" || null
            },
            interacting: function() {
                return this.dragging || this.resizing || this.gesturing
            },
            clearTargets: function() {
                this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = this.target = this.element = null
            },
            stop: function(a) {
                if (this.interacting()) {
                    g.stop();
                    this.matches = [];
                    this.matchElements = [];
                    var b = this.target;
                    b.options.styleCursor && (b._doc.documentElement.style.cursor = "");
                    a && x(a.preventDefault) && this.checkAndPreventDefault(a, b, this.element);
                    this.dragging && (this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null)
                }
                this.clearTargets();
                this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = !1;
                this.prepared.name = this.prevEvent = null;
                for (a = this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0; a < this.pointers.length; a++)
                    -1 === y(this.pointerIds, Q(this.pointers[a])) && this.pointers.splice(a, 1)
            },
            inertiaFrame: function() {
                var a = this.inertiaStatus;
                var b = this.target.options[this.prepared.name].inertia.resistance;
                var c = (new Date).getTime() / 1E3 - a.t0;
                if (c < a.te) {
                    c = 1 - (Math.exp(-b * c) - a.lambda_v0) / a.one_ve_v0;
                    if (a.modifiedXe === a.xe && a.modifiedYe === a.ye)
                        a.sx = a.xe * c,
                        a.sy = a.ye * c;
                    else {
                        var d = a.ye
                          , e = a.modifiedYe;
                        b = Wa(c, 0, a.xe, a.modifiedXe);
                        c = Wa(c, 0, d, e);
                        a.sx = b;
                        a.sy = c
                    }
                    this.pointerMove(a.startEvent, a.startEvent);
                    a.i = W(this.boundInertiaFrame)
                } else
                    a.ending = !0,
                    a.sx = a.modifiedXe,
                    a.sy = a.modifiedYe,
                    this.pointerMove(a.startEvent, a.startEvent),
                    this.pointerEnd(a.startEvent, a.startEvent),
                    a.active = a.ending = !1
            },
            smoothEndFrame: function() {
                var a = this.inertiaStatus
                  , b = (new Date).getTime() - a.t0
                  , c = this.target.options[this.prepared.name].inertia.smoothEndDuration;
                if (b < c) {
                    var d = b / c;
                    a.sx = -a.xe * d * (d - 2) + 0;
                    b /= c;
                    a.sy = -a.ye * b * (b - 2) + 0;
                    this.pointerMove(a.startEvent, a.startEvent);
                    a.i = W(this.boundSmoothEndFrame)
                } else
                    a.ending = !0,
                    a.sx = a.xe,
                    a.sy = a.ye,
                    this.pointerMove(a.startEvent, a.startEvent),
                    this.pointerEnd(a.startEvent, a.startEvent),
                    a.smoothEnd = a.active = a.ending = !1
            },
            addPointer: function(a) {
                var b = Q(a)
                  , c = this.mouse ? 0 : y(this.pointerIds, b);
                -1 === c && (c = this.pointerIds.length);
                this.pointerIds[c] = b;
                this.pointers[c] = a;
                return c
            },
            removePointer: function(a) {
                a = Q(a);
                a = this.mouse ? 0 : y(this.pointerIds, a);
                -1 !== a && (this.pointers.splice(a, 1),
                this.pointerIds.splice(a, 1),
                this.downTargets.splice(a, 1),
                this.downTimes.splice(a, 1),
                this.holdTimers.splice(a, 1))
            },
            recordPointer: function(a) {
                var b = this.mouse ? 0 : y(this.pointerIds, Q(a));
                -1 !== b && (this.pointers[b] = a)
            },
            collectEventTargets: function(a, b, c, d) {
                function e(a, b, e) {
                    e = la ? e.querySelectorAll(b) : void 0;
                    a._iEvents[d] && r(g) && ua(a, g) && !ca(a, g, c) && da(a, g, c) && T(g, b, e) && (h.push(a),
                    f.push(g))
                }
                var k = this.mouse ? 0 : y(this.pointerIds, Q(a));
                if ("tap" !== d || !this.pointerWasMoved && this.downTargets[k] && this.downTargets[k] === c) {
                    for (var h = [], f = [], g = c; g; )
                        p.isSet(g) && p(g)._iEvents[d] && (h.push(p(g)),
                        f.push(g)),
                        D.forEachSelector(e),
                        g = N(g);
                    (h.length || "tap" === d) && this.firePointers(a, b, c, h, f, d)
                }
            },
            firePointers: function(a, b, c, d, e, k) {
                var h = this.mouse ? 0 : y(this.pointerIds, Q(a))
                  , f = {};
                "doubletap" === k ? f = a : (qa(f, b),
                b !== a && qa(f, a),
                f.preventDefault = bb,
                f.stopPropagation = I.prototype.stopPropagation,
                f.stopImmediatePropagation = I.prototype.stopImmediatePropagation,
                f.interaction = this,
                f.timeStamp = (new Date).getTime(),
                f.originalEvent = b,
                f.originalPointer = a,
                f.type = k,
                f.pointerId = Q(a),
                f.pointerType = this.mouse ? "mouse" : U ? P(a.pointerType) ? a.pointerType : [, , "touch", "pen", "mouse"][a.pointerType] : "touch");
                if ("tap" === k) {
                    f.dt = f.timeStamp - this.downTimes[h];
                    var g = f.timeStamp - this.tapTime;
                    var l = !!(this.prevTap && "doubletap" !== this.prevTap.type && this.prevTap.target === f.target && 500 > g);
                    f.double = l;
                    this.tapTime = f.timeStamp
                }
                for (a = 0; a < d.length && !(f.currentTarget = e[a],
                f.interactable = d[a],
                d[a].fire(f),
                f.immediatePropagationStopped || f.propagationStopped && e[a + 1] !== f.currentTarget); a++)
                    ;
                l ? (d = {},
                C(d, f),
                d.dt = g,
                d.type = "doubletap",
                this.collectEventTargets(d, b, c, "doubletap"),
                this.prevTap = d) : "tap" === k && (this.prevTap = f)
            },
            validateSelector: function(a, b, c, d) {
                for (var e = 0, k = c.length; e < k; e++) {
                    var h = c[e]
                      , f = d[e]
                      , g = Z(h.getAction(a, b, this, f), h);
                    if (g && ia(h, f, g))
                        return this.target = h,
                        this.element = f,
                        g
                }
            },
            setSnapping: function(a, b) {
                var c = this.target.options[this.prepared.name].snap, d = [], e;
                b = b || this.snapStatus;
                if (b.useStatusXY)
                    a = {
                        x: b.x,
                        y: b.y
                    };
                else {
                    var k = na(this.target, this.element);
                    a = C({}, a);
                    a.x -= k.x;
                    a.y -= k.y
                }
                b.realX = a.x;
                b.realY = a.y;
                a.x -= this.inertiaStatus.resumeDx;
                a.y -= this.inertiaStatus.resumeDy;
                for (var h = c.targets ? c.targets.length : 0, f = 0; f < this.snapOffsets.length; f++) {
                    var g = a.x - this.snapOffsets[f].x
                      , l = a.y - this.snapOffsets[f].y;
                    for (e = 0; e < h; e++)
                        (k = x(c.targets[e]) ? c.targets[e](g, l, this) : c.targets[e]) && d.push({
                            x: F(k.x) ? k.x + this.snapOffsets[f].x : g,
                            y: F(k.y) ? k.y + this.snapOffsets[f].y : l,
                            range: F(k.range) ? k.range : c.range
                        })
                }
                var c = null
                  , f = !1
                  , m = 0
                  , n = 0;
                e = l = g = 0;
                for (h = d.length; e < h; e++) {
                    k = d[e];
                    var p = k.range
                      , r = k.x - a.x
                      , u = k.y - a.y
                      , v = ga(r, u)
                      , w = v <= p;
                    Infinity === p && f && Infinity !== n && (w = !1);
                    if (!c || (w ? f && Infinity !== p ? v / p < m / n : Infinity === p && Infinity !== n || v < m : !f && v < m))
                        Infinity === p && (w = !0),
                        c = k,
                        m = v,
                        n = p,
                        f = w,
                        g = r,
                        l = u,
                        b.range = p
                }
                c ? (d = b.snappedX !== c.x || b.snappedY !== c.y,
                b.snappedX = c.x,
                b.snappedY = c.y) : (d = !0,
                b.snappedX = NaN,
                b.snappedY = NaN);
                b.dx = g;
                b.dy = l;
                b.changed = d || f && !b.locked;
                b.locked = f;
                return b
            },
            setRestriction: function(a, b) {
                var c = this.target
                  , d = c && c.options[this.prepared.name].restrict
                  , e = d && d.restriction;
                if (!e)
                    return b;
                b = b || this.restrictStatus;
                d = b.useStatusXY ? d = {
                    x: b.x,
                    y: b.y
                } : d = C({}, a);
                b.snap && b.snap.locked && (d.x += b.snap.dx || 0,
                d.y += b.snap.dy || 0);
                d.x -= this.inertiaStatus.resumeDx;
                d.y -= this.inertiaStatus.resumeDy;
                b.dx = 0;
                b.dy = 0;
                b.restricted = !1;
                if (P(e) && (e = "parent" === e ? N(this.element) : "self" === e ? c.getRect(this.element) : Ha(this.element, e),
                !e))
                    return b;
                x(e) && (e = e(d.x, d.y, this.element));
                r(e) && (e = ta(e));
                (a = e) ? "x"in e && "y"in e ? (c = Math.max(Math.min(a.x + a.width - this.restrictOffset.right, d.x), a.x + this.restrictOffset.left),
                a = Math.max(Math.min(a.y + a.height - this.restrictOffset.bottom, d.y), a.y + this.restrictOffset.top)) : (c = Math.max(Math.min(a.right - this.restrictOffset.right, d.x), a.left + this.restrictOffset.left),
                a = Math.max(Math.min(a.bottom - this.restrictOffset.bottom, d.y), a.top + this.restrictOffset.top)) : (c = d.x,
                a = d.y);
                b.dx = c - d.x;
                b.dy = a - d.y;
                b.changed = b.restrictedX !== c || b.restrictedY !== a;
                b.restricted = !(!b.dx && !b.dy);
                b.restrictedX = c;
                b.restrictedY = a;
                return b
            },
            checkAndPreventDefault: function(a, b, c) {
                if (b = b || this.target) {
                    b = b.options;
                    var d = b.preventDefault;
                    "auto" === d && c && !/^(input|select|textarea)$/i.test(a.target.nodeName) ? /down|start/i.test(a.type) && "drag" === this.prepared.name && "xy" !== b.drag.axis || b[this.prepared.name] && b[this.prepared.name].manualStart && !this.interacting() || a.preventDefault() : "always" === d && a.preventDefault()
                }
            },
            calcInertia: function(a) {
                var b = this.target.options[this.prepared.name].inertia
                  , c = b.resistance
                  , d = -Math.log(b.endSpeed / a.v0) / c;
                a.x0 = this.prevEvent.pageX;
                a.y0 = this.prevEvent.pageY;
                a.t0 = a.startEvent.timeStamp / 1E3;
                a.sx = a.sy = 0;
                a.modifiedXe = a.xe = (a.vx0 - d) / c;
                a.modifiedYe = a.ye = (a.vy0 - d) / c;
                a.te = d;
                a.lambda_v0 = c / a.v0;
                a.one_ve_v0 = 1 - b.endSpeed / a.v0
            },
            autoScrollMove: function(a) {
                var b;
                if (b = this.interacting()) {
                    b = this.prepared.name;
                    var c = this.target.options;
                    /^resize/.test(b) && (b = "resize");
                    b = c[b].autoScroll && c[b].autoScroll.enabled
                }
                if (b)
                    if (this.inertiaStatus.active)
                        g.x = g.y = 0;
                    else {
                        var d = this.target.options[this.prepared.name].autoScroll
                          , e = d.container || Y(this.element);
                        if (M(e)) {
                            var k = a.clientX < g.margin;
                            b = a.clientY < g.margin;
                            c = a.clientX > e.innerWidth - g.margin;
                            a = a.clientY > e.innerHeight - g.margin
                        } else
                            e = Ca(e),
                            k = a.clientX < e.left + g.margin,
                            b = a.clientY < e.top + g.margin,
                            c = a.clientX > e.right - g.margin,
                            a = a.clientY > e.bottom - g.margin;
                        g.x = c ? 1 : k ? -1 : 0;
                        g.y = a ? 1 : b ? -1 : 0;
                        g.isScrolling || (g.margin = d.margin,
                        g.speed = d.speed,
                        g.start(this))
                    }
            },
            _updateEventTargets: function(a, b) {
                this._eventTarget = a;
                this._curEventTarget = b
            }
        };
        I.prototype = {
            preventDefault: J,
            stopImmediatePropagation: function() {
                this.immediatePropagationStopped = this.propagationStopped = !0
            },
            stopPropagation: function() {
                this.propagationStopped = !0
            }
        };
        for (var l = {}, ib = "dragStart dragMove resizeStart resizeMove gestureStart gestureMove pointerOver pointerOut pointerHover selectorDown pointerDown pointerMove pointerUp pointerCancel pointerEnd addPointer removePointer recordPointer autoScrollMove".split(" "), Oa = 0, Pa = ib.length; Oa < Pa; Oa++) {
            var jb = ib[Oa];
            l[jb] = $a(jb)
        }
        D.indexOfElement = function(a, b) {
            b = b || S;
            for (var c = 0; c < this.length; c++) {
                var d = this[c];
                if (d.selector === a && d._context === b || !d.selector && d._element === a)
                    return c
            }
            return -1
        }
        ;
        D.get = function(a, b) {
            return this[this.indexOfElement(a, b && b.context)]
        }
        ;
        D.forEachSelector = function(a) {
            for (var b = 0; b < this.length; b++) {
                var c = this[b];
                if (c.selector && (c = a(c, c.selector, c._context, b, this),
                void 0 !== c))
                    return c
            }
        }
        ;
        E.prototype = {
            setOnEvents: function(a, b) {
                "drop" === a ? (x(b.ondrop) && (this.ondrop = b.ondrop),
                x(b.ondropactivate) && (this.ondropactivate = b.ondropactivate),
                x(b.ondropdeactivate) && (this.ondropdeactivate = b.ondropdeactivate),
                x(b.ondragenter) && (this.ondragenter = b.ondragenter),
                x(b.ondragleave) && (this.ondragleave = b.ondragleave),
                x(b.ondropmove) && (this.ondropmove = b.ondropmove)) : (a = "on" + a,
                x(b.onstart) && (this[a + "start"] = b.onstart),
                x(b.onmove) && (this[a + "move"] = b.onmove),
                x(b.onend) && (this[a + "end"] = b.onend),
                x(b.oninertiastart) && (this[a + "inertiastart"] = b.oninertiastart));
                return this
            },
            draggable: function(a) {
                return u(a) ? (this.options.drag.enabled = !1 === a.enabled ? !1 : !0,
                this.setPerAction("drag", a),
                this.setOnEvents("drag", a),
                /^x$|^y$|^xy$/.test(a.axis) ? this.options.drag.axis = a.axis : null === a.axis && delete this.options.drag.axis,
                this) : K(a) ? (this.options.drag.enabled = a,
                this) : this.options.drag
            },
            setPerAction: function(a, b) {
                for (var c in b)
                    c in H[a] && (u(b[c]) ? (this.options[a][c] = C(this.options[a][c] || {}, b[c]),
                    u(H.perAction[c]) && "enabled"in H.perAction[c] && (this.options[a][c].enabled = !1 === b[c].enabled ? !1 : !0)) : K(b[c]) && u(H.perAction[c]) ? this.options[a][c].enabled = b[c] : void 0 !== b[c] && (this.options[a][c] = b[c]))
            },
            dropzone: function(a) {
                return u(a) ? (this.options.drop.enabled = !1 === a.enabled ? !1 : !0,
                this.setOnEvents("drop", a),
                /^(pointer|center)$/.test(a.overlap) ? this.options.drop.overlap = a.overlap : F(a.overlap) && (this.options.drop.overlap = Math.max(Math.min(1, a.overlap), 0)),
                "accept"in a && (this.options.drop.accept = a.accept),
                "checker"in a && (this.options.drop.checker = a.checker),
                this) : K(a) ? (this.options.drop.enabled = a,
                this) : this.options.drop
            },
            dropCheck: function(a, b, c, d, e, k) {
                var h = !1;
                if (!(k = k || this.getRect(e)))
                    return this.options.drop.checker ? this.options.drop.checker(a, b, h, this, e, c, d) : !1;
                var f = this.options.drop.overlap;
                if ("pointer" === f) {
                    var g = Aa(a)
                      , h = na(c, d);
                    g.x += h.x;
                    g.y += h.y;
                    h = g.x > k.left && g.x < k.right;
                    g = g.y > k.top && g.y < k.bottom;
                    h = h && g
                }
                g = c.getRect(d);
                if ("center" === f)
                    var h = g.left + g.width / 2
                      , l = g.top + g.height / 2
                      , h = h >= k.left && h <= k.right && l >= k.top && l <= k.bottom;
                F(f) && (h = Math.max(0, Math.min(k.right, g.right) - Math.max(k.left, g.left)) * Math.max(0, Math.min(k.bottom, g.bottom) - Math.max(k.top, g.top)) / (g.width * g.height) >= f);
                this.options.drop.checker && (h = this.options.drop.checker(a, b, h, this, e, c, d));
                return h
            },
            dropChecker: function(a) {
                return x(a) ? (this.options.drop.checker = a,
                this) : null === a ? (delete this.options.getRect,
                this) : this.options.drop.checker
            },
            accept: function(a) {
                return r(a) || fa(a) ? (this.options.drop.accept = a,
                this) : null === a ? (delete this.options.drop.accept,
                this) : this.options.drop.accept
            },
            resizable: function(a) {
                return u(a) ? (this.options.resize.enabled = !1 === a.enabled ? !1 : !0,
                this.setPerAction("resize", a),
                this.setOnEvents("resize", a),
                /^x$|^y$|^xy$/.test(a.axis) ? this.options.resize.axis = a.axis : null === a.axis && (this.options.resize.axis = H.resize.axis),
                K(a.preserveAspectRatio) ? this.options.resize.preserveAspectRatio = a.preserveAspectRatio : K(a.square) && (this.options.resize.square = a.square),
                this) : K(a) ? (this.options.resize.enabled = a,
                this) : this.options.resize
            },
            squareResize: function(a) {
                return K(a) ? (this.options.resize.square = a,
                this) : null === a ? (delete this.options.resize.square,
                this) : this.options.resize.square
            },
            gesturable: function(a) {
                return u(a) ? (this.options.gesture.enabled = !1 === a.enabled ? !1 : !0,
                this.setPerAction("gesture", a),
                this.setOnEvents("gesture", a),
                this) : K(a) ? (this.options.gesture.enabled = a,
                this) : this.options.gesture
            },
            autoScroll: function(a) {
                u(a) ? a = C({
                    actions: ["drag", "resize"]
                }, a) : K(a) && (a = {
                    actions: ["drag", "resize"],
                    enabled: a
                });
                return this.setOptions("autoScroll", a)
            },
            snap: function(a) {
                a = this.setOptions("snap", a);
                return a === this ? this : a.drag
            },
            setOptions: function(a, b) {
                var c = b && B(b.actions) ? b.actions : ["drag"], d;
                if (u(b) || K(b)) {
                    for (d = 0; d < c.length; d++) {
                        var e = /resize/.test(c[d]) ? "resize" : c[d];
                        u(this.options[e]) && (e = this.options[e][a],
                        u(b) ? (C(e, b),
                        e.enabled = !1 === b.enabled ? !1 : !0,
                        "snap" === a && ("grid" === e.mode ? e.targets = [p.createSnapGrid(C({
                            offset: e.gridOffset || {
                                x: 0,
                                y: 0
                            }
                        }, e.grid || {}))] : "anchor" === e.mode ? e.targets = e.anchors : "path" === e.mode && (e.targets = e.paths),
                        "elementOrigin"in b && (e.relativePoints = [b.elementOrigin]))) : K(b) && (e.enabled = b))
                    }
                    return this
                }
                b = {};
                c = ["drag", "resize", "gesture"];
                for (d = 0; d < c.length; d++)
                    a in H[c[d]] && (b[c[d]] = this.options[c[d]][a]);
                return b
            },
            inertia: function(a) {
                a = this.setOptions("inertia", a);
                return a === this ? this : a.drag
            },
            getAction: function(a, b, c, d) {
                var e = this.defaultActionChecker(a, c, d);
                return this.options.actionChecker ? this.options.actionChecker(a, b, e, this, d, c) : e
            },
            defaultActionChecker: db,
            actionChecker: function(a) {
                return x(a) ? (this.options.actionChecker = a,
                this) : null === a ? (delete this.options.actionChecker,
                this) : this.options.actionChecker
            },
            getRect: function(a) {
                a = a || this._element;
                this.selector && !r(a) && (a = this._context.querySelector(this.selector));
                return ta(a)
            },
            rectChecker: function(a) {
                return x(a) ? (this.getRect = a,
                this) : null === a ? (delete this.options.getRect,
                this) : this.getRect
            },
            styleCursor: function(a) {
                return K(a) ? (this.options.styleCursor = a,
                this) : null === a ? (delete this.options.styleCursor,
                this) : this.options.styleCursor
            },
            preventDefault: function(a) {
                return /^(always|never|auto)$/.test(a) ? (this.options.preventDefault = a,
                this) : K(a) ? (this.options.preventDefault = a ? "always" : "never",
                this) : this.options.preventDefault
            },
            origin: function(a) {
                return fa(a) || u(a) ? (this.options.origin = a,
                this) : this.options.origin
            },
            deltaSource: function(a) {
                return "page" === a || "client" === a ? (this.options.deltaSource = a,
                this) : this.options.deltaSource
            },
            restrict: function(a) {
                if (!u(a))
                    return this.setOptions("restrict", a);
                for (var b = ["drag", "resize", "gesture"], c, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e in a && (c = C({
                        actions: [e],
                        restriction: a[e]
                    }, a),
                    c = this.setOptions("restrict", c))
                }
                return c
            },
            context: function() {
                return this._context
            },
            _context: S,
            ignoreFrom: function(a) {
                return fa(a) || r(a) ? (this.options.ignoreFrom = a,
                this) : this.options.ignoreFrom
            },
            allowFrom: function(a) {
                return fa(a) || r(a) ? (this.options.allowFrom = a,
                this) : this.options.allowFrom
            },
            element: function() {
                return this._element
            },
            fire: function(a) {
                if (!a || !a.type || -1 === y(ea, a.type))
                    return this;
                var b, c = "on" + a.type;
                if (a.type in this._iEvents) {
                    var d = this._iEvents[a.type];
                    var e = 0;
                    for (b = d.length; e < b && !a.immediatePropagationStopped; e++)
                        d[e](a)
                }
                if (x(this[c]))
                    this[c](a);
                if (a.type in X && (d = X[a.type]))
                    for (e = 0,
                    b = d.length; e < b && !a.immediatePropagationStopped; e++)
                        d[e](a);
                return this
            },
            on: function(a, b, c) {
                var d;
                P(a) && -1 !== a.search(" ") && (a = a.trim().split(/ +/));
                if (B(a)) {
                    for (d = 0; d < a.length; d++)
                        this.on(a[d], b, c);
                    return this
                }
                if (u(a)) {
                    for (d in a)
                        this.on(d, a[d], b);
                    return this
                }
                "wheel" === a && (a = hb);
                c = c ? !0 : !1;
                if (-1 !== y(ea, a))
                    a in this._iEvents ? this._iEvents[a].push(b) : this._iEvents[a] = [b];
                else if (this.selector) {
                    if (!R[a])
                        for (R[a] = {
                            selectors: [],
                            contexts: [],
                            listeners: []
                        },
                        d = 0; d < ka.length; d++)
                            n.add(ka[d], a, pa),
                            n.add(ka[d], a, ya, !0);
                    a = R[a];
                    for (d = a.selectors.length - 1; 0 <= d && (a.selectors[d] !== this.selector || a.contexts[d] !== this._context); d--)
                        ;
                    -1 === d && (d = a.selectors.length,
                    a.selectors.push(this.selector),
                    a.contexts.push(this._context),
                    a.listeners.push([]));
                    a.listeners[d].push([b, c])
                } else
                    n.add(this._element, a, b, c);
                return this
            },
            off: function(a, b, c) {
                var d;
                P(a) && -1 !== a.search(" ") && (a = a.trim().split(/ +/));
                if (B(a)) {
                    for (d = 0; d < a.length; d++)
                        this.off(a[d], b, c);
                    return this
                }
                if (u(a)) {
                    for (var e in a)
                        this.off(e, a[e], b);
                    return this
                }
                e = -1;
                c = c ? !0 : !1;
                "wheel" === a && (a = hb);
                if (-1 !== y(ea, a))
                    (c = this._iEvents[a]) && -1 !== (e = y(c, b)) && this._iEvents[a].splice(e, 1);
                else if (this.selector) {
                    var g = R[a]
                      , h = !1;
                    if (!g)
                        return this;
                    for (e = g.selectors.length - 1; 0 <= e; e--)
                        if (g.selectors[e] === this.selector && g.contexts[e] === this._context) {
                            var f = g.listeners[e];
                            for (d = f.length - 1; 0 <= d; d--) {
                                var l = f[d][1];
                                if (f[d][0] === b && l === c) {
                                    f.splice(d, 1);
                                    f.length || (g.selectors.splice(e, 1),
                                    g.contexts.splice(e, 1),
                                    g.listeners.splice(e, 1),
                                    n.remove(this._context, a, pa),
                                    n.remove(this._context, a, ya, !0),
                                    g.selectors.length || (R[a] = null));
                                    h = !0;
                                    break
                                }
                            }
                            if (h)
                                break
                        }
                } else
                    n.remove(this._element, a, b, c);
                return this
            },
            set: function(a) {
                u(a) || (a = {});
                this.options = C({}, H.base);
                var b, c = ["drag", "drop", "resize", "gesture"], d = ["draggable", "dropzone", "resizable", "gesturable"], e = C(C({}, H.perAction), a[g] || {});
                for (b = 0; b < c.length; b++) {
                    var g = c[b];
                    this.options[g] = C({}, H[g]);
                    this.setPerAction(g, e);
                    this[d[b]](a[g])
                }
                g = "accept actionChecker allowFrom deltaSource dropChecker ignoreFrom origin preventDefault rectChecker styleCursor".split(" ");
                b = 0;
                for (Pa = g.length; b < Pa; b++)
                    if (c = g[b],
                    this.options[c] = H.base[c],
                    c in a)
                        this[c](a[c]);
                return this
            },
            unset: function() {
                n.remove(this._element, "all");
                if (P(this.selector))
                    for (var a in R)
                        for (var b = R[a]; 0 < b.selectors.length; ) {
                            b.selectors[0] === this.selector && b.contexts[0] === this._context && (b.selectors.splice(0, 1),
                            b.contexts.splice(0, 1),
                            b.listeners.splice(0, 1),
                            b.selectors.length || (R[a] = null));
                            n.remove(this._context, a, pa);
                            n.remove(this._context, a, ya, !0);
                            break
                        }
                else
                    n.remove(this, "all"),
                    this.options.styleCursor && (this._element.style.cursor = "");
                this.dropzone(!1);
                D.splice(y(D, this), 1);
                return p
            }
        };
        E.prototype.snap = O(E.prototype.snap, "Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping");
        E.prototype.restrict = O(E.prototype.restrict, "Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction");
        E.prototype.inertia = O(E.prototype.inertia, "Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia");
        E.prototype.autoScroll = O(E.prototype.autoScroll, "Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll");
        E.prototype.squareResize = O(E.prototype.squareResize, "Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square");
        E.prototype.accept = O(E.prototype.accept, "Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead");
        E.prototype.dropChecker = O(E.prototype.dropChecker, "Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead");
        E.prototype.context = O(E.prototype.context, "Interactable#context as a method is deprecated. It will soon be a DOM Node instead");
        p.isSet = function(a, b) {
            return -1 !== D.indexOfElement(a, b && b.context)
        }
        ;
        p.on = function(a, b, c) {
            P(a) && -1 !== a.search(" ") && (a = a.trim().split(/ +/));
            if (B(a)) {
                for (var d = 0; d < a.length; d++)
                    p.on(a[d], b, c);
                return p
            }
            if (u(a)) {
                for (d in a)
                    p.on(d, a[d], b);
                return p
            }
            -1 !== y(ea, a) ? X[a] ? X[a].push(b) : X[a] = [b] : n.add(S, a, b, c);
            return p
        }
        ;
        p.off = function(a, b, c) {
            P(a) && -1 !== a.search(" ") && (a = a.trim().split(/ +/));
            if (B(a)) {
                for (var d = 0; d < a.length; d++)
                    p.off(a[d], b, c);
                return p
            }
            if (u(a)) {
                for (d in a)
                    p.off(d, a[d], b);
                return p
            }
            if (-1 === y(ea, a))
                n.remove(S, a, b, c);
            else {
                var e;
                a in X && -1 !== (e = y(X[a], b)) && X[a].splice(e, 1)
            }
            return p
        }
        ;
        p.enableDragging = O(function(a) {
            return null !== a && void 0 !== a ? (V.drag = a,
            p) : V.drag
        }, "interact.enableDragging is deprecated and will soon be removed.");
        p.enableResizing = O(function(a) {
            return null !== a && void 0 !== a ? (V.resize = a,
            p) : V.resize
        }, "interact.enableResizing is deprecated and will soon be removed.");
        p.enableGesturing = O(function(a) {
            return null !== a && void 0 !== a ? (V.gesture = a,
            p) : V.gesture
        }, "interact.enableGesturing is deprecated and will soon be removed.");
        p.eventTypes = ea;
        p.debug = function() {
            var a = w[0] || new wa;
            return {
                interactions: w,
                target: a.target,
                dragging: a.dragging,
                resizing: a.resizing,
                gesturing: a.gesturing,
                prepared: a.prepared,
                matches: a.matches,
                matchElements: a.matchElements,
                prevCoords: a.prevCoords,
                startCoords: a.startCoords,
                pointerIds: a.pointerIds,
                pointers: a.pointers,
                addPointer: l.addPointer,
                removePointer: l.removePointer,
                recordPointer: l.recordPointer,
                snap: a.snapStatus,
                restrict: a.restrictStatus,
                inertia: a.inertiaStatus,
                downTime: a.downTimes[0],
                downEvent: a.downEvent,
                downPointer: a.downPointer,
                prevEvent: a.prevEvent,
                Interactable: E,
                interactables: D,
                pointerIsDown: a.pointerIsDown,
                defaultOptions: H,
                defaultActionChecker: db,
                actionCursors: xa,
                dragMove: l.dragMove,
                resizeMove: l.resizeMove,
                gestureMove: l.gestureMove,
                pointerUp: l.pointerUp,
                pointerDown: l.pointerDown,
                pointerMove: l.pointerMove,
                pointerHover: l.pointerHover,
                eventTypes: ea,
                events: n,
                globalEvents: X,
                delegatedEvents: R,
                prefixedPropREs: za
            }
        }
        ;
        p.getPointerAverage = Va;
        p.getTouchBBox = Ea;
        p.getTouchDistance = Fa;
        p.getTouchAngle = Ga;
        p.getElementRect = ta;
        p.getElementClientRect = Ca;
        p.matchesSelector = T;
        p.closest = Ha;
        p.margin = O(function(a) {
            return F(a) ? (oa = a,
            p) : oa
        }, "interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.");
        p.supportsTouch = function() {
            return ha
        }
        ;
        p.supportsPointerEvent = function() {
            return U
        }
        ;
        p.stop = function(a) {
            for (var b = w.length - 1; 0 <= b; b--)
                w[b].stop(a);
            return p
        }
        ;
        p.dynamicDrop = function(a) {
            return K(a) ? (Ma = a,
            p) : Ma
        }
        ;
        p.pointerMoveTolerance = function(a) {
            return F(a) ? (Na = a,
            this) : Na
        }
        ;
        p.maxInteractions = function(a) {
            return F(a) ? (va = a,
            this) : va
        }
        ;
        p.createSnapGrid = function(a) {
            return function(b, c) {
                var d = 0
                  , e = 0;
                u(a.offset) && (d = a.offset.x,
                e = a.offset.y);
                return {
                    x: Math.round((b - d) / a.x) * a.x + d,
                    y: Math.round((c - e) / a.y) * a.y + e,
                    range: a.range
                }
            }
        }
        ;
        eb(S);
        La in Element.prototype && x(Element.prototype[La]) || (la = function(a, b, c) {
            c = c || a.parentNode.querySelectorAll(b);
            b = 0;
            for (var d = c.length; b < d; b++)
                if (c[b] === a)
                    return !0;
            return !1
        }
        );
        (function() {
            for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !m.requestAnimationFrame; ++c)
                W = m[b[c] + "RequestAnimationFrame"],
                aa = m[b[c] + "CancelAnimationFrame"] || m[b[c] + "CancelRequestAnimationFrame"];
            W || (W = function(b) {
                var c = (new Date).getTime()
                  , d = Math.max(0, 16 - (c - a))
                  , g = setTimeout(function() {
                    b(c + d)
                }, d);
                a = c + d;
                return g
            }
            );
            aa || (aa = function(a) {
                clearTimeout(a)
            }
            )
        }
        )();
        "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = p),
        exports.interact = p) : "function" === typeof define && define.amd ? define("interact", function() {
            return p
        }) : m.interact = p
    }
}
)("undefined" === typeof window ? void 0 : window);
//# sourceMappingURL=interact.min.js.map
