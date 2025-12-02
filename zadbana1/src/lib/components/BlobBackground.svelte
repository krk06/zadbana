<div class="ambient-bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
</div>

<style>
    .ambient-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
        
        -webkit-mask-image: radial-gradient(ellipse at center, 
            black 30%, 
            rgba(0,0,0,0.8) 60%, 
            transparent 100%
        );
        mask-image: radial-gradient(ellipse at center, 
            black 30%, 
            rgba(0,0,0,0.8) 60%, 
            transparent 100%
        );
    }

    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px); 
        opacity: 0.5; 
        animation: floatBlob 20s infinite ease-in-out alternate;
    }

    .blob-1 { top: 10%; left: 10%; width: 50vw; height: 50vw; background: #f0e6e6; animation-delay: 0s; }
    .blob-2 { bottom: 10%; right: 10%; width: 60vw; height: 60vw; background: #e8dcdc; animation-delay: -5s; }
    .blob-3 { top: 40%; left: 30%; width: 40vw; height: 40vw; background: rgba(180, 140, 140, 0.15); animation-delay: -10s; }

    @keyframes floatBlob {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(30px, 50px) scale(1.1); }
    }
</style>
