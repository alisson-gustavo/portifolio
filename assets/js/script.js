const navbar=document.getElementById('navbar');
addEventListener('scroll',()=>navbar.classList.toggle('scrolled',scrollY>40));

const menu=document.getElementById('mobileMenu');
document.getElementById('hamburger').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));

// Terminal
const lines=['$ flutter run --flavor prod','> Launching lib/main_prod.dart...','$ npm run start:dev','> Nest application successfully started','$ odoo-bin -u contratos_saude','> Module updated ✓','$ docker compose up --build','> Services ready ✓'];
const out=document.getElementById('terminalOutput');let l=0,c=0;
(function type(){
  const s=lines[l];
  if(c<s.length){out.textContent=s.slice(0,++c);setTimeout(type,38)}
  else setTimeout(()=>{c=0;l=(l+1)%lines.length;out.textContent='';type()},1800);
})();

// Fade-in
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.card,.tl,.title,.note,.stats div').forEach(el=>{el.classList.add('fade-in');io.observe(el)});

// Link ativo no menu
const links=[...document.querySelectorAll('.nav-links a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>so.observe(s));