
const CONFIG={waLink:'https://wa.me/message/JJ2E6B5YUKHGN1',waName:'Vertex-geo',email:'reach.stride@gmail.com',linkedin:'',legalName:'',country:'',regNo:'',taxNo:'',address:'',gaId:''};
(function(){
const $=(s)=>[...document.querySelectorAll(s)], esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const wa=CONFIG.waLink.trim(), em=CONFIG.email.trim(), li=CONFIG.linkedin.trim();
$('[data-wa]').forEach(a=>{if(wa){a.href=wa+(a.dataset.wa?'?text='+encodeURIComponent(a.dataset.wa):'');a.target='_blank';a.rel='noopener noreferrer'}else{a.href='#contact';a.removeAttribute('target')}});
$('[data-email]').forEach(a=>{if(em)a.href='mailto:'+em+'?subject='+encodeURIComponent('AI visibility snapshot request');else a.hidden=true});
$('[data-li]').forEach(a=>{if(li){a.href=li;a.target='_blank';a.rel='noopener noreferrer';a.hidden=false}else a.hidden=true});
$('[data-nocontact]').forEach(p=>p.hidden=!!(wa||em));
const rows=[['Legal name',CONFIG.legalName],['Country',CONFIG.country],['Registration no.',CONFIG.regNo],['Tax / VAT no.',CONFIG.taxNo],['Address',CONFIG.address],['Email',em,'mailto:'+em],['WhatsApp',wa&&CONFIG.waName,wa],['LinkedIn',li&&'Vertex GEO',li]].filter(r=>r[1]);
const rv=r=>r[2]?'<a class="link" href="'+esc(r[2])+'"'+(/^https/.test(r[2])?' target="_blank" rel="noopener noreferrer"':'')+'>'+esc(r[1])+'</a>':esc(r[1]);
$('.facts').forEach(u=>rows.forEach(r=>u.insertAdjacentHTML('beforeend','<li><span>'+r[0]+'</span><span>'+rv(r)+'</span></li>')));
$('[data-biz]').forEach(u=>u.innerHTML=rows.map(r=>'<li><strong>'+r[0]+':</strong> '+rv(r)+'</li>').join(''));
$('[data-law]').forEach(s=>s.textContent=CONFIG.country?'the laws of '+CONFIG.country:'the laws of the country where Vertex GEO is established, as shown in our business details');
$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const root=document.documentElement,btn=document.querySelector('[data-theme-toggle]');
let theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';root.setAttribute('data-theme',theme);
const sun='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',moon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
const paint=()=>{btn.innerHTML=theme==='dark'?sun:moon;btn.setAttribute('aria-label','Switch to '+(theme==='dark'?'light':'dark')+' mode')};paint();
btn.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';root.setAttribute('data-theme',theme);paint()});
const menu=document.querySelector('[data-menu]'),nav=document.getElementById('nav');
const closeMenu=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')};
menu.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(nav.classList.toggle('is-open'))));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const header=document.querySelector('.header'),onScroll=()=>header.classList.toggle('is-scrolled',scrollY>8);
addEventListener('scroll',onScroll,{passive:true});onScroll();
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'}):null;
$('.reveal').forEach(el=>io?io.observe(el):el.classList.add('is-in'));
const D={"home": "We show where your website, local search presence and public business details leave gaps in AI search, then give you a prioritised plan your team can act on. Fully remote, working internationally.", "sample-audit": "Read a full sample AI search visibility audit with scores, findings and step-by-step fixes. The clinic is fictional.", "privacy": "How Vertex GEO collects, uses and protects the information you share with us.", "terms": "Terms for Vertex GEO audits and guidance: payment, scope, liability, copyright and your rights.", "cookies": "Which cookies Vertex GEO uses, why, and how to change your choice.", "refunds": "When and how Vertex GEO refunds payments for audits and monthly guidance.", "404": "This page could not be found."},T={"home": "Vertex GEO — AI search visibility audits for businesses worldwide", "sample-audit": "Sample GEO audit for a fictional dental clinic — Vertex GEO", "privacy": "Privacy notice — Vertex GEO", "terms": "Terms and conditions — Vertex GEO", "cookies": "Cookie policy — Vertex GEO", "refunds": "Refund policy — Vertex GEO", "404": "Page not found — Vertex GEO"};
const pages=$('[data-page]');let first=true,cur='home';
function route(){
 const h=location.hash,m=h.match(/^#\/([\w-]+)$/);let name='home',anchor='';
 if(m)name=T[m[1]]?m[1]:'404';else if(h.length>1)anchor=decodeURIComponent(h.slice(1));
 if(anchor==='top')name='home';else if(anchor){const a=document.getElementById(anchor),pg=a&&a.closest('[data-page]');name=pg?pg.dataset.page:cur}cur=name;pages.forEach(p=>p.hidden=p.dataset.page!==name);document.title=T[name];{const d=document.querySelector('meta[name=description]');if(d)d.content=D[name]||D.home;const L=document.getElementById('ld');L.classList.remove('on');void L.offsetWidth;L.classList.add('on')}
 const t=anchor&&document.getElementById(anchor);
 if(t)t.scrollIntoView();else{scrollTo(0,0);if(!first){const x=document.querySelector('[data-page="'+name+'"] h1');if(x){x.tabIndex=-1;x.focus({preventScroll:true})}}}
 first=false;
}
if(!document.body.hasAttribute('data-mpa')){addEventListener('hashchange',route);route()}
})();

(function(){
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const live=m=>{const l=$('#live');l.textContent='';setTimeout(()=>l.textContent=m,30)};
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const bar=$('#prog'),top=$('#toTop');
const sc=()=>{const m=document.documentElement.scrollHeight-innerHeight;bar.style.width=(m>0?scrollY/m*100:0)+'%';top.hidden=scrollY<600};
addEventListener('scroll',sc,{passive:true});sc();top.onclick=()=>scrollTo({top:0});
function copy(t,msg){(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>live(msg),()=>{const a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();try{document.execCommand('copy');live(msg)}catch(e){live('Copy failed. Select the text and copy it manually.')}a.remove()})}
$$('pre:not(#cmsg)').forEach(p=>{const b=document.createElement('button');b.type='button';b.className='copy btn btn-ghost btn-sm';b.textContent='Copy code';b.onclick=()=>copy(p.innerText,'Code copied');p.before(b)});
const U=['utm_source','utm_medium','utm_campaign'],q=new URLSearchParams(location.search);
U.forEach(k=>{if(q.get(k))try{sessionStorage.setItem(k,q.get(k).slice(0,60))}catch(e){}});
const utm=()=>U.map(k=>{try{return sessionStorage.getItem(k)}catch(e){return null}}).filter(Boolean).join(' / ');
const sd=$('#sdlg'),si=$('#sq'),sr=$('#sres');let IDX=null;
const load=async()=>{if(IDX)return IDX;const e=$('#sidx');IDX=e?JSON.parse(e.textContent):await(await fetch('/assets/search-index.json')).json();return IDX};
$$('[data-search]').forEach(b=>b.onclick=async()=>{sd.showModal();si.focus();await load()});
si.oninput=async()=>{const t=si.value.trim().toLowerCase();sr.innerHTML='';if(t.length<2)return;const r=(await load()).filter(e=>(e.t+' '+e.x).toLowerCase().includes(t)).slice(0,8);
 sr.innerHTML=r.length?r.map(e=>{const i=Math.max(0,e.x.toLowerCase().indexOf(t));return '<li style="margin-bottom:.75rem"><a class="link" href="'+e.u+'">'+esc(e.t)+'</a><br><span class="muted small">…'+esc(e.x.slice(Math.max(0,i-40),i+100))+'…</span></li>'}).join(''):'<li>No results. Try "audit", "price" or "refund".</li>';live(r.length+' results')};
sr.onclick=e=>{if(e.target.closest('a'))sd.close()};
const f=$('#cform');
if(f){const t0=Date.now(),E=$('#ferr'),K=$('#fok'),dlg=$('#cdlg'),go=$('#cgo'),cp=$('#ccopy'),note=$('#cnote');let msg='';
 const rules=[['n',v=>v.trim().length>1,'Enter your name.'],['w',v=>!v.trim()||/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(v.trim()),'Enter a valid website, like example.com.'],['m',v=>v.trim().length>=10,'Write at least 10 characters about what you need.']];
 const check=()=>{const bad=[];rules.forEach(([id,ok,t])=>{const el=f.elements[id],b=!ok(el.value);el.setAttribute('aria-invalid',b);$('#e-'+id).textContent=b?t:'';if(b)bad.push(el)});const c=f.elements.c;c.setAttribute('aria-invalid',!c.checked);$('#e-c').textContent=c.checked?'':'Tick the box so we can reply to you.';if(!c.checked)bad.push(c);return bad};
 f.addEventListener('submit',e=>{e.preventDefault();K.hidden=E.hidden=true;
  if(f.elements.hp.value||Date.now()-t0<3000){E.textContent='We could not send this. Wait a few seconds and try again.';E.hidden=false;return}
  const bad=check();if(bad.length){E.textContent='Fix '+bad.length+' field'+(bad.length>1?'s':'')+' below, then try again.';E.hidden=false;bad[0].focus();return}
  const d=f.elements,u=utm(),n=CONFIG.waLink.trim();
  msg='Hi Vertex GEO, I would like a free AI visibility snapshot.\nName: '+d.n.value.trim()+(d.b.value.trim()?'\nBusiness: '+d.b.value.trim():'')+(d.w.value.trim()?'\nWebsite: '+d.w.value.trim():'')+'\nWhat I need: '+d.m.value.trim()+(u?'\nSource: '+u:'');
  $('#cmsg').textContent=msg;go.hidden=!n;cp.hidden=false;note.hidden=!!n;if(n)go.href=n+'?text='+encodeURIComponent(msg);dlg.showModal()});
 $('#ccancel').onclick=()=>dlg.close();
 cp.onclick=()=>{copy(msg,'Message copied');dlg.close();K.textContent='Message copied. Paste it into your WhatsApp chat with us.';K.hidden=false};
 go.onclick=()=>{go.classList.add('is-loading');setTimeout(()=>{go.classList.remove('is-loading');dlg.close();K.textContent='WhatsApp should now be open with your message. If it did not open, copy the message and send it in WhatsApp.';K.hidden=false;live('WhatsApp opened')},700)};
 f.addEventListener('input',()=>{E.hidden=true})}
const GA=CONFIG.gaId,cc=$('#cc');
function ga(){if(window.__ga||!/^G-[A-Z0-9]+$/.test(GA))return;window.__ga=1;window['ga-disable-'+GA]=false;const s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA;document.head.append(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA,{allow_google_signals:false,allow_ad_personalization_signals:false})}
$$('[data-ga]').forEach(e=>e.hidden=!GA);$$('[data-no-ga]').forEach(e=>e.hidden=!!GA);
if(GA){const st=LS.get('vx-consent');if(st==='yes')ga();else if(!st)cc.hidden=false;$$('[data-cc]').forEach(b=>{b.hidden=false;b.onclick=()=>{cc.hidden=false;cc.querySelector('button').focus()}})}
$$('#cc [data-c]').forEach(b=>b.onclick=()=>{const y=b.dataset.c==='yes';LS.set('vx-consent',y?'yes':'no');cc.hidden=true;if(y)ga();else{window['ga-disable-'+GA]=true;document.cookie.split(';').forEach(c=>{const n=c.split('=')[0].trim();if(n.indexOf('_ga')===0)document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'})}live(y?'Analytics accepted':'Analytics rejected')});
if(document.body.hasAttribute('data-mpa')&&location.protocol==='http:'&&!/^(localhost|127\.)/.test(location.hostname))location.replace('https:'+location.href.slice(5));
})();
