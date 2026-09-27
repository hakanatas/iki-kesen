/* SAHNE 1 — PARALELLER VE İKİ KESEN (0–10 s)  Lines a and b, and k and m across them.
   The whole film's drawing lives in LI.world(t); each scene only sets the camera. */
(function (LI) {
  'use strict';
  const { seg } = LI.E;
  const KD = LI.KD, F = () => LI.Film, A = LI.Ang, Ink = LI.Ink;
  const END = (t) => 1 - seg(t, 90.4, 91.4);

  function win(t, a, b, fi = 0.4, fo = 0.4) { return seg(t, a, a + fi) * (1 - seg(t, b - fo, b)); }
  function exprs(ctx, t, P, list, sz) {
    const f = F();
    list.forEach(([a, b, items, hot]) => {
      const al = win(t, a, b); if (al <= 0) return;
      f.expr(ctx, typeof items === 'string' ? [items] : items, P.x, P.y, sz ?? P.s, { alpha: al, w: P.w, halo: true, color: hot ? A.amber : undefined });
    });
  }
  const at = (P, k, y) => ({ x: P.x, y: y ?? P.y[k], s: P.s, w: P.w });

  /** the shape over time */
  const KEYS = [[0, 'yamuk'], [16.0, 'ucgen'], [22.0, 'kum'], [28.4, 'yamuk'], [40.0, 'ucgen'], [46.4, 'pk'], [51.4, 'dik'], [56.4, 'ekd'], [61.4, 'kare']];
  /** when the four corner angles of the quadrilateral are shown */
  const QUAD = [[30.2, 39.8], [47.8, 65.8]];
  /** which special shape shows its equal sides / parallel transversals: [a, b, marks for AB, BC, CD, DA] */
  const SIDES = [[48.0, 51.2, [1, 2, 1, 2]], [53.0, 56.2, [1, 2, 1, 2]], [58.0, 61.2, [1, 1, 1, 1]], [63.0, 65.8, [1, 1, 1, 1]]];
  const ms = (L, name) => F().measures(F().quad(L.G, F().SH[name]));
  const sum4 = (m) => `${m.A}° + ${m.B}° + ${m.C}° + ${m.D}° = 360°`;

  function context(ctx, env, t) {
    exprs(ctx, t, KD.L(env).CX, [
      [4.4, 10.2, 'a ve b paralel; k ve m ikisini de kesiyor'],
      [10.6, 27.8, 'k ile m arasında hangi şekiller oluşur?'],
      [28.4, 39.8, 'Kesenler paralellerin arasında kesişmezse: yamuk'],
      [40.2, 45.8, 'Kesenler a üzerinde kesişirse: üçgen'],
      [46.4, 65.8, 'Kesenleri özel yerleştirelim'],
      [66.4, 79.8, 'Bu dörtgenler birbirine nasıl bağlı?'],
    ]);
  }

  function figure(ctx, env, t) {
    const L = KD.L(env), G = L.G, f = F(), a = END(t) * (1 - seg(t, 65.8, 66.4)); if (a <= 0) return;
    const q = f.quad(G, f.shapeAt(t, KEYS));
    f.fill(ctx, q, seg(t, 9.0, 9.8) * a);
    f.lines(ctx, G, q, [seg(t, 4.6, 5.6), seg(t, 5.2, 6.2), seg(t, 7.0, 8.0), seg(t, 8.0, 9.0)], a);
    // the quadrilateral's corners
    const qa = QUAD.reduce((h, [s, e]) => Math.max(h, win(t, s, e)), 0) * a;
    if (qa > 0) {
      const m = f.measures(q);
      f.cornerMark(ctx, G, q.A, f.corner(q.A, q.B, q.D), m.A, qa, 1501);
      f.cornerMark(ctx, G, q.B, f.corner(q.B, q.A, q.C), m.B, qa, 1502);
      f.cornerMark(ctx, G, q.C, f.corner(q.C, q.B, q.D), m.C, qa, 1503);
      f.cornerMark(ctx, G, q.D, f.corner(q.D, q.A, q.C), m.D, qa, 1504);
    }
    SIDES.forEach(([s, e, n]) => {
      const k = win(t, s, e) * a; if (k <= 0) return;
      [[q.A, q.B], [q.B, q.C], [q.C, q.D], [q.D, q.A]].forEach(([P, R], i) => f.hash(ctx, P, R, n[i], k, 1520 + i * 3));
      f.chevron(ctx, q.D, q.A, k, 1540); f.chevron(ctx, q.C, q.B, k, 1541);
    });
    // the triangle: its base angles, and their copies at the top (alternate interior angles on line a)
    const ta = win(t, 41.4, 45.8) * a;
    if (ta > 0) {
      const V = q.A, cD = f.corner(q.D, q.A, q.C), cC = f.corner(q.C, q.B, q.D);
      const mD = Math.round(cD[1] - cD[0]), mC = Math.round(cC[1] - cC[0]), dVD = 180 + mD, dVC = 360 - mC;
      f.cornerMark(ctx, G, q.D, cD, mD, ta, 1561);
      f.cornerMark(ctx, G, q.C, cC, mC, ta, 1562);
      const k2 = seg(t, 42.4, 43.0) * ta;
      if (k2 > 0) {
        A.wedge(ctx, V, G.r * 1.2, 180, dVD, 0.3 * k2); A.wedge(ctx, V, G.r * 1.2, dVC, 360, 0.3 * k2);
        f.cornerMark(ctx, G, V, [180, dVD], mD, k2, 1563);
        f.cornerMark(ctx, G, V, [dVC, 360], mC, k2, 1564);
      }
      const k3 = seg(t, 43.2, 43.8) * ta;
      if (k3 > 0) f.cornerMark(ctx, G, V, [dVD, dVC], 180 - mD - mC, k3, 1565);
    }
  }

  function words(ctx, env, t) {
    const L = KD.L(env), W = L.W, f = F(), my = ms(L, 'yamuk'), Q = f.quad(L.G, f.SH.ucgen);
    const deg = (c) => Math.round(c[1] - c[0]), dD = deg(f.corner(Q.D, Q.A, Q.C)), dC = deg(f.corner(Q.C, Q.B, Q.D));
    exprs(ctx, t, at(W, 0), [[11.2, 15.8, 'Varsayım: arada hep bir dörtgen oluşur'], [17.4, 21.8, 'a üzerinde kesişirlerse: üçgen'],
      [23.4, 27.8, 'Paralellerin arasında kesişirlerse: iki üçgen'],
      [30.2, 39.8, 'Yamuk: en az bir çift karşılıklı kenarı paralel dörtgen'],
      [41.8, 45.8, `Tepede iç ters açılar: ${dD}° + ${180 - dD - dC}° + ${dC}° = 180°`],
      [47.8, 51.2, 'k ile m de paralel olursa: paralelkenar'], [52.8, 56.2, 'Kesenler a ve b’ye dik olursa: dikdörtgen'],
      [57.8, 61.2, 'Dört kenar eşit olursa: eşkenar dörtgen'], [62.8, 65.8, 'Hem dik hem dört kenar eşit: kare']]);
    exprs(ctx, t, at(W, 1), [[13.2, 15.8, 'Kesenleri kaydırıp deneyelim'], [24.8, 27.8, 'Varsayımımız her zaman doğru değil!', true],
      [32.4, 39.8, `Karşı durumlu açılar: ${my.A}° + ${my.D}° = 180°, ${my.B}° + ${my.C}° = 180°`],
      [43.4, 45.8, 'Üçgenin iç açıları toplamı 180°', true],
      [48.6, 51.2, 'Karşılıklı kenarlar paralel ve eşit, karşılıklı açılar eşit'], [53.6, 56.2, 'Karşılıklı kenarlar eşit, dört açı 90°'],
      [58.6, 61.2, 'Karşılıklı kenarlar paralel, karşılıklı açılar eşit'], [63.6, 65.8, 'Dört kenar eşit, dört açı 90°']]);
    exprs(ctx, t, at(W, 2), [[35.0, 39.8, `İç açılar toplamı: 180° + 180° = 360°`, true],
      [49.4, 51.2, sum4(ms(L, 'pk')), true], [54.4, 56.2, sum4(ms(L, 'dik')), true], [59.4, 61.2, sum4(ms(L, 'ekd')), true], [64.4, 65.8, sum4(ms(L, 'kare')), true],
      [76.0, 79.8, 'Hepsi dörtgen: iç açılar toplamı 360°', true]]);
    exprs(ctx, t, at(W, 0), [[72.0, 79.8, 'Her paralelkenar aynı zamanda bir yamuktur']]);
    exprs(ctx, t, at(W, 1), [[74.0, 79.8, 'Kare hem dikdörtgen hem eşkenar dörtgendir']]);
  }

  /** the family tree of the quadrilaterals */
  function tree(ctx, env, t) {
    const a = win(t, 66.6, 79.8); if (a <= 0) return;
    const L = KD.L(env), P = L.TR, cx = L.G.cx, f = F();
    const N = [
      ['Yamuk', 'en az bir çift paralel kenar', [cx, P.y[0]], 66.8],
      ['Paralelkenar', '+ iki çift paralel kenar', [cx, P.y[1]], 67.8],
      ['Dikdörtgen', '+ dört açı 90°', [cx - P.x, P.y[2]], 69.0],
      ['Eşkenar dörtgen', '+ dört kenar eşit', [cx + P.x, P.y[2]], 69.8],
      ['Kare', '+ ikisi birden', [cx, P.y[3]], 71.0],
    ];
    const E = [[0, 1, 67.6], [1, 2, 68.8], [1, 3, 69.6], [2, 4, 70.8], [3, 4, 70.8]];
    E.forEach(([i, j, t0], n) => {
      const k = seg(t, t0, t0 + 0.5); if (k <= 0) return;
      const p = N[i][2], r = N[j][2];
      Ink.path(ctx, [[p[0], p[1] + P.s * 1.05], [r[0], r[1] - P.s * 0.6]], { w: 4, p: k, alpha: a * 0.7, seed: 1600 + n, taper: [0.1, 0.1] });
    });
    N.forEach(([s, sub, p, t0], i) => {
      const k = seg(t, t0, t0 + 0.4) * a; if (k <= 0) return;
      f.T(ctx, s, p[0], p[1], Object.assign({ size: P.s, alpha: k, halo: true }, i === 4 ? f.AMB : {}));
      f.T(ctx, sub, p[0], p[1] + P.s * 0.72, { size: P.s * 0.6, alpha: k * 0.85, halo: true });
    });
  }

  function summary(ctx, env, t) {
    if (t < 80.4) return;
    const S = KD.L(env).SUM, f = F(), a = END(t);
    [['İki paralel ve iki kesen: dörtgen ya da üçgen', 80.6], ['Yamukta karşı durumlu açıların toplamı 180°', 81.6], ['Dörtgenin iç açıları 360°, üçgeninki 180°', 82.6], ['Kare hem dikdörtgen hem eşkenar dörtgendir', 83.6, true]].forEach(([s, t0, hot], i) => {
      const al = seg(t, t0, t0 + 0.4) * a; if (al <= 0) return;
      f.expr(ctx, [s], S.x, S.y[i], S.s * (i === 3 ? 1.1 : 1), { alpha: al, w: S.w, halo: true, color: hot ? A.amber : undefined });
    });
  }

  LI.fireworks = function (ctx, env, t) {
    const k = seg(t, 84.4, 86.4);
    if (k <= 0 || t >= 91) return;
    const n = F().nokta(t, env), C = [n.x, n.y - 170];
    [30, 60, 90, 120, 150].forEach((d, i) => {
      const r = 150 + 30 * Math.sin(t * 2 + i);
      A.arc(ctx, C, r, d - 12, d + 12, { p: seg(k, i * 0.12, i * 0.12 + 0.4), alpha: 0.8 * (1 - seg(t, 90.2, 91)), w: 6, seed: 80 + i });
    });
  };

  LI.world = function (ctx, env, t) { context(ctx, env, t); figure(ctx, env, t); tree(ctx, env, t); words(ctx, env, t); summary(ctx, env, t); };

  function camera(t, env) {
    const L = KD.L(env);
    return LI.Camera.breathe(LI.Camera.track([
      [0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [3.0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [4.8, KD.cam(env, { zoom: 1 })],
    ], t), t, 0.5);
  }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 1, start: 0, end: 10, name: 'Parallels and two transversals', nameTr: 'Paraleller ve iki kesen', concept: 'Lines a, b, k and m', conceptTr: 'a, b, k ve m doğruları', render });
})(window.LI = window.LI || {});
