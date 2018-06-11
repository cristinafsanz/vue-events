<template>
  <div>
    <h2>{{ title }}</h2>
    <section>
      <h3>Cat list</h3>
      <ul class="cat-list">
        <li v-for="(cat, index) in cats" :key="index">
          <button type="button"
            @click="chooseCat(cat, index)">
            {{ cat.nameCat }}
          </button>
        </li>
      </ul>
    </section>
    <section>
      <h3>Chosen cat</h3>
      <cat-counter
        v-if="imgCat"
        :imgCat="imgCat"
        :nameCat="nameCat"
        :counter="cats[index].counter"
        @addedVote="setCounter">
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
      index: 0,
      cats: [
        { nameCat: 'Rodolfo',
          imgCat: this.getImgCat('cat1'),
          counter: 0
        },
        { nameCat: 'Luna',
          imgCat: this.getImgCat('cat2'),
          counter: 0
        },
        { nameCat: 'Bigotes',
          imgCat: this.getImgCat('cat3'),
          counter: 0
        },
        { nameCat: 'Camilo',
          imgCat: this.getImgCat('cat4'),
          counter: 0
        },
        { nameCat: 'Juno',
          imgCat: this.getImgCat('cat5'),
          counter: 0
        }
      ]
    }
  },

  methods: {
    chooseCat (cat, index) {
      this.nameCat = cat.nameCat
      this.imgCat = cat.imgCat
      this.index = index
    },

    setCounter (counter) {
      this.cats[this.index].counter = counter
    },

    getImgCat (imgCatName) {
      return require(`@/assets/${imgCatName}.jpg`)
    }
  }
}
</script>
<style>
  .cat-list {
    list-style-type: none;
  }
  .cat-list button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    border-bottom: 1px solid #444;
    cursor: pointer;
  }
</style>
