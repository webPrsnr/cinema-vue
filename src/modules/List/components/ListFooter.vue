<script setup lang="ts">
import Heart from '@/assets/icons/heart.svg'
</script>

<template>
  <footer class="footer">
    <div class="footer__info">
      <h4>Сделано с</h4>
      <Heart class="footer__heart" />
      <a class="footer__link" href="https://github.com/webPrsnr" target="_blank">webPrsnr</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--primary-icon);
  margin-top: 2rem;

  &__info {
    display: flex;
    padding: 1rem 0 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &__heart {
    height: 20px;
    width: 20px;
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
