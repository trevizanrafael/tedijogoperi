document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-button');
    const instructionsPanel = document.querySelector('.instructions-panel');
    const submenu = document.querySelector('.submenu');
    const returnButtons = document.querySelectorAll('.return-button');
    const menuContainer = document.querySelector('.menu');
    
    // Add entrance animation to main elements
    document.querySelector('header').classList.add('fade-in');
    menuContainer.classList.add('fade-in');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual effect on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Logic for each button
            const action = this.getAttribute('data-action');
            
            switch(action) {
                case 'start':
                    console.log('Showing submenu...');
                    menuContainer.style.display = 'none';
                    submenu.style.display = 'flex';
                    submenu.classList.add('slide-in');
                    break;
                case 'instructions':
                    console.log('Opening instructions...');
                    menuContainer.style.display = 'none';
                    instructionsPanel.style.display = 'block';
                    instructionsPanel.classList.add('fade-in');
                    break;
            }
        });
        
        // Add hover sound effect
        button.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Logic for return buttons
    returnButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual effect on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Hide panels and show main menu
            instructionsPanel.style.display = 'none';
            submenu.style.display = 'none';
            menuContainer.style.display = 'flex';
            menuContainer.classList.add('fade-in');
        });
        
        // Add hover sound effect
        button.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Submenu buttons
    const submenuButtons = document.querySelectorAll('.submenu-button');
    submenuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Visual effect on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            const mode = this.getAttribute('data-mode');
            console.log(`Starting learning mode: ${mode}`);
            if (mode === 'keyboard') {
                document.querySelector('.submenu').style.display = 'none';
                const keyboardLearningContainer = document.createElement('div');
                keyboardLearningContainer.className = 'keyboard-learning-container';
                document.querySelector('main').appendChild(keyboardLearningContainer);
                
                // Initialize keyboard learning content
                function initKeyboardLearning() {
                    keyboardLearningContainer.innerHTML = `
                        <div class="keyboard-learning-header">
                            <h2>Aprendendo o Teclado</h2>
                            <p>Pratique a digitação seguindo as instruções e observando o teclado virtual</p>
                        </div>
                        
                        <div class="keyboard-container">
                            <div class="keyboard">
                                <div class="keyboard-row">
                                    <div class="key" data-key="Escape">ESC</div>
                                    <div class="key" data-key="1">1</div>
                                    <div class="key" data-key="2">2</div>
                                    <div class="key" data-key="3">3</div>
                                    <div class="key" data-key="4">4</div>
                                    <div class="key" data-key="5">5</div>
                                    <div class="key" data-key="6">6</div>
                                    <div class="key" data-key="7">7</div>
                                    <div class="key" data-key="8">8</div>
                                    <div class="key" data-key="9">9</div>
                                    <div class="key" data-key="0">0</div>
                                    <div class="key" data-key="-">-</div>
                                    <div class="key" data-key="=">=</div>
                                    <div class="key" data-key="Backspace">⌫</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key" data-key="Tab">⇥</div>
                                    <div class="key" data-key="q">Q</div>
                                    <div class="key" data-key="w">W</div>
                                    <div class="key" data-key="e">E</div>
                                    <div class="key" data-key="r">R</div>
                                    <div class="key" data-key="t">T</div>
                                    <div class="key" data-key="y">Y</div>
                                    <div class="key" data-key="u">U</div>
                                    <div class="key" data-key="i">I</div>
                                    <div class="key" data-key="o">O</div>
                                    <div class="key" data-key="p">P</div>
                                    <div class="key" data-key="[">[</div>
                                    <div class="key" data-key="]">]</div>
                                    <div class="key" data-key="\\">\\</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key" data-key="CapsLock">Caps</div>
                                    <div class="key" data-key="a">A</div>
                                    <div class="key" data-key="s">S</div>
                                    <div class="key" data-key="d">D</div>
                                    <div class="key" data-key="f">F</div>
                                    <div class="key" data-key="g">G</div>
                                    <div class="key" data-key="h">H</div>
                                    <div class="key" data-key="j">J</div>
                                    <div class="key" data-key="k">K</div>
                                    <div class="key" data-key="l">L</div>
                                    <div class="key" data-key=";">;</div>
                                    <div class="key" data-key="'">'</div>
                                    <div class="key" data-key="Enter">⏎</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key" data-key="Shift">⇧</div>
                                    <div class="key" data-key="z">Z</div>
                                    <div class="key" data-key="x">X</div>
                                    <div class="key" data-key="c">C</div>
                                    <div class="key" data-key="v">V</div>
                                    <div class="key" data-key="b">B</div>
                                    <div class="key" data-key="n">N</div>
                                    <div class="key" data-key="m">M</div>
                                    <div class="key" data-key=",">,</div>
                                    <div class="key" data-key=".">.</div>
                                    <div class="key" data-key="/">/</div>
                                    <div class="key" data-key="Shift">⇧</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key" data-key="Control">Ctrl</div>
                                    <div class="key" data-key="Alt">Alt</div>
                                    <div class="key" data-key="Space">Espaço</div>
                                    <div class="key" data-key="Alt">Alt</div>
                                    <div class="key" data-key="Control">Ctrl</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="practice-area">
                            <div class="target-text">Digite: "ola"</div>
                            <input type="text" class="user-input-field" placeholder="Digite aqui" autocomplete="off">
                            <div class="feedback-message"></div>
                        </div>
                        
                        <div class="progress-bar-container">
                            <div class="progress-bar"></div>
                        </div>
                        
                        <div class="lesson-controls">
                            <button class="lesson-button return-button">Voltar ao Menu</button>
                            <button class="lesson-button next-button" disabled>Próximo</button>
                        </div>
                    `;
                    
                    // Setup event listeners
                    setupKeyboardEvents();
                    
                    // Return button should go back to submenu
                    keyboardLearningContainer.querySelector('.return-button').addEventListener('click', function() {
                        keyboardLearningContainer.style.display = 'none';
                        document.querySelector('.submenu').style.display = 'flex';
                    });
                }
                
                // Setup keyboard event handlers
                function setupKeyboardEvents() {
                    const userInput = keyboardLearningContainer.querySelector('.user-input-field');
                    const targetText = keyboardLearningContainer.querySelector('.target-text');
                    const feedbackMessage = keyboardLearningContainer.querySelector('.feedback-message');
                    const nextButton = keyboardLearningContainer.querySelector('.next-button');
                    const progressBar = keyboardLearningContainer.querySelector('.progress-bar');
                    const keys = keyboardLearningContainer.querySelectorAll('.key');
                    
                    let currentLesson = 1;
                    const totalLessons = 5;
                    
                    // Lessons data
                    const lessons = [
                        { text: "ola", description: "Digite: \"ola\"" },
                        { text: "casa", description: "Digite: \"casa\"" },
                        { text: "teclado", description: "Digite: \"teclado\"" },
                        { text: "computador", description: "Digite: \"computador\"" },
                        { text: "aprendendo a digitar", description: "Digite: \"aprendendo a digitar\"" }
                    ];
                    
                    // Focus input when clicking anywhere in practice area
                    keyboardLearningContainer.querySelector('.practice-area').addEventListener('click', function() {
                        userInput.focus();
                    });
                    
                    // Key highlight on keyboard press
                    userInput.addEventListener('keydown', function(e) {
                        const key = e.key.toLowerCase();
                        
                        // Find and highlight pressed key
                        keys.forEach(keyElement => {
                            const dataKey = keyElement.getAttribute('data-key').toLowerCase();
                            if (dataKey === key || 
                                (key === ' ' && dataKey === 'space') ||
                                (key === 'enter' && dataKey === 'enter') ||
                                (key === 'shift' && dataKey === 'shift') ||
                                (key === 'backspace' && dataKey === 'backspace')) {
                                keyElement.classList.add('pressed');
                            }
                        });
                    });
                    
                    userInput.addEventListener('keyup', function(e) {
                        const key = e.key.toLowerCase();
                        
                        // Remove highlight from released key
                        keys.forEach(keyElement => {
                            const dataKey = keyElement.getAttribute('data-key').toLowerCase();
                            if (dataKey === key || 
                                (key === ' ' && dataKey === 'space') ||
                                (key === 'enter' && dataKey === 'enter') ||
                                (key === 'shift' && dataKey === 'shift') ||
                                (key === 'backspace' && dataKey === 'backspace')) {
                                keyElement.classList.remove('pressed');
                            }
                        });
                        
                        // Check if input matches target text
                        const currentTarget = lessons[currentLesson - 1].text;
                        if (userInput.value.toLowerCase() === currentTarget.toLowerCase()) {
                            feedbackMessage.textContent = "Muito bem! ";
                            feedbackMessage.className = "feedback-message feedback-correct";
                            nextButton.disabled = false;
                        } else if (currentTarget.toLowerCase().startsWith(userInput.value.toLowerCase())) {
                            feedbackMessage.textContent = "Continue digitando...";
                            feedbackMessage.className = "feedback-message";
                            nextButton.disabled = true;
                        } else {
                            feedbackMessage.textContent = "Ops! Verifique o que você digitou.";
                            feedbackMessage.className = "feedback-message feedback-incorrect";
                            nextButton.disabled = true;
                        }
                    });
                    
                    // Next button functionality
                    nextButton.addEventListener('click', function() {
                        if (currentLesson < totalLessons) {
                            currentLesson++;
                            updateLesson();
                            
                            // Add a nice visual effect when moving to next lesson
                            feedbackMessage.textContent = "Carregando próxima lição...";
                            feedbackMessage.className = "feedback-message";
                            
                            // Animated highlight effect for target text
                            targetText.style.transform = "scale(1.05)";
                            setTimeout(() => {
                                targetText.style.transform = "";
                            }, 400);
                        } else {
                            // Completed all lessons with celebration effect
                            targetText.textContent = "Parabéns! Você completou todas as lições!";
                            targetText.style.color = "#4CAF50";
                            targetText.style.textShadow = "0 0 10px rgba(76, 175, 80, 0.5)";
                            
                            userInput.style.display = 'none';
                            feedbackMessage.textContent = "Volte ao menu para mais atividades";
                            feedbackMessage.className = "feedback-message feedback-correct";
                            nextButton.disabled = true;
                            
                            // Update progress bar to 100% when all lessons are completed
                            progressBar.style.width = "100%";
                            
                            // Add celebration effect
                            celebrateCompletion(keyboardLearningContainer);
                        }
                    });
                    
                    // Add function to celebrate completion
                    function celebrateCompletion(container) {
                        // Create confetti effect
                        for (let i = 0; i < 50; i++) {
                            createConfetti(container);
                        }
                    }
                    
                    function createConfetti(container) {
                        const confetti = document.createElement('div');
                        confetti.style.position = 'absolute';
                        confetti.style.width = '10px';
                        confetti.style.height = '10px';
                        confetti.style.backgroundColor = getRandomColor();
                        confetti.style.borderRadius = '50%';
                        confetti.style.top = '-10px';
                        confetti.style.left = Math.random() * 100 + '%';
                        confetti.style.transform = 'scale(' + (Math.random() * 0.6 + 0.4) + ')';
                        confetti.style.zIndex = '1000';
                        container.appendChild(confetti);
                        
                        // Animate confetti
                        const animation = confetti.animate([
                            { 
                                top: '-10px', 
                                transform: 'scale(' + (Math.random() * 0.6 + 0.4) + ') rotate(0deg)',
                                opacity: 1 
                            },
                            { 
                                top: container.offsetHeight + 'px', 
                                transform: 'scale(' + (Math.random() * 0.6 + 0.4) + ') rotate(' + (Math.random() * 360) + 'deg)',
                                opacity: 0 
                            }
                        ], {
                            duration: Math.random() * 2000 + 1500,
                            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
                        });
                        
                        animation.onfinish = function() {
                            confetti.remove();
                        };
                    }
                    
                    function getRandomColor() {
                        const colors = ['#8EC6E6', '#a5d4ec', '#4CAF50', '#FFC107', '#E91E63', '#9C27B0'];
                        return colors[Math.floor(Math.random() * colors.length)];
                    }
                    
                    // Update lesson content with enhanced visual transitions
                    function updateLesson() {
                        targetText.textContent = lessons[currentLesson - 1].description;
                        userInput.value = '';
                        userInput.focus();
                        feedbackMessage.textContent = '';
                        nextButton.disabled = true;
                        
                        // Update progress bar with better animation
                        const progress = (currentLesson - 1) / totalLessons * 100;
                        progressBar.style.width = `${progress}%`;
                        
                        // Highlight keys related to the current lesson
                        highlightRelevantKeys(lessons[currentLesson - 1].text);
                    }
                    
                    // Function to highlight keys relevant to the current word
                    function highlightRelevantKeys(word) {
                        // Reset any previous highlights
                        keys.forEach(key => key.classList.remove('highlight'));
                        
                        // Get unique characters from the word
                        const uniqueChars = [...new Set(word.toLowerCase())];
                        
                        // Highlight keys for each character
                        uniqueChars.forEach(char => {
                            if (char === ' ') char = 'space';
                            
                            keys.forEach(keyElement => {
                                const dataKey = keyElement.getAttribute('data-key').toLowerCase();
                                if (dataKey === char) {
                                    keyElement.classList.add('highlight');
                                }
                            });
                        });
                        
                        // After 3 seconds, remove the highlights
                        setTimeout(() => {
                            keys.forEach(key => key.classList.remove('highlight'));
                        }, 3000);
                    }
                    
                    // Initialize the first lesson with enhanced visual cues
                    updateLesson();
                    
                    // Add a slight animation to the keyboard on start
                    const keyboard = keyboardLearningContainer.querySelector('.keyboard');
                    keyboard.style.transform = 'translateY(20px)';
                    keyboard.style.opacity = '0';
                    
                    setTimeout(() => {
                        keyboard.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        keyboard.style.transform = 'translateY(0)';
                        keyboard.style.opacity = '1';
                    }, 300);
                }
                
                initKeyboardLearning();
                keyboardLearningContainer.style.display = 'block';
                keyboardLearningContainer.classList.add('fade-in');
            } else if (mode === 'mouse') {
                document.querySelector('.submenu').style.display = 'none';
                const mouseLearningContainer = document.createElement('div');
                mouseLearningContainer.className = 'mouse-learning-container';
                document.querySelector('main').appendChild(mouseLearningContainer);
                
                // Initialize mouse learning content
                function initMouseLearning() {
                    mouseLearningContainer.innerHTML = `
                        <div class="mouse-learning-header">
                            <h2>Aprendendo o Mouse</h2>
                            <p>Pratique seus movimentos seguindo as instruções abaixo</p>
                        </div>
                        
                        <div class="activity-selector">
                            <button class="activity-tab active" data-activity="click">Clique</button>
                            <button class="activity-tab" data-activity="doubleclick">Clique Duplo</button>
                            <button class="activity-tab" data-activity="drag">Arrastar</button>
                        </div>
                        
                        <div class="mouse-practice-area">
                            <div class="activity-container click-activity active">
                                <div class="instruction-text">Clique nos alvos quando eles aparecerem</div>
                                <div class="click-game-area">
                                    <div class="score-display">Pontuação: <span class="score">0</span></div>
                                    <div class="timer-display">Tempo: <span class="timer">30</span>s</div>
                                </div>
                                <button class="start-activity-btn">Iniciar Atividade</button>
                            </div>
                            
                            <div class="activity-container doubleclick-activity">
                                <div class="instruction-text">Faça clique duplo nos itens destacados</div>
                                <div class="doubleclick-game-area">
                                    <div class="score-display">Pontuação: <span class="score">0</span></div>
                                    <div class="timer-display">Tempo: <span class="timer">30</span>s</div>
                                    <div class="items-container">
                                        <div class="folder-item" data-status="inactive">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M10,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-8L10,4z"/>
                                            </svg>
                                            <span>Pasta 1</span>
                                        </div>
                                        <div class="folder-item" data-status="inactive">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M10,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-8L10,4z"/>
                                            </svg>
                                            <span>Pasta 2</span>
                                        </div>
                                        <div class="folder-item" data-status="inactive">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M10,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-8L10,4z"/>
                                            </svg>
                                            <span>Pasta 3</span>
                                        </div>
                                        <div class="folder-item" data-status="inactive">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M10,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-8L10,4z"/>
                                            </svg>
                                            <span>Pasta 4</span>
                                        </div>
                                    </div>
                                </div>
                                <button class="start-activity-btn">Iniciar Atividade</button>
                            </div>
                            
                            <div class="activity-container drag-activity">
                                <div class="instruction-text">Arraste os itens para os locais indicados</div>
                                <div class="drag-game-area">
                                    <div class="score-display">Itens colocados: <span class="score">0</span>/4</div>
                                    <div class="drag-items-container">
                                        <div class="drag-item" draggable="true" data-item-type="document">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,16H8v-2h8V16z M16,12H8v-2h8V12z M13,9V3.5L18.5,9H13z"/>
                                            </svg>
                                        </div>
                                        <div class="drag-item" draggable="true" data-item-type="image">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M21,19V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14C20.1,21,21,20.1,21,19z M8.5,13.5l2.5,3.01L14.5,12l4.5,6H5L8.5,13.5z"/>
                                            </svg>
                                        </div>
                                        <div class="drag-item" draggable="true" data-item-type="video">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M10,17l-3-3.5l1-1C8,12.5,9,12,9,12l1,1L10,17z"/>
                                            </svg>
                                        </div>
                                        <div class="drag-item" draggable="true" data-item-type="music">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12,3v10.55c-0.59-0.34-1.27-0.55-2-0.55c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4V7h4V3H12z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="drop-zones-container">
                                        <div class="drop-zone" data-zone-type="document">
                                            <div class="zone-label">Documentos</div>
                                        </div>
                                        <div class="drop-zone" data-zone-type="image">
                                            <div class="zone-label">Imagens</div>
                                        </div>
                                        <div class="drop-zone" data-zone-type="video">
                                            <div class="zone-label">Vídeos</div>
                                        </div>
                                        <div class="drop-zone" data-zone-type="music">
                                            <div class="zone-label">Músicas</div>
                                        </div>
                                    </div>
                                </div>
                                <button class="start-activity-btn">Iniciar Atividade</button>
                            </div>
                        </div>
                        
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        
                        <div class="lesson-controls">
                            <button class="lesson-button return-button">Voltar ao Menu</button>
                            <button class="lesson-button next-button" disabled>Próximo</button>
                        </div>
                    `;
                    
                    // Initialize mouse events and activities
                    setupMouseActivities();
                    
                    // Return button should go back to submenu
                    mouseLearningContainer.querySelector('.return-button').addEventListener('click', function() {
                        mouseLearningContainer.style.display = 'none';
                        document.querySelector('.submenu').style.display = 'flex';
                    });
                }
                
                // Setup mouse activity event handlers
                function setupMouseActivities() {
                    const mouseLearningContainer = document.querySelector('.mouse-learning-container');
                    const activityTabs = mouseLearningContainer.querySelectorAll('.activity-tab');
                    const activityContainers = mouseLearningContainer.querySelectorAll('.activity-container');
                    const startButtons = mouseLearningContainer.querySelectorAll('.start-activity-btn');
                    
                    // Activity tab switching
                    activityTabs.forEach(tab => {
                        tab.addEventListener('click', () => {
                            const activity = tab.getAttribute('data-activity');
                            
                            // Update active tab
                            activityTabs.forEach(t => t.classList.remove('active'));
                            tab.classList.add('active');
                            
                            // Show selected activity
                            activityContainers.forEach(container => {
                                container.classList.remove('active');
                                if (container.classList.contains(`${activity}-activity`)) {
                                    container.classList.add('active');
                                }
                            });
                        });
                    });
                    
                    // Click activity implementation
                    const clickGameArea = mouseLearningContainer.querySelector('.click-game-area');
                    const clickScoreDisplay = clickGameArea.querySelector('.score');
                    const clickTimerDisplay = clickGameArea.querySelector('.timer');
                    
                    let clickScore = 0;
                    let clickTimer = 60; 
                    let clickInterval;
                    let currentTarget;
                    
                    startButtons[0].addEventListener('click', () => {
                        startClickActivity();
                        startButtons[0].disabled = true;
                    });
                    
                    function startClickActivity() {
                        // Reset the game
                        clickScore = 0;
                        clickTimer = 60; 
                        clickScoreDisplay.textContent = clickScore;
                        clickTimerDisplay.textContent = clickTimer;
                        
                        // Clear any existing targets
                        if (currentTarget) {
                            currentTarget.remove();
                            currentTarget = null;
                        }
                        
                        // Start the timer
                        clickInterval = setInterval(() => {
                            clickTimer--;
                            clickTimerDisplay.textContent = clickTimer;
                            
                            if (clickTimer <= 0) {
                                endClickActivity();
                            }
                        }, 1000);
                        
                        // Create the first target
                        createClickTarget();
                    }
                    
                    function createClickTarget() {
                        if (currentTarget) {
                            currentTarget.remove();
                        }
                        
                        // Create a new target
                        currentTarget = document.createElement('div');
                        currentTarget.className = 'click-target';
                        
                        // Random position within game area bounds
                        const gameAreaRect = clickGameArea.getBoundingClientRect();
                        const targetSize = 70; 
                        
                        const maxX = gameAreaRect.width - targetSize;
                        const maxY = gameAreaRect.height - targetSize - 40; 
                        
                        const randomX = Math.floor(Math.random() * maxX);
                        const randomY = Math.floor(Math.random() * maxY) + 40; 
                        
                        currentTarget.style.left = `${randomX}px`;
                        currentTarget.style.top = `${randomY}px`;
                        
                        // Less size variation
                        const sizeVariation = Math.floor(Math.random() * 10); 
                        currentTarget.style.width = `${targetSize + sizeVariation}px`;
                        currentTarget.style.height = `${targetSize + sizeVariation}px`;
                        
                        // Add the target to the game area
                        clickGameArea.appendChild(currentTarget);
                        
                        // Add click event
                        currentTarget.addEventListener('click', handleTargetClick);
                        
                        // No longer set timeout for target disappearance - targets stay until clicked
                    }
                    
                    function handleTargetClick() {
                        // Prevent multiple clicks
                        currentTarget.removeEventListener('click', handleTargetClick);
                        
                        // Visual feedback for successful click
                        currentTarget.classList.add('clicked');
                        
                        // Increase score
                        clickScore++;
                        clickScoreDisplay.textContent = clickScore;
                        
                        // Update progress bar
                        updateProgressBar();
                        
                        // Create a new target after a short delay
                        setTimeout(() => {
                            if (clickTimer > 0) {
                                createClickTarget();
                            }
                        }, 300);
                    }
                    
                    function endClickActivity() {
                        clearInterval(clickInterval);
                        
                        if (currentTarget) {
                            currentTarget.remove();
                            currentTarget = null;
                        }
                        
                        // Show completion message
                        const completionMessage = document.createElement('div');
                        completionMessage.className = 'completion-message';
                        completionMessage.innerHTML = `
                            <h3>Atividade Concluída!</h3>
                            <p>Sua pontuação: ${clickScore}</p>
                            <p>${getScoreMessage(clickScore)}</p>
                        `;
                        clickGameArea.appendChild(completionMessage);
                        
                        // Re-enable start button
                        startButtons[0].disabled = false;
                        startButtons[0].textContent = 'Tentar Novamente';
                        
                        // Enable next button if score is reasonable - lowered requirement
                        if (clickScore >= 3) {
                            document.querySelector('.next-button').disabled = false;
                        }
                    }
                    
                    // Double-click activity implementation
                    const doubleClickArea = mouseLearningContainer.querySelector('.doubleclick-game-area');
                    const doubleClickScoreDisplay = doubleClickArea.querySelector('.score');
                    const doubleClickTimerDisplay = doubleClickArea.querySelector('.timer');
                    const folderItems = doubleClickArea.querySelectorAll('.folder-item');
                    
                    let doubleClickScore = 0;
                    let doubleClickTimer = 30;
                    let doubleClickInterval;
                    let activeFolder = null;
                    
                    startButtons[1].addEventListener('click', () => {
                        startDoubleClickActivity();
                        startButtons[1].disabled = true;
                    });
                    
                    function startDoubleClickActivity() {
                        // Reset the game
                        doubleClickScore = 0;
                        doubleClickTimer = 30;
                        doubleClickScoreDisplay.textContent = doubleClickScore;
                        doubleClickTimerDisplay.textContent = doubleClickTimer;
                        
                        // Reset all folders
                        folderItems.forEach(folder => {
                            folder.setAttribute('data-status', 'inactive');
                            folder.classList.remove('active', 'success');
                        });
                        
                        // Start the timer
                        doubleClickInterval = setInterval(() => {
                            doubleClickTimer--;
                            doubleClickTimerDisplay.textContent = doubleClickTimer;
                            
                            if (doubleClickTimer <= 0) {
                                endDoubleClickActivity();
                            }
                        }, 1000);
                        
                        // Activate the first folder
                        activateRandomFolder();
                    }
                    
                    function activateRandomFolder() {
                        // Deactivate previous folder if exists
                        if (activeFolder) {
                            activeFolder.setAttribute('data-status', 'inactive');
                            activeFolder.classList.remove('active');
                        }
                        
                        // Get inactive folders
                        const inactiveFolders = Array.from(folderItems).filter(
                            folder => folder.getAttribute('data-status') !== 'success'
                        );
                        
                        if (inactiveFolders.length === 0) {
                            // All folders are successful, reset all except the last one
                            folderItems.forEach((folder, index) => {
                                if (index !== folderItems.length - 1) {
                                    folder.setAttribute('data-status', 'inactive');
                                    folder.classList.remove('active', 'success');
                                }
                            });
                            
                            // Get the first folder
                            activeFolder = folderItems[0];
                        } else {
                            // Get a random inactive folder
                            const randomIndex = Math.floor(Math.random() * inactiveFolders.length);
                            activeFolder = inactiveFolders[randomIndex];
                        }
                        
                        // Activate the folder
                        activeFolder.setAttribute('data-status', 'active');
                        activeFolder.classList.add('active');
                    }
                    
                    // Add event listeners to folder items
                    folderItems.forEach(folder => {
                        folder.addEventListener('dblclick', () => {
                            const status = folder.getAttribute('data-status');
                            if (status === 'active') {
                                // Success!
                                folder.setAttribute('data-status', 'success');
                                folder.classList.remove('active');
                                folder.classList.add('success');
                                
                                // Increase score
                                doubleClickScore++;
                                doubleClickScoreDisplay.textContent = doubleClickScore;
                                
                                // Update progress bar
                                updateProgressBar();
                                
                                // Activate next folder
                                if (doubleClickTimer > 0) {
                                    setTimeout(activateRandomFolder, 500);
                                }
                            }
                        });
                        
                        // Add single click feedback (but don't count it as success)
                        folder.addEventListener('click', () => {
                            const status = folder.getAttribute('data-status');
                            if (status === 'active') {
                                folder.classList.add('clicked');
                                setTimeout(() => {
                                    folder.classList.remove('clicked');
                                }, 200);
                            }
                        });
                    });
                    
                    function endDoubleClickActivity() {
                        clearInterval(doubleClickInterval);
                        
                        // Deactivate active folder
                        if (activeFolder) {
                            activeFolder.setAttribute('data-status', 'inactive');
                            activeFolder.classList.remove('active');
                        }
                        
                        // Show completion message
                        const completionMessage = document.createElement('div');
                        completionMessage.className = 'completion-message';
                        completionMessage.innerHTML = `
                            <h3>Atividade Concluída!</h3>
                            <p>Sua pontuação: ${doubleClickScore}</p>
                            <p>${getScoreMessage(doubleClickScore)}</p>
                        `;
                        doubleClickArea.appendChild(completionMessage);
                        
                        // Re-enable start button
                        startButtons[1].disabled = false;
                        startButtons[1].textContent = 'Tentar Novamente';
                        
                        // Enable next button if score is reasonable
                        if (doubleClickScore >= 5) {
                            document.querySelector('.next-button').disabled = false;
                        }
                    }
                    
                    // Drag and drop activity implementation
                    const dragGameArea = mouseLearningContainer.querySelector('.drag-game-area');
                    const dragItems = dragGameArea.querySelectorAll('.drag-item');
                    const dropZones = dragGameArea.querySelectorAll('.drop-zone');
                    const dragScoreDisplay = dragGameArea.querySelector('.score');
                    
                    let dragScore = 0;
                    let dragActivityActive = false;
                    
                    startButtons[2].addEventListener('click', () => {
                        startDragActivity();
                        startButtons[2].disabled = true;
                    });
                    
                    function startDragActivity() {
                        // Reset the game
                        dragScore = 0;
                        dragScoreDisplay.textContent = dragScore;
                        dragActivityActive = true;
                        
                        // Reset all items and zones
                        dragItems.forEach(item => {
                            item.classList.remove('placed', 'wrong');
                            item.style.opacity = 1;
                            item.style.pointerEvents = 'auto';
                            
                            // Return to original container if it was moved
                            const dragItemsContainer = dragGameArea.querySelector('.drag-items-container');
                            dragItemsContainer.appendChild(item);
                        });
                        
                        dropZones.forEach(zone => {
                            zone.classList.remove('filled', 'highlight');
                        });
                        
                        // Setup drag and drop events
                        setupDragDropEvents();
                    }
                    
                    function setupDragDropEvents() {
                        // Setup drag events for items
                        dragItems.forEach(item => {
                            item.addEventListener('dragstart', handleDragStart);
                            item.addEventListener('dragend', handleDragEnd);
                        });
                        
                        // Setup drop events for zones
                        dropZones.forEach(zone => {
                            zone.addEventListener('dragover', handleDragOver);
                            zone.addEventListener('dragenter', handleDragEnter);
                            zone.addEventListener('dragleave', handleDragLeave);
                            zone.addEventListener('drop', handleDrop);
                        });
                    }
                    
                    function handleDragStart(e) {
                        if (!dragActivityActive) return;
                        
                        // Add dragging class
                        this.classList.add('dragging');
                        e.dataTransfer.setData('text/plain', this.getAttribute('data-item-type'));
                        
                        // For better drag image
                        setTimeout(() => {
                            this.style.opacity = '0.4';
                        }, 0);
                    }
                    
                    function handleDragEnd() {
                        // Remove dragging class
                        this.classList.remove('dragging');
                        this.style.opacity = '1';
                    }
                    
                    function handleDragOver(e) {
                        if (!dragActivityActive) return;
                        
                        // Prevent default to allow drop
                        e.preventDefault();
                    }
                    
                    function handleDragEnter(e) {
                        if (!dragActivityActive) return;
                        
                        // Add highlight class
                        this.classList.add('highlight');
                    }
                    
                    function handleDragLeave() {
                        if (!dragActivityActive) return;
                        
                        // Remove highlight class
                        this.classList.remove('highlight');
                    }
                    
                    function handleDrop(e) {
                        if (!dragActivityActive) return;
                        
                        // Prevent default action
                        e.preventDefault();
                        
                        // Remove highlight class
                        this.classList.remove('highlight');
                        
                        // Get dragged item type
                        const itemType = e.dataTransfer.getData('text/plain');
                        const zoneType = this.getAttribute('data-zone-type');
                        
                        // Get the dragged item
                        const draggedItem = document.querySelector(`.drag-item.dragging`);
                        
                        // Check if correct zone
                        if (itemType === zoneType) {
                            // Success!
                            this.classList.add('filled');
                            draggedItem.classList.add('placed');
                            draggedItem.classList.remove('dragging');
                            draggedItem.style.pointerEvents = 'none';
                            
                            // Move the item to the zone
                            this.appendChild(draggedItem);
                            
                            // Increase score
                            dragScore++;
                            dragScoreDisplay.textContent = dragScore;
                            
                            // Check if all items are placed
                            if (dragScore >= 4) {
                                endDragActivity(true);
                            }
                            
                            // Update progress bar
                            updateProgressBar();
                        } else {
                            // Wrong zone - visual feedback
                            draggedItem.classList.add('wrong');
                            this.classList.add('wrong');
                            
                            setTimeout(() => {
                                draggedItem.classList.remove('wrong');
                                this.classList.remove('wrong');
                            }, 800);
                        }
                    }
                    
                    function endDragActivity(success = false) {
                        dragActivityActive = false;
                        
                        // Show completion message
                        const completionMessage = document.createElement('div');
                        completionMessage.className = 'completion-message';
                        completionMessage.innerHTML = `
                            <h3>Atividade Concluída!</h3>
                            <p>Itens colocados: ${dragScore}/4</p>
                            <p>${success ? 'Excelente trabalho!' : 'Continue praticando!'}</p>
                        `;
                        dragGameArea.appendChild(completionMessage);
                        
                        // Re-enable start button
                        startButtons[2].disabled = false;
                        startButtons[2].textContent = 'Tentar Novamente';
                        
                        // Enable next button if all items were placed
                        if (success) {
                            document.querySelector('.next-button').disabled = false;
                            celebrateCompletion(mouseLearningContainer);
                        }
                    }
                    
                    // Helper functions
                    function getScoreMessage(score) {
                        if (score >= 10) return 'Excelente trabalho! Você já é um expert!';
                        if (score >= 5) return 'Muito bom! Você está dominando o mouse!';
                        if (score >= 3) return 'Bom trabalho! Continue praticando!';
                        return 'Continue praticando, você vai melhorar!';
                    }
                    
                    function updateProgressBar() {
                        let progress = 0;
                        const progressBar = mouseLearningContainer.querySelector('.progress-bar');
                        
                        // Calculate progress based on active tab
                        const activeTab = mouseLearningContainer.querySelector('.activity-tab.active');
                        const activityType = activeTab.getAttribute('data-activity');
                        
                        switch (activityType) {
                            case 'click':
                                progress = Math.min(clickScore / 10 * 100, 100); 
                                break;
                            case 'doubleclick':
                                progress = Math.min(doubleClickScore / 15 * 100, 100);
                                break;
                            case 'drag':
                                progress = (dragScore / 4) * 100;
                                break;
                        }
                        
                        progressBar.style.width = `${progress}%`;
                    }
                    
                    // Next button functionality
                    const nextButton = mouseLearningContainer.querySelector('.next-button');
                    nextButton.addEventListener('click', function() {
                        // Switch to next activity
                        const activeTab = mouseLearningContainer.querySelector('.activity-tab.active');
                        const currentActivity = activeTab.getAttribute('data-activity');
                        
                        let nextActivityIndex = 0;
                        
                        if (currentActivity === 'click') {
                            nextActivityIndex = 1; // doubleclick
                        } else if (currentActivity === 'doubleclick') {
                            nextActivityIndex = 2; // drag
                        }
                        
                        // Click the next tab
                        activityTabs[nextActivityIndex].click();
                        
                        // Disable next button until activity is completed
                        nextButton.disabled = true;
                    });
                    
                    // Function to celebrate completion with confetti
                    function celebrateCompletion(container) {
                        // Create confetti effect
                        for (let i = 0; i < 50; i++) {
                            createConfetti(container);
                        }
                    }
                    
                    function createConfetti(container) {
                        const confetti = document.createElement('div');
                        confetti.style.position = 'absolute';
                        confetti.style.width = '10px';
                        confetti.style.height = '10px';
                        confetti.style.backgroundColor = getRandomColor();
                        confetti.style.borderRadius = '50%';
                        confetti.style.top = '-10px';
                        confetti.style.left = Math.random() * 100 + '%';
                        confetti.style.transform = 'scale(' + (Math.random() * 0.6 + 0.4) + ')';
                        confetti.style.zIndex = '1000';
                        container.appendChild(confetti);
                        
                        // Animate confetti
                        const animation = confetti.animate([
                            { 
                                top: '-10px', 
                                transform: 'scale(' + (Math.random() * 0.6 + 0.4) + ') rotate(0deg)',
                                opacity: 1 
                            },
                            { 
                                top: container.offsetHeight + 'px', 
                                transform: 'scale(' + (Math.random() * 0.6 + 0.4) + ') rotate(' + (Math.random() * 360) + 'deg)',
                                opacity: 0 
                            }
                        ], {
                            duration: Math.random() * 2000 + 1500,
                            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
                        });
                        
                        animation.onfinish = function() {
                            confetti.remove();
                        };
                    }
                    
                    function getRandomColor() {
                        const colors = ['#8EC6E6', '#a5d4ec', '#4CAF50', '#FFC107', '#E91E63', '#9C27B0'];
                        return colors[Math.floor(Math.random() * colors.length)];
                    }
                }
                
                initMouseLearning();
                mouseLearningContainer.style.display = 'block';
                mouseLearningContainer.classList.add('fade-in');
            }
        });
        
        // Add hover sound effect
        button.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Function to play hover sound
    function playHoverSound() {
        // A very light hover sound effect could be added here if desired
        // For now, just a placeholder function
    }
    
    // Add CSS animations classes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        .slide-in {
            animation: slideIn 0.5s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
    
    // Add additional animation classes
    const extraStyles = document.createElement('style');
    extraStyles.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
        }
        
        @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(142, 198, 230, 0.3); }
            50% { box-shadow: 0 0 20px rgba(142, 198, 230, 0.6); }
            100% { box-shadow: 0 0 5px rgba(142, 198, 230, 0.3); }
        }
    `;
    document.head.appendChild(extraStyles);
});
