/**
 * Svelte Action do obsługi animacji pojawiania się elementów podczas przewijania.
 * Dodaje klasę 'active' gdy element wejdzie w obszar widzenia.
 */
export function reveal(node) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
