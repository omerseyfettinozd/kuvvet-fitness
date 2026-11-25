// KUVVET - Bilimsel Antrenman, Biyomekanik ve Performans Veri Katmanı

window.KUVVET_DATA = {
  programs: [
    {
      id: "fullbody-3",
      name: "3 Günlük Full Body",
      daysCount: 3,
      level: "yeni",
      goal: "ilk-10-kg",
      meta: "3 GÜN / HAFTA · TEMEL KUVVET & İLK 10 KG",
      summary: "Spora yeni başlayanlar ve ilk 12-18 ayda 8-10 kg saf kas kazanmak isteyenler için temel bileşik hareketler ve aktif yetersizlik çözümleriyle optimize edilmiş A/B dönüşümlü program.",
      schedule: "Pazartesi (A) · Çarşamba (B) · Cuma (A) · Sonraki hafta B-A-B",
      restRule: "Bileşikler 3-4 dk, izoleler 1.5-2 dk",
      rirRule: "İlk ay RIR 2-3 (form), sonrası RIR 1-2",
      days: [
        {
          title: "Gün A",
          focus: "Alt Vücut İtiş + Göğüs + Dikey Çekiş",
          exercises: [
            { name: "Squat (Barbell / Hack / Goblet)", sets: 3, reps: "6-8", note: "Tam derinlik; yarım tekrar yapma" },
            { name: "Bench Press (Barbell / Makine)", sets: 3, reps: "6-8", note: "Tam ROM, göğüste kontrollü iniş" },
            { name: "Lat Pulldown (Omuz Genişliği)", sets: 3, reps: "8-12", note: "Dirsekleri kalçaya çek, göğsü dik tut" },
            { name: "Leg Extension (Koltuk En Geride)", sets: 2, reps: "10-12", note: "Rectus femoris için kalçayı kaldırmadan" },
            { name: "Cable veya Dumbbell Lateral Raise", sets: 3, reps: "12-15", note: "Skapular düzlemde, yan omuz odaklı" },
            { name: "Standing Calf Raise (Dizler Düz)", sets: 3, reps: "10-15", note: "Altta 1 sn tam esneme, gastrocnemius" }
          ]
        },
        {
          title: "Gün B",
          focus: "Arka Zincir + Üst Göğüs + Yatay Çekiş",
          exercises: [
            { name: "Romanian Deadlift (RDL)", sets: 3, reps: "6-8", note: "Kalçayı geriye it, hamstring uzun boyda" },
            { name: "Incline Dumbbell / Machine Press", sets: 3, reps: "8-10", note: "30-45 derece açı, üst göğüs tam esneme" },
            { name: "Chest-Supported Machine Row", sets: 3, reps: "8-10", note: "Göğüs yaslı, yüksek stabilite" },
            { name: "Cable Overhead Triceps Extension", sets: 2, reps: "10-12", note: "Long head izolasyonu, omuz sabit" },
            { name: "Preacher Curl veya Incline DB Curl", sets: 2, reps: "10-12", note: "Aşağıda tam açılma, süpinasyon" },
            { name: "Ağırlıklı Cable Crunch / Ab Roller", sets: 3, reps: "10-15", note: "Omurgayı bükerek progresif yükleme" }
          ]
        }
      ]
    },
    {
      id: "upper-lower-4",
      name: "4 Günlük Upper / Lower",
      daysCount: 4,
      level: "orta",
      goal: "recomp",
      meta: "4 GÜN / HAFTA · YAĞ YAKIMI & RECOMP",
      summary: "Vücut kaslarının %75'ini oluşturan alt vücudu haftada 2 kez güçlü çalıştırarak metabolizmayı yüksek tutan, ekstra kardiyoya boğulmadan atletik fizik sağlayan klasik sistem.",
      schedule: "Pazartesi (Upper 1) · Salı (Lower 1) · Perşembe (Upper 2) · Cuma (Lower 2)",
      restRule: "Bileşikler 3-5 dk, izoleler 2 dk",
      rirRule: "Bileşikler RIR 1-2, makineler RIR 0-1",
      days: [
        {
          title: "Upper 1 (İtiş Odaklı)",
          focus: "Üst Göğüs + Lat + Yan Omuz + Kollar",
          exercises: [
            { name: "Incline Smith / Machine Press", sets: 3, reps: "6-8", note: "30-45° açı, skapula depresyonda" },
            { name: "Chest-Supported Row (Dirsek Yakın)", sets: 3, reps: "8-10", note: "Lat ekstansiyon odaklı, strap kullan" },
            { name: "Pec Deck Fly", sets: 3, reps: "10-12", note: "En stabil göğüs izolasyonu, tam esneme" },
            { name: "Chest-Supported / Cable Lateral Raise", sets: 3, reps: "12-15", note: "Savurmadan kontrollü açış" },
            { name: "Cable Overhead Triceps Extension", sets: 3, reps: "8-12", note: "Long head odaklı, düz/açılı bar" },
            { name: "Preacher Curl", sets: 3, reps: "8-12", note: "Tam ekstansiyon, dirsek sabit" }
          ]
        },
        {
          title: "Lower 1 (Quad Odaklı)",
          focus: "Vastus + Rectus Femoris + Hamstring + Kalf",
          exercises: [
            { name: "Hack Squat veya Derin Squat", sets: 3, reps: "6-8", note: "Dik gövde, diz öne, tam derinlik" },
            { name: "Seated Leg Curl", sets: 3, reps: "8-12", note: "Kalça bükülü, uzun kas boyu" },
            { name: "Leg Extension (Koltuk En Geride)", sets: 3, reps: "10-12", note: "Rectus femoris tam aktivasyon" },
            { name: "Standing Calf Raise (Dizler Kilitli)", sets: 3, reps: "10-15", note: "Altta 1 sn bekleme" },
            { name: "Machine / Cable Rope Crunch", sets: 3, reps: "10-15", note: "Ağırlıklı üst karın" }
          ]
        },
        {
          title: "Upper 2 (Çekiş Odaklı)",
          focus: "Lat Addüksiyon + Üst Sırt + Omuz + Arka Omuz",
          exercises: [
            { name: "Weighted Pull-up / Wide Pulldown", sets: 3, reps: "6-10", note: "Omuzdan hafif geniş, strap ile" },
            { name: "Chest-Supported Wide Row (Trapez)", sets: 3, reps: "8-12", note: "Dirsekler yana açık, kürek kemiklerini sal" },
            { name: "High Incline Overhead Press", sets: 3, reps: "6-8", note: "70-80° bench açısı, tam ROM" },
            { name: "Machine Chest Press", sets: 3, reps: "8-12", note: "Orta/alt göğüs tam esneme" },
            { name: "Reverse Pec Deck Fly", sets: 3, reps: "12-15", note: "Arka omuz, kolları dışa aç" },
            { name: "Hammer Curl / Reverse Curl", sets: 3, reps: "12-15", note: "Brachialis ve brachioradialis" }
          ]
        },
        {
          title: "Lower 2 (Posterior Odaklı)",
          focus: "Hamstring + Kalça + Quad + Core",
          exercises: [
            { name: "RDL / Stiff-Leg Deadlift", sets: 3, reps: "6-8", note: "Dizler sabit, kalça menteşesi" },
            { name: "Leg Press (Ayaklar Orta/Aşağı)", sets: 3, reps: "8-10", note: "Bel kalkmadan tam derinlik" },
            { name: "Seated Leg Curl", sets: 2, reps: "10-12", note: "Ayak parmakları kendine çekili" },
            { name: "Kalça Odaklı 45° Back Extension", sets: 3, reps: "12-15", note: "Ped aşağıda, üst sırt hafif kambur" },
            { name: "Standing Calf Raise (Dizler Kilitli)", sets: 3, reps: "10-15", note: "Gastrocnemius tam esneme" },
            { name: "Ab Roller / Hanging Leg Raise", sets: 3, reps: "10-15", note: "Pelvisi döndürerek alt karın" }
          ]
        }
      ]
    },
    {
      id: "ppl-ul-5",
      name: "5 Günlük PPL + Upper / Lower",
      daysCount: 5,
      level: "ileri",
      goal: "hipertrofi",
      meta: "5 GÜN / HAFTA · DENGELİ HİBRİT SPLİT",
      summary: "Haftada 5 gün çalışan orta ve ileri seviye sporcular için matematiksel olarak en dengeli hibrit split. Üst vücutta bölgesel hipertrofi çeşitliliği sunarken alt vücudu haftada 2 tam gün işler.",
      schedule: "Pzt (Push) · Salı (Pull) · Çar (Legs 1) · Perş (Dinlenme) · Cuma (Upper) · Cmt (Lower 2)",
      restRule: "Bileşikler 3-5 dk, izoleler 2-3 dk",
      rirRule: "Bileşikler RIR 1-2, izoleler RIR 0-1",
      days: [
        {
          title: "1. Gün: Push",
          focus: "Üst Göğüs + Omuz + Triceps",
          exercises: [
            { name: "Incline Smith Machine Press", sets: 3, reps: "6-8", note: "30-45° açı, üst göğüs odaklı" },
            { name: "Pec Deck Fly", sets: 3, reps: "8-12", note: "Tam esneme, düşük MSS yorgunluğu" },
            { name: "Seated Overhead Press", sets: 3, reps: "6-8", note: "Ön ve yan omuz temeli" },
            { name: "Cable Lateral Raise", sets: 3, reps: "12-15", note: "Makara bilek hizasında, sabit gövde" },
            { name: "Dumbbell Skull Crusher", sets: 3, reps: "8-12", note: "Baş arkasına kontrollü iniş" },
            { name: "Triceps Pushdown (Düz/Rope)", sets: 2, reps: "10-12", note: "Gövde sabit, sert kilitleme" }
          ]
        },
        {
          title: "2. Gün: Pull",
          focus: "Lat + Üst Sırt + Trapez + Biceps",
          exercises: [
            { name: "Machine Pulldown / Wide Lat Pulldown", sets: 3, reps: "8-10", note: "Addüksiyon açısı, strap kullan" },
            { name: "Chest-Supported Single-Arm Row", sets: 3, reps: "8-10", note: "Dirsek kalçaya yakın, lat ekstansiyon" },
            { name: "Wide Grip T-Bar / Machine Row", sets: 3, reps: "10-12", note: "Orta trapez ve arka omuz" },
            { name: "Kelso Shrug / Geniş Smith Shrug", sets: 3, reps: "10-15", note: "Kürek kemiklerini tam salıp çek" },
            { name: "Reverse Pec Deck Fly", sets: 3, reps: "12-15", note: "Arka omuz izolasyonu" },
            { name: "Preacher Curl", sets: 3, reps: "8-12", note: "Tam ekstansiyon, dirsek sabit" },
            { name: "Hammer Curl", sets: 2, reps: "12-15", note: "Brachialis ve önkol kalınlığı" }
          ]
        },
        {
          title: "3. Gün: Legs 1",
          focus: "Quad + Hamstring + Kalf + Karın",
          exercises: [
            { name: "Hack Squat veya Derin Squat", sets: 3, reps: "6-8", note: "Tam derinlik, quad dominant" },
            { name: "Seated Leg Curl", sets: 3, reps: "8-12", note: "Uzun boy hamstring" },
            { name: "Leg Extension (Koltuk En Geride)", sets: 3, reps: "10-12", note: "Rectus femoris odaklı" },
            { name: "Standing Calf Raise", sets: 3, reps: "10-15", note: "Diz kilitli, altta tam esneme" },
            { name: "Ağırlıklı Cable Rope Crunch", sets: 3, reps: "12-15", note: "Stabil kalça, omurga fleksiyonu" }
          ]
        },
        {
          title: "4. Gün: Upper",
          focus: "Orta Göğüs + Dar Lat + Omuz + İzole Kollar",
          exercises: [
            { name: "Machine Chest Press", sets: 3, reps: "6-8", note: "Orta/alt göğüs tam ROM" },
            { name: "Dar V-Bar Lat Pulldown", sets: 3, reps: "10-12", note: "Üst lat ekstansiyon" },
            { name: "Chest-Supported Lateral Raise", sets: 3, reps: "12-15", note: "Skapular düzlem" },
            { name: "Incline DB Reverse Fly", sets: 3, reps: "12-15", note: "Göğüs destekli arka omuz" },
            { name: "Cable Overhead Triceps Extension", sets: 3, reps: "10-12", note: "Long head tam esneme" },
            { name: "Incline DB / Face Away Cable Curl", sets: 3, reps: "10-12", note: "50-60° açı, tam süpinasyon" }
          ]
        },
        {
          title: "5. Gün: Lower 2",
          focus: "Arka Zincir + Kalça + Quad + Alt Karın",
          exercises: [
            { name: "Romanian Deadlift (RDL)", sets: 3, reps: "6-8", note: "Bar vücuda yakın, kalça menteşesi" },
            { name: "Leg Press", sets: 3, reps: "8-10", note: "Kontrollü derinlik" },
            { name: "Leg Extension", sets: 2, reps: "10-12", note: "İkinci rectus femoris uyarısı" },
            { name: "Barbell Glute Bridge / Back Ext.", sets: 3, reps: "12-15", note: "Lockout odaklı kalça" },
            { name: "Standing Calf Raise", sets: 3, reps: "10-15", note: "Dizler kilitli" },
            { name: "Dragon Fly / Hanging Knee Raise", sets: 3, reps: "10-15", note: "Pelvis bükerek alt karın" }
          ]
        }
      ]
    },
    {
      id: "torso-limbs-4",
      name: "4 Günlük Torso / Limbs",
      daysCount: 4,
      level: "orta",
      goal: "kol-odak",
      meta: "4 GÜN / HAFTA · KOL ODAKLI SPORCULAR",
      summary: "Gövde (göğüs, sırt, omuz) ve uzuv (bacak + kol) ayrımıyla kolları taze enerjiyle çalıştırırken alt vücut metabolizmasını da ihmal etmeyen stratejik 4 günlük split.",
      schedule: "Pzt (Torso 1) · Salı (Limbs 1) · Perş (Torso 2) · Cuma (Limbs 2)",
      restRule: "Bileşikler 3-4 dk, kollar 2 dk",
      rirRule: "RIR 1-2 (kollarda son set RIR 0)",
      days: [
        {
          title: "Torso 1 & 2 (Gövde)",
          focus: "Göğüs + Sırt + Yan/Arka Omuz",
          exercises: [
            { name: "Incline Press (1. Gün) / Flat Press (2. Gün)", sets: 3, reps: "6-10", note: "Tam ROM, göğüs ana yükleme" },
            { name: "Wide Pulldown (1) / Dar V-Bar Pulldown (2)", sets: 3, reps: "8-12", note: "Lat addüksiyon + ekstansiyon" },
            { name: "Chest-Supported Row (1) / Wide Row (2)", sets: 3, reps: "8-12", note: "Sırt kalınlığı ve orta trapez" },
            { name: "Pec Deck Fly", sets: 3, reps: "10-12", note: "Göğüs izolasyonu" },
            { name: "Lateral Raise", sets: 3, reps: "12-15", note: "Yan omuz odaklı" },
            { name: "Reverse Pec Deck Fly", sets: 3, reps: "12-15", note: "Arka omuz izolasyonu" }
          ]
        },
        {
          title: "Limbs 1 (Bacak Öncelikli)",
          focus: "Quad + Hamstring + Kalf + Kollar",
          exercises: [
            { name: "Squat / Leg Press", sets: 3, reps: "6-8", note: "Ana alt vücut yükü" },
            { name: "Seated Leg Curl", sets: 3, reps: "8-12", note: "Uzun boy hamstring" },
            { name: "Leg Extension (Koltuk Geri)", sets: 2, reps: "10-12", note: "Rectus femoris" },
            { name: "Standing Calf Raise", sets: 3, reps: "10-15", note: "Dizler düz" },
            { name: "Preacher Curl", sets: 3, reps: "8-12", note: "Biceps tam ROM" },
            { name: "Triceps Pushdown", sets: 3, reps: "8-12", note: "Düz bar veya uzun halat" }
          ]
        },
        {
          title: "Limbs 2 (Kol Öncelikli)",
          focus: "Taze Enerjiyle Kollar + Arka Bacak",
          exercises: [
            { name: "Incline Dumbbell Curl (50-60°)", sets: 3, reps: "8-10", note: "Seans başı tam odak, süpinasyon" },
            { name: "Cable Overhead Triceps Extension", sets: 3, reps: "8-12", note: "Long head öncelikli" },
            { name: "Hammer Curl", sets: 3, reps: "12-15", note: "Önkol ve brachialis kalınlığı" },
            { name: "Romanian Deadlift (RDL)", sets: 3, reps: "6-8", note: "Arka zincir temeli" },
            { name: "Leg Extension", sets: 3, reps: "10-12", note: "Haftalık ikinci quad uyarısı" },
            { name: "Ağırlıklı Cable Crunch", sets: 3, reps: "12-15", note: "Core tamamlayıcı" }
          ]
        }
      ]
    },
    {
      id: "ppl-5-bro-alt",
      name: "5 Günlük Geliştirilmiş PPL",
      daysCount: 5,
      level: "orta",
      goal: "hipertrofi",
      meta: "5 GÜN / HAFTA · BRO-SPLİT ALTERNATİFİ",
      summary: "Tek güne çöp hacim yığan Bro-Split'in ve 7 günlük bekleme atrofisi hatasının yerine geliştirilmiş, üst vücut frekansını haftada 2'ye çıkaran 5 günlük PPL+PP şablonu.",
      schedule: "Push 1 · Pull 1 · Legs · Push 2 · Pull 2",
      restRule: "En az 2-3 dakika dinlenme",
      rirRule: "Piramit yok, sabit RIR 1-2",
      days: [
        {
          title: "Push 1 & Push 2",
          focus: "Göğüs + Omuz + Triceps + Core",
          exercises: [
            { name: "Push 1: Bench Press / Push 2: Overhead Press", sets: 3, reps: "6-10", note: "Ana itiş hareketi, tam ROM" },
            { name: "Push 1: Lateral Raise / Push 2: Pec Deck Fly", sets: 3, reps: "10-15", note: "Yan omuz ve göğüs izolasyonu" },
            { name: "Push 1: Triceps Pushdown / Push 2: Skull Crusher", sets: 3, reps: "8-12", note: "Triceps tüm başlar + long head" },
            { name: "Core: Hanging Knee Raise", sets: 3, reps: "12-15", note: "Her iki Push sonunda pelvis bükerek" }
          ]
        },
        {
          title: "Pull 1 & Pull 2",
          focus: "Üst Sırt + Lat + Biceps + Önkol",
          exercises: [
            { name: "Pull 1: Wide Row / Pull 2: Neutral Row", sets: 3, reps: "8-10", note: "Üst sırt ve üst lat çeşitliliği" },
            { name: "Pull 1: Wide Pulldown / Pull 2: Pullover", sets: 3, reps: "8-12", note: "Addüksiyon + izole lat ekstansiyon" },
            { name: "Pull 1: Posterior Fly / Pull 2: Kelso Shrug", sets: 3, reps: "10-15", note: "Arka omuz ve orta/alt trapez" },
            { name: "Dumbbell Preacher Curl", sets: 3, reps: "8-12", note: "Her iki Pull gününde" },
            { name: "Wrist Extension (Önkol)", sets: 3, reps: "12-15", note: "Ekstansör odaklı önkol" }
          ]
        },
        {
          title: "Legs (Bacak Günü)",
          focus: "Quad + Kalça + Hamstring + Kalf",
          exercises: [
            { name: "Leg Press (Ayaklar Orta/Aşağı)", sets: 3, reps: "8-10", note: "Quad odaklı tam derinlik" },
            { name: "Barbell / Machine Hip Bridge", sets: 3, reps: "8-12", note: "Kısa ROM kalça izolasyonu" },
            { name: "Seated Leg Curl", sets: 3, reps: "8-12", note: "En başa veya sona konabilir" },
            { name: "Diz Kilitli Calf Raise (Leg Press/Smith)", sets: 3, reps: "10-15", note: "Tam esnetip düze kadar çek" }
          ]
        }
      ]
    },
    {
      id: "ppl-3-free",
      name: "3 Günlük Eklem Dostu PPL",
      daysCount: 3,
      level: "yeni",
      goal: "hipertrofi",
      meta: "3 GÜN / HAFTA · YÜKSEK STABİLİTE",
      summary: "Haftada 3 gün ayırabilen ancak PPL formatını tercih edenler için yüksek stabiliteli, eklem dostu ve makine destekli hareketlerden oluşan sade şablon.",
      schedule: "Pazartesi (Push) · Çarşamba (Pull) · Cuma (Legs)",
      restRule: "Bileşiklerde 3 dk, izolelerde 2 dk",
      rirRule: "Tüm çalışma setleri RIR 1-2",
      days: [
        {
          title: "1. Gün: Push",
          focus: "Göğüs + Omuz + Triceps",
          exercises: [
            { name: "Incline Chest Press (Makine)", sets: 3, reps: "6-8", note: "Üst göğüs ve ön omuz" },
            { name: "Pec Deck Fly", sets: 3, reps: "8-12", note: "Tam esneme ve kasılma" },
            { name: "High Incline Overhead Press", sets: 3, reps: "6-8", note: "Ön ve orta omuz" },
            { name: "Cable Lateral Raise", sets: 3, reps: "10-15", note: "İstasyona tutunarak stabil" },
            { name: "Hafif Incline DB Skull Crusher", sets: 3, reps: "8-12", note: "İzole triceps" },
            { name: "Triceps Pushdown", sets: 3, reps: "8-12", note: "Tüm başlar" }
          ]
        },
        {
          title: "2. Gün: Pull",
          focus: "Sırt + Trapez + Biceps",
          exercises: [
            { name: "Chest Supported Machine Row", sets: 3, reps: "8-10", note: "Göğüs yaslı, kanat odaklı" },
            { name: "Geniş Tutuş Lat Pulldown", sets: 3, reps: "12-15", note: "Kanatlarda maksimum gerilim" },
            { name: "Wide Grip Seated Row", sets: 3, reps: "12-15", note: "Dirsekler açık, trapez ve arka omuz" },
            { name: "Geniş Tutuş Smith Machine Shrug", sets: 3, reps: "12-15", note: "Üst/orta trapez" },
            { name: "Tek Taraflı DB Preacher Curl", sets: 3, reps: "8-12", note: "Altta tam esneme" },
            { name: "Hammer Curl", sets: 3, reps: "15-20", note: "Tam salma ve kasılma" }
          ]
        },
        {
          title: "3. Gün: Legs",
          focus: "Bacak + Kalf + Core",
          exercises: [
            { name: "Derin Squat", sets: 4, reps: "8", note: "Yarıda kesmeden tam derinlik" },
            { name: "Kalça Odaklı Back Extension", sets: 3, reps: "12-15", note: "Hamstring ve kalça" },
            { name: "Leg Extension (Koltuk En Geri)", sets: 2, reps: "8-10", note: "Rectus femoris uzatılmış" },
            { name: "Leg Press Makinede Calf Raise", sets: 3, reps: "10-15", note: "Dizler düz, gastrocnemius" },
            { name: "Knee Raise", sets: 3, reps: "12-15", note: "Pelvisi döndürerek" },
            { name: "Side Plank", sets: 3, reps: "30 sn", note: "Sağ ve sol ayrı, kalça stabil" }
          ]
        }
      ]
    }
  ],

  muscles: [
    {
      id: "quadriceps",
      name: "Quadriceps",
      volume: "12-18 set / hf",
      freq: "Haftada 3+ gün tolere eder",
      cm3: "~1800 cm³ (Vücudun en büyük kası)",
      best: [
        "Hack Squat: Gövdeyi dik tutar, omurga yükünü azaltır, tükenişi doğrudan quad'a verir.",
        "Leg Extension (Koltuk En Geride): Çift eklemli Rectus Femoris için tek doğrudan çözüm.",
        "Diz Dominant Leg Press / Smith Split Squat: Yüksek stabilitede ağır yükleme."
      ],
      avoid: [
        "Çeyrek / yarım squat: Vastus gelişimini ve derin addüktör katkısını çöpe atar.",
        "Leg Extension'da öne eğilmek: Rectus femoris boyunu kısaltır, verimi düşürür.",
        "Savurarak Leg Extension yapmak: İzole diz yükünde ACL/ligament riski oluşturur."
      ],
      activeInsufficiency: "Rectus Femoris hem kalça hem diz ekleminden geçer. Squat ve Leg Press sırasında kalça ve diz aynı anda büküldüğü için boyu değişmez ve gelişimi neredeyse sıfırdır. Sırt pedi geriye yatırılmış Leg Extension (evde Reverse Nordic / Sissy Squat) şarttır."
    },
    {
      id: "hamstring",
      name: "Hamstring",
      volume: "6-10 set / hf",
      freq: "Maks. 2 gün / hf (kolay hasar alır)",
      cm3: "~600-724 cm³",
      best: [
        "Seated Leg Curl: Kalça fleksiyonda olduğu için kas en uzun boyda çalışır; Lying Leg Curl'den bilimsel olarak üstündür.",
        "Tek Bacak 45° Back Extension: Diz oynamadan, bel yormadan üst hamstringi izole eder.",
        "Romanian Deadlift (RDL) / Stiff-Leg Deadlift / Nordic Curl."
      ],
      avoid: [
        "Squat ve Leg Press'e güvenmek: Çift eklemli aktif yetersizlik nedeniyle hamstring sıfır büyür.",
        "Haftada 15+ set yüklemek: Hamstring kas hasarına çok yatkındır, toparlanmayı bozar.",
        "Seated Leg Curl'de ayak parmaklarını salmak: Dorsifleksiyon (kendine çekmek) kuvveti artırır."
      ],
      activeInsufficiency: "Hamstring kalça ekstansiyonu ve diz fleksiyonu yapar. Squat'ta bir uçtan uzarken diğerinden kısalır. Tam gelişim için hem bir diz fleksiyonu (Seated Leg Curl) hem bir kalça ekstansiyonu (RDL / Back Extension) gerekir."
    },
    {
      id: "glutes",
      name: "Glute & Addüktör",
      volume: "8-12 set / hf",
      freq: "Haftada 2-3 gün (öncelikliyse 16-20 set)",
      cm3: "Glute ~1300 cm³ · Addüktör ~700 cm³",
      best: [
        "Barbell Glute Bridge / Smith Hip Thrust: Kısa ROM'da kalça kilitlenmesi (lockout) en yüksek izolasyonu verir.",
        "Kalça Odaklı 45° Back Extension (Ped aşağıda, üst sırt hafif kambur).",
        "Step-Up / Reverse Lunge (uzun boy) + Ayakta Hip Abduction (Gluteus Medius).",
        "Addüktörler için: Derin Squat, Sumo Deadlift ve Seated Adduction Makinesi (4-8 set)."
      ],
      avoid: [
        "Sadece yarı squat ile kalça beklemek: Addüktör ve kalça tam derinlikte devreye girer.",
        "Back Extension'da tepede aşırı bel kırmak (hiperekstansiyon): Faset eklemleri sıkıştırır."
      ],
      activeInsufficiency: "Adductor Magnus kalça bükülüyken gizli bir kalça ekstansörü gibi çalışır (~700 cm³ hacimle ihmal edilen dev kas). Gluteus Medius ise kalça dikken (ayakta abdüksiyon) en iyi izole edilir."
    },
    {
      id: "calves",
      name: "Kalf (Calves)",
      volume: "12-16 set / hf",
      freq: "Haftada 3+ gün (kolay hasar almaz)",
      cm3: "~850 cm³",
      best: [
        "Standing / Smith Machine / Leg Press Calf Raise (Dizler Tam Kilitli): Gastrocnemius için ~6 kat daha verimli.",
        "Seated Calf Raise: Sadece alttaki tek eklemli Soleus başı için ikincil ekleme."
      ],
      avoid: [
        "Sadece Seated Calf Raise yapmak: Diz bükülü olduğu için Gastrocnemius aktif yetersizliğe düşer.",
        "Altta esnetmeden tepede zıplamak: En kritik büyüme uyarısı alt noktadaki tam esnemede oluşur."
      ],
      activeInsufficiency: "Gastrocnemius hem diz hem ayak bileğinden geçer. Oturarak kalf çalışıldığında diz bükülü olduğu için kas gevşer ve neredeyse hiç çalışmaz. Dizler kilitli çalışmak zorunludur."
    },
    {
      id: "abs",
      name: "Karın & Oblik",
      volume: "15-20 set / hf",
      freq: "Haftada 2-3 gün (2/3 Rectus, 1/3 Oblik)",
      cm3: "Tip 1/Tip 2 oranı dengeli (%50/%50)",
      best: [
        "Machine Crunch / Bacak Arası Sağlık Toplu Cable Rope Crunch (Üst Karın).",
        "Ab Roller / Ab Wheel: Öne uzandıkça hem kas boyu hem kaldıraç kolu artar (kusursuz kuvvet eğrisi).",
        "Dragon Fly / Pelvis Döndüren Hanging Leg Raise (Alt Karın).",
        "Cable Chop (Oblik rotasyon) ve Pallof Press (Anti-rotasyon, uzaktaki elle tutarak)."
      ],
      avoid: [
        "5 dakikalık kardiyo tarzı 500 tekrarlı rutinler: Karın diğer kaslar gibi ağırlıklı progresif yükleme ister.",
        "Kalçayı büküp bacak sallamak: Karın yerine hip fleksörleri çalıştırır.",
        "İki elde ağırlıkla Side Bend: İki el birbirini dengeler ve quadratus lumborum'u zorlar."
      ],
      activeInsufficiency: "Bölgesel yağ yakımı bilimsel olarak imkansızdır. Karın kaslarının görünürlük eşiği erkeklerde ~%20 altı, kadınlarda ~%27-28 altıdır; derinlik için omurga fleksiyonuyla ağırlıklı çalışılmalıdır."
    },
    {
      id: "chest",
      name: "Göğüs (Pectorals)",
      volume: "10-14 set / hf",
      freq: "Haftada 2 gün (hasara yatkındır)",
      cm3: "~260-300 cm³",
      best: [
        "Low Incline Smith / Machine Press (30-45°): Yüksek stabilitede üst göğüs (clavicular baş).",
        "Machine Chest Press / Tam ROM Barbell Bench Press: Orta ve alt göğüs ana kütlesi.",
        "Pec Deck Fly: Triceps yorgunluğu olmadan en stabil göğüs izolasyonu."
      ],
      avoid: [
        "Ayakta dengesiz Cable Crossover ve tepe sıkıştırma: Göğüs uzun sarkomer yapısındadır, kısa boyda büyüme zayıftır.",
        "Decline Bench Press: Modern verilerde gereksiz ve terk edilmiş.",
        "Tek seansta 15-25 set göğüs: Aşırı kas hasarı ve çöp hacim."
      ],
      activeInsufficiency: "Göğüs kasları uzun boyda (esnerken) yüksek mekanik gerilime en iyi yanıt veren kaslardandır. Yarım bench press veya kolları birbirinin üzerinden geçirip sıkmak hipertrofi açısından zaman kaybıdır."
    },
    {
      id: "lats",
      name: "Lat & Sırt",
      volume: "12-16 set / hf",
      freq: "Haftada 2-3 gün (Rotator: 6-10 set)",
      cm3: "Lat + Teres ~244-300 cm³",
      best: [
        "Wide Grip Lat Pulldown / Machine Pulldown / Ağırlıklı Barfiks (Addüksiyon → alt/yan lat).",
        "Close/Neutral Chest-Supported Machine Row (Omuz Ekstansiyonu → üst lat, dirsek kalçaya yakın).",
        "Cable Pullover (Kol/bilek limitini aşan izole lat).",
        "Seated Face Pull / Eksternal Rotasyon (İhmal edilen Infraspinatus & Teres Minor için)."
      ],
      avoid: [
        "Strap kullanmamak: Tutuş/önkol sırttan önce tükenirse lat yüksek eşikli liflere ulaşamaz.",
        "Ayakta dengesiz Dumbbell Row ve Cheat Barbell Row: Göğüs destekli makineler varken stabilite kaybıdır.",
        "Lat çekişinde bilek büküp omuzları yukarı çekmek (shrug): Yükü brachioradialis ve trapeze kaçırır."
      ],
      activeInsufficiency: "Programda 1 addüksiyon (geniş üstten çekiş) + 1 ekstansiyon (dar yatay/dikey çekiş) tüm lat yelpazesini kapatır. Baş üstü 120° üzeri açıda lat kaldıracı azaldığından hafif açılı çekiş daha verimlidir."
    },
    {
      id: "traps",
      name: "Trapez & Üst Sırt",
      volume: "6-10 direkt set / hf",
      freq: "Haftada 2 gün (sırtla birleşik)",
      cm3: "Üst (boyun) · Orta (ana kütle) · Alt",
      best: [
        "Geniş Tutuş Göğüs Destekli / T-Bar Row (Dirsekler yana açık, kürek kemiklerini tam salıp çekme).",
        "Kelso Shrug (Incline benche yaslı kürek kemiği retraksiyonu) ve Geniş Tutuş Smith Machine Shrug.",
        "15° Incline Dumbbell Y-Raise (Alt trapez)."
      ],
      avoid: [
        "Dumbbell Shrug: Ağırlaştıkça tutuş ve dambıl ağırlığı yetersiz kalır.",
        "Hızlı zıplayarak ego shrug yapmak: Tam salma ve kontrollü çekiş şarttır."
      ],
      activeInsufficiency: "Halk arasında 'üst trapez' sanılan ana kütle lif yönü gereği aslında orta trapezdir. Gerçek üst trapez bir boyun kasıdır ve kas hasarına daha yatkındır."
    },
    {
      id: "shoulders",
      name: "Omuz (Deltoids)",
      volume: "6-10 direkt set / hf",
      freq: "Haftada 2-3 gün (yan & arka odak)",
      cm3: "~376-400 cm³ (Üst gövdenin en büyüğü)",
      best: [
        "Chest-Supported Machine / DB Lateral Raise ve Cable Lateral Raise (Yan omuz genişliği).",
        "Power Lateral Raise + Tepe Statik Tutuş (İleri seviye plato aşımı).",
        "Reverse Pec Deck / Incline Bench DB Reverse Fly (Arka omuz).",
        "High Incline Smith/Barbell Overhead Press (70-80°; ön omuz preslerden zaten çalıştığı için ikincil)."
      ],
      avoid: [
        "Arnold Press: Gereksiz döndürme; yan omuzdan çok üst göğüs çalıştırır.",
        "Lateral Raise'de 'elindekini dök / serçe parmak yukarı' (internal rotasyon): Omuz sıkışması riski!"
      ],
      activeInsufficiency: "Deltoid üst gövdenin en büyük kasıdır. Ön omuz tüm göğüs preslerinde yoğun çalıştığı için ekstra front raise genelde gereksizdir; eforun çoğu yan ve arka omuza ayrılmalıdır."
    },
    {
      id: "biceps",
      name: "Biceps & Önkol",
      volume: "6-10 direkt set / hf",
      freq: "Haftada 2 gün (çekişler hariç)",
      cm3: "~300-400 cm³ (Brachialis + Brachioradialis dahil)",
      best: [
        "Preacher / Scott Curl: En zor nokta kasın uzun-orta boyundadır, sıfır hile.",
        "Incline Dumbbell Curl (50-60°): Omuz ekstansiyonuyla tam esneme + tam bilek süpinasyonu.",
        "Cable Face Away Curl ve Düz Barbell Curl.",
        "Hammer Curl / Reverse Curl: Brachialis ve Brachioradialis kalınlığı için (biceps setinden sayılmaz)."
      ],
      avoid: [
        "Z-Bar Curl'e tek hareket olarak güvenmek: Ne tam süpinasyon ne tam nötr, araya kaçar.",
        "Concentration Curl: Ağır progresif yüklemeye uygun değildir."
      ],
      activeInsufficiency: "Biceps'in uzun ve kısa başı izole edilemez; ana görevleri dirsek fleksiyonu ve bilek süpinasyonudur. Sırt çekişleri bicepsi bir miktar büyütse de direkt curl şarttır."
    },
    {
      id: "triceps",
      name: "Triceps",
      volume: "4-8 direkt set / hf",
      freq: "Haftada 2 gün (hasara çok yatkın)",
      cm3: "~237-300+ cm³",
      best: [
        "Cable Overhead Extension (Hafif açılı düz bar): Long head'i uzun boyda izole eder.",
        "Single-Arm Supinated Pushdown / Düz Bar & Uzun Halat Pushdown (Omuz sabit).",
        "Smith Machine Nose Crusher / Dumbbell Skull Crusher."
      ],
      avoid: [
        "Bench Press'in tüm tricepsi büyüttüğünü sanmak: Long head neredeyse hiç çalışmaz.",
        "V-Bar Pushdown: Düz bar ve halat arasında kalır.",
        "Aşırı set yüklemek: Kas hasarı yüksek olduğu için göğüs/omuz pres performansını düşürür."
      ],
      activeInsufficiency: "Triceps Long Head iki eklemden (omuz + dirsek) geçtiği için Bench Press ve Dips'te aktif yetersizliğe düşer. En güvenli pratik: 1 başüstü (Overhead/Skull Crusher) + 1 vücut yanında (Pushdown) hareket kombinlemek."
    }
  ],

  supplements: [
    { name: "Kreatin Monohidrat", tier: "5-star", badge: "5 Yıldız · Temel", desc: "100 yıllık literatürle kas gelişimini ~1/3 hızlandırır, yılda +1.5 kg yağsız kütle desteği verir. Sağlıklı bireylerde böbrek hasarı veya saç dökülmesi kanıtlanmamıştır.", dose: "Her gün 3-5 g (yükleme gereksiz, zamanlama önemsiz)" },
    { name: "D Vitamini", tier: "5-star", badge: "5 Yıldız · Temel", desc: "Toplumda çok yaygın eksiktir. Eksikliği giderildiğinde testosteronu, bağışıklığı, ruh halini ve ağrı/toparlanma verilerini anlamlı iyileştirir.", dose: "Kan tahliline göre 2.000-5.000 IU / gün" },
    { name: "Whey Protein Tozu", tier: "5-star", badge: "5 Yıldız · Pratik", desc: "Zorunlu değildir ancak günlük 1.6-2.2 g/kg protein hedefini düşük kalori ve yüksek fiyat-performansla tamamlamayı kolaylaştırır.", dose: "İhtiyaca göre günde 1-2 ölçek" },
    { name: "Kafein", tier: "5-star", badge: "5 Yıldız · Performans", desc: "En güçlü yasal performans artırıcı; odaklanmayı, yüksek eşikli lif katılımını ve yağ oksidasyonunu destekler. Uyku için öğleden sonra alınmaz.", dose: "3-6 mg / kg (antrenmandan 30-45 dk önce)" },
    { name: "Omega-3 (EPA/DHA)", tier: "5-star", badge: "5 Yıldız · Sağlık", desc: "Haftada düzenli yağlı balık tüketmeyenlerde Omega-6 dengesizliğini ve sistemik inflamasyonu azaltır; eklem ve damar sağlığını korur.", dose: "Günde 1.000-2.000 mg toplam EPA+DHA" },
    { name: "ZMA (Çinko + Magnezyum)", tier: "5-star", badge: "5 Yıldız · Toparlanma", desc: "Çinko eksikse testosteronu normal aralığa çeker; magnezyum uyku kalitesi ve kas gevşemesine destek olur.", dose: "Yatmadan 30-60 dk önce aç karnına" },
    { name: "Sitrülin Malat", tier: "4-star", badge: "4 Yıldız · İhtiyaca Göre", desc: "Nitrik oksit ve kan akışını oral arjininden daha iyi artırır; antrenman dayanıklılığı ve pump desteği verir.", dose: "Antrenman öncesi 6-8 g" },
    { name: "Kolajen (Tip 1+2+3)", tier: "4-star", badge: "4 Yıldız · Eklem/Cilt", desc: "Kas geliştirmez ancak tendon, eklem ve cilt sağlığı için özellikle diyet ve yüksek yük dönemlerinde destekleyicidir.", dose: "Günde 10-15 g (Tip 1-2-3 kompleks)" },
    { name: "Melatonin", tier: "4-star", badge: "4 Yıldız · Uyku", desc: "Uykuyu doğrudan derinleştirmese de sirkadiyen dalışı kolaylaştırır; bağımlılık yapmaz ve negatif geri bildirimi yoktur.", dose: "Yatmadan 30 dk önce <= 5 mg" },
    { name: "Ashwagandha", tier: "4-star", badge: "4 Yıldız · Stres", desc: "Kronik stres ve kortizolü düşürerek uykuya ve toparlanmaya yardım eder; mucizevi testosteron artışı beklenmemelidir.", dose: "Standardize ekstre 300-600 mg / gün" },
    { name: "Testosteron Boosterlar", tier: "trap", badge: "Para Tuzağı · Alma", desc: "Tribulus, azgın keçi otu, ginseng gibi bitkisel karışımlar testosteronu kas geliştirecek düzeyde artırmaz. 1 numaralı pazarlama tuzağıdır.", dose: "0 g · Paranı uykuya ve D vitaminine yatır" },
    { name: "BCAA", tier: "trap", badge: "Para Tuzağı · Alma", desc: "Günlük yeterli protein veya whey alıyorsanız kas protein sentezi açısından sıfır ekstra fayda sağlar.", dose: "0 g · Yerine Whey veya gerekirse EAA" },
    { name: "L-Karnitin & CLA", tier: "trap", badge: "Para Tuzağı · Alma", desc: "Sağlıklı, yeterli protein alan bireylerde bilimsel çalışmalarda ekstra yağ yakımı neredeyse sıfırdır.", dose: "0 g · Kalori açığı ve günlük adım" },
    { name: "Glutamin", tier: "trap", badge: "Para Tuzağı · Alma", desc: "Vücutta en bol bulunan aminoasittir; ağır ameliyat/yanık tedavisi dışında sağlıklı sporcuda kas gelişimine katkısı yoktur.", dose: "0 g · Yeterli protein yeterli" },
    { name: "Yüksek Doz C Vitamini", tier: "trap", badge: "Stratejik · Yıl Boyu Alma", desc: "Günlük ihtiyaç ~100 mg'dır. Yıl boyu 500-2000 mg almak antrenmanın hipertrofi için gereken oksidatif adaptasyonunu baskılar.", dose: "Sadece hasta olunan 1 haftada artır" }
  ],

  testosteroneKillers: [
    { id: "sleep", title: "Günde en az 7.5 - 8 saat tutarlı uyuyorum", detail: "5 saat uyku sadece 1 haftada testosteronu %10-15 düşürür (10-15 yıl yaşlanmaya eşdeğer)." },
    { id: "bf", title: "Vücut yağ oranım sağlıklı aralıkta (%20-25 altı)", detail: "%30+ yağ oranında aromataz enzimi testosteronu östrojene çevirir ve seviyeyi yarı yarıya düşürür." },
    { id: "bpa", title: "Yemek/su için plastik yerine cam veya çelik kap kullanıyorum", detail: "BPA içeren plastik kaplar, konserveler ve termal fişler östrojen benzeri etkiyle LH aksını bozar." },
    { id: "alcohol", title: "Aşırı alkol tüketiminden uzak duruyorum", detail: "Yüksek doz alkol hipofiz ve Leydig hücrelerini baskılayıp etkisi günlerce süren düşüş yaratır." },
    { id: "stress", title: "Kronik stresimi ağırlık antrenmanı ve rutinle yönetiyorum", detail: "Sürekli yüksek kortizol hipotalamus-hipofiz aksını doğrudan baskılar." },
    { id: "transfat", title: "Margarin, cips ve kızartma (trans yağ) tüketmiyorum", detail: "Trans yağlar sistemik inflamasyonu artırıp doğrudan testis fonksiyonunu ve sperm kalitesini bozar." },
    { id: "vitd", title: "D vitamini seviyemi tahlille kontrol edip eksiksiz tutuyorum", detail: "D vitamini eksikliğinin giderilmesi serbest ve toplam testosteronu anlamlı yükseltir." }
  ],

  guides: {
    nutrition: {
      eyebrow: "01 · BESLENME & RECOMP",
      title: "Tok Tutan 10 Besin ve Diyette Kas Koruma",
      image: "assets/images/nutrition_prep.jpg",
      caption: "Su, lif ve proteinin %30-40 termik etkisiyle açlık çekmeden sürdürülebilir kalori kontrolü.",
      items: [
        { title: "Tokluk İndeksi Zirvesi: Patates ve Yüksek Hacimli Besinler", text: "Haşlama/fırın kabuklu patates (#1 tokluk), tavuk/hindi göğüs, light peynir (100 g'da ~300 kcal tasarruf), yumurta, tam tahıllı ekmek, pişmiş yulaf, sebzeler, kabuklu meyve, bakliyat ve suda ton balığı." },
        { title: "Bulk-Cut Döngüsü Çoğu Kişi İçin Zaman Kaybıdır", text: "Helms (2023) ve Garthe (2013) çalışmalarında %5 surplus ile %15 surplus aynı kası vermiştir; fazla kalori sadece yağlanır. İdeal kiloya yakın sporcularda Recomp (maintenance veya +250 kcal) en temiz yoldur." },
        { title: "Diyette Kas Kaybını Önlemenin 3 Altın Kuralı", text: "1 kg kasın %80'i su ve glikojendir; sönme hissine panikleyip pump idmanına dönme. Seti 1-2 kaliteli sete indir ama ağırlığı (mekanik gerilimi) ve haftalık ~2 frekansı koru; karbonhidratı sıfırlama." },
        { title: "Kalori Takibinde 1000 Kcal Sapma Tuzağı", text: "Çiğ/pişmiş pirinç farkı, yemek yağları ve soslar günde 500-1000 kcal hata doğurur. İlk 14-30 gün hassas mutfak terazisiyle beslenmenin röntgenini çek; %100 mükemmeliyet yerine %70 tutarlılık hedefle." }
      ]
    },
    sleep: {
      eyebrow: "02 · UYKU & KARDİYO",
      title: "Uyku Hiyerarşisi ve 3 Büyük Kardiyo Hatası",
      image: "assets/images/recovery_cardio.jpg",
      caption: "Aynı kalori açığında 8.5 saat uyuyanlar yağ, 5.5 saat uyuyanlar ağırlıklı kas kaybeder.",
      items: [
        { title: "En Büyük Etki: Tutarlı Yatış-Kalkış Saati ve Gün Işığı", text: "Her gün aynı saatte yatıp kalkmak sirkadiyen ritmi kilitler. Sabah gün ışığı almak, serin/tam karanlık oda, akşam ağır yemek/alkol/kafeinden kaçınmak ve uykudan 1.5 saat önce hafif karb+protein almak uyku derinliğini artırır." },
        { title: "Kardiyo Hatası #1 ve #2: Hiç Yapmamak veya Aşırı HIIT", text: "Kardiyo kapillarizasyonu ve set arası toparlanmayı artırır. Ancak ağırlık hedeflerken koşu/HIIT yerine eklem dostu LISS (Zone 2 yürüyüş, bisiklet, eliptik; haftada 150-300 dk veya günde 9.000-12.000 adım) seçilmelidir." },
        { title: "Kardiyo Hatası #3: Ağırlıktan Önce veya Aç Karnına Mucize Beklemek", text: "Ağırlık öncesi zorlayıcı kardiyo merkezi yorgunlukla kuvveti düşürür. Aç karnına kardiyo gün sonu toplam kalori açığı aynıysa ekstra yağ yaktırmaz." },
        { title: "Soğuk Duş / Buz Küveti Uyarısı", text: "Antrenman sonrası buz banyosu/soğuk duş inflamasyonu baskılayarak hipertrofi adaptasyonunu zayıflatabilir; kas gelişimi önceliğindeyseniz önerilmez." }
      ]
    },
    injury: {
      eyebrow: "03 · SAKATLIK & ÖLÇÜM",
      title: "Aktif Rehabilitasyon, Tendonlar ve Doğru Ölçüm",
      image: "assets/images/training_biomechanics.jpg",
      caption: "Ağırlık antrenmanı dejeneratif değil rejeneratiftir; temaslı sporlardan katbekat güvenlidir.",
      items: [
        { title: "Sakatlanınca Tamamen Dinlenme: Aktif Yükleme Esastır", text: "Sadece yatıp dinlenmek dokuyu daha da zayıflatır. Ağrı skoru 10 üzerinden 3'ü geçmeyecek açı, hareket ve ROM ile kademeli aktif rehabilitasyon yapılmalıdır." },
        { title: "Tendon ve Ligament Güçlendirme", text: "Tendonlar viskoelastik yapıdadır. Hafif pump tekrarları yerine kontrollü yavaş eksantrikler, izometrik tutuşlar ve yüksek mekanik gerilim kolajen sentezini en güçlü uyarır." },
        { title: "Elektrikli (BIA) Tartılara Kesinlikle Güvenme", text: "BIA tartılar laboratuvar ortamında bile %8-10 sapar; su tüketimiyle sonuç değişir. En güvenilir takip: Haftalık tartı ortalaması + US Navy mezura + WHtR + antrenman ağırlık/tekrar günlüğü + dinlenik nabız." },
        { title: "Parayı Nereye Harcamalı / Harcamamalı?", text: "Al: İyi salon, hassas mutfak terazisi, deri strap, düz tabanlı stabil ayakkabı, cam saklama kabı. Alma: Pahalı akıllı saat kalori sayacı, ev koşu bandı, masaj tabancası, zayıflama çayları." }
      ]
    }
  }
};
