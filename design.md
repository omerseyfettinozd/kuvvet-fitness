# DESIGN.md — Ağırsağlam Bilimsel Performans Platformu

## 1. Marka Kimliği & Estetik Yön
- **Konsept:** "Editorial Sports Science Atelier" — Ağırsağlam'ın 104 videoluk bilimsel verisini ucuz fitness klişelerinden uzak, mimari, sakin, otoriter ve yüksek okunabilirlikli bir performans platformuna dönüştürmek.
- **İlham:** Global performans/editorial tasarım sistemleri (yüksek kontrastlı tipografi + sıcak taş/kemik zemin + mat antrasit bölümler + ince film greni).

## 2. Kesin Renk Paleti (Hex Kilitli)
- `--bg-paper`: `#F4F1EA` (Göz yormayan sıcak taş/kemik zemin — saf `#FFFFFF` kullanılmaz)
- `--bg-surface`: `#EAE5DA` (İkincil kart/tablo yüzeyi)
- `--bg-charcoal`: `#141413` (Hero ve koyu vurgu bölümleri — saf `#000000` değil, mat kömür)
- `--bg-charcoal-elevated`: `#1D1D1B` (Koyu yüzey üstü kartlar)
- `--ink-primary`: `#171615` (Ana metin — yüksek kontrast)
- `--ink-secondary`: `#545049` (İkincil açıklamalar)
- `--ink-on-dark`: `#F4F1EA` (Koyu yüzey üstü ana metin)
- `--ink-muted-dark`: `#A8A296` (Koyu yüzey üstü ikincil metin)
- `--accent-terracotta`: `#C84B24` (Tek ana vurgu rengi: aktif sekmeler, CTA, kritik metrikler)
- `--accent-olive`: `#3F5B47` (Pozitif/Bilimsel onay rozeti: 5 Yıldız takviyeler, optimal aralıklar)
- `--border-light`: `#D8D1C4`
- `--border-dark`: `#2D2C29`

## 3. Kesin Yasaklar (Anti-Slop Gate)
- Mor/pembe gradyanlar **YASAK**.
- Neon yeşil/mavi renkler ve herhangi bir glow/parlama gölgesi **YASAK**.
- Emoji kullanımı (`🔥💪🏋️‍♂️`) **YASAK**.
- Her başlık ve kartın yanına rastgele ikon serpiştirmek **YASAK** (yalnızca temiz tipografi, sayısal indeksler `01`, `02` ve sade yön okları `→`).
- Klişe AI copywriting ("Potansiyelini keşfet", "Yolculuğunu bir üst seviyeye taşı") **YASAK**.
- Aşırı uzun tire (`—`) kullanımı **YASAK** (yalnızca doğal Türkçe noktalama).
- Görsellerin içine gömülü yazı **YASAK**; tüm Türkçe metin (`İ, Ş, Ğ, Ü, Ö, Ç`) HTML/CSS katmanında basılır.

## 4. Tipografi & Ölçek
- **Display / Başlıklar:** `Space Grotesk` (700/600, sıkı letter-spacing `-0.03em`, Türkçe tam destekli)
- **Gövde Metni:** `Inter` (400/500/600, rahat satır aralığı `1.65`)
- **Veri / Rakam / Set-Tekrar:** `JetBrains Mono` (tabular-nums ile hizalı rakamlar)
- **Hero Kanca Kuralı:** Kısa, vurucu, en fazla 4 kelimelik ana başlık.

## 5. Yerleşim, Doku & Hareket
- Tüm sayfa üzerinde çok hafif SVG fractalNoise **grain (doku)** katmanı (`opacity: 0.03`).
- **Vitrin (Hero):** Tam ekran sinematik fotoğraf + sol tarafta yüksek kontrastlı tipografi ve hızlı eylem.
- **Araçlar (Program Seçici, Recomp/TDEE Hesaplayıcı, Biyomekanik Ansiklopedi, Supplement Tier List):** Süs ve gereksiz animasyon olmadan, hızlı taranabilir, net ızgara ve sekme yapısı.
- **Hareket:** Yalnızca ölçülü `180ms–240ms cubic-bezier(0.2, 0.8, 0.2, 1)` hover ve sekme geçişleri; zıplayan kartlar yok.
