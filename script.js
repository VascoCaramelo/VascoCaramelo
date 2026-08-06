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
      descricao: "Projeto de grupo em Kotlin/JVM com http4k e PostgreSQL, com deploy no Render.",
      stack: ["Kotlin", "http4k", "PostgreSQL", "Render"],
      github: "https://github.com/VascoCaramelo",
      demo: ""
    },
    {
      nome: "jpa-optimistic-locking",
      estado: "pessoal",
      descricao: "Projeto em Java/JPA com EclipseLink e PostgreSQL a implementar controlo de concorrência otimista (optimistic locking).",
      stack: ["Java", "JPA", "EclipseLink", "PostgreSQL"],
      github: "https://github.com/VascoCaramelo",
      demo: ""
    },
    {
      nome: "o-teu-proximo-projeto",
      estado: "por preencher",
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

// skills
const skillList = document.getElementById('skillList');
DADOS.skills.forEach(g => {
  const row = document.createElement('div');
  row.className = 'skill-row';
  row.innerHTML = `
    <div class="cat">${g.grupo}</div>
    <div class="items">${g.items.map(i => `<span>${i}</span>`).join('')}</div>
  `;
  skillList.appendChild(row);
});

// projetos
const projectList = document.getElementById('projectList');
DADOS.projetos.forEach(p => {
  const row = document.createElement('div');
  row.className = 'project-row';
  const links = [];
  if(p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener">Código ↗</a>`);
  if(p.demo) links.push(`<a href="${p.demo}" target="_blank" rel="noopener">Demo ↗</a>`);
  row.innerHTML = `
    <div class="proj-main">
      <div class="proj-name">${p.nome}<span class="proj-status">${p.estado}</span></div>
      <div class="proj-desc">${p.descricao}</div>
      <div class="proj-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    </div>
    <div class="proj-links">${links.join('')}</div>
  `;
  projectList.appendChild(row);
});

// contacto
const contactList = document.getElementById('contactList');
const c = DADOS.contacto;
const rows = [
  { k: 'Email', v: c.email, href: `mailto:${c.email}` },
  { k: 'GitHub', v: c.github.replace('https://',''), href: c.github },
];
if(c.linkedin) rows.push({ k: 'LinkedIn', v: c.linkedin.replace('https://',''), href: c.linkedin });
rows.push({ k: 'Localização', v: c.localizacao, href: null });

rows.forEach(r => {
  const row = document.createElement('div');
  row.className = 'contact-row';
  row.innerHTML = `
    <span class="k">${r.k}</span>
    <span class="v">${r.href ? `<a href="${r.href}" target="_blank" rel="noopener">${r.v}</a>` : r.v}</span>
  `;
  contactList.appendChild(row);
});

document.getElementById('year').textContent = new Date().getFullYear();