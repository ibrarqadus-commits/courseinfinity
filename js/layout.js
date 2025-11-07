// Inject shared hero + navbar identical to index.html
(function injectSharedLayout() {
    try {
        // If siteLogoTopRight already exists (index.html), skip injection
        if (document.getElementById('siteLogoTopRight')) return;

        // Remove any existing top nav to avoid duplicates
        var firstNav = document.querySelector('body > nav');
        if (firstNav && !firstNav.id) {
            firstNav.parentNode.removeChild(firstNav);
        }

        var headerHtml = '' +
            '<div id="siteLogoFixed" class="fixed top-2 right-2 sm:top-4 sm:right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-1 sm:p-2 shadow-lg transition-opacity duration-200">' +
            '  <img id="siteLogoTopRight" src="assets/logo.svg" alt="Logo" class="h-10 w-auto sm:h-16 md:h-[72px]" />' +
            '</div>' +
            '<section id="heroSection" class="bg-gradient-to-b from-[#244855] to-black text-white min-h-[30vh] sm:h-[36vh] flex items-center py-6 sm:py-0 relative">' +
            '  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">' +
            '    <div class="text-center">' +
            '      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 leading-tight px-2">Monty\'s Letting & Management</h1>' +
            '      <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-3 sm:mb-4 leading-snug px-2">Guerrilla Business Mastermind</h2>' +
            '      <p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-4">Master the art of property management and build your path to financial freedom through proven lettings and management strategies.</p>' +
            '      <div class="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 px-4">' +
            '        <a href="register.html" class="bg-white text-[#244855] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-center text-sm sm:text-base">Get Started</a>' +
            '        <a href="index.html#modules" class="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-white hover:text-[#244855] transition text-center text-sm sm:text-base">Learn More</a>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</section>' +
            '<nav id="sharedNavbar" class="bg-white shadow-lg sticky top-0 z-50">' +
            '  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +
            '    <div class="flex justify-between items-center h-16">' +
            '      <div class="flex items-center space-x-2">' +
            '        <!-- Mobile menu button -->' +
            '        <button id="mobileMenuButton" class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none">' +
            '          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
            '            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>' +
            '          </svg>' +
            '        </button>' +
            '        <!-- Desktop navigation -->' +
            '        <div class="hidden lg:flex items-center space-x-2">' +
            '          <a href="index.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="index.html">Home</a>' +
            '          <div class="nav-link-container">' +
            '            <a href="module1.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module1.html" data-module="1">Module 1</a>' +
            '            <div class="module-units-dropdown" data-module="1"></div>' +
            '          </div>' +
            '          <div class="nav-link-container">' +
            '            <a href="module2.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module2.html" data-module="2">Module 2</a>' +
            '            <div class="module-units-dropdown" data-module="2"></div>' +
            '          </div>' +
            '          <div class="nav-link-container">' +
            '            <a href="module3.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module3.html" data-module="3">Module 3</a>' +
            '            <div class="module-units-dropdown" data-module="3"></div>' +
            '          </div>' +
            '          <div class="nav-link-container">' +
            '            <a href="module4.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module4.html" data-module="4">Module 4</a>' +
            '            <div class="module-units-dropdown" data-module="4"></div>' +
            '          </div>' +
            '          <div class="nav-link-container">' +
            '            <a href="module5.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module5.html" data-module="5">Module 5</a>' +
            '            <div class="module-units-dropdown" data-module="5"></div>' +
            '          </div>' +
            '          <div class="nav-link-container">' +
            '            <a href="module6.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module6.html" data-module="6">Module 6</a>' +
            '            <div class="module-units-dropdown" data-module="6"></div>' +
            '          </div>' +
            '          <div class="nav-link-container">' +
            '            <a href="module7.html" class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105" data-page="module7.html" data-module="7">Module 7</a>' +
            '            <div class="module-units-dropdown" data-module="7"></div>' +
            '          </div>' +
            '        </div>' +
            '      </div>' +
            '      <div class="flex items-center space-x-4" id="authButtons">' +
            '        <!-- These will be dynamically shown/hidden based on login status -->' +
            '        <div id="loggedOutButtons" class="flex items-center space-x-2 sm:space-x-4">' +
            '          <a href="register.html" class="hidden sm:block bg-[#244855] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1a3540] transition text-sm">Register</a>' +
            '          <a href="login.html" class="hidden sm:block bg-transparent border-2 border-[#244855] text-[#244855] px-4 py-2 rounded-lg font-semibold hover:bg-[#244855] hover:text-white transition text-sm">Student Login</a>' +
            '        </div>' +
            '        <div id="loggedInButtons" class="hidden flex items-center space-x-2 sm:space-x-4">' +
            '          <span class="hidden sm:block text-sm text-gray-700 font-medium" id="studentNameDisplay"></span>' +
            '          <button onclick="handleStudentLogout()" class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition text-sm">Logout</button>' +
            '        </div>' +
            '      </div>' +
            '    </div>' +
            '    <!-- Mobile menu -->' +
            '    <div id="mobileMenu" class="hidden lg:hidden border-t border-gray-200 py-2">' +
            '      <div class="flex flex-col space-y-1">' +
            '        <a href="index.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="index.html">Home</a>' +
            '        <div id="mobileLoggedOutButtons">' +
            '          <a href="register.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform bg-[#244855] text-white">Register</a>' +
            '          <a href="login.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform border-2 border-[#244855] text-[#244855]">Student Login</a>' +
            '        </div>' +
            '        <div id="mobileLoggedInButtons" class="hidden">' +
            '          <div class="px-4 py-2 text-sm text-gray-700 font-medium" id="mobileStudentNameDisplay"></div>' +
            '          <button onclick="handleStudentLogout()" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform bg-red-600 text-white">Logout</button>' +
            '        </div>' +
            '        <a href="module1.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module1.html">Module 1</a>' +
            '        <a href="module2.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module2.html">Module 2</a>' +
            '        <a href="module3.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module3.html">Module 3</a>' +
            '        <a href="module4.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module4.html">Module 4</a>' +
            '        <a href="module5.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module5.html">Module 5</a>' +
            '        <a href="module6.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module6.html">Module 6</a>' +
            '        <a href="module7.html" class="nav-link-mobile px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform" data-page="module7.html">Module 7</a>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</nav>';

        // Add navigation styles if not already present
        if (!document.getElementById('navStyles')) {
            var style = document.createElement('style');
            style.id = 'navStyles';
            style.textContent = `
                .nav-link {
                    background-color: rgb(243 244 246);
                    color: rgb(55 65 81);
                }
                .nav-link:hover {
                    background-color: rgb(229 231 235);
                }
                .nav-link.active {
                    background-color: #244855;
                    color: white;
                    font-weight: 600;
                    animation: buttonPulse 0.5s ease-in-out;
                }
                .nav-link-mobile {
                    background-color: rgb(243 244 246);
                    color: rgb(55 65 81);
                }
                .nav-link-mobile:hover {
                    background-color: rgb(229 231 235);
                }
                .nav-link-mobile.active {
                    background-color: #244855;
                    color: white;
                    font-weight: 600;
                    animation: buttonPulse 0.5s ease-in-out;
                }
                @keyframes buttonPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                html { scroll-behavior: smooth; }
                @media (prefers-reduced-motion: reduce) {
                    * { animation: none !important; transition: none !important; }
                }
                /* Minimal prose fallback when Tailwind Typography plugin isn't present */
                .prose { color: #1f2937; line-height: 1.8; }
                .prose h1 { font-size: 2rem; font-weight: 700; margin: 1.25rem 0 0.75rem; }
                .prose h2 { font-size: 1.5rem; font-weight: 700; margin: 1rem 0 0.5rem; }
                .prose h3 { font-size: 1.25rem; font-weight: 600; margin: 0.75rem 0 0.5rem; }
                .prose p { margin: 0.75rem 0; }
                .prose ul, .prose ol { margin: 0.75rem 0 0.75rem 1.25rem; }
                .prose li { margin: 0.25rem 0; }
                .prose a { color: #244855; text-decoration: underline; }
                .prose-lg { font-size: 1.0625rem; }
                /* Module units dropdown */
                .module-units-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: linear-gradient(to bottom, #244855, black);
                    border: 2px solid #244855;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    min-width: 280px;
                    max-width: 400px;
                    max-height: 500px;
                    overflow-y: auto;
                    z-index: 9999;
                    margin-top: 4px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
                    pointer-events: none;
                }
                .module-units-dropdown:empty::before {
                    content: 'Loading units...';
                    padding: 16px;
                    color: white;
                    display: block;
                }
                .nav-link-container {
                    position: relative;
                    display: inline-block;
                }
                .nav-link-container:hover .module-units-dropdown {
                    opacity: 1 !important;
                    visibility: visible !important;
                    transform: translateY(0) !important;
                    pointer-events: auto !important;
                    display: block !important;
                }
                /* Disable dropdown for modules without access */
                .nav-link-container.no-access:hover .module-units-dropdown {
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                    display: none !important;
                }
                .nav-link-container.no-access .nav-link {
                    opacity: 0.5;
                    cursor: not-allowed;
                    pointer-events: auto;
                }
                .nav-link-container.no-access .nav-link:hover {
                    opacity: 0.6;
                }
                .nav-link-container:hover .module-units-dropdown a {
                    pointer-events: auto;
                }
                .module-units-dropdown ul {
                    list-style: none;
                    padding: 8px 0;
                    margin: 0;
                }
                .module-units-dropdown li {
                    padding: 0;
                    margin: 0;
                }
                .module-units-dropdown a {
                    display: block;
                    padding: 10px 16px;
                    color: white;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                    font-size: 0.875rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .module-units-dropdown a:last-child {
                    border-bottom: none;
                }
                .module-units-dropdown a:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                }
                .module-units-dropdown .unit-id {
                    font-weight: 600;
                    color: white;
                    margin-right: 8px;
                }
                /* Mobile and tablet optimizations */
                @media (max-width: 1024px) {
                    .module-units-dropdown {
                        min-width: 250px;
                        max-width: 90vw;
                        left: 50%;
                        transform: translateX(-50%) translateY(-10px);
                    }
                    .nav-link-container:hover .module-units-dropdown {
                        transform: translateX(-50%) translateY(0) !important;
                    }
                }
                @media (max-width: 768px) {
                    .module-units-dropdown {
                        position: fixed;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%) scale(0.95);
                        max-width: 85vw;
                        max-height: 70vh;
                        border-radius: 8px;
                    }
                    .nav-link-container:hover .module-units-dropdown,
                    .nav-link-container:active .module-units-dropdown {
                        transform: translateX(-50%) translateY(-50%) scale(1) !important;
                    }
                }
                /* Touch-friendly improvements */
                @media (hover: none) and (pointer: coarse) {
                    .nav-link-container:active .module-units-dropdown {
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: translateY(0) !important;
                        pointer-events: auto !important;
                        display: block !important;
                    }
                }
                /* Mobile adjustments */
                @media (max-width: 640px) {
                    .nav-link, .nav-link-mobile {
                        min-height: 44px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0.75rem 1rem;
                    }
                    body {
                        overflow-x: hidden;
                        width: 100%;
                    }
                }
                /* Tablet and iPad optimizations */
                @media (min-width: 641px) and (max-width: 1024px) {
                    .nav-link {
                        min-height: 44px;
                        padding: 0.625rem 1rem;
                    }
                    .module-units-dropdown {
                        min-width: 300px;
                    }
                }
                /* Prevent text selection on buttons for better touch experience */
                .nav-link, .nav-link-mobile, button {
                    -webkit-tap-highlight-color: transparent;
                    touch-action: manipulation;
                }
            `;
            document.head.appendChild(style);
        }

        // Performance: Preconnect to Google Fonts
        (function ensurePreconnect(){
            try {
                var head = document.head;
                if (!head) return;
                var hasGFonts = !!head.querySelector('link[rel="preconnect"][href*="fonts.googleapis.com"]');
                var hasGStatic = !!head.querySelector('link[rel="preconnect"][href*="fonts.gstatic.com"]');
                if (!hasGFonts) {
                    var l1 = document.createElement('link');
                    l1.rel = 'preconnect';
                    l1.href = 'https://fonts.googleapis.com';
                    head.appendChild(l1);
                }
                if (!hasGStatic) {
                    var l2 = document.createElement('link');
                    l2.rel = 'preconnect';
                    l2.href = 'https://fonts.gstatic.com';
                    l2.crossOrigin = 'anonymous';
                    head.appendChild(l2);
                }
            } catch (e) {}
        })();

        var frag = document.createElement('div');
        frag.innerHTML = headerHtml;
        document.body.insertBefore(frag, document.body.firstChild);

        // Render top-right logo (respects admin settings)
        (function renderTopRightLogo(){
            try {
                var logoEl = document.getElementById('siteLogoTopRight');
                if (!logoEl) return;
                var storedLogo = JSON.parse(localStorage.getItem('siteLogo')) || {};
                var profileImage = JSON.parse(localStorage.getItem('profileImage')) || {};
                var src = storedLogo.dataUrl || storedLogo.url || profileImage.dataUrl || profileImage.url;
                var defaultSvg = 'assets/logo.svg';
                var defaultPng = 'assets/logo.png';

                if (src) {
                    logoEl.src = src;
                    logoEl.onerror = function(){
                        logoEl.onerror = null;
                        logoEl.src = defaultSvg;
                        logoEl.onerror = function(){ logoEl.onerror = null; logoEl.src = defaultPng; };
                    };
                } else {
                    logoEl.src = defaultSvg;
                    logoEl.onerror = function(){ logoEl.onerror = null; logoEl.src = defaultPng; };
                }
            } catch (e) {}
        })();

        // Show fixed top-right logo only when hero is visible and not overlapping navbar
        (function toggleFixedLogoWithHero(){
            try {
                var hero = document.getElementById('heroSection');
                var fixedLogo = document.getElementById('siteLogoFixed');
                var nav = document.querySelector('nav');
                if (!hero || !fixedLogo) return;

                function updateVisibility() {
                    var rect = hero.getBoundingClientRect();
                    var navHeight = nav ? nav.getBoundingClientRect().height : 0;
                    var intersects = rect.bottom > 0 && rect.top < window.innerHeight;
                    var withinHeroOnly = rect.bottom > Math.max(0, navHeight);
                    var show = intersects && withinHeroOnly;
                    fixedLogo.classList.toggle('opacity-0', !show);
                    fixedLogo.classList.toggle('pointer-events-none', !show);
                }

                if ('IntersectionObserver' in window) {
                    var observer = new IntersectionObserver(function(entries){
                        var entry = entries && entries[0];
                        var heroVisible = !!(entry && entry.isIntersecting);
                        var rect = hero.getBoundingClientRect();
                        var navHeight = nav ? nav.getBoundingClientRect().height : 0;
                        var withinHeroOnly = rect.bottom > Math.max(0, navHeight);
                        var show = heroVisible && withinHeroOnly;
                        fixedLogo.classList.toggle('opacity-0', !show);
                        fixedLogo.classList.toggle('pointer-events-none', !show);
                    }, { threshold: 0 });
                    observer.observe(hero);
                }

                window.addEventListener('scroll', updateVisibility, { passive: true });
                window.addEventListener('resize', updateVisibility);
                updateVisibility();
            } catch (e) {}
        })();
        
        // Mobile menu toggle
        (function initMobileMenu() {
            try {
                const menuButton = document.getElementById('mobileMenuButton');
                const mobileMenu = document.getElementById('mobileMenu');
                
                if (menuButton && mobileMenu) {
                    menuButton.addEventListener('click', function() {
                        mobileMenu.classList.toggle('hidden');
                    });
                    
                    // Close menu when clicking outside
                    document.addEventListener('click', function(event) {
                        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                            mobileMenu.classList.add('hidden');
                        }
                    });
                }
            } catch (e) {}
        })();

        // Set active navigation link based on current page
        (function setActiveNavLink() {
            try {
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                const allLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
                
                allLinks.forEach(link => {
                    const linkPage = link.getAttribute('data-page');
                    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            } catch (e) {}
        })();

        // Module units data
        const moduleUnitsData = {
            '1': [
                { id: '1.1', title: 'Introduction: Current & Desired Situation, Financial Freedom, Background' },
                { id: '1.2', title: 'Understanding Property Strategies' },
                { id: '1.3', title: 'Setting Your Financial Freedom Goals + Calculator' },
                { id: '1.4', title: 'Understanding Service & L&M Fee Structures' },
                { id: '1.5', title: 'Creating Your Employment Exit & Property Business Plan' },
                { id: '1.6', title: 'Lettings & Property Management Action Plan + Flow A–Z' }
            ],
            '2': [
                { id: '2.1', title: 'What to Expect as a Lettings & Management Business Owner' },
                { id: '2.2', title: 'Understanding Different Property Types & Locations' },
                { id: '2.3', title: '7 Key Steps to Property Management Success' },
                { id: '2.4', title: 'Best & Worst Property Types for Letting & Management' },
                { id: '2.5', title: '8 Key Rules for Successful Lettings & Management' },
                { id: '2.6', title: 'Understanding Landlord & Tenant Demographics' },
                { id: '2.7', title: 'Identifying Your Target Market & Opportunities' },
                { id: '2.8', title: 'Using Property Portals & Data Tools' },
                { id: '2.9', title: 'Research for Property Valuation & Investment Analysis + Recap' }
            ],
            '3': [
                { id: '3.1', title: 'Creating Your Limited Company' },
                { id: '3.2', title: 'Securing Domain Name & Website Setup' },
                { id: '3.3', title: 'Registering with TDS & The Property Ombudsman' },
                { id: '3.4', title: 'Admin Sorted: Internal T&Cs, Tenancy Agreements, Templates, Signatures' },
                { id: '3.5', title: 'Service Provider Network' },
                { id: '3.6', title: 'New Legislation, Investment Numbers & Taxes – Golden Opportunity' },
                { id: '3.7', title: 'Boost: Are You Ready to Onboard Your First Landlord?' }
            ],
            '4': [
                { id: '4.1', title: 'Identifying Locations, Properties & Landlords' },
                { id: '4.2', title: 'Winning Property Accounts' },
                { id: '4.3', title: 'Valuation, Keys & Marketing for Viewings' },
                { id: '4.4', title: 'Professional Photography & Paid Advertising' },
                { id: '4.5', title: 'Enquiries, Viewings & Securing the Best Tenants' },
                { id: '4.6', title: 'Holding Deposits & Negotiations' },
                { id: '4.7', title: 'Sign Tenancy Agreement, Inventory & Handover' },
                { id: '4.8', title: 'Invoicing & Payment Collection' }
            ],
            '5': [
                { id: '5.1', title: 'Creating an Accounts Ledger' },
                { id: '5.2', title: 'Monthly Statements & Relationship Building' },
                { id: '5.3', title: 'Maintenance Reporting & Contractor Sourcing' },
                { id: '5.4', title: 'Utility & Council Tax Transfers + Running Costs' },
                { id: '5.5', title: 'Building Landlord Relationships & Brand Value' },
                { id: '5.6', title: 'Periodic Inspections & Reports' },
                { id: '5.7', title: 'Inspection Reports (Template) & Renovation Planning' },
                { id: '5.8', title: 'Managing Renovations & Contractors Effectively' },
                { id: '5.9', title: 'Running Costs & Budget Control' },
                { id: '5.10', title: 'Happy Landlord = Long-Term Landlord' }
            ],
            '6': [
                { id: '6.1', title: 'End of Tenancy Process' },
                { id: '6.2', title: 'Landlord Retention vs Agent Switching' },
                { id: '6.3', title: 'Remarketing & Avoiding Void Periods' },
                { id: '6.4', title: 'Securing New Tenants (Rinse & Repeat Model)' },
                { id: '6.5', title: 'Tenant Checkout, Inventory & Handover' },
                { id: '6.6', title: 'Repairs, Cleaning & Re-Letting Preparation' },
                { id: '6.7', title: 'Deposit Return & Closing Utilities' },
                { id: '6.8', title: 'Updating Landlords with Reports & Invoices' }
            ],
            '7': [
                { id: '7.1', title: 'Business Portfolio Review & Mid-Tenancy Inspections' },
                { id: '7.2', title: 'Getting More Landlords Effectively' },
                { id: '7.3', title: 'Expanding Portfolio & Referral Clients' },
                { id: '7.4', title: 'High-Converting Property Listings & Marketing Strategy' },
                { id: '7.5', title: 'Professional Property Photography' },
                { id: '7.6', title: 'Facebook Advertising & Targeting Overseas Landlords' },
                { id: '7.7', title: 'Scaling Towards Financial Freedom' },
                { id: '7.8', title: 'Next Course / Graduation Pathway' }
            ]
        };

        // Populate module units dropdowns
        (function populateModuleUnitsDropdowns() {
            function populate() {
                try {
                    const dropdowns = document.querySelectorAll('.module-units-dropdown');
                    if (dropdowns.length === 0) {
                        return;
                    }
                    dropdowns.forEach(dropdown => {
                        const moduleId = dropdown.getAttribute('data-module');
                        const units = moduleUnitsData[moduleId] || [];
                        
                        if (units.length > 0) {
                            let html = '<ul>';
                            units.forEach(unit => {
                                const modulePage = `module${moduleId}.html`;
                                const unitUrl = `${modulePage}?unit=${unit.id}`;
                                html += `<li><a href="${unitUrl}" onclick="event.stopPropagation();"><span class="unit-id">${unit.id}</span>${unit.title}</a></li>`;
                            });
                            html += '</ul>';
                            dropdown.innerHTML = html;
                        }
                    });
                } catch (e) {
                    console.error('Error populating module units dropdowns:', e);
                }
            }
            
            // Run immediately and also on DOMContentLoaded to ensure it works
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', populate);
            } else {
                populate();
            }
            // Also run after a short delay to catch any dynamically loaded content
            setTimeout(populate, 100);
        })();

        // Disable dropdowns for modules without access
        (function disableUnauthorizedModuleDropdowns() {
            function disableDropdowns() {
                try {
                    // Check if student is logged in
                    if (typeof getCurrentStudent !== 'function') {
                        return; // main.js not loaded yet
                    }
                    
                    const currentStudent = getCurrentStudent();
                    if (!currentStudent) {
                        // Not logged in - all modules accessible (they'll see access denied on click)
                        return;
                    }

                    // Get student's access modules
                    const accessModules = currentStudent.accessModules || [];
                    
                    // Find all module link containers
                    const navContainers = document.querySelectorAll('.nav-link-container');
                    
                    // Disable nav dropdowns for modules without access
                    navContainers.forEach(container => {
                        const moduleLink = container.querySelector('.nav-link[data-module]');
                        if (moduleLink) {
                            const moduleId = moduleLink.getAttribute('data-module');
                            if (!accessModules.includes(parseInt(moduleId))) {
                                container.classList.add('no-access');
                            }
                        }
                    });
                } catch (e) {
                    console.error('Error disabling unauthorized module dropdowns:', e);
                }
            }
            
            // Run after a delay to ensure main.js is loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(disableDropdowns, 200);
                });
            } else {
                setTimeout(disableDropdowns, 200);
            }
        })();

        // Update navigation based on student login status
        (function updateAuthNavigation() {
            function updateNav() {
                try {
                    if (typeof getCurrentStudent !== 'function') {
                        return; // main.js not loaded yet
                    }
                    
                    const currentStudent = getCurrentStudent();
                    const loggedOutButtons = document.getElementById('loggedOutButtons');
                    const loggedInButtons = document.getElementById('loggedInButtons');
                    const studentNameDisplay = document.getElementById('studentNameDisplay');
                    const mobileLoggedOutButtons = document.getElementById('mobileLoggedOutButtons');
                    const mobileLoggedInButtons = document.getElementById('mobileLoggedInButtons');
                    const mobileStudentNameDisplay = document.getElementById('mobileStudentNameDisplay');

                    if (currentStudent) {
                        // Student is logged in - show logout button
                        if (loggedOutButtons) loggedOutButtons.classList.add('hidden');
                        if (loggedInButtons) {
                            loggedInButtons.classList.remove('hidden');
                            loggedInButtons.classList.add('flex');
                        }
                        if (studentNameDisplay) {
                            const fullName = (currentStudent.firstName || '') + ' ' + (currentStudent.surname || '');
                            studentNameDisplay.textContent = fullName.trim() || 'Student';
                        }
                        if (mobileLoggedOutButtons) mobileLoggedOutButtons.classList.add('hidden');
                        if (mobileLoggedInButtons) mobileLoggedInButtons.classList.remove('hidden');
                        if (mobileStudentNameDisplay) {
                            const fullName = (currentStudent.firstName || '') + ' ' + (currentStudent.surname || '');
                            mobileStudentNameDisplay.textContent = fullName.trim() || 'Student';
                        }
                    } else {
                        // Student is not logged in - show register/login buttons
                        if (loggedOutButtons) loggedOutButtons.classList.remove('hidden');
                        if (loggedInButtons) {
                            loggedInButtons.classList.add('hidden');
                            loggedInButtons.classList.remove('flex');
                        }
                        if (mobileLoggedOutButtons) mobileLoggedOutButtons.classList.remove('hidden');
                        if (mobileLoggedInButtons) mobileLoggedInButtons.classList.add('hidden');
                    }
                } catch (e) {
                    console.error('Error updating auth navigation:', e);
                }
            }

            // Run after a delay to ensure main.js is loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(updateNav, 200);
                });
            } else {
                setTimeout(updateNav, 200);
            }
        })();

        // Handle student logout - make it globally accessible
        window.handleStudentLogout = function() {
            try {
                // Clear session storage first
                sessionStorage.removeItem('currentStudentId');
                sessionStorage.removeItem('currentStudentName');
                
                // Try to call studentLogout if available
                if (typeof studentLogout === 'function') {
                    studentLogout();
                }
                
                // Always redirect to homepage after logout
                window.location.href = 'index.html';
            } catch (e) {
                console.error('Error during logout:', e);
                // Fallback: ensure sessionStorage is cleared and redirect
                sessionStorage.removeItem('currentStudentId');
                sessionStorage.removeItem('currentStudentName');
                window.location.href = 'index.html';
            }
        };

        // Also attach event listeners to logout buttons as backup
        (function attachLogoutListeners() {
            function attachListeners() {
                try {
                    const logoutButtons = document.querySelectorAll('button[onclick*="handleStudentLogout"]');
                    logoutButtons.forEach(button => {
                        // Remove existing onclick and add event listener
                        button.removeAttribute('onclick');
                        button.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            window.handleStudentLogout();
                        });
                    });
                } catch (e) {
                    console.error('Error attaching logout listeners:', e);
                }
            }
            
            // Run after DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', attachListeners);
            } else {
                attachListeners();
            }
            // Also run after a delay to catch dynamically added buttons
            setTimeout(attachListeners, 500);
        })();
    } catch (e) {}
})();


