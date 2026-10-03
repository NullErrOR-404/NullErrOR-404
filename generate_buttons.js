const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'assets');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

const buttons = [
    {
        name: 'linkedin',
        text: 'Connect on LinkedIn',
        width: 165,
        icon: '<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>'
    },
    {
        name: 'email',
        text: 'Send an Email',
        width: 135,
        icon: '<path d="M0 7.33l2.829 2.83 9.171-9.171 9.171 9.171 2.829-2.83-12-12-12 12zm0 9.34l2.829-2.83 9.171 9.171 9.171-9.171 2.829 2.83-12 12-12-12z"/>' // Actually let's use a standard envelope icon
    },
    {
        name: 'portfolio',
        text: 'Explore Portfolio',
        width: 145,
        icon: '<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-4v-8h4v8zm6 0h-4v-8h4v8z"/>' // Abstract grid/portfolio
    },
    {
        name: 'instagram',
        text: 'Follow on Instagram',
        width: 165,
        icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'
    }
];

// Let's use simple SVG icons for email and portfolio
buttons[1].icon = '<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>';
buttons[2].icon = '<path d="M11 9H5V7h6v2zm7 0h-5V7h5v2zm-7 4H5v-2h6v2zm7 0h-5v-2h5v2zm-7 4H5v-2h6v2zm7 0h-5v-2h5v2zm4-14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h18zm0 16V5H4v14h18z"/>';


const style = `
    <style>
        .btn { fill: #f6f8fa; stroke: #d0d7de; stroke-width: 1px; rx: 16; }
        .text { font: 600 13px -apple-system, sans-serif; fill: #24292f; }
        .icon { fill: #24292f; }
        @media (prefers-color-scheme: dark) {
            .btn { fill: #21262d; stroke: #30363d; }
            .text { fill: #c9d1d9; }
            .icon { fill: #c9d1d9; }
        }
    </style>`;

buttons.forEach(btn => {
    // If the icon uses 24x24 viewBox (like standard material icons) we scale it
    const iconTransform = (btn.name === 'email' || btn.name === 'portfolio') 
        ? 'translate(10, 8) scale(0.66)' 
        : 'translate(10, 8)';
    
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${btn.width}" height="32" viewBox="0 0 ${btn.width} 32">
    ${style}
    <rect class="btn" width="${btn.width - 2}" height="30" x="1" y="1" />
    <g class="icon" transform="${iconTransform}">
        ${btn.icon}
    </g>
    <text class="text" x="36" y="20">${btn.text}</text>
</svg>`;
    fs.writeFileSync(path.join(outDir, `${btn.name}_btn.svg`), svg);
});
console.log("Generated SVG buttons!");
