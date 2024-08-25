  // Получаем элемент
  const elements = document.querySelectorAll('.educ');
  
  function checkScroll() {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();

                if (rect.top  <= window.innerHeight) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }

            });
        }

  window.addEventListener('scroll', checkScroll);