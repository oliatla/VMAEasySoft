// EasySoft 8 Kennsluvefur - JavaScript
// Navbar er byggður sjálfkrafa úr nav-config.js

// ============================================
// Finna slóð á skrár út frá núverandi síðu
// ============================================
function getBasePath() {
    const path = window.location.pathname;
    // Ef við erum í undirmöppu (kafli1, kafli2, etc.)
    if (path.includes('/kafli') || path.includes('/upprifjun')) {
        return '../';
    }
    return '';
}

function getCurrentLesson() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    for (const chapter of NAV_CONFIG.chapters) {
        for (const lesson of chapter.lessons) {
            if (lesson.file === filename) {
                return { chapter, lesson };
            }
        }
    }
    return null;
}

// ============================================
// Byggja Navbar
// ============================================
function buildNavbar() {
    const navSection = document.querySelector('.nav-section');
    if (!navSection) return;
    
    const basePath = getBasePath();
    const current = getCurrentLesson();
    
    let html = '';
    
    for (const chapter of NAV_CONFIG.chapters) {
        const isCurrentChapter = current && current.chapter.id === chapter.id;
        const chapterActiveClass = isCurrentChapter ? ' active' : '';
        const lessonsExpandedClass = isCurrentChapter ? ' expanded' : '';
        
        // Finna rétta slóð á möppu
        let folderPath = basePath + chapter.folder + '/';
        if (basePath === '' && chapter.folder === '') {
            folderPath = '';
        }
        
        html += `
        <div class="nav-chapter">
            <div class="nav-chapter-title${chapterActiveClass}" onclick="toggleChapter(this)" data-chapter="${chapter.id}">
                <div class="chapter-icon">${chapter.icon}</div>
                <span>${chapter.title}</span>
            </div>
            <div class="nav-lessons${lessonsExpandedClass}" id="chapter-${chapter.id}-lessons">`;
        
        for (const lesson of chapter.lessons) {
            const isCurrentLesson = current && current.lesson.id === lesson.id;
            const lessonActiveClass = isCurrentLesson ? ' active' : '';
            const lessonPath = basePath + chapter.folder + '/' + lesson.file;
            
            html += `
                <a class="nav-lesson${lessonActiveClass}" href="${lessonPath}" data-lesson="${lesson.id}">
                    <div class="lesson-status"></div>
                    <span>${lesson.title}</span>
                </a>`;
        }
        
        html += `
            </div>
        </div>`;
    }
    
    navSection.innerHTML = html;
}

// ============================================
// Toggle sidebar for mobile
// ============================================
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const btn = document.querySelector('.mobile-menu-btn');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    btn.classList.toggle('active');
}

// Toggle chapter expansion in sidebar
function toggleChapter(element) {
    const chapterNum = element.dataset.chapter;
    const lessons = document.getElementById(`chapter-${chapterNum}-lessons`);
    
    if (!lessons) return;
    
    const isExpanded = lessons.classList.contains('expanded');
    
    if (isExpanded) {
        lessons.classList.remove('expanded');
        element.classList.remove('active');
    } else {
        lessons.classList.add('expanded');
        element.classList.add('active');
    }
}

// ============================================
// Progress tracking with localStorage
// ============================================
function getCompletedLessons() {
    return JSON.parse(localStorage.getItem('easysoft-completed') || '[]');
}

function markLessonComplete(lessonId) {
    let completed = getCompletedLessons();
    if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem('easysoft-completed', JSON.stringify(completed));
    }
    updateProgress();
}

function updateProgress() {
    const completed = getCompletedLessons();
    const totalLessons = NAV_CONFIG.totalLessons;
    const percent = Math.round((completed.length / totalLessons) * 100);
    
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    
    if (progressFill) {
        progressFill.style.width = `${percent}%`;
    }
    if (progressPercent) {
        progressPercent.textContent = `${percent}%`;
    }
    
    // Update lesson status indicators
    completed.forEach(lessonId => {
        const lessonEl = document.querySelector(`[data-lesson="${lessonId}"]`);
        if (lessonEl) {
            lessonEl.classList.add('completed');
        }
    });
}

// ============================================
// Initialize page
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Byggja navbar
    buildNavbar();
    
    // Uppfæra progress
    updateProgress();
});

// ============================================
// SET/RESET Demo Functions
// ============================================

// Lesson 2-1: SET Demo
let setDemoState = false;

function toggleSetDemo() {
    setDemoState = true;
    updateSetDemoUI();
}

function resetSetDemo() {
    setDemoState = false;
    updateSetDemoUI();
}

function updateSetDemoUI() {
    const input = document.getElementById('set-input');
    const coil = document.getElementById('set-coil');
    const output = document.getElementById('set-output');
    const state = document.getElementById('set-state');
    const btn = document.getElementById('set-btn');
    
    if (setDemoState) {
        if (input) input.classList.add('active');
        if (coil) coil.classList.add('active');
        if (output) output.classList.add('on');
        if (state) state.textContent = 'ON';
        if (btn) btn.classList.add('active');
        
        setTimeout(() => {
            if (input) input.classList.remove('active');
        }, 300);
    } else {
        if (input) input.classList.remove('active');
        if (coil) coil.classList.remove('active');
        if (output) output.classList.remove('on');
        if (state) state.textContent = 'OFF';
        if (btn) btn.classList.remove('active');
    }
}

// Lesson 2-2: RESET Demo
let resetDemoState = false;

function toggleResetSetDemo() {
    resetDemoState = true;
    updateResetDemoUI();
}

function toggleResetDemo() {
    resetDemoState = false;
    updateResetDemoUI();
}

function updateResetDemoUI() {
    const input = document.getElementById('reset-input');
    const coil = document.getElementById('reset-coil');
    const output = document.getElementById('reset-output');
    const state = document.getElementById('reset-state');
    const setBtn = document.getElementById('reset-set-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    if (resetDemoState) {
        if (output) output.classList.add('on');
        if (state) state.textContent = 'ON';
        if (setBtn) setBtn.classList.add('active');
        if (resetBtn) resetBtn.classList.remove('active');
        if (input) input.classList.remove('active');
        if (coil) coil.classList.remove('active');
    } else {
        if (output) output.classList.remove('on');
        if (state) state.textContent = 'OFF';
        if (setBtn) setBtn.classList.remove('active');
        if (resetBtn) resetBtn.classList.add('active');
        if (input) input.classList.add('active');
        if (coil) coil.classList.add('active');
        
        setTimeout(() => {
            if (input) input.classList.remove('active');
            if (resetBtn) resetBtn.classList.remove('active');
        }, 300);
    }
}

// Lesson 2-3: Combo Demo
let comboDemoState = false;

function comboStart() {
    comboDemoState = true;
    updateComboDemoUI();
    
    const startInput = document.getElementById('combo-start');
    const setCoil = document.getElementById('combo-set-coil');
    if (startInput) startInput.classList.add('active');
    if (setCoil) setCoil.classList.add('active');
    
    setTimeout(() => {
        if (startInput) startInput.classList.remove('active');
    }, 300);
}

function comboStop() {
    comboDemoState = false;
    updateComboDemoUI();
    
    const stopInput = document.getElementById('combo-stop');
    const resetCoil = document.getElementById('combo-reset-coil');
    if (stopInput) stopInput.classList.add('active');
    if (resetCoil) resetCoil.classList.add('active');
    
    setTimeout(() => {
        if (stopInput) stopInput.classList.remove('active');
        if (resetCoil) resetCoil.classList.remove('active');
    }, 300);
}

function updateComboDemoUI() {
    const output = document.getElementById('combo-output');
    const state = document.getElementById('combo-state');
    const startBtn = document.getElementById('combo-start-btn');
    const stopBtn = document.getElementById('combo-stop-btn');
    const setCoil = document.getElementById('combo-set-coil');
    const resetCoil = document.getElementById('combo-reset-coil');
    
    if (comboDemoState) {
        if (output) output.classList.add('on');
        if (state) state.textContent = 'KEYRIR';
        if (startBtn) startBtn.classList.add('active');
        if (stopBtn) stopBtn.classList.remove('active');
    } else {
        if (output) output.classList.remove('on');
        if (state) state.textContent = 'STÖÐVAÐUR';
        if (startBtn) startBtn.classList.remove('active');
        if (setCoil) setCoil.classList.remove('active');
    }
}
