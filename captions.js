/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 6. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 10.2, tr: 'a ve b paralel; k ve m iki kesen', en: 'a and b are parallel; k and m cross them',
      note: 'a ve b doğruları paraleldir. k ve m doğruları ikisini de keser: iki kesenimiz var. Kesenlerin arasında, paralellerin arasında bir şekil oluşuyor.' },
    { scene: 2, start: 10.8, end: 15.8, tr: 'Varsayım: arada hep bir dörtgen oluşur', en: 'A guess: there is always a quadrilateral',
      note: 'Bir varsayımda bulunalım: kesenler nereden geçerse geçsin, arada hep bir dörtgen oluşur. Kesenleri kaydırıp deneyelim.' },
    { scene: 2, start: 16.2, end: 21.8, tr: 'a üzerinde kesişirlerse: üçgen', en: 'If they meet on a: a triangle',
      note: 'k ve m, a doğrusunun üzerinde kesişirse arada bir üçgen oluşur.' },
    { scene: 2, start: 22.2, end: 27.8, tr: 'Arada kesişirlerse: iki üçgen', en: 'If they meet in between: two triangles',
      note: 'Kesenler paralellerin arasında kesişirse iki üçgen oluşur. Demek ki varsayımımız her zaman doğru değil.' },
    { scene: 3, start: 28.6, end: 34.8, tr: 'Yamuk: en az bir çift kenar paralel', en: 'Trapezoid: at least one pair of parallel sides',
      note: 'Kesenler arada kesişmezse bir dörtgen oluşur. Üst ve alt kenarları a ve b üzerinde, yani paralel. En az bir çift karşılıklı kenarı paralel olan dörtgene yamuk denir.' },
    { scene: 3, start: 35.0, end: 39.8, tr: 'Karşı durumlu açılar 180°: toplam 360°', en: 'Same-side angles make 180°: 360° in all',
      note: 'k kesenin aynı yanındaki iki iç açı karşı durumlu açılardır, toplamları 180°. m için de öyle. Yamuğun iç açıları toplamı 180 artı 180, yani 360°.' },
    { scene: 3, start: 40.2, end: 45.8, tr: 'Üçgenin iç açıları toplamı 180°', en: 'A triangle’s angles add up to 180°',
      note: 'Kesenler a üzerinde kesişince üçgen oluşur. Alttaki iki açının iç ters açıları tepede, a doğrusu boyunca yan yana dizilir. Üçü birlikte düz açı yapar: üçgenin iç açıları toplamı 180°.' },
    { scene: 4, start: 46.6, end: 51.2, tr: 'k ve m paralel: paralelkenar', en: 'k parallel to m: a parallelogram',
      note: 'k ve m de birbirine paralel olursa iki çift karşılıklı kenar paralel olur: paralelkenar. Karşılıklı kenarları eşit, karşılıklı açıları eşit.' },
    { scene: 4, start: 51.6, end: 56.2, tr: 'Kesenler dik: dikdörtgen', en: 'Perpendicular transversals: a rectangle',
      note: 'Kesenler paralellere dik olursa dört açı da 90° olur: dikdörtgen.' },
    { scene: 4, start: 56.6, end: 61.2, tr: 'Dört kenar eşit: eşkenar dörtgen', en: 'Four equal sides: a rhombus',
      note: 'Kesenler paralel, dört kenar da eşit olursa eşkenar dörtgen oluşur. Karşılıklı açıları eşittir.' },
    { scene: 4, start: 61.6, end: 65.8, tr: 'Dik ve kenarlar eşit: kare', en: 'Right angles and equal sides: a square',
      note: 'Hem dört açı 90° hem dört kenar eşit: kare. Her birinde iç açılar toplamı yine 360°.' },
    { scene: 5, start: 66.6, end: 72.8, tr: 'Her adımda bir özellik eklenir', en: 'Each step adds one property',
      note: 'Yamuktan başlayalım. İkinci çift kenar da paralel olursa paralelkenar; açılar 90° olursa dikdörtgen, kenarlar eşit olursa eşkenar dörtgen; ikisi birden olursa kare.' },
    { scene: 5, start: 73.0, end: 79.8, tr: 'Kare hem dikdörtgen hem eşkenar dörtgen', en: 'A square is a rectangle and a rhombus',
      note: 'Bu önermeler dörtgenleri sınıflandırmamızı sağlar: her paralelkenar bir yamuktur, kare hem dikdörtgen hem eşkenar dörtgendir. Hepsinin iç açıları toplamı 360°.' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Dörtgende 360°, üçgende 180°', en: '360° in a quadrilateral, 180° in a triangle',
      note: 'Aklında kalsın: iki paralel ve iki kesen dörtgen ya da üçgen oluşturur. Dörtgenin iç açıları toplamı 360°, üçgeninki 180°.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Kare de bir dikdörtgendir!', en: 'A square is a rectangle too!',
      note: 'Kare de bir dikdörtgendir, bir eşkenar dörtgendir, bir paralelkenardır!' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
