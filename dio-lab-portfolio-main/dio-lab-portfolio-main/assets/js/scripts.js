const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Função para mudança de tema
function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

// Accordion functionality
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

// Menu navigation
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})

// Animação de entrada dos elementos
document.addEventListener('DOMContentLoaded', function() {
  // Adiciona animação fade-in aos elementos quando entram na tela
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  // Elementos a serem observados
  const elementsToAnimate = document.querySelectorAll('.projects__card, .technologies__item, .about__content1, .about__content2');
  elementsToAnimate.forEach(el => observer.observe(el));
});

// Efeito de typing no subtítulo
function typeWriter(element, text, delay = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

// Aplicar efeito de typing quando a página carregar
window.addEventListener('load', function() {
  const subtitle = document.querySelector('.main__content1 p');
  if (subtitle) {
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 50);
  }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contador animado para estatísticas (pode ser usado futuramente)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  updateCounter();
}

// Preloader (se necessário)
function hidePreloader() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
}

// Detectar scroll e adicionar classe ao header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

console.log('🚀 Portfólio do Rubiale Alves de Melo Filho carregado com sucesso!');