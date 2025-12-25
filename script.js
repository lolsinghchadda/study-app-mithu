// --- DATA ---
const DATA = {
    dates: { 
        prelims: "2026-08-22",
        mains: "2026-10-04" 
    },
    affirmations: [
        "Small steps every day.", "You are doing enough.", "Trust your journey.", 
        "I believe in you.", "One concept at a time.", "Rest is productive too.",
        "Your potential is endless.", "Breathe. You've got this.", "Consistency matters more than intensity.",
        "You don’t need to rush.", "Progress can be quiet.", "Showing up counts.",
        "Clarity comes with patience.", "You are learning, not lagging.", "It’s okay to move slowly.",
        "Effort adds up.", "You’re allowed to take breaks.", "You’re building something real.",
        "Doubt doesn’t erase preparation.", "You’re doing better than you think.",
        "Understanding grows with time.", "Every day teaches you something.",
        "You don’t have to be perfect.", "Calm thinking is powerful.", "This phase is temporary.",
        "Your pace is valid.", "Confidence grows through practice.", "You’re capable of more than today feels.",
        "One question at a time.", "Learning is not linear.", "You’re allowed to pause.",
        "Patience is a strength.", "You’re not behind — you’re learning.", "Small wins matter.",
        "You’re creating momentum.", "Focus gently.", "Your effort is visible, even if results aren’t yet.",
        "Trust the process you’re in.", "You don’t need to prove anything today.",
        "Stability beats panic.", "You’re doing the work.", "It’s okay to feel unsure sometimes.",
        "You are allowed to try again.", "Growth often feels uncomfortable.", "Understanding takes repetition.",
        "You’re not alone in this.", "Quiet discipline builds strength.", "You are preparing steadily.",
        "Your mind learns with calm.", "There is no wasted effort.", "You can handle today.",
        "You don’t need to know everything right now.", "Practice is progress.", "You are allowed to go at your pace.",
        "Your consistency is meaningful.", "This effort will compound.", "Clarity will come.",
        "You’re becoming more confident each day.", "Slow preparation lasts longer.", "You are capable of focus.",
        "Trust what you’ve practiced.", "You are learning to trust yourself.", "Not every day has to feel productive.",
        "Understanding builds quietly.", "You’re stronger than momentary doubt.", "This journey is shaping you.",
        "You are allowed to take it step by step.", "You’re building resilience.", "Your effort matters, even on hard days.",
        "Calmness improves accuracy.", "You don’t need external validation.", "You’re growing into readiness.",
        "You’re allowed to feel tired and continue later.", "Consistency creates confidence.",
        "You’re preparing thoughtfully.", "Your dedication is steady.", "You are allowed to trust yourself.",
        "One focused session is enough for today.", "You’re not starting over — you’re continuing.",
        "Progress doesn’t need to be loud.", "You are capable of clarity under pressure.",
        "You’re learning to believe in your effort.", "This work is shaping your future.",
        "You are doing meaningful work.", "You are enough for today."
    ],
    messages: {
        doubt: ["You've handled hard things before. You will handle this too.", "Take a deep breath. You are capable.", "It's just a bad day, not a bad life.", "Your effort is building up, even if you can't see it yet."],
        tired: ["Close your eyes for 5 mins. The books aren't going anywhere.", "Go drink water. Stretch. You're human.", "It's okay to stop for today. Rest heals.", "Sleep is part of the syllabus too."],
        behind: ["Comparison is the thief of joy. Run your own race.", "Focus on just ONE topic today. That's a win.", "Slow progress is still progress.", "You are exactly where you need to be."],
        love: ["I love you so much. Keep going.", "Sending you a virtual hug.", "I'm your biggest fan!", "You are my favorite person, hardworking or not."]
    },
    mockMessages: [
        "Phew! You gave a mock. Here's a coffee ☕",
        "Proud of you for sitting through that! 🍪",
        "Scores go up and down. Your effort matters most. ❤️",
        "Take a deep breath. Analysis is more important than the score.",
        "You showed up. That is the biggest win today. 🌟"
    ],
    // --- 100 UNIQUE REASONS ---
    reasons: [
        "You show up for yourself every single day.",
        "You are my absolute favorite person.",
        "You have the discipline to sit and study when you'd rather sleep.",
        "You are smarter than you give yourself credit for.",
        "You look really cute when you are focused.",
        "You don't give up on a tough puzzle; you solve it.",
        "You are building a future that is entirely your own.",
        "Your smile is my favorite thing in the world.",
        "You handle pressure better than you think you do.",
        "You are becoming a master of time management.",
        "Your handwriting looks really smart when you solve math problems.",
        "You are resilient. One bad mock doesn't stop you.",
        "I am so lucky to be on this journey with you.",
        "You sacrifice temporary fun for long-term success.",
        "You are honest with yourself about your weak areas.",
        "You make my world brighter just by being in it.",
        "You have a logical mind that cuts through confusion.",
        "You are patient with your own progress.",
        "You analyze your mistakes instead of ignoring them.",
        "You are capable of deep, uninterrupted focus.",
        "You inspire me to work harder just by watching you.",
        "You are stubborn in the best way possible—you don't quit.",
        "Even in your PJs studying, you look perfect to me.",
        "You will be financially independent and powerful.",
        "You handle stress with a quiet kind of strength.",
        "You are getting faster at calculations every day.",
        "You have a 'never say die' attitude.",
        "You have the kindest heart.",
        "You are clearing concepts, not just cramming.",
        "You are worth every hour of effort you put in.",
        "You are learning to trust your own instincts.",
        "You define success on your own terms.",
        "You are preparing for a life of dignity and respect.",
        "I believe in you more than you know.",
        "You have the courage to try again after a failure.",
        "You are shaping a version of yourself that is unstoppable.",
        "You are intellectually curious.",
        "You admit when you don't know something, then you learn it.",
        "Your signature is going to matter on important documents one day.",
        "You are making your parents proud with your dedication.",
        "You have 'Officer' energy already.",
        "You are my motivation.",
        "You treat your preparation like a professional job.",
        "You are finding solutions, not excuses.",
        "You are stronger than your doubts.",
        "You are thorough in your preparation.",
        "You adapt to new patterns and syllabus changes.",
        "You are a quick learner.",
        "You have a sharp eye for spotting errors in English.",
        "I just love talking to you.",
        "You are building mental toughness.",
        "You are capable of handling big responsibilities.",
        "You are investing in yourself, which is the best investment.",
        "You are logically sound.",
        "You have grit.",
        "You prioritize your goals over distractions.",
        "You are consistent, which is better than being perfect.",
        "You are rewriting your destiny with a pen and paper.",
        "You are calm in the chaos.",
        "You are developing a problem-solving mindset.",
        "You are not afraid of hard work.",
        "You are doing better than you were last month.",
        "You are focused on accuracy, not just speed.",
        "You are learning to handle rejection and bounce back.",
        "You have incredible willpower.",
        "You are organized (at least with your study plan!).",
        "You stick to the plan even when it's boring.",
        "You tackle Data Interpretation like a pro.",
        "You are refining your strategy every day.",
        "You are humble enough to keep learning.",
        "You are building a legacy of hard work.",
        "You are resourceful.",
        "You focus on what you can control.",
        "You are awake and studying while others are sleeping.",
        "You turn your anxiety into action.",
        "You are sharp.",
        "You have a good memory when you actually use it.",
        "You are capable of sitting for 3 hours straight.",
        "You don't let a bad day turn into a bad week.",
        "You are protecting your dream.",
        "You are methodic in your approach.",
        "You value your own time.",
        "You are going to be a great leader one day.",
        "You have excellent reasoning skills.",
        "You are putting in the reps, just like an athlete.",
        "You are proving to yourself that you can do hard things.",
        "You are fighting for the life you deserve.",
        "You have a vision and you are chasing it.",
        "You are dependable.",
        "You are meticulous.",
        "You are one step closer than you were yesterday.",
        "You are ignoring the noise and focusing on the signal.",
        "You are capable of understanding complex logic.",
        "You are doing this for YOU.",
        "You have the heart of a winner.",
        "You are disciplined.",
        "You make difficult concepts look easy eventually.",
        "You are relentless.",
        "You are a fighter.",
        "You are polishing your skills daily.",
        "You are not average; you are exceptional.",
        "You are dedicated.",
        "You are ready to seize the opportunity.",
        "You have worked too hard to stop now.",
        "You are simply capable.",
        "Because you are reading reason #100: I love you!"
    ],
    syllabus: {
        prelims: {
            "Quantitative Aptitude (Maths)": [
                "Simplification", "Profit & Loss", "Mixtures & Allegations", 
                "Simple Interest & Compound Interest & Surds & Indices", "Work & Time", 
                "Time & Distance", "Mensuration - Cylinder, Cone, Sphere", 
                "Data Interpretation", "Ratio & Proportion, Percentage", 
                "Number Systems", "Sequence & Series", 
                "Permutation, Combination & Probability"
            ],
            "Reasoning Ability": [
                "Logical Reasoning", "Alphanumeric Series", 
                "Ranking/Direction/Alphabet Test", "Data Sufficiency", 
                "Inequalities", "Seating Arrangement", "Puzzle", 
                "Tabulation", "Syllogism", "Blood Relations", 
                "Input-Output", "Coding-Decoding"
            ],
            "English Language": [
                "Reading Comprehension", "Cloze Test", "Para jumbles", 
                "Word Usage, Word-Swap", "Fill in the blanks", 
                "Error Detection, Error Spotting", "Paragraph Completion", 
                "One word Substitution", "Miscellaneous"
            ]
        },
        mains: {
            "English Language": [
                "Reading Comprehension", "Vocabulary", "Grammar", 
                "One word Substitution", "Verbal Ability"
            ],
            "Reasoning & Computer Aptitude": [
                "Verbal Reasoning", "Syllogism", "Circular Seating Arrangement", 
                "Code Inequalities", "Linear Seating Arrangement", "Double Lineup", 
                "Scheduling", "Input-Output", "Blood Relations", 
                "Directions and Distances", "Ordering and Ranking", 
                "Data Sufficiency", "Coding and Decoding",
                "Internet", "Memory", "Keyboard Shortcuts", 
                "Computer Abbreviation", "Microsoft Office", "Computer Hardware", 
                "Computer Software", "Operating System", "Networking", 
                "Computer Fundamentals/Terminologies"
            ],
            "Quantitative Aptitude (Maths)": [
                "Simplification", "Average", "Percentage", "Mixture and Allegations", 
                "Ratio and Percentage", "Data Interpretation", "Mensuration and Geometry", 
                "Quadratic Equation", "Interest", "Problems of Ages", 
                "Profit and Loss", "Number Series", "Speed, Distance and Time", 
                "Time and Work", "Number System", "Data Sufficiency", 
                "Linear Equation", "Permutation and Combination", "Probability"
            ],
            "General Awareness": [
                "Financial Awareness", "Current Affairs", 
                "General Knowledge", "Static Awareness"
            ]
        }
    }
};

let appState = {
    streak: 0, 
    lastCheckIn: null, 
    syllabus: {}, 
    mockScores: { prelims: [], mains: [] },
    totalStudyHours: 0,
    usedReasonIndices: [] 
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initGreeting();
    renderAffirmation();
    updateStreakUI();
    updateCountdown();
    initSubjectFilters('prelims');
    initChart();
    renderMockWelcome();
    updateTotalHoursUI();
});

// --- CORE FUNCTIONS ---

function initGreeting() {
    const hour = new Date().getHours();
    const greetEl = document.getElementById('greeting-time');
    let msg = "Hi, Miss Mithu";
    if (hour < 12) msg = "Good Morning, Miss Mithu";
    else if (hour < 18) msg = "Good Afternoon, Miss Mithu";
    else msg = "Good Evening, Miss Mithu";
    if(greetEl) greetEl.textContent = msg;
}

function loadData() {
    const saved = localStorage.getItem('studyApp_v4');
    if (saved) {
        appState = JSON.parse(saved);
        // Safety checks
        if(Array.isArray(appState.mockScores)) {
            appState.mockScores = { prelims: [], mains: [] }; 
        }
        if(!appState.syllabus) appState.syllabus = {};
    } else {
        DATA.syllabus.prelims.forEach(t => appState.syllabus[t] = 0);
        DATA.syllabus.mains.forEach(t => appState.syllabus[t] = 0);
    }

    // --- FORCE RESET: Always start with fresh reasons on page load ---
    appState.usedReasonIndices = []; 
}

function saveData() {
    localStorage.setItem('studyApp_v4', JSON.stringify(appState));
}

function navTo(pageId, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    
    window.scrollTo(0,0);
}

// --- HOME PAGE ---
function renderAffirmation() {
    const txt = DATA.affirmations[Math.floor(Math.random() * DATA.affirmations.length)];
    const el = document.getElementById('daily-affirmation');
    if(el) el.textContent = txt;
}

const checkInBtn = document.getElementById('check-in-btn');
if(checkInBtn) {
    checkInBtn.addEventListener('click', () => {
        const today = new Date().toDateString();
        if (appState.lastCheckIn !== today) {
            appState.streak++;
            appState.lastCheckIn = today;
            saveData();
            updateStreakUI();
        }
    });
}

function updateStreakUI() {
    const el = document.getElementById('streak-display');
    if(el) el.textContent = appState.streak;
    
    const btn = document.getElementById('check-in-btn');
    if (btn && appState.lastCheckIn === new Date().toDateString()) {
        btn.innerHTML = `<span class="material-symbols-rounded">check_circle</span> See you tomorrow!`;
        btn.disabled = true;
        btn.style.opacity = "0.7";
    }
}

// --- SYLLABUS LOGIC ---

let currentExamType = 'prelims'; 

function switchSyllabus(type, btn) {
    currentExamType = type;
    const container = btn.parentElement;
    container.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initSubjectFilters(type);
}

function initSubjectFilters(examType) {
    const chipContainer = document.getElementById('subject-chips');
    if(!chipContainer) return; 
    chipContainer.innerHTML = ''; 
    
    const subjects = Object.keys(DATA.syllabus[examType]);
    
    subjects.forEach((subject, index) => {
        const btn = document.createElement('button');
        btn.className = 'chip';
        btn.textContent = subject.replace("Quantitative Aptitude", "Quant").replace("Reasoning Ability", "Reasoning"); 
        
        btn.onclick = () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            renderTopicList(examType, subject);
        };
        
        chipContainer.appendChild(btn);
        if (index === 0) btn.click();
    });
}

function renderTopicList(examType, subjectName) {
    const listContainer = document.getElementById('syllabus-list');
    if(!listContainer) return;
    listContainer.innerHTML = ''; 
    
    const header = document.createElement('h4');
    header.className = 'subject-header';
    header.textContent = subjectName;
    listContainer.appendChild(header);

    const topics = DATA.syllabus[examType][subjectName];

    topics.forEach(topic => {
        const status = appState.syllabus[topic] || 0;
        const item = document.createElement('div');
        item.className = `checklist-item status-${status}`;
        item.innerHTML = `<span>${topic}</span> <div class="status-indicator"></div>`;
        
        item.onclick = () => {
            let next = status + 1;
            if (next > 2) next = 0;
            appState.syllabus[topic] = next;
            saveData();
            renderTopicList(examType, subjectName); 
        };
        
        listContainer.appendChild(item);
    });
}

// --- MESSAGES ---
function showMessage(type) {
    const msgs = messages[type];
    const txt = msgs[Math.floor(Math.random() * msgs.length)];
    const el = document.getElementById('message-text');
    if(el) el.textContent = txt;
    document.getElementById('message-overlay').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('message-overlay').classList.add('hidden');
}

// --- 100 REASONS GENERATOR ---

function generateReasons() {
    const list = document.getElementById('reasons-list');
    const btn = document.getElementById('generate-btn');
    const endMsg = document.getElementById('reasons-end-msg');
    
    // Safety check for usedReasonIndices (Fixes the bug)
    if (!appState.usedReasonIndices) appState.usedReasonIndices = [];

    const totalReasons = DATA.reasons.length;
    const usedIndices = appState.usedReasonIndices;
    
    if (usedIndices.length >= totalReasons) {
        btn.classList.add('hidden');
        endMsg.classList.remove('hidden');
        return;
    }

    let availableIndices = [];
    for(let i=0; i < totalReasons; i++) {
        if (!usedIndices.includes(i)) availableIndices.push(i);
    }

    let count = 0;
    while (count < 5 && availableIndices.length > 0) {
        const randomIndexInPool = Math.floor(Math.random() * availableIndices.length);
        const actualDataIndex = availableIndices[randomIndexInPool];
        const txt = DATA.reasons[actualDataIndex];
        
        const li = document.createElement('li');
        li.textContent = txt;
        // Stagger animation (makes them pop in one by one)
        li.style.animationDelay = `${count * 0.1}s`;
        list.appendChild(li);
        
        appState.usedReasonIndices.push(actualDataIndex);
        availableIndices.splice(randomIndexInPool, 1);
        count++;
    }

    list.scrollTop = list.scrollHeight;
    saveData();
    
    if (appState.usedReasonIndices.length >= totalReasons) {
        btn.classList.add('hidden');
        endMsg.classList.remove('hidden');
    }
}

// --- MOCKS LOGIC ---
let currentMockType = 'prelims';

function renderMockWelcome() {
    const msgs = DATA.mockMessages;
    const txt = msgs[Math.floor(Math.random() * msgs.length)];
    const el = document.getElementById('mock-welcome-text');
    if(el) el.textContent = txt;
}

function switchMockTab(type, btn) {
    currentMockType = type;
    const container = btn.parentElement;
    container.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.getElementById('log-title').textContent = `Log ${type.charAt(0).toUpperCase() + type.slice(1)} Score`;
    document.getElementById('target-score-display').textContent = (type === 'prelims') ? "53" : "63";
    initChart();
}

function addMockScore() {
    const d = document.getElementById('mock-date').value;
    const s = document.getElementById('mock-score').value;
    const r = document.getElementById('mock-reflection').value;
    
    if(!d || !s) return alert("Please enter a date and score!");
    
    appState.mockScores[currentMockType].push({
        date: d, score: parseFloat(s), reflection: r
    });
    
    saveData();
    document.getElementById('mock-score').value = '';
    document.getElementById('mock-reflection').value = '';
    initChart();
    renderMockWelcome(); 
    alert("Score saved!");
}

let chartRef = null;
function initChart() {
    const ctxEl = document.getElementById('mockChart');
    if(!ctxEl) return;
    const ctx = ctxEl.getContext('2d');

    const scoresData = appState.mockScores[currentMockType].sort((a,b) => new Date(a.date) - new Date(b.date));
    const totalEl = document.getElementById('total-mocks-display');
    if(totalEl) totalEl.textContent = scoresData.length;

    const labels = scoresData.map(i => i.date.substring(5)); 
    const values = scoresData.map(i => i.score);
    
    const targetVal = (currentMockType === 'prelims') ? 53 : 63;
    let targetData = values.length > 0 ? Array(values.length).fill(targetVal) : [];

    if(chartRef) chartRef.destroy();
    
    chartRef = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My Score',
                    data: values,
                    borderColor: '#8EB8A6', 
                    backgroundColor: 'rgba(142, 184, 166, 0.2)',
                    tension: 0.3, fill: true, pointRadius: 5
                },
                {
                    label: 'Target',
                    data: targetData,
                    borderColor: '#D69EA5', 
                    borderDash: [5, 5], borderWidth: 2, pointRadius: 0, fill: false
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: true, grid: { display: false } },
                y: { beginAtZero: false, grid: { color: '#f0f0f0' }, suggestedMin: targetVal - 10, suggestedMax: targetVal + 10 }
            }
        }
    });
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    if(!list) return;
    list.innerHTML = '';
    const scores = appState.mockScores[currentMockType];
    
    if (scores.length === 0) {
        list.innerHTML = '<p class="empty-msg">No mocks logged yet.</p>';
        return;
    }

    const sortedScores = [...scores].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedScores.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'history-card';
        const dateObj = new Date(entry.date);
        const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const noteHtml = entry.reflection ? `<div class="history-note">"${entry.reflection}"</div>` : '';

        card.innerHTML = `
            <div class="history-header">
                <span class="history-date">${dateStr}</span>
                <span class="history-score">${entry.score}</span>
            </div>
            ${noteHtml}
        `;
        list.appendChild(card);
    });
}

// --- INFO ---
function updateCountdown() {
    const pEl = document.getElementById('days-prelims');
    const mEl = document.getElementById('days-mains');
    if(!pEl || !mEl) return;

    const diff = (target) => Math.ceil((new Date(target) - new Date()) / (86400000));
    const pDays = diff(DATA.dates.prelims);
    const mDays = diff(DATA.dates.mains);
    
    pEl.textContent = pDays > 0 ? pDays : 0;
    mEl.textContent = mDays > 0 ? mDays : 0;
}

function toggleAccordion(el) {
    el.parentElement.classList.toggle('open');
}

// --- STUDY JOURNAL ---
function logStudyHours() {
    const input = document.getElementById('study-hours-input');
    const hours = parseFloat(input.value);

    if (!hours || hours <= 0) {
        alert("Please enter a valid number of hours.");
        return;
    }

    appState.totalStudyHours = (appState.totalStudyHours || 0) + hours;
    saveData();
    updateTotalHoursUI();
    
    input.value = ''; 
    alert(`Added ${hours} hours to your journey! Great job.`);
}

function updateTotalHoursUI() {
    const total = appState.totalStudyHours || 0;
    const el = document.getElementById('total-hours-display');
    if(el) el.textContent = `${total.toFixed(1)} hrs`;

}

// --- RESET DATA LOGIC ---
function resetAppData() {
    const confirmReset = confirm("Are you sure you want to delete all data? This cannot be undone.");
    
    if (confirmReset) {
        // 1. Clear Local Storage
        localStorage.removeItem('studyApp_v4');
        localStorage.removeItem('mithu_intro_shown');
        // 2. Reset State in Memory
        appState = {
            streak: 0, 
            lastCheckIn: null, 
            syllabus: {}, 
            mockScores: { prelims: [], mains: [] },
            totalStudyHours: 0,
            usedReasonIndices: []
        };
        
        // 3. Reload Page to Refresh UI
        alert("App has been reset to new.");
        window.location.reload();
    }
}

// --- GSAP GIFT REVEAL LOGIC ---
function openGift() {
    // 1. Safety Check: If GSAP didn't load, hide manually
    if (typeof gsap === 'undefined') {
        document.getElementById('intro-overlay').style.display = 'none';
        localStorage.setItem('mithu_intro_shown', 'true');
        return;
    }

    // 2. Play Animation
    const tl = gsap.timeline({
        onComplete: () => {
            document.getElementById('intro-overlay').style.display = 'none';
        }
    });

    // Fade out text/button
    tl.to('.intro-content', {
        duration: 0.4, scale: 0.8, opacity: 0, ease: "back.in(1.7)"
    });

    // Open Curtains
    tl.to('.curtain-left', {
        duration: 2.0, x: '-100%', ease: "power4.inOut"
    }, 0.3);

    tl.to('.curtain-right', {
        duration: 2.0, x: '100%', ease: "power4.inOut"
    }, 0.3);

    // 3. Remember that she opened it
    localStorage.setItem('mithu_intro_shown', 'true');
}

