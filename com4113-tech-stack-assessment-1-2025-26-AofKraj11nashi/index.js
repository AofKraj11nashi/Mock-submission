const app = {
    isAuthenticated: false,
    currentView: 'home',

    init() {
        // Initialize Icons
        lucide.createIcons();
        
        // Check Auth
        const auth = localStorage.getItem('auth');
        if (auth === 'true') {
            this.isAuthenticated = true;
            this.showApp();
        } else {
            this.showAuth();
        }

        // Setup Listeners
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.view) {
                this.navigate(e.state.view, false);
            }
        });
    },

    handleLogin(e) {
        e.preventDefault();
        // Simulate API call
        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Signing in...';
        btn.disabled = true;

        setTimeout(() => {
            this.isAuthenticated = true;
            localStorage.setItem('auth', 'true');
            btn.innerText = originalText;
            btn.disabled = false;
            this.showApp();
        }, 800);
    },

    handleLogout() {
        this.isAuthenticated = false;
        localStorage.removeItem('auth');
        this.showAuth();
    },

    showAuth() {
        document.getElementById('auth-screen').classList.remove('hidden');
        document.getElementById('app-layout').classList.add('hidden');
    },

    showApp() {
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('app-layout').classList.remove('hidden');
        this.navigate('home', false);
    },

    navigate(viewId, pushState = true) {
        if (!this.isAuthenticated) return;

        // Hide all views
        document.querySelectorAll('.view').forEach(el => {
            el.classList.remove('active');
            // Small delay to allow display:none to apply if we want animations, 
            // but for simple vanilla, just toggling active class which controls display
            setTimeout(() => {
               if(!el.classList.contains('active')) el.classList.add('hidden'); 
            }, 0); 
        });

        // Show target view
        const target = document.getElementById(`view-${viewId}`);
        if (target) {
            // Remove hidden first
            target.classList.remove('hidden');
            // Force reflow
            void target.offsetWidth; 
            target.classList.add('active');
            
            // Scroll top
            document.querySelector('.main-content').scrollTop = 0;
        }

        // Update Nav State
        this.updateNav(viewId);

        // History
        if (pushState) {
            history.pushState({ view: viewId }, '', `#${viewId}`);
        }

        this.currentView = viewId;
        
        // Refresh Icons in case new content rendered (not relevant for static, but good practice)
        lucide.createIcons();
    },

    updateNav(viewId) {
        // Clear all active
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        
        // Set active for Desktop
        const desktopNav = document.getElementById(`nav-${viewId}`);
        if (desktopNav) desktopNav.classList.add('active');

        // Set active for Mobile
        const mobileNav = document.getElementById(`mobile-nav-${viewId}`);
        if (mobileNav) mobileNav.classList.add('active');
    }
};

// Start App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
