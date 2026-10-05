document.addEventListener("DOMContentLoaded", function () {
    // Determine the current page filename to highlight the active menu item
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Define your persistent layout structure (Sidebar + Mobile Header)
    const layoutHTML = `
        <!-- Mobile Header Bar -->
        <div class="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-40">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white text-sm">BP</div>
                <span class="text-lg font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">BlinknPay</span>
            </div>
            <button id="mobile-menu-btn" class="p-2 text-slate-400 hover:text-white focus:outline-none bg-slate-800/50 rounded-xl border border-slate-700/50">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>

        <!-- Sidebar Navigation Drawer -->
        <aside id="sidebar" class="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between fixed inset-y-0 left-0 z-50 transform -translate-x-full md:translate-x-0 md:static transition-transform duration-300 ease-in-out">
            <div class="p-6">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center space-x-3">
                        <div class="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg text-white">BP</div>
                        <span class="text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">BlinknPay</span>
                    </div>
                    <button id="sidebar-close-btn" class="md:hidden text-slate-400 hover:text-white p-1">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>
                
                <nav class="space-y-1">
                    <a href="index.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'index.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                        <span>Overview</span>
                    </a>
                    <a href="merchant.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'merchant.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="store" class="w-5 h-5"></i>
                        <span>Merchants</span>
                    </a>
                    <a href="customer.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'customer.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="users" class="w-5 h-5"></i>
                        <span>Customers</span>
                    </a>
                    <a href="rpids.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'rpids.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="radio" class="w-5 h-5"></i>
                        <span>Quad-Channel RPIDs</span>
                    </a>
                    <a href="wallets.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'wallets.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="wallet" class="w-5 h-5"></i>
                        <span>Wallet Ledgers</span>
                    </a>
                    <a href="analytics.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'analytics.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
                        <span>Analytics</span>
                    </a>
                    <a href="node.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'node.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="cpu" class="w-5 h-5"></i>
                        <span>Hardware Nodes</span>
                    </a>
                    <a href="disputes.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'disputes.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="alert-triangle" class="w-5 h-5"></i>
                        <span>Disputes</span>
                    </a>
                    <a href="settings.html" class="nav-link flex items-center space-x-3 px-4 py-3 rounded-xl transition text-sm font-medium ${currentPage === 'settings.html' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                        <i data-lucide="settings" class="w-5 h-5"></i>
                        <span>Settings</span>
                    </a>
                </nav>
            </div>
            <div class="p-6 border-t border-slate-800">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-semibold">EM</div>
                    <div>
                        <p class="text-sm font-medium">Admin Portal</p>
                        <p class="text-xs text-slate-500">Node Cluster Active</p>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Background Overlay -->
        <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden md:hidden"></div>
    `;

    // Insert the layout container at the top of the body
    const layoutWrapper = document.createElement("div");
    layoutWrapper.innerHTML = layoutHTML;
    document.body.prepend(layoutWrapper);

    // Initialize Lucide icons for the injected layout
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Mobile Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function toggleMenu() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
});
