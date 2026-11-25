(function () {
  const DATA = window.KUVVET_DATA;
  if (!DATA) return;

  // =========================================================
  // 0. MOBILE NAV & REST TIMER
  // =========================================================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Inline Rest Timer
  const timerDisplay = document.getElementById("timerDisplay");
  const timerToggleBtn = document.getElementById("timerToggleBtn");
  const timerResetBtn = document.getElementById("timerResetBtn");
  const timerPresets = document.querySelectorAll(".timer-btn[data-sec]");
  let timerBaseSec = 180;
  let timerRemainSec = 180;
  let timerHandle = null;

  function formatSec(s) {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const r = String(s % 60).padStart(2, "0");
    return `${m}:${r}`;
  }

  function updateTimerUI() {
    if (timerDisplay) timerDisplay.textContent = formatSec(timerRemainSec);
    if (timerToggleBtn) timerToggleBtn.textContent = timerHandle ? "Duraklat" : "Başlat";
  }

  function stopTimer() {
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
    }
    updateTimerUI();
  }

  timerPresets.forEach((btn) => {
    btn.addEventListener("click", () => {
      timerPresets.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      timerBaseSec = parseInt(btn.dataset.sec, 10) || 180;
      timerRemainSec = timerBaseSec;
      stopTimer();
    });
  });

  if (timerToggleBtn) {
    timerToggleBtn.addEventListener("click", () => {
      if (timerHandle) {
        stopTimer();
      } else {
        if (timerRemainSec <= 0) timerRemainSec = timerBaseSec;
        timerHandle = setInterval(() => {
          timerRemainSec = Math.max(0, timerRemainSec - 1);
          updateTimerUI();
          if (timerRemainSec === 0) {
            stopTimer();
            if (timerDisplay) timerDisplay.textContent = "HAZIR";
          }
        }, 1000);
        updateTimerUI();
      }
    });
  }

  if (timerResetBtn) {
    timerResetBtn.addEventListener("click", () => {
      timerRemainSec = timerBaseSec;
      stopTimer();
    });
  }
  updateTimerUI();

  // =========================================================
  // 1. PROGRAM SELECTOR & CUT MODE
  // =========================================================
  let activeDaysFilter = "all";
  let activeProgramId = DATA.programs[1].id;
  const dayFiltersEl = document.getElementById("dayFilters");
  const cutToggleEl = document.getElementById("cutModeToggle");
  const cutToggleLabel = document.getElementById("cutToggleLabel");
  const programTabsEl = document.getElementById("programTabs");
  const programDetailEl = document.getElementById("programDetail");

  let cutMode = Boolean(cutToggleEl && cutToggleEl.checked);
  if (cutToggleLabel) cutToggleLabel.classList.toggle("is-on", cutMode);

  function renderProgramTabs() {
    const filtered = DATA.programs.filter((p) =>
      activeDaysFilter === "all" ? true : String(p.daysCount) === activeDaysFilter
    );
    if (!filtered.some((p) => p.id === activeProgramId) && filtered.length > 0) {
      activeProgramId = filtered[0].id;
    }

    programTabsEl.innerHTML = filtered
      .map(
        (p) => `
        <button class="prog-card-btn ${p.id === activeProgramId ? "active" : ""}" data-id="${p.id}">
          <span class="prog-card-meta">${p.daysCount} GÜN / HAFTA</span>
          <span class="prog-card-title">${p.name}</span>
        </button>
      `
      )
      .join("");

    programTabsEl.querySelectorAll(".prog-card-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeProgramId = btn.dataset.id;
        renderProgramTabs();
        renderProgramDetail();
      });
    });
  }

  function renderProgramDetail() {
    const prog = DATA.programs.find((p) => p.id === activeProgramId);
    if (!prog) return;

    const cutBannerHtml = cutMode
      ? `<div class="cut-banner"><strong>Definasyon / Koruma Modu Aktif:</strong> Enerji kısıtlıyken çöp hacmi kesmek için tüm hareketler <strong>1-2 kaliteli sete</strong> düşürüldü. Ağırlıkları, RIR 1-2 şiddetini ve haftalık frekansı mutlaka koru.</div>`
      : "";

    const daysHtml = prog.days
      .map((day) => {
        const rows = day.exercises
          .map((ex) => {
            const displaySets = cutMode ? Math.max(1, Math.min(2, ex.sets - 1)) : ex.sets;
            return `
              <tr>
                <td>
                  <strong>${ex.name}</strong>
                  <span class="ex-note">${ex.note}</span>
                </td>
                <td class="mono" style="white-space: nowrap;">${displaySets} × ${ex.reps}</td>
              </tr>
            `;
          })
          .join("");

        return `
          <div class="day-card">
            <div class="day-card-head">
              <h4>${day.title}</h4>
              <span class="mono" style="font-size: 0.72rem; color: var(--ink-secondary);">${day.focus}</span>
            </div>
            <table class="day-table">
              <thead>
                <tr>
                  <th>Egzersiz &amp; Teknik Not</th>
                  <th>Set × Tekrar</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        `;
      })
      .join("");

    programDetailEl.innerHTML = `
      <div class="program-detail-head">
        <div>
          <span class="eyebrow">${prog.meta}</span>
          <h3 style="font-size: 1.55rem; margin-bottom: 8px;">${prog.name}</h3>
          <p style="color: var(--ink-secondary); max-width: 680px; font-size: 0.94rem;">${prog.summary}</p>
          <div class="program-tags">
            <span class="tag">${prog.schedule}</span>
            <span class="tag tag--olive">Dinlenme: ${prog.restRule}</span>
            <span class="tag tag--accent">Efor: ${prog.rirRule}</span>
          </div>
        </div>
        <button class="btn btn-outline" id="copyProgramBtn" style="white-space: nowrap;">Programı Kopyala →</button>
      </div>
      ${cutBannerHtml}
      <div class="days-grid">${daysHtml}</div>
    `;

    const copyBtn = document.getElementById("copyProgramBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const lines = [
          `KUVVET | ${prog.name} (${cutMode ? "Definasyon/Koruma Modu" : "Standart Mod"})`,
          `Takvim: ${prog.schedule}`,
          `Dinlenme: ${prog.restRule} | Efor: ${prog.rirRule}`,
          ""
        ];
        prog.days.forEach((d) => {
          lines.push(`=== ${d.title} (${d.focus}) ===`);
          d.exercises.forEach((ex) => {
            const s = cutMode ? Math.max(1, Math.min(2, ex.sets - 1)) : ex.sets;
            lines.push(`- ${ex.name}: ${s}x${ex.reps} (${ex.note})`);
          });
          lines.push("");
        });
        const text = lines.join("\n");
        let ok = false;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            ok = true;
          }
        } catch {}
        if (!ok) {
          try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            ok = document.execCommand("copy");
            document.body.removeChild(ta);
          } catch {}
        }
        copyBtn.textContent = ok ? "Panoya Kopyalandı" : "Kopyalanamadı";
        setTimeout(() => {
          copyBtn.textContent = "Programı Kopyala →";
        }, 2000);
      });
    }
  }

  dayFiltersEl.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      dayFiltersEl.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeDaysFilter = btn.dataset.days;
      renderProgramTabs();
      renderProgramDetail();
    });
  });

  cutToggleEl.addEventListener("change", () => {
    cutMode = cutToggleEl.checked;
    cutToggleLabel.classList.toggle("is-on", cutMode);
    renderProgramDetail();
  });

  renderProgramTabs();
  renderProgramDetail();

  // =========================================================
  // 1.B HOME WORKOUT BUILDER (EQUIPMENT-BASED ENGINE)
  // =========================================================
  const homeEquipGrid = document.getElementById("homeEquipGrid");
  const homeSplitFilters = document.getElementById("homeSplitFilters");
  const homeCutToggle = document.getElementById("homeCutToggle");
  const homeCutLabel = document.getElementById("homeCutLabel");
  const homeOutputEl = document.getElementById("homeProgramOutput");

  let homeSplit = "3";
  let homeCutMode = Boolean(homeCutToggle && homeCutToggle.checked);
  if (homeCutLabel) homeCutLabel.classList.toggle("is-on", homeCutMode);

  // Restore saved home equipment
  try {
    const savedEq = JSON.parse(localStorage.getItem("kuvvet_home_eq_v1") || "null");
    if (Array.isArray(savedEq) && homeEquipGrid) {
      homeEquipGrid.querySelectorAll("input[type='checkbox']:not(:disabled)").forEach((cb) => {
        cb.checked = savedEq.includes(cb.value);
        cb.closest(".equip-chip")?.classList.toggle("selected", cb.checked);
      });
    }
  } catch {}

  function getSelectedEquip() {
    const set = new Set(["bodyweight"]);
    if (!homeEquipGrid) return set;
    homeEquipGrid.querySelectorAll("input[type='checkbox']").forEach((cb) => {
      if (cb.checked) set.add(cb.value);
    });
    return set;
  }

  function pickHomeMoves(eq) {
    const hasDb = eq.has("dumbbell");
    const hasBand = eq.has("band");
    const hasPull = eq.has("pullup");
    const hasBench = eq.has("bench");
    const hasAb = eq.has("abroller");

    return {
      quad: hasDb && hasBench
        ? { name: "Dumbbell Bulgarian Split Squat", sets: 3, reps: "8-10", note: "Arka ayak sehpada, ön diz öne sürülerek tam derinlik" }
        : hasDb
          ? { name: "Goblet Squat / Dumbbell Split Squat", sets: 3, reps: "8-12", note: "Topuk hafif yükseltilmiş, tam derinlik" }
          : { name: "Sırt Çantalı Bulgarian Split Squat (Sandalye)", sets: 3, reps: "8-12", note: "Sırtına kitap/su dolu çanta tak (5-15 kg), arka ayak sandalyede tam ROM" },

      rectusFemoris: hasBand
        ? { name: "Bant Destekli Reverse Nordic Curl", sets: 2, reps: "8-12", note: "Kalça düz tutulur; Rectus Femoris uzun boyda çalışır" }
        : { name: "Reverse Nordic Curl / Destekli Sissy Squat", sets: 2, reps: "8-12", note: "Dizler minderde, gövde-kalça düz geriye eğil (Rectus Femoris izolasyonu)" },

      hinge: hasDb
        ? { name: "Dumbbell Romanian Deadlift (RDL)", sets: 3, reps: "8-10", note: "Kalça menteşesi, hamstring uzun boyda gerilir" }
        : hasBand
          ? { name: "Ağır Bantlı Stiff-Leg Deadlift", sets: 3, reps: "10-15", note: "Dizler sabit, bant ayak altında kısaltılarak gerilim artırılır" }
          : { name: "Havlu Sliding Leg Curl + Çantalı Tek Bacak RDL", sets: 3, reps: "8-12", note: "Kaygan zeminde topuk altına havlu koyup çek; RDL için ağır sırt çantasını elinde tut" },

      hPush: hasDb && hasBench
        ? { name: "30° Incline Dumbbell Press", sets: 3, reps: "8-10", note: "Üst göğüs odaklı, altta tam esneme" }
        : hasDb
          ? { name: "Deficit Şınav (Dambıl Üstü) / Floor Press", sets: 3, reps: "8-12", note: "Eller yükseltilerek göğüste tam esneme (uzun ROM)" }
          : { name: "Ağırlıklı Deficit Decline Şınav (Çanta + 2 Kalın Kitap)", sets: 3, reps: "6-12", note: "Sırtına kitap dolu çanta tak, eller iki kalın kitapta, ayaklar sandalyede tam derinlik" },

      hPush2: hasDb && hasBench
        ? { name: "Dumbbell Bench Fly / Flat Press", sets: 3, reps: "10-12", note: "Altta tam esneme, göğüs orta-alt lifler" }
        : hasBand
          ? { name: "Bant Dirençli Şınav / Bantlı Fly", sets: 3, reps: "10-15", note: "Bant sırttan geçirilerek üst noktada mekanik gerilim artırılır" }
          : { name: "Geniş Tutuş Deficit Şınav (Kitap Yükseltili)", sets: 3, reps: "8-15", note: "Göğüs kitapların arasına tamamen inene kadar esnet, RIR 1" },

      vPull: hasPull
        ? { name: "Barfiks / Chin-up (Kontrollü Tam ROM)", sets: 3, reps: "6-10", note: "Altta tam asılma, göğsü bara çek (gerekirse bant destekli)" }
        : hasBand
          ? { name: "Kapı Ankrajlı Bantlı Lat Pulldown", sets: 3, reps: "10-15", note: "Diz üstü oturarak yüksek stabilitede lat addüksiyonu" }
          : { name: "Kapı Çarşafı (TRX) veya Masa Altı Inverted Row", sets: 3, reps: "8-15", note: "Kalın çarşafa düğüm atıp kapalı kapının üstünden geçir (kapı sana doğru açılmasın)" },

      hPull: hasDb && hasBench
        ? { name: "Göğüs Destekli Incline Dumbbell Row", sets: 3, reps: "8-12", note: "Dirsek kalçaya yakın = Lat · Dirsek yana açık = Üst sırt/trapez" }
        : hasDb
          ? { name: "Tek Kol Destekli Dumbbell Row", sets: 3, reps: "8-12", note: "Serbest el sehpaya/sandalyeye sabit, gövde savrulmadan" }
          : hasBand
            ? { name: "Oturarak Bantlı Wide Seated Row", sets: 3, reps: "12-15", note: "Dirsekler yana açık, orta trapez ve arka omuz" }
            : { name: "Kitap Dolu Sırt Çantası / 5L Su Şişesi Tek Kol Row", sets: 3, reps: "8-15", note: "Serbest elinle sandalyeden destek al, çantayı kalçana doğru çek" },

      latRaise: hasDb && hasBench
        ? { name: "Chest-Supported Incline DB Lateral Raise", sets: 3, reps: "12-15", note: "Skapular düzlemde yüksek stabilite, yan omuz" }
        : hasDb
          ? { name: "Dumbbell Lateral Raise (Hafif Öne Eğik)", sets: 3, reps: "12-15", note: "Serçe parmağı yukarı çevirme, skapular düzlemde aç" }
          : hasBand
            ? { name: "Tek Taraflı Bantlı Lateral Raise", sets: 3, reps: "12-15", note: "Altta gerilim devam edecek şekilde bant kısaltılır" }
            : { name: "Su Şişesi (1.5L-5L) Lateral Raise + Pike Push-up", sets: 3, reps: "12-15", note: "İki 1.5L/2.5L şişeyle yan omuz açış; zorlaşması için şişeleri kum/su ile ağırlaştır" },

      rearDelt: hasDb && hasBench
        ? { name: "Incline Bench DB Reverse Fly", sets: 3, reps: "12-15", note: "Göğüs yaslı, kolları dışa açarak arka omuz" }
        : hasBand
          ? { name: "Bantlı Face Pull / Band Pull-Apart", sets: 3, reps: "15-20", note: "Arka omuz ve rotator cuff (eksternal rotasyon)" }
          : hasDb
            ? { name: "Bent-Over Dumbbell Reverse Fly", sets: 3, reps: "12-15", note: "Gövde yere paralel, hafif ağırlıkla tam kontrol" }
            : { name: "Kapı Çarşafı Face Pull / Su Şişesi Reverse Fly", sets: 3, reps: "12-15", note: "Çarşafla yüz hizasına dış rotasyonlu çekiş; arka omuz ve rotator cuff" },

      biceps: hasDb && hasBench
        ? { name: "50° Incline Dumbbell Curl", sets: 3, reps: "8-12", note: "Kollar geride tam esneme + tam bilek süpinasyonu" }
        : hasDb
          ? { name: "Süpinasyonlu Dumbbell Curl + Hammer Curl", sets: 3, reps: "8-12", note: "Omuzu oynatmadan tam açılıp kapanma" }
          : hasPull
            ? { name: "Dar Süpinasyonlu Chin-up", sets: 3, reps: "6-10", note: "Yüksek mekanik gerilimli eksantrik biceps yüklemesi" }
            : hasBand
              ? { name: "Bantlı Face-Away Curl", sets: 3, reps: "10-15", note: "Kol gövde arkasında uzun boyda gerilim" }
              : { name: "Sırt Çantası / Süpürge Sapı Biceps Curl", sets: 3, reps: "8-15", note: "Süpürge sapını ağır çantanın askısından geçirip iki elle düz bar curl yap" },

      triceps: hasDb
        ? { name: "Overhead Dumbbell Triceps Extension", sets: 3, reps: "8-12", note: "Omuz sabit, Triceps Long Head uzun boyda izole edilir" }
        : hasBand
          ? { name: "Bantlı Overhead Extension / Pushdown", sets: 3, reps: "10-15", note: "Long head için başüstü tam esneme" }
          : { name: "Masa Kenarı Bodyweight Skull Crusher / 5L Overhead Ext.", sets: 3, reps: "8-12", note: "Eller masa kenarında alnı kenara indir veya 5L şişeyi baş arkasına indirip uzat" },

      calf: hasDb
        ? { name: "Tek Bacak Basamak Standing Calf Raise (Dambıllı)", sets: 3, reps: "10-15", note: "Diz tam kilitli, altta 1 sn tam esneme" }
        : { name: "Çantalı Tek Bacak Basamak Standing Calf Raise", sets: 3, reps: "10-15", note: "Kalın kitap/basamak kenarında diz tam düz, sırt çantasıyla yükleme" },

      core: hasAb
        ? { name: "Ab Roller (Karın Tekerleği) Rollout", sets: 3, reps: "8-15", note: "Pelvis içe dönük, bel çukurlaşmadan tam uzanma" }
        : hasPull
          ? { name: "Hanging Knee / Leg Raise (Pelvis Döndürerek)", sets: 3, reps: "10-15", note: "Bacak sallamak yerine kalçayı kaburgaya bük" }
          : { name: "Kaygan Zeminde Havlu Ab Rollout + Reverse Crunch", sets: 3, reps: "8-15", note: "Dizler minderde, eller havlu üstünde öne kaydır (Ab Roller'ın ücretsiz eşdeğeri)" }
    };
  }

  function renderHomeProgram() {
    if (!homeOutputEl) return;
    const eq = getSelectedEquip();
    try {
      localStorage.setItem("kuvvet_home_eq_v1", JSON.stringify([...eq]));
    } catch {}

    const m = pickHomeMoves(eq);
    let days = [];
    let schedule = "";

    if (homeSplit === "3") {
      schedule = "Pazartesi (A) · Çarşamba (B) · Cuma (A) · Her seans 40-50 dk";
      days = [
        {
          title: "Ev Günü A",
          focus: "Quad + İtiş + Dikey Çekiş + Yan Omuz + Kalf",
          exercises: [m.quad, m.hPush, m.vPull, m.rectusFemoris, m.latRaise, m.calf]
        },
        {
          title: "Ev Günü B",
          focus: "Hamstring + Göğüs/İtiş + Yatay Çekiş + Kollar + Core",
          exercises: [m.hinge, m.hPush2, m.hPull, m.triceps, m.biceps, m.core]
        }
      ];
    } else {
      schedule = "Pzt (Upper 1) · Salı (Lower 1) · Perş (Upper 2) · Cuma (Lower 2)";
      days = [
        {
          title: "Ev Upper 1 (İtiş Odaklı)",
          focus: "Göğüs + Çekiş + Yan Omuz + Triceps",
          exercises: [m.hPush, m.hPull, m.hPush2, m.latRaise, m.triceps]
        },
        {
          title: "Ev Lower 1 (Quad Odaklı)",
          focus: "Quad + Rectus Femoris + Kalf + Core",
          exercises: [m.quad, m.rectusFemoris, m.hinge, m.calf, m.core]
        },
        {
          title: "Ev Upper 2 (Çekiş Odaklı)",
          focus: "Lat + Üst Sırt + Arka Omuz + Biceps",
          exercises: [m.vPull, m.hPull, m.rearDelt, m.latRaise, m.biceps]
        },
        {
          title: "Ev Lower 2 (Posterior Odaklı)",
          focus: "Hamstring + Kalça + Quad + Kalf + Core",
          exercises: [m.hinge, m.quad, m.rectusFemoris, m.calf, m.core]
        }
      ];
    }

    // Smart equipment upgrade tip
    let tipText = "";
    if (!eq.has("dumbbell") && !eq.has("band") && !eq.has("pullup") && !eq.has("bench") && !eq.has("abroller")) {
      tipText = "Sıfır Ekipman Ev Kiti: (1) Kitap/su şişesi dolu sırt çantası (5-20 kg yükleme), (2) İki kalın kitap (deficit şınav & calf basamağı), (3) Düğümlü kalın çarşaf + kapalı kapı (TRX çekiş & face pull), (4) Kaygan zeminde havlu (sliding leg curl & ab rollout), (5) Süpürge sapı + çanta (barbell curl).";
    } else if (!eq.has("dumbbell") && !eq.has("band") && !eq.has("pullup")) {
      tipText = "Ekipman Önerisi: Sadece vücut ağırlığında sırt çekişleri ve yan omuz sınırlıdır. En yüksek fiyat-performans yükseltmesi: 15-25 kg direnç bandı veya ayarlanabilir dambıl seti.";
    } else if (!eq.has("pullup") && !eq.has("band")) {
      tipText = "Ekipman Önerisi: Dambıl harika bir temel kurar; dikey sırt çekişleri (Lat) ve arka omuz için bir kapı barfiks barı veya direnç bandı programı %100'e tamamlar.";
    } else if (eq.has("dumbbell") && !eq.has("bench")) {
      tipText = "Ekipman Önerisi: Ayarlanabilir bir sehpa (bench) eklediğinde Incline Press, Göğüs Destekli Row ve 50° Incline Curl açılır.";
    } else {
      tipText = "Ekipman Kurulumu Güçlü: Mevcut malzemelerinle salon düzeyinde tam ROM ve aktif yetersizlik çözümlü hipertrofi programı uygulanabilir.";
    }

    const eqLabels = [...eq]
      .map((k) => ({ bodyweight: "Vücut Ağırlığı", dumbbell: "Dambıl", band: "Direnç Bandı", pullup: "Barfiks Barı", bench: "Sehpa", abroller: "Ab Roller" }[k]))
      .join(" + ");

    const cutBannerHtml = homeCutMode
      ? `<div class="cut-banner"><strong>Ev Definasyon Modu Aktif:</strong> Tüm hareketler 1-2 sert sete çekildi. Evde ağırlık artıramıyorsan tekrar kalitesini ve RIR 0-1 şiddetini koru.</div>`
      : "";

    const daysHtml = days
      .map((d) => {
        const rows = d.exercises
          .map((ex) => {
            const s = homeCutMode ? Math.max(1, Math.min(2, ex.sets - 1)) : ex.sets;
            return `
              <tr>
                <td>
                  <strong>${ex.name}</strong>
                  <span class="ex-note">${ex.note}</span>
                </td>
                <td class="mono" style="white-space: nowrap;">${s} × ${ex.reps}</td>
              </tr>
            `;
          })
          .join("");
        return `
          <div class="day-card">
            <div class="day-card-head">
              <h4>${d.title}</h4>
              <span class="mono" style="font-size: 0.72rem; color: var(--ink-secondary);">${d.focus}</span>
            </div>
            <table class="day-table">
              <thead>
                <tr>
                  <th>Egzersiz &amp; Evde Uygulama Notu</th>
                  <th>Set × Tekrar</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        `;
      })
      .join("");

    homeOutputEl.innerHTML = `
      <div class="program-detail-head">
        <div>
          <span class="eyebrow">AKTİF EKİPMAN: ${eqLabels.toUpperCase()}</span>
          <h3 style="font-size: 1.5rem; margin-bottom: 8px;">Kişisel Ev Programın (${homeSplit === "3" ? "3 Gün Full Body" : "4 Gün Upper / Lower"})</h3>
          <div class="program-tags">
            <span class="tag">${schedule}</span>
            <span class="tag tag--olive">Dinlenme: 2-3 dk</span>
            <span class="tag tag--accent">Hedef: RIR 0-2 · Tam ROM</span>
          </div>
        </div>
        <button class="btn btn-outline" id="copyHomeBtn" style="white-space: nowrap;">Ev Programını Kopyala →</button>
      </div>
      <div class="home-tip-bar">${tipText}</div>
      ${cutBannerHtml}
      <div class="days-grid">${daysHtml}</div>
    `;

    const copyHomeBtn = document.getElementById("copyHomeBtn");
    if (copyHomeBtn) {
      copyHomeBtn.addEventListener("click", async () => {
        const lines = [
          `KUVVET | Ev Programı (${homeSplit === "3" ? "3 Gün Full Body" : "4 Gün Upper / Lower"})`,
          `Ekipmanlar: ${eqLabels}`,
          `Takvim: ${schedule}`,
          ""
        ];
        days.forEach((d) => {
          lines.push(`=== ${d.title} (${d.focus}) ===`);
          d.exercises.forEach((ex) => {
            const s = homeCutMode ? Math.max(1, Math.min(2, ex.sets - 1)) : ex.sets;
            lines.push(`- ${ex.name}: ${s}x${ex.reps} (${ex.note})`);
          });
          lines.push("");
        });
        const text = lines.join("\n");
        let ok = false;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            ok = true;
          }
        } catch {}
        if (!ok) {
          try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            ok = document.execCommand("copy");
            document.body.removeChild(ta);
          } catch {}
        }
        copyHomeBtn.textContent = ok ? "Panoya Kopyalandı" : "Kopyalanamadı";
        setTimeout(() => {
          copyHomeBtn.textContent = "Ev Programını Kopyala →";
        }, 2000);
      });
    }
  }

  if (homeEquipGrid) {
    homeEquipGrid.querySelectorAll("input[type='checkbox']:not(:disabled)").forEach((cb) => {
      cb.addEventListener("change", () => {
        cb.closest(".equip-chip")?.classList.toggle("selected", cb.checked);
        renderHomeProgram();
      });
    });
  }

  if (homeSplitFilters) {
    homeSplitFilters.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        homeSplitFilters.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        homeSplit = btn.dataset.split;
        renderHomeProgram();
      });
    });
  }

  if (homeCutToggle) {
    homeCutToggle.addEventListener("change", () => {
      homeCutMode = homeCutToggle.checked;
      homeCutLabel?.classList.toggle("is-on", homeCutMode);
      renderHomeProgram();
    });
  }

  renderHomeProgram();

  // =========================================================
  // 2. MEASUREMENT LAB TABS (4 EVIDENCE-BASED TOOLS)
  // =========================================================
  const labTabsEl = document.getElementById("labTabs");
  if (labTabsEl) {
    labTabsEl.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.lab;
        labTabsEl.querySelectorAll(".pill-btn").forEach((b) => {
          const isAct = b === btn;
          b.classList.toggle("active", isAct);
          b.setAttribute("aria-selected", String(isAct));
        });
        document.querySelectorAll(".lab-panel").forEach((p) => {
          p.classList.toggle("active", p.id === `lab-${target}`);
        });
      });
    });
  }

  // --- TOOL 1: US NAVY + WHtR + FFMI + TDEE + WATER ---
  const genderEl = document.getElementById("calcGender");
  const heightEl = document.getElementById("calcHeight");
  const weightEl = document.getElementById("calcWeight");
  const waistEl = document.getElementById("calcWaist");
  const neckEl = document.getElementById("calcNeck");
  const hipEl = document.getElementById("calcHip");
  const hipField = document.getElementById("hipField");
  const activityEl = document.getElementById("calcActivity");
  const calcResultsEl = document.getElementById("calcResults");

  // Restore saved measurements from localStorage
  try {
    const saved = JSON.parse(localStorage.getItem("kuvvet_comp_v1") || "null");
    if (saved) {
      if (saved.gender) genderEl.value = saved.gender;
      if (saved.height) heightEl.value = saved.height;
      if (saved.weight) weightEl.value = saved.weight;
      if (saved.waist) waistEl.value = saved.waist;
      if (saved.neck) neckEl.value = saved.neck;
      if (saved.hip) hipEl.value = saved.hip;
      if (saved.act) activityEl.value = saved.act;
    }
  } catch {}

  function computeCalc() {
    const gender = genderEl.value;
    const height = Math.max(140, parseFloat(heightEl.value) || 180);
    const weight = Math.max(40, parseFloat(weightEl.value) || 80);
    const waist = parseFloat(waistEl.value) || 84;
    const neck = parseFloat(neckEl.value) || 38;
    const hip = parseFloat(hipEl.value) || 98;
    const act = parseFloat(activityEl.value) || 1.45;

    hipField.style.display = gender === "female" ? "flex" : "none";

    try {
      localStorage.setItem(
        "kuvvet_comp_v1",
        JSON.stringify({ gender, height, weight, waist, neck, hip, act })
      );
    } catch {}

    const diff = gender === "male" ? waist - neck : waist + hip - neck;
    if (diff <= 5) {
      calcResultsEl.innerHTML = `
        <h3 style="font-size: 1.2rem; margin-bottom: 14px;">Ölçüm Doğrulaması Gerekli</h3>
        <div class="cut-banner">
          US Navy formülü için ${gender === "male" ? "bel çevresi boyun çevresinden" : "bel + kalça toplamı boyun çevresinden"} en az 6 cm büyük olmalıdır.
        </div>
      `;
      return;
    }

    let bf = 18;
    if (gender === "male") {
      const denom = 1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(height);
      bf = denom > 0 ? 495 / denom - 450 : 18;
    } else {
      const denom = 1.29579 - 0.35004 * Math.log10(diff) + 0.221 * Math.log10(height);
      bf = denom > 0 ? 495 / denom - 450 : 24;
    }
    bf = Math.min(50, Math.max(4, bf));

    const lbm = weight * (1 - bf / 100);
    const hM = height / 100;
    const whtr = waist / height;
    const whtrLabel = whtr < 0.5 ? "Sağlıklı (< 0.50)" : whtr < 0.58 ? "Artmış Risk" : "Yüksek Risk";
    const ffmi = lbm / (hM * hM) + 6.1 * (1.8 - hM);
    const waterL = ((weight * 38) / 1000).toFixed(1);

    const bmr = 370 + 21.6 * lbm;
    const tdee = Math.round(bmr * act);

    let strategyTitle = "";
    let strategyDesc = "";
    let targetCal = tdee;

    const lowThresh = gender === "male" ? 14 : 21;
    const midThresh = gender === "male" ? 21 : 28;

    if (bf < lowThresh) {
      targetCal = tdee + 250;
      strategyTitle = "Clean Surplus (+250 kcal)";
      strategyDesc = "Yağ oranın oldukça düşük. Aşırı yağlanmadan ayda ~1 kg artış ve progressive overload için +250 kcal fazlalık idealdir.";
    } else if (bf <= midThresh) {
      targetCal = tdee;
      strategyTitle = "Vücut Rekompozisyonu (Maintenance)";
      strategyDesc = "İdeal bazal aralığa yakınsın. Bakım kalorisinde yüksek protein ve sert antrenmanla aynı anda yağ yakıp kas inşa edebilirsin.";
    } else {
      const desiredDeficit = bf > (gender === "male" ? 26 : 33) ? 550 : 400;
      const safeFloor = Math.min(tdee - 200, 1400);
      targetCal = Math.max(safeFloor, tdee - desiredDeficit);
      const actualDeficit = Math.max(0, tdee - targetCal);
      strategyTitle = `Kontrollü Yağ Kaybı (-${actualDeficit} kcal)`;
      strategyDesc = "Öncelik sürdürülebilir yağ kaybı. Haftada vücut ağırlığının %0.5-1'i hızla inerken ağırlık şiddetini koru; BIA tartı yerine mezurayı takip et.";
    }

    const proteinG = Math.round(lbm * 2.1);
    const fatG = Math.round((targetCal * 0.25) / 9);
    const carbG = Math.round(Math.max(0, targetCal - proteinG * 4 - fatG * 9) / 4);

    calcResultsEl.innerHTML = `
      <h3 style="font-size: 1.2rem; margin-bottom: 18px;">Kompozisyon ve Kalori Projeksiyonu</h3>
      <div class="result-grid">
        <div class="result-stat">
          <span class="result-stat-label">US Navy Yağ Oranı</span>
          <span class="result-stat-val">%${bf.toFixed(1)}</span>
        </div>
        <div class="result-stat">
          <span class="result-stat-label">WHtR (Bel / Boy Oranı)</span>
          <span class="result-stat-val">${whtr.toFixed(2)}</span>
          <span style="font-size: 0.75rem; color: var(--ink-secondary);">${whtrLabel}</span>
        </div>
        <div class="result-stat">
          <span class="result-stat-label">Normalize FFMI</span>
          <span class="result-stat-val">${ffmi.toFixed(1)}</span>
          <span style="font-size: 0.75rem; color: var(--ink-secondary);">Yağsız kütle: ${lbm.toFixed(1)} kg</span>
        </div>
        <div class="result-stat">
          <span class="result-stat-label">TDEE &amp; Günlük Su</span>
          <span class="result-stat-val">${tdee} kcal</span>
          <span style="font-size: 0.75rem; color: var(--ink-secondary);">Su hedefi: ~${waterL} L / gün</span>
        </div>
      </div>

      <div class="strategy-box">
        <h4>Önerilen Strateji: ${strategyTitle}</h4>
        <p>${strategyDesc}</p>
        <div class="macro-bar">
          <div>
            <span class="result-stat-label" style="color: var(--ink-muted-dark);">Hedef Kalori</span>
            <strong class="mono" style="font-size: 1.15rem; color: #F4F1EA;">${targetCal} kcal</strong>
          </div>
          <div>
            <span class="result-stat-label" style="color: var(--ink-muted-dark);">Protein / Yağ</span>
            <strong class="mono" style="font-size: 1.05rem; color: #F4F1EA;">${proteinG}g / ${fatG}g</strong>
          </div>
          <div>
            <span class="result-stat-label" style="color: var(--ink-muted-dark);">Karbonhidrat</span>
            <strong class="mono" style="font-size: 1.15rem; color: #F4F1EA;">${carbG}g</strong>
          </div>
        </div>
      </div>
      <p style="font-size: 0.8rem; color: var(--ink-secondary);">
        WHtR (Bel/Boy &lt; 0.50), kardiyometabolik riski BMI'dan daha doğru öngörür. İlk 14 gün mutfak terazisiyle ölçüm yapıp trende göre ±200 kcal güncelle.
      </p>
    `;
  }

  [genderEl, heightEl, weightEl, waistEl, neckEl, hipEl, activityEl].forEach((el) => {
    el.addEventListener("input", computeCalc);
    el.addEventListener("change", computeCalc);
  });
  computeCalc();

  // --- TOOL 2: 1RM & RIR LOAD TABLE (EPLEY + BRZYCKI) ---
  const rmWeightEl = document.getElementById("rmWeight");
  const rmRepsEl = document.getElementById("rmReps");
  const rmRirEl = document.getElementById("rmRir");
  const rmResultsEl = document.getElementById("rmResults");

  function compute1RM() {
    const w = Math.max(5, parseFloat(rmWeightEl.value) || 90);
    const reps = Math.min(15, Math.max(1, parseInt(rmRepsEl.value, 10) || 6));
    const rir = Math.min(4, Math.max(0, parseInt(rmRirEl.value, 10) || 0));
    const effReps = reps + rir;

    const epley = effReps === 1 ? w : w * (1 + effReps / 30);
    const brzycki = effReps === 1 ? w : w * (36 / Math.max(1, 37 - effReps));
    const est1rm = (epley + brzycki) / 2;

    const tableRows = [
      { pct: 95, reps: "2 tekrar (RIR 0)", note: "Pik kuvvet" },
      { pct: 90, reps: "3-4 tekrar", note: "Ağır bileşik" },
      { pct: 85, reps: "5-6 tekrar", note: "Kuvvet + Hipertrofi" },
      { pct: 80, reps: "7-8 tekrar", note: "Ana hipertrofi bloğu" },
      { pct: 75, reps: "9-10 tekrar", note: "Orta tekrar hacmi" },
      { pct: 70, reps: "11-12 tekrar", note: "İzole / makine seti" }
    ]
      .map((row) => {
        const kg = Math.round((est1rm * (row.pct / 100)) / 2.5) * 2.5;
        return `
          <tr>
            <td class="mono"><strong>%${row.pct}</strong></td>
            <td class="mono"><strong>${kg.toFixed(1)} kg</strong></td>
            <td>${row.reps}</td>
            <td style="color: var(--ink-secondary);">${row.note}</td>
          </tr>
        `;
      })
      .join("");

    rmResultsEl.innerHTML = `
      <h3 style="font-size: 1.2rem; margin-bottom: 16px;">Tahmini 1RM ve Çalışma Ağırlıkları</h3>
      <div class="result-grid">
        <div class="result-stat">
          <span class="result-stat-label">Tahmini 1RM (Ortalama)</span>
          <span class="result-stat-val">${est1rm.toFixed(1)} kg</span>
        </div>
        <div class="result-stat">
          <span class="result-stat-label">Epley / Brzycki Aralığı</span>
          <span class="result-stat-val" style="font-size: 1.1rem;">${epley.toFixed(1)} / ${brzycki.toFixed(1)} kg</span>
        </div>
      </div>
      <table class="rm-table">
        <thead>
          <tr>
            <th>Yüzde</th>
            <th>Yük (2.5 kg yuvarlı)</th>
            <th>Hedef Tekrar</th>
            <th>Kullanım</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    `;
  }

  [rmWeightEl, rmRepsEl, rmRirEl].forEach((el) => {
    el.addEventListener("input", compute1RM);
    el.addEventListener("change", compute1RM);
  });
  compute1RM();

  // --- TOOL 3: RELATIVE STRENGTH & OFFICIAL DOTS SCORE ---
  const dotsGenderEl = document.getElementById("dotsGender");
  const dotsBwEl = document.getElementById("dotsBw");
  const dotsSquatEl = document.getElementById("dotsSquat");
  const dotsBenchEl = document.getElementById("dotsBench");
  const dotsDeadEl = document.getElementById("dotsDead");
  const dotsOhpEl = document.getElementById("dotsOhp");
  const dotsResultsEl = document.getElementById("dotsResults");

  function calcDotsCoeff(bw, isMale) {
    const x = Math.min(210, Math.max(40, bw));
    const c = isMale
      ? [-307.75076, 24.0900756, -0.1918759221, 0.0007391293, -0.000001093]
      : [-57.96288, 13.6175032, -0.1126655495, 0.0005158568, -0.0000010706];
    const denom = c[0] + c[1] * x + c[2] * x ** 2 + c[3] * x ** 3 + c[4] * x ** 4;
    return 500 / denom;
  }

  function classifyLift(ratio, tiers) {
    if (ratio >= tiers[3]) return { label: "Elit", pct: 100 };
    if (ratio >= tiers[2]) return { label: "İleri", pct: 78 };
    if (ratio >= tiers[1]) return { label: "Orta", pct: 55 };
    if (ratio >= tiers[0]) return { label: "Başlangıç+", pct: 34 };
    return { label: "Yeni Başlayan", pct: 18 };
  }

  function computeDots() {
    const isMale = dotsGenderEl.value === "male";
    const bw = Math.max(40, parseFloat(dotsBwEl.value) || 80);
    const sq = Math.max(0, parseFloat(dotsSquatEl.value) || 0);
    const bp = Math.max(0, parseFloat(dotsBenchEl.value) || 0);
    const dl = Math.max(0, parseFloat(dotsDeadEl.value) || 0);
    const ohp = Math.max(0, parseFloat(dotsOhpEl.value) || 0);

    const total = sq + bp + dl;
    const dots = total * calcDotsCoeff(bw, isMale);

    let dotsTier = "Başlangıç";
    if (dots >= 420) dotsTier = "Elit Yarışmacı";
    else if (dots >= 350) dotsTier = "İleri Seviye";
    else if (dots >= 270) dotsTier = "Orta Seviye";
    else if (dots >= 200) dotsTier = "Gelişen Sporcu";

    const lifts = [
      { name: "Squat", val: sq, tiers: isMale ? [1.0, 1.5, 2.0, 2.5] : [0.7, 1.1, 1.5, 1.9] },
      { name: "Bench Press", val: bp, tiers: isMale ? [0.75, 1.15, 1.5, 1.85] : [0.45, 0.7, 1.0, 1.25] },
      { name: "Deadlift", val: dl, tiers: isMale ? [1.25, 1.8, 2.3, 2.8] : [0.9, 1.35, 1.8, 2.2] },
      { name: "Overhead Press", val: ohp, tiers: isMale ? [0.5, 0.75, 1.0, 1.25] : [0.3, 0.5, 0.7, 0.9] }
    ];

    const barsHtml = lifts
      .map((l) => {
        const ratio = l.val / bw;
        const cls = classifyLift(ratio, l.tiers);
        return `
          <div class="strength-row">
            <div class="strength-row-head">
              <strong>${l.name}</strong>
              <span class="mono">${ratio.toFixed(2)}× BW · ${cls.label}</span>
            </div>
            <div class="strength-bar-track">
              <div class="strength-bar-fill ${cls.pct >= 78 ? "strength-bar-fill--olive" : ""}" style="width: ${cls.pct}%;"></div>
            </div>
          </div>
        `;
      })
      .join("");

    dotsResultsEl.innerHTML = `
      <h3 style="font-size: 1.2rem; margin-bottom: 16px;">DOTS ve Göreceli Kuvvet Profili</h3>
      <div class="result-grid">
        <div class="result-stat">
          <span class="result-stat-label">Resmi DOTS Skoru</span>
          <span class="result-stat-val">${dots.toFixed(1)}</span>
          <span style="font-size: 0.76rem; color: var(--ink-secondary);">${dotsTier}</span>
        </div>
        <div class="result-stat">
          <span class="result-stat-label">SBD Toplam (Total)</span>
          <span class="result-stat-val">${total.toFixed(0)} kg</span>
          <span style="font-size: 0.76rem; color: var(--ink-secondary);">${(total / bw).toFixed(2)}× Vücut Ağırlığı</span>
        </div>
      </div>
      ${barsHtml}
    `;
  }

  [dotsGenderEl, dotsBwEl, dotsSquatEl, dotsBenchEl, dotsDeadEl, dotsOhpEl].forEach((el) => {
    el.addEventListener("input", computeDots);
    el.addEventListener("change", computeDots);
  });
  computeDots();

  // --- TOOL 4: KARVONEN HEART RATE ZONES ---
  const hrAgeEl = document.getElementById("hrAge");
  const hrRestEl = document.getElementById("hrRest");
  const hrResultsEl = document.getElementById("hrResults");

  function computeHR() {
    const age = Math.min(85, Math.max(15, parseInt(hrAgeEl.value, 10) || 27));
    const rhr = Math.min(110, Math.max(38, parseInt(hrRestEl.value, 10) || 62));
    // Tanaka formula: 208 - 0.7 * age (more accurate than 220 - age)
    const maxHr = Math.round(208 - 0.7 * age);
    const hrr = Math.max(40, maxHr - rhr);

    let rhrStatus = "Ortalama Kondisyon";
    if (rhr <= 55) rhrStatus = "Atletik / Çok İyi Kondisyon";
    else if (rhr <= 65) rhrStatus = "İyi Kondisyon";
    else if (rhr >= 76) rhrStatus = "Yüksek · Haftalık Zone 2 Kardiyo Ekle";

    const zones = [
      { z: "Zone 1", pct: [0.5, 0.6], name: "Aktif Toparlanma", use: "Yürüyüş, dinlenme günleri" },
      { z: "Zone 2", pct: [0.6, 0.7], name: "Aerobik / LISS", use: "Yağ yakımı, kapillarizasyon (ağırlıkçı dostu)" },
      { z: "Zone 3", pct: [0.7, 0.8], name: "Tempo", use: "Orta-yüksek aerobik dayanıklılık" },
      { z: "Zone 4", pct: [0.8, 0.9], name: "Laktat Eşiği", use: "Yüksek yorgunluk, koşu/interval" },
      { z: "Zone 5", pct: [0.9, 1.0], name: "VO2 Max", use: "Kısa maksimal sprint/efor" }
    ];

    const z2Lo = Math.round(rhr + hrr * 0.6);
    const z2Hi = Math.round(rhr + hrr * 0.7);

    const rows = zones
      .map((item) => {
        const lo = Math.round(rhr + hrr * item.pct[0]);
        const hi = Math.round(rhr + hrr * item.pct[1]);
        const highlight = item.z === "Zone 2" ? 'style="background: var(--accent-olive-soft);"' : "";
        return `
          <tr ${highlight}>
            <td class="mono"><strong>${item.z}</strong></td>
            <td class="mono"><strong>${lo}-${hi} BPM</strong></td>
            <td>${item.name}</td>
            <td style="color: var(--ink-secondary);">${item.use}</td>
          </tr>
        `;
      })
      .join("");

    hrResultsEl.innerHTML = `
      <h3 style="font-size: 1.2rem; margin-bottom: 16px;">Karvonen Nabız Bölgeleri</h3>
      <div class="result-grid">
        <div class="result-stat">
          <span class="result-stat-label">Hedef Zone 2 (LISS)</span>
          <span class="result-stat-val">${z2Lo}-${z2Hi} BPM</span>
          <span style="font-size: 0.75rem; color: var(--ink-secondary);">Ağırlık sonrası 150-300 dk/hf</span>
        </div>
        <div class="result-stat">
          <span class="result-stat-label">Tanaka Max HR / Dinlenik</span>
          <span class="result-stat-val">${maxHr} / ${rhr}</span>
          <span style="font-size: 0.75rem; color: var(--ink-secondary);">${rhrStatus}</span>
        </div>
      </div>
      <table class="rm-table">
        <thead>
          <tr>
            <th>Bölge</th>
            <th>Nabız</th>
            <th>Tür</th>
            <th>Kullanım</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  [hrAgeEl, hrRestEl].forEach((el) => {
    el.addEventListener("input", computeHR);
    el.addEventListener("change", computeHR);
  });
  computeHR();

  // =========================================================
  // 3. BIOMECHANICS EXPLORER (11 MUSCLE GROUPS)
  // =========================================================
  let activeMuscleId = DATA.muscles[0].id;
  const muscleNavEl = document.getElementById("muscleNav");
  const musclePanelEl = document.getElementById("musclePanel");

  function initMuscleNav() {
    muscleNavEl.innerHTML = DATA.muscles
      .map((m) => {
        const volBadge = (m.volume.match(/\d+-\d+/) || [m.volume.split(" ")[0]])[0];
        return `
        <button class="muscle-btn ${m.id === activeMuscleId ? "active" : ""}" data-id="${m.id}">
          <span>${m.name}</span>
          <span class="muscle-vol">${volBadge}</span>
        </button>
      `;
      })
      .join("");

    muscleNavEl.querySelectorAll(".muscle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeMuscleId = btn.dataset.id;
        muscleNavEl.querySelectorAll(".muscle-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.id === activeMuscleId);
        });
        renderMusclePanel();
      });
    });
  }

  function renderMusclePanel() {
    const m = DATA.muscles.find((x) => x.id === activeMuscleId);
    if (!m) return;

    musclePanelEl.innerHTML = `
      <div class="muscle-panel-head">
        <div>
          <span class="eyebrow">${m.cm3}</span>
          <h3>${m.name}</h3>
        </div>
        <div>
          <div class="mono" style="font-size: 0.9rem; color: var(--ink-on-dark);">${m.volume}</div>
          <div class="mono" style="font-size: 0.74rem; color: var(--ink-muted-dark);">${m.freq}</div>
        </div>
      </div>

      <div class="muscle-grid">
        <div class="muscle-box">
          <h4>En Verimli (S / A Tier) Hareketler</h4>
          <ul>${m.best.map((b) => `<li>${b}</li>`).join("")}</ul>
        </div>
        <div class="muscle-box">
          <h4>Kaçınılacaklar &amp; Hatalar</h4>
          <ul>${m.avoid.map((a) => `<li>${a}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="ai-warning">
        <strong class="mono" style="font-size: 0.76rem; letter-spacing: 0.06em; text-transform: uppercase; color: #E87D5A; display: block; margin-bottom: 6px;">Biyomekanik &amp; Aktif Yetersizlik Notu</strong>
        ${m.activeInsufficiency}
      </div>
    `;
  }

  initMuscleNav();
  renderMusclePanel();

  // =========================================================
  // 4. SUPPLEMENTS & TESTOSTERONE AUDIT
  // =========================================================
  let activeSuppTier = "all";
  const suppFiltersEl = document.getElementById("suppFilters");
  const suppGridEl = document.getElementById("suppGrid");

  function renderSupps() {
    const items = DATA.supplements.filter((s) =>
      activeSuppTier === "all" ? true : s.tier === activeSuppTier
    );

    suppGridEl.innerHTML = items
      .map((s) => {
        const tagClass =
          s.tier === "5-star" ? "tag--olive" : s.tier === "trap" ? "tag--accent" : "";
        return `
          <article class="supp-card">
            <div class="supp-head">
              <h4>${s.name}</h4>
              <span class="tag ${tagClass}">${s.badge}</span>
            </div>
            <p>${s.desc}</p>
            <div class="supp-dose">${s.dose}</div>
          </article>
        `;
      })
      .join("");
  }

  suppFiltersEl.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      suppFiltersEl.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeSuppTier = btn.dataset.tier;
      renderSupps();
    });
  });
  renderSupps();

  // Testosterone 7-Factor Checklist
  const testoListEl = document.getElementById("testoChecklist");
  const testoScoreEl = document.getElementById("testoScoreCard");
  const testoChecked = new Set(["sleep", "transfat", "stress"]);

  function renderTesto() {
    testoListEl.innerHTML = DATA.testosteroneKillers
      .map(
        (item) => `
        <label class="check-item">
          <input type="checkbox" data-id="${item.id}" ${testoChecked.has(item.id) ? "checked" : ""}>
          <div>
            <strong style="font-size: 0.92rem; display: block; margin-bottom: 2px;">${item.title}</strong>
            <span style="font-size: 0.82rem; color: var(--ink-secondary);">${item.detail}</span>
          </div>
        </label>
      `
      )
      .join("");

    testoListEl.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("change", () => {
        if (inp.checked) testoChecked.add(inp.dataset.id);
        else testoChecked.delete(inp.dataset.id);
        updateTestoScore();
      });
    });

    updateTestoScore();
  }

  function updateTestoScore() {
    const score = testoChecked.size;
    let verdict = "";
    if (score >= 6) {
      verdict = "Doğal hormonal zemin çok güçlü. Testosteron booster gibi para tuzaklarına ihtiyacın yok; uyku ve antrenman istikrarını koru.";
    } else if (score >= 4) {
      verdict = "Temel sağlam ama işaretlenmemiş 2-3 faktör gelişim hızını ve toparlanmanı frenliyor. Özellikle uyku ve D vitaminini ilk sıraya al.";
    } else {
      verdict = "Hormonal ortam ciddi baskı altında. Supplement veya yeni split aramadan önce 8 saat uyku, yağ oranı kontrolü ve BPA/alkol temizliğiyle başla.";
    }

    testoScoreEl.innerHTML = `
      <span class="eyebrow">ANLIK DENETİM SKORU</span>
      <div class="mono" style="font-size: 3rem; font-weight: 700; line-height: 1; margin: 8px 0 14px;">${score} / 7</div>
      <p style="font-size: 0.92rem; color: var(--ink-secondary); margin-bottom: 18px;">${verdict}</p>
      <div style="border-top: 1px solid var(--border-light); padding-top: 14px; font-size: 0.82rem; color: var(--ink-tertiary);">
        Endokrin ve spor fizyolojisi literatüründeki 7 temel yaşam tarzı parametresine göre değerlendirilir.
      </div>
    `;
  }

  renderTesto();

  // =========================================================
  // 5. EDITORIAL GUIDES (NUTRITION / SLEEP / INJURY)
  // =========================================================
  let activeGuide = "nutrition";
  const guideTabsEl = document.getElementById("guideTabs");
  const guidePanelEl = document.getElementById("guidePanel");

  function renderGuide() {
    const g = DATA.guides[activeGuide];
    if (!g) return;

    guidePanelEl.innerHTML = `
      <div>
        <span class="eyebrow">${g.eyebrow}</span>
        <h3 style="font-size: 1.55rem; margin-bottom: 20px;">${g.title}</h3>
        <div class="guide-list">
          ${g.items
            .map(
              (it) => `
              <div class="guide-item">
                <h4>${it.title}</h4>
                <p>${it.text}</p>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
      <div>
        <div class="editorial-photo">
          <img src="${g.image}" alt="${g.title}">
        </div>
        <p style="font-size: 0.82rem; color: var(--ink-secondary); margin-top: 10px;">${g.caption}</p>
      </div>
    `;
  }

  guideTabsEl.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      guideTabsEl.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeGuide = btn.dataset.guide;
      renderGuide();
    });
  });

  renderGuide();
})();
