const syllabusData = {
    algebra: {
        title: "Algebra Plains",
        study: `
            <div class="quest-card animate-pop">
                <h2 class="text-3xl font-black mb-4 text-indigo-400">Algebra Cheat Sheet</h2>
                <p class="text-slate-400 mb-6 italic">Master the patterns of the plains to unlock the secrets of the equation.</p>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">1. Expansion</h3>
                <div class="formula-pill">
                    (a + b)² = a² + 2ab + b² <br>
                    (a - b)² = a² - 2ab + b² <br>
                    (a + b)(a - b) = a² - b²
                </div>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">2. Factorisation</h3>
                <ul class="list-disc ml-6 space-y-3 text-slate-300">
                    <li><strong class="text-indigo-300">Common Factor:</strong> Always check first! e.g., 3x² + 6x = 3x(x + 2)</li>
                    <li><strong class="text-indigo-300">Difference of Two Squares:</strong> x² - 9 = (x - 3)(x + 3)</li>
                    <li><strong class="text-indigo-300">Trinomials:</strong> x² + 5x + 6 = (x + 2)(x + 3)</li>
                </ul>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">3. Linear Equations</h3>
                <p class="text-slate-400 mb-2">Balance the scales. Isolate the variable.</p>
                <div class="formula-pill">
                    Example: 3x + 5 = 20 <br>
                    3x = 15 <br>
                    x = 5
                </div>
            </div>
        `,
        questions: [
            { q: "Expand (x + 4)²", a: "x^2 + 8x + 16" },
            { q: "Factorise x² - 25", a: "(x-5)(x+5)" },
            { q: "Solve for x: 2x - 7 = 11", a: "9" },
            { q: "Simplify: 3(2x - 5) + 4x", a: "10x - 15" },
            { q: "Factorise 2x² + 8x", a: "2x(x+4)" }
        ]
    },
    number: {
        title: "Number Nexus",
        study: `
            <div class="quest-card animate-pop">
                <h2 class="text-3xl font-black mb-4 text-indigo-400">Number & Arithmetic</h2>
                <p class="text-slate-400 mb-6 italic">Precision is your only weapon in the Nexus.</p>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">1. Ratios</h3>
                <p class="text-slate-300 mb-2">Splitting quantities (e.g., 2:3):</p>
                <div class="formula-pill">
                    Total parts = 2 + 3 = 5 <br>
                    Part 1 = (2/5) * Total <br>
                    Part 2 = (3/5) * Total
                </div>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">2. Percentages</h3>
                <ul class="list-disc ml-6 space-y-3 text-slate-300">
                    <li><strong class="text-indigo-300">Increase:</strong> New = Old * (1 + decimal)</li>
                    <li><strong class="text-indigo-300">Decrease:</strong> New = Old * (1 - decimal)</li>
                    <li><strong class="text-indigo-300">Find %:</strong> (Part / Whole) * 100</li>
                </ul>
            </div>
        `,
        questions: [
            { q: "Split €50 in ratio 2:3. What is the larger part?", a: "30" },
            { q: "Increase 80 by 15%. Result?", a: "92" },
            { q: "Decrease 120 by 20%. Result?", a: "96" },
            { q: "What is 12.5% as a fraction (simplified)?", a: "1/8" },
            { q: "Find 3/4 of 64", a: "48" }
        ]
    },
    geometry: {
        title: "Geometry Gorge",
        study: `
            <div class="quest-card animate-pop">
                <h2 class="text-3xl font-black mb-4 text-indigo-400">Geometry & Trig</h2>
                <p class="text-slate-400 mb-6 italic">The gorge is steep. Only the laws of angles can guide you.</p>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">1. Pythagoras' Theorem</h3>
                <div class="formula-pill">
                    a² + b² = c² (where c is the hypotenuse)
                </div>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">2. Trigonometry (Right-Angled)</h3>
                <div class="formula-pill">
                    sin(θ) = Opp / Hyp <br>
                    cos(θ) = Adj / Hyp <br>
                    tan(θ) = Opp / Adj
                </div>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">3. Angle Rules</h3>
                <ul class="list-disc ml-6 space-y-3 text-slate-300">
                    <li><strong class="text-indigo-300">Alternate:</strong> Z-shape, they are equal.</li>
                    <li><strong class="text-indigo-300">Corresponding:</strong> F-shape, they are equal.</li>
                    <li><strong class="text-indigo-300">Co-interior:</strong> C-shape, add to 180°.</li>
                </ul>
            </div>
        `,
        questions: [
            { q: "In a right triangle, a=3, b=4. Find hypotenuse c.", a: "5" },
            { q: "SOH CAH TOA: Which one uses Opp and Hyp?", a: "sin" },
            { q: "Interior angles of a triangle sum to how many degrees?", a: "180" },
            { q: "If sin(θ) = 0.5, what is θ (in degrees)?", a: "30" },
            { q: "Two angles are co-interior. One is 70°. What is the other?", a: "110" }
        ]
    },
    coordinates: {
        title: "Coordinate Coast",
        study: `
            <div class="quest-card animate-pop">
                <h2 class="text-3xl font-black mb-4 text-indigo-400">Coordinate Geometry</h2>
                <p class="text-slate-400 mb-6 italic">Navigate the coast by plotting the perfect path.</p>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">1. Gradient (m)</h3>
                <div class="formula-pill">
                    m = (y₂ - y₁) / (x₂ - x₁)
                </div>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">2. Equation of a Line</h3>
                <div class="formula-pill">
                    y = mx + c <br>
                    m = gradient, c = y-intercept
                </div>
                
                <h3 class="font-bold text-xl mt-6 mb-2 text-white">3. Midpoint Formula</h3>
                <div class="formula-pill">
                    Midpoint = ( (x₁+x₂)/2, (y₁+y₂)/2 )
                </div>
            </div>
        `,
        questions: [
            { q: "Find gradient m between (1,2) and (3,6).", a: "2" },
            { q: "In y = 3x - 5, what is the y-intercept (c)?", a: "-5" },
            { q: "Find midpoint of (0,0) and (4,10). Result (x,y).", a: "2,5" },
            { q: "If m=0, is the line horizontal or vertical?", a: "horizontal" },
            { q: "Find gradient of y = -x + 4", a: "-1" }
        ]
    }
};

const checklistItems = [
    { id: 'alg_expand', label: 'Algebra: Expansion & Factorisation', topic: 'algebra' },
    { id: 'alg_eq', label: 'Algebra: Linear Equations', topic: 'algebra' },
    { id: 'num_rat', label: 'Number: Ratios & Proportions', topic: 'number' },
    { id: 'num_per', label: 'Number: Percentage Change', topic: 'number' },
    { id: 'geo_pyth', label: 'Geometry: Pythagoras', topic: 'geometry' },
    { id: 'geo_trig', label: 'Geometry: Basic SOH CAH TOA', topic: 'geometry' },
    { id: 'coord_grad', label: 'Coords: Gradient Calculation', topic: 'coordinates' },
    { id: 'coord_eq', label: 'Coords: Line Equations', topic: 'coordinates' },
];

// Game State
let gameState = {
    xp: 0,
    level: 1,
    hearts: 3,
    maxHearts: 3,
    streak: 0,
    xpToNextLevel: 100
};

// Persist State
function saveGame() {
    localStorage.setItem('mq_state', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('mq_state');
    if (saved) {
        gameState = JSON.parse(saved);
    }
    updateUI();
}

function updateUI() {
    document.getElementById('player-level').innerText = gameState.level;
    document.getElementById('xp-text').innerText = `${gameState.xp} / ${gameState.xpToNextLevel}`;
    document.getElementById('xp-bar').style.width = `${(gameState.xp / gameState.xpToNextLevel) * 100}%`;
    
    const healthContainer = document.getElementById('health-container');
    healthContainer.innerHTML = '';
    for (let i = 0; i < gameState.maxHearts; i++) {
        const heart = document.createElement('span');
        heart.className = `heart ${i >= gameState.hearts ? 'heart-lost' : ''}`;
        heart.innerText = '❤️';
        healthContainer.appendChild(heart);
    }
}

function notify(text) {
    const notif = document.getElementById('notification');
    const notifText = document.getElementById('notif-text');
    notifText.innerText = text;
    notif.classList.remove('opacity-0');
    notif.classList.add('opacity-100');
    setTimeout(() => {
        notif.classList.add('opacity-0');
        notif.classList.remove('opacity-100');
    }, 2000);
}

function gainXP(amount) {
    gameState.xp += amount;
    if (gameState.xp >= gameState.xpToNextLevel) {
        gameState.xp -= gameState.xpToNextLevel;
        gameState.level++;
        gameState.xpToNextLevel = Math.floor(gameState.xpToNextLevel * 1.2);
        notify('LEVEL UP!');
    }
    saveGame();
    updateUI();
}

function loseHeart() {
    gameState.hearts--;
    updateUI();
    if (gameState.hearts <= 0) {
        notify('GAME OVER! Hearts Refilled');
        gameState.hearts = gameState.maxHearts;
        gameState.streak = 0;
        updateUI();
    }
}

function loadTopic(topicId) {
    const contentArea = document.getElementById('content-area');
    
    document.querySelectorAll('.game-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + topicId);
    if (activeBtn) activeBtn.classList.add('active');

    if (topicId === 'checklist') {
        renderChecklist();
        return;
    }

    const data = syllabusData[topicId];
    if (!data) return;

    contentArea.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-black text-white tracking-tight">${data.title}</h2>
            <div class="flex gap-3">
                <button onclick="toggleMode('${topicId}', 'study')" class="action-btn-secondary" id="mode-study">Study</button>
                <button onclick="toggleMode('${topicId}', 'practice')" class="action-btn" id="mode-practice">Battle</button>
            </div>
        </div>
        <div id="topic-dynamic-content">
            ${data.study}
        </div>
    `;
    
    document.getElementById('mode-study').classList.add('bg-indigo-600', 'text-white');
    document.getElementById('mode-practice').classList.remove('bg-indigo-600', 'text-white');
}

function toggleMode(topicId, mode) {
    const dynamicContent = document.getElementById('topic-dynamic-content');
    const studyBtn = document.getElementById('mode-study');
    const practiceBtn = document.getElementById('mode-practice');

    if (mode === 'study') {
        studyBtn.className = 'action-btn';
        practiceBtn.className = 'action-btn-secondary';
        dynamicContent.innerHTML = syllabusData[topicId].study;
    } else {
        practiceBtn.className = 'action-btn';
        studyBtn.className = 'action-btn-secondary';
        renderPractice(topicId);
    }
}

function renderPractice(topicId) {
    const dynamicContent = document.getElementById('topic-dynamic-content');
    const questions = syllabusData[topicId].questions;
    const randomQ = questions[Math.floor(Math.random() * questions.length)];

    dynamicContent.innerHTML = `
        <div class="quest-card text-center py-16 animate-pop">
            <div class="text-indigo-400 font-black uppercase text-xs tracking-widest mb-4">Encounter!</div>
            <h3 class="text-3xl font-bold mb-10 text-white">${randomQ.q}</h3>
            <div class="flex flex-col items-center gap-6">
                <input type="text" id="answer-input" class="game-input text-center" placeholder="Enter answer...">
                <div id="feedback" class="h-6 text-lg font-bold"></div>
                <div class="flex gap-4 w-full max-w-sm">
                    <button onclick="checkAnswer('${randomQ.a}', '${topicId}')" class="action-btn flex-1">Attack!</button>
                    <button onclick="renderPractice('${topicId}')" class="action-btn-secondary flex-1">Flee</button>
                </div>
                <div class="text-slate-500 text-sm font-bold uppercase tracking-widest">Streak: <span id="streak-count" class="text-indigo-400">${gameState.streak}</span></div>
            </div>
        </div>
    `;
    document.getElementById('answer-input').focus();
}

function checkAnswer(correct, topicId) {
    const input = document.getElementById('answer-input');
    const feedback = document.getElementById('feedback');
    const card = document.querySelector('.quest-card');
    const userAns = input.value.trim().toLowerCase();
    const cleanCorrect = correct.toLowerCase();

    if (userAns === cleanCorrect) {
        gameState.streak++;
        const xpGain = 20 + (gameState.streak * 5);
        gainXP(xpGain);
        
        feedback.innerHTML = `<span class="text-green-400">CRITICAL HIT! +${xpGain} XP</span>`;
        card.classList.add('xp-glow');
        
        setTimeout(() => {
            card.classList.remove('xp-glow');
            renderPractice(topicId);
        }, 1500);
    } else {
        gameState.streak = 0;
        loseHeart();
        
        feedback.innerHTML = `<span class="text-red-500">MISS! Correct: ${correct}</span>`;
        card.classList.add('animate-shake');
        
        setTimeout(() => {
            card.classList.remove('animate-shake');
        }, 400);
    }
    
    document.getElementById('streak-count').innerText = gameState.streak;
}

function renderChecklist() {
    const contentArea = document.getElementById('content-area');
    const savedProgress = JSON.parse(localStorage.getItem('jc_maths_progress') || '{}');

    contentArea.innerHTML = `
        <h2 class="text-4xl font-black text-white mb-8 tracking-tight">Mastery Scroll</h2>
        <div class="quest-card">
            <div class="space-y-4">
                ${checklistItems.map(item => `
                    <div class="flex items-center justify-between p-4 hover:bg-slate-700/50 rounded-2xl transition-colors border-b border-slate-700 last:border-0">
                        <div class="flex items-center gap-4">
                            <input type="checkbox" 
                                   ${savedProgress[item.id] ? 'checked' : ''} 
                                   onchange="updateProgress('${item.id}', this.checked)" 
                                   class="w-6 h-6 rounded-lg text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-600">
                            <span class="text-slate-200 font-bold">${item.label}</span>
                        </div>
                        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${savedProgress[item.id] ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'}">
                            ${savedProgress[item.id] ? 'Cleared' : 'Locked'}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function updateProgress(id, isChecked) {
    const savedProgress = JSON.parse(localStorage.getItem('jc_maths_progress') || '{}');
    savedProgress[id] = isChecked;
    localStorage.setItem('jc_maths_progress', JSON.stringify(savedProgress));
    renderChecklist();
}

window.onload = () => {
    loadGame();
    loadTopic('algebra');
};
