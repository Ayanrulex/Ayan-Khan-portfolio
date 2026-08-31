const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav-links');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)})}
document.querySelectorAll('#nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
reveals.forEach(el=>observer.observe(el));
