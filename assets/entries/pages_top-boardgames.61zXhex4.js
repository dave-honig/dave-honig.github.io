import{j as e,U as l,C as w,P as f,A as r,I as c,g as i,n,k as y,$ as T,a as z,b as d,x as q,f as h,r as x,c as m,i as v,R as G,d as N,e as C,h as P,l as A}from"../chunks/chunk-BucFQiUV.js";import{l as p,m as g}from"../chunks/chunk-CtNSHFJ2.js";import{y as b}from"../chunks/chunk-BHR92ctC.js";/* empty css                      */const j=void 0,D=[{id:"9HkMcNLur2WwRwNhCRype"},{id:"Ebp305NH3DKjMN4TXUcCK",maxWidth:991},{id:"lD13bXNGRDf_HcpqXWz9e",maxWidth:767},{id:"pkZz20ag9BV_9rs_sHWFD",maxWidth:479}],I=void 0,E=[],M=["tie-man-with-graphs_HUR1IYfn2479qvX3tP_x5.jpg","Blue-circuit-board_ByKiV6P_YeaDUzF6tDgqt.jpg"],R=a=>e.jsxs("body",{className:"w-element cvjc6ee",children:[e.jsx(p,{children:e.jsxs(g,{children:[e.jsx(l,{code:`<style>
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
</style>`,className:"w-html-embed"}),e.jsx(l,{code:`<style>
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
</style>`,className:"w-html-embed"}),e.jsx(p,{children:e.jsx(g,{children:e.jsxs("div",{className:"w-element c1stfoor c9d67at cq6xksj caf51ll ci0foj8 cqsq758 cpxb35h",children:[e.jsxs(w,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsxs(f,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:[e.jsx(r,{"data-ws-index":"0",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(c,{children:e.jsx(i,{href:"/",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c78qy79 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Home"})})}),e.jsx(r,{"data-ws-index":"1",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(c,{children:e.jsx(i,{href:"/resume",prefetch:"intent",target:"_self",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 c1jrz99e cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"Resume"})})}),e.jsx(r,{"data-ws-index":"2",className:"w-menu-item c1ko8czq c5ppvlg cpm0lg6 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1kvaofg cd33od4 cea72fu c1sj2h9w ceb8amn",children:e.jsx(c,{children:e.jsx(i,{href:"https://www.linkedin.com/in/david-honig-data-analyst/",prefetch:"intent",target:"_blank",className:"w-link ckl4n79 c14347k7 c5nmr54 c4suyvp c1lvmf7o c11cwv4d c3awse4 c1taev54 ckqr6du cgwd9be caf51ll ci0foj8 cp92q8o c15j13aa c1vefx24 c1xsfmoz c1jn979a c1r8n8ab cjdbm83 cl15lsz c1064a8f cw3ffdu cwvo6a2 c10h61eg c1dp5w5p cotce98 c8mwul5 c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de",children:"LinkedIn"})})})]}),e.jsx(n,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(y,{className:"w-menu-viewport c1p2lsjl cy043uq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]}),e.jsxs(w,{className:"w-navigation-menu c1p2lsjl cqsq758 c1f6luul cwfzcsy cgwd9be",children:[e.jsx(f,{className:"w-menu-list c1stfoor c15q8ot7 ceflzm7 cszdi5y c16po2uv caf51ll ci0foj8 c6w0hvg c5lcyh2 csyu49h c1y688nd",children:e.jsxs(r,{"data-ws-index":"0",className:"w-menu-item cpm0lg6 cp92q8o c15j13aa c1xsfmoz c1vefx24 c1153flh c1suu0w7 c139ru9q c1qiyaxo c52y1de",children:[e.jsx(T,{children:e.jsxs(z,{className:"w-button cgwd9be caf51ll ci0foj8 cpm0lg6 cl3pqvm c1wk4jml c11utyqh cas7m1i coj0a1 c1uxi20o cjdbm83 cl15lsz c1064a8f c16eo2vq cw3ffdu c1bmw7rn c1izypqa ckl4n79 c14347k7 c1dp5w5p c153mtd1 ct8jtzk cept2gg c1ynjtka cl5q8pu cjt3mdw c52y1de cbhcit0 c1p4xtuy cxfn7f3 crf2t9l cxvedzk",children:[e.jsx(d,{className:"w-text c10h61eg c1jn979a c1r8n8ab c52y1de",children:"Portfolio Projects"}),e.jsx(n,{className:"w-box cbz6z8p c1izi37g c78ggpa cdtqtup c19q9ke1 c1lvmf7o ce9akbv c13yi6lt c13t58p2 ckqr6du",children:e.jsx(l,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed c10h61eg c52y1de"})})]})}),e.jsx(q,{className:"w-menu-content cubuxty cvw5eq4 c1ueflz4 c1jt3vt cad7ojn ca4sjv9",children:e.jsx(n,{className:"w-box c1stfoor cgs1el c1ruscum",children:e.jsxs(n,{className:"w-box c1uq8c3 c1stfoor cgs1el c1ruscum cppnd8j",children:[e.jsx(c,{children:e.jsxs(i,{href:"/olist-brazilian-e-commerce",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(d,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Olist Brazilian E-Commerce"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL and Tableau"})]})}),e.jsx(c,{children:e.jsxs(i,{href:"/top-boardgames",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(d,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element cdo52u0",children:"Top Boardgames"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    Excel and Tableau"})]})}),e.jsx(c,{children:e.jsxs(i,{href:"/subscription-analysis",target:"_self",prefetch:"intent",className:"w-link cgyyojg c1stfoor cppnd8j cikbkk3 c6w0hvg c5lcyh2 cl3pqvm c1wk4jml c11utyqh cas7m1i c1uzsxj4 cwvo6a2 cdo52u0 c1153flh c1suu0w7 c139ru9q c1qiyaxo c1h5w5xs c1y688nd cjt3mdw c52y1de c1grji70 c8ub14x",children:[e.jsx(d,{className:"w-text coj0a1 cjdbm83 c1uzsxj4",children:e.jsx("b",{className:"w-element",children:"Subscription Analytics"})}),e.jsx(h,{className:"w-paragraph c78x5nz c1d8slzl c8kwwo5 caki0nz cslypp3 coj0a1 c1ifzx2n cfxaufm csyu49h",children:"    PostgreSQL"})]})})]})})})]})}),e.jsx(n,{className:"w-box c1ueflz4 c9932tr cg4ewww c1stfoor ci0foj8 cron0w",children:e.jsx(y,{className:"w-menu-viewport c1p2lsjl c6znlaq c78x5nz c1d8slzl cl3pqvm c1wk4jml c11utyqh cas7m1i cd9uaxl ckm6ird c1cuid c70cfvg c1xc38vt clz52nh"})})]})]})})})]})}),e.jsx("div",{className:"w-element cg6bu85 c1lk0wil c10fqany cwfzcsy c1nhoi5v c1064a8f c3j8bkl c1stfoor cppnd8j c1n9d65h c1javpap cn3asuf c7c2j48 c41ins8 clwz64r c1hc885s c19o35pv c1phhyqa c10gm70x c8mm804 c11kthwq cizezuy",children:e.jsx("div",{className:"w-element c1omugdh c1atcgj0 c1064a8f c195fktj c1lwc61q cf1e8cd c1stfoor cppnd8j",children:e.jsxs("div",{className:"w-element c1p2lsjl c16a0g72 c1064a8f c110z30b cw3ffdu c1stfoor caf51ll ci0foj8 cpxb35h c186bcwd cppnd8j",children:[e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w csqgcnf c1mrb40c c1tuvooy c1lwc61q c1w0cyj0 cmgebpz cvjoznb c7rvf29 c6mvtlh cmohnhh c6nqxbd c1p2lsjl c1stfoor cppnd8j ci0foj8 caf51ll c1n9d65h c1cnvkm1 c8gm6xl c1iu2q7r c1k29tio czay79i c14hepux",children:[e.jsx("h2",{className:"w-element c3w2odz c6mvtlh c6derb6 c5c3l8m c1tdaz5o c7kh6n c1qnt9aw czggkkn c55s982 c1y18jz0 c15gnz76 cz4dj7v c12vovhr c1lvpb9 cdjazf2",children:"BoardGameGeek.com Excel and Tableau Project"}),e.jsx("hr",{className:"w-element cjs91nq c1edq957 cij2pp8 c1stfoor cjg8yyn cdnd97 cnsk4wd c1dmimb4 c6a6gzw cfd1ath chijvlv c16u6242 c1153flh c1suu0w7 c139ru9q c1qiyaxo czay79i"}),e.jsxs("div",{className:"w-element c1stfoor cpxb35h c186bcwd c1064a8f cw3ffdu ci0foj8 caf51ll cq6xksj c1p2lsjl c87rqvl c1javpap c1wlbyuv c7f4h23",children:[e.jsx(b,{src:"/assets/microsoft-excel-icon-256_hTQ0veo3GFrnn2_ZF9PpZ.png",width:256,height:256,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(b,{src:"/assets/icons8-tableau-software-240_GqT3qQ8WPmMrvqIH5OpeE.png",width:240,height:240,alt:"",className:"w-image c186bcwd c14tlsc3 cewjr2h"}),e.jsx(i,{href:"https://github.com/dave-honig/Boardgames_Excel_Project",target:"_blank",className:"w-element cewjr2h c1wzku9a cm7el75 c1y4pece c1j7aqqb c9xio0n cl91tsg c5we2rp cjgl1or c9g8ntk cdvjofb cw07uha c15gnz76 c1fysvu8 c1lgkzhg cai44d c1o56ms4 c1sba756 cwvo6a2 c10318dh cnhk6tx c9a0b8i",children:"View on GitHub"})]})]}),e.jsxs("div",{className:"w-element c1cg5aj c9wnz6g cvk9mtt cjxw3v5 c9mh3iz c5jj4ut cha3t1a c1ihw8ea c1q6yxt0 cileptn c11lbbnn c15azey8 c1so10is c1pdozm0 cvqhmvf c102v951 c1vz3mjo cqulnpy c5n9m4 c14ngkb8 c1swfxp7 c10g0nv2 c8k0r0r c15nn3ya ch4gd9a c11neelt ck5asnj c1ilkbbq c1r956lb caz4u8y c1fw5bq9 c3e601s c1kvaofg cd33od4 cea72fu c1sj2h9w cf1e8cd chbywm1 c195fktj c1lwc61q c1w0cyj0 cmgebpz c1atcgj0 c7rvf29 c6mvtlh cmohnhh cabs4an c1p2lsjl czay79i c14hepux",children:[e.jsx(l,{executeScriptOnCanvas:!0,code:`<style>
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
  .readme ol ol {
    list-style-type: lower-roman;
    margin-top: 0.4em;
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
  .readme .img-block .img-link {
    display: block;
    margin-top: 0.6em;
  }
  @media (max-width: 700px) {
    .readme .img-block img,
    .readme .img-block.wide img {
      width: 100%;
    }
  }
</style>

<div class="readme">

  <h2>Tableau Dashboard</h2>

  <div class="img-block wide">
    <a href="https://public.tableau.com/shared/G2Z5PH787?:display_count=n&amp;:origin=viz_share_link" target="_blank" rel="noopener">
      <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/boardgamegeek_tableau_dashboard_v2.png" alt="Tableau dashboard displaying boardgame metrics">
    </a>
    <a class="img-link" href="https://public.tableau.com/shared/G2Z5PH787?:display_count=n&amp;:origin=viz_share_link" target="_blank" rel="noopener">View the Tableau dashboard</a>
  </div>

  <hr>

  <h2>Introduction</h2>

  <p>My name is David Honig and I'm a Data Analyst. I'm also a fan of boardgames with some favorites including Ascension, San Juan, and Century Golem Edition. This project demonstrates a variety of Excel skills needed as an analyst.</p>

  <h2>Background</h2>

  <p><a href="https://www.fortunebusinessinsights.com/board-games-market-104972" target="_blank" rel="noopener">According to an article by Fortune Business Insights</a>, "The global board games market size was valued at USD 14.37 billion in 2024. The market is projected to grow from USD 15.83 billion in 2025 to USD 32.00 billion by 2032.</p>

  <p>North America dominated the board games market with a market share of 41.68% in 2024.</p>

  <h2>Scenario</h2>

  <p>I'm a data analyst working for a fictional boardgame developer called <em>Checkmate LLC</em>. Ms. Queen, the company president, is looking to make the next best selling game. Checkmate has a team of developers but doesn't know what they should concentrate on.</p>

  <p>Mr. Rook of the marketing team has previously found the highest rated games sell the most and bring in the most revenue.</p>

  <p>My manager, Mr. Bishop, has assigned me the task of looking for commonalities in the top boardgames which could help point the development team in the right direction.</p>

  <h3>Excel Skills Used</h3>

  <p>The following Excel skills were utilized for analysis:</p>

  <ul>
    <li><strong>📊 Pivot Tables</strong></li>
    <li><strong>📈 Pivot Charts</strong></li>
    <li><strong>🧮 DAX (Data Analysis Expressions)</strong></li>
    <li><strong>🔍 Power Query</strong></li>
    <li><strong>💪 Power Pivot</strong></li>
  </ul>

  <h2>Data collection</h2>

  <p>BoardGameGeek.com is a well-known website in the board game community. It provides many details for each game, allows users to rate games, and keeps track of games in each user's collection.</p>

  <p><a href="https://www.kaggle.com/datasets/melissamonfared/board-games" target="_blank" rel="noopener">A dataset from February 2021</a> was located from <a href="https://www.kaggle.com" target="_blank" rel="noopener">kaggle.com</a>.</p>

  <ul>
    <li>The Comma Separated Values (.csv) file was partially cleaned by excluding unranked games and including games with a minimum of 30 user ratings.</li>
  </ul>

  <h2>Dataset Review</h2>

  <ol>
    <li>20,345 rows were imported into an Excel Table named "All_Games".</li>
    <li>Unique ID will be used as a primary key.</li>
    <li>The formula <code>=COUNTBLANK(All_Games[ID])</code> found 15 missing IDs.</li>
  </ol>

  <h3>Updating missing IDs</h3>

  <ol>
    <li>Missing IDs could be found by quickly searching boardgamegeek.com, but an approach was taken if there were many more missing values.</li>
    <li><a href="https://www.kaggle.com/datasets/bwandowando/boardgamegeek-board-games-reviews-jan-2025" target="_blank" rel="noopener">A BoardGameGeek list from February 2025</a> was loaded with "Only create Connection" and named <em>Feb2025 Boardgames</em>. This dataset was not originally used as it is missing many game details.</li>
    <li>The two queries were merged, a "Conditional Column" was added, and after removing duplicates the column ID was finalized.</li>
  </ol>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/conditional_column.png" alt="Conditional Column Entry">
  </div>

  <h2>When did we get so popular?</h2>

  <ol>
    <li>The table All_Games was added to the Data Model and a count of all games was calculated: <code>Game_Count:=DISTINCTCOUNT(All_games[ID])</code></li>
    <li>Median of the Game Rating was calculated: <code>All_Games_Median:=MEDIAN(All_games[Game Rating])</code></li>
    <li>Looking at the pivotchart <strong>"How Many Boardgames Have Been Created Over Time?"</strong>, over the past 20 years the number of boardgames have greatly increased.</li>
  </ol>

  <div class="img-block wide">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/boardgames_over_time.png" alt="Boardgames over time">
  </div>

  <p>The histogram <strong>"How Are All the Boardgames Rated"</strong> uses the "Game Rating" column creating a nice bell curve. Using the formula <code>All_Games_Median:=MEDIAN(All_games[Game Rating])</code>, the median value is 6.43 out of 10.</p>

  <div class="img-block wide">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/how_are_all_games_rated.png" alt="How Are All the Games Rated">
  </div>

  <h2>Do you have a game recommendation?</h2>

  <ul>
    <li>The 90th and 95th percentile were calculated: <code>90th_Percentile:=PERCENTILE.INC(All_games[Game Rating],0.90)</code> (changing the final element for 95th percentile)</li>
    <li>Two more measures were created to count the number of games in these percentiles.</li>
  </ul>

  <pre><code>Count_of_90th_Percentile:=VAR PercentileValue = [90th_Percentile]
    RETURN
    COUNTROWS(
     FILTER(
     All_games,
     All_games[Game Rating] &gt;= PercentileValue))</code></pre>

  <ul>
    <li>The 90th percentile was chosen with 2,075 games with a Game Rating of 7.56 or higher compared to the 95th percentile with 1,038 games and a Game Rating of 7.88 or higher.</li>
    <li>A new query named "Top_Games" was referenced and games were filtered on the Game Ratings column to those greater than or equal to 7.56.</li>
    <li>Column statistics were checked to make sure there were 2,075 rows and the query was added to the data model.</li>
  </ul>

  <h1>Let's be explicit</h1>

  <p>Explicit measures were added including:</p>

  <ol>
    <li>The count of games: <code>Count_TopGames:=DISTINCTCOUNT(TopGames[ID])</code></li>
    <li>Percent of the top games:
      <pre><code>Percent_of_games:=DIVIDE(
  COUNT(TopGames[ID]),
  CALCULATE(COUNT(TopGames[ID]), ALL(TopGames)))</code></pre>
    </li>
    <li>Game Rating: <code>Game_Rating_TopGames:=AVERAGE(TopGames[Game Rating])</code></li>
    <li>Complexity: <code>Complexity_TopGames:=AVERAGE(TopGames[Complexity])</code></li>
  </ol>

  <h2>How many can play?</h2>

  <p>The sheet "# of Players" compares the minimum and maximum number of players to the Game Rating.</p>

  <ol>
    <li>A handful of games listed their minimum or maximum players counts as 0. As this is unlikely, they were updated to null.</li>
    <li>The most common minimum number of players for the top games is 2 at 1,190 games and 1 at 741 games.</li>
  </ol>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/min_players.png" alt="Minimum Number of Players">
  </div>

  <ol start="3">
    <li>The most common maximum number of players for the top games is 4 at 666 games and 2 at 631 games.</li>
  </ol>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/max_players.png" alt="Maximum Number of Players">
  </div>

  <ol start="4">
    <li>Based on the chart, people prefer when fewer players are needed to start the game.</li>
  </ol>

  <h3>Going on a side quest</h3>

  <p>Top_Games was referenced to create "Top_Games_Minimum_Players" with a filter applied to Min Players for any values &gt;=5.</p>

  <ul>
    <li>In the Top Games, only 13 require more than 4 players</li>
    <li>Changing the filter again, only 39 games require more than 3 players.</li>
  </ul>

  <h2>One more round?</h2>

  <p>"Play Time" includes a chart with the top 20 play times.</p>

  <ul>
    <li>The most common playtimes are in increments of 30 minutes. To address less common intervals, the "Time Buckets" column sorts the games into 30 minute increments with formula:
      <code>Number.ToText(Number.RoundDown([Play Time] / 30) * 30) &amp; " - " &amp; Number.ToText(Number.RoundDown([Play Time] / 30) * 30 + 29)</code>
    </li>
    <li>2 to 2.5 hours, 30 minutes to 1 hour, and 1 hour to 1.5 hours are the most popular followed by 1.5 hours to 2 hours following close behind.</li>
    <li>Between 1 and 2 hours is the ideal play time. It's long enough to have engaging gameplay and strategy, yet short enough to prevent the game from becoming tedious.</li>
  </ul>

  <div class="img-block wide">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/play_time.png" alt="Minimum Play Time">
  </div>

  <h2>More complicated than Trouble</h2>

  <p>The "Minimum Age" sheet includes the chart "What is the Minimum Player Age of the Top Games?"</p>

  <ul>
    <li>236 games have a minimum age of 0, with the next lowest age of 4 years. Based on previous columns these 0 values should have been null and were updated in Power Query.</li>
    <li>Designing and themeing for a specific age is unlikely, so age buckets of 3 years were created with the formula:
      <code>Number.ToText(Number.RoundDown([Min Age] / 3) * 3) &amp; " - " &amp; Number.ToText(Number.RoundDown([Min Age] / 3) * 3 + 2)</code>
    </li>
    <li>Over 60% of the top games recommend players be at least 12 to 14 years old.</li>
    <li>At this age they would be mature enough to understand the rules and come up with a strategy.</li>
  </ul>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/min_age.png" alt="Minimum Recommended Player Age">
  </div>

  <h2>Do you have any Jacks?</h2>

  <p>While there are over 20,000 boardgames with a myriad of designs and themes, there are similar ways the games are played. Boardgame mechanics are the specific rules and systems that define how a game is played, influencing player actions, outcomes, and the overall flow of the game. They dictate everything from turn order to how players achieve victory. Each game typically has multiple mechanics.</p>

  <p>The "Top_Games" query was referenced creating a new query named "Top_Games_Mechanics".</p>

  <ol>
    <li>Cleaning up the data, 27 games have no mechanic listed. Blank cells were replaced with "None Listed."</li>
    <li>Each mechanic was split into 17 new columns which were then unpivoted.</li>
    <li>Data was saved to a PivotTable Report and the query was added to the data model.</li>
    <li>Explicit measures were created to:
      <ol>
        <li>Count the number of mechanics
          <code>Count_Top_Game_Mechanics:=COUNT(Top_Games_Mechanics[Top_Game_Mechanics])</code>
        </li>
        <li>Count the number of distinct mechanics
          <code>Distinct_Top_Game_Mechanics:=DISTINCTCOUNT(Top_Games_Mechanics[Top_Game_Mechanics])</code>
        </li>
        <li>Calculate the percentage of the mechanic to all mechanics:
          <pre><code>Percent_of_Mechanic_to_all_mechanics:=DIVIDE(
  COUNT([Top_Game_Mechanics]),
  CALCULATE(COUNT(Top_Games_Mechanics[Top_Game_Mechanics]), ALL(Top_Games_Mechanics)))</code></pre>
        </li>
        <li>Calculate the percentage of the top games with the mechanic.
          <pre><code>Percent_of_mechanic_to_all_games:=DIVIDE(
  COUNT([Top_Game_Mechanics]),
  CALCULATE(COUNT(TopGames[ID]), ALL(TopGames)))</code></pre>
        </li>
      </ol>
    </li>
    <li>The sheet "Game Mechanics" was created with a Pivot Table from the Data Model.</li>
  </ol>

  <ul>
    <li>Board game players seem to like the excitement and uncertainty of rolling their math rocks (dice) with 1,029 of the top games using the "Dice Rolling" mechanic.</li>
    <li>This is followed by Variable Player Powers, Simulation, Hand Management, and a Hexagon Grid used in ~500 of the top games.</li>
  </ul>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/top_game_mechanics.png" alt="Top Boardgame Game Mechanics">
  </div>

  <h2>Wait, what am I supposed to do next?</h2>

  <p>For each game, Boardgamegeek assigns a complexity rating between 1 and 5 defined as a "Community rating for how difficult a game is to understand. Lower rating (lighter weight) means easier."</p>

  <ol>
    <li>A new column "Complexity Rounded" was created: <code>Number.RoundDown([Difficulty] / 0.5) * 0.5</code></li>
    <li>"Complexity_Buckets" creates clear value buckets: <code>Text.From([Complexity_Rounded]) &amp; " - " &amp; Text.From([Complexity_Rounded]+ 0.5)</code></li>
    <li>The chart "How Difficult Are the Top Games to Understand?" with a slicer shows the top games mainly lie between 2 and 3.5.</li>
  </ol>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/top_game_complexity.png" alt="Complexity Graph of Top Games">
  </div>

  <h2>How competitive can you be?</h2>

  <p>A game's genre can help determine how serious your players want to be. Wargames and strategy games will likely be more competitive than family or party games. A single game can also have multiple genres.</p>

  <ol>
    <li>Each genre was split into new columns which were then unpivoted.</li>
    <li>Data was saved to a PivotTable Report and the query was added to the data model.</li>
    <li>Explicit measures were created to:
      <ol>
        <li>Count the number of genres
          <code>Count_Top_Game_Genres:=COUNT(Top_Games_Genres[Game_Genre])</code>
        </li>
        <li>Count the number of distinct genres
          <code>Distinct_Top_Game_Genres:=DISTINCTCOUNT(Top_Games_Genres[Game_Genre])</code>
        </li>
        <li>Calculate the percentage of the genre to all genres:
          <pre><code>Percent_of_genre_to_all_genres:=DIVIDE(
  COUNT([Game_Genre]),
  CALCULATE(COUNT(Top_Games_Genres[Game_Genre]), ALL(Top_Games_Genres)))</code></pre>
        </li>
        <li>Calculate the percentage of the top games with the genre.
          <pre><code>Percent_of_genre_to_all_games:=DIVIDE(
  COUNT([Game_Genre]),
  CALCULATE(COUNT(TopGames[ID]), ALL(TopGames)))</code></pre>
        </li>
      </ol>
    </li>
    <li>The sheet "Genre" was created with a Pivot Table from the Data Model.</li>
  </ol>

  <ul>
    <li>~70% games included at least one genre.</li>
    <li>1/3 of the top games were wargames followed by strategy games at ~20% and thematic games at 10%.</li>
  </ul>

  <div class="img-block">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/top_game_genres.png" alt="Top Boardgame Game Genres">
  </div>

  <h1>What should the Checkmate LLC developers focus on?</h1>

  <p>Reviewing each metric they should create a game with:</p>

  <ol>
    <li>A minimum of 2 players to play;</li>
    <li>Best played between 2 to 4 players;</li>
    <li>Takes 30 minutes - 2.5 hours to complete;</li>
    <li>Understood by those as young as 12 years;</li>
    <li>Involves dice rolling;</li>
    <li>Have a wargame genre; and</li>
    <li>Has a complexity between 2 and 3.5 out of 5.</li>
  </ol>

  <h2>Current offerings</h2>

  <p>There are 107 boardgames with these parameters. Narrowing it down to only those with a rating above 8.5 brings it down to 14:</p>

  <ul>
    <li>Adventures in Neverland</li>
    <li>Chain of Command</li>
    <li>Code 3</li>
    <li>Company of Heroes</li>
    <li>Counter Attack</li>
    <li>Dice Masters</li>
    <li>DreadBall (Second Edition)</li>
    <li>Kings of War (Third Edition)</li>
    <li>Limbo: Eternal War</li>
    <li>Middle-Earth Strategy Battle Game: Rules Manual</li>
    <li>Moonstone</li>
    <li>Oak &amp; Iron: Core Box</li>
    <li>Techno Bowl: Arcade Football Unplugged</li>
    <li>World At War 85: Storming the Gap</li>
  </ul>

  <h1>What do you want to play?</h1>

  <p>If you're interested in what to play, use the "Top Games Filter" tab to select your criteria and view matching game titles. A link is also provided to games profile on BoardGameGeek.com</p>

  <h2>Fixing missing links</h2>

  <p>Many of the games did not have hyperlinks in the original CSV. This was resolved in Power Query by creating the column "BGG_Hyperlink_Formula" which combines the website root with the game ID to create a complete link.</p>

  <pre><code>= Table.AddColumn(#"Sorted Rows2", "BGG_Hyperlink_Formula", each "https://boardgamegeek.com/boardgame/" &amp; Text.From([ID]))</code></pre>

  <p>The link was added next to the pivot table to lookup the game name and provide the correct link using the formula:</p>

  <pre><code>=IF($A2="","",IFERROR(HYPERLINK(XLOOKUP($A2,TopGames[Name],TopGames[BGG_Hyperlink_Formula]),"BGG Link"),""))</code></pre>

  <div class="img-block wide">
    <img src="https://raw.githubusercontent.com/dave-honig/Boardgames_Excel_Project/main/images/game_filter.png" alt="Excel Boardgame Filter Dashboard">
  </div>

</div>`,className:"w-html-embed"}),e.jsx("hr",{className:"w-element c1w2kby2 c1xo2ua8 c1u4qrj5 c1qiyaxo cdp8qbu cuilavn c72v0tn c6qujbi c3czewo"})]})]})})}),e.jsx(p,{children:e.jsx(g,{children:e.jsxs("div",{className:"w-element c19e299d",children:[e.jsx("p",{className:"w-element c7tji72 c1stfoor cf1e8cd csd6brl c1atcgj0 caf51ll c195fktj c1qgnt61 c8haaz7",children:"© 2026 David Honig. All rights reserved."}),e.jsx("hr",{className:"w-element c1w2kby2 c3w2odz ccktdsi c23gqnr cyly4zz c5vp848 c11l18sm"})]})})})]}),B=a=>{const{origin:t,pathname:s,search:o}=new URL(a);return`${t}${s}${o}`},U=x.memo(({pageKey:a,system:t})=>e.jsx(R,{system:t},a),(a,t)=>a.pageKey===t.pageKey),O=({data:a})=>{const{system:t,resources:s,url:o,pageMeta:u}=a,k=B(o),_=x.useMemo(()=>({imageLoader:v,assetBaseUrl:m,resources:s,breakpoints:D,onError:console.error}),[s]);return e.jsxs(G.Provider,{value:_,children:[e.jsx(N.Provider,{value:o,children:e.jsx(U,{pageKey:k,system:t})}),e.jsx(C,{url:o,pageMeta:u,siteName:j,imageLoader:v,assetBaseUrl:m}),e.jsx(P,{children:u.title})]})},S=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),L=({})=>e.jsxs(e.Fragment,{children:[j,I,E.map(a=>e.jsx("link",{rel:"preload",href:`${m}${a}`,as:"font",crossOrigin:"anonymous"},a)),M.map(a=>e.jsx("link",{rel:"preload",href:`${m}${a}`,as:"image"},a))]}),H=Object.freeze(Object.defineProperty({__proto__:null,Head:L},Symbol.toStringTag,{value:"Module"})),K={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/top-boardgames/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/top-boardgames/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}}};export{K as configValuesSerialized};
