// ===== STATS PAGE JS =====

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function renderBatting() {
  const tbody = document.getElementById('battingBody');
  tbody.innerHTML = BATTING_STATS.map(p => `
    <tr>
      <td>${p.rank}</td>
      <td class="player-name">${p.name}</td>
      <td>${p.team}</td>
      <td>${p.mat}</td>
      <td class="highlight">${p.runs}</td>
      <td>${p.avg.toFixed(1)}</td>
      <td>${p.sr.toFixed(1)}</td>
      <td>${p.hundreds}</td>
      <td>${p.fifties}</td>
    </tr>
  `).join('');
}

function renderBowling() {
  const tbody = document.getElementById('bowlingBody');
  tbody.innerHTML = BOWLING_STATS.map(p => `
    <tr>
      <td>${p.rank}</td>
      <td class="player-name">${p.name}</td>
      <td>${p.team}</td>
      <td>${p.mat}</td>
      <td class="highlight">${p.wkts}</td>
      <td>${p.avg.toFixed(1)}</td>
      <td>${p.econ.toFixed(1)}</td>
      <td>${p.best}</td>
    </tr>
  `).join('');
}

// Tab switching
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.getElementById('battingTable').style.display = tab === 'batting' ? 'block' : 'none';
    document.getElementById('bowlingTable').style.display = tab === 'bowling' ? 'block' : 'none';
  });
});

renderBatting();
renderBowling();
