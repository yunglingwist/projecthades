const MARKERS = [
      { x: 51, y: 85, label: 'Hades',  clickId: 'Hades', icon:'images/IconHades.webp'},
      { x: 35, y: 80, label: 'Ambrosia', clickId: 'Ambrosia', icon:'images/IconAmbrosia.webp'},
      { x: 67, y: 83, label: 'Stygian Blade',  clickId: 'Stygian Blade', icon:'images/IconBlade.webp'},
      { x: 51, y: 72, label: 'Tomb Trove', clickId: 'Tomb Trove', icon:'images/IconTrove.webp'},
      { x: 68, y: 66, label: 'Ares',  clickId: 'Ares', icon:'images/IconAres.webp'},
      { x: 58, y: 56, label: 'Charon', clickId: 'Charon', icon:'images/IconCharon.webp'},
      { x: 50, y: 53, label: 'Vase',  clickId: 'Vase', icon:'images/ItemVase.png' },
      { x: 70, y: 49, label: 'Obol Coin', clickId: 'Obol Coin', icon:'images/IconObol.webp'},
      { x: 56, y: 47, label: 'Zeus',  clickId: 'Zeus', icon:'images/IconZeus.webp'},
      { x: 70, y: 38, label: 'Greek Shield', clickId: 'Greek Shield', icon:'images/IconShield.webp' },
      { x: 36, y: 36, label: 'Chariot',  clickId: 'Chariot' , icon:'images/IconChariot.webp'},
      { x: 52, y: 26, label: 'Minotaur', clickId: 'Minotaur', icon:'images/IconMinotaur.webp' },
      { x: 71, y: 22, label: 'Bow & Arrow',  clickId: 'Bow & Arrow', icon:'images/IconBow.webp' },
      { x: 17, y: 36, label: 'Athena', clickId: 'Athena', icon:'images/IconAthena.webp' },
      { x: 51, y: 13, label: 'Cerberus',  clickId: 'Cerberus', icon:'images/IconCerberus.webp' }
    ];


function drawMarkers(){
      const host = document.getElementById('markers');
      const tip  = document.getElementById('tooltip');
      host.innerHTML = '';

      MARKERS.forEach(p => {
        const m = document.createElement('button');
        m.type = 'button';
        m.className = 'marker';
        m.style.left = p.x + '%';
        m.style.top  = p.y + '%';
        m.setAttribute('aria-label', p.label);

        const img = document.createElement('img');
        img.src = p.icon;
        m.appendChild(img);

        m.addEventListener('mouseenter', () => {
          tip.hidden = false;
          tip.textContent = p.label;
        });
        m.addEventListener('mousemove', (e) => {
          tip.style.left = (e.clientX + 10) + 'px';
          tip.style.top  = (e.clientY + 10) + 'px';
        });
        m.addEventListener('mouseleave', () => { tip.hidden = true; });
        host.appendChild(m);
      });
    }

drawMarkers()
