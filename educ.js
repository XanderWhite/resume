  // Получаем элемент
  const elements = document.querySelectorAll('.educ');
  const triggerHeight = 0; // Высота, на которой нужно добавить класс
  const removeHeight = 0; // Высота, на которой нужно убрать класс


  // Функция для проверки положения элемента
  function checkScroll() {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const windowHeight = window.innerHeight;

                if (elementTop  <= windowHeight - triggerHeight) {
                    // element.classList.remove('hidden');
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                    // element.classList.add('hidden'); // Скрываем, если прокрутка выше 100px
                }

            //    if (elementTop > windowHeight - removeHeight) {
            //         element.classList.remove('active');
            //         element.classList.add('hidden');
            //     }


            });
        }

  // Добавляем слушатель события прокрутки
  window.addEventListener('scroll', checkScroll);