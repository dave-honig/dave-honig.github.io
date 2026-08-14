import{j as e,U as d,C as v,P as w,A as l,I as r,g as i,n as s,k as y,$ as z,a as q,b as m,x as N,f as h,r as x,c as o,i as u,R as T,d as S,e as O,h as P,l as C}from"../chunks/chunk-DNcH4by0.js";import{l as p,m as g}from"../chunks/chunk-DMHaBfVt.js";import{d as b}from"../chunks/chunk-BsoyDo-0.js";/* empty css                      */const j="Dave's Project Portfolio",E=[{id:"9HkMcNLur2WwRwNhCRype"},{id:"Ebp305NH3DKjMN4TXUcCK",maxWidth:991},{id:"lD13bXNGRDf_HcpqXWz9e",maxWidth:767},{id:"pkZz20ag9BV_9rs_sHWFD",maxWidth:479}],A="Favicon_TV_enmE7_VxmK9-vrdZHu.png",D=[],B=["tie-man-with-graphs_HUR1IYfn2479qvX3tP_x5.jpg","Blue-circuit-board_ByKiV6P_YeaDUzF6tDgqt.jpg"],R=t=>e.jsxs("body",{className:"w-element ck5uqek cvjc6ee",children:[e.jsx(p,{children:e.jsxs(g,{children:[e.jsx(d,{code:`<style>
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
</style>`,className:"w-html-embed"}),e.jsx(d,{code:`<style>
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
</style>`,className:"w-html-embed"}),e.jsx(p,{children:e.jsx(g,{children:e.jsxs("div",{className:"w-element c1stfoor c9d67at cq6xksj caf51ll ci0foj8 cqsq758 cpxb35h",children:[e.jsxs(v,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsxs(w,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:[e.jsx(l,{"data-ws-index":"0",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(r,{children:e.jsx(i,{href:"/",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c78qy79 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg cjtlqah c2czlbk c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Home"})})}),e.jsx(l,{"data-ws-index":"1",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(r,{children:e.jsx(i,{href:"/resume",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c1jrz99e cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Resume"})})}),e.jsx(l,{"data-ws-index":"2",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(r,{children:e.jsx(i,{href:"https://www.linkedin.com/in/david-honig-data-analyst/",prefetch:"intent",target:"_blank",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"LinkedIn"})})})]}),e.jsx(s,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(y,{className:"w-menu-viewport c1p2lsjl cy043uq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]}),e.jsxs(v,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsx(w,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:e.jsxs(l,{"data-ws-index":"0",className:"w-menu-item cpm0lg6 cp92q8o c15j13aa c1xsfmoz c1vefx24 c1153flh c1suu0w7 c139ru9q c1qiyaxo c52y1de",children:[e.jsx(z,{children:e.jsxs(q,{className:"w-button cgwd9be caf51ll ci0foj8 cpm0lg6 cl3pqvm c1wk4jml c11utyqh cas7m1i coj0a1 c1uxi20o cjdbm83 cl15lsz c1064a8f c16eo2vq cw3ffdu c1bmw7rn c1izypqa ckl4n79 c14347k7 c1dp5w5p c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de cbhcit0 c1p4xtuy cxfn7f3 crf2t9l cxvedzk",children:[e.jsx(m,{className:"w-text c10h61eg c1jn979a c1r8n8ab c52y1de",children:"Portfolio Projects"}),e.jsx(s,{className:"w-box cbz6z8p c1izi37g c78ggpa cdtqtup c19q9ke1 c1lvmf7o ce9akbv c13yi6lt c13t58p2 ckqr6du",children:e.jsx(d,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed c10h61eg c52y1de"})})]})}),e.jsx(N,{className:"w-menu-content cubuxty cvw5eq4 c1ueflz4 c1jt3vt cad7ojn ca4sjv9",children:e.jsx(s,{className:"w-box c1stfoor cgs1el c1ruscum",children:e.jsxs(s,{className:"w-box c1uq8c3 c1stfoor cgs1el c1ruscum cppnd8j",children:[e.jsx(r,{children:e.jsxs(i,{href:"/olist-brazilian-e-commerce",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(m,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Olist Brazilian E-Commerce"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL and Tableau"})]})}),e.jsx(r,{children:e.jsxs(i,{href:"/top-boardgames",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(m,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element cdo52u0",children:"Top Boardgames"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    Excel and Tableau"})]})}),e.jsx(r,{children:e.jsxs(i,{href:"/subscription-analysis",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(m,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Subscription Analytics"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL"})]})})]})})})]})}),e.jsx(s,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(y,{className:"w-menu-viewport c1p2lsjl c6znlaq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]})]})})})]})}),e.jsx("div",{className:"w-element cg6bu85 c1lk0wil c10fqany cwfzcsy c1nhoi5v c1064a8f c3j8bkl c1stfoor cppnd8j c1n9d65h c1javpap cn3asuf c7c2j48 c41ins8 clwz64r c1hc885s c19o35pv c1phhyqa c10gm70x c8mm804 c11kthwq cizezuy",children:e.jsx("div",{className:"w-element c1omugdh c1atcgj0 c1064a8f c195fktj c1lwc61q cf1e8cd c1stfoor cppnd8j",children:e.jsxs("div",{className:"w-element c1p2lsjl c16a0g72 c1064a8f c110z30b cw3ffdu c1stfoor caf51ll ci0foj8 cpxb35h c186bcwd cppnd8j",children:[e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w csqgcnf c1mrb40c c1tuvooy c1lwc61q c1w0cyj0 cmgebpz cvjoznb c7rvf29 c6mvtlh cmohnhh c6nqxbd c1p2lsjl c1stfoor cppnd8j ci0foj8 caf51ll c1n9d65h c1cnvkm1 c8gm6xl c1iu2q7r c1k29tio czay79i c14hepux",children:[e.jsx("h2",{className:"w-element c3w2odz c6mvtlh c6derb6 c5c3l8m c1tdaz5o c7kh6n c1qnt9aw czggkkn c55s982 c1y18jz0 c15gnz76 cz4dj7v c12vovhr c1lvpb9 cdjazf2",children:"Olist Brazilian E-Commerce: Customer Satisfaction Analysis"}),e.jsx("hr",{className:"w-element cjs91nq c1edq957 cij2pp8 c1stfoor cjg8yyn cdnd97 cnsk4wd c1dmimb4 c6a6gzw cfd1ath chijvlv c16u6242 c1153flh c1suu0w7 c139ru9q c1qiyaxo czay79i"}),e.jsxs("div",{className:"w-element c1stfoor cpxb35h c186bcwd c1064a8f cw3ffdu ci0foj8 caf51ll cq6xksj c1p2lsjl c87rqvl c1javpap c1wlbyuv c7f4h23",children:[e.jsx(b,{src:"/assets/postgresql-icon-256_TSrIdOB5A8ko154P5KMED.png",width:256,height:256,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(b,{src:"/assets/icons8-tableau-software-240_GqT3qQ8WPmMrvqIH5OpeE.png",width:240,height:240,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(i,{href:"https://github.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis",target:"_blank",className:"w-element cewjr2h c1wzku9a cm7el75 c1y4pece c1j7aqqb c9xio0n cl91tsg c5we2rp cjgl1or c9g8ntk cdvjofb cw07uha c15gnz76 c1fysvu8 c1lgkzhg cai44d c1o56ms4 c1sba756 cwvo6a2 c10318dh cnhk6tx c9a0b8i",children:"View on GitHub"})]})]}),e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 cl5dcfs c1kvaofg cd33od4 cea72fu c1sj2h9w cf1e8cd chbywm1 c195fktj c1lwc61q c1w0cyj0 cmgebpz c1atcgj0 c7rvf29 c6mvtlh cmohnhh cabs4an c1p2lsjl czay79i c14hepux",children:[e.jsx(d,{executeScriptOnCanvas:!0,code:`<div class="readme">
<style>
.readme { font-family: inherit; color: inherit; line-height: 1.65; max-width: 100%; }
.readme h1 { font-size: 2em; font-weight: 700; margin: 0.5em 0 0.6em; line-height: 1.25; }
.readme h2 { font-size: 1.5em; font-weight: 700; margin: 1.4em 0 0.6em; line-height: 1.3; }
.readme h3 { font-size: 1.2em; font-weight: 600; margin: 1.2em 0 0.5em; }
.readme p { margin: 0.8em 0; }
.readme ul, .readme ol { margin: 0.8em 0; padding-left: 1.4em; }
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
.readme .img-center img { max-width: 60%; height: auto; display: inline-block; background: #fff; border: 1px solid rgba(29,70,149,0.25); border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.12); }
.readme .img-center img.wide { max-width: 80%; }
.readme .img-center img.med { max-width: 70%; }
.readme .img-center img.sm { max-width: 50%; }
.readme .img-center img.xs { max-width: 40%; }
.readme .img-caption { display: block; margin-top: 0.5em; font-size: 0.95em; }
.readme hr.finding-end { width: 75%; margin: 1em auto; border-top: 1px solid #1d4695; }
@media (max-width: 700px) {
  .readme .img-center img,
  .readme .img-center img.wide,
  .readme .img-center img.med,
  .readme .img-center img.sm,
  .readme .img-center img.xs { max-width: 100%; }
}
</style>

<h2>Problem Statement</h2>

<p>What operational factors, such as delivery time, shipping cost, and seller behavior, most strongly predict a negative customer experience, and which product categories and sellers represent the highest risk to customer satisfaction?</p>

<blockquote><p>A "bad review" is defined as a review score of 1, 2, or 3. These customers are less likely to return making them a churn risk.</p></blockquote>

<hr>

<div class="img-center">
  <a href="https://public.tableau.com/views/OlistProjectinTableau/OlistProject_v3?:language=en-US&amp;:sid=&amp;:redirect=auth&amp;:display_count=n&amp;:origin=viz_share_link" target="_blank" rel="noopener">
    <img class="wide" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/olist_tableau_dashboard.png" alt="Tableau dashboard showing metrics which drive bad reviews">
  </a>
  <a class="img-caption" href="https://public.tableau.com/views/OlistProjectinTableau/OlistProject_v3?:language=en-US&amp;:sid=&amp;:redirect=auth&amp;:display_count=n&amp;:origin=viz_share_link" target="_blank" rel="noopener">View the Tableau dashboard</a>
</div>

<hr>

<h2>Key Findings</h2>

<p><strong>Delivery time is the dominant driver of bad reviews.</strong></p>

<ul>
<li>The bad review rate climbs from 14.1% for orders delivered within a week to 75.7% for orders taking over 31 days to arrive.</li>
<li>The risk of a bad review nearly doubles from 22.6% to 40.6% if their delivery took over 3 weeks to arrive.</li>
<li>Orders rated 1-star took 20.8 days to arrive on average against 10.2 days for 5-star orders.</li>
<li>Every increase in review score corresponded to a shorter delivery time without exception.</li>
</ul>

<div class="img-center">
  <img class="sm" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/orders_taking_over_31_days_graph.png" alt="Line chart showing bad review rate rising from 14.1% to 75.7% across delivery day buckets">
</div>

<hr class="finding-end">

<p><strong>The problem is the wait itself, not a late delivery.</strong></p>

<ul>
<li>Olist pads its delivery estimates heavily with 93.2% of orders arriving on or before the estimated date.</li>
<li>Even 1-star orders arrive 3.4 days <strong>early</strong> on average.</li>
<li>The longer a customer needs to wait, the greater the chance of a negative review.</li>
</ul>

<div class="img-center">
  <img class="xs" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/padded_delivery_estimates_graph.png" alt="Bar chart showing average days each review score arrived before the estimated delivery date">
</div>

<hr class="finding-end">

<p><strong>Typical orders show a minimal difference in shipping costs between 1-star and 5-star orders</strong></p>

<ul>
<li>A difference of only R$2 separates 1-star orders with a median of R$18.79 to R$16.79 for a 5-star order.</li>
<li>Averages diverge much further at R$28.15 for 1-star and R$21.71 for 5-star orders. The 1-star average is being increased by expensive outliers.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/1_star_orders_typically_pay_graph.png" alt="Dumbbell chart comparing median and average shipping cost for each review score">
</div>

<hr class="finding-end">

<p><strong>Shipping costs are not a reliable indicator of bad reviews once orders are grouped by delivery time.</strong></p>

<ul>
<li>Splitting each delivery time bucket into cheaper and pricier shipping halves, the bad review rate climbs from 12.7% to 80.5% among cheap-shipping orders and from 17.0% to 73.9% among expensive ones.</li>
<li>Within any single delivery time bucket the shipping gap is small.</li>
<li>Orders with cheaper shipping overtake the orders with more expensive shipping as the delivery time increases.</li>
</ul>

<div class="img-center">
  <img class="sm" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/delivery_time_drives_bad_reviews_graph.png" alt="Two-line chart showing bad review rate by delivery bucket for orders above and below the median shipping cost">
</div>

<hr class="finding-end">

<p><strong>Orders split across multiple sellers have a bad review rate over 3x worse than single sellers, independent of delivery time.</strong></p>

<ul>
<li>A single order can come from multiple sellers. The same order rating is attributed to all sellers in an order.</li>
<li>Split orders are 1.3% of all orders, 1,261 in total, and the three buckets shown cover 1,219 of them.</li>
<li>Among orders delivered within a week, 58.5% of split orders received a bad review against 13.2% of single-seller orders.</li>
<li>This difference holds at 60.8% against 16.7% for 8-14 days, and 68.9% against 22.3% for 15-21 days.</li>
<li>Orders taking longer than 21 days have been excluded as they contain only 42 split orders between them, not enough to draw meaningful conclusions.</li>
<li>Olist records a single delivery date per order, so it cannot be ruled out that some customers reviewed after receiving only part of a split order.</li>
</ul>

<div class="img-center">
  <img class="med" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/orders_from_multiple_sellers_graph.png" alt="Two-line chart comparing bad review rates for single-seller and multi-seller orders across delivery buckets">
</div>

<hr class="finding-end">

<p><strong>Bad reviews are a platform-wide logistics problem, not a bad seller problem.</strong></p>

<ul>
<li>Sellers with a bad review rate above 35% account for only 13.9% of all bad reviews.</li>
<li>The remaining 86.1% come from sellers below that threshold and include a large group sitting well above the 21.1% platform average.</li>
<li>Removing every high-risk seller would leave the majority of the problem unresolved.</li>
</ul>

<div class="img-center">
  <img class="xs" src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/only_14_percent_of_bad_reviews_graph.png" alt="Stacked bar showing the share of all bad reviews contributed by each seller risk segment">
</div>

<hr class="finding-end">

<p><strong>Home and furniture categories carry the highest risk.</strong></p>

<ul>
<li>With over 1.7 times the platform average, <code>office_furniture</code> has a 36.6% bad review rate across 1,244 orders.</li>
<li><code>bed_bath_table</code> is the single largest source of bad reviews with 2,398 across 9,175 orders, despite a more moderate 26.1% bad review rate.</li>
<li>Six of the top 15 categories by rate are home or furniture goods. There may be an issue when it comes to bulky, hard-to-ship products.</li>
</ul>

<div class="img-center">
  <img src="https://raw.githubusercontent.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis/main/images/of_the_1244_office_furniture_orders_readme_graph.png" alt="Bar chart ranking the top 15 product categories by bad review rate">
</div>

<hr>

<h2>Conclusion</h2>

<p>Delivery time is the dominant force behind customer dissatisfaction on Olist. Below 21 days the bad review rate rises gradually from 14.1% to 22.6%. Beyond that the rate nearly doubles, reaching 75.7% for orders taking over a month. Neither shipping cost nor individual seller quality explains this increase. Shipping cost stops predicting bad reviews once orders are compared with the same delivery time. The worst-performing sellers account for only 13.9% of all bad reviews. Reducing bad reviews becomes more of a logistics problem.</p>

<h3>Recommendations</h3>

<p><strong>Treat 21 days as an operational threshold.</strong> Orders crossing it are nearly twice as likely to draw a bad review, and orders passing 30 days get bad reviews 3/4 of the time. Flagging orders as they approach 21 days in transit would identify the population where intervention is worth the cost.</p>

<p><strong>Do not expect shipping subsidies to improve satisfaction.</strong> A typical 1-star order paid only R$2 more to ship than a typical 5-star order. The shipping difference stops predicting bad reviews once delivery times are held equal.</p>

<p><strong>Review how orders spanning multiple sellers are fulfilled and communicated.</strong> With bad reviews occurring over three times the rate at every delivery speed, multi-seller orders are the only factor besides delivery time that held up under scrutiny. The 1.3% of volume for these types of orders will not move the platform-wide number, but it warrants looking into further.</p>

<p><strong>Prioritize logistics improvements around bulky categories rather than at individual sellers.</strong> <code>office_furniture</code> carries the highest rate at 36.6%, while <code>bed_bath_table</code> produces the largest absolute volume of bad reviews at 2,398. These do need different strategies as one is a rate problem while the other is a scale problem.</p>

<h3>Limitations and Next Steps</h3>

<p>The dataset records a single delivery date per order, so it is not possible to test whether split orders receive bad reviews because customers review before receiving all items.</p>

<p>There is no carrier or warehouse data, so delivery time cannot be separated into seller handling time and carrier transit time. Without that split, the analysis identifies the problem but cannot locate it.</p>

<p>All findings are observational. The relationships hold consistently and survive comparison at equal delivery speed, but nothing here establishes causation.</p>

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

<p><strong>Reviews table:</strong> <code>review_id</code> is not a reliable unique identifier. The same <code>review_id</code> appears across multiple <code>order_id</code> values with identical comment text, indicating a bug in Olist's review assignment system. Some orders also have multiple reviews with different scores. A <code>reviews_deduped</code> view was created using <code>DISTINCT ON (order_id)</code> ordered by <code>review_score ASC, review_id</code>, keeping the most conservative score per order. The <code>review_id</code> was added as a tiebreaker due to the fact that 346 orders have two reviews tied on the lowest score. Without it, a third party running the SQL would not have an identical view. Keeping the lowest score rather than the highest or the average moves the platform bad review rate by only 0.11 points, from 21.11% to 21.00%, so the choice does not drive any finding. The view contains 98,673 rows with every <code>order_id</code> appearing exactly once.</p>

<p><strong>Orders table:</strong> 8 orders marked as delivered had no <code>order_delivered_customer_date</code> and were excluded. 13 orders had a calculated delivery time of 0 days, likely recording errors, and were also excluded. The final <code>orders_clean</code> view contains 96,457 rows.</p>

<p><strong>Products table:</strong> 610 products had empty string values ("") for <code>product_category_name</code>, which were converted to NULL before adding the foreign key constraint. Two categories, <code>pc_gamer</code> and <code>portateis_cozinha_e_preparadores_de_alimentos</code>, existed in the products table but were missing from <code>category_translation</code>. Both were inserted manually with English translations.</p>

<p><strong>Category translation table:</strong> Nine English category labels were incorrect or unclear. Seven were corrected: five misspellings (<code>fashio_female_clothing</code>, <code>home_confort</code>, <code>costruction_tools_garden</code>, <code>costruction_tools_tools</code>, <code>arts_and_craftmanship</code>) and two mistranslations &mdash; <code>seguros_e_servicos</code> rendered as <code>security_and_services</code> when seguros means insurance, and <code>cds_dvds_musicais</code> rendered as <code>cds_dvds_musicals</code>, the stage genre.<br>
Two translations were renamed for readability: <code>cine_photo</code> to <code>photography_and_video_equipment</code>, and <code>fixed_telephony</code> to <code>landline_telephony</code>. Only the English column was changed as the Portuguese column is the primary key and carries the foreign key from products.</p>

<h3>Key Metric Definitions</h3>

<ul>
<li><strong><code>delivery_days</code>:</strong> Total days from purchase timestamp to actual delivery. Median: 10 days. Average: 12.1 days. 90th percentile: 23 days.</li>
<li><strong><code>delivery_delay_days</code>:</strong> Days between actual delivery and estimated delivery. Positive means late, negative means early. Median: -11 days. Only 6.8% of orders arrived late, so Olist's estimates are consistently conservative.</li>
</ul>

<hr>

<h2>Repository Structure</h2>

<pre><code>sql/
    01_setup.sql                  -- Load reviews CSV, verify row counts, rename tables
    02_data_quality.sql           -- Data quality investigation, fixes, views, and constraints
    03_exploration.sql            -- Distribution checks and all analytical queries
images/                           -- Tableau Graphs and Entity Relationship Diagram
csv_exports/                      -- Exported csv files from DBeaver
Olist Project in Tableau.twbx     -- Packaged Tableau workbook
README.md
</code></pre>

<p>The Olist dataset CSVs are sourced from <a href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" target="_blank" rel="noopener">Kaggle</a>.</p>

<h2>How to Run</h2>

<p>The SQL scripts, packaged Tableau workbook, and CSV exports are all in the <a href="https://github.com/dave-honig/Olist_Brazilian_E-Commerce_SQL_Analysis" target="_blank" rel="noopener">project repository on GitHub</a>.</p>

<ol>
<li>Download the dataset from <a href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" target="_blank" rel="noopener">Kaggle</a> and load each CSV into a PostgreSQL database using DBeaver or psql.</li>
<li>Update the file path in the <code>COPY</code> command in <code>01_setup.sql</code> to match your local environment.</li>
<li>Run the scripts in order: <code>01_setup.sql</code> &rarr; <code>02_data_quality.sql</code> &rarr; <code>03_exploration.sql</code>.</li>
<li>Note: the data fixes and foreign key constraints in <code>02_data_quality.sql</code> must complete before <code>03_exploration.sql</code> runs, or the views and analysis queries that depend on clean data will not produce correct results.</li>
</ol>

</div>`,className:"w-html-embed"}),e.jsx("hr",{className:"w-element c1w2kby2 c1xo2ua8 c1u4qrj5 c1qiyaxo cdp8qbu cuilavn c72v0tn c6qujbi c3czewo"})]})]})})}),e.jsx(p,{children:e.jsx(g,{children:e.jsxs("div",{className:"w-element c19e299d",children:[e.jsx("p",{className:"w-element c7tji72 c1stfoor cf1e8cd csd6brl c1atcgj0 caf51ll c195fktj c1qgnt61 c8haaz7",children:"© 2026 David Honig. All rights reserved."}),e.jsx("hr",{className:"w-element c1w2kby2 c3w2odz ccktdsi c23gqnr cyly4zz c5vp848 c11l18sm"})]})})})]}),L=t=>{const{origin:a,pathname:n,search:c}=new URL(t);return`${a}${n}${c}`},$=x.memo(({pageKey:t,system:a})=>e.jsx(R,{system:a},t),(t,a)=>t.pageKey===a.pageKey),I=({data:t})=>{const{system:a,resources:n,url:c,pageMeta:f}=t,_=L(c),k=x.useMemo(()=>({imageLoader:u,assetBaseUrl:o,resources:n,breakpoints:E,onError:console.error}),[n]);return e.jsxs(T.Provider,{value:k,children:[e.jsx(S.Provider,{value:c,children:e.jsx($,{pageKey:_,system:a})}),e.jsx(O,{url:c,pageMeta:f,siteName:j,imageLoader:u,assetBaseUrl:o}),e.jsx(P,{children:f.title})]})},H=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),Q=({})=>{const t={"@context":"https://schema.org","@type":"WebSite",name:j};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}}),e.jsx("link",{rel:"icon",href:u({src:`${o}${A}`})}),D.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),B.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},M=Object.freeze(Object.defineProperty({__proto__:null,Head:Q},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/olist-brazilian-e-commerce/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/olist-brazilian-e-commerce/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}}};export{F as configValuesSerialized};
