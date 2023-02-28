function hatter() {
    let igen = 1;
    let x = document.getElementsByClassName("js");
    let hatterszin = x.style.background-color;
    let border = x.style.border;
    let arnyek = x.stlye.box-shadow;
    let betuszin = x.style.color;
    if (igen = 1) {
      border = "none";
      hatterszin = "rgba(255, 255, 255, 0)";
      betuszin = "rgba(0,0,0, 0)";
      arnyek = "none";
      int = 0;
    }
    else {
      border = "1px solid #ccc";
      hatterszin = "rgba(255, 255, 255, 1)";
      betuszin = "#000";
      arnyek = "0 0 5px #ccc";
      int = 1;
    };
  }