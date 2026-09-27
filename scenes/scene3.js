/* SAHNE 3 — YAMUK VE AÇILAR (28–46 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 3, start: 28, end: 46, name: 'Trapezoid and its angles', nameTr: 'Yamuk ve açılar', concept: '180° pairs, 360° in all', conceptTr: '180° çiftler, toplam 360°', render });
})(window.LI = window.LI || {});
