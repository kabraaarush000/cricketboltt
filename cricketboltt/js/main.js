// ===== HOMEPAGE JS =====

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// Tag color helper
function tagClass(cat) {
  const map = { ipl:'tag-ipl', international:'tag-international', stats:'tag-stats', prediction:'tag-prediction', analysis:'tag-analysis' };
  return map[cat] || 'tag-analysis';
}
function tagLabel(cat) {
  const map = { ipl:'IPL', international:'International', stats:'Stats', prediction:'Prediction', analysis:'Analysis' };
  return map[cat] || cat;
}

// Featured article (first post)
function loadFeatured() {
  if (!POSTS || POSTS.length === 0) return;
  const p = POSTS[0];
  document.getElementById('featuredTitle').textContent = p.title;
  document.getElementById('featuredMeta').textContent = p.date + ' · ' + p.readTime;
  document.getElementById('featuredLink').href = 'article.html?id=' + p.id;
}

// Article cards grid (latest 6)
function loadArticles() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;
  const shown = POSTS.slice(0, 6);
  grid.innerHTML = shown.map(p => `
    <div class="article-card" onclick="location.href='article.html?id=${p.id}'">
      <div class="card-img-placeholder">${p.emoji || '🏏'}</div>
      <div class="card-body">
        <span class="card-tag ${tagClass(p.category)}">${tagLabel(p.category)}</span>
        <div class="card-title">${p.title}</div>
        <div class="card-meta">${p.date} <span class="dot">·</span> ${p.readTime}</div>
      </div>
    </div>
  `).join('');
}

// Stats strip
function loadStats() {
  const strip = document.getElementById('statsStrip');
  if (!strip || !HOMEPAGE_STATS) return;
  strip.innerHTML = HOMEPAGE_STATS.map(s => `
    <div class="stat-card">
      <div class="stat-card-name">${s.name}</div>
      <div class="stat-card-team">${s.team}</div>
      <div class="stat-card-value">${s.value}</div>
      <div class="stat-card-label">${s.label}</div>
    </div>
  `).join('');
}

loadFeatured();
loadArticles();
loadStats();
