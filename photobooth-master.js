(function() {
  const rootMount = document.getElementById('lpb1RootCard');
  if (!rootMount) return;
  rootMount.outerHTML = `


<!-- ====== TAHAP 1: CSS LUXURY 3D STUDIO COVERFLOW & LINEARICONS ====== -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">

<style>
  .lpb1-ico {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: 15px;
    vertical-align: middle;
  }
  .lpb1-ico svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  /* ====== 1. KARTU PEMBUKA EKSKLUSIF DI HALAMAN UNDANGAN ====== */
  .lpb1-teaser-card {
    position: relative;
    font-family: 'Plus Jakarta Sans', sans-serif;
    max-width: 380px;
    margin: 15px auto;
    padding: 28px 20px;
    background: linear-gradient(160deg, #faf9f5 0%, #f1efe6 100%);
    border: 1px solid #d8d2c3;
    border-radius: 26px;
    box-shadow: 0 16px 36px rgba(45, 56, 46, 0.12);
    text-align: center;
    color: #354236;
    box-sizing: border-box;
    overflow: hidden;
  }
  .lpb1-teaser-card::before {
    content: "";
    position: absolute;
    inset: 7px;
    border: 1px solid rgba(184, 168, 138, 0.38);
    border-radius: 20px;
    pointer-events: none;
  }
  .lpb1-teaser-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 12px;
    border-radius: 30px;
    background: rgba(85, 107, 87, 0.1);
    color: #4a5d4e;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .lpb1-teaser-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 12px auto;
    border-radius: 50%;
    background: linear-gradient(135deg, #556b57 0%, #3d4f40 100%);
    color: #f5f3eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 8px 20px rgba(61, 79, 64, 0.25);
  }
  .lpb1-teaser-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    color: #354236;
    margin: 0 0 6px 0;
  }
  .lpb1-teaser-desc {
    font-size: 12px;
    color: #687369;
    margin: 0 0 18px 0;
    line-height: 1.55;
  }
  .lpb1-open-app-btn {
    background: linear-gradient(135deg, #4f6451 0%, #38493a 100%);
    color: #ffffff;
    border: 1px solid rgba(216, 197, 158, 0.45);
    padding: 12px 26px;
    border-radius: 50px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 8px 22px rgba(56, 73, 58, 0.32);
    transition: transform 0.18s ease, box-shadow 0.2s ease;
  }
  .lpb1-open-app-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 26px rgba(56, 73, 58, 0.4);
  }
  .lpb1-open-app-btn:active { transform: scale(0.96); }

  /* ====== 2. MODAL HALAMAN PENUH MULTI-SCREEN ====== */
  .lpb1-fullscreen-modal {
    font-family: 'Plus Jakarta Sans', sans-serif;
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    background: radial-gradient(circle at top, #fbfaf7 0%, #efede4 100%) !important;
    z-index: 999999 !important;
    display: none;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
    user-select: none !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
  }
  .lpb1-fullscreen-modal.dark-bg {
    background: radial-gradient(circle at center, #262b28 0%, #141715 100%) !important;
  }

  /* Tombol Close Global (✕) Pojok Kiri Atas */
  .lpb1-global-close {
    position: fixed;
    top: 16px;
    left: 16px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid #d5d0c3;
    color: #354236;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000005;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
  }
  .lpb1-global-close:hover {
    background: #3d4f40;
    color: #ffffff;
    border-color: #3d4f40;
  }

  .lpb1-screen {
    width: 100%;
    max-width: 460px;
    min-height: 100dvh;
    margin: 0 auto;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 16px 24px 16px;
    box-sizing: border-box;
  }
  .lpb1-screen.active {
    display: flex;
  }

  /* ====== LAYAR 1: LUXURY 3D STUDIO COVERFLOW (100% PRESISI DI PONSEL) ====== */
  .lpb1-top-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 30px;
    border: 1px solid #d4cbb8;
    background: linear-gradient(135deg, #ffffff 0%, #f6f4ec 100%);
    color: #4a5d4e;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  .lpb1-showcase-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 700;
    font-style: italic;
    color: #2f3b30;
    margin: 0 0 2px 0;
    text-align: center;
  }
  .lpb1-screen-sub {
    font-size: 11.5px;
    color: #6e7a6f;
    margin: 0 0 12px 0;
    text-align: center;
    max-width: 290px;
    line-height: 1.4;
  }

  /* Segmented Control Mode (Selfie vs Landscape) */
  .lpb1-mode-tabs {
    display: inline-flex;
    background: #e6e3d8;
    padding: 4px;
    border-radius: 40px;
    border: 1px solid #d8d3c4;
    gap: 4px;
    margin-bottom: 10px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.06);
  }
  .lpb1-mode-tab {
    padding: 6px 18px;
    border-radius: 30px;
    border: none;
    background: transparent;
    color: #5a665b;
    font-size: 11.5px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.22s ease;
  }
  .lpb1-mode-tab.active {
    background: linear-gradient(135deg, #4f6451 0%, #394a3b 100%);
    color: #ffffff;
    box-shadow: 0 3px 10px rgba(57, 74, 59, 0.28);
  }

  /* Panggung 3D Coverflow (Selalu Tepat di Tengah Layar HP & Tidak Pernah Terpotong) */
  .lpb1-coverflow-stage {
    position: relative;
    width: 100%;
    max-width: 350px;
    height: 330px;
    margin: 2px auto 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    touch-action: pan-y;
  }

  .lpb1-deck-track {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .lpb1-tpl-card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 176px;
    aspect-ratio: 9 / 16;
    border-radius: 18px;
    background: #ffffff;
    padding: 6px;
    box-sizing: border-box;
    border: 1.5px solid #e2ddd0;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: all 0.36s cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: center center;
    will-change: transform, opacity;
  }

  /* Posisi Kartu Tengah (Aktif) */
  .lpb1-tpl-card.pos-center {
    transform: translate(-50%, -50%) scale(1);
    z-index: 6;
    opacity: 1;
    border: 2px solid #4f6451;
    box-shadow: 0 18px 38px rgba(45, 58, 47, 0.26), 0 0 0 4px rgba(85, 107, 87, 0.12);
  }
  /* Posisi Kartu Kiri Belakang */
  .lpb1-tpl-card.pos-left {
    transform: translate(-112%, -50%) scale(0.81) rotate(-5deg);
    z-index: 3;
    opacity: 0.62;
    filter: brightness(0.95);
  }
  /* Posisi Kartu Kanan Belakang */
  .lpb1-tpl-card.pos-right {
    transform: translate(12%, -50%) scale(0.81) rotate(5deg);
    z-index: 3;
    opacity: 0.62;
    filter: brightness(0.95);
  }
  /* Posisi Kartu Lainnya (Tersembunyi Halus di Belakang) */
  .lpb1-tpl-card.pos-hidden {
    transform: translate(-50%, -50%) scale(0.65);
    z-index: 1;
    opacity: 0;
    pointer-events: none;
  }

  .lpb1-tpl-card canvas {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: block;
    object-fit: cover;
  }

  /* Lencana Centang Emas/Sage di Kartu Aktif */
  .lpb1-tpl-check {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, #556b57 0%, #394a3b 100%);
    border: 2px solid #ffffff;
    color: #ffffff;
    font-size: 12px;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.22);
    z-index: 8;
  }
  .lpb1-tpl-card.pos-center .lpb1-tpl-check { display: flex; }

  /* Tombol Hapus Bingkai Custom (Khusus Editor) */
  .lpb1-tpl-del {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #be123c;
    border: 2px solid #ffffff;
    color: #ffffff;
    font-size: 11px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    z-index: 8;
  }
  body.elementor-editor-active .lpb1-tpl-card.pos-center .lpb1-tpl-del,
  body.elementor-editor-preview .lpb1-tpl-card.pos-center .lpb1-tpl-del,
  .lpb1-is-editor .lpb1-tpl-card.pos-center .lpb1-tpl-del {
    display: flex;
  }

  /* Tombol Panah Kiri/Kanan Mengambang (Glassmorphic) */
  .lpb1-nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid #d5d0c3;
    color: #354236;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    z-index: 10;
    transition: all 0.2s ease;
  }
  .lpb1-nav-arrow.prev { left: 4px; }
  .lpb1-nav-arrow.next { right: 4px; }
  .lpb1-nav-arrow:hover {
    background: #4f6451;
    color: #ffffff;
    border-color: #4f6451;
  }
  .lpb1-nav-arrow:active {
    transform: translateY(-50%) scale(0.92);
  }

  /* Info Nama Bingkai & Dots Indikator */
  .lpb1-tpl-meta-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px;
  }
  .lpb1-tpl-name-pill {
    background: rgba(85, 107, 87, 0.1);
    border: 1px solid rgba(85, 107, 87, 0.22);
    color: #394a3b;
    font-size: 11.5px;
    font-weight: 700;
    padding: 4px 14px;
    border-radius: 30px;
    letter-spacing: 0.3px;
  }
  .lpb1-dots-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .lpb1-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #cbc6b8;
    transition: all 0.25s ease;
    cursor: pointer;
  }
  .lpb1-dot.active {
    width: 20px;
    border-radius: 10px;
    background: #4f6451;
  }

  .lpb1-primary-wide-btn {
    width: 100%;
    max-width: 295px;
    padding: 12px 20px;
    border-radius: 50px;
    background: linear-gradient(135deg, #4f6451 0%, #38493a 100%);
    color: #ffffff;
    border: 1px solid rgba(216, 197, 158, 0.4);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 8px 20px rgba(56, 73, 58, 0.28);
    margin-bottom: 8px;
    transition: all 0.2s ease;
  }
  .lpb1-primary-wide-btn:hover { background: #3d4f40; }
  .lpb1-outline-wide-btn {
    width: 100%;
    max-width: 295px;
    padding: 10px 20px;
    border-radius: 50px;
    background: #ffffff;
    color: #4a5d4e;
    border: 1px solid #cbc6b8;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

  /* ====== LAYAR 2: KAMERA FULL-BLEED & POPUP "SEMUA FOTO SUDAH DIAMBIL!" ====== */
  .lpb1-cam-card {
    position: relative;
    height: calc(100dvh - 32px);
    max-height: 750px;
    aspect-ratio: 9 / 16;
    max-width: 100%;
    background: #0d0f0e;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 520px) {
    .lpb1-cam-card {
      width: 100vw;
      height: 100dvh;
      max-height: none;
      border-radius: 0;
      border: none;
    }
  }
  #lpb1Video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 1;
  }
  #lpb1Video.mirror { transform: scaleX(-1); }

  #lpb1LiveFrameCanvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .lpb1-seg-bar {
    position: absolute;
    top: 10px;
    left: 14px;
    right: 14px;
    display: flex;
    gap: 5px;
    z-index: 10;
  }
  .lpb1-seg-item {
    flex: 1;
    height: 3.5px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.25);
    overflow: hidden;
  }
  .lpb1-seg-item.done { background: #f5f4ef; }

  .lpb1-cam-topbar {
    position: absolute;
    top: 22px;
    left: 14px;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }
  .lpb1-cam-close {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(20, 22, 21, 0.62);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lpb1-cam-pill {
    background: rgba(20, 22, 21, 0.62);
    backdrop-filter: blur(6px);
    color: #f5f4ef;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 13px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.16);
  }

  .lpb1-right-sidebar {
    position: absolute;
    top: 72px;
    right: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    z-index: 10;
  }
  .lpb1-side-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    color: #ffffff;
  }
  .lpb1-side-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(20, 22, 21, 0.62);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #ffffff;
    transition: all 0.2s ease;
  }
  .lpb1-side-item.active .lpb1-side-icon {
    background: #f5f4ef;
    border-color: #ffffff;
    color: #181c19;
  }
  .lpb1-side-label {
    font-size: 9.5px;
    font-weight: 600;
    color: #f5f4ef;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
  }

  .lpb1-prep-pill {
    position: absolute;
    background: rgba(15, 18, 16, 0.78);
    backdrop-filter: blur(8px);
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    padding: 9px 18px;
    border-radius: 30px;
    border: 1px solid rgba(255,255,255,0.15);
    z-index: 8;
    display: none;
  }

  .lpb1-cam-bottom {
    position: absolute;
    bottom: 20px;
    left: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 10;
  }
  .lpb1-tone-popup {
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    padding: 6px 10px;
    background: rgba(20, 22, 21, 0.85);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
  }
  .lpb1-tone-popup.show { display: flex; }
  .lpb1-tone-chip {
    padding: 5px 11px;
    border-radius: 20px;
    font-size: 10.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    cursor: pointer;
  }
  .lpb1-tone-chip.active {
    background: #f5f4ef;
    color: #181c19;
  }

  .lpb1-shutter-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .lpb1-magic-btn, .lpb1-gallery-sq-btn {
    position: relative;
    width: 44px;
    height: 44px;
    background: rgba(24, 27, 25, 0.68);
    backdrop-filter: blur(6px);
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .lpb1-magic-btn { border-radius: 50%; }
  .lpb1-gallery-sq-btn { border-radius: 12px; }
  .lpb1-count-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: #556b57;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    display: none;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ffffff;
  }

  .lpb1-shutter-ring {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 3.5px solid #ffffff;
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
    transition: transform 0.15s ease;
  }
  .lpb1-shutter-ring:active { transform: scale(0.92); }
  .lpb1-shutter-core {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #f5f4ef;
    display: block;
  }

  .lpb1-done-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 12, 11, 0.78);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 20;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .lpb1-done-box {
    width: 100%;
    max-width: 285px;
    background: #191d1a;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 20px;
    padding: 22px 18px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.55);
  }
  .lpb1-done-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(85, 107, 87, 0.35);
    border: 1px solid #769479;
    color: #e4ebe5;
    font-size: 20px;
    margin: 0 auto 12px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lpb1-done-title {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 6px 0;
  }
  .lpb1-done-sub {
    font-size: 11.5px;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.45;
    margin: 0 0 16px 0;
  }
  .lpb1-done-btn {
    width: 100%;
    padding: 10px 14px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .lpb1-done-btn.outline {
    background: #ffffff;
    color: #191d1a;
    border: none;
  }
  .lpb1-done-btn.primary {
    background: #556b57;
    color: #ffffff;
    border: 1px solid #769479;
    margin-bottom: 0;
  }

  /* ====== LAYAR 3: GALERI FOTO ====== */
  .lpb1-gal-box {
    width: 100%;
    max-width: 420px;
    background: #181b19;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 24px;
    padding: 22px 16px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }
  .lpb1-gal-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 16px 0 20px 0;
  }
  .lpb1-gal-item {
    background: #222623;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .lpb1-gal-item img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    display: block;
  }
  .lpb1-gal-meta {
    padding: 7px 6px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .lpb1-gal-label {
    font-size: 10.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
  }
  .lpb1-retake-one-btn {
    background: rgba(255, 255, 255, 0.1);
    color: #f5f4ef;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 8px;
    padding: 5px 4px;
    font-size: 10.5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .lpb1-retake-one-btn:hover {
    background: #556b57;
    border-color: #769479;
  }

  /* ====== LAYAR 4: HASIL FOTOMU ====== */
  .lpb1-res-header-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    font-style: italic;
    color: #354236;
    margin: 0 0 2px 0;
  }
  .lpb1-res-stage-wrap {
    position: relative;
    width: 225px;
    aspect-ratio: 9 / 16;
    background: #141715;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 14px 32px rgba(45, 58, 47, 0.22);
    border: 2px solid #dcd9ce;
    margin: 4px auto 8px auto;
    touch-action: none;
  }
  #lpb1PhotoCanvas, #lpb1FrameOverlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
  #lpb1FrameOverlay { z-index: 2; }

  .lpb1-pick-photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  .lpb1-pick-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .lpb1-pick-card {
    width: 66px;
    padding: 5px;
    border-radius: 10px;
    background: #ffffff;
    border: 1.5px solid #d5d0c3;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease;
  }
  .lpb1-pick-card.active {
    border-color: #4f6451;
    background: #eef2ee;
    box-shadow: 0 4px 12px rgba(85, 107, 87, 0.18);
  }
  .lpb1-pick-card img {
    width: 40px;
    height: 50px;
    object-fit: cover;
    border-radius: 6px;
    margin: 0 auto 3px auto;
    display: block;
  }
  .lpb1-pick-name {
    font-size: 10px;
    font-weight: 700;
    color: #3d4a3e;
    display: block;
  }
  .lpb1-pick-state {
    font-size: 9px;
    color: #4f6451;
    font-weight: 600;
  }

  .lpb1-res-tools {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    max-width: 340px;
  }
  .lpb1-res-chip {
    background: #ffffff;
    color: #4a5d4e;
    border: 1px solid #cbc6b8;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 10.5px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .lpb1-res-chip.active {
    background: #4f6451;
    color: #ffffff;
    border-color: #4f6451;
  }

  .lpb1-res-actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    width: 100%;
    max-width: 320px;
  }
  .lpb1-res-act-btn {
    padding: 10px 12px;
    border-radius: 12px;
    background: #ffffff;
    color: #354236;
    border: 1px solid #cbc6b8;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    transition: all 0.2s ease;
  }
  .lpb1-res-act-btn.primary-dl {
    background: #4f6451;
    color: #ffffff;
    border-color: #4f6451;
  }
  .lpb1-res-act-btn:hover {
    background: #3d4f40;
    color: #ffffff;
    border-color: #3d4f40;
  }

  .lpb1-countdown {
    position: absolute;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 92px;
    font-weight: 700;
    color: #ffffff;
    background: rgba(0,0,0,0.22);
    text-shadow: 0 4px 24px rgba(0,0,0,0.6);
    z-index: 15;
    pointer-events: none;
  }
  .lpb1-flash {
    position: absolute;
    inset: 0;
    background: #ffffff;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
    z-index: 16;
  }
  .lpb1-toast {
    display: none;
    margin-top: 8px;
    padding: 8px 14px;
    background: #e6ece7;
    color: #2c382d;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
  }

  /* ====== 3. PANEL UNGU KHUSUS MODE EDITOR ELEMENTOR ====== */
  .lpb1-editor-box {
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    margin: 16px 0 4px 0;
    padding: 14px 12px;
    background: rgba(155, 27, 104, 0.06);
    border: 1.5px dashed rgba(155, 27, 104, 0.45);
    border-radius: 16px;
    text-align: left;
  }
  body.elementor-editor-active .lpb1-editor-box,
  body.elementor-editor-preview .lpb1-editor-box,
  .lpb1-is-editor .lpb1-editor-box {
    display: flex !important;
  }
  .lpb1-editor-header {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #9b1b68;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .lpb1-editor-btn {
    background: #9b1b68;
    color: #ffffff;
    padding: 8px 14px;
    border-radius: 50px;
    border: none;
    font-size: 11.5px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .lpb1-cutout-options {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: #6b1749;
  }
  .lpb1-cutout-chip {
    padding: 4px 9px;
    border-radius: 12px;
    border: 1px solid #c47aa8;
    background: #ffffff;
    color: #82205b;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .lpb1-cutout-chip.active {
    background: #9b1b68;
    color: #ffffff;
    border-color: #9b1b68;
  }
  .lpb1-editor-divider {
    height: 1px;
    background: rgba(155, 27, 104, 0.2);
  }
  .lpb1-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lpb1-field {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .lpb1-field label {
    font-size: 10.5px;
    font-weight: 600;
    color: #6b1749;
    display: flex;
    justify-content: space-between;
  }
  .lpb1-input-color-row {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .lpb1-input-color-row input[type="text"] {
    flex: 1;
    min-width: 0;
    padding: 7px 9px;
    border-radius: 8px;
    border: 1px solid #d4a3c0;
    background: #ffffff;
    color: #2c352d;
    font-size: 11.5px;
    outline: none;
  }
  .lpb1-size-input {
    width: 50px !important;
    padding: 6px 4px !important;
    border-radius: 8px;
    border: 1px solid #d4a3c0;
    background: #ffffff;
    color: #6b1749;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
  }
  .lpb1-color-picker {
    width: 32px;
    height: 32px;
    padding: 2px;
    border-radius: 8px;
    border: 1px solid #d4a3c0;
    background: #ffffff;
    cursor: pointer;
  }
  .lpb1-shadow-box {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #d4a3c0;
    border-radius: 10px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .lpb1-shadow-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10.5px;
    font-weight: 700;
    color: #6b1749;
    flex-wrap: wrap;
    gap: 4px;
  }
  .lpb1-shadow-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    color: #6b1749;
    flex-wrap: wrap;
  }
  .lpb1-shadow-controls input[type="range"] {
    flex: 1;
    min-width: 70px;
    accent-color: #9b1b68;
  }
  .lpb1-saved-summary {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid #d4a3c0;
    border-radius: 10px;
    padding: 10px;
    font-size: 11px;
    color: #3d4a3e;
  }
  .lpb1-summary-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    border-bottom: 1px dashed #e5d5df;
    padding-bottom: 3px;
  }
  .lpb1-summary-row:last-child { border-bottom: none; padding-bottom: 0; }
  .lpb1-summary-key { color: #82205b; font-weight: 600; }
  .lpb1-summary-val { font-weight: 500; text-align: right; }
  .lpb1-editor-action-row {
    display: flex;
    gap: 6px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4px;
  }
  .lpb1-act-btn {
    flex: 1;
    padding: 8px 10px;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .lpb1-act-save { background: #2b7a4b; color: #ffffff; }
  .lpb1-act-edit { background: #9b1b68; color: #ffffff; }
  .lpb1-act-reset { background: #ffffff; color: #be123c; border: 1px solid #f43f5e; }
  .lpb1-editor-note {
    font-size: 10px;
    color: #82205b;
    line-height: 1.35;
    text-align: center;
  }

  .tone-soft { filter: brightness(1.06) contrast(1.02) saturate(1.08); }
  .tone-warm { filter: sepia(0.18) brightness(1.05) contrast(1.04) saturate(1.15); }
  .tone-peach { filter: brightness(1.08) contrast(0.98) saturate(1.18) hue-rotate(-6deg); }
  .tone-bw { filter: grayscale(1) contrast(1.12) brightness(1.03); }
  .tone-normal { filter: none; }
</style>


<!-- ====== TAHAP 2: STRUKTUR HTML PHOTOBOOTH (LUXURY 3D COVERFLOW & 4 LAYAR) ====== -->
<div class="lpb1-teaser-card" id="lpb1RootCard">
  <!-- Kartu Pembuka Eksklusif di Halaman Undangan -->
  <div class="lpb1-teaser-badge">
    <span class="lnr lnr-star"></span>
    <span>Interactive Studio</span>
  </div>
  <div class="lpb1-teaser-icon">
    <span class="lnr lnr-camera"></span>
  </div>
  <h3 class="lpb1-teaser-title">Wedding Photobooth V2</h3>
  <p class="lpb1-teaser-desc">
    Pilih bingkai eksklusif kami, abadikan momen bahagiamu, dan simpan kenangan manis ke Instagram Story
  </p>

  <button type="button" class="lpb1-open-app-btn" onclick="lpb1OpenApp('templates')">
    <span class="lnr lnr-camera"></span>
    <span>Buka Photobooth</span>
  </button>

  <!-- ====== KOTAK UNGU KHUSUS MODE EDITOR ELEMENTOR ====== -->
  <div class="lpb1-editor-box">
    <div class="lpb1-editor-header">
      <span class="lnr lnr-cog"></span>
      <span>Panel Pengaturan Photobooth (Editor Saja)</span>
    </div>

    <button type="button" class="lpb1-editor-btn" style="background:#556b57;" onclick="lpb1OpenApp('result_editor')">
      <span class="lnr lnr-frame-expand"></span>
      <span>Buka Layar Hasil & Geser Posisi Teks</span>
    </button>

    <button type="button" class="lpb1-editor-btn" onclick="lpb1OpenWPMediaGallery()">
      <span class="lnr lnr-picture"></span>
      <span>Pilih Bingkai dari Galeri WDP</span>
    </button>

    <div class="lpb1-cutout-options" id="lpb1CutoutGroup">
      <span>Mode Gambar WDP:</span>
      <button type="button" class="lpb1-cutout-chip active" data-cut="raw" onclick="lpb1SetWdpCutoutMode('raw', this)">PNG Utuh</button>
      <button type="button" class="lpb1-cutout-chip" data-cut="auto" onclick="lpb1SetWdpCutoutMode('auto', this)">Otomatis</button>
      <button type="button" class="lpb1-cutout-chip" data-cut="arch" onclick="lpb1SetWdpCutoutMode('arch', this)">Lubang Arch</button>
      <button type="button" class="lpb1-cutout-chip" data-cut="box" onclick="lpb1SetWdpCutoutMode('box', this)">Lubang Kotak</button>
    </div>

    <div class="lpb1-editor-divider"></div>

    <!-- Form Input Teks + Custom Ukuran Font (px) + Warna + Shadow -->
    <div class="lpb1-form-group" id="lpb1TextFormInputs">
      <div class="lpb1-field">
        <label><span>Kolom Input Title:</span><span>Ukuran (px) & Warna</span></label>
        <div class="lpb1-input-color-row">
          <input type="text" id="lpb1InTitle" value="The Wedding of" placeholder="The Wedding of" oninput="lpb1LivePreviewText()" onkeydown="event.stopPropagation()" onkeyup="event.stopPropagation()" onkeypress="event.stopPropagation()">
          <input type="number" id="lpb1SizeTitle" class="lpb1-size-input" min="8" max="110" value="15" oninput="lpb1LivePreviewFontSize()" onkeydown="event.stopPropagation()">
          <input type="color" id="lpb1ColTitle" class="lpb1-color-picker" value="#d8c59e" oninput="lpb1LivePreviewStyle()">
        </div>
      </div>

      <div class="lpb1-field">
        <label><span>Kolom Input Nama (Mempelai):</span><span>Ukuran (px) & Warna</span></label>
        <div class="lpb1-input-color-row">
          <input type="text" id="lpb1InName" value="" placeholder="Contoh: Andika & Sari" oninput="lpb1LivePreviewText()" onkeydown="event.stopPropagation()" onkeyup="event.stopPropagation()" onkeypress="event.stopPropagation()">
          <input type="number" id="lpb1SizeName" class="lpb1-size-input" min="14" max="130" value="54" oninput="lpb1LivePreviewFontSize()" onkeydown="event.stopPropagation()">
          <input type="color" id="lpb1ColName" class="lpb1-color-picker" value="#ffffff" oninput="lpb1LivePreviewStyle()">
        </div>
      </div>

      <div class="lpb1-field">
        <label><span>Kolom Input Text (Hari & Tanggal):</span><span>Ukuran (px) & Warna</span></label>
        <div class="lpb1-input-color-row">
          <input type="text" id="lpb1InDate" value="" placeholder="Contoh: Kamis, 11 Januari 2029" oninput="lpb1LivePreviewText()" onkeydown="event.stopPropagation()" onkeyup="event.stopPropagation()" onkeypress="event.stopPropagation()">
          <input type="number" id="lpb1SizeDate" class="lpb1-size-input" min="8" max="90" value="17" oninput="lpb1LivePreviewFontSize()" onkeydown="event.stopPropagation()">
          <input type="color" id="lpb1ColDate" class="lpb1-color-picker" value="#d8c59e" oninput="lpb1LivePreviewStyle()">
        </div>
      </div>

      <div class="lpb1-field">
        <label><span>Kolom Input Tambahan 1 (Hashtag):</span><span>Ukuran (px) & Warna</span></label>
        <div class="lpb1-input-color-row">
          <input type="text" id="lpb1InExtra1" value="" placeholder="Contoh: #AndikaSariWedding" oninput="lpb1LivePreviewText()" onkeydown="event.stopPropagation()" onkeyup="event.stopPropagation()" onkeypress="event.stopPropagation()">
          <input type="number" id="lpb1SizeExtra1" class="lpb1-size-input" min="8" max="90" value="16" oninput="lpb1LivePreviewFontSize()" onkeydown="event.stopPropagation()">
          <input type="color" id="lpb1ColExtra1" class="lpb1-color-picker" value="#d8c59e" oninput="lpb1LivePreviewStyle()">
        </div>
      </div>

      <div class="lpb1-field">
        <label><span>Kolom Input Tambahan 2 (Kutipan):</span><span>Ukuran (px) & Warna</span></label>
        <div class="lpb1-input-color-row">
          <input type="text" id="lpb1InExtra2" value="" placeholder="Contoh: Bertumbuh dan menua bersama" oninput="lpb1LivePreviewText()" onkeydown="event.stopPropagation()" onkeyup="event.stopPropagation()" onkeypress="event.stopPropagation()">
          <input type="number" id="lpb1SizeExtra2" class="lpb1-size-input" min="8" max="90" value="22" oninput="lpb1LivePreviewFontSize()" onkeydown="event.stopPropagation()">
          <input type="color" id="lpb1ColExtra2" class="lpb1-color-picker" value="#e3ebe4" oninput="lpb1LivePreviewStyle()">
        </div>
      </div>

      <!-- Pengaturan Shadow -->
      <div class="lpb1-shadow-box">
        <div class="lpb1-shadow-top">
          <label style="cursor:pointer; display:inline-flex; align-items:center; gap:5px; margin:0;">
            <input type="checkbox" id="lpb1ShadowEnable" onchange="lpb1LivePreviewShadow()">
            <span>Tambahkan Shadow</span>
          </label>
          <div style="display:flex; gap:4px;">
            <button type="button" class="lpb1-cutout-chip" onclick="lpb1ResetFontSizes()">
              <span class="lnr lnr-text-size"></span>
              <span>Font Default</span>
            </button>
            <button type="button" class="lpb1-cutout-chip" onclick="lpb1ResetColorsToFrameTheme()">
              <span class="lnr lnr-magic-wand"></span>
              <span>Warna Otomatis</span>
            </button>
          </div>
        </div>

        <div class="lpb1-shadow-controls">
          <span>Warna:</span>
          <input type="color" id="lpb1ShadowColor" class="lpb1-color-picker" style="width:28px; height:26px;" value="#000000" oninput="lpb1LivePreviewShadow()">
          <span>Blur:</span>
          <input type="range" id="lpb1ShadowBlur" min="0" max="24" value="8" oninput="lpb1LivePreviewShadow()">
          <span>Tebal:</span>
          <input type="range" id="lpb1ShadowOpacity" min="10" max="100" value="60" oninput="lpb1LivePreviewShadow()">
        </div>
      </div>
    </div>

    <div class="lpb1-saved-summary" id="lpb1TextSavedSummary">
      <div class="lpb1-summary-row"><span class="lpb1-summary-key">Title:</span><span class="lpb1-summary-val" id="lpb1SumTitle">-</span></div>
      <div class="lpb1-summary-row"><span class="lpb1-summary-key">Nama:</span><span class="lpb1-summary-val" id="lpb1SumName">-</span></div>
      <div class="lpb1-summary-row"><span class="lpb1-summary-key">Tanggal:</span><span class="lpb1-summary-val" id="lpb1SumDate">-</span></div>
      <div class="lpb1-summary-row"><span class="lpb1-summary-key">Tambahan 1:</span><span class="lpb1-summary-val" id="lpb1SumExtra1">-</span></div>
      <div class="lpb1-summary-row"><span class="lpb1-summary-key">Tambahan 2:</span><span class="lpb1-summary-val" id="lpb1SumExtra2">-</span></div>
      <div class="lpb1-summary-row"><span class="lpb1-summary-key">Status Teks:</span><span class="lpb1-summary-val" id="lpb1SumVisibility">-</span></div>
    </div>

    <div class="lpb1-editor-action-row" id="lpb1SaveBtnRow">
      <button type="button" class="lpb1-act-btn lpb1-act-save" onclick="lpb1SaveTextConfig()">
        <span class="lnr lnr-checkmark-circle"></span>
        <span>Simpan</span>
      </button>
      <button type="button" class="lpb1-act-btn lpb1-cutout-chip" onclick="lpb1ResetTextPositions()">
        <span class="lnr lnr-undo"></span>
        <span>Posisi Default</span>
      </button>
    </div>

    <div class="lpb1-editor-action-row" id="lpb1EditResetBtnRow" style="display:none;">
      <button type="button" class="lpb1-act-btn lpb1-act-edit" onclick="lpb1EnableEditTextConfig()">
        <span class="lnr lnr-pencil"></span>
        <span>Edit</span>
      </button>
      <button type="button" class="lpb1-act-btn lpb1-act-reset" onclick="lpb1ResetTextConfig()">
        <span class="lnr lnr-sync"></span>
        <span>Reset</span>
      </button>
      <button type="button" class="lpb1-act-btn lpb1-cutout-chip" onclick="lpb1ResetTextPositions()">
        <span class="lnr lnr-undo"></span>
        <span>Default Posisi</span>
      </button>
    </div>

    <button type="button" class="lpb1-cutout-chip" style="width:100%; justify-content:center; padding:7px;" onclick="lpb1DownloadWidgetBackup()">
      <span class="lnr lnr-download"></span>
      <span>Download Backup Script (.html)</span>
    </button>

    <span class="lpb1-editor-note" id="lpb1EditorStatus">
      Klik <b>Buka Layar Hasil & Geser Posisi Teks</b> di atas untuk mengatur posisi teks, lalu klik <b>Simpan</b> & <b>Publish</b>.
    </span>
  </div>

  <!-- ====== MODAL HALAMAN PENUH MULTI-SCREEN ====== -->
  <div class="lpb1-fullscreen-modal" id="lpb1FullScreenModal">
    <!-- Tombol Close Global (✕) -->
    <button type="button" class="lpb1-global-close" id="lpb1GlobalCloseBtn" onclick="lpb1CloseFullScreen()" title="Tutup & Kembali ke Undangan">
      <span class="lnr lnr-cross"></span>
    </button>

    <!-- ====== LAYAR 1: PANGGUNG 3D STUDIO COVERFLOW (100% PRESISI DI PONSEL & DESKTOP) ====== -->
    <div class="lpb1-screen active" id="lpb1ScreenTemplates">
      <div class="lpb1-top-tag">
        <span class="lnr lnr-magic-wand"></span>
        <span>PHOTOBOOTH STUDIO</span>
      </div>
      <h3 class="lpb1-showcase-title">Pilih Bingkai Favoritmu</h3>
      <p class="lpb1-screen-sub" id="lpb1TplSubtitle">Usap ke kiri atau kanan untuk memilih desain bingkai undangan.</p>

      <!-- Tab Pilihan Mode: Selfie (1 Foto) vs Landscape (3 Grid) -->
      <div class="lpb1-mode-tabs">
        <button type="button" class="lpb1-mode-tab active" id="lpb1TabSelfie" onclick="lpb1SwitchLayoutMode('selfie')">
          <span class="lnr lnr-user"></span>
          <span>Selfie (1 Pose)</span>
        </button>
        <button type="button" class="lpb1-mode-tab" id="lpb1TabLandscape" onclick="lpb1SwitchLayoutMode('landscape')">
          <span class="lnr lnr-layers"></span>
          <span>Landscape (3 Grid)</span>
        </button>
      </div>

      <!-- Panggung 3D Coverflow (Kartu Aktif Selalu Tepat di Tengah Layar HP) -->
      <div class="lpb1-coverflow-stage" id="lpb1CoverflowStage">
        <button type="button" class="lpb1-nav-arrow prev" onclick="lpb1StepTemplate(-1)" title="Sebelumnya">
          <span class="lnr lnr-chevron-left"></span>
        </button>

        <div class="lpb1-deck-track" id="lpb1CarouselTrack"></div>

        <button type="button" class="lpb1-nav-arrow next" onclick="lpb1StepTemplate(1)" title="Selanjutnya">
          <span class="lnr lnr-chevron-right"></span>
        </button>
      </div>

      <!-- Nama Bingkai & Pagination Dots -->
      <div class="lpb1-tpl-meta-bar">
        <div class="lpb1-tpl-name-pill" id="lpb1TplCounter">1 / 3 • Hitam</div>
        <div class="lpb1-dots-row" id="lpb1DotsRow"></div>
      </div>

      <button type="button" class="lpb1-primary-wide-btn" id="lpb1UseTemplateBtn" onclick="lpb1ConfirmTemplateSelection()">
        <span id="lpb1UseTemplateText">Pakai template ini</span>
        <span class="lnr lnr-arrow-right"></span>
      </button>

      <button type="button" class="lpb1-outline-wide-btn" id="lpb1QuickResultBtn" onclick="lpb1SwitchScreen('result')" style="display:none;">
        <span class="lnr lnr-picture"></span>
        <span>Lihat hasil photobooth</span>
        <span class="lnr lnr-arrow-right"></span>
      </button>
    </div>

    <!-- ====== LAYAR 2: KAMERA 3X JEPRET OTOMATIS + POPUP "SEMUA FOTO SUDAH DIAMBIL!" ====== -->
    <div class="lpb1-screen" id="lpb1ScreenCamera" style="padding:0; max-width:none;">
      <div class="lpb1-cam-card">
        <div class="lpb1-seg-bar">
          <div class="lpb1-seg-item" id="lpb1Seg0"></div>
          <div class="lpb1-seg-item" id="lpb1Seg1"></div>
          <div class="lpb1-seg-item" id="lpb1Seg2"></div>
        </div>

        <div class="lpb1-cam-topbar">
          <button type="button" class="lpb1-cam-close" onclick="lpb1SwitchScreen('templates')" title="Kembali ke Pilih Template">
            <span class="lnr lnr-cross"></span>
          </button>
          <div class="lpb1-cam-pill" id="lpb1CamStepPill">Foto 1/3</div>
          <div class="lpb1-cam-pill" id="lpb1HeadCouple">Photobooth</div>
        </div>

        <div class="lpb1-right-sidebar">
          <button type="button" class="lpb1-side-item" onclick="lpb1FlipCamera()" title="Mode Kamera Belakang">
            <span class="lpb1-side-icon"><span class="lnr lnr-sync"></span></span>
            <span class="lpb1-side-label">Balik</span>
          </button>

          <button type="button" class="lpb1-side-item active" id="lpb1TimerSideBtn" onclick="lpb1ToggleTimer()">
            <span class="lpb1-side-icon"><span class="lnr lnr-clock"></span></span>
            <span class="lpb1-side-label" id="lpb1TimerSideLabel">3s</span>
          </button>

          <button type="button" class="lpb1-side-item active" id="lpb1MirrorSideBtn" onclick="lpb1ToggleMirror()">
            <span class="lpb1-side-icon lpb1-ico">
              <svg viewBox="0 0 24 24"><path d="M7 8l-4 4 4 4"/><path d="M17 8l4 4-4 4"/><path d="M3 12h18"/><path d="M12 4v16" stroke-dasharray="2 2"/></svg>
            </span>
            <span class="lpb1-side-label">Mirror</span>
          </button>

          <button type="button" class="lpb1-side-item active" id="lpb1FlashSideBtn" onclick="lpb1ToggleFlash()">
            <span class="lpb1-side-icon lpb1-ico">
              <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </span>
            <span class="lpb1-side-label">Flash</span>
          </button>

          <button type="button" class="lpb1-side-item" id="lpb1FrameGuideSideBtn" onclick="lpb1ToggleLiveFrameGuide()">
            <span class="lpb1-side-icon"><span class="lnr lnr-frame-expand"></span></span>
            <span class="lpb1-side-label">Bingkai</span>
          </button>
        </div>

        <div class="lpb1-prep-pill" id="lpb1PrepPill">Menyiapkan kamera...</div>

        <video id="lpb1Video" class="mirror tone-soft" playsinline autoplay muted></video>
        <canvas id="lpb1LiveFrameCanvas" width="720" height="1280"></canvas>

        <div class="lpb1-cam-bottom" id="lpb1CamBottom">
          <div class="lpb1-tone-popup" id="lpb1TonePopup">
            <button type="button" class="lpb1-tone-chip active" onclick="lpb1SelectTone('soft', this)">Soft</button>
            <button type="button" class="lpb1-tone-chip" onclick="lpb1SelectTone('warm', this)">Warm</button>
            <button type="button" class="lpb1-tone-chip" onclick="lpb1SelectTone('peach', this)">Peach</button>
            <button type="button" class="lpb1-tone-chip" onclick="lpb1SelectTone('bw', this)">B&W</button>
            <button type="button" class="lpb1-tone-chip" onclick="lpb1SelectTone('normal', this)">Normal</button>
          </div>

          <div class="lpb1-shutter-row">
            <button type="button" class="lpb1-magic-btn" id="lpb1MagicFilterBtn" onclick="lpb1ToggleTonePopup()" title="Filter Tone Warna">
              <span class="lnr lnr-magic-wand"></span>
            </button>

            <button type="button" class="lpb1-shutter-ring" id="lpb1ShutterBtn" onclick="lpb1StartPhotoSession()" title="Ambil Foto">
              <span class="lpb1-shutter-core"></span>
            </button>

            <label class="lpb1-gallery-sq-btn" title="Pilih Foto dari Galeri">
              <span class="lnr lnr-picture"></span>
              <span class="lpb1-count-badge" id="lpb1TakenCountBadge">0</span>
              <input type="file" accept="image/*" multiple style="display:none;" onchange="lpb1UploadPhoto(event)">
            </label>
          </div>
        </div>

        <div class="lpb1-countdown" id="lpb1Countdown">3</div>
        <div class="lpb1-flash" id="lpb1Flash"></div>

        <!-- Pop-up Dialog "Semua foto sudah diambil!" -->
        <div class="lpb1-done-overlay" id="lpb1DoneOverlay">
          <div class="lpb1-done-box">
            <div class="lpb1-done-icon">
              <span class="lnr lnr-checkmark-circle"></span>
            </div>
            <h4 class="lpb1-done-title">Semua foto sudah diambil!</h4>
            <p class="lpb1-done-sub">
              Cek dulu hasilnya di galeri. Kamu bisa mengambil ulang foto yang kurang pas.
            </p>
            <button type="button" class="lpb1-done-btn outline" onclick="lpb1SwitchScreen('gallery')">
              <span>Buka galeri foto</span>
            </button>
            <button type="button" class="lpb1-done-btn primary" onclick="lpb1SwitchScreen('result')">
              <span>Lanjut ke Hasil</span>
              <span class="lnr lnr-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== LAYAR 3: GALERI FOTO ====== -->
    <div class="lpb1-screen" id="lpb1ScreenGallery">
      <div class="lpb1-gal-box">
        <h3 style="font-size:20px; font-weight:700; margin:0 0 4px 0;">Galeri Foto</h3>
        <p style="font-size:12px; color:rgba(255,255,255,0.7); margin:0;">Pilih foto yang ingin diambil ulang.</p>

        <div class="lpb1-gal-grid" id="lpb1GalleryGrid"></div>

        <button type="button" class="lpb1-primary-wide-btn" onclick="lpb1SwitchScreen('result')">
          <span>Lanjut ke Hasil</span>
          <span class="lnr lnr-arrow-right"></span>
        </button>
        <br>
        <button type="button" class="lpb1-outline-wide-btn" style="background:transparent; color:#fff; border-color:rgba(255,255,255,0.25);" onclick="lpb1SwitchScreen('camera')">
          <span>Kembali</span>
        </button>
      </div>
    </div>

    <!-- ====== LAYAR 4: HASIL FOTOMU ====== -->
    <div class="lpb1-screen" id="lpb1ScreenResult">
      <h3 class="lpb1-res-header-title">Hasil Fotomu</h3>
      <p class="lpb1-screen-sub" style="margin-bottom:6px;">Momen manis, siap disimpan dan dibagikan.</p>

      <div class="lpb1-res-stage-wrap" id="lpb1Stage">
        <canvas id="lpb1PhotoCanvas" width="720" height="1280"></canvas>
        <canvas id="lpb1FrameOverlay" width="720" height="1280"></canvas>
      </div>

      <div class="lpb1-res-tools">
        <div class="lpb1-res-chip">
          <span class="lnr lnr-magnifier"></span>
          <input type="range" id="lpb1ZoomRange" min="100" max="300" value="100" style="width:75px; accent-color:#556b57; height:4px; cursor:pointer;" oninput="lpb1OnZoomSlider(this.value)">
        </div>
        <button type="button" class="lpb1-res-chip active" id="lpb1ToggleHideTextBtn" onclick="lpb1ToggleHideText()">
          <span class="lnr lnr-eye"></span>
          <span>Tulisan: ON</span>
        </button>
        <button type="button" class="lpb1-res-chip" onclick="lpb1ResetTextPositions()">
          <span class="lnr lnr-undo"></span>
          <span>Default Teks</span>
        </button>
      </div>

      <div class="lpb1-pick-photo-wrap" id="lpb1SelfiePickerWrap">
        <span style="font-size:11px; color:#6e7a6f; margin-bottom:6px;">Pilih foto untuk diunduh atau dibagikan</span>
        <div class="lpb1-pick-row" id="lpb1SelfiePickerRow"></div>
      </div>

      <div class="lpb1-res-actions-grid">
        <button type="button" class="lpb1-res-act-btn primary-dl" onclick="lpb1Download()">
          <span class="lnr lnr-download"></span>
          <span id="lpb1DownloadBtnLabel">Unduh Foto 1</span>
        </button>

        <button type="button" class="lpb1-res-act-btn" onclick="lpb1ShareIG()">
          <span class="lpb1-ico">
            <svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </span>
          <span>Bagikan</span>
        </button>

        <button type="button" class="lpb1-res-act-btn" onclick="lpb1RetakeAllPhotos()">
          <span class="lnr lnr-redo"></span>
          <span>Foto Ulang</span>
        </button>

        <button type="button" class="lpb1-res-act-btn" onclick="lpb1OpenChangeTemplate()">
          <span class="lnr lnr-layers"></span>
          <span>Ganti Template</span>
        </button>
      </div>

      <span style="font-size:10.5px; color:#7a867b; margin-top:8px;" id="lpb1SelectedPhotoNote">Foto 1 dipilih untuk diunduh atau dibagikan.</span>
      <div class="lpb1-toast" id="lpb1Toast"></div>
    </div>
  </div>
</div>

`;
})();


// ====== TAHAP 3 (PERBAIKAN): SCRIPT BAGIAN 1 (INTI SISTEM, FONT WDP & SIMPAN ANTI-RUSAK) ======

(function() {
  try {
    const rootCard = document.getElementById('lpb1RootCard');
    document.querySelectorAll('#lpb1FullScreenModal, .lpb1-fullscreen-modal').forEach(m => {
      if (rootCard && !rootCard.contains(m)) m.remove();
    });
    document.body.style.overflow = '';
  } catch (e) {}

  if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      let radius = typeof r === 'number' ? r : (Array.isArray(r) ? (r[0] || 0) : 0);
      if (w < 2 * radius) radius = w / 2;
      if (h < 2 * radius) radius = h / 2;
      this.beginPath();
      this.moveTo(x + radius, y);
      this.arcTo(x + w, y, x + w, y + h, radius);
      this.arcTo(x + w, y + h, x, y + h, radius);
      this.arcTo(x, y + h, x, y, radius);
      this.arcTo(x, y, x + w, y, radius);
      this.closePath();
      return this;
    };
  }

  const GRID3_SLOTS = [
    { x: 136, y: 50,  w: 448, h: 308 },
    { x: 136, y: 378, w: 448, h: 308 },
    { x: 136, y: 706, w: 448, h: 308 }
  ];

  const DEFAULT_TEXT = {
    isSaved: false,
    title: "The Wedding of",
    name: "",
    date: "",
    extra1: "",
    extra2: ""
  };

  const DEFAULT_SIZES = { title: 15, name: 54, date: 17, extra1: 16, extra2: 22 };

  const DEFAULT_FONTS = {
    title: "Plus Jakarta Sans",
    name: "Cormorant Garamond",
    date: "Plus Jakarta Sans",
    extra1: "Plus Jakarta Sans",
    extra2: "Cormorant Garamond"
  };

  const DEFAULT_ITALICS = {
    title: false,
    name: true,
    date: false,
    extra1: false,
    extra2: true
  };

  const WDP_POPULAR_FONTS = [
    "Cormorant Garamond",
    "Plus Jakarta Sans",
    "Great Vibes",
    "Alex Brush",
    "Playfair Display",
    "Cinzel",
    "Montserrat",
    "Dancing Script",
    "Sacramento",
    "Parisienne",
    "Allura",
    "Pinyon Script",
    "Prata",
    "Lora",
    "Italiana",
    "Marcellus",
    "Josefin Sans",
    "Poppins",
    "DM Serif Display",
    "Libre Baskerville"
  ];

  const DEFAULT_STYLE = {
    hideAllText: false,
    useCustomColors: false,
    sizes: Object.assign({}, DEFAULT_SIZES),
    fonts: Object.assign({}, DEFAULT_FONTS),
    italics: Object.assign({}, DEFAULT_ITALICS),
    colors: {
      title: "#d8c59e",
      name: "#ffffff",
      date: "#d8c59e",
      extra1: "#d8c59e",
      extra2: "#e3ebe4"
    },
    shadow: { enabled: false, color: "#000000", blur: 8, opacity: 60 }
  };

  function getDefaultPositions() {
    return {
      title:  { x: 360, y: 1052 },
      extra2: { x: 360, y: 1086 },
      name:   { x: 360, y: 1142 },
      date:   { x: 360, y: 1192 },
      extra1: { x: 360, y: 1222 }
    };
  }

  let savedConfigRaw = window.LPB1_SAVED_CONFIG || {"updatedAt":0,"cutoutMode":"front","frames":[],"textData":{"isSaved":false,"title":"The Wedding of","name":"","date":"","extra1":"","extra2":""},"textPositions":null,"textStyle":null,"customFontCss":""};

  let parsedFrames = [];
  let parsedCutoutMode = "raw";
  let parsedTextData = Object.assign({}, DEFAULT_TEXT);
  let parsedPositions = getDefaultPositions();
  let parsedStyle = JSON.parse(JSON.stringify(DEFAULT_STYLE));
  let parsedCustomFontCss = "";
  let rawTimestamp = 0;

  function mergeStyleData(target, src) {
    if (!src || typeof src !== 'object') return;
    if (typeof src.hideAllText === 'boolean') target.hideAllText = src.hideAllText;
    if (typeof src.useCustomColors === 'boolean') target.useCustomColors = src.useCustomColors;
    if (src.sizes && typeof src.sizes === 'object') Object.assign(target.sizes, src.sizes);
    if (src.fonts && typeof src.fonts === 'object') Object.assign(target.fonts, src.fonts);
    if (src.italics && typeof src.italics === 'object') Object.assign(target.italics, src.italics);
    if (src.colors && typeof src.colors === 'object') Object.assign(target.colors, src.colors);
    if (src.shadow && typeof src.shadow === 'object') Object.assign(target.shadow, src.shadow);
  }

  if (savedConfigRaw && typeof savedConfigRaw === 'object' && !Array.isArray(savedConfigRaw)) {
    rawTimestamp = Number(savedConfigRaw.updatedAt) || 0;
    parsedFrames = Array.isArray(savedConfigRaw.frames) ? savedConfigRaw.frames : [];
    parsedCutoutMode = savedConfigRaw.cutoutMode || "raw";
    if (savedConfigRaw.textData) parsedTextData = Object.assign({}, DEFAULT_TEXT, savedConfigRaw.textData);
    if (savedConfigRaw.textPositions) {
      const defP = getDefaultPositions();
      Object.keys(defP).forEach(k => {
        if (savedConfigRaw.textPositions[k]) defP[k] = { x: savedConfigRaw.textPositions[k].x, y: savedConfigRaw.textPositions[k].y };
      });
      parsedPositions = defP;
    }
    mergeStyleData(parsedStyle, savedConfigRaw.textStyle);
    if (savedConfigRaw.customFontCss) parsedCustomFontCss = savedConfigRaw.customFontCss;
  }

  try {
    const keys = ['lpb1_flow_v11', 'lpb1_flow_v10', 'lpb1_flow_v9', 'lpb1_flow_v8', 'lpb1_flow_v7'];
    for (let i = 0; i < keys.length; i++) {
      const cached = JSON.parse(localStorage.getItem(keys[i]) || 'null');
      if (cached && typeof cached === 'object') {
        const cachedTime = Number(cached.updatedAt) || 0;
        const isNewer = (cachedTime >= rawTimestamp) || (rawTimestamp === 0);

        if (parsedFrames.length === 0 && Array.isArray(cached.frames) && cached.frames.length > 0) {
          parsedFrames = cached.frames;
        }
        if (isNewer || !savedConfigRaw.textData?.isSaved) {
          if (cached.textData) parsedTextData = Object.assign({}, DEFAULT_TEXT, cached.textData);
          if (cached.textPositions) parsedPositions = Object.assign(getDefaultPositions(), cached.textPositions);
          if (cached.textStyle) mergeStyleData(parsedStyle, cached.textStyle);
          if (cached.customFontCss) parsedCustomFontCss = cached.customFontCss;
          if (cached.cutoutMode) parsedCutoutMode = cached.cutoutMode;
        }
        break;
      }
    }
  } catch (e) {}

  const capturedCanvases = [0, 1, 2].map(() => {
    const c = document.createElement('canvas');
    c.width = 720;
    c.height = 960;
    return c;
  });

  const S = window.LPB1_STATE = {
    grid3Slots: GRID3_SLOTS,
    stream: (window.LPB1_STATE && window.LPB1_STATE.stream) ? window.LPB1_STATE.stream : null,
    activeScreen: "templates",
    layoutMode: "selfie",
    isChangingTemplateFromResult: false,
    facingMode: "user",
    isMirrored: true,
    timerSeconds: 3,
    flashEnabled: true,
    showFrameInLive: false,
    currentFrame: "hitam",
    currentTone: "soft",
    photoCanvases: capturedCanvases,
    photoTaken: [false, false, false],
    photoThumbs: ["", "", ""],
    retakeSingleIndex: null,
    selectedSelfieIndex: 0,
    hasCapturedAll: false,
    isCountingDown: false,
    countdownTimer: null,
    isSwitchingCam: false,
    cropScale: 1,
    cropX: 0,
    cropY: 0,
    wdpCutoutMode: parsedCutoutMode,
    wdpFrames: parsedFrames,
    textData: parsedTextData,
    textPositions: parsedPositions,
    textStyle: parsedStyle,
    customFontCss: parsedCustomFontCss,
    textBounds: {},
    draggingKey: null,
    dragOffsetX: 0,
    dragOffsetY: 0,
    activeWdpImg: null,
    activeWdpHasAlphaHole: true,
    imageCache: {},
    detectedSiteFonts: [],
    loadedGoogleFonts: {}
  };

  function el(id) { return document.getElementById(id); }

  function redrawAllLayers(showDragGuides) {
    if (window.LPB1 && window.LPB1.drawStaticFrameOverlay) {
      window.LPB1.drawStaticFrameOverlay(showDragGuides);
    }
    if (window.LPB1 && window.LPB1.drawPhotoLayer) {
      window.LPB1.drawPhotoLayer();
    }
    if (window.LPB1 && window.LPB1.renderTemplateCarousel) {
      window.LPB1.renderTemplateCarousel();
    }
  }

  function cleanFontName(raw) {
    if (!raw || typeof raw !== 'string') return '';
    const first = raw.split(',')[0].replace(/['"]/g, '').trim();
    const ignore = [
      'inherit', 'initial', 'unset', 'serif', 'sans-serif', 'monospace', 'cursive', 'fantasy',
      'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue',
      'Arial', 'Noto Sans', 'Linearicons-Free', 'Font Awesome 5 Free', 'Font Awesome 5 Brands',
      'FontAwesome', 'eicons', 'dashicons'
    ];
    if (!first || first.length < 2) return '';
    for (let i = 0; i < ignore.length; i++) {
      if (first.toLowerCase() === ignore[i].toLowerCase()) return '';
    }
    return first;
  }

  function extractSelectedCustomFontFacesCSS() {
    const activeFonts = new Set(Object.values((S.textStyle && S.textStyle.fonts) || DEFAULT_FONTS).map(f => cleanFontName(f).toLowerCase()));
    const cssChunks = [];

    [document, (window.parent && window.parent !== window) ? window.parent.document : null].forEach(doc => {
      if (!doc) return;
      try {
        const sheets = Array.from(doc.styleSheets || []);
        sheets.forEach(sheet => {
          try {
            const rules = Array.from(sheet.cssRules || sheet.rules || []);
            rules.forEach(rule => {
              if (rule.type === 5 && rule.style) {
                const fam = cleanFontName(rule.style.getPropertyValue('font-family')).toLowerCase();
                if (fam && activeFonts.has(fam) && rule.cssText && !cssChunks.includes(rule.cssText)) {
                  cssChunks.push(rule.cssText);
                }
              }
            });
          } catch (e) {}
        });
      } catch (e) {}
    });

    if (cssChunks.length > 0) {
      S.customFontCss = cssChunks.join('\n');
    }
    return S.customFontCss || '';
  }

  function injectSavedCustomFontFacesToHead() {
    if (!S.customFontCss) return;
    let st = document.getElementById('lpb1SavedCustomFontFaces');
    if (!st) {
      st = document.createElement('style');
      st.id = 'lpb1SavedCustomFontFaces';
      document.head.appendChild(st);
    }
    if (st.textContent !== S.customFontCss) {
      st.textContent = S.customFontCss;
    }
  }

  function updateDomFontPreloader() {
    injectSavedCustomFontFacesToHead();

    let preloader = document.getElementById('lpb1FontPreloaderBox');
    if (!preloader) {
      preloader = document.createElement('div');
      preloader.id = 'lpb1FontPreloaderBox';
      preloader.style.cssText = 'position:fixed; left:-9999px; top:-9999px; width:1px; height:1px; overflow:hidden; opacity:0.01; pointer-events:none; z-index:-1;';
      document.body.appendChild(preloader);
    }

    const fn = (S.textStyle && S.textStyle.fonts) || DEFAULT_FONTS;
    const it = (S.textStyle && S.textStyle.italics) || DEFAULT_ITALICS;
    const keys = ['title', 'name', 'date', 'extra1', 'extra2'];

    let html = '';
    keys.forEach(k => {
      const fName = cleanFontName(fn[k] || DEFAULT_FONTS[k]);
      const styleIt = it[k] ? 'italic' : 'normal';
      html += `<span style="font-family:'${fName}', serif; font-weight:700; font-style:${styleIt};">Wedding Photobooth</span>`;
      html += `<span style="font-family:'${fName}', sans-serif; font-weight:600; font-style:${styleIt};">Wedding Photobooth</span>`;
    });
    preloader.innerHTML = html;
  }

  function triggerFontLoadAndRedraw(clean) {
    if (document.fonts && typeof document.fonts.load === 'function') {
      Promise.all([
        document.fonts.load(`400 28px "${clean}"`),
        document.fonts.load(`600 28px "${clean}"`),
        document.fonts.load(`700 28px "${clean}"`),
        document.fonts.load(`italic 600 28px "${clean}"`),
        document.fonts.load(`italic 700 28px "${clean}"`)
      ]).then(() => {
        redrawAllLayers(false);
        setTimeout(() => redrawAllLayers(false), 180);
      }).catch(() => {
        redrawAllLayers(false);
      });
    } else {
      redrawAllLayers(false);
      setTimeout(() => redrawAllLayers(false), 250);
    }
  }

  function ensureFontLoadedAndRedraw(fontName) {
    const clean = cleanFontName(fontName);
    updateDomFontPreloader();

    if (!clean) {
      redrawAllLayers(false);
      return;
    }

    if (!S.loadedGoogleFonts[clean]) {
      S.loadedGoogleFonts[clean] = true;
      const encoded = encodeURIComponent(clean).replace(/%20/g, '+');
      const linkId = 'lpb1-gfont-' + clean.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (!document.getElementById(linkId)) {
        const lnk = document.createElement('link');
        lnk.id = linkId;
        lnk.rel = 'stylesheet';
        lnk.href = `https://fonts.googleapis.com/css2?family=${encoded}:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap`;
        lnk.onload = function() {
          triggerFontLoadAndRedraw(clean);
        };
        document.head.appendChild(lnk);
      }
    }

    triggerFontLoadAndRedraw(clean);
  }

  function preloadAllSelectedFonts() {
    injectSavedCustomFontFacesToHead();
    updateDomFontPreloader();
    const fn = (S.textStyle && S.textStyle.fonts) || DEFAULT_FONTS;
    Object.values(fn).forEach(fName => {
      if (fName) ensureFontLoadedAndRedraw(fName);
    });
  }

  try {
    if (document.fonts) {
      if (document.fonts.ready) {
        document.fonts.ready.then(() => {
          redrawAllLayers(false);
        });
      }
      if (typeof document.fonts.addEventListener === 'function') {
        document.fonts.addEventListener('loadingdone', () => {
          redrawAllLayers(false);
        });
      }
    }
  } catch (e) {}

  function scanWeddingPressAndElementorFonts() {
    const foundSet = new Set();
    const addFont = function(fName) {
      const cleaned = cleanFontName(fName);
      if (cleaned) foundSet.add(cleaned);
    };

    [document, (window.parent && window.parent !== window) ? window.parent.document : null].forEach(doc => {
      if (!doc) return;
      try {
        if (doc.fonts && typeof doc.fonts.forEach === 'function') {
          doc.fonts.forEach(ff => {
            if (ff && ff.family) addFont(ff.family);
          });
        }
      } catch (e) {}

      try {
        const sheets = Array.from(doc.styleSheets || []);
        sheets.forEach(sheet => {
          try {
            const rules = Array.from(sheet.cssRules || sheet.rules || []);
            rules.forEach(rule => {
              if (rule.type === 5 && rule.style) {
                const fam = rule.style.getPropertyValue('font-family');
                if (fam) addFont(fam);
              }
            });
          } catch (corsErr) {}
        });
      } catch (e) {}

      try {
        doc.querySelectorAll('link[href*="fonts.googleapis.com"]').forEach(lnk => {
          const href = lnk.getAttribute('href') || '';
          const matches = href.match(/family=([^&:]+)/g);
          if (matches) {
            matches.forEach(m => {
              const rawFam = decodeURIComponent(m.replace('family=', '')).replace(/\+/g, ' ');
              rawFam.split('|').forEach(part => addFont(part.split(':')[0]));
            });
          }
        });
      } catch (e) {}

      try {
        doc.querySelectorAll('.elementor-heading-title, .elementor-widget-text-editor, h1, h2, h3, h4, [class*="wdp"]').forEach(node => {
          const comp = window.getComputedStyle(node);
          if (comp && comp.fontFamily) addFont(comp.fontFamily);
        });
      } catch (e) {}
    });

    try {
      const parentWin = window.parent;
      const fontCtrl = parentWin && parentWin.elementor && parentWin.elementor.config &&
                       parentWin.elementor.config.controls && parentWin.elementor.config.controls.font;
      if (fontCtrl && fontCtrl.options && typeof fontCtrl.options === 'object') {
        Object.keys(fontCtrl.options).forEach(fontKey => {
          const fontType = fontCtrl.options[fontKey];
          if (fontType === 'custom' || fontType === 'typekit' || fontType === 'local') {
            addFont(fontKey);
          }
        });
      }
    } catch (e) {}

    if (S.textStyle && S.textStyle.fonts) {
      Object.values(S.textStyle.fonts).forEach(f => addFont(f));
    }

    S.detectedSiteFonts = Array.from(foundSet);
    return S.detectedSiteFonts;
  }

  function injectFontSelectorsIntoEditor() {
    if (!el('lpb1FontSelectorStyle')) {
      const st = document.createElement('style');
      st.id = 'lpb1FontSelectorStyle';
      st.textContent = `
        .lpb1-fullscreen-modal {
          align-items: flex-start !important;
          justify-content: center !important;
        }
        .lpb1-screen {
          margin: auto !important;
          min-height: min-content !important;
          padding: 28px 16px 28px 16px !important;
        }
        #lpb1ScreenCamera {
          padding: 0 !important;
          min-height: 100dvh !important;
        }
        .lpb1-font-sync-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(155, 27, 104, 0.08);
          border: 1px solid #d4a3c0;
          border-radius: 10px;
          padding: 6px 10px;
          font-size: 10.5px;
          font-weight: 600;
          color: #6b1749;
        }
        .lpb1-font-row {
          display: flex;
          gap: 5px;
          align-items: center;
          margin-top: 3px;
        }
        .lpb1-font-select {
          flex: 1;
          min-width: 0;
          padding: 5px 8px;
          border-radius: 8px;
          border: 1px solid #d4a3c0;
          background: #fdfbfd;
          color: #4a1535;
          font-size: 11px;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }
        .lpb1-italic-btn {
          height: 29px;
          padding: 0 10px;
          border-radius: 8px;
          border: 1px solid #d4a3c0;
          background: #ffffff;
          color: #6b1749;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 700;
          font-style: italic;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        .lpb1-italic-btn.active {
          background: #9b1b68;
          color: #ffffff;
          border-color: #9b1b68;
        }
      `;
      document.head.appendChild(st);
    }

    const formGroup = el('lpb1TextFormInputs');
    if (!formGroup) {
      preloadAllSelectedFonts();
      return;
    }

    if (!el('lpb1FontSyncBar')) {
      const syncBar = document.createElement('div');
      syncBar.id = 'lpb1FontSyncBar';
      syncBar.className = 'lpb1-font-sync-bar';
      syncBar.innerHTML = `
        <span>🔤 Jenis Font (Terhubung WDP & Undangan)</span>
        <button type="button" class="lpb1-cutout-chip" onclick="lpb1RescanWdpFonts()">
          <span class="lnr lnr-sync"></span>
          <span>Sinkron Font WDP</span>
        </button>
      `;
      formGroup.insertBefore(syncBar, formGroup.firstChild);
    }

    const fieldConfigs = [
      { key: 'title',  inputId: 'lpb1InTitle' },
      { key: 'name',   inputId: 'lpb1InName' },
      { key: 'date',   inputId: 'lpb1InDate' },
      { key: 'extra1', inputId: 'lpb1InExtra1' },
      { key: 'extra2', inputId: 'lpb1InExtra2' }
    ];

    fieldConfigs.forEach(cfg => {
      const inEl = el(cfg.inputId);
      if (!inEl) return;
      const fieldWrap = inEl.closest('.lpb1-field');
      if (!fieldWrap || el('lpb1Font_' + cfg.key)) return;

      const row = document.createElement('div');
      row.className = 'lpb1-font-row';
      row.innerHTML = `
        <select id="lpb1Font_${cfg.key}" class="lpb1-font-select" onchange="lpb1OnFontChange('${cfg.key}', this.value)" onkeydown="event.stopPropagation()"></select>
        <button type="button" id="lpb1Italic_${cfg.key}" class="lpb1-italic-btn" onclick="lpb1ToggleItalic('${cfg.key}')" title="Huruf Miring (Italic)">I</button>
      `;
      fieldWrap.appendChild(row);
    });

    populateAllFontDropdowns();
  }

  function populateAllFontDropdowns() {
    const siteFonts = scanWeddingPressAndElementorFonts();
    const keys = ['title', 'name', 'date', 'extra1', 'extra2'];

    if (!S.textStyle.fonts) S.textStyle.fonts = Object.assign({}, DEFAULT_FONTS);
    if (!S.textStyle.italics) S.textStyle.italics = Object.assign({}, DEFAULT_ITALICS);

    keys.forEach(k => {
      const sel = el('lpb1Font_' + k);
      const itBtn = el('lpb1Italic_' + k);
      const currentFont = S.textStyle.fonts[k] || DEFAULT_FONTS[k];
      const isItalic = Boolean(S.textStyle.italics[k]);

      if (itBtn) itBtn.classList.toggle('active', isItalic);
      if (!sel) return;

      sel.innerHTML = '';

      if (siteFonts.length > 0) {
        const grpSite = document.createElement('optgroup');
        grpSite.label = '📌 Font Aktif di Undangan & WDP Anda';
        siteFonts.forEach(fName => {
          const opt = document.createElement('option');
          opt.value = fName;
          opt.textContent = fName;
          opt.style.fontFamily = `"${fName}", sans-serif`;
          if (fName.toLowerCase() === currentFont.toLowerCase()) opt.selected = true;
          grpSite.appendChild(opt);
        });
        sel.appendChild(grpSite);
      }

      const grpPop = document.createElement('optgroup');
      grpPop.label = '✨ Koleksi Font WeddingPress Populer';
      WDP_POPULAR_FONTS.forEach(fName => {
        if (siteFonts.some(sf => sf.toLowerCase() === fName.toLowerCase())) return;
        const opt = document.createElement('option');
        opt.value = fName;
        opt.textContent = fName;
        opt.style.fontFamily = `"${fName}", sans-serif`;
        if (fName.toLowerCase() === currentFont.toLowerCase()) opt.selected = true;
        grpPop.appendChild(opt);
      });
      sel.appendChild(grpPop);

      const grpCustom = document.createElement('optgroup');
      grpCustom.label = '➕ Lainnya';
      const optManual = document.createElement('option');
      optManual.value = '__custom__';
      optManual.textContent = '➕ Ketik Nama Font WDP Lainnya...';
      grpCustom.appendChild(optManual);
      sel.appendChild(grpCustom);
    });

    preloadAllSelectedFonts();
  }

  window.lpb1RescanWdpFonts = function() {
    populateAllFontDropdowns();
    syncWdpFramesSilent(false);
    if (el('lpb1EditorStatus')) {
      el('lpb1EditorStatus').innerHTML = `✅ <b>${S.detectedSiteFonts.length} Font dari sistem WeddingPress & Undangan berhasil disinkronkan!</b>`;
    }
  };

  window.lpb1OnFontChange = function(key, val) {
    if (val === '__custom__') {
      const customName = prompt('Masukkan nama Font yang terpasang di WeddingPress / Elementor Anda:', S.textStyle.fonts[key] || '');
      if (customName && customName.trim()) {
        const cleaned = cleanFontName(customName.trim());
        if (cleaned) {
          S.textStyle.fonts[key] = cleaned;
          populateAllFontDropdowns();
          ensureFontLoadedAndRedraw(cleaned);
          syncWdpFramesSilent(false);
          return;
        }
      }
      populateAllFontDropdowns();
      return;
    }

    S.textStyle.fonts[key] = val;
    ensureFontLoadedAndRedraw(val);
    updateTextSummaryUI();
    syncWdpFramesSilent(false);
  };

  window.lpb1ToggleItalic = function(key) {
    if (!S.textStyle.italics) S.textStyle.italics = Object.assign({}, DEFAULT_ITALICS);
    S.textStyle.italics[key] = !S.textStyle.italics[key];
    const itBtn = el('lpb1Italic_' + key);
    if (itBtn) itBtn.classList.toggle('active', Boolean(S.textStyle.italics[key]));
    updateDomFontPreloader();
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  function getCanvasCoords(clientX, clientY) {
    const stage = el('lpb1Stage');
    if (!stage) return { x: 0, y: 0 };
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return { x: 0, y: 0 };
    return {
      x: (clientX - rect.left) * (720 / rect.width),
      y: (clientY - rect.top) * (1280 / rect.height)
    };
  }

  function findHitTextKey(cx, cy) {
    if (S.textStyle && S.textStyle.hideAllText) return null;
    const keys = ['name', 'extra2', 'title', 'date', 'extra1'];
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const b = S.textBounds && S.textBounds[k];
      if (b && cx >= b.left && cx <= b.right && cy >= b.top && cy <= b.bottom) return k;
    }
    return null;
  }

  function checkElementorEditor() {
    try {
      const href = window.location.href || "";
      const parentHref = (window.parent && window.parent !== window) ? window.parent.location.href : "";
      if (
        document.body.classList.contains('elementor-editor-active') ||
        document.body.classList.contains('elementor-editor-preview') ||
        href.includes('elementor-preview=') ||
        href.includes('action=elementor') ||
        parentHref.includes('action=elementor') ||
        (window.elementorFrontend && window.elementorFrontend.isEditMode && window.elementorFrontend.isEditMode())
      ) {
        const root = el('lpb1RootCard');
        if (root) root.classList.add('lpb1-is-editor');
      }
    } catch (e) {}
  }
  checkElementorEditor();
  setTimeout(checkElementorEditor, 800);

  function hexToRgba(hex, opacityPercent) {
    let c = (hex || "#000000").replace('#', '');
    if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    const a = Math.max(0, Math.min(1, (opacityPercent || 60) / 100));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function isImageCanvasClean(img) {
    if (!img || !img.complete || img.naturalWidth === 0) return false;
    try {
      const testC = document.createElement('canvas');
      testC.width = 2;
      testC.height = 2;
      const tCtx = testC.getContext('2d');
      tCtx.drawImage(img, 0, 0, 2, 2);
      testC.toDataURL('image/png');
      return true;
    } catch (e) {
      return false;
    }
  }

  function normalizeWdpUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return '';
    if (rawUrl.startsWith('data:') || rawUrl.startsWith('blob:')) return rawUrl;
    try {
      const u = new URL(rawUrl, window.location.origin);
      if (u.hostname === window.location.hostname) {
        u.protocol = window.location.protocol;
        return u.href;
      }
    } catch (e) {}
    if (window.location.protocol === 'https:' && rawUrl.startsWith('http://')) {
      return rawUrl.replace(/^http:\/\//i, 'https://');
    }
    return rawUrl;
  }

  function updateHeaderBrandText() {
    const coupleEl = el('lpb1HeadCouple');
    if (coupleEl) {
      coupleEl.textContent = (S.textData.name || "Photobooth").trim() || "Photobooth";
    }
  }

  // Simpan Konfigurasi dengan Metode Substring Aman (100% Bebas Konflik Regex)
  function syncWdpFramesSilent(commitToElementor) {
    S.wdpFrames.forEach((f, i) => {
      f.name = `Bingkai ${i + 1}`;
      f.url = normalizeWdpUrl(f.url);
    });

    extractSelectedCustomFontFacesCSS();

    const payloadObj = {
      updatedAt: Date.now(),
      cutoutMode: S.wdpCutoutMode || "raw",
      frames: S.wdpFrames,
      textData: S.textData,
      textPositions: S.textPositions,
      textStyle: S.textStyle,
      customFontCss: S.customFontCss || ""
    };

    try {
      localStorage.setItem('lpb1_flow_v11', JSON.stringify(payloadObj));
      localStorage.setItem('lpb1_flow_v10', JSON.stringify(payloadObj));
    } catch (e) {}

    try {
      const parentWin = window.parent;
      if (!parentWin || !parentWin.elementor) return;

      const jsonStr = JSON.stringify(payloadObj);
      const root = el('lpb1RootCard');
      const widgetEl = root ? root.closest('.elementor-widget-html') : null;
      const widgetId = widgetEl ? widgetEl.getAttribute('data-id') : null;

      const START_MARK = '/*' + 'LPB1_WDP_FRAMES_START' + '*/';
      const END_MARK = '/*' + 'LPB1_WDP_FRAMES_END' + '*/';

      const updateModel = function(models) {
        if (!models) return false;
        for (let i = 0; i < models.length; i++) {
          const m = models[i];
          const isMatch = widgetId ? (m.id === widgetId) : (m.get && m.get('widgetType') === 'html');
          if (isMatch && m.get && m.get('widgetType') === 'html') {
            const settingsModel = m.get('settings');
            const oldHtml = settingsModel ? (settingsModel.get('html') || '') : '';
            const sIdx = oldHtml.indexOf(START_MARK);
            const eIdx = oldHtml.indexOf(END_MARK);
            if (sIdx !== -1 && eIdx !== -1 && eIdx > sIdx) {
              const newHtml = oldHtml.substring(0, sIdx + START_MARK.length) + jsonStr + oldHtml.substring(eIdx);
              settingsModel.set('html', newHtml, { silent: !commitToElementor });
              if (parentWin.elementor.saver && parentWin.elementor.saver.setFlagEditorChange) {
                parentWin.elementor.saver.setFlagEditorChange(true);
              }
              return true;
            }
          }
          const children = m.get && m.get('elements');
          if (children && children.models && updateModel(children.models)) return true;
        }
        return false;
      };

      if (parentWin.elementor.elements && parentWin.elementor.elements.models) {
        updateModel(parentWin.elementor.elements.models);
      }
    } catch (e) {}
  }

  function updateHideTextButtonUI() {
    const btn = el('lpb1ToggleHideTextBtn');
    const isHidden = Boolean(S.textStyle && S.textStyle.hideAllText);
    if (btn) {
      btn.classList.toggle('active', !isHidden);
      btn.innerHTML = `<span class="lnr lnr-eye"></span><span>Tulisan: ${isHidden ? 'OFF' : 'ON'}</span>`;
    }
    updateTextSummaryUI();
  }

  window.lpb1ToggleHideText = function() {
    S.textStyle.hideAllText = !S.textStyle.hideAllText;
    S.draggingKey = null;
    updateHideTextButtonUI();
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1ResetTextPositions = function() {
    S.textPositions = getDefaultPositions();
    S.draggingKey = null;
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  function initTextFormUI() {
    const t = S.textData || DEFAULT_TEXT;
    const st = S.textStyle || DEFAULT_STYLE;
    if (!st.sizes) st.sizes = Object.assign({}, DEFAULT_SIZES);
    if (!st.fonts) st.fonts = Object.assign({}, DEFAULT_FONTS);
    if (!st.italics) st.italics = Object.assign({}, DEFAULT_ITALICS);

    if (el('lpb1InTitle')) el('lpb1InTitle').value = (t.title !== undefined) ? t.title : "The Wedding of";
    if (el('lpb1InName')) el('lpb1InName').value = t.name || "";
    if (el('lpb1InDate')) el('lpb1InDate').value = t.date || "";
    if (el('lpb1InExtra1')) el('lpb1InExtra1').value = t.extra1 || "";
    if (el('lpb1InExtra2')) el('lpb1InExtra2').value = t.extra2 || "";

    if (el('lpb1SizeTitle')) el('lpb1SizeTitle').value = st.sizes.title || 15;
    if (el('lpb1SizeName')) el('lpb1SizeName').value = st.sizes.name || 54;
    if (el('lpb1SizeDate')) el('lpb1SizeDate').value = st.sizes.date || 17;
    if (el('lpb1SizeExtra1')) el('lpb1SizeExtra1').value = st.sizes.extra1 || 16;
    if (el('lpb1SizeExtra2')) el('lpb1SizeExtra2').value = st.sizes.extra2 || 22;

    if (el('lpb1ColTitle')) el('lpb1ColTitle').value = st.colors.title || "#d8c59e";
    if (el('lpb1ColName')) el('lpb1ColName').value = st.colors.name || "#ffffff";
    if (el('lpb1ColDate')) el('lpb1ColDate').value = st.colors.date || "#d8c59e";
    if (el('lpb1ColExtra1')) el('lpb1ColExtra1').value = st.colors.extra1 || "#d8c59e";
    if (el('lpb1ColExtra2')) el('lpb1ColExtra2').value = st.colors.extra2 || "#e3ebe4";

    if (el('lpb1ShadowEnable')) el('lpb1ShadowEnable').checked = Boolean(st.shadow.enabled);
    if (el('lpb1ShadowColor')) el('lpb1ShadowColor').value = st.shadow.color || "#000000";
    if (el('lpb1ShadowBlur')) el('lpb1ShadowBlur').value = (st.shadow.blur !== undefined) ? st.shadow.blur : 8;
    if (el('lpb1ShadowOpacity')) el('lpb1ShadowOpacity').value = (st.shadow.opacity !== undefined) ? st.shadow.opacity : 60;

    injectFontSelectorsIntoEditor();
    updateHeaderBrandText();
    updateHideTextButtonUI();
    updateTextSummaryUI();
    toggleTextFormSavedState(Boolean(t.isSaved));
  }

  function updateTextSummaryUI() {
    const t = S.textData;
    const st = S.textStyle;
    const sz = (st && st.sizes) ? st.sizes : DEFAULT_SIZES;
    const fn = (st && st.fonts) ? st.fonts : DEFAULT_FONTS;
    if (el('lpb1SumTitle')) el('lpb1SumTitle').textContent = `${t.title || "-"} (${fn.title}, ${sz.title}px)`;
    if (el('lpb1SumName')) el('lpb1SumName').textContent = `${t.name || "-"} (${fn.name}, ${sz.name}px)`;
    if (el('lpb1SumDate')) el('lpb1SumDate').textContent = `${t.date || "-"} (${fn.date}, ${sz.date}px)`;
    if (el('lpb1SumExtra1')) el('lpb1SumExtra1').textContent = `${t.extra1 || "-"} (${fn.extra1}, ${sz.extra1}px)`;
    if (el('lpb1SumExtra2')) el('lpb1SumExtra2').textContent = `${t.extra2 || "-"} (${fn.extra2}, ${sz.extra2}px)`;
    if (el('lpb1SumVisibility')) el('lpb1SumVisibility').textContent = st.hideAllText ? "Disembunyikan (ON)" : "Ditampilkan (OFF)";
  }

  function toggleTextFormSavedState(isSaved) {
    const formInputs = el('lpb1TextFormInputs');
    const summaryBox = el('lpb1TextSavedSummary');
    const saveRow = el('lpb1SaveBtnRow');
    const editResetRow = el('lpb1EditResetBtnRow');
    if (!formInputs || !summaryBox || !saveRow || !editResetRow) return;

    formInputs.style.display = isSaved ? 'none' : 'flex';
    summaryBox.style.display = isSaved ? 'flex' : 'none';
    saveRow.style.display = isSaved ? 'none' : 'flex';
    editResetRow.style.display = isSaved ? 'flex' : 'none';
  }

  window.lpb1LivePreviewText = function() {
    S.textData.title = el('lpb1InTitle') ? el('lpb1InTitle').value : "";
    S.textData.name = el('lpb1InName') ? el('lpb1InName').value : "";
    S.textData.date = el('lpb1InDate') ? el('lpb1InDate').value : "";
    S.textData.extra1 = el('lpb1InExtra1') ? el('lpb1InExtra1').value : "";
    S.textData.extra2 = el('lpb1InExtra2') ? el('lpb1InExtra2').value : "";
    updateHeaderBrandText();
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1LivePreviewFontSize = function() {
    if (!S.textStyle.sizes) S.textStyle.sizes = Object.assign({}, DEFAULT_SIZES);
    const clamp = (val, min, max, def) => {
      const n = Number(val);
      return isNaN(n) || n <= 0 ? def : Math.max(min, Math.min(max, n));
    };
    if (el('lpb1SizeTitle')) S.textStyle.sizes.title = clamp(el('lpb1SizeTitle').value, 8, 110, 15);
    if (el('lpb1SizeName')) S.textStyle.sizes.name = clamp(el('lpb1SizeName').value, 12, 130, 54);
    if (el('lpb1SizeDate')) S.textStyle.sizes.date = clamp(el('lpb1SizeDate').value, 8, 90, 17);
    if (el('lpb1SizeExtra1')) S.textStyle.sizes.extra1 = clamp(el('lpb1SizeExtra1').value, 8, 90, 16);
    if (el('lpb1SizeExtra2')) S.textStyle.sizes.extra2 = clamp(el('lpb1SizeExtra2').value, 8, 90, 22);
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1ResetFontSizes = function() {
    S.textStyle.sizes = Object.assign({}, DEFAULT_SIZES);
    S.textStyle.fonts = Object.assign({}, DEFAULT_FONTS);
    S.textStyle.italics = Object.assign({}, DEFAULT_ITALICS);
    if (el('lpb1SizeTitle')) el('lpb1SizeTitle').value = DEFAULT_SIZES.title;
    if (el('lpb1SizeName')) el('lpb1SizeName').value = DEFAULT_SIZES.name;
    if (el('lpb1SizeDate')) el('lpb1SizeDate').value = DEFAULT_SIZES.date;
    if (el('lpb1SizeExtra1')) el('lpb1SizeExtra1').value = DEFAULT_SIZES.extra1;
    if (el('lpb1SizeExtra2')) el('lpb1SizeExtra2').value = DEFAULT_SIZES.extra2;
    populateAllFontDropdowns();
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1LivePreviewStyle = function() {
    S.textStyle.useCustomColors = true;
    if (el('lpb1ColTitle')) S.textStyle.colors.title = el('lpb1ColTitle').value;
    if (el('lpb1ColName')) S.textStyle.colors.name = el('lpb1ColName').value;
    if (el('lpb1ColDate')) S.textStyle.colors.date = el('lpb1ColDate').value;
    if (el('lpb1ColExtra1')) S.textStyle.colors.extra1 = el('lpb1ColExtra1').value;
    if (el('lpb1ColExtra2')) S.textStyle.colors.extra2 = el('lpb1ColExtra2').value;
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1ResetColorsToFrameTheme = function() {
    S.textStyle.useCustomColors = false;
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1LivePreviewShadow = function() {
    S.textStyle.shadow.enabled = el('lpb1ShadowEnable') ? el('lpb1ShadowEnable').checked : false;
    S.textStyle.shadow.color = el('lpb1ShadowColor') ? el('lpb1ShadowColor').value : "#000000";
    S.textStyle.shadow.blur = el('lpb1ShadowBlur') ? Number(el('lpb1ShadowBlur').value) : 8;
    S.textStyle.shadow.opacity = el('lpb1ShadowOpacity') ? Number(el('lpb1ShadowOpacity').value) : 60;
    redrawAllLayers(false);
    syncWdpFramesSilent(false);
  };

  window.lpb1SaveTextConfig = function() {
    window.lpb1LivePreviewText();
    window.lpb1LivePreviewFontSize();
    window.lpb1LivePreviewShadow();

    ['title', 'name', 'date', 'extra1', 'extra2'].forEach(k => {
      const sel = el('lpb1Font_' + k);
      if (sel && sel.value && sel.value !== '__custom__') {
        S.textStyle.fonts[k] = sel.value;
      }
    });

    S.textData.isSaved = true;
    preloadAllSelectedFonts();
    updateTextSummaryUI();
    toggleTextFormSavedState(true);
    syncWdpFramesSilent(true);

    if (el('lpb1EditorStatus')) {
      el('lpb1EditorStatus').innerHTML = "✅ <b>Teks, jenis font WDP, ukuran, warna & posisi tersimpan ke sistem!</b> Silakan klik <b>Publish</b> di kanan atas Elementor.";
    }
  };

  window.lpb1EnableEditTextConfig = function() {
    S.textData.isSaved = false;
    toggleTextFormSavedState(false);
    populateAllFontDropdowns();
  };

  window.lpb1ResetTextConfig = function() {
    S.textData = Object.assign({}, DEFAULT_TEXT, { isSaved: false });
    S.textPositions = getDefaultPositions();
    S.textStyle = JSON.parse(JSON.stringify(DEFAULT_STYLE));
    S.customFontCss = "";
    initTextFormUI();
    redrawAllLayers(false);
    syncWdpFramesSilent(true);
  };

  window.LPB1 = {
    el: el,
    hexToRgba: hexToRgba,
    isImageCanvasClean: isImageCanvasClean,
    normalizeWdpUrl: normalizeWdpUrl,
    findHitTextKey: findHitTextKey,
    getCanvasCoords: getCanvasCoords,
    redrawAllLayers: redrawAllLayers,
    syncWdpFramesSilent: syncWdpFramesSilent,
    updateHeaderBrandText: updateHeaderBrandText,
    updateHideTextButtonUI: updateHideTextButtonUI,
    ensureFontLoadedAndRedraw: ensureFontLoadedAndRedraw,
    preloadAllSelectedFonts: preloadAllSelectedFonts,
    initStage3: function() {
      preloadAllSelectedFonts();
      initTextFormUI();
      setTimeout(populateAllFontDropdowns, 1000);
      setTimeout(preloadAllSelectedFonts, 1600);
    }
  };
})();



// ====== TAHAP 4 (PERBAIKAN): SCRIPT BAGIAN 2 (RENDER FONT WDP & 3D COVERFLOW) ======

(function() {
  const S = window.LPB1_STATE;
  const LPB1 = window.LPB1;
  if (!S || !LPB1) return;
  const el = LPB1.el;

  function updateCutoutChipsUI() {
    const group = el('lpb1CutoutGroup');
    if (!group) return;
    group.querySelectorAll('.lpb1-cutout-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-cut') === S.wdpCutoutMode);
    });
  }

  function checkHasTransparency(img) {
    try {
      const c = document.createElement('canvas');
      c.width = 60;
      c.height = 60;
      const cx = c.getContext('2d');
      cx.drawImage(img, 0, 0, 60, 60);
      const d = cx.getImageData(0, 0, 60, 60).data;
      let transPixels = 0;
      for (let i = 3; i < d.length; i += 4) {
        if (d[i] < 180) transPixels++;
      }
      return transPixels > 40;
    } catch (e) {
      return true;
    }
  }

  function blobToDataUrlImage(blob, onSuccess, onError) {
    const reader = new FileReader();
    reader.onloadend = function() {
      const dataImg = new Image();
      dataImg.onload = function() { onSuccess(dataImg); };
      dataImg.onerror = function() { if (onError) onError(); };
      dataImg.src = reader.result;
    };
    reader.onerror = function() { if (onError) onError(); };
    reader.readAsDataURL(blob);
  }

  function loadWdpImage(rawUrl, callback) {
    const normUrl = LPB1.normalizeWdpUrl(rawUrl);
    if (!normUrl) return;

    if (S.imageCache[normUrl] && S.imageCache[normUrl].complete && S.imageCache[normUrl].naturalWidth > 0) {
      callback(S.imageCache[normUrl]);
      return;
    }

    fetch(normUrl, { credentials: 'same-origin', cache: 'no-cache' })
      .then(res => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.blob();
      })
      .then(blob => {
        if (!blob.type.startsWith('image/')) throw new Error('Not image');
        blobToDataUrlImage(blob, function(cleanImg) {
          S.imageCache[normUrl] = cleanImg;
          callback(cleanImg);
        }, function() {
          loadViaFallback(normUrl, rawUrl, callback);
        });
      })
      .catch(() => {
        loadViaFallback(normUrl, rawUrl, callback);
      });
  }

  function loadViaFallback(normUrl, rawUrl, callback) {
    const corsImg = new Image();
    corsImg.crossOrigin = "anonymous";
    corsImg.onload = function() {
      S.imageCache[normUrl] = corsImg;
      callback(corsImg);
    };
    corsImg.onerror = function() {
      const proxyUrl = 'https://wsrv.nl/?url=' + encodeURIComponent(rawUrl) + '&output=png';
      fetch(proxyUrl).then(r => r.blob()).then(b => {
        blobToDataUrlImage(b, function(pImg) {
          S.imageCache[normUrl] = pImg;
          callback(pImg);
        }, function() {
          const plainImg = new Image();
          plainImg.onload = function() {
            S.imageCache[normUrl] = plainImg;
            callback(plainImg);
          };
          plainImg.src = rawUrl;
        });
      }).catch(() => {
        const plainImg = new Image();
        plainImg.onload = function() {
          S.imageCache[normUrl] = plainImg;
          callback(plainImg);
        };
        plainImg.src = rawUrl;
      });
    };
    const sep = normUrl.includes('?') ? '&' : '?';
    corsImg.src = normUrl + sep + 'lpb_cb=' + Date.now();
  }

  function getAllTemplatesList() {
    const list = [];
    S.wdpFrames.forEach((f, idx) => {
      list.push({
        id: 'wdp_' + idx,
        name: `Bingkai ${idx + 1}`,
        isWdp: true,
        wdpIndex: idx,
        url: LPB1.normalizeWdpUrl(f.url)
      });
    });
    list.push({ id: 'hitam', name: 'Hitam', isWdp: false });
    list.push({ id: 'putih', name: 'Putih', isWdp: false });
    list.push({ id: 'eksklusif', name: 'Bingkai Eksklusif', isWdp: false });
    return list;
  }
  LPB1.getAllTemplatesList = getAllTemplatesList;

  function drawEditorialCouplePortrait(ctx, x, y, w, h, poseVariant) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();

    const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
    bgGrad.addColorStop(0, '#e5d9c5');
    bgGrad.addColorStop(0.55, '#c9b49a');
    bgGrad.addColorStop(1, '#967e67');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(x, y, w, h);

    const cx = x + w / 2;
    const cy = y + h * 0.46;

    const sunGlow = ctx.createRadialGradient(cx, cy - h * 0.08, 10, cx, cy, w * 0.65);
    sunGlow.addColorStop(0, 'rgba(255, 248, 232, 0.75)');
    sunGlow.addColorStop(0.5, 'rgba(255, 238, 205, 0.25)');
    sunGlow.addColorStop(1, 'rgba(255, 238, 205, 0)');
    ctx.fillStyle = sunGlow;
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = 'rgba(255, 250, 240, 0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, y + h * 0.42, w * 0.36, Math.PI, 0, false);
    ctx.lineTo(cx + w * 0.36, y + h);
    ctx.moveTo(cx - w * 0.36, y + h * 0.42);
    ctx.lineTo(cx - w * 0.36, y + h);
    ctx.stroke();

    const scale = Math.min(w / 420, h / 380);
    ctx.translate(cx, y + h * 0.56);
    ctx.scale(scale, scale);

    const shiftX = (poseVariant === 1) ? -6 : (poseVariant === 2 ? 6 : 0);

    ctx.fillStyle = '#362e28';
    ctx.beginPath();
    ctx.arc(-44 + shiftX, -82, 34, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-118 + shiftX, 190);
    ctx.quadraticCurveTo(-112 + shiftX, -28, -44 + shiftX, -38);
    ctx.quadraticCurveTo(22 + shiftX, -28, 28 + shiftX, 190);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#f7f3eb';
    ctx.beginPath();
    ctx.moveTo(-58 + shiftX, -36);
    ctx.lineTo(-30 + shiftX, -36);
    ctx.lineTo(-44 + shiftX, 14);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 250, 244, 0.48)';
    ctx.beginPath();
    ctx.moveTo(46 - shiftX, -102);
    ctx.quadraticCurveTo(118 - shiftX, -40, 128 - shiftX, 190);
    ctx.lineTo(-10 - shiftX, 190);
    ctx.quadraticCurveTo(0 - shiftX, -40, 46 - shiftX, -102);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#473d35';
    ctx.beginPath();
    ctx.arc(44 - shiftX, -66, 31, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(64 - shiftX, -76, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f6e6c2';
    ctx.beginPath();
    ctx.arc(52 - shiftX, -94, 4, 0, Math.PI * 2);
    ctx.fill();

    const dressGrad = ctx.createLinearGradient(0, -25, 0, 190);
    dressGrad.addColorStop(0, '#fbf8f3');
    dressGrad.addColorStop(1, '#dfd5c5');
    ctx.fillStyle = dressGrad;
    ctx.beginPath();
    ctx.moveTo(-18 - shiftX, 190);
    ctx.quadraticCurveTo(-4 - shiftX, -16, 44 - shiftX, -24);
    ctx.quadraticCurveTo(96 - shiftX, -16, 112 - shiftX, 190);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#556b57';
    ctx.beginPath();
    ctx.arc(14, 48, 26, 0, Math.PI * 2);
    ctx.fill();
    const flowers = [
      { fx: 6, fy: 42, r: 9, c: '#fff8ee' },
      { fx: 22, fy: 44, r: 8, c: '#f3d6ce' },
      { fx: 14, fy: 56, r: 8.5, c: '#ebd5b3' },
      { fx: 0, fy: 54, r: 7, c: '#f3d6ce' }
    ];
    flowers.forEach(fl => {
      ctx.fillStyle = fl.c;
      ctx.beginPath();
      ctx.arc(fl.fx, fl.fy, fl.r, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  function drawCornerAccents(ctx, x, y, w, h, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    const len = 22;
    const corners = [
      { cx: x, cy: y, dx: 1, dy: 1 },
      { cx: x + w, cy: y, dx: -1, dy: 1 },
      { cx: x, cy: y + h, dx: 1, dy: -1 },
      { cx: x + w, cy: y + h, dx: -1, dy: -1 }
    ];
    corners.forEach(c => {
      ctx.beginPath();
      ctx.moveTo(c.cx + c.dx * len, c.cy);
      ctx.lineTo(c.cx, c.cy);
      ctx.lineTo(c.cx, c.cy + c.dy * len);
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(c.cx + c.dx * 6, c.cy + c.dy * 6, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  function drawEditorialDivider(ctx, yPos, lineColor) {
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.fillStyle = lineColor;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(255, yPos); ctx.lineTo(346, yPos);
    ctx.moveTo(374, yPos); ctx.lineTo(465, yPos);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(360, yPos - 5);
    ctx.lineTo(365, yPos);
    ctx.lineTo(360, yPos + 5);
    ctx.lineTo(355, yPos);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawBotanicalSprig(ctx, x, y, scale) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    ctx.strokeStyle = '#d8c398';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-55, 10);
    ctx.quadraticCurveTo(0, -12, 55, 10);
    ctx.stroke();

    const leaves = [
      { x: -38, y: 4, a: -0.55 }, { x: 38, y: 4, a: 0.55 },
      { x: -22, y: 0, a: -0.4 },  { x: 22, y: 0, a: 0.4 },
      { x: -9, y: -4, a: -0.25 }, { x: 9, y: -4, a: 0.25 }
    ];
    leaves.forEach(lf => {
      ctx.save();
      ctx.translate(lf.x, lf.y);
      ctx.rotate(lf.a);
      ctx.fillStyle = '#75917a';
      ctx.beginPath();
      ctx.moveTo(0, -13);
      ctx.quadraticCurveTo(9, 0, 0, 13);
      ctx.quadraticCurveTo(-9, 0, 0, -13);
      ctx.fill();
      ctx.restore();
    });

    ctx.fillStyle = '#fffaf0';
    ctx.beginPath();
    ctx.arc(0, 0, 8.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#dec07c';
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawPin3D(ctx, yPos, isDarkTheme) {
    ctx.save();
    ctx.translate(360, yPos);
    ctx.fillStyle = isDarkTheme ? 'rgba(0, 0, 0, 0.55)' : 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(2, 3, 10, 0, Math.PI * 2);
    ctx.fill();

    const rimGrad = ctx.createLinearGradient(-10, -10, 10, 10);
    rimGrad.addColorStop(0, '#f3e3be');
    rimGrad.addColorStop(0.5, '#c5a363');
    rimGrad.addColorStop(1, '#8c6d32');
    ctx.fillStyle = rimGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();

    const domeGrad = ctx.createRadialGradient(-3, -3, 1, 0, 0, 8);
    domeGrad.addColorStop(0, '#ff6b6b');
    domeGrad.addColorStop(0.5, '#c91e25');
    domeGrad.addColorStop(1, '#780b10');
    ctx.fillStyle = domeGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.beginPath();
    ctx.ellipse(-2.5, -3, 2.5, 1.5, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawPolaroidFrameByMode(ctx, isDarkTheme, mode) {
    const bgGrad = ctx.createLinearGradient(0, 0, 720, 1280);
    if (isDarkTheme) {
      bgGrad.addColorStop(0, '#1e211f');
      bgGrad.addColorStop(0.5, '#151716');
      bgGrad.addColorStop(1, '#0e100f');
    } else {
      bgGrad.addColorStop(0, '#fbfaf6');
      bgGrad.addColorStop(0.5, '#f6f4ec');
      bgGrad.addColorStop(1, '#efece1');
    }

    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.rect(0, 0, 720, 1280);
    if (mode === 'landscape') {
      S.grid3Slots.forEach(s => ctx.rect(s.x, s.y, s.w, s.h));
    } else {
      ctx.rect(50, 80, 620, 922);
    }
    ctx.fill('evenodd');

    ctx.strokeStyle = isDarkTheme ? 'rgba(216, 197, 158, 0.45)' : '#d5cfc0';
    ctx.lineWidth = 1.6;
    ctx.strokeRect(20, 20, 680, 1240);
    drawCornerAccents(ctx, 20, 20, 680, 1240, isDarkTheme ? '#d8c59e' : '#b5a88f');

    if (mode === 'landscape') {
      S.grid3Slots.forEach(s => {
        ctx.strokeStyle = isDarkTheme ? 'rgba(201, 179, 134, 0.65)' : '#c8beab';
        ctx.lineWidth = 1.4;
        ctx.strokeRect(s.x, s.y, s.w, s.h);
      });
      drawPin3D(ctx, 27, isDarkTheme);
    } else {
      ctx.strokeStyle = isDarkTheme ? '#c9b386' : '#c8beab';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(44, 74, 632, 934);
      drawPin3D(ctx, 47, isDarkTheme);
    }

    if (!S.textStyle.hideAllText) {
      drawEditorialDivider(ctx, 1026, isDarkTheme ? 'rgba(216, 197, 158, 0.55)' : '#b8ab93');
    }
  }

  function drawEksklusifFrameByMode(ctx, mode) {
    const exGrad = ctx.createLinearGradient(0, 0, 720, 1280);
    exGrad.addColorStop(0, '#4f6353');
    exGrad.addColorStop(0.5, '#3e5041');
    exGrad.addColorStop(1, '#2c3a2e');

    ctx.fillStyle = exGrad;
    if (mode === 'landscape') {
      ctx.fillRect(0, 0, 720, 1280);
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      S.grid3Slots.forEach(s => {
        ctx.beginPath();
        ctx.roundRect(s.x, s.y, s.w, s.h, 8);
        ctx.fill();
      });
      ctx.restore();

      S.grid3Slots.forEach(s => {
        ctx.strokeStyle = '#dec89a';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.roundRect(s.x, s.y, s.w, s.h, 8);
        ctx.stroke();
      });
      drawBotanicalSprig(ctx, 360, 26, 0.9);
    } else {
      ctx.beginPath();
      ctx.rect(0, 0, 720, 1280);
      ctx.moveTo(54, 360);
      ctx.arc(360, 360, 306, Math.PI, 0, false);
      ctx.lineTo(666, 985);
      ctx.quadraticCurveTo(666, 1005, 646, 1005);
      ctx.lineTo(74, 1005);
      ctx.quadraticCurveTo(54, 1005, 54, 985);
      ctx.closePath();
      ctx.fill('evenodd');

      ctx.strokeStyle = '#dec89a';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.arc(360, 360, 298, Math.PI, 0, false);
      ctx.lineTo(658, 996);
      ctx.lineTo(62, 996);
      ctx.closePath();
      ctx.stroke();
      drawBotanicalSprig(ctx, 360, 52, 1.25);
    }

    ctx.strokeStyle = 'rgba(222, 200, 154, 0.45)';
    ctx.lineWidth = 1.6;
    ctx.strokeRect(20, 20, 680, 1240);
    drawCornerAccents(ctx, 20, 20, 680, 1240, '#dec89a');

    if (!S.textStyle.hideAllText) {
      drawEditorialDivider(ctx, 1026, 'rgba(222, 200, 154, 0.65)');
    }
  }

  function drawDraggableTypography(ctx, themeQuoteCol, themeNameCol, themeDateCol, showDragGuides, recordBounds) {
    if (recordBounds) S.textBounds = {};
    const st = S.textStyle;
    if (st && st.hideAllText) return;

    const t = S.textData;
    const pos = S.textPositions;
    const useCustom = Boolean(st.useCustomColors);
    const cols = st.colors;
    const sz = st.sizes;
    const fn = st.fonts || {};
    const it = st.italics || {};
    const sh = st.shadow;

    const sTitle = Number(sz.title) || 15;
    const sExtra2 = Number(sz.extra2) || 22;
    const sName = Number(sz.name) || 54;
    const sDate = Number(sz.date) || 17;
    const sExtra1 = Number(sz.extra1) || 16;

    const fTitle = fn.title || "Plus Jakarta Sans";
    const fExtra2 = fn.extra2 || "Cormorant Garamond";
    const fName = fn.name || "Cormorant Garamond";
    const fDate = fn.date || "Plus Jakarta Sans";
    const fExtra1 = fn.extra1 || "Plus Jakarta Sans";

    const iTitle = it.title ? "italic " : "";
    const iExtra2 = (it.extra2 !== false) ? "italic " : "";
    const iName = (it.name !== false) ? "italic " : "";
    const iDate = it.date ? "italic " : "";
    const iExtra1 = it.extra1 ? "italic " : "";

    const items = [
      { key: 'title',  text: (t.title || "").trim().toUpperCase(), font: `${iTitle}700 ${sTitle}px "${fTitle}", sans-serif`, color: useCustom ? cols.title : themeDateCol, height: Math.round(sTitle * 1.35) },
      { key: 'extra2', text: (t.extra2 || "").trim() ? `"${(t.extra2 || "").trim()}"` : "", font: `${iExtra2}600 ${sExtra2}px "${fExtra2}", serif`, color: useCustom ? cols.extra2 : themeQuoteCol, height: Math.round(sExtra2 * 1.3) },
      { key: 'name',   text: (t.name || "").trim(), font: `${iName}700 ${sName}px "${fName}", serif`, color: useCustom ? cols.name : themeNameCol, height: Math.round(sName * 1.15) },
      { key: 'date',   text: (t.date || "").trim(), font: `${iDate}600 ${sDate}px "${fDate}", sans-serif`, color: useCustom ? cols.date : themeDateCol, height: Math.round(sDate * 1.35) },
      { key: 'extra1', text: (t.extra1 || "").trim(), font: `${iExtra1}600 ${sExtra1}px "${fExtra1}", sans-serif`, color: useCustom ? cols.extra1 : themeDateCol, height: Math.round(sExtra1 * 1.35) }
    ];

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    items.forEach(item => {
      if (!item.text) return;
      const p = pos[item.key] || { x: 360, y: 1100 };

      ctx.save();
      ctx.font = item.font;

      if (sh && sh.enabled) {
        ctx.shadowColor = LPB1.hexToRgba(sh.color, sh.opacity);
        ctx.shadowBlur = Number(sh.blur) || 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
      }

      ctx.fillStyle = item.color;
      ctx.fillText(item.text, p.x, p.y);

      if (recordBounds) {
        const metrics = ctx.measureText(item.text);
        const w = Math.max(metrics.width, 80);
        const h = item.height;
        S.textBounds[item.key] = {
          left: p.x - w / 2 - 20,
          right: p.x + w / 2 + 20,
          top: p.y - h / 2 - 12,
          bottom: p.y + h / 2 + 12
        };

        if (showDragGuides && S.draggingKey === item.key) {
          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = '#d8c59e';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.14)';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.roundRect(p.x - w / 2 - 12, p.y - h / 2 - 8, w + 24, h + 16, 8);
          ctx.fill();
          ctx.stroke();
        }
      }
      ctx.restore();
    });

    ctx.restore();
  }

  function renderSpecificFrameToContext(ctx, frameId, mode, showDragGuides, requireCleanForExport, recordBounds) {
    ctx.clearRect(0, 0, 720, 1280);
    ctx.save();

    if (frameId.startsWith('wdp_')) {
      const idx = Number(frameId.replace('wdp_', ''));
      const item = S.wdpFrames[idx];
      const normUrl = item ? LPB1.normalizeWdpUrl(item.url) : '';
      const img = (frameId === S.currentFrame && S.activeWdpImg) ? S.activeWdpImg : S.imageCache[normUrl];

      if (img && (!requireCleanForExport || LPB1.isImageCanvasClean(img))) {
        const cutMode = S.wdpCutoutMode || 'raw';
        const hasHole = checkHasTransparency(img);
        const useRaw = (cutMode === 'raw') || (cutMode === 'auto' && hasHole);

        ctx.drawImage(img, 0, 0, 720, 1280);

        if (!useRaw) {
          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          if (mode === 'landscape') {
            S.grid3Slots.forEach(s => {
              ctx.beginPath();
              ctx.roundRect(s.x, s.y, s.w, s.h, 8);
              ctx.fill();
            });
          } else {
            ctx.beginPath();
            ctx.roundRect(50, 80, 620, 922, 16);
            ctx.fill();
          }
          ctx.restore();
        }

        drawDraggableTypography(ctx, '#e3ebe4', '#ffffff', '#d8c59e', showDragGuides, recordBounds);
        ctx.restore();
        return;
      }
    }

    if (frameId === 'hitam') {
      drawPolaroidFrameByMode(ctx, true, mode);
      drawDraggableTypography(ctx, '#d6d2c9', '#f7ebd2', '#c9b386', showDragGuides, recordBounds);
    } else if (frameId === 'putih') {
      drawPolaroidFrameByMode(ctx, false, mode);
      drawDraggableTypography(ctx, '#667067', '#354537', '#827055', showDragGuides, recordBounds);
    } else {
      drawEksklusifFrameByMode(ctx, mode);
      drawDraggableTypography(ctx, '#e3ebe4', '#ffffff', '#dec89a', showDragGuides, recordBounds);
    }

    ctx.restore();
  }

  function drawStaticFrameOverlay(showDragGuides) {
    const fCanvas = el('lpb1FrameOverlay');
    if (fCanvas) {
      renderSpecificFrameToContext(fCanvas.getContext('2d'), S.currentFrame, S.layoutMode, showDragGuides, false, true);
    }
    const liveF = el('lpb1LiveFrameCanvas');
    if (liveF) {
      renderSpecificFrameToContext(liveF.getContext('2d'), S.currentFrame, S.layoutMode, false, false, false);
    }
  }

  function drawSamplePreviewCard(canvasEl, tpl) {
    const ctx = canvasEl.getContext('2d');
    ctx.clearRect(0, 0, 360, 640);
    ctx.save();
    ctx.scale(0.5, 0.5);

    if (S.hasCapturedAll && window.LPB1 && window.LPB1.drawPhotosIntoContext) {
      window.LPB1.drawPhotosIntoContext(ctx, S.layoutMode);
    } else {
      if (S.layoutMode === 'landscape') {
        S.grid3Slots.forEach((s, idx) => {
          drawEditorialCouplePortrait(ctx, s.x, s.y, s.w, s.h, idx);
        });
      } else {
        drawEditorialCouplePortrait(ctx, 0, 0, 720, 1280, 0);
      }
    }

    const tempF = document.createElement('canvas');
    tempF.width = 720;
    tempF.height = 1280;
    renderSpecificFrameToContext(tempF.getContext('2d'), tpl.id, S.layoutMode, false, false, false);
    ctx.drawImage(tempF, 0, 0);
    ctx.restore();
  }

  function renderTemplateCarousel() {
    const track = el('lpb1CarouselTrack');
    const counter = el('lpb1TplCounter');
    const dotsRow = el('lpb1DotsRow');
    if (!track) return;

    const list = getAllTemplatesList();
    track.innerHTML = '';
    if (dotsRow) dotsRow.innerHTML = '';

    let activeIdx = list.findIndex(t => t.id === S.currentFrame);
    if (activeIdx === -1) {
      activeIdx = 0;
      S.currentFrame = list[0].id;
    }

    const activeTpl = list[activeIdx];
    if (counter && activeTpl) {
      counter.textContent = `${activeIdx + 1} / ${list.length} • ${activeTpl.name}`;
    }

    const total = list.length;
    const prevIdx = (activeIdx - 1 + total) % total;
    const nextIdx = (activeIdx + 1) % total;

    list.forEach((tpl, idx) => {
      let posClass = 'pos-hidden';
      if (idx === activeIdx) posClass = 'pos-center';
      else if (idx === prevIdx && total > 1) posClass = 'pos-left';
      else if (idx === nextIdx && total > 2) posClass = 'pos-right';
      else if (idx === nextIdx && total === 2) posClass = 'pos-right';

      const card = document.createElement('div');
      card.className = `lpb1-tpl-card ${posClass}`;

      const c = document.createElement('canvas');
      c.width = 360;
      c.height = 640;
      card.appendChild(c);

      const chk = document.createElement('div');
      chk.className = 'lpb1-tpl-check';
      chk.innerHTML = '<span class="lnr lnr-checkmark-circle"></span>';
      card.appendChild(chk);

      if (tpl.isWdp) {
        const del = document.createElement('div');
        del.className = 'lpb1-tpl-del';
        del.title = `Hapus ${tpl.name}`;
        del.innerHTML = '<span class="lnr lnr-cross"></span>';
        del.onclick = function(ev) {
          ev.stopPropagation();
          S.wdpFrames.splice(tpl.wdpIndex, 1);
          LPB1.syncWdpFramesSilent(true);
          const updated = getAllTemplatesList();
          S.currentFrame = updated[0].id;
          renderTemplateCarousel();
          LPB1.redrawAllLayers(false);
        };
        card.appendChild(del);

        loadWdpImage(tpl.url, function(loadedImg) {
          if (S.currentFrame === tpl.id) {
            S.activeWdpImg = loadedImg;
            S.activeWdpHasAlphaHole = checkHasTransparency(loadedImg);
          }
          drawSamplePreviewCard(c, tpl);
        });
      } else {
        drawSamplePreviewCard(c, tpl);
      }

      card.onclick = function() {
        if (idx !== activeIdx) {
          selectTemplateById(tpl.id);
        }
      };

      track.appendChild(card);

      if (dotsRow) {
        const dot = document.createElement('span');
        dot.className = 'lpb1-dot' + (idx === activeIdx ? ' active' : '');
        dot.onclick = function() { selectTemplateById(tpl.id); };
        dotsRow.appendChild(dot);
      }
    });
  }

  function initCoverflowSwipeGesture() {
    const stage = el('lpb1CoverflowStage');
    if (!stage || stage.getAttribute('data-swipe-bound') === '1') return;
    stage.setAttribute('data-swipe-bound', '1');

    let startX = 0;
    let startY = 0;

    stage.addEventListener('touchstart', function(e) {
      if (!e.touches || !e.touches.length) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    stage.addEventListener('touchend', function(e) {
      if (!e.changedTouches || !e.changedTouches.length) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) window.lpb1StepTemplate(1);
        else window.lpb1StepTemplate(-1);
      }
    }, { passive: true });
  }
  initCoverflowSwipeGesture();

  function selectTemplateById(tplId) {
    S.currentFrame = tplId;
    if (tplId.startsWith('wdp_')) {
      const idx = Number(tplId.replace('wdp_', ''));
      const item = S.wdpFrames[idx];
      if (item && item.url) {
        loadWdpImage(item.url, function(loadedImg) {
          S.activeWdpImg = loadedImg;
          S.activeWdpHasAlphaHole = checkHasTransparency(loadedImg);
          renderTemplateCarousel();
          LPB1.redrawAllLayers(false);
        });
        return;
      }
    }
    renderTemplateCarousel();
    LPB1.redrawAllLayers(false);
  }

  window.lpb1StepTemplate = function(dir) {
    const list = getAllTemplatesList();
    if (!list.length) return;
    let idx = list.findIndex(t => t.id === S.currentFrame);
    if (idx === -1) idx = 0;
    let nextIdx = (idx + dir + list.length) % list.length;
    selectTemplateById(list[nextIdx].id);
  };

  window.lpb1SwitchLayoutMode = function(mode) {
    S.layoutMode = (mode === 'landscape') ? 'landscape' : 'selfie';
    const tabS = el('lpb1TabSelfie');
    const tabL = el('lpb1TabLandscape');
    if (tabS) tabS.classList.toggle('active', S.layoutMode === 'selfie');
    if (tabL) tabL.classList.toggle('active', S.layoutMode === 'landscape');
    renderTemplateCarousel();
    LPB1.redrawAllLayers(false);
  };

  window.lpb1SetWdpCutoutMode = function(cutMode) {
    S.wdpCutoutMode = cutMode;
    updateCutoutChipsUI();
    LPB1.syncWdpFramesSilent(false);
    LPB1.redrawAllLayers(false);
  };

  window.lpb1OpenWPMediaGallery = function() {
    try {
      const wpObj = (window.parent && window.parent.wp && window.parent.wp.media)
        ? window.parent.wp
        : (window.wp && window.wp.media ? window.wp : null);

      if (wpObj && wpObj.media) {
        const mediaFrame = wpObj.media({
          title: 'Pilih Gambar Bingkai dari Galeri WDP',
          button: { text: 'Gunakan Bingkai Ini' },
          multiple: true,
          library: { type: 'image' }
        });

        mediaFrame.on('select', function() {
          const selection = mediaFrame.state().get('selection');
          selection.each(function(attachment) {
            const att = attachment.toJSON();
            if (att.url) {
              const nextNum = S.wdpFrames.length + 1;
              S.wdpFrames.push({ name: `Bingkai ${nextNum}`, url: LPB1.normalizeWdpUrl(att.url) });
            }
          });

          LPB1.syncWdpFramesSilent(true);
          const newestIdx = S.wdpFrames.length - 1;
          if (newestIdx >= 0) {
            selectTemplateById('wdp_' + newestIdx);
          }
        });

        mediaFrame.open();
        return;
      }
    } catch (e) {}
    alert("Pop-up Galeri WDP hanya bisa dibuka saat Anda berada di halaman Editor Elementor.");
  };

  LPB1.renderSpecificFrameToContext = renderSpecificFrameToContext;
  LPB1.drawStaticFrameOverlay = drawStaticFrameOverlay;
  LPB1.renderTemplateCarousel = renderTemplateCarousel;
  LPB1.selectTemplateById = selectTemplateById;
  LPB1.initStage4 = function() {
    updateCutoutChipsUI();
    initCoverflowSwipeGesture();
    if (LPB1.preloadAllSelectedFonts) {
      LPB1.preloadAllSelectedFonts();
    }
    const list = getAllTemplatesList();
    if (list.length > 0) {
      selectTemplateById(list[0].id);
    }
  };
})();




// ====== TAHAP 5 (PERBAIKAN): SCRIPT BAGIAN 3 (PEMBUKA PHOTOBOOTH, KAMERA 3 FOTO, GALERI & HASIL) ======

(function() {
  const S = window.LPB1_STATE;
  const LPB1 = window.LPB1;
  if (!S || !LPB1) return;
  const el = LPB1.el;

  const CANVAS_W = 720;
  const CANVAS_H = 1280;

  function isMobileOrTabletDevice() {
    const ua = navigator.userAgent || "";
    const isMobileUA = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(ua);
    const isIPadOS = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                     (/Macintosh/i.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1);
    return Boolean(isMobileUA || isIPadOS);
  }

  let isCanvasFilterSupported = null;
  function checkCanvasFilterSupport() {
    if (isCanvasFilterSupported !== null) return isCanvasFilterSupported;
    try {
      const c = document.createElement('canvas');
      c.width = 1;
      c.height = 1;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#ff0000';
      ctx.filter = 'grayscale(100%)';
      ctx.fillRect(0, 0, 1, 1);
      const px = ctx.getImageData(0, 0, 1, 1).data;
      isCanvasFilterSupported = (px[0] !== 255 || px[1] > 0);
    } catch (e) {
      isCanvasFilterSupported = false;
    }
    return isCanvasFilterSupported;
  }

  function getCanvasFilterString() {
    if (S.currentTone === 'soft') return 'brightness(106%) contrast(102%) saturate(108%)';
    if (S.currentTone === 'warm') return 'sepia(18%) brightness(105%) contrast(104%) saturate(115%)';
    if (S.currentTone === 'peach') return 'brightness(108%) contrast(98%) saturate(118%) hue-rotate(-6deg)';
    if (S.currentTone === 'bw') return 'grayscale(100%) contrast(112%) brightness(103%)';
    return 'none';
  }

  function applySafariManualToneFallback(ctx, x, y, w, h) {
    if (S.currentTone === 'normal') return;
    if (S.currentTone === 'bw') {
      try {
        const imgData = ctx.getImageData(x, y, w, h);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
          const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
          const c = Math.max(0, Math.min(255, (gray - 128) * 1.12 + 128 + 5));
          d[i] = d[i + 1] = d[i + 2] = c;
        }
        ctx.putImageData(imgData, x, y);
      } catch (e) {}
      return;
    }
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    if (S.currentTone === 'soft') {
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = 'rgba(255, 250, 245, 0.07)';
      ctx.fillRect(x, y, w, h);
    } else if (S.currentTone === 'warm') {
      ctx.globalCompositeOperation = 'soft-light';
      ctx.fillStyle = 'rgba(225, 175, 110, 0.28)';
      ctx.fillRect(x, y, w, h);
    } else if (S.currentTone === 'peach') {
      ctx.globalCompositeOperation = 'soft-light';
      ctx.fillStyle = 'rgba(255, 165, 155, 0.26)';
      ctx.fillRect(x, y, w, h);
    }
    ctx.restore();
  }

  // ====== 1. PEMBUKA MODAL PHOTOBOOTH & NAVIGASI 4 LAYAR ======
  window.lpb1OpenApp = function(initialMode) {
    const root = el('lpb1RootCard');
    document.querySelectorAll('#lpb1FullScreenModal, .lpb1-fullscreen-modal').forEach((m, idx) => {
      if (idx > 0 && (!root || !root.contains(m))) m.remove();
    });

    const modal = el('lpb1FullScreenModal');
    if (!modal) return;
    if (modal.parentNode !== document.body) {
      document.body.appendChild(modal);
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (LPB1.preloadAllSelectedFonts) {
      LPB1.preloadAllSelectedFonts();
    }
    initResultStageGestures();
    LPB1.updateHeaderBrandText();
    LPB1.updateHideTextButtonUI();

    if (initialMode === 'result_editor') {
      window.lpb1SwitchScreen('result');
    } else {
      S.isChangingTemplateFromResult = false;
      window.lpb1SwitchScreen('templates');
    }
  };

  // Alias cadangan jika tombol memanggil lpb1OpenFullScreen
  window.lpb1OpenFullScreen = function(autoCam) {
    window.lpb1OpenApp(autoCam === false ? 'result_editor' : 'templates');
  };

  window.lpb1CloseFullScreen = function() {
    clearActiveCountdown();
    stopMediaTracks();
    S.isCountingDown = false;

    const root = el('lpb1RootCard');
    document.querySelectorAll('#lpb1FullScreenModal, .lpb1-fullscreen-modal').forEach((m, idx) => {
      m.style.display = 'none';
      if (idx === 0 && root && m.parentNode !== root) {
        root.appendChild(m);
      } else if (idx > 0) {
        m.remove();
      }
    });
    document.body.style.overflow = '';
  };

  if (!window.LPB1_ESC_V11_BOUND) {
    window.LPB1_ESC_V11_BOUND = true;
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && window.lpb1CloseFullScreen) {
        window.lpb1CloseFullScreen();
      }
    });
  }

  window.lpb1SwitchScreen = function(screenName) {
    S.activeScreen = screenName;
    const modal = el('lpb1FullScreenModal');
    const globalClose = el('lpb1GlobalCloseBtn');

    ['lpb1ScreenTemplates', 'lpb1ScreenCamera', 'lpb1ScreenGallery', 'lpb1ScreenResult'].forEach(id => {
      const node = el(id);
      if (node) node.classList.remove('active');
    });

    if (screenName === 'templates') {
      stopMediaTracks();
      if (modal) modal.classList.remove('dark-bg');
      if (globalClose) globalClose.style.display = 'flex';
      if (el('lpb1ScreenTemplates')) el('lpb1ScreenTemplates').classList.add('active');

      const useTxt = el('lpb1UseTemplateText');
      if (useTxt) {
        useTxt.textContent = S.isChangingTemplateFromResult ? 'Terapkan template' : 'Pakai template ini';
      }
      const quickResBtn = el('lpb1QuickResultBtn');
      if (quickResBtn) {
        quickResBtn.style.display = S.hasCapturedAll ? 'inline-flex' : 'none';
      }
      LPB1.renderTemplateCarousel();
    }
    else if (screenName === 'camera') {
      if (modal) modal.classList.add('dark-bg');
      if (globalClose) globalClose.style.display = 'none';
      if (el('lpb1ScreenCamera')) el('lpb1ScreenCamera').classList.add('active');
      if (el('lpb1DoneOverlay')) el('lpb1DoneOverlay').style.display = 'none';
      window.lpb1StartCamera();
    }
    else if (screenName === 'gallery') {
      stopMediaTracks();
      if (modal) modal.classList.add('dark-bg');
      if (globalClose) globalClose.style.display = 'flex';
      if (el('lpb1ScreenGallery')) el('lpb1ScreenGallery').classList.add('active');
      renderGallery3Cards();
    }
    else if (screenName === 'result') {
      stopMediaTracks();
      if (modal) modal.classList.remove('dark-bg');
      if (globalClose) globalClose.style.display = 'flex';
      if (el('lpb1ScreenResult')) el('lpb1ScreenResult').classList.add('active');
      if (LPB1.preloadAllSelectedFonts) {
        LPB1.preloadAllSelectedFonts();
      }
      renderSelfiePickerOnResult();
      LPB1.redrawAllLayers(false);
    }
  };

  window.lpb1ConfirmTemplateSelection = function() {
    if (S.isChangingTemplateFromResult && S.hasCapturedAll) {
      S.isChangingTemplateFromResult = false;
      window.lpb1SwitchScreen('result');
    } else {
      S.retakeSingleIndex = null;
      window.lpb1SwitchScreen('camera');
    }
  };

  window.lpb1OpenChangeTemplate = function() {
    S.isChangingTemplateFromResult = true;
    const sub = el('lpb1TplSubtitle');
    if (sub) sub.textContent = 'Usap ke kiri atau kanan untuk melihat fotomu dengan bingkai lain.';
    window.lpb1SwitchScreen('templates');
  };

  // ====== 2. KONTROL KAMERA & 3X JEPRET OTOMATIS ======
  function clearActiveCountdown() {
    if (S.countdownTimer) {
      clearInterval(S.countdownTimer);
      S.countdownTimer = null;
    }
    const cd = el('lpb1Countdown');
    if (cd) cd.style.display = 'none';
  }

  function stopMediaTracks() {
    if (S.stream) {
      S.stream.getTracks().forEach(t => t.stop());
      S.stream = null;
    }
    const v = el('lpb1Video');
    if (v) v.srcObject = null;
  }

  function updateCameraProgressUI(currentStepIdx) {
    for (let i = 0; i < 3; i++) {
      const seg = el('lpb1Seg' + i);
      if (seg) {
        seg.classList.toggle('done', S.photoTaken[i] || i <= currentStepIdx);
      }
    }
    const pill = el('lpb1CamStepPill');
    if (pill) pill.textContent = `Foto ${currentStepIdx + 1}/3`;

    const takenCount = S.photoTaken.filter(Boolean).length;
    const badge = el('lpb1TakenCountBadge');
    if (badge) {
      badge.style.display = takenCount > 0 ? 'flex' : 'none';
      badge.textContent = String(takenCount);
    }
  }

  window.lpb1StartCamera = async function() {
    try {
      clearActiveCountdown();
      stopMediaTracks();

      const prep = el('lpb1PrepPill');
      if (prep) prep.style.display = 'block';

      const stepToShow = (S.retakeSingleIndex !== null) ? S.retakeSingleIndex : 0;
      updateCameraProgressUI(stepToShow);

      S.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: S.facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });

      const v = el('lpb1Video');
      if (v) {
        v.setAttribute('playsinline', '');
        v.setAttribute('webkit-playsinline', '');
        v.muted = true;
        v.srcObject = S.stream;
        await v.play();
        v.className = (S.isMirrored ? 'mirror ' : '') + 'tone-' + S.currentTone;
      }

      if (prep) prep.style.display = 'none';
      S.isCountingDown = false;
      const shBtn = el('lpb1ShutterBtn');
      if (shBtn) shBtn.style.pointerEvents = 'auto';

      LPB1.drawStaticFrameOverlay(false);
    } catch (e) {
      const prep = el('lpb1PrepPill');
      if (prep) prep.style.display = 'none';
      alert("Akses kamera tidak diizinkan oleh browser. Silakan unggah foto dari tombol Galeri di kanan bawah.");
    }
  };

  window.lpb1FlipCamera = async function() {
    if (S.isCountingDown || S.isSwitchingCam) return;
    if (!isMobileOrTabletDevice()) return;

    S.isSwitchingCam = true;
    try {
      const targetFacing = (S.facingMode === "user") ? "environment" : "user";
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: targetFacing }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      stopMediaTracks();
      S.facingMode = targetFacing;
      S.isMirrored = (targetFacing === "user");
      const mirrorBtn = el('lpb1MirrorSideBtn');
      if (mirrorBtn) mirrorBtn.classList.toggle('active', S.isMirrored);

      S.stream = newStream;
      const v = el('lpb1Video');
      v.srcObject = S.stream;
      await v.play();
      v.className = (S.isMirrored ? 'mirror ' : '') + 'tone-' + S.currentTone;
    } catch (e) {}
    S.isSwitchingCam = false;
  };

  window.lpb1ToggleTimer = function() {
    S.timerSeconds = (S.timerSeconds === 3) ? 0 : 3;
    const btn = el('lpb1TimerSideBtn');
    const lbl = el('lpb1TimerSideLabel');
    if (btn) btn.classList.toggle('active', S.timerSeconds > 0);
    if (lbl) lbl.textContent = S.timerSeconds > 0 ? '3s' : 'Off';
  };

  window.lpb1ToggleMirror = function() {
    S.isMirrored = !S.isMirrored;
    const btn = el('lpb1MirrorSideBtn');
    if (btn) btn.classList.toggle('active', S.isMirrored);
    const v = el('lpb1Video');
    if (v) v.className = (S.isMirrored ? 'mirror ' : '') + 'tone-' + S.currentTone;
  };

  window.lpb1ToggleFlash = function() {
    S.flashEnabled = !S.flashEnabled;
    const btn = el('lpb1FlashSideBtn');
    if (btn) btn.classList.toggle('active', S.flashEnabled);
  };

  window.lpb1ToggleLiveFrameGuide = function() {
    S.showFrameInLive = !S.showFrameInLive;
    const liveF = el('lpb1LiveFrameCanvas');
    const btn = el('lpb1FrameGuideSideBtn');
    if (liveF) liveF.style.opacity = S.showFrameInLive ? '0.85' : '0';
    if (btn) btn.classList.toggle('active', S.showFrameInLive);
  };

  window.lpb1ToggleTonePopup = function() {
    const pop = el('lpb1TonePopup');
    const btn = el('lpb1MagicFilterBtn');
    if (!pop) return;
    const isShown = pop.classList.toggle('show');
    if (btn) btn.classList.toggle('active', isShown);
  };

  window.lpb1SelectTone = function(tone, btnEl) {
    S.currentTone = tone;
    const pop = el('lpb1TonePopup');
    if (pop) pop.querySelectorAll('.lpb1-tone-chip').forEach(c => c.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    const v = el('lpb1Video');
    if (v) v.className = (S.isMirrored ? 'mirror ' : '') + 'tone-' + tone;
    LPB1.redrawAllLayers(false);
  };

  function runCountdownPromise(seconds) {
    return new Promise((resolve) => {
      if (!seconds || seconds <= 0) {
        setTimeout(() => resolve(true), 250);
        return;
      }
      const cd = el('lpb1Countdown');
      if (cd) {
        cd.style.display = 'flex';
        cd.textContent = seconds;
      }
      let count = seconds;
      S.countdownTimer = setInterval(() => {
        if (!S.isCountingDown || S.activeScreen !== 'camera') {
          clearActiveCountdown();
          resolve(false);
          return;
        }
        count--;
        if (count > 0) {
          if (cd) cd.textContent = count;
        } else {
          clearActiveCountdown();
          resolve(true);
        }
      }, 850);
    });
  }

  function captureSingleVideoToSlot(slotIdx) {
    if (S.flashEnabled && el('lpb1Flash')) {
      const fl = el('lpb1Flash');
      fl.style.opacity = '1';
      setTimeout(() => { fl.style.opacity = '0'; }, 160);
    }

    const v = el('lpb1Video');
    const vw = (v && v.videoWidth) ? v.videoWidth : 720;
    const vh = (v && v.videoHeight) ? v.videoHeight : 960;

    const targetC = S.photoCanvases[slotIdx];
    targetC.width = vw;
    targetC.height = vh;
    const ctx = targetC.getContext('2d');
    ctx.clearRect(0, 0, vw, vh);

    ctx.save();
    if (S.isMirrored) {
      ctx.translate(vw, 0);
      ctx.scale(-1, 1);
    }
    if (v) ctx.drawImage(v, 0, 0, vw, vh);
    ctx.restore();

    S.photoTaken[slotIdx] = true;

    const th = document.createElement('canvas');
    th.width = 240;
    th.height = 320;
    const tCtx = th.getContext('2d');
    const srcRatio = vw / vh;
    const dstRatio = 240 / 320;
    let sx = 0, sy = 0, sw = vw, sh = vh;
    if (srcRatio > dstRatio) {
      sw = vh * dstRatio;
      sx = (vw - sw) / 2;
    } else {
      sh = vw / dstRatio;
      sy = (vh - sh) / 2;
    }
    tCtx.drawImage(targetC, sx, sy, sw, sh, 0, 0, 240, 320);
    S.photoThumbs[slotIdx] = th.toDataURL('image/jpeg', 0.85);
  }

  window.lpb1StartPhotoSession = async function() {
    if (S.isCountingDown || !S.stream) return;

    S.isCountingDown = true;
    const shBtn = el('lpb1ShutterBtn');
    if (shBtn) shBtn.style.pointerEvents = 'none';

    if (S.retakeSingleIndex !== null) {
      const idx = S.retakeSingleIndex;
      updateCameraProgressUI(idx);
      const ok = await runCountdownPromise(S.timerSeconds);
      if (!ok) return;

      captureSingleVideoToSlot(idx);
      S.retakeSingleIndex = null;
      S.isCountingDown = false;
      S.hasCapturedAll = true;
      updateCameraProgressUI(2);

      if (el('lpb1DoneOverlay')) el('lpb1DoneOverlay').style.display = 'flex';
      return;
    }

    S.photoTaken = [false, false, false];
    for (let i = 0; i < 3; i++) {
      if (!S.isCountingDown || S.activeScreen !== 'camera') return;
      updateCameraProgressUI(i);

      if (i > 0) {
        await new Promise(r => setTimeout(r, 550));
      }
      const ok = await runCountdownPromise(S.timerSeconds);
      if (!ok) return;

      captureSingleVideoToSlot(i);
      updateCameraProgressUI(i);
    }

    S.isCountingDown = false;
    S.hasCapturedAll = true;
    S.selectedSelfieIndex = 0;

    if (el('lpb1DoneOverlay')) el('lpb1DoneOverlay').style.display = 'flex';
  };

  window.lpb1UploadPhoto = function(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const loadFileToSlot = function(file, slotIdx) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function(ev) {
          const img = new Image();
          img.onload = function() {
            const iw = img.naturalWidth || 720;
            const ih = img.naturalHeight || 960;
            const targetC = S.photoCanvases[slotIdx];
            targetC.width = iw;
            targetC.height = ih;
            const ctx = targetC.getContext('2d');
            ctx.clearRect(0, 0, iw, ih);
            ctx.drawImage(img, 0, 0, iw, ih);
            S.photoTaken[slotIdx] = true;

            const th = document.createElement('canvas');
            th.width = 240;
            th.height = 320;
            th.getContext('2d').drawImage(targetC, 0, 0, iw, ih, 0, 0, 240, 320);
            S.photoThumbs[slotIdx] = th.toDataURL('image/jpeg', 0.85);
            resolve();
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });
    };

    (async function() {
      if (S.retakeSingleIndex !== null) {
        await loadFileToSlot(files[0], S.retakeSingleIndex);
        S.retakeSingleIndex = null;
      } else {
        for (let i = 0; i < 3; i++) {
          const f = files[i] || files[0];
          await loadFileToSlot(f, i);
        }
      }
      S.hasCapturedAll = true;
      updateCameraProgressUI(2);
      if (el('lpb1DoneOverlay')) el('lpb1DoneOverlay').style.display = 'flex';
    })();

    e.target.value = "";
  };

  // ====== 3. LAYAR GALERI FOTO ======
  function renderGallery3Cards() {
    const grid = el('lpb1GalleryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      const card = document.createElement('div');
      card.className = 'lpb1-gal-item';

      const img = document.createElement('img');
      img.src = S.photoThumbs[i] || '';
      img.alt = `Foto ${i + 1}`;
      card.appendChild(img);

      const meta = document.createElement('div');
      meta.className = 'lpb1-gal-meta';

      const lbl = document.createElement('span');
      lbl.className = 'lpb1-gal-label';
      lbl.textContent = `Foto ${i + 1}`;
      meta.appendChild(lbl);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lpb1-retake-one-btn';
      btn.textContent = 'Ambil ulang';
      btn.onclick = function() {
        S.retakeSingleIndex = i;
        window.lpb1SwitchScreen('camera');
      };
      meta.appendChild(btn);

      card.appendChild(meta);
      grid.appendChild(card);
    }
  }

  window.lpb1RetakeAllPhotos = function() {
    S.retakeSingleIndex = null;
    S.photoTaken = [false, false, false];
    S.hasCapturedAll = false;
    window.lpb1SwitchScreen('camera');
  };

  // ====== 4. LAYAR "HASIL FOTOMU" ======
  function renderSelfiePickerOnResult() {
    const wrap = el('lpb1SelfiePickerWrap');
    const row = el('lpb1SelfiePickerRow');
    const dlLabel = el('lpb1DownloadBtnLabel');
    const note = el('lpb1SelectedPhotoNote');

    if (S.layoutMode === 'landscape') {
      if (wrap) wrap.style.display = 'none';
      if (dlLabel) dlLabel.textContent = 'Unduh foto ini';
      if (note) note.textContent = '3 Pose Landscape siap diunduh atau dibagikan.';
      return;
    }

    if (wrap) wrap.style.display = 'flex';
    if (dlLabel) dlLabel.textContent = `Unduh Foto ${S.selectedSelfieIndex + 1}`;
    if (note) note.textContent = `Foto ${S.selectedSelfieIndex + 1} dipilih untuk diunduh atau dibagikan.`;

    if (!row) return;
    row.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      const item = document.createElement('div');
      item.className = 'lpb1-pick-card' + (i === S.selectedSelfieIndex ? ' active' : '');

      if (S.photoThumbs[i]) {
        const img = document.createElement('img');
        img.src = S.photoThumbs[i];
        item.appendChild(img);
      }

      const nm = document.createElement('span');
      nm.className = 'lpb1-pick-name';
      nm.textContent = `Foto ${i + 1}`;
      item.appendChild(nm);

      const st = document.createElement('span');
      st.className = 'lpb1-pick-state';
      st.textContent = (i === S.selectedSelfieIndex) ? 'Dipilih' : 'Pilih';
      item.appendChild(st);

      item.onclick = function() {
        S.selectedSelfieIndex = i;
        S.cropScale = 1;
        S.cropX = 0;
        S.cropY = 0;
        if (el('lpb1ZoomRange')) el('lpb1ZoomRange').value = 100;
        renderSelfiePickerOnResult();
        drawPhotoLayer();
      };

      row.appendChild(item);
    }
  }

  function drawProportionalCover(ctx, srcC, dx, dy, dw, dh) {
    const sw = srcC.width || 720;
    const sh = srcC.height || 960;
    const srcRatio = sw / sh;
    const dstRatio = dw / dh;
    let sx = 0, sy = 0, sWidth = sw, sHeight = sh;

    if (srcRatio > dstRatio) {
      sWidth = sh * dstRatio;
      sx = (sw - sWidth) / 2;
    } else {
      sHeight = sw / dstRatio;
      sy = (sh - sHeight) / 2;
    }

    const zoomedW = sWidth / S.cropScale;
    const zoomedH = sHeight / S.cropScale;
    const zx = Math.max(0, Math.min(sw - zoomedW, sx + (sWidth - zoomedW) / 2 - S.cropX));
    const zy = Math.max(0, Math.min(sh - zoomedH, sy + (sHeight - zoomedH) / 2 - S.cropY));

    ctx.drawImage(srcC, zx, zy, zoomedW, zoomedH, dx, dy, dw, dh);
  }

  function drawPhotosIntoContext(ctx, mode) {
    if (!S.hasCapturedAll) return;

    if (mode === 'landscape') {
      S.grid3Slots.forEach((slot, idx) => {
        const srcC = S.photoCanvases[idx] || S.photoCanvases[0];
        ctx.save();
        if (checkCanvasFilterSupport()) {
          ctx.filter = getCanvasFilterString();
          drawProportionalCover(ctx, srcC, slot.x, slot.y, slot.w, slot.h);
          ctx.restore();
        } else {
          drawProportionalCover(ctx, srcC, slot.x, slot.y, slot.w, slot.h);
          ctx.restore();
          applySafariManualToneFallback(ctx, slot.x, slot.y, slot.w, slot.h);
        }
      });
    } else {
      const srcC = S.photoCanvases[S.selectedSelfieIndex] || S.photoCanvases[0];
      ctx.save();
      if (checkCanvasFilterSupport()) {
        ctx.filter = getCanvasFilterString();
        drawProportionalCover(ctx, srcC, 0, 0, CANVAS_W, CANVAS_H);
        ctx.restore();
      } else {
        drawProportionalCover(ctx, srcC, 0, 0, CANVAS_W, CANVAS_H);
        ctx.restore();
        applySafariManualToneFallback(ctx, 0, 0, CANVAS_W, CANVAS_H);
      }
    }
  }
  LPB1.drawPhotosIntoContext = drawPhotosIntoContext;

  function drawPhotoLayer() {
    const pc = el('lpb1PhotoCanvas');
    if (!pc) return;
    const ctx = pc.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    drawPhotosIntoContext(ctx, S.layoutMode);
  }
  LPB1.drawPhotoLayer = drawPhotoLayer;

  window.lpb1OnZoomSlider = function(val) {
    S.cropScale = Math.max(1, Math.min(3, Number(val) / 100));
    drawPhotoLayer();
  };

  function initResultStageGestures() {
    const stage = el('lpb1Stage');
    if (!stage || stage.getAttribute('data-res-gestures') === '1') return;
    stage.setAttribute('data-res-gestures', '1');

    let isPanning = false;
    let startX = 0, startY = 0;
    let startCropX = 0, startCropY = 0;

    stage.addEventListener('mousedown', function(e) {
      const pt = LPB1.getCanvasCoords(e.clientX, e.clientY);
      const hitTextKey = LPB1.findHitTextKey(pt.x, pt.y);

      if (hitTextKey) {
        e.preventDefault();
        S.draggingKey = hitTextKey;
        S.dragOffsetX = S.textPositions[hitTextKey].x - pt.x;
        S.dragOffsetY = S.textPositions[hitTextKey].y - pt.y;
        LPB1.redrawAllLayers(true);
        return;
      }

      if (S.hasCapturedAll) {
        e.preventDefault();
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
        startCropX = S.cropX;
        startCropY = S.cropY;
      }
    });

    window.addEventListener('mousemove', function(e) {
      if (S.draggingKey) {
        e.preventDefault();
        const pt = LPB1.getCanvasCoords(e.clientX, e.clientY);
        let nx = pt.x + S.dragOffsetX;
        let ny = pt.y + S.dragOffsetY;
        if (Math.abs(nx - 360) < 14) nx = 360;
        nx = Math.max(40, Math.min(680, nx));
        ny = Math.max(35, Math.min(1250, ny));
        S.textPositions[S.draggingKey] = { x: Math.round(nx), y: Math.round(ny) };
        LPB1.redrawAllLayers(true);
        return;
      }
      if (isPanning && S.hasCapturedAll) {
        S.cropX = startCropX + (e.clientX - startX) * 1.8;
        S.cropY = startCropY + (e.clientY - startY) * 1.8;
        drawPhotoLayer();
      }
    });

    window.addEventListener('mouseup', function() {
      if (S.draggingKey) {
        S.draggingKey = null;
        LPB1.redrawAllLayers(false);
        LPB1.syncWdpFramesSilent(false);
      }
      isPanning = false;
    });

    stage.addEventListener('touchstart', function(e) {
      if (!e.touches || !e.touches.length) return;
      const t = e.touches[0];
      const pt = LPB1.getCanvasCoords(t.clientX, t.clientY);
      const hitTextKey = LPB1.findHitTextKey(pt.x, pt.y);

      if (hitTextKey) {
        e.preventDefault();
        S.draggingKey = hitTextKey;
        S.dragOffsetX = S.textPositions[hitTextKey].x - pt.x;
        S.dragOffsetY = S.textPositions[hitTextKey].y - pt.y;
        LPB1.redrawAllLayers(true);
        return;
      }
      if (S.hasCapturedAll) {
        e.preventDefault();
        isPanning = true;
        startX = t.clientX;
        startY = t.clientY;
        startCropX = S.cropX;
        startCropY = S.cropY;
      }
    }, { passive: false });

    stage.addEventListener('touchmove', function(e) {
      if (!e.touches || !e.touches.length) return;
      const t = e.touches[0];
      if (S.draggingKey) {
        e.preventDefault();
        const pt = LPB1.getCanvasCoords(t.clientX, t.clientY);
        let nx = pt.x + S.dragOffsetX;
        let ny = pt.y + S.dragOffsetY;
        if (Math.abs(nx - 360) < 14) nx = 360;
        nx = Math.max(40, Math.min(680, nx));
        ny = Math.max(35, Math.min(1250, ny));
        S.textPositions[S.draggingKey] = { x: Math.round(nx), y: Math.round(ny) };
        LPB1.redrawAllLayers(true);
        return;
      }
      if (isPanning && S.hasCapturedAll) {
        e.preventDefault();
        S.cropX = startCropX + (t.clientX - startX) * 1.8;
        S.cropY = startCropY + (t.clientY - startY) * 1.8;
        drawPhotoLayer();
      }
    }, { passive: false });

    stage.addEventListener('touchend', function() {
      if (S.draggingKey) {
        S.draggingKey = null;
        LPB1.redrawAllLayers(false);
        LPB1.syncWdpFramesSilent(false);
      }
      isPanning = false;
    });
  }

  // ====== 5. EXPORT, UNDUH FOTO & BAGIKAN KE IG STORY ======
  function buildCompositeCanvas(requireCleanForExport) {
    const outC = document.createElement('canvas');
    outC.width = CANVAS_W;
    outC.height = CANVAS_H;
    const cCtx = outC.getContext('2d');

    drawPhotosIntoContext(cCtx, S.layoutMode);

    const tempFrameC = document.createElement('canvas');
    tempFrameC.width = CANVAS_W;
    tempFrameC.height = CANVAS_H;
    LPB1.renderSpecificFrameToContext(tempFrameC.getContext('2d'), S.currentFrame, S.layoutMode, false, requireCleanForExport, false);

    cCtx.drawImage(tempFrameC, 0, 0, CANVAS_W, CANVAS_H);
    return outC;
  }

  function getExportBlobSync() {
    let dataUrl;
    try {
      const c1 = buildCompositeCanvas(false);
      dataUrl = c1.toDataURL('image/png');
    } catch (e) {
      const c2 = buildCompositeCanvas(true);
      dataUrl = c2.toDataURL('image/png');
    }
    const parts = dataUrl.split(',');
    const byteString = atob(parts[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  }

  window.lpb1Download = function() {
    if (!S.hasCapturedAll) return;
    try {
      const blob = getExportBlobSync();
      const blobUrl = URL.createObjectURL(blob);
      const cleanCouple = (S.textData.name || "Wedding").replace(/[^a-zA-Z0-9]/g, '') || "Wedding";
      const suffix = S.layoutMode === 'landscape' ? '3Grid' : `Foto${S.selectedSelfieIndex + 1}`;

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = `Photobooth-${cleanCouple}-${suffix}.png`;
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        if (a.parentNode) document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }, 2500);

      const t = el('lpb1Toast');
      if (t) {
        t.style.display = 'block';
        t.innerHTML = `Foto berhasil disimpan ke perangkat Anda!`;
        setTimeout(() => { t.style.display = 'none'; }, 3500);
      }
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  window.lpb1ShareIG = async function() {
    if (!S.hasCapturedAll) return;
    const t = el('lpb1Toast');
    try {
      const blob = getExportBlobSync();
      const cleanCouple = (S.textData.name || "Wedding").replace(/[^a-zA-Z0-9]/g, '') || "Wedding";
      const file = new File([blob], `Story-${cleanCouple}.png`, { type: 'image/png' });

      const shareTitle = `${S.textData.title || 'The Wedding of'} ${S.textData.name || ''}`.trim();
      const shareCaption = `Happy Wedding ${S.textData.name || ''} ✨ ${S.textData.extra1 || ''}`.replace(/\s+/g, ' ').trim();

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: shareTitle, text: shareCaption });
          return;
        } catch (shareErr) {
          if (shareErr && shareErr.name === 'AbortError') return;
        }
      }

      if (navigator.clipboard) {
        try {
          if (window.ClipboardItem) {
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          } else if (navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(shareCaption);
          }
        } catch (clipErr) {}
      }

      if (navigator.share) {
        try {
          await navigator.share({ title: shareTitle, text: shareCaption, url: window.location.href });
          return;
        } catch (err2) {
          if (err2 && err2.name === 'AbortError') return;
        }
      }

      const isMobile = isMobileOrTabletDevice();
      if (t) {
        t.style.display = 'block';
        t.innerHTML = `Membuka Instagram... Foto & caption telah disalin ke Clipboard!`;
        setTimeout(() => { t.style.display = 'none'; }, 3500);
      }

      if (isMobile) {
        window.location.href = "instagram://story-camera";
      } else {
        window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    }
  };

  window.lpb1DownloadWidgetBackup = function() {
    try {
      LPB1.syncWdpFramesSilent(true);
      const modal = el('lpb1FullScreenModal');
      const root = el('lpb1RootCard');
      if (modal && root && modal.parentNode !== root) {
        root.appendChild(modal);
      }
      const widgetContainer = root ? root.parentElement : document.body;
      const fullHtmlContent = widgetContainer.innerHTML;
      const blob = new Blob([fullHtmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'script-photobooth-3d-wdp-fonts-v11.html';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 1500);
    } catch (e) {}
  };

  // Pasang juga Event Listener langsung ke tombol Buka Photobooth agar dijamin 100% merespons klik
  const openBtn = document.querySelector('#lpb1RootCard .lpb1-open-app-btn');
  if (openBtn && !openBtn.getAttribute('data-bound-open')) {
    openBtn.setAttribute('data-bound-open', '1');
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.lpb1OpenApp('templates');
    });
  }

  // ====== INISIALISASI AWAL ======
  LPB1.initStage3();
  LPB1.initStage4();
  initResultStageGestures();
  drawPhotoLayer();
})();




// ====== TAHAP 6 (PERBAIKAN): SINKRONISASI BINGKAI CUSTOM (FOTO DI DEPAN) & BG TEKS SEMI-TRANSPARAN ======

(function() {
  const S = window.LPB1_STATE;
  const LPB1 = window.LPB1;
  if (!S || !LPB1) return;
  const el = LPB1.el;

  // Ukuran Kotak Foto di Depan Bingkai (Menyisakan Ornamen Bunga di Tepi Atas, Kiri, Kanan & Bawah)
  const FRONT_SELFIE_RECT = { x: 54, y: 74, w: 612, h: 900 };

  if (!S.textStyle.shadow) {
    S.textStyle.shadow = { enabled: false, color: "#000000", blur: 8, opacity: 60 };
  }
  const sh = S.textStyle.shadow;
  if (typeof sh.bgEnabled !== 'boolean') sh.bgEnabled = true;
  if (!sh.bgColor) sh.bgColor = "#ffffff";
  if (sh.bgOpacity === undefined) sh.bgOpacity = 78;
  if (sh.bgRadius === undefined) sh.bgRadius = 18;

  if (!S.wdpCutoutMode || S.wdpCutoutMode === 'raw') {
    S.wdpCutoutMode = 'front';
  }

  S.loadingCallbacks = S.loadingCallbacks || {};

  function hexToRgbaLocal(hex, opacityPercent) {
    let c = (hex || "#ffffff").replace('#', '');
    if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    const a = Math.max(0, Math.min(1, (opacityPercent !== undefined ? opacityPercent : 78) / 100));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function isHexColorLight(hex) {
    let c = (hex || "#ffffff").replace('#', '');
    if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return ((0.299 * r + 0.587 * g + 0.114 * b) / 255) > 0.58;
  }

  function checkHasTransparencyFast(img) {
    if (!img) return false;
    try {
      const c = document.createElement('canvas');
      c.width = 50;
      c.height = 50;
      const cx = c.getContext('2d');
      cx.drawImage(img, 0, 0, 50, 50);
      const d = cx.getImageData(10, 10, 30, 30).data;
      let trans = 0;
      for (let i = 3; i < d.length; i += 4) {
        if (d[i] < 180) trans++;
      }
      return trans > 35;
    } catch (e) {
      return false;
    }
  }

  function isWdpFrameBottomBright(img) {
    if (!img) return true;
    try {
      const c = document.createElement('canvas');
      c.width = 40;
      c.height = 40;
      const cx = c.getContext('2d');
      cx.drawImage(img, 0, 0, 40, 40);
      const d = cx.getImageData(8, 30, 24, 8).data;
      let totalLum = 0, count = 0;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] > 100) {
          totalLum += (0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) / 255;
          count++;
        }
      }
      return count > 0 ? (totalLum / count) > 0.55 : true;
    } catch (e) {
      return true;
    }
  }

  // ====== 1. PEMUAT GAMBAR BINGKAI CUSTOM INSTAN & ANTI-GAGAL ======
  function loadWdpImageFast(rawUrl, callback) {
    const normUrl = LPB1.normalizeWdpUrl(rawUrl);
    if (!normUrl) {
      if (callback) callback(null);
      return;
    }

    const cached = S.imageCache[normUrl];
    if (cached && cached.complete && cached.naturalWidth > 0) {
      if (callback) callback(cached);
      return;
    }

    if (S.loadingCallbacks[normUrl]) {
      if (callback) S.loadingCallbacks[normUrl].push(callback);
      return;
    }

    S.loadingCallbacks[normUrl] = callback ? [callback] : [];

    const finishLoad = function(loadedImg) {
      if (loadedImg) {
        S.imageCache[normUrl] = loadedImg;
        S.imageCache[rawUrl] = loadedImg;
      }
      const cbs = S.loadingCallbacks[normUrl] || [];
      delete S.loadingCallbacks[normUrl];
      cbs.forEach(fn => {
        try { fn(loadedImg); } catch (e) {}
      });
    };

    // Muat langsung menggunakan elemen Image (Instan dari Cache Browser untuk domain yang sama)
    const directImg = new Image();
    if (!normUrl.startsWith('data:') && !normUrl.startsWith(window.location.origin)) {
      directImg.crossOrigin = "anonymous";
    }
    directImg.onload = function() {
      finishLoad(directImg);
    };
    directImg.onerror = function() {
      // Fallback tanpa crossOrigin jika server membatasi header CORS
      const plainImg = new Image();
      plainImg.onload = function() {
        finishLoad(plainImg);
      };
      plainImg.onerror = function() {
        finishLoad(null);
      };
      plainImg.src = rawUrl;
    };
    directImg.src = normUrl;
  }

  // Preload semua bingkai custom yang tersimpan segera saat script berjalan
  if (Array.isArray(S.wdpFrames)) {
    S.wdpFrames.forEach((f, idx) => {
      if (f && f.url) {
        loadWdpImageFast(f.url, function(img) {
          if (img && S.currentFrame === 'wdp_' + idx) {
            S.activeWdpImg = img;
            S.activeWdpHasAlphaHole = checkHasTransparencyFast(img);
          }
        });
      }
    });
  }

  // ====== 2. UI PENGATURAN FOTO DI DEPAN & BACKGROUND TEKS SEMI-TRANSPARAN ======
  function injectStage6Controls() {
    const cutoutGroup = el('lpb1CutoutGroup');
    if (cutoutGroup && !cutoutGroup.querySelector('[data-cut="front"]')) {
      const frontBtn = document.createElement('button');
      frontBtn.type = 'button';
      frontBtn.className = 'lpb1-cutout-chip';
      frontBtn.setAttribute('data-cut', 'front');
      frontBtn.innerHTML = '🖼️ Foto di Depan (JPG/PNG)';
      frontBtn.onclick = function() {
        window.lpb1SetWdpCutoutMode('front', this);
      };
      const firstChip = cutoutGroup.querySelector('.lpb1-cutout-chip');
      if (firstChip) cutoutGroup.insertBefore(frontBtn, firstChip);
      else cutoutGroup.appendChild(frontBtn);
    }

    const formGroup = el('lpb1TextFormInputs');
    if (formGroup && !el('lpb1TextBgBox')) {
      const bgBox = document.createElement('div');
      bgBox.id = 'lpb1TextBgBox';
      bgBox.className = 'lpb1-shadow-box';
      bgBox.style.marginTop = '4px';
      bgBox.innerHTML = `
        <div class="lpb1-shadow-top">
          <label style="cursor:pointer; display:inline-flex; align-items:center; gap:5px; margin:0;">
            <input type="checkbox" id="lpb1TextBgEnable" onchange="lpb1UpdateTextBgConfig()">
            <span>🎴 Background Teks Semi-Transparan (ON/OFF)</span>
          </label>
          <div style="display:flex; gap:4px;">
            <button type="button" class="lpb1-cutout-chip" onclick="lpb1SetQuickTextBg('#ffffff', 82)">Putih</button>
            <button type="button" class="lpb1-cutout-chip" onclick="lpb1SetQuickTextBg('#181b19', 72)">Gelap</button>
          </div>
        </div>
        <div class="lpb1-shadow-controls">
          <span>Warna Bg:</span>
          <input type="color" id="lpb1TextBgColor" class="lpb1-color-picker" style="width:28px; height:26px;" value="#ffffff" oninput="lpb1UpdateTextBgConfig()">
          <span>Transparansi:</span>
          <input type="range" id="lpb1TextBgOpacity" min="15" max="95" value="78" oninput="lpb1UpdateTextBgConfig()">
          <span>Sudut:</span>
          <input type="range" id="lpb1TextBgRadius" min="0" max="40" value="18" style="max-width:55px;" oninput="lpb1UpdateTextBgConfig()">
        </div>
      `;
      formGroup.appendChild(bgBox);
    }

    const resTools = document.querySelector('#lpb1ScreenResult .lpb1-res-tools');
    if (resTools && !el('lpb1QuickBgTextBtn')) {
      const bgQuickBtn = document.createElement('button');
      bgQuickBtn.type = 'button';
      bgQuickBtn.id = 'lpb1QuickBgTextBtn';
      bgQuickBtn.className = 'lpb1-res-chip active';
      bgQuickBtn.onclick = function() {
        S.textStyle.shadow.bgEnabled = !S.textStyle.shadow.bgEnabled;
        updateStage6ButtonsUI();
        LPB1.redrawAllLayers(false);
        LPB1.syncWdpFramesSilent(false);
      };
      resTools.appendChild(bgQuickBtn);

      const modeQuickBtn = document.createElement('button');
      modeQuickBtn.type = 'button';
      modeQuickBtn.id = 'lpb1QuickFrontModeBtn';
      modeQuickBtn.className = 'lpb1-res-chip';
      modeQuickBtn.onclick = function() {
        S.wdpCutoutMode = (S.wdpCutoutMode === 'front') ? 'raw' : 'front';
        updateStage6ButtonsUI();
        LPB1.redrawAllLayers(false);
        LPB1.syncWdpFramesSilent(false);
      };
      resTools.appendChild(modeQuickBtn);
    }

    updateStage6ButtonsUI();
  }

  function updateStage6ButtonsUI() {
    const shObj = S.textStyle.shadow || {};

    const cutoutGroup = el('lpb1CutoutGroup');
    if (cutoutGroup) {
      cutoutGroup.querySelectorAll('.lpb1-cutout-chip').forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-cut') === S.wdpCutoutMode);
      });
    }

    if (el('lpb1TextBgEnable')) el('lpb1TextBgEnable').checked = Boolean(shObj.bgEnabled);
    if (el('lpb1TextBgColor')) el('lpb1TextBgColor').value = shObj.bgColor || "#ffffff";
    if (el('lpb1TextBgOpacity')) el('lpb1TextBgOpacity').value = (shObj.bgOpacity !== undefined) ? shObj.bgOpacity : 78;
    if (el('lpb1TextBgRadius')) el('lpb1TextBgRadius').value = (shObj.bgRadius !== undefined) ? shObj.bgRadius : 18;

    const qBgBtn = el('lpb1QuickBgTextBtn');
    if (qBgBtn) {
      qBgBtn.classList.toggle('active', Boolean(shObj.bgEnabled));
      qBgBtn.innerHTML = `<span class="lnr lnr-layers"></span><span>Bg Teks: ${shObj.bgEnabled ? 'ON' : 'OFF'}</span>`;
    }

    const qModeBtn = el('lpb1QuickFrontModeBtn');
    if (qModeBtn) {
      const isWdp = S.currentFrame && S.currentFrame.startsWith('wdp_');
      qModeBtn.style.display = isWdp ? 'inline-flex' : 'none';
      const isFront = (S.wdpCutoutMode === 'front');
      qModeBtn.classList.toggle('active', isFront);
      qModeBtn.innerHTML = `<span class="lnr lnr-picture"></span><span>${isFront ? 'Foto di Depan' : 'PNG Transparan'}</span>`;
    }
  }

  window.lpb1UpdateTextBgConfig = function() {
    const shObj = S.textStyle.shadow;
    if (el('lpb1TextBgEnable')) shObj.bgEnabled = el('lpb1TextBgEnable').checked;
    if (el('lpb1TextBgColor')) shObj.bgColor = el('lpb1TextBgColor').value;
    if (el('lpb1TextBgOpacity')) shObj.bgOpacity = Number(el('lpb1TextBgOpacity').value);
    if (el('lpb1TextBgRadius')) shObj.bgRadius = Number(el('lpb1TextBgRadius').value);
    updateStage6ButtonsUI();
    LPB1.redrawAllLayers(false);
    LPB1.syncWdpFramesSilent(false);
  };

  window.lpb1SetQuickTextBg = function(colorHex, opacityVal) {
    const shObj = S.textStyle.shadow;
    shObj.bgEnabled = true;
    shObj.bgColor = colorHex;
    shObj.bgOpacity = opacityVal;
    updateStage6ButtonsUI();
    LPB1.redrawAllLayers(false);
    LPB1.syncWdpFramesSilent(false);
  };

  window.lpb1SetWdpCutoutMode = function(cutMode) {
    S.wdpCutoutMode = cutMode;
    updateStage6ButtonsUI();
    LPB1.syncWdpFramesSilent(false);
    LPB1.redrawAllLayers(false);
  };

  // ====== 3. GAMBAR FOTO PROPORSIONAL DI KOTAK DEPAN ATAU FULL ======
  function drawProportionalPhotoBox(ctx, srcC, dx, dy, dw, dh) {
    if (!srcC) return;
    const sw = srcC.width || 720;
    const sh = srcC.height || 960;
    const srcRatio = sw / sh;
    const dstRatio = dw / dh;
    let sx = 0, sy = 0, sWidth = sw, sHeight = sh;

    if (srcRatio > dstRatio) {
      sWidth = sh * dstRatio;
      sx = (sw - sWidth) / 2;
    } else {
      sHeight = sw / dstRatio;
      sy = (sh - sHeight) / 2;
    }

    const scale = Math.max(1, S.cropScale || 1);
    const zoomedW = sWidth / scale;
    const zoomedH = sHeight / scale;
    const zx = Math.max(0, Math.min(sw - zoomedW, sx + (sWidth - zoomedW) / 2 - (S.cropX || 0)));
    const zy = Math.max(0, Math.min(sh - zoomedH, sy + (sHeight - zoomedH) / 2 - (S.cropY || 0)));

    ctx.drawImage(srcC, zx, zy, zoomedW, zoomedH, dx, dy, dw, dh);
  }

  function getToneFilterStr() {
    if (S.currentTone === 'soft') return 'brightness(106%) contrast(102%) saturate(108%)';
    if (S.currentTone === 'warm') return 'sepia(18%) brightness(105%) contrast(104%) saturate(115%)';
    if (S.currentTone === 'peach') return 'brightness(108%) contrast(98%) saturate(118%) hue-rotate(-6deg)';
    if (S.currentTone === 'bw') return 'grayscale(100%) contrast(112%) brightness(103%)';
    return 'none';
  }

  LPB1.drawPhotosIntoContext = function(ctx, mode) {
    if (!S.hasCapturedAll) return;

    const filterStr = getToneFilterStr();
    const isWdpFrontSelfie = (mode !== 'landscape') &&
                             S.currentFrame && S.currentFrame.startsWith('wdp_') &&
                             (S.wdpCutoutMode === 'front' || S.wdpCutoutMode === 'box');

    if (mode === 'landscape') {
      S.grid3Slots.forEach((slot, idx) => {
        const srcC = S.photoCanvases[idx] || S.photoCanvases[0];
        ctx.save();
        try { ctx.filter = filterStr; } catch (e) {}
        drawProportionalPhotoBox(ctx, srcC, slot.x, slot.y, slot.w, slot.h);
        ctx.restore();
      });
    } else if (isWdpFrontSelfie) {
      const r = FRONT_SELFIE_RECT;
      const srcC = S.photoCanvases[S.selectedSelfieIndex] || S.photoCanvases[0];
      ctx.save();
      try { ctx.filter = filterStr; } catch (e) {}
      drawProportionalPhotoBox(ctx, srcC, r.x, r.y, r.w, r.h);
      ctx.restore();
    } else {
      const srcC = S.photoCanvases[S.selectedSelfieIndex] || S.photoCanvases[0];
      ctx.save();
      try { ctx.filter = filterStr; } catch (e) {}
      drawProportionalPhotoBox(ctx, srcC, 0, 0, 720, 1280);
      ctx.restore();
    }
  };

  LPB1.drawPhotoLayer = function() {
    const pc = el('lpb1PhotoCanvas');
    if (!pc) return;
    const ctx = pc.getContext('2d');
    ctx.clearRect(0, 0, 720, 1280);
    LPB1.drawPhotosIntoContext(ctx, S.layoutMode);
  };

  // ====== 4. RENDER TIPOGRAFI DENGAN BACKGROUND SEMI-TRANSPARAN (ON/OFF) ======
  function drawTypographyWithSemiTransBg(ctx, defaultQuoteCol, defaultNameCol, defaultDateCol, showDragGuides, recordBounds, targetFrameId, targetImg) {
    if (recordBounds) S.textBounds = {};
    const st = S.textStyle;
    if (st && st.hideAllText) return;

    const t = S.textData || {};
    const pos = S.textPositions || {};
    const useCustom = Boolean(st.useCustomColors);
    const cols = st.colors || {};
    const sz = st.sizes || {};
    const fn = st.fonts || {};
    const it = st.italics || {};
    const shObj = st.shadow || {};

    const sTitle = Number(sz.title) || 15;
    const sExtra2 = Number(sz.extra2) || 22;
    const sName = Number(sz.name) || 54;
    const sDate = Number(sz.date) || 17;
    const sExtra1 = Number(sz.extra1) || 16;

    const fTitle = fn.title || "Plus Jakarta Sans";
    const fExtra2 = fn.extra2 || "Cormorant Garamond";
    const fName = fn.name || "Cormorant Garamond";
    const fDate = fn.date || "Plus Jakarta Sans";
    const fExtra1 = fn.extra1 || "Plus Jakarta Sans";

    const iTitle = it.title ? "italic " : "";
    const iExtra2 = (it.extra2 !== false) ? "italic " : "";
    const iName = (it.name !== false) ? "italic " : "";
    const iDate = it.date ? "italic " : "";
    const iExtra1 = it.extra1 ? "italic " : "";

    let autoQuote = defaultQuoteCol;
    let autoName = defaultNameCol;
    let autoDate = defaultDateCol;

    if (shObj.bgEnabled) {
      const isBgLight = isHexColorLight(shObj.bgColor || "#ffffff");
      if (isBgLight) {
        autoQuote = "#4a554b";
        autoName = "#232b24";
        autoDate = "#5c4d38";
      } else {
        autoQuote = "#e3ebe4";
        autoName = "#ffffff";
        autoDate = "#e5cfa3";
      }
    } else if (targetFrameId && targetFrameId.startsWith('wdp_') && isWdpFrameBottomBright(targetImg)) {
      autoQuote = "#4a554b";
      autoName = "#263027";
      autoDate = "#63523b";
    }

    const rawItems = [
      { key: 'title',  text: (t.title || "").trim().toUpperCase(), font: `${iTitle}700 ${sTitle}px "${fTitle}", sans-serif`, color: useCustom ? cols.title : autoDate, height: Math.round(sTitle * 1.35) },
      { key: 'extra2', text: (t.extra2 || "").trim() ? `"${(t.extra2 || "").trim()}"` : "", font: `${iExtra2}600 ${sExtra2}px "${fExtra2}", serif`, color: useCustom ? cols.extra2 : autoQuote, height: Math.round(sExtra2 * 1.3) },
      { key: 'name',   text: (t.name || "").trim(), font: `${iName}700 ${sName}px "${fName}", serif`, color: useCustom ? cols.name : autoName, height: Math.round(sName * 1.15) },
      { key: 'date',   text: (t.date || "").trim(), font: `${iDate}600 ${sDate}px "${fDate}", sans-serif`, color: useCustom ? cols.date : autoDate, height: Math.round(sDate * 1.35) },
      { key: 'extra1', text: (t.extra1 || "").trim(), font: `${iExtra1}600 ${sExtra1}px "${fExtra1}", sans-serif`, color: useCustom ? cols.extra1 : autoDate, height: Math.round(sExtra1 * 1.35) }
    ];

    const activeItems = [];
    let minX = 720, maxX = 0, minY = 1280, maxY = 0;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    rawItems.forEach(item => {
      if (!item.text) return;
      const p = pos[item.key] || { x: 360, y: 1100 };
      ctx.font = item.font;
      const metrics = ctx.measureText(item.text);
      const w = Math.max(metrics.width, 60);
      const h = item.height;

      if (p.x - w / 2 < minX) minX = p.x - w / 2;
      if (p.x + w / 2 > maxX) maxX = p.x + w / 2;
      if (p.y - h / 2 < minY) minY = p.y - h / 2;
      if (p.y + h / 2 > maxY) maxY = p.y + h / 2;

      activeItems.push({ ...item, p, w, h });
    });

    if (shObj.bgEnabled && activeItems.length > 0) {
      const padX = 34;
      const padY = 18;
      const bx = Math.max(24, minX - padX);
      const by = Math.max(24, minY - padY);
      const bw = Math.min(720 - bx - 24, (maxX - minX) + padX * 2);
      const bh = Math.min(1280 - by - 16, (maxY - minY) + padY * 2);
      const rad = (shObj.bgRadius !== undefined) ? Number(shObj.bgRadius) : 18;

      ctx.save();
      ctx.fillStyle = hexToRgbaLocal(shObj.bgColor || "#ffffff", shObj.bgOpacity !== undefined ? shObj.bgOpacity : 78);
      ctx.strokeStyle = isHexColorLight(shObj.bgColor || "#ffffff")
        ? 'rgba(180, 165, 135, 0.45)'
        : 'rgba(216, 197, 158, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(bx, by, bw, bh, rad);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    activeItems.forEach(item => {
      const p = item.p;
      ctx.save();
      ctx.font = item.font;

      if (shObj && shObj.enabled) {
        ctx.shadowColor = hexToRgbaLocal(shObj.color || "#000000", shObj.opacity || 60);
        ctx.shadowBlur = Number(shObj.blur) || 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
      }

      ctx.fillStyle = item.color;
      ctx.fillText(item.text, p.x, p.y);

      if (recordBounds) {
        S.textBounds[item.key] = {
          left: p.x - item.w / 2 - 20,
          right: p.x + item.w / 2 + 20,
          top: p.y - item.h / 2 - 12,
          bottom: p.y + item.h / 2 + 12
        };

        if (showDragGuides && S.draggingKey === item.key) {
          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = '#556b57';
          ctx.fillStyle = 'rgba(85, 107, 87, 0.14)';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.roundRect(p.x - item.w / 2 - 12, p.y - item.h / 2 - 8, item.w + 24, item.h + 16, 8);
          ctx.fill();
          ctx.stroke();
        }
      }
      ctx.restore();
    });

    ctx.restore();
  }

  // ====== 5. SINKRONKAN SELURUH MESIN RENDER BINGKAI & CAROUSEL 3D ======
  const origRenderSpecificFrame = LPB1.renderSpecificFrameToContext;

  LPB1.renderSpecificFrameToContext = function(ctx, frameId, mode, showDragGuides, requireCleanForExport, recordBounds) {
    updateStage6ButtonsUI();

    if (frameId && frameId.startsWith('wdp_')) {
      const idx = Number(frameId.replace('wdp_', ''));
      const item = S.wdpFrames[idx];
      const normUrl = item ? LPB1.normalizeWdpUrl(item.url) : '';
      const img = S.imageCache[normUrl] || (item && S.imageCache[item.url]) || (frameId === S.currentFrame ? S.activeWdpImg : null);

      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, 720, 1280);
        ctx.save();

        const cutMode = S.wdpCutoutMode || 'front';
        const hasHole = checkHasTransparencyFast(img);

        ctx.drawImage(img, 0, 0, 720, 1280);

        if (cutMode === 'front' || (cutMode === 'auto' && !hasHole) || (cutMode === 'raw' && !hasHole)) {
          // Buka Jendela Foto di Depan Bingkai (Agar gambar bingkai JPG/PNG yang tidak berlubang tetap menampilkan foto di depannya!)
          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          if (mode === 'landscape') {
            S.grid3Slots.forEach(s => ctx.fillRect(s.x, s.y, s.w, s.h));
          } else {
            const r = FRONT_SELFIE_RECT;
            ctx.fillRect(r.x, r.y, r.w, r.h);
          }
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
          ctx.lineWidth = 1.5;
          if (mode === 'landscape') {
            S.grid3Slots.forEach(s => ctx.strokeRect(s.x, s.y, s.w, s.h));
          } else {
            const r = FRONT_SELFIE_RECT;
            ctx.strokeRect(r.x, r.y, r.w, r.h);
          }
          ctx.restore();
        } else if (cutMode === 'box' || cutMode === 'arch') {
          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          if (mode === 'landscape') {
            S.grid3Slots.forEach(s => {
              ctx.beginPath();
              ctx.roundRect(s.x, s.y, s.w, s.h, 8);
              ctx.fill();
            });
          } else if (cutMode === 'box') {
            ctx.beginPath();
            ctx.roundRect(50, 80, 620, 922, 16);
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.moveTo(52, 360);
            ctx.arc(360, 360, 308, Math.PI, 0, false);
            ctx.lineTo(668, 995);
            ctx.quadraticCurveTo(668, 1020, 640, 1020);
            ctx.lineTo(80, 1020);
            ctx.quadraticCurveTo(52, 1020, 52, 995);
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();
        }

        drawTypographyWithSemiTransBg(ctx, '#e3ebe4', '#ffffff', '#d8c59e', showDragGuides, recordBounds, frameId, img);
        ctx.restore();
        return;
      }
    }

    const prevHide = S.textStyle.hideAllText;
    S.textStyle.hideAllText = true;
    origRenderSpecificFrame(ctx, frameId, mode, showDragGuides, requireCleanForExport, false);
    S.textStyle.hideAllText = prevHide;

    if (!prevHide) {
      if (frameId === 'hitam') {
        drawTypographyWithSemiTransBg(ctx, '#d6d2c9', '#f7ebd2', '#c9b386', showDragGuides, recordBounds, frameId, null);
      } else if (frameId === 'putih') {
        drawTypographyWithSemiTransBg(ctx, '#667067', '#354537', '#827055', showDragGuides, recordBounds, frameId, null);
      } else {
        drawTypographyWithSemiTransBg(ctx, '#e3ebe4', '#ffffff', '#dec89a', showDragGuides, recordBounds, frameId, null);
      }
    }
  };

  // Pastikan drawStaticFrameOverlay memanggil LPB1.renderSpecificFrameToContext versi Tahap 6
  LPB1.drawStaticFrameOverlay = function(showDragGuides) {
    const fCanvas = el('lpb1FrameOverlay');
    if (fCanvas) {
      LPB1.renderSpecificFrameToContext(fCanvas.getContext('2d'), S.currentFrame, S.layoutMode, showDragGuides, false, true);
    }
    const liveF = el('lpb1LiveFrameCanvas');
    if (liveF) {
      LPB1.renderSpecificFrameToContext(liveF.getContext('2d'), S.currentFrame, S.layoutMode, false, false, false);
    }
  };

  // Ilustrasi Sampel Pasangan untuk Kartu Carousel
  function drawCoupleSampleBox(ctx, x, y, w, h, variant) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();

    const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
    bgGrad.addColorStop(0, '#e5d9c5');
    bgGrad.addColorStop(0.55, '#c9b49a');
    bgGrad.addColorStop(1, '#967e67');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(x, y, w, h);

    const cx = x + w / 2;
    const cy = y + h * 0.46;
    const sunGlow = ctx.createRadialGradient(cx, cy - h * 0.08, 10, cx, cy, w * 0.65);
    sunGlow.addColorStop(0, 'rgba(255, 248, 232, 0.75)');
    sunGlow.addColorStop(0.5, 'rgba(255, 238, 205, 0.25)');
    sunGlow.addColorStop(1, 'rgba(255, 238, 205, 0)');
    ctx.fillStyle = sunGlow;
    ctx.fillRect(x, y, w, h);

    const scale = Math.min(w / 420, h / 380);
    ctx.translate(cx, y + h * 0.56);
    ctx.scale(scale, scale);

    const shiftX = (variant === 1) ? -6 : (variant === 2 ? 6 : 0);

    ctx.fillStyle = '#362e28';
    ctx.beginPath();
    ctx.arc(-44 + shiftX, -82, 34, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-118 + shiftX, 190);
    ctx.quadraticCurveTo(-112 + shiftX, -28, -44 + shiftX, -38);
    ctx.quadraticCurveTo(22 + shiftX, -28, 28 + shiftX, 190);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#473d35';
    ctx.beginPath();
    ctx.arc(44 - shiftX, -66, 31, 0, Math.PI * 2);
    ctx.fill();

    const dressGrad = ctx.createLinearGradient(0, -25, 0, 190);
    dressGrad.addColorStop(0, '#fbf8f3');
    dressGrad.addColorStop(1, '#dfd5c5');
    ctx.fillStyle = dressGrad;
    ctx.beginPath();
    ctx.moveTo(-18 - shiftX, 190);
    ctx.quadraticCurveTo(-4 - shiftX, -16, 44 - shiftX, -24);
    ctx.quadraticCurveTo(96 - shiftX, -16, 112 - shiftX, 190);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  function renderCardPreviewCanvas(canvasEl, tpl) {
    if (!canvasEl) return;
    const ctx = canvasEl.getContext('2d');
    ctx.clearRect(0, 0, 360, 640);
    ctx.save();
    ctx.scale(0.5, 0.5);

    if (S.hasCapturedAll) {
      LPB1.drawPhotosIntoContext(ctx, S.layoutMode);
    } else {
      if (S.layoutMode === 'landscape') {
        S.grid3Slots.forEach((s, idx) => drawCoupleSampleBox(ctx, s.x, s.y, s.w, s.h, idx));
      } else if (tpl.isWdp && (S.wdpCutoutMode === 'front' || S.wdpCutoutMode === 'box')) {
        const r = FRONT_SELFIE_RECT;
        drawCoupleSampleBox(ctx, r.x, r.y, r.w, r.h, 0);
      } else {
        drawCoupleSampleBox(ctx, 0, 0, 720, 1280, 0);
      }
    }

    const tempF = document.createElement('canvas');
    tempF.width = 720;
    tempF.height = 1280;
    LPB1.renderSpecificFrameToContext(tempF.getContext('2d'), tpl.id, S.layoutMode, false, false, false);
    ctx.drawImage(tempF, 0, 0);
    ctx.restore();
  }

  // Override renderTemplateCarousel agar kartu Bingkai Custom langsung tergambar & tidak pernah putih kosong
  LPB1.renderTemplateCarousel = function() {
    const track = el('lpb1CarouselTrack');
    const counter = el('lpb1TplCounter');
    const dotsRow = el('lpb1DotsRow');
    if (!track) return;

    const list = LPB1.getAllTemplatesList();
    let activeIdx = list.findIndex(t => t.id === S.currentFrame);
    if (activeIdx === -1) {
      activeIdx = 0;
      S.currentFrame = list[0].id;
    }

    const activeTpl = list[activeIdx];
    if (counter && activeTpl) {
      counter.textContent = `${activeIdx + 1} / ${list.length} • ${activeTpl.name}`;
    }

    const total = list.length;
    const prevIdx = (activeIdx - 1 + total) % total;
    const nextIdx = (activeIdx + 1) % total;

    // Jika jumlah kartu di DOM sudah sesuai, cukup update posisi & kanvasnya tanpa menghapus DOM!
    const existingCards = track.querySelectorAll('.lpb1-tpl-card');
    if (existingCards.length !== list.length) {
      track.innerHTML = '';
      if (dotsRow) dotsRow.innerHTML = '';

      list.forEach((tpl, idx) => {
        const card = document.createElement('div');
        card.className = 'lpb1-tpl-card pos-hidden';
        card.setAttribute('data-tpl-id', tpl.id);

        const c = document.createElement('canvas');
        c.width = 360;
        c.height = 640;
        card.appendChild(c);

        const chk = document.createElement('div');
        chk.className = 'lpb1-tpl-check';
        chk.innerHTML = '<span class="lnr lnr-checkmark-circle"></span>';
        card.appendChild(chk);

        if (tpl.isWdp) {
          const del = document.createElement('div');
          del.className = 'lpb1-tpl-del';
          del.title = `Hapus ${tpl.name}`;
          del.innerHTML = '<span class="lnr lnr-cross"></span>';
          del.onclick = function(ev) {
            ev.stopPropagation();
            S.wdpFrames.splice(tpl.wdpIndex, 1);
            LPB1.syncWdpFramesSilent(true);
            const updated = LPB1.getAllTemplatesList();
            S.currentFrame = updated[0].id;
            track.innerHTML = '';
            LPB1.renderTemplateCarousel();
            LPB1.redrawAllLayers(false);
          };
          card.appendChild(del);
        }

        card.onclick = function() {
          if (S.currentFrame !== tpl.id) {
            LPB1.selectTemplateById(tpl.id);
          }
        };

        track.appendChild(card);

        if (dotsRow) {
          const dot = document.createElement('span');
          dot.className = 'lpb1-dot';
          dot.onclick = function() { LPB1.selectTemplateById(tpl.id); };
          dotsRow.appendChild(dot);
        }
      });
    }

    const cardsNow = track.querySelectorAll('.lpb1-tpl-card');
    const dotsNow = dotsRow ? dotsRow.querySelectorAll('.lpb1-dot') : [];

    list.forEach((tpl, idx) => {
      let posClass = 'pos-hidden';
      if (idx === activeIdx) posClass = 'pos-center';
      else if (idx === prevIdx && total > 1) posClass = 'pos-left';
      else if (idx === nextIdx && total >= 2) posClass = 'pos-right';

      const card = cardsNow[idx];
      if (!card) return;
      card.className = `lpb1-tpl-card ${posClass}`;

      if (dotsNow[idx]) {
        dotsNow[idx].className = 'lpb1-dot' + (idx === activeIdx ? ' active' : '');
      }

      const c = card.querySelector('canvas');
      // Gambar pratinjau segera (agar tidak pernah putih kosong)
      renderCardPreviewCanvas(c, tpl);

      if (tpl.isWdp) {
        loadWdpImageFast(tpl.url, function(loadedImg) {
          if (loadedImg) {
            if (S.currentFrame === tpl.id) {
              S.activeWdpImg = loadedImg;
              S.activeWdpHasAlphaHole = checkHasTransparencyFast(loadedImg);
              LPB1.drawStaticFrameOverlay(false);
            }
            renderCardPreviewCanvas(c, tpl);
          }
        });
      }
    });
  };

  LPB1.selectTemplateById = function(tplId) {
    S.currentFrame = tplId;
    if (tplId && tplId.startsWith('wdp_')) {
      const idx = Number(tplId.replace('wdp_', ''));
      const item = S.wdpFrames[idx];
      if (item && item.url) {
        const normUrl = LPB1.normalizeWdpUrl(item.url);
        if (S.imageCache[normUrl]) {
          S.activeWdpImg = S.imageCache[normUrl];
          S.activeWdpHasAlphaHole = checkHasTransparencyFast(S.activeWdpImg);
        } else {
          loadWdpImageFast(item.url, function(loadedImg) {
            if (loadedImg) {
              S.activeWdpImg = loadedImg;
              S.activeWdpHasAlphaHole = checkHasTransparencyFast(loadedImg);
              LPB1.redrawAllLayers(false);
            }
          });
        }
      }
    }
    LPB1.redrawAllLayers(false);
  };

  window.lpb1StepTemplate = function(dir) {
    const list = LPB1.getAllTemplatesList();
    if (!list.length) return;
    let idx = list.findIndex(t => t.id === S.currentFrame);
    if (idx === -1) idx = 0;
    let nextIdx = (idx + dir + list.length) % list.length;
    LPB1.selectTemplateById(list[nextIdx].id);
  };

  window.lpb1SwitchLayoutMode = function(mode) {
    S.layoutMode = (mode === 'landscape') ? 'landscape' : 'selfie';
    const tabS = el('lpb1TabSelfie');
    const tabL = el('lpb1TabLandscape');
    if (tabS) tabS.classList.toggle('active', S.layoutMode === 'selfie');
    if (tabL) tabL.classList.toggle('active', S.layoutMode === 'landscape');
    LPB1.redrawAllLayers(false);
  };

  // Inisialisasi Akhir Tahap 6
  injectStage6Controls();
  const initialList = LPB1.getAllTemplatesList();
  if (initialList.length > 0) {
    LPB1.selectTemplateById(initialList[0].id);
  }
})();
