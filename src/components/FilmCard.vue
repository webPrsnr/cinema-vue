<script setup lang="ts">
import type { FilmInfo } from '@/listFilms'
import { converToHour } from '@/utils/convertToHour'

const props = defineProps<{
  card: FilmInfo
}>()
console.log(props)
</script>
<template>
  <section class="card">
    <div class="container">
      <div class="about">
        <div class="wrapper">
          <div class="poster" :style="`background-image:url(${props.card.imgTitle})`"></div>
          <div class="description">
            <div class="title">
              {{ props.card.name }}
            </div>
            <div class="country_duration">
              {{ props.card.country }} {{ converToHour(props.card.duration) }}
            </div>
            <div class="genre">
              <span v-for="genre in props.card.genres" :key="genre">{{ genre }}</span>
            </div>
            <div class="score">
              <div class="age_limit">{{ props.card.ageLimit }}+</div>
            </div>
            <div class="info">
              <div class="start">
                <div class="info_b">Старт проката</div>
                <div class="info_e">{{ props.card.start }}</div>
              </div>
              <div class="start">
                <div class="info_b">Режисер</div>
                <div class="info_e">{{ props.card.director }}</div>
              </div>
              <div class="start">
                <div class="info_b">В главных ролях</div>
                <div class="info_e">
                  <span v-for="actor in props.card.starring" :key="actor">{{ `${actor}, ` }}</span>
                </div>
              </div>
            </div>
            <div class="descr">{{ props.card.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container {
  display: flex;
  flex: 1 1 0%;
}
.about {
  flex: 1 1 0%;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}
.wrapper {
  display: flex;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}
.poster {
  width: 280px;
  height: 420px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
}
.description {
  flex: 1 1 0%;
}
.title {
  display: flex;
  align-items: flex-end;
  line-height: 42px;
  font-weight: 700;
  font-size: 34px;
}
.country_duration {
  line-height: 24px;
  font-size: 17px;
}
.genre {
  line-height: 24px;
  font-size: 17px;
}
.score {
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.age_limit {
  font-weight: 700;
  font-size: 17px;
  border-color: (120, 120, 128, 0.16);
  border-style: solid;
  border-width: 2px;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  display: flex;
  margin: 6px;
}
.info {
  margin-top: 2.5rem;
}
.start {
  display: flex;
  justify-content: space-between;
}
.info_b {
  line-height: 24px;
  font-size: 17px;
  width: 180px;
  width: 180px;
}
.info_e {
  line-height: 24px;
  font-size: 17px;
  flex: 1 1 0%;
}

.descr {
  line-height: 24px;
  font-size: 17px;
  margin-top: 1.5rem;
}
</style>
