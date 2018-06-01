<template>
  <div>
    <h1>{{ title }}</h1>
    <section>
      <h2>Cat list</h2>
      <ul class="cat-list">
        <li v-for="(cat, index) in cats" :key="index">
          <button type="button"
            @click="chooseCat(cat)">
            {{ cat.nameCat }}
          </button>
        </li>
      </ul>
    </section>
    <section>
      <h1>Chosen cat</h1>
      <cat-counter
        v-if="imgCat"
        :imgCat="imgCat"
        :nameCat="nameCat">
      </cat-counter>
      <div v-else>
        No chosen cat.
      </div>
    </section>
  </div>
</template>

<script>
import CatCounter from '@/components/CatCounter'

export default {
  name: 'StepThree',

  components: {
    CatCounter
  },

  data () {
    return {
      title: 'Step Three',
      imgCat: '',
      nameCat: '',
      cats: [
        { nameCat: 'Rodolfo',
          imgCat: require('@/assets/cat1.jpg') },
        { nameCat: 'Luna',
          imgCat: require('@/assets/cat2.jpg') },
        { nameCat: 'Bigotes',
          imgCat: require('@/assets/cat3.jpg') },
        { nameCat: 'Camilo',
          imgCat: require('@/assets/cat4.jpg') },
        { nameCat: 'Juno',
          imgCat: require('@/assets/cat5.jpg') }
      ]
    }
  },

  methods: {
    chooseCat (cat) {
      this.nameCat = cat.nameCat
      this.imgCat = cat.imgCat
    }
  }
}
</script>
<style>
  .cat-list {
    list-style-type: none;
  }
  .cat-list button {
    background:none!important;
    color:inherit;
    border:none;
    padding:0!important;
    font: inherit;
    border-bottom:1px solid #444;
    cursor: pointer;
  }
</style>
