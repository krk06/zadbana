<script>
  import Navbar from './lib/components/Navbar.svelte';
  import BlobBackground from './lib/components/BlobBackground.svelte';
  import HeroQuote from './lib/components/HeroQuote.svelte';
  import FeatureSection from './lib/components/FeatureSection.svelte';
  import ReasonsSection from './lib/components/ReasonsSection.svelte';
  import LocationSection from './lib/components/LocationSection.svelte';
  import CtaSection from './lib/components/CtaSection.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="zadbana-wrapper">
  <Navbar />
  <BlobBackground />
  <HeroQuote />
  <FeatureSection />
  <ReasonsSection />
  <LocationSection />
  <CtaSection />
  <Footer />
</div>

<style>
  .zadbana-wrapper {
      font-family: var(--font-main);
      position: relative;
      overflow-x: hidden;
      min-height: 100vh;
  }
</style>
