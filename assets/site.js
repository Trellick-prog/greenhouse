// Shared nav, footer, reveal-on-scroll, cursor glow
const PAGES=[["index.html","Home"],["gigs.html","Past Gigs"],["venues.html","Venues"],["about.html","About"],["enquire.html","Enquire"]];
const here=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin',`<nav class="nav"><div class="wrap"><a class="logo" href="index.html">GREENHOUSE</a><button class="burger" aria-label="Menu">☰</button><ul>${PAGES.map(([h,t])=>`<li><a href="${h}" class="${h===here?'active':''}">${t}</a></li>`).join('')}</ul></div></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px"><span>© ${new Date().getFullYear()} Greenhouse AU</span><a href="https://www.instagram.com/greenhouseau" target="_blank" rel="noopener">@greenhouseau ↗</a></div></footer>`);
document.querySelector('.burger').onclick=()=>document.querySelector('.nav ul').classList.toggle('open');
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
addEventListener('pointermove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});
