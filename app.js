const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const forceRadio = document.getElementById('forceRadio');
const massRadio = document.getElementById('massRadio');
const initialVelocityRadio = document.getElementById('initialVelocityRadio');
const finalVelocityRadio = document.getElementById('finalVelocityRadio');
const timeRadio = document.getElementById('timeRadio');

let averageForce;
let mass = v1;
let initialVelocity = v2;
let finalVelocity = v3;
let time = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

forceRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass (m)';
  variable2.textContent = 'Initial Velocity (vi)';
  variable3.textContent = 'Final Velocity (vf)';
  variable4.textContent = 'Time (t)';
  mass = v1;
  initialVelocity = v2;
  finalVelocity = v3; 
  time = v4; 
});

massRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Force (F)';
  variable2.textContent = 'Initial Velocity (vi)';
  variable3.textContent = 'Final Velocity (vf)'
  variable4.textContent = 'Time (s)';
  averageForce = v1;
  initialVelocity = v2;
  finalVelocity = v3; 
  time = v4; 
});

initialVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Force (F)';
  variable2.textContent = 'Mass (m)';
  variable3.textContent = 'Final Velocity (vf)'
  variable4.textContent = 'Time (s)';
  averageForce = v1;
  mass = v2;
  finalVelocity = v3; 
  time = v4; 
});

finalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Force (F)';
  variable2.textContent = 'Mass (m)';
  variable3.textContent = 'Initial Velocity (vi)';
  variable4.textContent = 'Time (s)';
  averageForce = v1;
  mass = v2;
  initialVelocity = v3; 
  time = v4; 
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Force (F)';
  variable2.textContent = 'Mass (m)';
  variable3.textContent = 'Initial Velocity (vi)';
  variable4.textContent = 'Final Velocity (vf)';
  averageForce = v1;
  mass = v2;
  initialVelocity = v3; 
  finalVelocity = v4;  
});

btn.addEventListener('click', function() {
  
  if(forceRadio.checked)
    result.textContent = `Average Force = ${computeAverageForce().toFixed(2)} (N)`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} (kg)`;

  else if(initialVelocityRadio.checked)
    result.textContent = `Initial Velocity = ${computeInitialVelocity().toFixed(2)} (m/s)`;

  else if(finalVelocityRadio.checked)
    result.textContent = `Final Velocity = ${computeFinalVelocity().toFixed(2)} (m/s)`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)} (s)`;
})

// calculation

function computeAverageForce() {
  return (Number(mass.value) * (Number(finalVelocity.value) - Number(initialVelocity.value))) / Number(time.value);
}

function computeMass() {
  return (Number(averageForce.value) * Number(time.value)) / (Number(finalVelocity.value) - Number(initialVelocity.value));
}

function computeInitialVelocity() {
  return Number(finalVelocity.value) - ((Number(averageForce.value) * Number(time.value)) / Number(mass.value));
}

function computeFinalVelocity() {
  return Number(initialVelocity.value) + ((Number(averageForce.value) * Number(time.value)) / Number(mass.value));;
}

function computeTime() {
  return (Number(mass.value) * (Number(finalVelocity.value) - Number(initialVelocity.value))) / Number(averageForce.value);
}