<script>
    import { reveal } from '../reveal';
</script>

<section class="z-section" style="padding-top: 0;">
    <div class="z-container">
        <div use:reveal class="cta-wrapper reveal-up">
            <div class="cta-decor cd-1"></div>
            <div class="cta-decor cd-2"></div>
            
            <h2 class="z-title" style="color: white; margin-bottom: 15px; position: relative;">
                Zarezerwuj Chwilę dla Siebie
            </h2>
            <p style="font-size: 1.15rem; opacity: 0.95; max-width: 650px; margin: 0 auto; position: relative; font-weight: 300;">
                Dołącz do grona zadowolonych klientek. Przekonaj się, jak niewiele potrzeba, by poczuć się pięknie i pewnie.
            </p>
            <a href="https://booksy.com/pl-pl/324069_zadbana-skin-expert_salon-kosmetyczny_10418_ptaszkowa#ba_s=sh_1" 
               class="cta-btn" target="_blank" rel="noopener noreferrer">
               Rezerwacja Online
               <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </a>
        </div>
    </div>
</section>

<style>
    .cta-wrapper {
        margin-top: 40px;
        border-radius: 30px;
        overflow: hidden;
        position: relative;
        padding: 90px 30px;
        text-align: center;
        background: linear-gradient(135deg, #b48c8c 0%, #966e6e 100%);
        color: white;
        box-shadow: 0 25px 60px rgba(180, 140, 140, 0.45);
        transition: transform 0.4s ease;
    }
    
    .cta-wrapper:hover {
        transform: translateY(-5px);
    }

    .cta-decor {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        pointer-events: none;
    }
    .cd-1 { width: 300px; height: 300px; top: -100px; right: -50px; }
    .cd-2 { width: 400px; height: 400px; bottom: -150px; left: -100px; }
    
    .cta-wrapper::after {
        content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
    }

    .cta-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
        padding: 18px 55px;
        background: #ffffff;
        color: var(--color-primary-dark);
        text-decoration: none;
        border-radius: 50px;
        font-family: var(--font-serif);
        font-weight: 600;
        font-size: 1.1rem;
        letter-spacing: 0.5px;
        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        position: relative;
        z-index: 2;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .cta-btn svg {
        width: 18px; height: 18px; fill: currentColor;
        margin-left: 10px; transition: transform 0.3s ease;
    }

    .cta-btn:hover {
        transform: translateY(-4px);
        background: #fff;
        color: #724e4e;
        box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    }
    
    .cta-btn:hover svg {
        transform: translateX(5px);
    }

    @media (max-width: 768px) {
        .cta-wrapper { border-radius: 20px; padding: 60px 20px; }
    }
</style>
