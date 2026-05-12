// ===== ARTICLES PAGE JS =====

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function tagClass(cat) {
  const map = { ipl:'tag-ipl', international:'tag-international', stats:'tag-stats', prediction:'tag-prediction', analysis:'tag-analysis' };
  return map[cat] || 'tag-analysis';
}
function tagLabel(cat) {
  const map = { ipl:'IPL', international:'International', stats:'Stats', prediction:'Prediction', analysis:'Analysis' };
  return map[cat] || cat;
}

let currentCat = 'all';

// Check URL param for pre-filtered category
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('cat');
if (catParam) currentCat = catParam;

function renderArticles(cat) {
  const grid = document.getElementById('articlesGrid');
  const filtered = cat === 'all' ? POSTS : POSTS.filter(p => p.category === cat);
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray); padding: 2rem 0;">No articles in this category yet. Check back soon!</p>';
    return;
  }
  grid.innerHTML = filtered.map(p => `
    <div class="article-card" onclick="location.href='article.html?id=${p.id}'">
      <div class="card-img-placeholder">${p.emoji || '🏏'}</div>
      <div class="card-body">
        <span class="card-tag ${tagClass(p.category)}">${tagLabel(p.category)}</span>
        <div class="card-title">${p.title}</div>
        <div class="card-meta">${p.date} <span class="dot">·</span> ${p.readTime}</div>
        <div class="card-meta" style="margin-top:0.4rem; color:#666;">${p.excerpt}</div>
      </div>
    </div>
  `).join('');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  if (btn.dataset.cat === currentCat) btn.classList.add('active');
  else btn.classList.remove('active');

  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    renderArticles(currentCat);
  });
});

renderArticles(currentCat);
