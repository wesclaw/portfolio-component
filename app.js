// const letters = document.querySelectorAll('.letters');

// letters.forEach(letter => {
//   letter.addEventListener('mouseover', e => {
//     const touch = e.target.classList;
//     if (touch.contains('w')) {
//       letter.classList.add('big');
//     } else if (touch.contains('e')) {
//       letter.classList.add('big');
//     } else if (touch.contains('s')) {
//       letter.classList.add('big');
//     } else if (touch.contains('l')) {
//       letter.classList.add('big');
//     } else if (touch.contains('y')) {
//       letter.classList.add('big');
//     }
//   });
// });

// letters.forEach(letter => {
//   letter.addEventListener('mouseout', e => {
//     const touch = e.currentTarget.classList;
//     if (touch.contains('w')) {
//       letter.classList.remove('big');
//     } else if (touch.contains('e')) {
//       letter.classList.remove('big');
//     } else if (touch.contains('s')) {
//       letter.classList.remove('big');
//     } else if (touch.contains('l')) {
//       letter.classList.remove('big');
//     } else if (touch.contains('y')) {
//       letter.classList.remove('big');
//     }
//   });
// });

const form = document.querySelector('form');
const input = document.getElementById('input');
const body = document.querySelector('body');

const date = new Date();
const h = date.getHours();

form.addEventListener('submit', e => {
  e.preventDefault();
  const userName = input.value;
  const container_el = document.createElement('div');
  const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  container_el.classList.add('container');

  
  const p_el = document.createElement('p');
  p_el.classList.add('p_el');
  container_el.append(p_el);
 
  body.append(container_el);
  for (let i = 0; i < userName.length; i++) {
    const span_el = document.createElement('span');
    span_el.classList.add('span_el');
    container_el.append(span_el);
    if (h >= 0 && h < 12) {
      p_el.textContent = 'Good morning, ' 
      span_el.textContent = capitalizedUserName[i];    
    } else if (h >= 12 && h < 17) {
      p_el.textContent = 'Good afternoon, ' 
      span_el.textContent = capitalizedUserName[i]; 
    } else {
      p_el.textContent = 'Good evening, ' 
      span_el.textContent = capitalizedUserName[i]; 
    }
    span_el.addEventListener('mouseover', e => { 
      span_el.classList.add('big');
    });
    span_el.addEventListener('mouseout', e => {
      span_el.classList.remove('big');
    });
  }
  form.style.display = 'none';
});
