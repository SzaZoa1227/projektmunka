function hatter() {
    let x = document.getElementsByClassName("js");
    let hatterszin = x.style.backgroundColor;
    let border = x.style.border;
    let arnyek = x.stlye.boxShadow;
    let betuszin = x.style.color;
    if (x.style.backgroundColor = "rgba(255, 255, 255, 1)") {
      border = "none";
      hatterszin = "rgba(255, 255, 255, 0)";
      betuszin = "rgba(0,0,0, 0)";
      arnyek = "none";
    }
    else {
      border = "1px solid #ccc";
      hatterszin = "rgba(255, 255, 255, 1)";
      betuszin = "#000";
      arnyek = "0 0 5px #ccc";
    };
  }