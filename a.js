javascript:(()=>{

  const old=document.getElementById("__annoyingVirus");
  if(old) old.remove();

  const style=document.createElement("style");
  style.id="__annoyingVirus";

  style.textContent=`
    @keyframes shake{
      0%,100%{transform:translate(0,0)}
      25%{transform:translate(-8px,5px)}
      50%{transform:translate(8px,-5px)}
      75%{transform:translate(-5px,-8px)}
    }

    @keyframes flash{
      0%,100%{opacity:1}
      50%{opacity:.2}
    }

    #__av{
      position:fixed;
      inset:0;
      z-index:2147483647;
      background:#050505;
      color:#00ff00;
      font:18px monospace;
      overflow:hidden;
      animation:shake .15s infinite;
    }

    #__av .box{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:min(700px,90vw);
      background:#111;
      border:4px solid red;
      box-shadow:0 0 50px red;
      padding:30px;
      text-align:center;
    }

    #__av h1{
      color:red;
      font-size:42px;
      animation:flash .5s infinite;
    }

    #__av .bar{
      height:25px;
      border:2px solid #00ff00;
      margin:25px 0;
    }

    #__av .fill{
      height:100%;
      width:0;
      background:#00ff00;
    }

    #__av button{
      background:red;
      color:white;
      border:0;
      padding:15px 30px;
      font:bold 18px monospace;
      cursor:pointer;
    }

    #__av .msg{
      position:absolute;
      color:red;
      font-weight:bold;
      pointer-events:none;
    }
  `;

  document.head.appendChild(style);

  const overlay=document.createElement("div");
  overlay.id="__av";

  overlay.innerHTML=`
    <div class="box">
      <h1>⚠ SYSTEM INFECTED ⚠</h1>
      <div id="status">Scanning Chrome...</div>

      <div class="bar">
        <div class="fill" id="fill"></div>
      </div>

      <div id="percent">0%</div>

      <br>

      <button id="exit">EXIT PRANK</button>
    </div>
  `;

  document.documentElement.appendChild(overlay);

  const fill=overlay.querySelector("#fill");
  const percent=overlay.querySelector("#percent");
  const status=overlay.querySelector("#status");

  let progress=0;

  const scan=setInterval(()=>{
    progress+=Math.floor(Math.random()*8)+1;

    if(progress>100)
      progress=100;

    fill.style.width=progress+"%";
    percent.textContent=progress+"%";

    if(progress<100){
      status.textContent=[
        "Scanning Chrome...",
        "Checking browser extensions...",
        "Scanning cookies...",
        "Checking system files...",
        "Analyzing browser cache..."
      ][Math.floor(Math.random()*5)];
    }else{
      status.textContent="⚠ 47 THREATS FOUND — JUST KIDDING 😈";
      clearInterval(scan);
    }
  },300);

  const messages=[
    "VIRUS DETECTED!",
    "CHROME.EXE SUSPECTED",
    "SYSTEM ERROR!",
    "LOL",
    "SCAN FAILED",
    "💀",
    "TOTALLY REAL ALERT",
    "RUN AWAY!"
  ];

  const spam=setInterval(()=>{
    const msg=document.createElement("div");

    msg.className="msg";
    msg.textContent=messages[
      Math.floor(Math.random()*messages.length)
    ];

    msg.style.left=Math.random()*90+"vw";
    msg.style.top=Math.random()*90+"vh";
    msg.style.fontSize=(15+Math.random()*30)+"px";

    overlay.appendChild(msg);

    setTimeout(()=>msg.remove(),1500);
  },250);

  overlay.querySelector("#exit").onclick=()=>{
    clearInterval(scan);
    clearInterval(spam);
    overlay.remove();
    style.remove();
    document.title="Chrome";
  };

})();
