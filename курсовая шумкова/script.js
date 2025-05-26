// Мобильное меню
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("nav");

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileMenuBtn.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Табы выставок
const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Здесь должна быть логика переключения между табами
  });
});

// Фильтрация выставок
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const exhibitionCards = document.querySelectorAll('.exhibition-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filterValue = this.dataset.filter;
            
            // Фильтруем карточки
            exhibitionCards.forEach(card => {
                const cardType = card.dataset.type;
                
                if (filterValue === 'all' || 
                    cardType.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// модальные окна выставок

document.addEventListener('DOMContentLoaded', function() {
  // Фильтрация (оставьте ваш существующий код)
  
  // Обработка модальных окон
  const modalBtns = document.querySelectorAll('.btn[href="exhibition-detail.html"]');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-modal');
  
  // Открытие модального окна
  modalBtns.forEach((btn, index) => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          const modalId = this.closest('.exhibition-card').getAttribute('data-type') + '-' + (index + 1);
          const modal = document.getElementById('modal-' + (index + 1));
          if (modal) {
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden'; // Запрет прокрутки фона
          }
      });
  });
  
  // Закрытие модального окна
  closeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          this.closest('.modal').style.display = 'none';
          document.body.style.overflow = 'auto'; // Возврат прокрутки
      });
  });
  
  // Закрытие при клике вне модального окна
  window.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal')) {
          e.target.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });
  
  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          modals.forEach(modal => {
              if (modal.style.display === 'block') {
                  modal.style.display = 'none';
                  document.body.style.overflow = 'auto';
              }
          });
      }
  });
});


 // Навигация между разделами ЛК
 document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.account-menu a');
  const sections = document.querySelectorAll('.account-section');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Удаляем активный класс у всех ссылок и секций
      menuLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      // Добавляем активный класс к текущей ссылке
      this.classList.add('active');
      
      // Находим соответствующую секцию и делаем её активной
      const sectionId = this.getAttribute('href').substring(1);
      document.getElementById(sectionId).classList.add('active');
    });
  });

  // Мобильное меню
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});
