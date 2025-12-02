<script>
  let services = [
    { name: 'Manicure Hybrydowy', price: '120 zł', description: 'Pełna pielęgnacja dłoni i paznokci z malowaniem.' },
    { name: 'Pedicure SPA', price: '150 zł', description: 'Relaksująca kąpiel, peeling i pielęgnacja stóp.' },
    { name: 'Zabieg na Twarz "Glow"', price: '200 zł', description: 'Nawilżający i rozświetlający zabieg dla każdego typu cery.' },
    { name: 'Masaż Relaksacyjny', price: '180 zł', description: 'Godzinny masaż całego ciała olejkami eterycznymi.' }
  ];
</script>

<header>
  <nav>
    <div class="logo">Glow & Grace</div>
    <ul>
      <li><a href="#home">Start</a></li>
      <li><a href="#services">Usługi</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Odkryj swoje piękno</h1>
      <p>Profesjonalna pielęgnacja w relaksującej atmosferze.</p>
      <button on:click={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})}>
        Umów wizytę
      </button>
    </div>
  </section>

  <section id="services" class="services">
    <h2>Nasze Usługi</h2>
    <div class="service-grid">
      {#each services as service}
        <div class="service-card">
          <h3>{service.name}</h3>
          <p class="price">{service.price}</p>
          <p class="description">{service.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Kontakt</h2>
    <p>Zadzwoń do nas: <strong>+48 123 456 789</strong></p>
    <p>Odwiedź nas: ul. Piękna 15, 00-001 Warszawa</p>
    <p>Godziny otwarcia: Pon-Pt 9:00 - 20:00, Sob 10:00 - 16:00</p>
  </section>
</main>

<footer>
  <p>&copy; 2025 Glow & Grace Beauty Salon. Wszelkie prawa zastrzeżone.</p>
</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  header {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #d63384; /* Pink */
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }

  nav a:hover {
    color: #d63384;
  }

  .hero {
    background-color: #fdf2f8; /* Very light pink */
    padding: 5rem 2rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }

  button {
    background-color: #d63384;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #b02a6c;
  }

  .services {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.3s;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-card h3 {
    color: #333;
    margin-top: 0;
  }

  .price {
    color: #d63384;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .contact {
    background-color: #f8f9fa;
    padding: 4rem 2rem;
    text-align: center;
  }

  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: auto;
  }
</style>