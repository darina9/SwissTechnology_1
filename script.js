document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  let currentIndex = 0;
 
  function updateCarousel() {
    const windowWidth = window.innerWidth;
    let slideWidth;
  
    if (windowWidth >= 1440) {
      slideWidth = 260; // 250px for each slide + 10px margin
    } else if (windowWidth >= 768 && windowWidth <= 1439 ) {
      slideWidth = 233; // 227px for each slide + 6px margin
    } else {
      slideWidth = 260; // Only 227px for each slide
    }
  
    const translateValue = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  function moveToNext() {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
  }

  function moveToPrev() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
  };

  prevButton.addEventListener('click', moveToPrev);
  nextButton.addEventListener('click', moveToNext)});

  function validateForm() {
    const inputs = document.querySelectorAll('.modal-form input');
    let allFieldsFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    const warningMessage = document.querySelector('.warning-message');
    const successContainer = document.getElementById('successContainer');

    if (!allFieldsFilled) {
        if (!warningMessage) {
            const newWarningMessage = document.createElement('div');
            newWarningMessage.className = 'warning-message';
            newWarningMessage.style.color = 'red';
            newWarningMessage.textContent = 'Пожалуйста, заполните все поля';

            const modalForm = document.querySelector('.modal-form');
            if (modalForm) {
                modalForm.insertBefore(newWarningMessage, modalForm.querySelector('.submit-btn'));
            }
        }

        return false; // Предотвращаем отправку формы в случае ошибки
    } else {
        if (warningMessage) {
            warningMessage.remove();
        }

        // Здесь можете добавить логику отправки данных формы
       
        const modalForm = document.querySelector('.modal-form');
        if (modalForm) {
            modalForm.reset(); // Этот метод обнуляет значения полей формы
        }
        
          window.location.href = 'https://darina9.github.io/SwissTechnology_1/'; 
      

        return false; // Предотвращаем отправку формы, так как не хотим переходить на сторонний сайт
    }
}

function openModal() {
    const feedbackModal = document.getElementById('feedbackModal');
    if (feedbackModal) {
        feedbackModal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('feedbackModal');

    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('.submit-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault();
            validateForm();
        });
    }

    // Закрытие модального окна при клике за его пределами
    document.addEventListener('click', function (event) {
        const modal = document.getElementById('feedbackModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});


       
      //   function validateForm() {
      //     console.log('Validation started');
      //     const inputs = document.querySelectorAll('.modal-form input');
      //     let allFieldsFilled = true;

      //     inputs.forEach(input => {
      //         if (input.value.trim() === '') {
      //             allFieldsFilled = false;
      //         }
      //     });

      //     const warningMessage = document.querySelector('.warning-message');

      //     if (!allFieldsFilled) {
      //         if (!warningMessage) {
      //             const newWarningMessage = document.createElement('div');
      //             newWarningMessage.className = 'warning-message';
      //             newWarningMessage.style.color = 'red';
      //             newWarningMessage.textContent = 'Пожалуйста, заполните все поля';
      //             document.getElementById('warningContainer').innerHTML = ''; // Очищаем контейнер от предыдущих предупреждений
      //             document.getElementById('warningContainer').appendChild(newWarningMessage);
      //         }
      //     } else {
      //         if (warningMessage) {
      //             warningMessage.remove();
      //         }

      //         // Здесь можете добавить логику отправки данных формы
      //         closeModal();
      //     }
      // }

      // function openModal() {
      //   console.log('Opening modal');
      //     document.getElementById('feedbackModal').style.display = 'flex';
      // }

      // function closeModal() {
      //   console.log('Closing modal');
      //     const modal = document.getElementById('feedbackModal');
      //     const warningMessage = document.querySelector('.warning-message');

      //     if (warningMessage) {
      //         warningMessage.remove();
      //     }

      //     modal.style.display = 'none';
      // }

