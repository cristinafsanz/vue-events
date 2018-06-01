<template>
  <section class="section-container">
    <h3 v-if="nameCat">
      {{ nameCat }}
    </h3>
    <div class="cat-counter">
      <button type="button" @click="addVote">
        <img :src="imgCat">
      </button>
      <div class="cat-counter__counter">
        <span>Clicks:
          <span class="cat-counter__counter--number">
            {{ counter }}
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CatCounter',

  props: {
    imgCat: {
      type: String,
      required: true
    },
    nameCat: {
      type: String,
      required: false,
      default: ''
    },
    initCount: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data () {
    return {
      title: 'Step One',
      counter: this.initCount
    }
  },

  watch: {
    imgCat () {
      this.counter = this.initCount
    }
  },

  methods: {
    addVote () {
      this.counter += 1
      this.$emit('addedVote', this.counter)
    }
  }
}
</script>
<style>
  .section-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cat-counter {
    display: flex;
    align-items: center;
  }
  .cat-counter__counter {
    margin-left: 20px;
    border: 1px solid #000;
    padding: 10px;
  }
  .cat-counter__counter--number {
    font-weight: bold;
  }
</style>
