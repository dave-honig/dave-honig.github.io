import{j as a,U as u,r,a as i,i as o,R as h,b as m,P as g,c as y,d as v}from"../chunks/chunk-CpAoOEO5.js";/* empty css                      */const d=void 0,b=[{id:"9HkMcNLur2WwRwNhCRype"},{id:"Ebp305NH3DKjMN4TXUcCK",maxWidth:991},{id:"lD13bXNGRDf_HcpqXWz9e",maxWidth:767},{id:"pkZz20ag9BV_9rs_sHWFD",maxWidth:479}],f=void 0,x=[],S=[],j=e=>a.jsx("body",{className:"w-element",children:a.jsx(u,{code:` nav ul {
    list-style: none;
    padding: 0 .5em;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Center items vertically */
    width: 70%;
    font-weight: bold;
}
    <div class="master_background">
      <header>
          <nav>
              <ul class="albert-sans">
                  <li><a href="index.html">Home</a></li>
                  <li><a class="active" href="about.html">About</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="contact.html">Contact</a></li>

              </ul>
          </nav>
      </header>

      <div class="main_background" style="background-image: url('./images/Blue-circuit-board.jpg');">

        <div class="main_content">        

            <section id="about">
              <div class="left_photo">
                <img src="./images/Sample_idea.jpg" alt="Dave waving">
              </div>

              <div class="about_text">

                <div class="translucent">

                  <h1 class="albert-sans">
                    I like his photo, I wonder what he has been up to? <span style="font-family: 'Times New Roman', Times, serif; color: #26459a; font-style: italic;">Professionally speaking that is</span>
                  </h1>

                  <h2 class="albert-sans">
                    Below please find my employment history and skills
                  </h2>

                </div> <!--end translucent-->
              </div> <!--end about_text-->
            </section> <!-- end contact section -->
          
            <section id="employment_history">
              <div class="translucent">
                <h1 class="albert-sans">Employment History</h1>
                <h2 class="albert-sans">Data Analyst</h2>
                <h3 class="albert-sans">The College Board, Reston, VA</h3>
                <p class="albert-sans">2020 - Present</p>
                <p class="albert-sans">Utilized SQL and Python to analyze large datasets, providing actionable insights that improved operational efficiency by 15%.</p>

                <h2 class="albert-sans">Business Intelligence Analyst</h2>
                <h3 class="albert-sans">ABC Corporation, Arlington, VA</h3>
                <p class="albert-sans">2018 - 2020</p>
                <p class="albert-sans">Developed interactive dashboards using Tableau, enabling stakeholders to visualize key performance indicators and make data-driven decisions.</p>

                <h2 class="albert-sans">Data Analyst Intern</h2>
                <h3 class="albert-sans">XYZ Inc., Washington, DC</h3>
                <p class="albert-sans">2017 - 2018</p>
                <p class="albert-sans">Assisted in data cleaning and preprocessing tasks, ensuring data integrity for subsequent analysis.</p>
              </div>
            </section> <!-- end employment_history section -->
            
          </div> <!--end main content-->
        </div> <!--end main background-->
          <footer>
            <p>© 2025 David Honig. All rights reserved. Website coded by me in Visual Studio Code</p>
          </footer>
    </div> <!--end master background-->
  
`,executeScriptOnCanvas:!0,className:"w-html-embed"})}),P=e=>{const{origin:s,pathname:n,search:t}=new URL(e);return`${s}${n}${t}`},_=r.memo(({pageKey:e,system:s})=>a.jsx(j,{system:s},e),(e,s)=>e.pageKey===s.pageKey),k=({data:e})=>{const{system:s,resources:n,url:t,pageMeta:l}=e,c=P(t),p=r.useMemo(()=>({imageLoader:o,assetBaseUrl:i,resources:n,breakpoints:b,onError:console.error}),[n]);return a.jsxs(h.Provider,{value:p,children:[a.jsx(m.Provider,{value:t,children:a.jsx(_,{pageKey:c,system:s})}),a.jsx(g,{url:t,pageMeta:l,siteName:d,imageLoader:o,assetBaseUrl:i}),a.jsx(y,{children:l.title})]})},T=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),w=({})=>a.jsxs(a.Fragment,{children:[d,f,x.map(e=>a.jsx("link",{rel:"preload",href:`${i}${e}`,as:"font",crossOrigin:"anonymous"},e)),S.map(e=>a.jsx("link",{rel:"preload",href:`${i}${e}`,as:"image"},e))]}),A=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{D as configValuesSerialized};
