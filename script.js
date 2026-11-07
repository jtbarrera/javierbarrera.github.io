const themeButton = document.getElementById('theme');
try { const saved = localStorage.getItem('jb-theme'); if (saved === 'dark') document.documentElement.dataset.theme = 'dark'; } catch {}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('jb-theme', theme); } catch {}
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-kind]').forEach(item => {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.kind !== button.dataset.filter;
    });
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
