// js/main.js
const projects = [
   {
    year: 'current',
    title: 'ChatGPT Study with Robin Angelina, Maartje De Meulder & Katta Spiel',
    desc: 'Multilingual online survey and interviews with deaf participants in Europe exploring ChatGPT interactions. Findings reveal deaf people use ChatGPT as both a digital and language assistant, reducing reliance on human assistance — while also creating new forms of dependency and hidden access labor.',
    tags: ['GenAI', 'Qualitative', 'Multilingual', 'Sociotechnical']
  },
  {
    year: '2024',
    title: 'Advisory Group on AI and Sign Language Interpreting (#DeafSafeAI)',
    desc: 'Qualitative research centering Deaf expertise to integrate safety and equity into automatic AI interpreting (AIxAI) design. Moderated the first #DeafSafeAI symposium at Brown University, Providence RI, featuring leading scholars and practitioners.',
    tags: ['AIxAI', 'Sign Language', 'Policy', 'Symposium Moderator']
  },
  {
    year: '2023',
    title: 'Deaf Users Interacting with Intelligent Personal Assistants (IPAs)',
    desc: 'Wizard-of-Oz experimental study over 18 months with DHH users interacting with voice IPAs in home environments (living room + kitchen). Investigates how DHH users prefer to interact when sign language recognition is unavailable.',
    tags: ['Wizard-of-Oz', 'R Programming', 'ELAN', 'Mixed Methods']
  },
  {
    year: '2023',
    title: 'SignMates Matchmaking App',
    desc: 'Designed a Deaf-friendly matchmaking app in Figma targeting DHH users and hearing users open to meeting DHH partners. Challenged societal norms and hearing-centric app design to foster equity, opportunity, and connection.',
    tags: ['Figma', 'UX Design', 'Inclusive Design', 'Prototype']
  },
  {
    year: '2022',
    title: "Deaf Community's Perspectives on Sign Language Recognition (ASLT)",
    desc: 'Survey of Deaf individuals in the U.S. gathering input on automatic sign language translation (ASLT) — exploring use expectations, design preferences, and community concerns to guide user-centered ASLT development.',
    tags: ['Survey', 'ASLT', 'User-Centered', 'Community Research']
  },
  {
    year: '2021',
    title: 'Climate Change Data Dashboard',
    desc: 'Interactive R Shiny application visualizing global CO2 emissions trends by country over time, using Our World in Data. Built to make climate data accessible and explorable for broad audiences.',
    tags: ['R / Shiny', 'Data Viz', 'Open Data', '2021']
  }
];
function renderProjects(filter) {
  const list = document.getElementById('proj-list');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.year === filter);
  list.innerHTML = filtered.map(p => `
    <div class="proj-card">
      <div class="proj-header">
        <p class="proj-title">${p.title}</p>
        <span class="proj-year">${p.year}</span>
      </div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function filterYear(year, btn) {
  document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(year);
}

function showSection(id, link) {
  ['about','projects','skills'].forEach(s => {
    document.getElementById('sec-' + s).classList.add('hidden');
  });
  document.getElementById('sec-' + id).classList.remove('hidden');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  if (link) link.classList.add('active');
  if (id === 'projects') renderProjects('all');
}

renderProjects('all');
/* the rest */
