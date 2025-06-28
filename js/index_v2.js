// =====================
// INDEX V2 - JAVASCRIPT MEJORADO CON EFECTOS AVANZADOS
// =====================

class XVInvitation {
    constructor() {
        this.currentSlide = -1;
        this.slides = [];
        this.music = null;
        this.musicToggle = null;
        this.musicIcon = null;
        this.customCursor = null;
        this.isFormVisible = false;
        this.formData = {};
        
        this.init();
    }

    init() {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.setupSlides();
        this.setupMariposas();
        this.setupMusic();
        this.setupCustomCursor();
        this.setupParallax();
        this.setupParticles();
        this.setupLoading();
        
        // Iniciar con el intro
        this.showSlide(-1);
    }

    // ===== CONFIGURACIÓN DE SLIDES =====
    setupSlides() {
        this.slides = [
            document.getElementById('intro'),
            document.getElementById('slide-0'),
            document.getElementById('slide-1'),
            document.getElementById('slide-2'),
            document.getElementById('slide-3'),
            document.getElementById('slide-4'),
            document.getElementById('slide-5')
        ];

        // Los typewriters se ejecutarán solo cuando se entre a cada slide
    }

    setupTypewriter() {
        const typedElement = document.getElementById('typed');
        console.log('setupTypewriter - Elemento encontrado:', typedElement);
        if (!typedElement) {
            console.log('setupTypewriter - Elemento no encontrado, saliendo');
            return;
        }

        const lines = [
            "Hace 15 años nació una hermosa niña, enviada por Dios para ser creada y formada como el más grande tesoro.",
            "Hay momentos en la vida que imaginamos, soñamos y esperamos.",
            "Uno de esos momentos ha llegado..."
        ];

        console.log('setupTypewriter - Iniciando typewriter con líneas:', lines);

        let lineIndex = 0;
        let charIndex = 0;
        let typingSpeed = 70;
        let currentLine = '';
        const timeouts = [];

        const typeLine = () => {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            if (charIndex < line.length) {
                currentLine += line[charIndex];
                typedElement.innerHTML = lines.slice(0, lineIndex).join('<br>') + (lineIndex > 0 ? '<br>' : '') + currentLine;
                charIndex++;
                timeouts.push(setTimeout(typeLine, typingSpeed));
            } else {
                lineIndex++;
                charIndex = 0;
                currentLine = '';
                timeouts.push(setTimeout(typeLine, 600));
            }
        };
        typeLine();
        this.typewriterTimeouts = timeouts;
        console.log('setupTypewriter - Typewriter iniciado');
    }

    setupTypewriter1() {
        const typedElement = document.getElementById('typed-1');
        console.log('setupTypewriter1 - Elemento encontrado:', typedElement);
        if (!typedElement) {
            console.log('setupTypewriter1 - Elemento no encontrado, saliendo');
            return;
        }

        const lines = [
            '<span class="destacado">Padrinos de honor</span>',
            'Susan Durand',
            'y',
            'Felicino Chamba'
        ];

        console.log('setupTypewriter1 - Iniciando typewriter con líneas:', lines);

        let lineIndex = 0;
        let charIndex = 0;
        let typingSpeed = 70;
        let currentLine = '';
        const timeouts = [];

        const typeLine = () => {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            if (charIndex < line.length) {
                currentLine += line[charIndex];
                typedElement.innerHTML = lines.slice(0, lineIndex).join('<br>') + (lineIndex > 0 ? '<br>' : '') + currentLine;
                charIndex++;
                timeouts.push(setTimeout(typeLine, typingSpeed));
            } else {
                lineIndex++;
                charIndex = 0;
                currentLine = '';
                timeouts.push(setTimeout(typeLine, 600));
            }
        };
        typeLine();
        this.typewriterTimeouts1 = timeouts;
        console.log('setupTypewriter1 - Typewriter iniciado');
    }

    setupTypewriter2() {
        const typedElement = document.getElementById('typed-2');
        console.log('setupTypewriter2 - Elemento encontrado:', typedElement);
        if (!typedElement) {
            console.log('setupTypewriter2 - Elemento no encontrado, saliendo');
            return;
        }

        const lines = [
            '<span class="destacado">Alex Becerra C.</span>',
            'y',
            '<span class="destacado">Nazia Durand C.</span>',
            'Tenemos el agrado de invitarlos',
            'a los XV años de nuestra hija.'
        ];

        console.log('setupTypewriter2 - Iniciando typewriter con líneas:', lines);

        let lineIndex = 0;
        let charIndex = 0;
        let typingSpeed = 70;
        let currentLine = '';
        const timeouts = [];

        const typeLine = () => {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            if (charIndex < line.length) {
                currentLine += line[charIndex];
                typedElement.innerHTML = lines.slice(0, lineIndex).join('<br>') + (lineIndex > 0 ? '<br>' : '') + currentLine;
                charIndex++;
                timeouts.push(setTimeout(typeLine, typingSpeed));
            } else {
                lineIndex++;
                charIndex = 0;
                currentLine = '';
                timeouts.push(setTimeout(typeLine, 600));
            }
        };
        typeLine();
        this.typewriterTimeouts2 = timeouts;
        console.log('setupTypewriter2 - Typewriter iniciado');
    }

    setupTypewriter4() {
        const typedElement = document.getElementById('typed-4');
        if (!typedElement) return;

        const lines = [
            'He aprendido que estar con quienes se quiere es para ser feliz. Ten por seguro que el tiempo y estas letras se borrarán, pero el recuerdo de tu presencia esta noche nunca lo olvidaré.'
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let typingSpeed = 50;
        let currentLine = '';
        const timeouts = [];

        const typeLine = () => {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            if (charIndex < line.length) {
                currentLine += line[charIndex];
                typedElement.innerHTML = lines.slice(0, lineIndex).join('<br>') + (lineIndex > 0 ? '<br>' : '') + currentLine;
                charIndex++;
                timeouts.push(setTimeout(typeLine, typingSpeed));
            } else {
                lineIndex++;
                charIndex = 0;
                currentLine = '';
                timeouts.push(setTimeout(typeLine, 600));
            }
        };
        typeLine();
        this.typewriterTimeouts4 = timeouts;
    }

    setupTypewriter5() {
        const typedElement = document.getElementById('typed-5');
        if (!typedElement) return;

        const lines = [
            `<div class='slide5-titulo'>
                <span class='slide5-mis'>Mis</span>
                <span class='slide5-quince'>15</span>
                <span class='slide5-anios'>años</span>
            </div>`,
            `<div class='slide5-nombre'>Cielo Noelia Saori</div>`,
            `<div class='slide5-subtitulo'>Acompáñame a celebrar este momento<br>tan importante en mi vida.</div>`,
            `<div class='slide5-datos'><span class='slide5-fecha'>05/07/2025 |</span><span class='slide5-hora'>| 8:00 p.m.</span></div>`,
            `<div class='slide5-direccion'>Av. Metropolitana 1306, Santa Anita.</div>`,
            `<div class='slide5-botones'>
                <div class='slide5-boton'>
                    <img src='/img/generar_codigo.png' alt='QR' class='slide5-icono'>
                    <div class='slide5-boton-titulo'>Confirma tu<br>asistencia</div>
                    <button id='btn-generar-codigo' class='slide5-boton-desc slide5-btn-link'>Da Click Aquí</button>
                </div>
                <div class='slide5-boton'>
                    <img src='/img/codigo_vestimenta.png' alt='Vestimenta' class='slide5-icono'>
                    <div class='slide5-boton-titulo'>Código de<br>vestuario</div>
                    <div class='slide5-boton-desc'>Formal</div>
                </div>
            </div>`
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let typingSpeed = 12;
        let currentLine = '';
        const timeouts = [];

        const typeLine = () => {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            if (charIndex < line.length) {
                currentLine += line[charIndex];
                typedElement.innerHTML = lines.slice(0, lineIndex).join('') + currentLine;
                charIndex++;
                timeouts.push(setTimeout(typeLine, typingSpeed));
            } else {
                lineIndex++;
                charIndex = 0;
                currentLine = '';
                timeouts.push(setTimeout(typeLine, 400));
            }
        };
        typeLine();
        this.typewriterTimeouts5 = timeouts;
    }

    // ===== CONFIGURACIÓN DE MARIPOSAS =====
    setupMariposas() {
        const mariposas = document.querySelectorAll('.mariposa');
        
        mariposas.forEach(mariposa => {
            mariposa.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleMariposaClick(mariposa);
            });

            // Efectos hover mejorados
            mariposa.addEventListener('mouseenter', () => {
                this.addHoverEffect(mariposa);
            });

            mariposa.addEventListener('mouseleave', () => {
                this.removeHoverEffect(mariposa);
            });
        });
    }

    handleMariposaClick(mariposa) {
        const slide = parseInt(mariposa.dataset.slide);
        const direction = mariposa.dataset.dir;

        console.log('Mariposa clickeada - Slide actual:', this.currentSlide, 'Direction:', direction);

        // Efecto de click
        this.addClickEffect(mariposa);

        switch (direction) {
            case 'next':
                console.log('Navegando al siguiente slide...');
                this.nextSlide();
                // Ejecutar typewriter del slide de destino después de la transición
                setTimeout(() => {
                    console.log('Ejecutando typewriter para slide:', this.currentSlide);
                    this.executeTypewriterForSlide(this.currentSlide);
                }, 300);
                break;
            case 'back':
                console.log('Navegando al slide anterior...');
                this.prevSlide();
                // Ejecutar typewriter del slide de destino después de la transición
                setTimeout(() => {
                    console.log('Ejecutando typewriter para slide:', this.currentSlide);
                    this.executeTypewriterForSlide(this.currentSlide);
                }, 300);
                break;
            case 'form':
                this.showForm();
                break;
            case 'extra':
                this.handleExtraAction();
                break;
        }
    }

    // Nueva función para ejecutar typewriter específico según el slide
    executeTypewriterForSlide(slideIndex) {
        switch (slideIndex) {
            case 0:
                const typedElement = document.getElementById('typed');
                console.log('Ejecutando typewriter para slide 0 - Elemento encontrado:', typedElement);
                if (typedElement) {
                    typedElement.innerHTML = '';
                    if (this.typewriterTimeouts) {
                        this.typewriterTimeouts.forEach(clearTimeout);
                    }
                    this.typewriterTimeouts = [];
                    console.log('Iniciando setupTypewriter para slide 0...');
                    this.setupTypewriter();
                }
                break;
            case 1:
                const typedElement1 = document.getElementById('typed-1');
                console.log('Ejecutando typewriter para slide 1 - Elemento encontrado:', typedElement1);
                if (typedElement1) {
                    typedElement1.innerHTML = '';
                    if (this.typewriterTimeouts1) {
                        this.typewriterTimeouts1.forEach(clearTimeout);
                    }
                    this.typewriterTimeouts1 = [];
                    console.log('Iniciando setupTypewriter1 para slide 1...');
                    this.setupTypewriter1();
                }
                break;
            case 2:
                const typedElement2 = document.getElementById('typed-2');
                console.log('Ejecutando typewriter para slide 2 - Elemento encontrado:', typedElement2);
                if (typedElement2) {
                    typedElement2.innerHTML = '';
                    if (this.typewriterTimeouts2) {
                        this.typewriterTimeouts2.forEach(clearTimeout);
                    }
                    this.typewriterTimeouts2 = [];
                    console.log('Iniciando setupTypewriter2 para slide 2...');
                    this.setupTypewriter2();
                }
                break;
            case 4:
                const typedElement4 = document.getElementById('typed-4');
                if (typedElement4) {
                    typedElement4.innerHTML = '';
                    if (this.typewriterTimeouts4) {
                        this.typewriterTimeouts4.forEach(clearTimeout);
                    }
                    this.typewriterTimeouts4 = [];
                    this.setupTypewriter4();
                }
                break;
            case 5:
                const typedElement5 = document.getElementById('typed-5');
                if (typedElement5) {
                    typedElement5.innerHTML = '';
                    if (this.typewriterTimeouts5) {
                        this.typewriterTimeouts5.forEach(clearTimeout);
                    }
                    this.typewriterTimeouts5 = [];
                    this.setupTypewriter5();
                }
                break;
        }
    }

    addHoverEffect(mariposa) {
        mariposa.style.transform = 'scale(1.3) rotate(5deg)';
        mariposa.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))';
        
        // Agregar partículas alrededor
        this.createHoverParticles(mariposa);
    }

    removeHoverEffect(mariposa) {
        mariposa.style.transform = '';
        mariposa.style.filter = '';
    }

    addClickEffect(mariposa) {
        mariposa.style.transform = 'scale(0.8)';
        setTimeout(() => {
            mariposa.style.transform = '';
        }, 150);
    }

    createHoverParticles(mariposa) {
        const rect = mariposa.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'hover-particle';
            particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #ff6b9d, #c44569);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                animation: hoverParticle 1s ease-out forwards;
            `;

            document.body.appendChild(particle);

            // Animar partícula
            const angle = (i * 72) * Math.PI / 180;
            const distance = 50;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }

    // ===== NAVEGACIÓN DE SLIDES =====
    showSlide(slideIndex) {
        console.log('showSlide llamado con índice:', slideIndex);
        
        // Ocultar slide actual
        if (this.currentSlide >= -1) {
            const currentArrayIndex = this.currentSlide === -1 ? 0 : this.currentSlide + 1;
            if (this.slides[currentArrayIndex]) {
                this.slides[currentArrayIndex].classList.remove('active');
                this.slides[currentArrayIndex].classList.add('prev');
            }
        }

        // Mostrar nuevo slide
        this.currentSlide = slideIndex;
        console.log('Slide actual actualizado a:', this.currentSlide);
        
        // Convertir slideIndex a índice del array (intro = 0, slide-0 = 1, etc.)
        const arrayIndex = slideIndex === -1 ? 0 : slideIndex + 1;
        
        if (this.slides[arrayIndex]) {
            this.slides[arrayIndex].classList.add('active');
            this.slides[arrayIndex].classList.remove('prev');
            console.log('Slide', slideIndex, 'activado correctamente (índice array:', arrayIndex, ')');
        } else {
            console.log('ERROR: Slide', slideIndex, 'no encontrado (índice array:', arrayIndex, ')');
        }

        // Efectos adicionales según el slide
        this.addSlideEffects(slideIndex);
    }

    nextSlide() {
        const nextIndex = this.currentSlide + 1;
        if (nextIndex < this.slides.length) {
            this.showSlide(nextIndex);
        }
    }

    prevSlide() {
        const prevIndex = this.currentSlide - 1;
        if (prevIndex >= -1) {
            this.showSlide(prevIndex);
        }
    }

    addSlideEffects(slideIndex) {
        // Efectos específicos por slide
        switch (slideIndex) {
            case 0: // Typewriter slide
                this.addTypewriterEffects();
                break;
            case 2: // Fecha y lugar
                this.addDateEffects();
                break;
            case 4: // Formulario
                this.addFormEffects();
                break;
        }
    }

    addTypewriterEffects() {
        const tiara = document.querySelector('.tiara');
        if (tiara) {
            tiara.style.animation = 'tiaraGlow 2s ease-in-out infinite, bounce 3s ease-in-out infinite';
        }
    }

    addDateEffects() {
        const slideText = document.querySelector('#slide-2 .slide-text');
        if (slideText) {
            slideText.style.animation = 'pulse 2s ease-in-out infinite';
        }
    }

    addFormEffects() {
        const slideText = document.querySelector('#slide-4 .slide-text');
        if (slideText) {
            slideText.style.animation = 'bounce 2s ease-in-out infinite';
        }
    }

    // ===== CONFIGURACIÓN DE MÚSICA =====
    setupMusic() {
        this.music = document.getElementById('bg-music');
        this.musicToggle = document.getElementById('music-toggle');
        this.musicIcon = document.getElementById('music-icon');

        if (this.music && this.musicToggle) {
            // Configurar volumen
            this.music.volume = 0.3;

            // Manejar autoplay
            this.music.addEventListener('canplaythrough', () => {
                this.music.play().catch(() => {
                    console.log('Autoplay bloqueado por el navegador');
                });
            });

            // Toggle de música
            this.musicToggle.addEventListener('click', () => {
                this.toggleMusic();
            });

            // Actualizar icono según estado
            this.updateMusicIcon();
        }
    }

    toggleMusic() {
        if (this.music.paused) {
            this.music.play();
            this.musicToggle.classList.remove('paused');
        } else {
            this.music.pause();
            this.musicToggle.classList.add('paused');
        }
        this.updateMusicIcon();
    }

    updateMusicIcon() {
        if (this.musicIcon) {
            this.musicIcon.textContent = this.music.paused ? '🔇' : '🎵';
        }
    }

    // ===== CURSOR PERSONALIZADO =====
    setupCustomCursor() {
        this.customCursor = document.getElementById('custom-cursor');
        
        if (this.customCursor) {
            document.addEventListener('mousemove', (e) => {
                this.customCursor.style.left = e.clientX + 'px';
                this.customCursor.style.top = e.clientY + 'px';
            });

            // Efectos de hover para elementos interactivos
            const interactiveElements = document.querySelectorAll('.mariposa, button, input, select');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    this.customCursor.style.transform = 'translate(-50%, -50%) scale(2)';
                    this.customCursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)';
                });

                element.addEventListener('mouseleave', () => {
                    this.customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    this.customCursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)';
                });
            });
        }
    }

    // ===== EFECTOS PARALLAX =====
    setupParallax() {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            // Mover elementos de fondo
            const clouds = document.querySelectorAll('.cloud');
            const stars = document.querySelectorAll('.star');
            const particles = document.querySelectorAll('.particle');

            clouds.forEach((cloud, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 30;
                cloud.style.transform = `translate(${x}px, ${y}px)`;
            });

            stars.forEach((star, index) => {
                const speed = (index + 1) * 0.3;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 15;
                star.style.transform = `translate(${x}px, ${y}px)`;
            });

            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.2;
                const x = (mouseX - 0.5) * speed * 30;
                const y = (mouseY - 0.5) * speed * 20;
                particle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // ===== SISTEMA DE PARTÍCULAS =====
    setupParticles() {
        // Crear partículas adicionales dinámicamente
        setInterval(() => {
            this.createRandomParticle();
        }, 3000);
    }

    createRandomParticle() {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        particle.style.cssText = `
            position: fixed;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 10}px;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: linear-gradient(45deg, 
                hsl(${Math.random() * 60 + 300}, 70%, 60%), 
                hsl(${Math.random() * 60 + 320}, 70%, 60%));
            border-radius: 50%;
            pointer-events: none;
            z-index: 5;
            animation: dynamicParticleFloat 8s linear forwards;
        `;

        document.body.appendChild(particle);

        // Remover partícula después de la animación
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // ===== LOADING SCREEN =====
    setupLoading() {
        // Crear loading screen con imagen y brillitos
        const loading = document.createElement('div');
        loading.className = 'loading';
        loading.innerHTML = `<img src="/img/loading.png" alt="Cargando..." class="loading-img">
            <div class="loading-sparkles"></div>`;
        document.body.appendChild(loading);

        // Crear brillitos animados
        for (let i = 0; i < 18; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = (Math.random() * 2) + 's';
            loading.querySelector('.loading-sparkles').appendChild(sparkle);
        }

        // Simular carga
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                if (loading.parentNode) {
                    loading.parentNode.removeChild(loading);
                }
            }, 500);
        }, 4000);
    }

    // ===== ACCIONES EXTRA =====
    handleExtraAction() {
        // Efecto especial para el botón extra
        this.createSpecialEffect();
    }

    createSpecialEffect() {
        // Crear efecto de explosión de partículas
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 8px;
                height: 8px;
                background: linear-gradient(45deg, #ff6b9d, #c44569, #f093fb);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `;

            document.body.appendChild(particle);

            const angle = (i * 18) * Math.PI / 180;
            const distance = 100;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }

    // ===== NUEVO FORMULARIO DINÁMICO =====
    showForm() {
        // Crear formulario
        this.crearFormularioRegistro();
    }
}

// ===== INICIALIZACIÓN =====
// Crear instancia cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const app = new XVInvitation();
    window.xvApp = app; // Asegurar que la instancia esté disponible globalmente
    // Mostrar tutorial automáticamente en móvil después de 5 segundos
    if (window.innerWidth <= 600) {
        setTimeout(() => {
            const overlay = document.getElementById('tutorial-overlay');
            const main = document.getElementById('main-container');
            if (overlay) {
                overlay.style.display = 'flex';
                if (main) main.style.filter = 'blur(6px)';
            }
        }, 5000);
        const btn = document.getElementById('tutorial-ok-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const overlay = document.getElementById('tutorial-overlay');
                const main = document.getElementById('main-container');
                if (overlay) overlay.style.display = 'none';
                if (main) main.style.filter = '';
            });
        }
    }

    // Mostrar overlay de nota al dar click en el botón
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'btn-generar-codigo') {
            e.preventDefault();
            const overlay = document.getElementById('nota-overlay');
            if (overlay) overlay.style.display = 'flex';
        }
        if (e.target && e.target.id === 'nota-ok-btn') {
            e.preventDefault();
            const overlay = document.getElementById('nota-overlay');
            if (overlay) overlay.style.display = 'none';
            // Mostrar el nuevo formulario dinámico
            if (window.crearFormularioRegistro) {
                window.crearFormularioRegistro();
            }
        }
    });
});

// ===== CSS DINÁMICO PARA ANIMACIONES =====
const dynamicStyles = `
    @keyframes hoverParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--endX), var(--endY)) scale(0);
            opacity: 0;
        }
    }

    @keyframes dynamicParticleFloat {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

// Agregar estilos dinámicos al head
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// ===== FORMULARIO ELEGANTE DESDE CERO =====
function crearFormularioRegistro() {
    // Usar el contenedor existente
    const formContainer = document.getElementById('form-container');
    if (!formContainer) return;
    formContainer.innerHTML = '';
    formContainer.classList.add('show');
    formContainer.style.display = 'flex';
    formContainer.style.alignItems = 'center';
    formContainer.style.justifyContent = 'center';
    formContainer.style.zIndex = '1000';
    formContainer.style.background = 'rgba(255,255,255,0.72)';
    formContainer.style.padding = '0';

    // Botón volver
    const btnVolver = document.createElement('button');
    btnVolver.textContent = '← Volver';
    btnVolver.className = 'btn-volver';
    btnVolver.style.position = 'fixed';
    btnVolver.style.top = '24px';
    btnVolver.style.left = '24px';
    btnVolver.style.background = 'rgba(255,255,255,0.3)';
    btnVolver.style.color = '#8b5a8b';
    btnVolver.style.border = '1.5px solid rgba(255,255,255,0.5)';
    btnVolver.style.padding = '10px 20px';
    btnVolver.style.borderRadius = '25px';
    btnVolver.style.fontFamily = "'Alex Brush', cursive";
    btnVolver.style.fontSize = '1.1rem';
    btnVolver.style.backdropFilter = 'blur(15px)';
    btnVolver.style.cursor = 'pointer';
    btnVolver.style.zIndex = '1001';
    btnVolver.onclick = () => {
        formContainer.classList.remove('show');
        formContainer.style.display = 'none';
    };
    formContainer.appendChild(btnVolver);

    // Crear formulario principal
    const formUI = document.createElement('form');
    formUI.id = 'form-registro-xv';
    formUI.style.background = 'rgba(255,255,255,0.72)';
    formUI.style.borderRadius = '28px';
    formUI.style.padding = '2.2rem 1.5rem';
    formUI.style.maxWidth = '420px';
    formUI.style.width = '95vw';
    formUI.style.maxHeight = '80vh';
    formUI.style.overflowY = 'auto';
    formUI.style.boxShadow = '0 12px 40px 0 rgba(139,90,139,0.22), 0 2px 12px rgba(139,90,139,0.13)';
    formUI.style.position = 'relative';
    formUI.style.margin = '0 auto';
    formUI.style.display = 'flex';
    formUI.style.flexDirection = 'column';
    formUI.style.gap = '1.2rem';
    formUI.style.color = '#6d3576';
    formUI.style.zIndex = '10';
    formUI.style.alignSelf = 'center';
    formUI.style.justifySelf = 'center';
    formUI.style.backdropFilter = 'blur(16px)';
    formUI.style.border = '1.5px solid rgba(221,160,221,0.18)';

    formUI.innerHTML = `
        <h2 style="color:#8b5a8b;font-family:'Alex Brush',cursive;font-size:2.1rem;text-align:center;margin-bottom:1.2rem;">Confirma tu asistencia</h2>
        <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required autocomplete="off" />
        </div>
        <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required autocomplete="off" />
        </div>
        <div class="form-group">
            <label for="cantidad">Cantidad de invitados (incluyéndote):</label>
            <select id="cantidad" name="cantidad" required>
                <option value="1">1 (solo yo)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div id="invitados-extra"></div>
        <div class="form-group">
            <label for="movil">Tu número de WhatsApp:</label>
            <input type="text" id="movil" name="movil" required placeholder="Solo números" autocomplete="off" />
        </div>
        <button type="submit" style="
            background: linear-gradient(90deg, #bc6e6e 0%, #dda0dd 100%);
            color: #fff;
            border: none;
            padding: 1.1rem 2.5rem;
            border-radius: 25px;
            font-size: 1.15rem;
            font-family: 'Alex Brush', cursive;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(221,160,221,0.18);
            margin-top: 1.2rem;
            margin-bottom: 2rem;
            text-align: center;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            justify-content: center;
        ">Confirmar asistencia</button>
    `;

    // Generar campos de invitados extra dinámicamente
    const cantidadSelect = formUI.querySelector('#cantidad');
    const invitadosExtraDiv = formUI.querySelector('#invitados-extra');
    cantidadSelect.addEventListener('change', function() {
        const cantidad = parseInt(this.value);
        invitadosExtraDiv.innerHTML = '';
        for (let i = 2; i <= cantidad; i++) {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `<label for="invitado_${i-1}">Nombre del invitado ${i-1}:</label><input type="text" id="invitado_${i-1}" name="invitado_${i-1}" required autocomplete="off" />`;
            invitadosExtraDiv.appendChild(div);
        }
    });

    // Envío del formulario
    formUI.onsubmit = async function(e) {
        e.preventDefault();
        const fd = new FormData(formUI);
        // Validar número de WhatsApp (8 a 15 dígitos, solo números)
        const movil = fd.get('movil').replace(/\s+/g, '');
        if (!/^\d{8,15}$/.test(movil)) {
            alert('Por favor ingresa un número de WhatsApp válido (solo números, de 8 a 15 dígitos, sin espacios ni símbolos).');
            formUI.querySelector('#movil').focus();
            return;
        }
        // Generar ID único
        const id = 'XV_' + Date.now() + '_' + Math.floor(Math.random()*10000);
        const cantidad = parseInt(fd.get('cantidad'));
        const datos = {
            data: {
                id: id,
                nombre: fd.get('nombre'),
                apellido: fd.get('apellido'),
                cantidad_invitados: cantidad,
                movil: movil
            }
        };
        for (let i = 2; i <= cantidad; i++) {
            datos.data[`invitado_${i-1}`] = fd.get(`invitado_${i-1}`);
        }
        try {
            await fetch('https://sheetdb.io/api/v1/fouso319wc8rv', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(datos)
            });
            formContainer.innerHTML = `<div style='text-align:center;padding:2rem;'><h2 style='color:#8b5a8b;font-family:"Alex Brush",cursive;font-size:2.2rem;margin-bottom:1rem;'>¡Gracias! ✨</h2><p style='color:#8b5a8b;font-size:1.2rem;margin-bottom:1rem;'>Tu confirmación ha sido recibida exitosamente.<br>Recibirás tu entrada por WhatsApp.</p><button onclick='location.reload()' style='background:linear-gradient(135deg,#dda0dd,#ffb6c1);color:white;border:none;padding:1rem 2rem;border-radius:25px;font-size:1.2rem;font-family:"Alex Brush",cursive;cursor:pointer;transition:all 0.3s ease;box-shadow:0 8px 25px rgba(221,160,221,0.3);'>Volver al inicio</button></div>`;
        } catch (error) {
            formContainer.innerHTML = `<div style='text-align:center;padding:2rem;'><h2 style='color:#e74c3c;font-family:"Alex Brush",cursive;font-size:2.2rem;margin-bottom:1rem;'>¡Ups! 😔</h2><p style='color:#8b5a8b;font-size:1.2rem;margin-bottom:2rem;'>Hubo un error al enviar los datos. Por favor, intenta de nuevo.</p><button onclick='location.reload()' style='background:linear-gradient(135deg,#dda0dd,#ffb6c1);color:white;border:none;padding:1rem 2rem;border-radius:25px;font-size:1.2rem;font-family:"Alex Brush",cursive;cursor:pointer;transition:all 0.3s ease;box-shadow:0 8px 25px rgba(221,160,221,0.3);'>Intentar de nuevo</button></div>`;
        }
    };
    formContainer.appendChild(formUI);
}

window.crearFormularioRegistro = crearFormularioRegistro; 
