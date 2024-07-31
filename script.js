function main() {
  xspeed = 1;

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    IodineGUI.Iodine.attachBIOS(new Uint8Array(this.response));
  }
  xhr.responseType = 'arraybuffer';
  xhr.open('GET', 'gba_bios.bin', true);
  xhr.send();


  document.body.addEventListener('keydown', keydownExtra, { once: true });
  function keydownExtra(e) {
    if (e.key == 'Enter') {
      document.getElementsByClassName('custom_play_btn')[0].click();
      document.querySelectorAll('.footerelement')[1].innerHTML = '';
      document.querySelectorAll('.footerelement')[0].innerHTML = '';
    }
  }

  document.body.addEventListener('keydown', keydownmain);

  document.getElementsByClassName('custom_play_btn')[0].addEventListener('click', function () {
    this.style.display = 'none';
    document.querySelectorAll('#info')[0].style.display = 'none';
    document.querySelectorAll('.footerelement')[1].innerHTML = '';
    document.querySelectorAll('.footerelement')[0].innerHTML = '';
  });
}

function help() {
  var e = document.createElement('div');
  e.className = 'flex';
  e.id = 'helpScreen';
  e.innerHTML = `<div class="header" style="position: fixed; top: 0px;left: 0px;">Help</div><div class="content" style = "background: white; color: black"><center>
<table width="100%" style="border: 0px solid #ccc;font-size: 13px" cellspadding="0" cellspacing="0">
<tr>
  <td>A</td>
  <td> = </td>
  <td>Enter</td>
</tr>
<tr>
  <td>B</i></td>
  <td> = </td>
  <td>9</td>
</tr>
<tr>
  <td>SELECT</i></i></td>
  <td> = </td>
  <td>7</td>
</tr>
<tr>
  <td> START</i></td>
  <td> = </td>
  <td>0</td>
</tr>
<tr>
  <td>UP</i></td>
  <td> = </td>
  <td>ArrowUp</td>
</tr>
<tr>
  <td>DOWN</i></td>
  <td> = </td>
  <td>ArrowDown</td>
</tr>
<tr>
  <td>LEFT</i></td>
  <td> = </td>
  <td>ArrowLeft</td>
</tr>
<tr>
  <td>RIGHT</i></td>
  <td> = </td>
  <td>ArrowRight</td>
</tr>
<tr>
  <td>L</i></td>
  <td> = </td>
  <td>1</td>
</tr>
<tr>
  <td>R</i></td>
  <td> = </td>
  <td>3</td>
</tr>
<tr>
  <td>Speed UP</i></td>
  <td> = </td>
  <td>6</td>
</tr>
<tr>
  <td>Speed Down</i></td>
  <td> = </td>
  <td>4</td>
</tr>
<tr>
  <td>Reset Speed</i></td>
  <td> = </td>
  <td>5</td>
</tr>
<tr>
  <td>Save/load</i></td>
  <td> = </td>
  <td>*/#</td>
</tr>
</table>
  <center> <div class="footer"><span class="footerelement"></span><span class="footerelement">OK</span><span class="footerelement">Back</span></div></div>`;

  document.body.appendChild(e);

  document.body.removeEventListener('keydown', keydownmain);
  document.body.addEventListener('keydown', keydownhelp);
}

function keydownhelp(e) {
  if (e.key == 'SoftRight' || e.key == 'F2' || e.key == 'Enter') {
    document.body.removeChild(document.querySelector('#helpScreen'));
    main();
    document.body.removeEventListener('keydown', keydownhelp);
  }
}


function keydownmain(e) {
  if (e.key == 'SoftRight' || e.key == 'F2') {
    if (window.confirm('Sure To Exit?')) { window.close(); }
  }
  if (e.key == 'SoftLeft' || e.key == 'F1') {
    document.querySelectorAll('.footerelement')[1].innerHTML = 'Play';
    document.getElementById('rom_load').click();
  }
  if (e.key == '*') {
    document.getElementById('export').click();
  }
  if (e.key == '#' || e.key == '/') {
    document.getElementById('import').click();
  }
  if (e.key == '1') {
    xspeed -= 0.1;
    IodineGUI.Iodine.setSpeed(xspeed);
  }
  if (e.key == '3') {
    xspeed += 0.1;
    IodineGUI.Iodine.setSpeed(xspeed);
  }
}

document.body.addEventListener('keyup', (() => { getKaiAd({ publisher: '080b82ab-b33a-4763-a498-50f464567e49', app: 'gba_emul', slot: 'gba_emul', onerror: e => { }, onready: e => { e.call('display') } }) }));
document.addEventListener('DOMContentLoaded', (() => { getKaiAd({ publisher: '080b82ab-b33a-4763-a498-50f464567e49', app: 'gba_emul', slot: 'gba_emul', onerror: e => { }, onready: e => { e.call('display') } }) }));

help(); 