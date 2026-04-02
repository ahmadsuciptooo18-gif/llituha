// ─── PRELOADER ───
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('preloader').classList.add('out');
    setTimeout(()=>document.getElementById('preloader').remove(),1200);
  },1600);
});

// ─── SCROLL EFFECTS ───
window.addEventListener('scroll',()=>{
  const pct = scrollY/(document.body.scrollHeight-innerHeight);
  document.getElementById('pgfill').style.width=(pct*100)+'%';
  document.getElementById('hdr').classList.toggle('solid',scrollY>30);
  // show cta btn after scroll
  const cta = document.getElementById('ctaBtn');
  if(cta) cta.style.display = scrollY>200?'block':'none';
});

// ─── BURGER ───
const burger=document.getElementById('burger');
const mMenu=document.getElementById('mMenu');
burger.addEventListener('click',()=>{
  burger.classList.toggle('open');
  mMenu.classList.toggle('open');
});
mMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  burger.classList.remove('open');mMenu.classList.remove('open');
}));

// ─── ANIMATED GRID CANVAS ───
const canvas=document.getElementById('grid-canvas');
const ctx=canvas.getContext('2d');
function resizeCanvas(){
  canvas.width=innerWidth;canvas.height=innerHeight;
}
resizeCanvas();
window.addEventListener('resize',resizeCanvas);

const dots=[];
for(let i=0;i<80;i++){
  dots.push({
    x:Math.random()*2000,
    y:Math.random()*1200,
    r:Math.random()*1.2+0.3,
    vx:(Math.random()-0.5)*0.25,
    vy:(Math.random()-0.5)*0.25,
    o:Math.random()*0.6+0.2
  });
}
function drawCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Connect nearby dots
  for(let i=0;i<dots.length;i++){
    for(let j=i+1;j<dots.length;j++){
      const dx=dots[i].x-dots[j].x;
      const dy=dots[i].y-dots[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<140){
        ctx.beginPath();
        ctx.moveTo(dots[i].x,dots[i].y);
        ctx.lineTo(dots[j].x,dots[j].y);
        ctx.strokeStyle=`rgba(184,144,46,${0.12*(1-d/140)})`;
        ctx.lineWidth=0.5;
        ctx.stroke();
      }
    }
  }
  // Draw dots
  dots.forEach(d=>{
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(184,144,46,${d.o})`;
    ctx.fill();
    d.x+=d.vx; d.y+=d.vy;
    if(d.x<0||d.x>canvas.width) d.vx*=-1;
    if(d.y<0||d.y>canvas.height) d.vy*=-1;
  });
  requestAnimationFrame(drawCanvas);
}
drawCanvas();

// ─── ELEVATOR ANIMATIONS ───
function animateElevator(el, duration, delay){
  const h = window.innerHeight;
  let start=null, pos=h;
  const run=(ts)=>{
    if(!start) start=ts;
    const p=(ts-start)%duration;
    const frac = p/duration;
    pos = h - frac*(h+60);
    el.style.top = pos + 'px';
    requestAnimationFrame(run);
  };
  setTimeout(()=>requestAnimationFrame(run), delay);
}
animateElevator(document.getElementById('elv1'), 8000, 0);
animateElevator(document.getElementById('elv2'), 11000, 2000);
animateElevator(document.getElementById('elv3'), 9500, 1000);

// ─── PRODUCTS DRAG ───
(function(){
  const rail = document.getElementById('prodRail');
  let isDragging=false, startX=0, scrollLeft=0;
  rail.addEventListener('mousedown',e=>{isDragging=true;startX=e.pageX-rail.offsetLeft;scrollLeft=rail.scrollLeft;});
  window.addEventListener('mouseup',()=>isDragging=false);
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    e.preventDefault();
    const x=e.pageX-rail.offsetLeft;
    rail.scrollLeft=scrollLeft-(x-startX)*1.2;
  });
  // Touch
  let tx=0;
  rail.addEventListener('touchstart',e=>tx=e.touches[0].pageX,{passive:true});
  rail.addEventListener('touchmove',e=>{
    rail.scrollLeft-=(e.touches[0].pageX-tx)*0.8;
    tx=e.touches[0].pageX;
  },{passive:true});
  // Overflow scroll
  rail.style.overflowX='auto';
  rail.style.scrollSnapType='x mandatory';
  rail.querySelectorAll('.prod-card').forEach(c=>c.style.scrollSnapAlign='start');
  rail.style.cssText+=';-ms-overflow-style:none;scrollbar-width:none;';
  rail.addEventListener('scroll',()=>{},{passive:true});
})();

// ─── PROJECTS SLIDER ───

// ─── REVEAL ───
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:0.1});
document.querySelectorAll('.r,.r-l,.r-r').forEach(el=>revObs.observe(el));

// ─── COUNT UP ───
const cntObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting && !e.target.dataset.done){
      e.target.dataset.done=1;
      const el=e.target;
      const target=parseFloat(el.dataset.target);
      const pre=el.dataset.pre||'';
      const suf=el.dataset.suf||'';
      let v=0;
      const step=target/50;
      const iv=setInterval(()=>{
        v=Math.min(v+step,target);
        el.textContent=pre+v.toFixed(1)+suf;
        if(v>=target){clearInterval(iv);el.textContent=pre+target+suf;}
      },30);
    }
  });
},{threshold:0.6});
document.querySelectorAll('.astat-n[data-target]').forEach(el=>cntObs.observe(el));

// show cta on load check
window.dispatchEvent(new Event('scroll'));