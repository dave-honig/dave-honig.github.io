import{j as e,U as r,C as g,P as w,A as l,I as n,g as c,n as s,k as y,$ as z,a as _,b as d,x as q,f as h,r as j,c as m,i as v,R as N,d as E,e as S,h as R,l as O}from"../chunks/chunk-BucFQiUV.js";import{l as p,m as u}from"../chunks/chunk-CtNSHFJ2.js";import{y as T}from"../chunks/chunk-BHR92ctC.js";/* empty css                      */const x=void 0,A=[{id:"9HkMcNLur2WwRwNhCRype"},{id:"Ebp305NH3DKjMN4TXUcCK",maxWidth:991},{id:"lD13bXNGRDf_HcpqXWz9e",maxWidth:767},{id:"pkZz20ag9BV_9rs_sHWFD",maxWidth:479}],D=void 0,U=[],C=["tie-man-with-graphs_HUR1IYfn2479qvX3tP_x5.jpg","Blue-circuit-board_ByKiV6P_YeaDUzF6tDgqt.jpg"],P=a=>e.jsxs("body",{className:"w-element ck5uqek cvjc6ee",children:[e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(r,{code:`<style>
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
</style>`,className:"w-html-embed"}),e.jsx(r,{code:`<style>
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
</style>`,className:"w-html-embed"}),e.jsx(p,{children:e.jsx(u,{children:e.jsxs("div",{className:"w-element c1stfoor c9d67at cq6xksj caf51ll ci0foj8 cqsq758 cpxb35h",children:[e.jsxs(g,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsxs(w,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:[e.jsx(l,{"data-ws-index":"0",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(n,{children:e.jsx(c,{href:"/",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c78qy79 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Home"})})}),e.jsx(l,{"data-ws-index":"1",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(n,{children:e.jsx(c,{href:"/resume",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c1jrz99e cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Resume"})})}),e.jsx(l,{"data-ws-index":"2",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(n,{children:e.jsx(c,{href:"https://www.linkedin.com/in/david-honig-data-analyst/",prefetch:"intent",target:"_blank",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"LinkedIn"})})})]}),e.jsx(s,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(y,{className:"w-menu-viewport c1p2lsjl cy043uq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]}),e.jsxs(g,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsx(w,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:e.jsxs(l,{"data-ws-index":"0",className:"w-menu-item cpm0lg6 cp92q8o c15j13aa c1xsfmoz c1vefx24 c1153flh c1suu0w7 c139ru9q c1qiyaxo c52y1de",children:[e.jsx(z,{children:e.jsxs(_,{className:"w-button cgwd9be caf51ll ci0foj8 cpm0lg6 cl3pqvm c1wk4jml c11utyqh cas7m1i coj0a1 c1uxi20o cjdbm83 cl15lsz c1064a8f c16eo2vq cw3ffdu c1bmw7rn c1izypqa ckl4n79 c14347k7 c1dp5w5p c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de cbhcit0 c1p4xtuy cxfn7f3 crf2t9l cxvedzk",children:[e.jsx(d,{className:"w-text c10h61eg c1jn979a c1r8n8ab c52y1de",children:"Portfolio Projects"}),e.jsx(s,{className:"w-box cbz6z8p c1izi37g c78ggpa cdtqtup c19q9ke1 c1lvmf7o ce9akbv c13yi6lt c13t58p2 ckqr6du",children:e.jsx(r,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed c10h61eg c52y1de"})})]})}),e.jsx(q,{className:"w-menu-content cubuxty cvw5eq4 c1ueflz4 c1jt3vt cad7ojn ca4sjv9",children:e.jsx(s,{className:"w-box c1stfoor cgs1el c1ruscum",children:e.jsxs(s,{className:"w-box c1uq8c3 c1stfoor cgs1el c1ruscum cppnd8j",children:[e.jsx(n,{children:e.jsxs(c,{href:"/olist-brazilian-e-commerce",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(d,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Olist Brazilian E-Commerce"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL and Tableau"})]})}),e.jsx(n,{children:e.jsxs(c,{href:"https://ui.shadcn.com/docs/components/dialog",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(d,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element cdo52u0",children:"Top Boardgames"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    Excel and Tableau"})]})}),e.jsx(n,{children:e.jsxs(c,{href:"https://ui.shadcn.com/docs/components/collapsible",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(d,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Subscription Analytics"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL"})]})})]})})})]})}),e.jsx(s,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(y,{className:"w-menu-viewport c1p2lsjl c6znlaq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]})]})})})]})}),e.jsx("div",{className:"w-element cg6bu85 c1lk0wil c10fqany cwfzcsy c1nhoi5v c1064a8f c3j8bkl c1stfoor cppnd8j c1n9d65h c1javpap cn3asuf c7c2j48 c41ins8 clwz64r c1hc885s c19o35pv c1phhyqa c10gm70x c8mm804 c11kthwq cizezuy",children:e.jsx("div",{className:"w-element c1omugdh c1atcgj0 c1064a8f c195fktj c1lwc61q cf1e8cd c1stfoor cppnd8j",children:e.jsxs("div",{className:"w-element c1p2lsjl c16a0g72 c1064a8f c110z30b cw3ffdu c1stfoor caf51ll ci0foj8 cpxb35h c186bcwd cppnd8j",children:[e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w csqgcnf c1mrb40c c1tuvooy c1lwc61q c1w0cyj0 cmgebpz cvjoznb c7rvf29 c6mvtlh cmohnhh c6nqxbd c1p2lsjl c1stfoor cppnd8j ci0foj8 caf51ll c1n9d65h c1cnvkm1 c8gm6xl c1iu2q7r c1k29tio czay79i c14hepux",children:[e.jsx("h2",{className:"w-element c3w2odz c6mvtlh c6derb6 c5c3l8m c1tdaz5o c7kh6n c1qnt9aw czggkkn c55s982 c1y18jz0 c15gnz76 cz4dj7v c12vovhr c1lvpb9 cdjazf2",children:"Subscription Analytics"}),e.jsx("hr",{className:"w-element cjs91nq c1edq957 cij2pp8 c1stfoor cjg8yyn cdnd97 cnsk4wd c1dmimb4 c6a6gzw cfd1ath chijvlv c16u6242 c1153flh c1suu0w7 c139ru9q c1qiyaxo czay79i"}),e.jsxs("div",{className:"w-element c1stfoor cpxb35h c186bcwd c1064a8f cw3ffdu ci0foj8 caf51ll cq6xksj c1p2lsjl c87rqvl c1javpap c1wlbyuv c7f4h23",children:[e.jsx(T,{src:"/assets/postgresql-icon-256_TSrIdOB5A8ko154P5KMED.png",width:256,height:256,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(c,{href:"https://github.com/dave-honig/Subscription_Analytics",target:"_blank",className:"w-element cewjr2h c1wzku9a cm7el75 c1y4pece c1j7aqqb c9xio0n cl91tsg c5we2rp cjgl1or c9g8ntk cdvjofb cw07uha c15gnz76 c1fysvu8 c1lgkzhg cai44d c1o56ms4 c1sba756 cwvo6a2 c10318dh cnhk6tx c9a0b8i",children:"View on GitHub"})]})]}),e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w cf1e8cd chbywm1 c195fktj c1lwc61q c1w0cyj0 cmgebpz c1atcgj0 c7rvf29 c6mvtlh cmohnhh cabs4an c1p2lsjl czay79i c14hepux",children:[e.jsx(r,{executeScriptOnCanvas:!0,code:`<style>
  .readme {
    font-family: inherit;
    color: inherit;
    line-height: 1.65;
    max-width: 100%;
  }
  .readme h1 {
    font-size: 2em;
    font-weight: 700;
    margin: 1.4em 0 0.6em;
    line-height: 1.25;
    border-bottom: 1px solid rgba(128, 128, 128, 0.35);
    padding-bottom: 0.3em;
  }
  .readme h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 1.4em 0 0.6em;
    line-height: 1.3;
    border-bottom: 1px solid rgba(128, 128, 128, 0.25);
    padding-bottom: 0.25em;
  }
  .readme h3 {
    font-size: 1.2em;
    font-weight: 700;
    margin: 1.3em 0 0.5em;
  }
  .readme p {
    margin: 0 0 1em;
  }
  .readme a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .readme a:hover {
    opacity: 0.75;
  }
  .readme ul,
  .readme ol {
    margin: 0 0 1em;
    padding-left: 1.6em;
  }
  .readme li {
    margin-bottom: 0.4em;
  }
  .readme blockquote {
    margin: 1em 0;
    padding: 0.5em 1em;
    border-left: 4px solid rgba(128, 128, 128, 0.4);
    opacity: 0.9;
  }
  .readme code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.9em;
    background: rgba(128, 128, 128, 0.15);
    border-radius: 4px;
    padding: 0.15em 0.4em;
  }
  .readme pre {
    background: rgba(128, 128, 128, 0.12);
    border: 1px solid rgba(128, 128, 128, 0.25);
    border-radius: 6px;
    padding: 1em;
    overflow-x: auto;
    margin: 0 0 1.2em;
  }
  .readme pre code {
    background: none;
    padding: 0;
    font-size: 0.88em;
    white-space: pre;
  }
  .readme table {
    border-collapse: collapse;
    margin: 0 0 1.2em;
    width: 100%;
  }
  .readme th,
  .readme td {
    border: 1px solid rgba(128, 128, 128, 0.35);
    padding: 0.5em 0.75em;
    text-align: left;
  }
  .readme th {
    font-weight: 700;
    background: rgba(128, 128, 128, 0.1);
  }
  .readme hr {
    border: none;
    border-top: 1px solid rgba(128, 128, 128, 0.35);
    margin: 2em 0;
  }
  .readme .img-block {
    text-align: center;
    margin: 1.5em 0;
  }
  .readme .img-block img {
    width: 60%;
    max-width: 100%;
    height: auto;
    display: inline-block;
    border-radius: 6px;
  }
  .readme .img-block.wide img {
    width: 80%;
  }
  @media (max-width: 700px) {
    .readme .img-block img,
    .readme .img-block.wide img {
      width: 100%;
    }
  }
</style>

<div class="readme">

  <h2>Overview</h2>

  <p>In this scenario I will take the role as a data analysis for a company similar to DGI. We are a non-profit subscription based website who provide access to metadata about healthcare databases from around the world.</p>

  <p>There are 3 monthly plans offered:</p>

  <ul>
    <li>Basic for $99,</li>
    <li>Pro for $299, and</li>
    <li>Enterprise for $799</li>
  </ul>

  <p>As a non-profit we always need to be aware of money coming in and keeping our customers happy. This SQL portfolio project analyzes customer subscriptions, revenue trends, customer retention, and payment behavior for the business.</p>

  <p>All code was built in PostgreSQL.</p>

  <h2>Business Questions Answered</h2>

  <ul>
    <li>Which subscription plans generate the most recurring revenue?</li>
    <li>What is the churn rate by plan?</li>
    <li>Which customers have failed payments and open support issues?</li>
    <li>How does monthly revenue trend over time?</li>
    <li>What is the lifetime value of each customer?</li>
  </ul>

  <h2>Skills Demonstrated</h2>

  <ul>
    <li>Table design and relationships (PRIMARY KEY, FOREIGN KEY)</li>
    <li>JOINs (INNER, LEFT)</li>
    <li>Aggregations (COUNT, SUM, GROUP BY)</li>
    <li>Filtering (WHERE, FILTER)</li>
    <li>Common Table Expressions (CTEs)</li>
    <li>Window functions (running totals with SUM OVER)</li>
    <li>Date functions (DATE_TRUNC)</li>
  </ul>

  <h2>Schema</h2>

  <ul>
    <li><code>customers</code> - company name, industry, country, signup date</li>
    <li><code>subscriptions</code> - plan, price, start and end dates</li>
    <li><code>payments</code> - payment date, amount, success or failure</li>
    <li><code>support_tickets</code> - category, open or resolved</li>
  </ul>

  <p><strong>A simple Entity-Relationship Diagram (ERD) helps us visualize the relationships.</strong></p>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Subscription_Analytics/main/Entity_Relationship_Diagram.png" alt="Entity-Relationship Diagram (ERD)">
  </div>

  <h2>Files</h2>

  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>schema.sql</code></td>
        <td>Table creation</td>
      </tr>
      <tr>
        <td><code>insert_data.sql</code></td>
        <td>Sample data</td>
      </tr>
      <tr>
        <td><code>queries.sql</code></td>
        <td>Queries</td>
      </tr>
      <tr>
        <td><code>README.md</code></td>
        <td>Project Description</td>
      </tr>
    </tbody>
  </table>

  <hr>

  <h2>Key Findings</h2>

  <h3><strong>Enterprise plan drives the most revenue</strong> despite having the fewest subscribers, generating $1,598/month from just 2 customers.</h3>

  <ul>
    <li>We should follow up with these clients individually to make sure they are not having any difficulty using our service.</li>
    <li>Offer a free training session as they may have new employees unfamiliar with our service.</li>
    <li>Get some insights on how our service is being used so we have an idea where we should improve.</li>
  </ul>

  <h3><strong>Basic plan has the highest churn rate at 67%.</strong></h3>

  <ul>
    <li>This is our lowest priced option.</li>
    <li>We may need to evaluate what is offered at each plan tier and possibly offer an option currently in the Pro level to the Basic tier.</li>
    <li>We should also double check what our competitors are offering for the same price.</li>
    <li>Are we following up with these clients (ideally via a phone call) to find out why they ended their subscription?</li>
  </ul>

  <h3><strong>Two customers show both failed payments and unresolved support tickets.</strong></h3>

  <ul>
    <li>We should flag them as a high risk of cancellation.</li>
    <li>Before reaching out we should review the details of their open ticket to see if we can be proactive in solving it.</li>
    <li>The same applies to the failed payment. Did they try to submit a payment but something happened in billing?</li>
  </ul>

  <h3><strong>Monthly revenue trended upward</strong> through mid-2022 as new subscribers joined, with the running total reaching $4,588 by August 2022.</h3>

  <ul>
    <li>We should look into what happened after April 2022. Did something change in our service? Did our competition change?</li>
  </ul>

  <h3><strong>Acme Corp (Pro Subscription) is the highest lifetime value customer</strong> at $897 across three Pro payments.</h3>

  <ul>
    <li>Acme Corp should be treated as a priority retention account given their consistent payment history.</li>
    <li>Pro plan customers with multiple payments may also be good candidates to try and upsell to a Enterprise tier. Maybe offer a discount for their first month so they can try out the added capabilities.</li>
  </ul>

  <hr>

  <h2>Queries</h2>

  <h3>How many active subscribers do we have per plan, and what is the monthly recurring revenue each plan generates?</h3>

  <pre><code>SELECT
    plan_name,
    COUNT(*) AS active_subscribers,
    SUM(monthly_price) AS monthly_recurring_revenue
FROM subscriptions
WHERE end_date IS NULL
GROUP BY plan_name
ORDER BY monthly_recurring_revenue DESC;</code></pre>

  <hr>

  <h3>How many customers have ended their subscriptions, and how long did they stay before canceling?</h3>

  <pre><code>SELECT
    c.company_name,
    c.industry,
    s.plan_name,
    s.start_date,
    s.end_date,
    (s.end_date - s.start_date) AS days_as_customer
FROM customers c
JOIN subscriptions s ON c.customer_id = s.customer_id
WHERE s.end_date IS NOT NULL
ORDER BY days_as_customer ASC;</code></pre>

  <hr>

  <h3>What is the churn rate for each subscription plan?</h3>

  <p>Churn rate = (lost customers / total customers) * 100</p>

  <pre><code>WITH plan_totals AS (
    SELECT
        plan_name,
        COUNT(*) AS total_subscribers,
        COUNT(*) FILTER (WHERE end_date IS NOT NULL) AS lost_customers
    FROM subscriptions
    GROUP BY plan_name
)
SELECT
    plan_name,
    total_subscribers,
    lost_customers,
    ROUND(lost_customers::numeric / total_subscribers * 100.0, 2) AS churn_rate_pct
FROM plan_totals
ORDER BY churn_rate_pct DESC;</code></pre>

  <hr>

  <h3>What is total revenue collected per month, and how does it trend over time?</h3>

  <p>I do find this formula interesting as it uses a window function on a aggregated field.</p>

  <pre><code>SELECT
    DATE_TRUNC('month', payment_date) AS month,
    COUNT(*) AS total_payments,
    SUM(amount) AS total_revenue,
    SUM(SUM(amount)) OVER (ORDER BY DATE_TRUNC('month', payment_date))  AS running_total_revenue
FROM payments
WHERE status = 'paid'
GROUP BY DATE_TRUNC('month', payment_date)
ORDER BY month;</code></pre>

  <p>Another approach is to use a CTE to obtain the <em>month, total_payments, and total_revenue</em>. Then use a SUM window function on <em>total_revenue over the month</em> as seen below.</p>

  <pre><code>WITH monthly_totals AS (
    SELECT
        DATE_TRUNC('month', payment_date) AS month,
        SUM(amount) AS total_revenue,
        COUNT(*) AS total_payments
    FROM payments
    WHERE status = 'paid'
    GROUP BY DATE_TRUNC('month', payment_date)
)
SELECT
    month,
    total_payments,
    total_revenue,
    SUM(total_revenue) OVER (ORDER BY month) AS running_total_revenue
FROM monthly_totals
ORDER BY month;</code></pre>

  <hr>

  <h3>Which customers have failed payments, and do they also have unresolved support tickets?</h3>

  <pre><code>SELECT
    c.company_name,
    c.industry,
    COUNT(p.payment_id) AS failed_payments,
    COUNT(t.ticket_id) AS open_tickets
FROM customers c
JOIN subscriptions s ON c.customer_id = s.customer_id
JOIN payments p ON s.subscription_id = p.subscription_id
LEFT JOIN support_tickets t
    ON c.customer_id = t.customer_id
    AND t.resolved = false
WHERE p.status = 'failed'
GROUP BY c.company_name, c.industry
ORDER BY failed_payments DESC;</code></pre>

  <hr>

  <h3>What is the total revenue collected from each customer for the duration of their subscription?</h3>

  <pre><code>SELECT
    c.company_name,
    c.industry,
    s.plan_name,
    s.start_date,
    s.end_date,
    SUM(p.amount) AS lifetime_revenue
FROM customers c
JOIN subscriptions s ON c.customer_id = s.customer_id
JOIN payments p ON s.subscription_id = p.subscription_id
WHERE p.status = 'paid'
GROUP BY
    c.company_name, c.industry,
    s.plan_name, s.start_date, s.end_date
ORDER BY lifetime_revenue DESC;</code></pre>

  <hr>

  <p><strong>Thank you for you time reviewing this project.</strong></p>

</div>`,className:"w-html-embed"}),e.jsx("hr",{className:"w-element c1w2kby2 c1xo2ua8 c1u4qrj5 c1qiyaxo cdp8qbu cuilavn c72v0tn c6qujbi c3czewo"})]})]})})}),e.jsx(p,{children:e.jsx(u,{children:e.jsxs("div",{className:"w-element c19e299d",children:[e.jsx("p",{className:"w-element c7tji72 c1stfoor cf1e8cd csd6brl c1atcgj0 caf51ll c195fktj c1qgnt61 c8haaz7",children:"© 2026 David Honig. All rights reserved."}),e.jsx("hr",{className:"w-element c1w2kby2 c3w2odz ccktdsi c23gqnr cyly4zz c5vp848 c11l18sm"})]})})})]}),I=a=>{const{origin:t,pathname:o,search:i}=new URL(a);return`${t}${o}${i}`},M=j.memo(({pageKey:a,system:t})=>e.jsx(P,{system:t},a),(a,t)=>a.pageKey===t.pageKey),B=({data:a})=>{const{system:t,resources:o,url:i,pageMeta:f}=a,b=I(i),k=j.useMemo(()=>({imageLoader:v,assetBaseUrl:m,resources:o,breakpoints:A,onError:console.error}),[o]);return e.jsxs(N.Provider,{value:k,children:[e.jsx(E.Provider,{value:i,children:e.jsx(M,{pageKey:b,system:t})}),e.jsx(S,{url:i,pageMeta:f,siteName:x,imageLoader:v,assetBaseUrl:m}),e.jsx(R,{children:f.title})]})},W=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),L=({})=>e.jsxs(e.Fragment,{children:[x,D,U.map(a=>e.jsx("link",{rel:"preload",href:`${m}${a}`,as:"font",crossOrigin:"anonymous"},a)),C.map(a=>e.jsx("link",{rel:"preload",href:`${m}${a}`,as:"image"},a))]}),H=Object.freeze(Object.defineProperty({__proto__:null,Head:L},Symbol.toStringTag,{value:"Module"})),K={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:O}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/subscription-analysis/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:W}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/subscription-analysis/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}}};export{K as configValuesSerialized};
