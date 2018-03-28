<template>
  <div class="ef-panel ef-bg-white ef-border ef-border-grey-light ef-rounded ef-p-2">
    <div class="ef-panel-title ef-border-b ef-border-grey-light ef-text-blue ef-pb-2" v-if="title">
      <span class="ef-font-bold">{{title}}</span>
    </div>
    <div class="ef-panel-content ef-pt-0">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ef-panel",
  props: {
    title: String
  }
};
</script>
