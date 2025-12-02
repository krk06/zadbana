<script>
    import { reveal } from '../reveal';
</script>

<section class="z-section" id="kontakt">
    <div class="z-container">
        <div use:reveal class="glass-card reveal-up">
            <h2 class="z-title">Jak Do Nas Dojechać</h2>
            <div class="location-grid">
                
                <div>
                    <ul class="location-list">
                        <li class="location-item">
                            <h4>Z centrum Nowego Sącza</h4>
                            <p>Jedź drogą 75 w kierunku Gorlic lub alternatywnie przez Kamionkę Wielką. Dojazd zajmie około 15-20 minut. Gabinet znajduje się w centralnej części Ptaszkowej.</p>
                        </li>
                        <li class="location-item">
                            <h4>Z Grybowa</h4>
                            <p>Około 10 minut jazdy drogą lokalną. Prosta, wygodna trasa.</p>
                        </li>
                        <li class="location-item">
                            <h4>Komunikacja publiczna</h4>
                            <p>Ptaszkowa posiada bezpośrednie połączenie autobusowe z Nowym Sączem i Grybowem. Przystanek znajduje się blisko gabinetu.</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="z-title alt-title">Doświadczenie, Które Docenisz</h3>
                    <p class="desc-text">
                        Dbam o to, by każda wizyta w moim salonie kosmetycznym była wyjątkowym doświadczeniem – od pierwszych minut czujesz się wyjątkowo, a moja życzliwa atmosfera pozwala zapomnieć o codziennych troskach.
                    </p>
                    <p class="desc-text">
                        Wiele moich klientek podkreśla, że <strong>wybór salonu kosmetycznego w Ptaszkowej zamiast w centrum Nowego Sącza był najlepszą decyzją</strong> – mniejszy stres związany z dojazdem i parkowaniem oraz spokojniejsza atmosfera.
                    </p>
                </div>

            </div>
        </div>
    </div>
</section>

<style>
    .location-grid {
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
        gap: 40px; 
        align-items: start;
    }

    .alt-title {
        font-size: 1.8rem; text-align: left; margin-top: 0;
    }

    .desc-text {
        color: var(--color-text-light); margin-bottom: 20px;
    }

    .location-list {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
    }

    .location-item {
        position: relative;
        padding-left: 30px;
        margin-bottom: 25px;
        border-left: 2px solid rgba(180, 140, 140, 0.2);
        padding-bottom: 25px;
    }
    
    .location-item:last-child {
        border-left: none; padding-bottom: 0;
    }

    .location-item::before {
        content: '';
        position: absolute;
        left: -6px;
        top: 0;
        width: 10px; height: 10px;
        border-radius: 50%;
        background: var(--color-primary);
        box-shadow: 0 0 0 4px rgba(180, 140, 140, 0.2);
    }

    .location-item h4 {
        font-family: var(--font-serif);
        font-size: 1.2rem;
        margin: 0 0 8px 0;
        color: var(--color-text);
    }

    .location-item p {
        margin: 0;
        font-size: 1rem;
        color: var(--color-text-light);
    }

    @media(max-width: 768px) {
        .alt-title { text-align: center; }
    }
</style>
