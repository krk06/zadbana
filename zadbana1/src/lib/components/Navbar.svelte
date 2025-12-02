<script>
  import { onMount } from 'svelte';
  
  let isScrolled = false;
  let mobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleMenu = () => {
      mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="navbar {isScrolled ? 'scrolled' : ''}">
  <div class="nav-container">
    <div class="logo">
        <span class="logo-main">Zadbana</span>
        <span class="logo-sub">Skin Expert</span>
    </div>

    <!-- Desktop Menu -->
    <div class="nav-links">
      <a href="#o-mnie">O mnie</a>
      <a href="#oferta">Oferta</a>
      <a href="#dlaczego-my">Dlaczego my</a>
      <a href="#kontakt">Kontakt</a>
      <a href="https://booksy.com/pl-pl/324069_zadbana-skin-expert_salon-kosmetyczny_10418_ptaszkowa" target="_blank" class="book-btn">Rezerwuj</a>
    </div>

    <!-- Mobile Toggle -->
    <button class="mobile-toggle" on:click={toggleMenu} aria-label="Menu">
        <span class="bar {mobileMenuOpen ? 'open' : ''}"></span>
        <span class="bar {mobileMenuOpen ? 'open' : ''}"></span>
        <span class="bar {mobileMenuOpen ? 'open' : ''}"></span>
    </button>
  </div>
</nav>

{#if mobileMenuOpen}
    <div class="mobile-menu-overlay" on:click={toggleMenu} >
        <div class="mobile-menu-content" on:click|stopPropagation>
            <a href="#o-mnie" on:click={toggleMenu}>O mnie</a>
            <a href="#oferta" on:click={toggleMenu}>Oferta</a>
            <a href="#dlaczego-my" on:click={toggleMenu}>Dlaczego my</a>
            <a href="#kontakt" on:click={toggleMenu}>Kontakt</a>
            <a href="https://booksy.com/pl-pl/324069_zadbana-skin-expert_salon-kosmetyczny_10418_ptaszkowa" target="_blank" class="book-btn-mobile">Zarezerwuj Wizytę</a>
        </div>
    </div>
{/if}

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 0;
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .navbar.scrolled {
    padding: 15px 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 10px 30px rgba(180, 140, 140, 0.1);
    border-bottom: 1px solid rgba(180, 140, 140, 0.1);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    flex-direction: column;
    line-height: 1;
    cursor: pointer;
  }

  .logo-main {
    font-family: var(--font-serif);
    font-size: 1.8rem;
    color: var(--color-text);
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  .logo-sub {
    font-family: var(--font-main);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-left: 2px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--color-text);
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-links a:not(.book-btn)::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }

  .nav-links a:not(.book-btn):hover {
    color: var(--color-primary-dark);
  }

  .nav-links a:not(.book-btn):hover::after {
    width: 100%;
  }

  .book-btn {
    padding: 12px 30px;
    background: var(--color-text); /* Kontrastowy, elegancki */
    color: #fff !important;
    border-radius: 50px;
    font-size: 0.9rem !important;
    letter-spacing: 0.5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  }

  .book-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    background: var(--color-primary-dark);
  }

  /* Mobile Toggle */
  .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1002;
  }
  
  .bar {
      width: 30px;
      height: 2px;
      background: var(--color-text);
      transition: 0.3s;
  }

  .bar.open:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
  .bar.open:nth-child(2) { opacity: 0; }
  .bar.open:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100vh;
      background: rgba(255,255,255,0.98);
      z-index: 1001;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.3s ease;
  }

  .mobile-menu-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
  }

  .mobile-menu-content a {
      font-family: var(--font-serif);
      font-size: 1.8rem;
      color: var(--color-text);
      text-decoration: none;
  }
  
  .book-btn-mobile {
      margin-top: 20px;
      padding: 15px 40px;
      background: var(--color-primary);
      color: white !important;
      border-radius: 50px;
      font-size: 1.2rem !important;
  }

  @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
  }

  @media (max-width: 768px) {
      .nav-links { display: none; }
      .mobile-toggle { display: flex; }
  }
</style>
