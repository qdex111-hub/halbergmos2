const toggle=document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");
if(toggle&&menu){
  toggle.addEventListener("click",()=>{
    const open=menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded",open);
  });
  menu.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>menu.classList.remove("open"));
  });
}
document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal-close');
  const galleryLinks = document.querySelectorAll('.gallery-link');

  // Открытие модального окна при клике на ссылку с картинкой
  galleryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем переход по ссылке в новую вкладку
      const imageSrc = link.getAttribute('href'); // Берем путь к картинке
      modalImg.setAttribute('src', imageSrc); // Подставляем в модалку
      modal.classList.add('active'); // Показываем модалку
    });
  });

  // Закрытие при клике на крестик
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Закрытие при клике на любую область фона вокруг картинки
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
