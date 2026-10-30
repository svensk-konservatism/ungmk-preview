(()=>{const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const bg=$('#burger'),menu=$('#menu'),setM=o=>{bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?(document.documentElement.lang=='en'?'Close menu':'Stäng meny'):(document.documentElement.lang=='en'?'Open menu':'Öppna meny'));menu.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''};
bg.onclick=()=>setM(bg.getAttribute('aria-expanded')!=='true');menu.querySelectorAll('a').forEach(a=>a.onclick=()=>setM(false));
addEventListener('keydown',e=>{if(e.key==='Escape'){setM(false);closeS()}});
const hdr=$('#hdr'),st=$('#sticky'),sheet=$('#sheet');let shown=sessionStorage.getItem('umks');
const closeS=()=>{if(!sheet.hidden){sheet.hidden=true;sessionStorage.setItem('umks','1');shown=1}};$('#sheetx').onclick=closeS;
const join=$('#ga-med');
addEventListener('scroll',()=>{const y=scrollY,H=document.body.scrollHeight-innerHeight;hdr.classList.toggle('s',y>20);
 const jr=join.getBoundingClientRect();st.classList.toggle('on',y>innerHeight*.6&&!(jr.top<innerHeight&&jr.bottom>0)&&sheet.hidden);
 if(!shown&&y/H>.7){shown=1;sheet.hidden=false}},{passive:true});
if(!RM&&'IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
 document.querySelectorAll('.intro>*,.band-h,.gal-h,.count,.join>*').forEach(el=>{el.classList.add('rv');io.observe(el)})}
const tr=$('#track');if(tr){const it=[...tr.children],pos=$('#gpos');let cur=0;
 const go=d=>{const n=Math.max(0,Math.min(it.length-1,cur+d));it[n].scrollIntoView({behavior:RM?'auto':'smooth',inline:'center',block:'nearest'})};
 $('#prev').onclick=()=>go(-1);$('#next').onclick=()=>go(1);tr.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();go(1)}if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}});
 const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6){it.forEach(x=>x.classList.remove('act'));e.target.classList.add('act');cur=it.indexOf(e.target);pos.textContent=(cur+1)+' / '+it.length}}),{root:tr,threshold:[.6]});it.forEach(x=>io2.observe(x))}
})();
