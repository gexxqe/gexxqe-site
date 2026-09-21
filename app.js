const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.textContent=open?'✕':'☰';
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
  if(menuBtn)menuBtn.textContent='☰';
}));
document.getElementById('year').textContent=new Date().getFullYear();

const revealEls=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}
    });
  },{threshold:.12,rootMargin:'0px 0px -40px'});
  revealEls.forEach(el=>io.observe(el));
}else revealEls.forEach(el=>el.classList.add('is-visible'));

const contactForm=document.getElementById('contactForm');
contactForm?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(contactForm);
  const name=(data.get('name')||'').toString().trim();
  const email=(data.get('email')||'').toString().trim();
  const project=(data.get('project')||'').toString();
  const budget=(data.get('budget')||'').toString();
  const message=(data.get('message')||'').toString().trim();
  const subject=`Demande de projet — ${project} — ${name}`;
  const body=[
    'Bonjour gexxqe,',
    '',
    `Nom / entreprise : ${name}`,
    `E-mail : ${email}`,
    `Type de projet : ${project}`,
    `Budget estimatif : ${budget}`,
    '',
    'Message :',
    message,
    '',
    'Cordialement,',
    name
  ].join('\n');
  window.location.href=`mailto:contact@gexxqe.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
