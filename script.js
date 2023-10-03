var strike = document.getElementById('strike');
var runs = document.getElementsByClassName('ball');
var ind_score = document.getElementById('score-team1');
var pak_score = document.getElementById('score-team2');
var ind_wik = document.getElementById('wickets-team1');
var pak_wik = document.getElementById('wickets-team2');
var reset = document.getElementById("reset")
var ind_superover = document.getElementById('team1-superover');
var pak_superover = document.getElementById('team2-superover');

var indscore = 0;
var pakscore = 0;
var indwik = 0;
var pakwik = 0;
var innings = 1;
var indballs = 0;
var pakballs = 0;
const run = [1, 2, 3, 4, 5, 6, 'w'];
var random_run = 0;
strike.onclick = () => {
  random_run = run[Math.floor(Math.random() * 7)];
  if (innings == 1 && indballs <= 5 && indwik < 3) {
    if (random_run === 'w') indwik++;
    else indscore += random_run;
    indballs++;
    document.querySelector(
      `#team1-superover div:nth-child(${indballs})`
    ).textContent = random_run;

    if (indballs == 6 || indwik == 2) {
      innings = 2;
      ind_score.append(indscore);
      ind_wik.append(indwik);
    }
  }
  if (innings == 2 && pakballs <= 5 && pakwik < 2) {
    if (random_run === 'w') pakwik++;
    else pakscore += random_run;
    pakballs++;
    document.querySelector(
      `#team2-superover div:nth-child(${pakballs})`
    ).textContent = random_run;

    if (pakballs == 6 || pakscore > indscore || pakwik == 2) {
      pak_score.append(pakscore);
      pak_wik.append(pakwik);
      result();
    }
  }
};

function result() {
  if (pakscore < indscore)
    alert('India win by ' + (indscore - pakscore) + ' runs');
  else if (pakscore == indscore) alert('Another superover');
  else alert('Pakistan win by ' + (pakscore - indscore) + ' runs');
}

reset.onclick = () =>{
  window.location.reload();
}