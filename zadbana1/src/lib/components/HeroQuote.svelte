<script>
    import { reveal } from '../reveal';
</script>

<section class="z-section quote-section" id="o-mnie">
    <div class="z-container">
        <div use:reveal class="reveal-up">
            <p class="main-quote">"Miejsce, gdzie profesjonalizm spotyka się z indywidualnym podejściem"</p>
        </div>
        <div use:reveal class="z-text reveal-up delay-1">
            <p>W sercu Ptaszkowej, zaledwie 14 km od centrum Nowego Sącza, znajdziesz miejsce, w którym profesjonalizm spotyka się z indywidualnym podejściem do każdej klientki. <strong>Gabinet kosmetyczny Zadbana</strong> to kameralna przestrzeń stworzona z myślą o tych, którzy cenią sobie komfort, dyskrecję oraz wysoką jakość usług kosmetycznych.</p>
        </div>
        <div use:reveal class="z-text reveal-up delay-2">
            <p>Jestem pasjonatką kosmetologii holistycznej, która nieustannie poszerza swoją wiedzę i umiejętności, śledząc najnowsze trendy w branży kosmetycznej i ucząc się od najlepszych specjalistów w Polsce i na świecie. Moją misją jest zapewnienie najwyższej jakości zabiegów kosmetycznych w kameralnej, przyjaznej atmosferze – z dala od zgiełku centrum miasta.</p>
        </div>
    </div>
</section>

<style>
    .quote-section {
        text-align: center;
        padding-top: 180px; /* Więcej miejsca od góry ze względu na fixed navbar */
        padding-bottom: 80px;
    }

    .main-quote {
        font-family: var(--font-serif);
        font-size: 2.2rem;
        font-style: italic;
        color: var(--color-text);
        line-height: 1.4;
        margin-bottom: 40px;
        position: relative;
        display: inline-block;
    }

    .main-quote::after {
        content: "";
        display: block;
        width: 60px;
        height: 2px;
        background: var(--color-primary);
        margin: 30px auto 0;
    }

    @media (max-width: 768px) {
        .quote-section { padding-top: 140px; }
        .main-quote { font-size: 1.5rem; }
    }
</style>
