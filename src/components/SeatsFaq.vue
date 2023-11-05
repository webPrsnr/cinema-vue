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
  background-color: white;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}

.faq__circle {
  border-radius: 9999px;
  width: 0.75rem;
  height: 0.75rem;
}
.faq__circle_blue {
  background-color: rgb(125, 177, 229);
}
.faq__circle_red {
  background-color: rgba(128, 128, 128, 0.5);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
