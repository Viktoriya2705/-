// Объявляем все переменные в одном месте в начале файла
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("nav");
const tabBtns = document.querySelectorAll(".tab-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
const exhibitionCards = document.querySelectorAll(".exhibition-card");

// Мобильное меню
mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileMenuBtn.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Табы выставок
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Здесь должна быть логика переключения между табами
  });
});

// Фильтрация выставок
document.addEventListener("DOMContentLoaded", function () {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Удаляем активный класс у всех кнопок
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Добавляем активный класс текущей кнопке
      this.classList.add("active");

      const filterValue = this.dataset.filter;

      // Фильтруем карточки
      exhibitionCards.forEach((card) => {
        const cardType = card.dataset.type;

        if (filterValue === "all" || cardType.includes(filterValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Табы
if (".tab-btn.active") {
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const cards = document.querySelectorAll(".artist-card");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");

        // Удалить активный класс у всех табов
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Скрыть все карточки
        cards.forEach((card) => card.classList.remove("show"));

        // Показать только те, что соответствуют выбранному табу
        const visibleCards = document.querySelectorAll(
          `.artist-card[data-tab="${target}"]`
        );
        visibleCards.forEach((card) => card.classList.add("show"));
      });
    });

    // По умолчанию открыть первый таб
    document.querySelector(".tab-btn.active").click();
  });
}

/////////////////
// Темная тема///
/////////////////
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".dark-mode-toggle");
  const toggleimg = document.querySelector(".dark-blog");

  // Проверяем сохраненную тему в localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
  toggleBtn.addEventListener("click", function () {
    toggleimg.classList.toggle("block");
  });
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
});
