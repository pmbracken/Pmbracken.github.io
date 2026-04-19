// Initialize Lucide Icons
lucide.createIcons();

// Custom Cursor Follower
const cursor = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Terminal Log Simulation
const terminalBody = document.getElementById('agent-logs');
const logMessages = [
    { text: "Scanning Universal Synthesis Framework...", type: "" },
    { text: "Identifying architectural drift: 0.00%", type: "success" },
    { text: "Optimizing persona mapping for [Shadow]", type: "" },
    { text: "Updating Fidelity Ledger...", type: "secondary" },
    { text: "New synthesis node detected: DeFi-Fuzzing-Northstar", type: "highlight" },
    { text: "Propagating updates to MCP server cluster...", type: "" },
    { text: "Audit complete. Integrity verified.", type: "success" }
];

let logIndex = 0;

function addLogLine() {
    if (logIndex >= logMessages.length) {
        // Clear and restart for continuous feel
        terminalBody.innerHTML = '<p class="log-line">Initializing Cartographer2 Engine...</p>';
        logIndex = 0;
    }

    const msg = logMessages[logIndex];
    const p = document.createElement('p');
    p.className = `log-line ${msg.type}`;
    p.textContent = msg.text;
    p.style.opacity = '0';
    p.style.transform = 'translateY(10px)';
    
    terminalBody.appendChild(p);
    
    // Animate in
    setTimeout(() => {
        p.style.transition = 'all 0.3s ease';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
    }, 50);

    // Auto-scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
    
    logIndex++;
}

// Add lines periodically
setInterval(addLogLine, 3000);

// Simple Scroll Reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .split-view, .banner-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
