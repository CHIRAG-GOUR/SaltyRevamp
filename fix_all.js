const fs = require('fs');
['5.1.html', '5.2.html', '5.2 Experiential.html', 'Module 5 Glossary.html'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');

  // Strip duplicate button #fullscreenBtn
  c = c.replace(/<p>\s*<button[^>]*id=\"fullscreenBtn\"[^>]*>[\s\S]*?<\/button>\s*<\/p>/g, '');
  c = c.replace(/<button[^>]*id=\"fullscreenBtn\"[^>]*>[\s\S]*?<\/button>/g, '');
  // Because powershell strips backticks, I will use single quotes for regex strings instead of literal strings
});
