<template>
  <section class="seats-faq">
    <div class="seats-faq__circle seats-faq__circle_blue"></div>
    <h4>свободно</h4>
    <div class="seats-faq__circle seats-faq__circle_red"></div>
    <h4>занято</h4>
    <div class="seats-faq__circle seats-faq__circle_orange"></div>
    <h4>ваши места</h4>
  </section>
</template>
<style scoped>
.seats-faq {
  position: absolute;
  left: 1rem;
  bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: 0.2rem;
  background-color: var(--primary-white);
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: var(--secondary-shadow);

  &__circle {
    border-radius: 9999px;
    width: 0.75rem;
    height: 0.75rem;
  }

  &__circle_blue {
    background-color: var(--seat-free);
  }

  &__circle_red {
    background-color: var(--seat-reserved-other);
    cursor: not-allowed;
    pointer-events: none;
  }

  &__circle_orange {
    background-color: var(--seat-reserved-client);
  }
}
</style>
