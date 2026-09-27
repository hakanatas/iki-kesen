/* SAHNE 4 — ÖZEL DÖRTGENLER (46–66 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 4, start: 46, end: 66, name: 'Special quadrilaterals', nameTr: 'Özel dörtgenler', concept: 'Parallelogram to square', conceptTr: 'Paralelkenardan kareye', render });
})(window.LI = window.LI || {});
