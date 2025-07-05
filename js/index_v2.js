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
            `<div class='slide5-mensaje-final'>
                Gracias por tu participación e interés.<br>
                <span style='font-size:1.1em;'>La página ya está cerrada.</span><br><br>
                <span style='font-size:0.95em;'>Con el corazón rebosante de ilusión y gratitud, cerramos esta invitación. Será un honor compartir contigo la magia de este día tan especial, que atesoraremos por siempre en nuestros recuerdos. Te esperamos con todo nuestro cariño para celebrar juntos mis quince años.</span>
            </div>`
        ];

        let lineIndex = 0;
        const timeouts = [];

        const typeLine = () => {
            if (lineIndex >= lines.length) return;
            // Mostrar todos los bloques anteriores normalmente
            let html = '';
            for (let i = 0; i < lineIndex; i++) {
                html += lines[i];
            }
            // El bloque actual con animación
            html += `<div class="fade-in-up">${lines[lineIndex]}</div>`;
            typedElement.innerHTML = html;
            lineIndex++;
            if (lineIndex < lines.length) {
                timeouts.push(setTimeout(typeLine, 700));
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
        // Comentado: El formulario ya no está disponible
        // this.crearFormularioRegistro();
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
