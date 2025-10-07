// Main Application Controller
class ScamDetectionApp {
    constructor() {
        this.analyzer = new ScamAnalyzer();
        this.analysisHistory = new AnalysisHistory();
        this.currentScreen = 'start';
        this.screens = {};
        
        this.init();
    }

    init() {
        //setup screens
        this.screens.start = new StartScreen(this);
        this.screens.main = new MainScreen(this);
        this.screens.education = new EducationScreen(this);
        
        this.setupNavigation();
        this.showScreen('start');
        this.updateActiveNavigation();
        
        console.log('Scam Detection is ready.');
    }

    setupNavigation() {
        // Navigation setup
        document.querySelectorAll('[data-screen]').forEach(element => {
            element.addEventListener('click', (evt) => {
                evt.preventDefault();
                const screen = element.getAttribute('data-screen');
                this.showScreen(screen);
                this.updateActiveNavigation();
            });
        });
    }

    showScreen(name) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        const target = document.getElementById(`${screenName}-screen`);
        if (target) {
            target.classList.add('active');
            
            // cleanup old screen
            if (this.screens[this.currentScreen]?.deactivate) {
                this.screens[this.currentScreen].deactivate();
            }
            
            this.currentScreen = name;
            
            // Activate new screen
            if (this.screens[name] && this.screens[name].activate) {
                this.screens[name].activate();
            }
        }
    }

    updateActiveNavigation() {
        // clear active states
        document.querySelectorAll('.nav-link').forEach(lnk => {
            lnk.classList.remove('active');
        });

        // set current active
        document.querySelectorAll(`[data-screen="${this.currentScreen}"]`).forEach(lnk => {
            if (lnk.classList.contains('nav-link')) {
                lnk.classList.add('active');
            }
        });
    }

    showAlert(message, type = 'info') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = msg;
        
        // Add close button
        const closeButtonn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.float = 'right';
        closeBtn.style.cursor = 'pointer';
        closeButtonn.style.marginLeft = '20px';
        closeButtonn.onclick = () => alert.remove();
        alert.appendChild(closeButtonn);
        
        // Add to alert container or body
        let alertContainer = document.getElementById('alert-container');
        if (!alertContainer) {
            alertContainer = document.createElement('div');
            alertContainer.id = 'alert-container';
            alertContainer.style.position = 'fixed';
            alertContainer.style.top = '100px';
            alertContainer.style.right = '20px';
            alertContainer.style.zIndex = '1000';
            document.body.appendChild(alertContainer);
        }
        
        alertContainer.appendChild(alert);

        // auto dismiss after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    getCurrentScreen() {
        return this.currentScreen;
    }

    getScreenController(name) {
        return this.screens[name];
    }
}

// global reference
let app;

document.addEventListener('DOMContentLoaded', () => {
    console.log('Starting up...');
    app = new ScamDetectionApp();
    window.app = app; // debug access
    console.log('Ready');
});
