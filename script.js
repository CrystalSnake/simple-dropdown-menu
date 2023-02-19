const dropdowns = document.querySelectorAll('.drop-down');

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector('.select');
  const arrow = dropdown.querySelector('.arrow');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.active');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    arrow.classList.toggle('arrow-up');
    menu.classList.toggle('menu-open');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      arrow.classList.remove('arrow-up');
      menu.classList.remove('menu-open');
      options.forEach((option) => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
