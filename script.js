const lb=document.getElementById('lb'),big=lb.querySelector('img'),cap=lb.querySelector('p');
document.querySelectorAll('.shot').forEach(b=>b.addEventListener('click',()=>{const i=b.querySelector('img');big.src=i.src;big.alt=i.alt;cap.textContent=b.dataset.cap;lb.showModal();}));
lb.addEventListener('click',e=>{if(e.target===lb||e.target.id==='x')lb.close();});
