function themeSwitch() {
    const KEY = 'projecthades-theme';
    const linkEl = document.getElementById('theme-css');
    const select = document.getElementById('theme');
    const portraitImg = document.querySelector('.hero-art img');

    /* CSS tema dosyaları — mevcut dosya adlarını aynen korudum */
    const THEME_FILES = {
      "1500-1800":        "css/themes/theme-1500-1800.css",
      "1800s":     "css/themes/theme-1800.css",
      "1900-1950":  "css/themes/theme-1900-1950.css",
      "1950-1990": "css/themes/theme-1950-1990.css",
      "1990-2010":        "css/themes/theme-1990-2010.css",
      "2035":             "css/themes/theme-2035.css"
    };

    /* Portre görselleri — dosya yollarını sende olanlara göre ayarla */
    const PORTRAIT_FILES = {
      "1500-1800":        "images/PortraitZagreus.webp",
      "1800s":     "images/PortraitZagreus2.png",
      "1900-1950":  "images/PortraitZagreus3.png",
      "1950-1990": "images/PortraitZagreus4.png",
      "1990-2010":        "images/PortraitZagreus5.png",
      "2035":             "images/PortraitZagreus6.jpg",
    };

    /* Yumuşak geçiş için küçük yardımcı */
    function setPortrait(theme){
      if (!portraitImg) return;
      const file = PORTRAIT_FILES[theme] || PORTRAIT_FILES["1990-2010"];
      // tek seferlik transition
      if (!portraitImg.style.transition) {
        portraitImg.style.transition = 'opacity .25s ease';
      }
      const tmp = new Image();
      portraitImg.style.opacity = '0';
      tmp.onload = () => {
        portraitImg.src = file;
        requestAnimationFrame(() => { portraitImg.style.opacity = '1'; });
      };
      tmp.src = file;
    }

    function applyTheme(val){
      const href = THEME_FILES[val] || THEME_FILES["1990-2010"];
      linkEl.setAttribute('href', href);
      localStorage.setItem(KEY, val);
      setPortrait(val); // tema değişince portreyi de değiştir
    }

    // İlk yükleme
    const saved = localStorage.getItem(KEY) || '1990-2010';
    if (select) select.value = saved;
    applyTheme(saved);

    // Değişim
    if (select) {
      select.addEventListener('change', e => applyTheme(e.target.value));
    }
  }

   themeSwitch();