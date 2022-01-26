<template>
  <button class="btn-green"  :style="`color: ${color}`" @click="buttonClick">
    {{text}}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required:true,
    },
    color: {
      type: String,
      required: false,
    }
  },
  methods: {
    buttonClick() {
      this.$emit("buttonClick")
    }
  }
}
</script>

<style scoped lang="scss">

</style>
