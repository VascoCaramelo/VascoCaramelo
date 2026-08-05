/* =========================================================
   EDITA SÓ ISTO — o resto do site é gerado a partir daqui
   ========================================================= */
const DADOS = {
  skills: [
    { grupo: "Linguagens", items: ["Kotlin", "Java", "JavaScript", "SQL", "Assembly"] },
    { grupo: "Backend", items: ["http4k", "JPA / EclipseLink", "PostgreSQL", "APIs REST"] },
    { grupo: "Ferramentas", items: ["Git", "GitHub", "Render", "Linux"] },
  ],
  projetos: [
    {
      nome: "LEIC42D-G02",
      estado: "em grupo",
      langColor: "#e8a33d",
      descricao: "Projeto de grupo em Kotlin/JVM com http4k e PostgreSQL, com deploy no Render.",
      stack: ["kotlin", "http4k", "postgresql", "render"],
      github: "https://github.com/VascoCaramelo",
      demo: ""
    },
    {
      nome: "jpa-optimistic-locking",
      estado: "pessoal",
      langColor: "#5fd1c0",
      descricao: "Projeto em Java/JPA com EclipseLink e PostgreSQL a implementar controlo de concorrência otimista (optimistic locking).",
      stack: ["java", "jpa", "eclipselink", "postgresql"],
      github: "https://github.com/VascoCaramelo",
      demo: ""
    },
    {
      nome: "o-teu-proximo-projeto",
      estado: "por preencher",
      langColor: "#e2748a",
      descricao: "Substitui isto pela descrição de um projeto teu — o que faz, que problema resolve, o que aprendeste.",
      stack: ["troca", "por", "tags-tuas"],
      github: "",
      demo: ""
    }
  ],
  contacto: {
    email: "o-teu-email@exemplo.com",
    github: "https://github.com/VascoCaramelo",
    linkedin: "",
    localizacao: "Oeiras, Lisboa"
  }
};
/* ========================================================= */

function fillGutter(id, lines){
  const el = document.getElementById('gutter-' + id);
  if(!el) return;
  el.innerHTML = Array.from({length: lines}, (_, i) => `<div>${i+1}</div>`).join('');
}
fillGutter('sobre', 9);
fillGutter('skills', 12);
fillGutter('projetos', 16);
fillGutter('contacto', 8);

const skillGroups = document.getElementById('skillGroups');
DADOS.skills.forEach(g => {
  const div = document.createElement('div');
  div.className = 'skill-group';
  div.innerHTML = `
    <div class="label">// ${g.grupo}</div>
    <div class="chips">${g.items.map(i => `<span class="chip"><span class="dot"></span>${i}</span>`).join('')}</div>
  `;
  skillGroups.appendChild(div);
});

const grid = document.getElementById('projectsGrid');
DADOS.projetos.forEach(p => {
  const div = document.createElement('div');
  div.className = 'proj';
  const links = [];
  if(p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener">código ↗</a>`);
  if(p.demo) links.push(`<a href="${p.demo}" target="_blank" rel="noopener">demo ↗</a>`);
  div.innerHTML = `
    <div class="proj-top">
      <div class="proj-name"><span class="lang-dot" style="background:${p.langColor}"></span>${p.nome}</div>
      <div class="proj-status">${p.estado}</div>
    </div>
    <div class="proj-desc">${p.descricao}</div>
    <div class="proj-meta">
      <div class="proj-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <div class="proj-links">${links.join('')}</div>
    </div>
  `;
  grid.appendChild(div);
});

const c = DADOS.contacto;
document.getElementById('contactBlock').innerHTML = `
  <div class="line"><span class="k">email</span>  = <span class="v"><a href="mailto:${c.email}">${c.email}</a></span></div>
  <div class="line"><span class="k">github</span> = <span class="v"><a href="${c.github}" target="_blank" rel="noopener">${c.github.replace('https://','')}</a></span></div>
  ${c.linkedin ? `<div class="line"><span class="k">linkedin</span> = <span class="v"><a href="${c.linkedin}" target="_blank" rel="noopener">${c.linkedin.replace('https://','')}</a></span></div>` : ''}
  <div class="line"><span class="k">local</span>  = <span class="v">${c.localizacao}</span></div>
`;

const sections = document.querySelectorAll('.file');
const navLinks = document.querySelectorAll('#sideNav a');
const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.dataset.target === id));
      tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => observer.observe(s));

const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => sidebar.classList.toggle('open'));
navLinks.forEach(a => a.addEventListener('click', () => sidebar.classList.remove('open')));
