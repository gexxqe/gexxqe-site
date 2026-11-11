const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.textContent=open?'✕':'☰';
  menuBtn.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
  if(menuBtn){menuBtn.textContent='☰';menuBtn.setAttribute('aria-label','Ouvrir le menu');}
}));
const yearEl=document.getElementById('year');
if(yearEl)yearEl.textContent=new Date().getFullYear();

const revealEls=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}
    });
  },{threshold:.12,rootMargin:'0px 0px -40px'});
  revealEls.forEach(el=>io.observe(el));
}else revealEls.forEach(el=>el.classList.add('is-visible'));
