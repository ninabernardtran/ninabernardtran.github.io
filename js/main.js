const projects = [
  {
    year: 'current',
    title: 'ChatGPT Study with Robin Angelina, Maartje De Meulder & Katta Spiel',
    desc:
      'Multilingual online survey and interviews with deaf participants in Europe exploring ChatGPT interactions...',
    tags: ['GenAI', 'Qualitative', 'Multilingual', 'Sociotechnical']
  },
  {
    year: '2024',
    title: 'Advisory Group on AI and Sign Language Interpreting (#DeafSafeAI)',
    desc:
      'Qualitative research centering Deaf expertise to integrate safety and equity...',
    tags: ['AIxAI', 'Sign Language', 'Policy', 'Symposium Moderator']
  },
  // rest unchanged
];

/* ---------- Navigation ---------- */

document.querySelectorAll('.nav-links a[data-section]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.section, link);
  });
});

/* ---------- Sections ---------- */

function showSection(id, link) {
  ['about', 'projects', 'skills'].forEach(s => {
    document.getElementById(`sec-${s}`).classList.add('hidden');
  });

  document.getElementById(`sec-${id}`).classList.remove('hidden');

  document.querySelectorAll('.nav-links a')
    .forEach(a => a.classList.remove('active'));

  link.classList.add('active');

  if (id === 'projects') renderProjects('all');
}

/* ---------- Projects ---------- */

function renderProjects(filter) {
  const list = document.getElementById('proj-list');
  const filtered =
    filter === 'all' ? projects : projects.filter(p => p.year === filter);

  list.innerHTML = filtered
    .map(
      p => `
      <div class="proj-card">
        <div class="proj-header">
          <p class="proj-title">${p.title}</p>
          <span class="proj-year">${p.year}</span>
        </div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `
    )
    .join('');
}

/* ---------- Init ---------- */

renderProjects('all');
