// Optional small JS — keeps things light
console.log('Mohit Singh portfolio loaded');

// Simple smooth scrolling for internal links (if later added)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
