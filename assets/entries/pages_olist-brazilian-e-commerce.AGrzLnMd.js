import{j as e,U as o,C as f,P as w,A as d,I as i,g as c,n as s,k as v,$ as _,a as q,b as l,x as N,f as h,r as x,c as m,i as y,R as S,d as O,e as T,h as P,l as D}from"../chunks/chunk-DNcH4by0.js";import{l as p,m as g}from"../chunks/chunk-DMHaBfVt.js";import{y as b}from"../chunks/chunk-DejR68XI.js";/* empty css                      */const j=void 0,C=[{id:"9HkMcNLur2WwRwNhCRype"},{id:"Ebp305NH3DKjMN4TXUcCK",maxWidth:991},{id:"lD13bXNGRDf_HcpqXWz9e",maxWidth:767},{id:"pkZz20ag9BV_9rs_sHWFD",maxWidth:479}],B=void 0,R=[],A=["tie-man-with-graphs_HUR1IYfn2479qvX3tP_x5.jpg","Blue-circuit-board_ByKiV6P_YeaDUzF6tDgqt.jpg"],E=a=>e.jsxs("body",{className:"w-element ck5uqek cvjc6ee",children:[e.jsx(p,{children:e.jsxs(g,{children:[e.jsx(o,{code:`<style>
    /* So we don't need to add a token to every paragraph to remove margin. */
    p {
        margin: 0;
    }

    * {
        /* Make links scroll to their sections smoothly. */
        scroll-behavior: smooth;
    }

    /* Nav Trigger show active when submenu is open. */
    nav button[data-state="open"] {
        --navigation-menu-trigger-icon-transform: 180deg;
        color: var(--foreground-muted);
    }
</style>`,className:"w-html-embed"}),e.jsx(o,{code:`<style>
:root {
  --ani-duration: var(--duration-default, .2s);
  --ani-delay: 0s;
  --ani-slide-offset: 20%;
  --ani-zoom-in-scale: 1;
  --ani-zoom-out-scale: .85;
  --ani-flip-rotate: 30deg;
  --ani-easing: var(--easing-default, ease);
  --ani-fill-mode: forwards;
}
[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}
@keyframes fadeIn{from{opacity:0}
to{opacity:1}}
@keyframes fadeOut{from{opacity:1}
to{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}
@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}
to{opacity:1;translate:none}}
@keyframes slideOut{from{opacity:1;translate:none}
to{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}
@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}
to{opacity:1;scale:1}}
@keyframes zoomOut{from{opacity:1;scale:1}
to{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}
@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}
to{rotate:y 0;opacity:1}}
@keyframes flipOutY{from{rotate:y 0;opacity:1}
to{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}
@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}
to{rotate:x 0;opacity:1}}
@keyframes flipOutX{from{rotate:x 0;opacity:1}
to{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}
@keyframes expandDown{from{height:0}
to{height:var(--newHeight)}}
@keyframes expandUp{from{height:var(--newHeight)}
to{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}
@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}
</style>`,className:"w-html-embed"}),e.jsx(p,{children:e.jsx(g,{children:e.jsxs("div",{className:"w-element c1stfoor c9d67at cq6xksj caf51ll ci0foj8 cqsq758 cpxb35h",children:[e.jsxs(f,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsxs(w,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:[e.jsx(d,{"data-ws-index":"0",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(i,{children:e.jsx(c,{href:"/",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c78qy79 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg cjtlqah c2czlbk c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Home"})})}),e.jsx(d,{"data-ws-index":"1",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(i,{children:e.jsx(c,{href:"/resume",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c1jrz99e cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Resume"})})}),e.jsx(d,{"data-ws-index":"2",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(i,{children:e.jsx(c,{href:"https://www.linkedin.com/in/david-honig-data-analyst/",prefetch:"intent",target:"_blank",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"LinkedIn"})})})]}),e.jsx(s,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(v,{className:"w-menu-viewport c1p2lsjl cy043uq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]}),e.jsxs(f,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsx(w,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:e.jsxs(d,{"data-ws-index":"0",className:"w-menu-item cpm0lg6 cp92q8o c15j13aa c1xsfmoz c1vefx24 c1153flh c1suu0w7 c139ru9q c1qiyaxo c52y1de",children:[e.jsx(_,{children:e.jsxs(q,{className:"w-button cgwd9be caf51ll ci0foj8 cpm0lg6 cl3pqvm c1wk4jml c11utyqh cas7m1i coj0a1 c1uxi20o cjdbm83 cl15lsz c1064a8f c16eo2vq cw3ffdu c1bmw7rn c1izypqa ckl4n79 c14347k7 c1dp5w5p c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de cbhcit0 c1p4xtuy cxfn7f3 crf2t9l cxvedzk",children:[e.jsx(l,{className:"w-text c10h61eg c1jn979a c1r8n8ab c52y1de",children:"Portfolio Projects"}),e.jsx(s,{className:"w-box cbz6z8p c1izi37g c78ggpa cdtqtup c19q9ke1 c1lvmf7o ce9akbv c13yi6lt c13t58p2 ckqr6du",children:e.jsx(o,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed c10h61eg c52y1de"})})]})}),e.jsx(N,{className:"w-menu-content cubuxty cvw5eq4 c1ueflz4 c1jt3vt cad7ojn ca4sjv9",children:e.jsx(s,{className:"w-box c1stfoor cgs1el c1ruscum",children:e.jsxs(s,{className:"w-box c1uq8c3 c1stfoor cgs1el c1ruscum cppnd8j",children:[e.jsx(i,{children:e.jsxs(c,{href:"/olist-brazilian-e-commerce",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(l,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Olist Brazilian E-Commerce"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL and Tableau"})]})}),e.jsx(i,{children:e.jsxs(c,{href:"/top-boardgames",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(l,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element cdo52u0",children:"Top Boardgames"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    Excel and Tableau"})]})}),e.jsx(i,{children:e.jsxs(c,{href:"/subscription-analysis",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(l,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Subscription Analytics"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL"})]})})]})})})]})}),e.jsx(s,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(v,{className:"w-menu-viewport c1p2lsjl c6znlaq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]})]})})})]})}),e.jsx("div",{className:"w-element cg6bu85 c1lk0wil c10fqany cwfzcsy c1nhoi5v c1064a8f c3j8bkl c1stfoor cppnd8j c1n9d65h c1javpap cn3asuf c7c2j48 c41ins8 clwz64r c1hc885s c19o35pv c1phhyqa c10gm70x c8mm804 c11kthwq cizezuy",children:e.jsx("div",{className:"w-element c1omugdh c1atcgj0 c1064a8f c195fktj c1lwc61q cf1e8cd c1stfoor cppnd8j",children:e.jsxs("div",{className:"w-element c1p2lsjl c16a0g72 c1064a8f c110z30b cw3ffdu c1stfoor caf51ll ci0foj8 cpxb35h c186bcwd cppnd8j",children:[e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w csqgcnf c1mrb40c c1tuvooy c1lwc61q c1w0cyj0 cmgebpz cvjoznb c7rvf29 c6mvtlh cmohnhh c6nqxbd c1p2lsjl c1stfoor cppnd8j ci0foj8 caf51ll c1n9d65h c1cnvkm1 c8gm6xl c1iu2q7r c1k29tio czay79i c14hepux",children:[e.jsx("h2",{className:"w-element c3w2odz c6mvtlh c6derb6 c5c3l8m c1tdaz5o c7kh6n c1qnt9aw czggkkn c55s982 c1y18jz0 c15gnz76 cz4dj7v c12vovhr c1lvpb9 cdjazf2",children:"Olist Brazilian E-Commerce: Customer Satisfaction Analysis"}),e.jsx("hr",{className:"w-element cjs91nq c1edq957 cij2pp8 c1stfoor cjg8yyn cdnd97 cnsk4wd c1dmimb4 c6a6gzw cfd1ath chijvlv c16u6242 c1153flh c1suu0w7 c139ru9q c1qiyaxo czay79i"}),e.jsxs("div",{className:"w-element c1stfoor cpxb35h c186bcwd c1064a8f cw3ffdu ci0foj8 caf51ll cq6xksj c1p2lsjl c87rqvl c1javpap c1wlbyuv c7f4h23",children:[e.jsx(b,{src:"/assets/postgresql-icon-256_TSrIdOB5A8ko154P5KMED.png",width:256,height:256,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(b,{src:"/assets/icons8-tableau-software-240_GqT3qQ8WPmMrvqIH5OpeE.png",width:240,height:240,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(c,{href:"https://github.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis",target:"_blank",className:"w-element cewjr2h c1wzku9a cm7el75 c1y4pece c1j7aqqb c9xio0n cl91tsg c5we2rp cjgl1or c9g8ntk cdvjofb cw07uha c15gnz76 c1fysvu8 c1lgkzhg cai44d c1o56ms4 c1sba756 cwvo6a2 c10318dh cnhk6tx c9a0b8i",children:"View on GitHub"})]})]}),e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w cf1e8cd chbywm1 c195fktj c1lwc61q c1w0cyj0 cmgebpz c1atcgj0 c7rvf29 c6mvtlh cmohnhh cabs4an c1p2lsjl czay79i c14hepux",children:[e.jsx(o,{executeScriptOnCanvas:!0,code:`<div class="readme">
<style>
.readme { font-family: inherit; color: inherit; line-height: 1.65; max-width: 100%; }
.readme h1 { font-size: 2em; font-weight: 700; margin: 0.5em 0 0.6em; line-height: 1.25; }
.readme h2 { font-size: 1.5em; font-weight: 700; margin: 1.4em 0 0.6em; line-height: 1.3; }
.readme h3 { font-size: 1.2em; font-weight: 600; margin: 1.2em 0 0.5em; }
.readme p { margin: 0.8em 0; }
.readme ul { margin: 0.8em 0; padding-left: 1.4em; }
.readme li { margin: 0.6em 0; }
.readme blockquote { margin: 1em 0; padding: 0.6em 1em; border-left: 4px solid currentColor; opacity: 0.85; font-style: italic; }
.readme blockquote p { margin: 0.2em 0; }
.readme code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 0.9em; background: rgba(127,127,127,0.15); padding: 0.15em 0.4em; border-radius: 4px; }
.readme pre { background: rgba(127,127,127,0.12); padding: 1em 1.2em; border-radius: 8px; overflow-x: auto; margin: 1em 0; }
.readme pre code { background: none; padding: 0; font-size: 0.88em; line-height: 1.5; }
.readme table { border-collapse: collapse; margin: 1em auto; }
.readme th, .readme td { border: 1px solid rgba(127,127,127,0.4); padding: 0.45em 0.9em; text-align: left; }
.readme th { font-weight: 600; background: rgba(127,127,127,0.12); }
.readme hr { border: none; border-top: 1px solid rgba(127,127,127,0.35); margin: 2em 0; }
.readme a { color: inherit; text-decoration: underline; }
.readme .img-center { text-align: center; margin: 1.4em 0; }
.readme .img-center img { max-width: 60%; height: auto; display: inline-block; }
.readme .img-center img.wide { max-width: 80%; }
.readme .img-center img.med { max-width: 65%; }
.readme .img-caption { display: block; margin-top: 0.5em; font-size: 0.95em; }
@media (max-width: 700px) {
  .readme .img-center img, .readme .img-center img.wide, .readme .img-center img.med { max-width: 100%; }
}
</style>

<h1>Olist Brazilian E-Commerce: Customer Satisfaction Analysis</h1>

<h2>Problem Statement</h2>

<p>What operational factors, such as delivery time, freight cost, and seller behavior, most strongly predict a negative customer experience, and which product categories and sellers represent the highest risk to customer satisfaction?</p>

<blockquote><p>A "bad review" is defined as a review score of 1, 2, or 3. These customers are less likely to return making them a churn risk.</p></blockquote>

<hr>

<div class="img-center">
  <a href="https://public.tableau.com/views/OlistProjectinTableau/OlistProject?:language=en-US&amp;:sid=&amp;:redirect=auth&amp;:display_count=n&amp;:origin=viz_share_link" target="_blank" rel="noopener">
    <img class="wide" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/olist_tableau_dashboard.png" alt="Tableau dashboard showing metrics which drive bad reviews">
  </a>
  <a class="img-caption" href="https://public.tableau.com/views/OlistProjectinTableau/OlistProject?:language=en-US&amp;:sid=&amp;:redirect=auth&amp;:display_count=n&amp;:origin=viz_share_link" target="_blank" rel="noopener">View the Tableau dashboard</a>
</div>

<hr>

<h2>Key Findings</h2>

<ul>
<li><strong>Delivery time is the dominant driver of bad reviews.</strong> Orders with a score of 1 averaged 20.8 days to deliver versus 10.2 days for orders with a score of 5. Every step up in review score corresponded to a shorter delivery time without exception.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/1_star_orders_take_21_days_to_deliver_graph.png" alt="Horizontal bar chart showing Star Rating vs Delivery Time">
</div>

<ul>
<li><strong>Deliveries over 21 days significantly increase risk.</strong> Bad review rates rise gradually from 14.1% to 22.6% below that point, then nearly double crossing it, reaching 40.6% for orders taking 22 to 30 days and 75.7% for orders taking 31 or more days.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/delivery_buckets_graph.png" alt="Horizontal bar chart showing Bad Review Rate by Delivery Day Bucket">
</div>

<ul>
<li><strong>Higher freight costs are associated with worse reviews, but delivery time is likely the real reason.</strong> The median freight cost spread across all review scores is only about 2 Brazilian Real. The correlation with bad reviews is likely confounded by delivery time, since bulky products cost more to ship and also take longer to deliver.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/median_freight_varies_by_2_dollars_graph.png" alt="Horizontal bar chart showing Freight Costs vs Review Score">
</div>

<ul>
<li><strong>Arriving late relative to the estimate is not the core problem.</strong> Olist pads delivery estimates enough that even the worst-reviewed orders typically arrive 6 days early. Raw delivery time, not relative lateness, drives dissatisfaction. A customer waiting 20 days for their order is unhappy regardless of what the estimate said.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/1_star_orders_arrived_3.4_days_before_graph.png" alt="Horizontal Bar chart showing 1-Star Orders Take 21 Days to Deliver, Twice as Long as 5-Star Orders">
</div>

<ul>
<li><strong>Bad reviews are a platform-wide logistics problem, not a bad seller problem.</strong> Sellers with a bad review rate above 35% account for only 14% of all bad reviews on the platform. The remaining 86% come from sellers at or near the platform average of 23%. Removing every high-risk seller would leave the vast majority of the problem untouched.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/only_14_percent_of_bad_reviews_come_from_graph.png" alt="Horizontal bar chart showing only 14% of bad reviews come from High Risk Sellers">
</div>

<ul>
<li><strong>Home and furniture categories have the worst bad review rates on the platform.</strong> <code>office_furniture</code> has a 36.6% bad review rate across 1,244 orders, nearly double the platform average. <code>bed_bath_table</code> is the single largest contributor with 2,398 bad reviews across 9,175 orders. Home comfort, furniture, and mattress categories dominate the top 15 by bad review rate, suggesting something wrong with bulky, hard-to-ship products.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/of_the_1244_office_furniture_orders_graph.png" alt="Horizontal bar chart showing Product Categories Ranked by Bad Review Rate">
</div>

<hr>

<h2>Dataset</h2>

<p>The Brazilian E-Commerce Public Dataset by Olist is available on <a href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" target="_blank" rel="noopener">Kaggle</a>. It contains approximately 100,000 orders from 2016 to 2018 across 9 tables.</p>

<table>
<thead><tr><th>Table</th><th>Rows</th></tr></thead>
<tbody>
<tr><td>customers</td><td>99,441</td></tr>
<tr><td>orders</td><td>99,441</td></tr>
<tr><td>order_items</td><td>112,650</td></tr>
<tr><td>reviews</td><td>99,224</td></tr>
<tr><td>products</td><td>32,951</td></tr>
<tr><td>sellers</td><td>3,095</td></tr>
<tr><td>payments</td><td>103,886</td></tr>
<tr><td>geolocation</td><td>1,000,163</td></tr>
<tr><td>category_translation</td><td>71</td></tr>
</tbody>
</table>

<p><strong>Tools:</strong> PostgreSQL, DBeaver</p>

<div class="img-center">
  <img class="med" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/entity_relationship_diagram.png" alt="Entity Relationship Diagram">
</div>

<hr>

<h2>Methodology</h2>

<h3>Data Quality Findings</h3>

<p><strong>Reviews table:</strong> <code>review_id</code> is not a reliable unique identifier. The same <code>review_id</code> appears across multiple <code>order_id</code> values with identical comment text, indicating a bug in Olist's review assignment system. Some orders also have multiple reviews with different scores. A <code>reviews_deduped</code> view was created using <code>DISTINCT ON (order_id)</code> ordered by <code>review_score ASC</code>, keeping the most conservative score per order. The view contains 98,673 rows with every <code>order_id</code> appearing exactly once.</p>

<p><strong>Orders table:</strong> 8 orders marked as delivered had no <code>order_delivered_customer_date</code> and were excluded. 13 orders had a calculated delivery time of 0 days, likely recording errors, and were also excluded. The final <code>orders_clean</code> view contains 96,457 rows.</p>

<p><strong>Products table:</strong> 610 products had empty string values ("") for <code>product_category_name</code>, which were converted to NULL before adding the foreign key constraint. Two categories, <code>pc_gamer</code> and <code>portateis_cozinha_e_preparadores_de_alimentos</code>, existed in the products table but were missing from <code>category_translation</code>. Both were inserted manually with English translations.</p>

<h3>Key Metric Definitions</h3>

<ul>
<li><strong><code>delivery_days</code>:</strong> Total days from purchase timestamp to actual delivery. Median: 10 days. Average: 12 days. 90th percentile: 23 days.</li>
<li><strong><code>delivery_delay_days</code>:</strong> Days between actual delivery and estimated delivery. Positive means late, negative means early. Median: -11 days, meaning most orders arrived well before the estimated date.</li>
</ul>

<hr>

<h2>Repository Structure</h2>

<pre><code>sql/
    01_setup.sql           -- Load reviews CSV, verify row counts, rename tables
    02_data_quality.sql    -- Data quality investigation, fixes, views, and constraints
    03_exploration.sql     -- Distribution checks and all analytical queries
images/                    -- Screenshots of query results
README.md
</code></pre>

<h2>How to Run</h2>

<ol>
<li>Download the dataset from <a href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" target="_blank" rel="noopener">Kaggle</a> and load each CSV into a PostgreSQL database using DBeaver or psql.</li>
<li>Update the file path in the <code>COPY</code> command in <code>01_setup.sql</code> to match your local environment.</li>
<li>Run the scripts in order: <code>01_setup.sql</code> → <code>02_data_quality.sql</code> → <code>03_exploration.sql</code>.</li>
<li>Note: the data fixes and foreign key constraints in <code>02_data_quality.sql</code> must complete before <code>03_exploration.sql</code> runs, or the views and analysis queries that depend on clean data will not produce correct results.</li>
</ol>

</div>`,className:"w-html-embed"}),e.jsx("hr",{className:"w-element c1w2kby2 c1xo2ua8 c1u4qrj5 c1qiyaxo cdp8qbu cuilavn c72v0tn c6qujbi c3czewo"})]})]})})}),e.jsx(p,{children:e.jsx(g,{children:e.jsxs("div",{className:"w-element c19e299d",children:[e.jsx("p",{className:"w-element c7tji72 c1stfoor cf1e8cd csd6brl c1atcgj0 caf51ll c195fktj c1qgnt61 c8haaz7",children:"© 2026 David Honig. All rights reserved."}),e.jsx("hr",{className:"w-element c1w2kby2 c3w2odz ccktdsi c23gqnr cyly4zz c5vp848 c11l18sm"})]})})})]}),H=a=>{const{origin:t,pathname:n,search:r}=new URL(a);return`${t}${n}${r}`},L=x.memo(({pageKey:a,system:t})=>e.jsx(E,{system:t},a),(a,t)=>a.pageKey===t.pageKey),I=({data:a})=>{const{system:t,resources:n,url:r,pageMeta:u}=a,k=H(r),z=x.useMemo(()=>({imageLoader:y,assetBaseUrl:m,resources:n,breakpoints:C,onError:console.error}),[n]);return e.jsxs(S.Provider,{value:z,children:[e.jsx(O.Provider,{value:r,children:e.jsx(L,{pageKey:k,system:t})}),e.jsx(T,{url:r,pageMeta:u,siteName:j,imageLoader:y,assetBaseUrl:m}),e.jsx(P,{children:u.title})]})},U=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),M=({})=>e.jsxs(e.Fragment,{children:[j,B,R.map(a=>e.jsx("link",{rel:"preload",href:`${m}${a}`,as:"font",crossOrigin:"anonymous"},a)),A.map(a=>e.jsx("link",{rel:"preload",href:`${m}${a}`,as:"image"},a))]}),$=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),W={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:D}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/olist-brazilian-e-commerce/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:U}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/olist-brazilian-e-commerce/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}}};export{W as configValuesSerialized};
