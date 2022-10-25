<template>
    <div class="tab__panel" v-show="isActive">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TabPanel",
  props: {
    label: {
      type: String,
    }
  },
  data () {
    return {
      isActive: true
    }
  }
};
</script>