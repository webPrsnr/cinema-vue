<template>
  <ul class="faq__wrapper">
    <li class="faq__element">Это одностраничное приложение резервирования билетов в кинотеатр.</li>
    <li class="faq__element">
      Время начала сеансов 10.00, время последнего сеанса 20.00. Шаг 2 часа. Всего 6 сеансов в день.
    </li>
    <li class="faq__element">
      Интерфейс отображает доступные даты для бронирования, сеансы, свободные и забронированные
      места.
    </li>
    <li class="faq__element">Недоступные по времени даты не отображаются.</li>
    <li class="faq__element">Для хранения дат используется LocaleStorage.</li>
    <li class="faq__element">Глубина - 3 дня от момента инициализации (CI/CD).</li>
  </ul>
</template>

<style scoped>
.faq {
  &__wrapper {
    list-style-type: disc;
    padding-left: 1rem;
  }

  &__element {
    padding: 0.2rem 0;
  }

  &__element::marker {
    color: var(--primary-danger);
  }
}
</style>
