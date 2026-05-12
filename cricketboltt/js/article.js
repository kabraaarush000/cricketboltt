// ===== SINGLE ARTICLE PAGE JS =====

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

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const post = POSTS.find(p => p.id === id);
const articleContent = document.getElementById('articleContent');

if (!post) {
  articleContent.innerHTML = `
    <div style="text-align:center; padding: 5rem 0; color: var(--gray);">
      <div style="font-size:3rem; margin-bottom:1rem;">🏏</div>
      <p>Article not found. <a href="articles.html" style="color:var(--red);">Back to all articles</a></p>
    </div>`;
} else {
  document.title = post.title + ' — CricketBoltt';

  articleContent.innerHTML = `
    <a href="articles.html" style="display:inline-block; font-size:0.8rem; color:var(--gray); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.5rem;">← Back to all articles</a>
    <span class="art-tag card-tag ${tagClass(post.category)}">${tagLabel(post.category)}</span>
    <h1>${post.title}</h1>
    <div class="art-meta">
      <span>${post.date}</span>
      <span>·</span>
      <span>${post.readTime}</span>
      <span>·</span>
      <span>By ${post.author}</span>
    </div>
    <div class="art-body">${post.body}</div>
  `;

  // Related articles (same category, exclude current)
  const related = POSTS.filter(p => p.id !== id && p.category === post.category).slice(0, 3);
  const fallback = POSTS.filter(p => p.id !== id).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : fallback;

  const relGrid = document.getElementById('relatedGrid');
  if (relGrid) {
    relGrid.innerHTML = relatedPosts.map(p => `
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
}
