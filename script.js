document.getElementById('learn-more-btn').addEventListener('click', function() {
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
});
function toggleMenu() {
  const menu= document.querySelector('.menu');
  const menu= document.querySelector('.menu-toggle');
  menu.classList.toggle('open');
  toggle.classList.toggle('open');
}
