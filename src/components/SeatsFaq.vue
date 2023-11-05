<template>
  <section class="seats__faq">
    <div class="faq__circle faq__circle_blue"></div>
    <h4>свободно</h4>
    <div class="faq__circle faq__circle_red"></div>
    <h4>занято</h4>
  </section>
</template>
<style scoped>
.seats__faq {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: 0.2rem;
  background-color: var(--primary-white);
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: var(--secondary-shadow);
}

.faq__circle {
  border-radius: 9999px;
  width: 0.75rem;
  height: 0.75rem;
}
.faq__circle_blue {
  background-color: var(--seat-free);
}
.faq__circle_red {
  background-color: var(--seat-reserved-other);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
