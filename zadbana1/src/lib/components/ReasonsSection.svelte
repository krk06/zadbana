<script>
    import { reveal } from '../reveal';
</script>

<section class="z-section" id="dlaczego-my">
    <div class="z-container">
        <h2 use:reveal class="z-title reveal-up">Dlaczego Warto Wybrać Zadbana</h2>
        
        <div class="reasons-wrapper">
            <div class="reasons-center-decor"></div>
            
            <div class="reasons-grid">
                <!-- Karta 1 -->
                <div use:reveal class="reason-card reveal-up delay-1">
                    <div class="reason-icon">
                        <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    </div>
                    <h3 class="reason-title">Kameralna Atmosfera</h3>
                    <p class="reason-text">Przestrzeń, w której czujesz się jak w przyjaznym, zaufanym miejscu. Bez pośpiechu, bez stresu.</p>
                </div>

                <!-- Karta 2 -->
                <div use:reveal class="reason-card reveal-up delay-2">
                    <div class="reason-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <h3 class="reason-title">Indywidualne Podejście</h3>
                    <p class="reason-text">Znam swoje klientki po imieniu, pamiętam ich preferencje, typ skóry i wcześniejsze zabiegi.</p>
                </div>

                <!-- Karta 3 -->
                <div use:reveal class="reason-card reveal-up delay-1">
                    <div class="reason-icon">
                        <svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                    </div>
                    <h3 class="reason-title">Dogodna Lokalizacja</h3>
                    <p class="reason-text">15 minut jazdy z centrum Nowego Sącza, bezpłatny parking przy drzwiach.</p>
                </div>
                
                 <!-- Karta 4 -->
                 <div use:reveal class="reason-card reveal-up delay-2">
                    <div class="reason-icon">
                        <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                    </div>
                    <h3 class="reason-title">Uczciwe Ceny</h3>
                    <p class="reason-text">Wysoką jakość usług łączę z uczciwymi cenami. Otrzymujesz więcej czasu, uwagi i komfortu w porównywalnej cenie.</p>
                </div>

                 <!-- Karta 5 -->
                 <div use:reveal class="reason-card reveal-up delay-1">
                    <div class="reason-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <h3 class="reason-title">Unikalne Metody</h3>
                    <p class="reason-text">Threading, radiofrekwencja mikroigłowa, oczyszczanie wodorowe – zabiegi, których nie znajdziesz w każdym salonie.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .reasons-wrapper {
        position: relative;
        padding: 40px 0;
    }

    .reasons-center-decor {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(180,140,140,0.08) 0%, transparent 70%);
        z-index: 0;
        animation: pulseDecor 4s infinite ease-in-out;
        pointer-events: none;
    }

    @keyframes pulseDecor {
        0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
    }

    .reasons-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        position: relative;
        z-index: 1;
    }

    .reason-card {
        flex: 1 1 300px;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border: var(--border-glass);
        padding: 40px 30px;
        border-radius: 30px;
        transition: all 0.4s ease;
        box-shadow: var(--shadow-soft);
    }

    .reason-card:hover {
        background: #fff;
        transform: translateY(-10px) scale(1.02);
        box-shadow: var(--shadow-hover);
        border-color: rgba(180, 140, 140, 0.3);
        z-index: 2;
    }

    .reason-icon {
        width: 75px;
        height: 75px;
        background: linear-gradient(135deg, #fdfbfb, #f3ecec);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        transition: transform 0.4s ease;
    }

    .reason-card:hover .reason-icon {
        transform: rotate(360deg);
        background: linear-gradient(135deg, #fff, #f0e6e6);
    }

    .reason-icon svg {
        width: 32px; height: 32px; fill: var(--color-primary);
    }

    .reason-title {
        font-family: var(--font-serif);
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: var(--color-text);
        font-weight: 600;
    }

    .reason-text {
        font-size: 0.95rem; 
        color: var(--color-text-light); 
        margin: 0;
    }

    @media (max-width: 768px) {
        .reasons-grid { gap: 20px; }
        .reason-card { flex: 1 1 100%; max-width: 100%; }
    }
</style>
