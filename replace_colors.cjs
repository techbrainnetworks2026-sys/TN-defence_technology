const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'src', 'components');

const replaceRules = [
  { regex: /rgba\(5,\s*10,\s*24,\s*0\.9\)/g, replacement: 'rgba(245, 222, 195, 0.9)' },
  { regex: /rgba\(5,\s*10,\s*24,\s*0\.4\)/g, replacement: 'rgba(245, 222, 195, 0.4)' },
  { regex: /rgba\(5,\s*10,\s*24,\s*0\.5\)/g, replacement: 'rgba(245, 222, 195, 0.5)' },
  { regex: /rgba\(10,\s*17,\s*40,\s*0\.9\)/g, replacement: 'rgba(245, 222, 195, 0.9)' },
  { regex: /rgba\(10,\s*17,\s*40,\s*0\.95\)/g, replacement: 'rgba(245, 222, 195, 0.95)' },
  { regex: /rgba\(10,\s*17,\s*40,\s*0\.8\)/g, replacement: 'rgba(245, 222, 195, 0.8)' },
  { regex: /rgba\(18,\s*130,\s*162,\s*0\.1\)/g, replacement: 'rgba(0, 0, 0, 0.05)' },
  { regex: /rgba\(18,\s*130,\s*162,\s*0\.2\)/g, replacement: 'rgba(0, 0, 0, 0.1)' },
  { regex: /background-color:\s*#050a18/g, replacement: 'background-color: var(--bg-dark)' },
  { regex: /background:\s*#02050C/g, replacement: 'background: var(--bg-dark)' },
  { regex: /color:\s*white/g, replacement: 'color: var(--text-main)' },
  { regex: /color:\s*#fff/gi, replacement: 'color: var(--text-main)' },
  { regex: /color:\s*#A0AEC0/g, replacement: 'color: var(--text-muted)' },
  { regex: /border:\s*2px solid rgba\(255,\s*255,\s*255,\s*0\.2\)/g, replacement: 'border: 2px solid rgba(0, 0, 0, 0.2)' },
  { regex: /background:\s*white/g, replacement: 'background: var(--color-secondary)' },
  // specific fix for .nav-cta color !important
  { regex: /color:\s*var\(--text-main\)\s*!important/g, replacement: 'color: var(--bg-card) !important' }
];

const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

files.forEach(file => {
  const filePath = path.join(cssDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  replaceRules.forEach(rule => {
    content = content.replace(rule.regex, rule.replacement);
  });

  // some specific overrides
  if (file === 'Hero.css') {
    content = content.replace(/background: var\(--color-secondary\);/g, 'background: var(--text-main);');
  }
  
  fs.writeFileSync(filePath, content);
});

console.log('CSS files updated.');
