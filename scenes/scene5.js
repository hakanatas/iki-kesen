/* SAHNE 5 — SINIFLANDIRMA (66–80 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 5, start: 66, end: 80, name: 'Sorting the family', nameTr: 'Sınıflandırma', concept: 'Every square is a rectangle', conceptTr: 'Her kare bir dikdörtgendir', render });
})(window.LI = window.LI || {});
