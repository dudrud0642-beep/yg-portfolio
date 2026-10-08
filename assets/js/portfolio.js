/* 이영경 포트폴리오 (2026 리뉴얼) */
(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const SMOOTH=RM?'auto':'smooth';

  /* 새로고침 시 이전 스크롤 위치를 복원하지 않고 항상 맨 위에서 시작 */
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  window.scrollTo(0,0);
  addEventListener('load',()=>window.scrollTo(0,0));
  addEventListener('beforeunload',()=>window.scrollTo(0,0));

  /* ---- 기존 작업 (data.js 기준, 링크는 실제 사이트) ---- */
  const P=[
    {id:1,t:"기업 브랜드 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://sell-plus.co.kr/main/index.php",dom:"sell-plus.co.kr",img:"images/thumbnail01.jpg"},
    {id:2,t:"쇼핑몰 서비스 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://site-doceramic.netlify.app/",dom:"doceramic · 복원 사이트",img:"images/thumbnail02.jpg"},
    {id:3,t:"자사 종합 제품 카탈로그 리뉴얼",g:"inhouse",role:"기획 · 편집 디자인",link:"https://drive.google.com/file/d/1QDbncsb1esRgaHLJToHpU_ajw8jZfZK3/view?usp=sharing",dom:"카탈로그 PDF",img:"images/thumbnail03.jpg"},
    {id:4,t:"제약사 브랜드 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://www.nbkpharm.com/main/main.php",dom:"nbkpharm.com",img:"images/thumbnail04.jpg"},
    {id:5,t:"교육 웹사이트 리뉴얼",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://slitt.deafkorea.com/main/",dom:"slitt.deafkorea.com",img:"images/thumbnail05.jpg"},
    {id:6,t:"교육 플랫폼 웹사이트 구축",g:"agency",role:"UI/UX 디자인 · 퍼블리싱",link:"https://aiednet.kr/main/main.php",dom:"aiednet.kr",img:"images/thumbnail06.jpg"},
    {id:7,t:"자사 국문 웹사이트 리뉴얼",g:"inhouse",role:"UI/UX 디자인 · 퍼블리싱",link:"https://andamiro.com/kr/",dom:"andamiro.com/kr",img:"images/thumbnail07.jpg"},
    {id:8,t:"자사 글로벌 웹사이트 리뉴얼",g:"inhouse",role:"UI/UX 디자인 · 퍼블리싱",link:"https://andamiro.com/global/",dom:"andamiro.com/global",img:"images/thumbnail08.jpg"},
    {id:9,t:"Pump It Up 공식 웹사이트 리뉴얼",g:"inhouse",role:"UI/UX 디자인 · 퍼블리싱",link:"https://www.piugame.com/",dom:"piugame.com",img:"images/thumbnail09.jpg"},
    {id:10,t:"유학원 브랜드 웹사이트 구축",g:"agency",role:"서브페이지 UI/UX · 퍼블리싱",link:"https://www.yesuhak.com/main/",dom:"yesuhak.com",img:"images/thumbnail10.jpg"}
  ];
  const CAT={agency:"Web Agency",inhouse:"In-house"};

  /* ---- How I work: data.js의 실제 프로세스 ---- */
  const FLOW=[
    {t:"기업 브랜드 웹사이트 구축",s:["디자인 리서치 & UI 설계","디자인 시안 작업","퍼블리싱 및 개발 협업","반응형 및 최종 납품"]},
    {t:"자사 종합 제품 카탈로그 리뉴얼",s:["기획 & 콘텐츠 구성","디자인 방향 설정","편집 디자인 작업","번역 협업 & 최종 완성"]},
    {t:"Pump It Up 공식 웹사이트 리뉴얼",s:["벤치마킹 & 콘텐츠 기획","디자인 시안 작업","퍼블리싱 및 개발 협업","반응형 및 최종 완성"]}
  ];

  /* ---- 새 AI 작업 ----
     url: 사이트를 완성하면 주소를 넣으세요. 주소가 있는 작업에만 "사이트 보기" 버튼이 생깁니다.
     shots: 실제 화면 캡처가 있으면 [경로, 대체 텍스트] 목록으로 넣습니다. 없으면 예시 화면(mock)이 보입니다.
     ai / me: AI Lab 설명 상자의 "AI가 맡은 일 / 내가 맡은 일" 목록입니다. */
  const AI=[
    {k:"pet",name:"멍냥 환생 연구소",en:"Web Service",status:"완성",url:"https://pet-profile-five.vercel.app/",
     desc:"반려동물의 성격 질문 5개에 답하면, 그 아이가 사람으로 태어났을 때의 인간 프로필을 만들어 주는 웹 서비스입니다. 서비스 기획과 화면 설계, Vue 3 구현, Vercel 배포까지 AI와 함께 진행했습니다.",
     stack:"Vue 3 · Vite · Vercel",
     shots:[["assets/images/ai-pet-landing.png","멍냥 환생 연구소 첫 화면"],["assets/images/ai-pet-result.png","멍냥 환생 연구소 결과 화면"]]},
    {k:"site",name:"AI 브랜드 웹사이트",en:"Website",status:"제작 중",url:"",
     desc:"브랜드 소개부터 문의까지 이어지는 반응형 사이트입니다. 디자인과 코드는 AI로 만들고, 방향 설정과 수정 피드백, 최종 검수를 맡고 있습니다.",
     ai:["레이아웃·코드 초안","수정 요청 반영"],me:["레퍼런스와 방향 설정","폭·여백·폰트 기준 제시","수정 사항 정리와 최종 검수"]},
    {k:"detail",name:"AI 상세페이지",en:"Detail Page",status:"예정",url:"",
     desc:"제품의 장점이 위에서 아래로 자연스럽게 읽히는 상세페이지입니다. 카피와 화면은 AI로 만들고, 제품 강조 포인트와 구매 흐름을 기획합니다.",
     ai:["카피·섹션 초안","이미지 배치안"],me:["제품 강조 포인트 기획","구매 흐름 검토","모바일 가독성 검수"]},
    {k:"book",name:"AI 예약 시스템",en:"Booking System",status:"예정",url:"",
     desc:"날짜와 시간을 고르고 바로 확정하는 예약 사이트입니다. 예약 화면과 로직은 AI로 만들고, 예약 단계와 빈 시간 표시 방식은 사용자 입장에서 정합니다.",
     ai:["예약 로직·폼 코드","화면 초안"],me:["예약 단계 설계","빈 시간 표시 방식 결정","테스트와 수정 요청"]}
  ];

  /* 설명 문장: 문장마다 줄을 나누고, 갈라지면 어색한 단위는 한 덩어리로 */
  const UNITS=['Vue 3','웹 서비스','인간 프로필','반응형 사이트','최종 검수','수정 피드백','방향 설정','구매 흐름','제품 강조 포인트','예약 단계','빈 시간','표시 방식','사용자 입장','예약 사이트','예약 화면','상세페이지입니다'];
  const fmt=txt=>txt.split(/(?<=다\.)\s+/).map(x=>{UNITS.forEach(u=>{x=x.split(u).join('<span class="nw">'+u+'</span>')});return '<span class="sent">'+x+'</span>'}).join('');
  function mock(k,cls){
    cls=cls||'';
    if(k==='site') return `<div class="mk ${cls}" aria-hidden="true">
      <div class="mk-top blk"><i class="mk-logo"></i><b>BRAND</b><span class="mk-nav"><i></i><i></i><i></i></span><em class="mk-cta">문의</em></div>
      <div class="mk-hero blk"><small>BRAND STORY</small><strong>일상에 맞춘<br>새로운 경험</strong><em class="mk-btn">자세히 보기</em></div>
      <div class="mk-g3"><div><i></i><span></span></div><div><i></i><span></span></div><div><i></i><span></span></div></div></div>`;
    if(k==='detail') return `<div class="mk ${cls}" aria-hidden="true">
      <div class="mk-d"><div class="mk-ph blk"></div>
      <div class="mk-info"><small>NEW</small><b>세라믹 머그 380ml</b><strong>24,000원</strong><span class="mk-sw"><i></i><i></i><i></i></span><em class="mk-btn">구매하기</em><em class="mk-btn2">장바구니</em></div></div>
      <div class="mk-strip"><span></span><span></span></div></div>`;
    let days='<i class="h">일</i><i class="h">월</i><i class="h">화</i><i class="h">수</i><i class="h">목</i><i class="h">금</i><i class="h">토</i>';
    for(let i=0;i<4;i++) days+='<i></i>';            // 2026년 10월 1일 = 목요일
    for(let d=1;d<=31;d++) days+=`<i class="${d<7?'off':d===17?'sel':''}">${d}</i>`;
    return `<div class="mk ${cls}" aria-hidden="true">
      <div class="mk-bh"><b>예약하기</b><span>날짜 · 시간 · 정보</span></div>
      <div class="mk-cal blk"><div class="mk-mon">2026. 10</div><div class="mk-days">${days}</div></div>
      <div class="mk-slots"><i>10:00</i><i class="on">11:30</i><i>14:00</i><i class="off">16:30</i></div>
      <em class="mk-wide">17일 11:30 예약하기</em></div>`;
  }

  /* ---------- scroll / copy ---------- */
  document.addEventListener('click',e=>{
    const s=e.target.closest('[data-scroll]');
    if(s){e.preventDefault();const el=document.getElementById(s.dataset.scroll);if(el) el.scrollIntoView({behavior:SMOOTH,block:'start'})}
    const c=e.target.closest('[data-copy]');
    if(c){
      const old=c.textContent, done=()=>{c.textContent='복사됨';setTimeout(()=>c.textContent=old,1400)};
      const sel=()=>{const n=c.parentElement.querySelector('[data-copy-src]');if(!n)return;const r=document.createRange();r.selectNodeContents(n);const g=getSelection();g.removeAllRanges();g.addRange(r)};
      try{navigator.clipboard.writeText(c.dataset.copy).then(done,sel)}catch(err){sel()}
    }
  });

  /* ---------- How I work loop ---------- */
  const fSteps=$('#flowSteps'), fTitle=$('#flowTitle');
  const paint=(f,n)=>{fSteps.innerHTML=f.s.map((s,i)=>`<li class="${i<n?'on':''}">${s}</li>`).join('')};
  paint(FLOW[0],4);
  (async function loop(){
    if(RM) return;
    let i=0;
    while(true){
      await sleep(2800);
      const cur=FLOW[i].t;
      for(let j=cur.length;j>=0;j--){fTitle.textContent=cur.slice(0,j);await sleep(22)}
      i=(i+1)%FLOW.length; const f=FLOW[i]; paint(f,0);
      await sleep(220);
      for(let j=1;j<=f.t.length;j++){fTitle.textContent=f.t.slice(0,j);await sleep(68)}
      for(let n=1;n<=4;n++){await sleep(430);paint(f,n)}
    }
  })();

  /* ---------- AI works stack ---------- */
  const DARK='--mk-bg:#1F1F22;--mk-ink:#F2F2F2;--mk-soft:#313136;--mk-on:#000';
  const ACC={site:'--mk-acc:#FF6FA3;--mk-acc2:#FFC9DC',detail:'--mk-acc:#FFC9DC;--mk-acc2:#FFE9F1',book:'--mk-acc:#E0457F;--mk-acc2:#FF9EC2'};
  const visual=w=>w.shots
    ? '<div class="phones">'+w.shots.map(([src,alt])=>'<img src="'+src+'" width="780" height="1688" loading="lazy" decoding="async" alt="'+alt+'">').join('')+'</div>'
    : mock(w.k);
  const siteBtn=w=>w.url
    ? `<a class="btn-site" href="${w.url}" target="_blank" rel="noopener">사이트 보기 <span aria-hidden="true">↗</span></a>`
    : '';
  $('#stack').innerHTML=AI.map((w,i)=>`
    <article class="sc" style="--i:${i}">
      <div class="sc-t">
        <div class="sc-meta"><span class="eyebrow">${w.en}</span></div>
        <h3>${w.name.replace('AI ','<b>AI</b> ')}</h3>
        <p class="sc-desc">${fmt(w.desc)}</p>
        ${w.stack?'<p class="sc-stack">'+w.stack+'</p>':''}
        <ol class="steps"><li><b>1</b>Prompt</li><li><b>2</b>Design</li><li><b>3</b>Code</li><li><b>4</b>Launch</li></ol>
        ${w.url?'<div class="sc-foot">'+siteBtn(w)+'</div>':''}
      </div>
      <div class="sc-v" style="${DARK};${ACC[w.k]||''}">${visual(w)}</div>
    </article>`).join('');

  /* ---------- AI Lab ---------- */
  const LAB=AI.filter(w=>!w.shots);
  let cur=0;
  const seg=$('#seg');
  seg.innerHTML=LAB.map((w,i)=>`<button type="button" role="tab" aria-selected="${i===0}" data-i="${i}">${w.name.replace('AI ','')}</button>`).join('');
  function render(){
    const w=LAB[cur];
    $$('button',seg).forEach((b,i)=>b.setAttribute('aria-selected',String(i===cur)));
    $('#wire').innerHTML=mock(w.k,'wire');
    $('#result').innerHTML=mock(w.k);
    $('#memo').innerHTML=`
      <div class="sc-meta"><span class="eyebrow">${w.en}</span></div>
      <h3>${w.name}</h3>
      <p>${fmt(w.desc)}</p>
      <div class="mcols">
        <div><h4>AI가 맡은 일</h4><ul>${w.ai.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div class="me"><h4>내가 맡은 일</h4><ul>${w.me.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
      <p class="ex">작업 중인 프로젝트입니다. 완성되면 실제 화면으로 바뀝니다.</p>`;
  }
  seg.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cur=+b.dataset.i;render()});
  render();

  const cmp=$('#cmp'), hd=$('#handle');
  let pos=50, drag=false;
  const setPos=p=>{pos=Math.max(0,Math.min(100,p));cmp.style.setProperty('--pos',pos+'%');hd.setAttribute('aria-valuenow',String(Math.round(pos)))};
  const fromEvt=e=>{const r=cmp.getBoundingClientRect();setPos((e.clientX-r.left)/r.width*100)};
  cmp.addEventListener('pointerdown',e=>{drag=true;try{cmp.setPointerCapture(e.pointerId)}catch(err){}fromEvt(e)});
  cmp.addEventListener('pointermove',e=>{if(drag)fromEvt(e)});
  ['pointerup','pointercancel'].forEach(t=>cmp.addEventListener(t,()=>{drag=false}));
  hd.addEventListener('keydown',e=>{
    const m={ArrowLeft:pos-5,ArrowRight:pos+5,Home:0,End:100};
    if(e.key in m){setPos(m[e.key]);e.preventDefault()}
  });

  /* ---------- Index (실제 사이트로 이동) ---------- */
  $('#rows').innerHTML=P.map(p=>`
    <a class="row" href="${p.link}" target="_blank" rel="noopener" data-img="${p.img}">
      <span class="no">${String(p.id).padStart(2,'0')}</span>
      <img class="mini" src="${p.img}" loading="lazy" decoding="async" alt="">
      <span class="tt"><b>${p.t}</b><small>${p.role}</small></span>
      <span class="role">${p.role}</span>
      <span class="cat">${CAT[p.g].toUpperCase()}</span>
      <span class="dom">${p.dom}</span>
      <span class="arr" aria-hidden="true">↗</span>
    </a>`).join('');
  const fl=$('#float');
  /* 썸네일을 미리 받아 두어 마우스를 올리는 즉시 보이게 */
  const preload=()=>P.forEach(p=>{const im=new Image();im.decoding='async';im.src=p.img});
  if(document.readyState==='complete') setTimeout(preload,300); else addEventListener('load',()=>setTimeout(preload,300));
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    let tx=0,ty=0,cx=0,cy=0,raf=0,act=false;
    const step=()=>{cx+=(tx-cx)*(RM?1:.35);cy+=(ty-cy)*(RM?1:.35);fl.style.left=cx+'px';fl.style.top=cy+'px';raf=(act||Math.abs(tx-cx)>.5)?requestAnimationFrame(step):0};
    addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
    $$('.row').forEach(r=>{
      r.addEventListener('mouseenter',e=>{
        if(!fl.classList.contains('on')){cx=tx=e.clientX;cy=ty=e.clientY}
        if(fl.getAttribute('src')!==r.dataset.img) fl.src=r.dataset.img;
        fl.classList.add('on'); act=true; if(!raf) raf=requestAnimationFrame(step);
      });
      r.addEventListener('mouseleave',()=>{fl.classList.remove('on');act=false});
    });
  }
})();
