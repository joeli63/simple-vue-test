<script setup>
import { onMounted, reactive } from "vue";

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {
        text: "",
        type: "complete", // complete | booked | pending
      };
    },
  },
});

const status = reactive({
  complete: {
    icon: "",
    className: "text-wp-green-100",
    label: "Complete",
  },
  booked: {
    icon: "",
    className: "text-wp-blue-400",
    label: "Booked",
  },
  pending: {
    icon: "",
    className: "text-wp-blue-200",
    label: "Pending",
  },
});

onMounted(async () => {
  status.booked.icon = (
    await import("../assets/images/icons/booked.png")
  ).default;
  status.complete.icon = (
    await import("../assets/images/icons/complete.png")
  ).default;
  status.pending.icon = (
    await import("../assets/images/icons/pending.png")
  ).default;
});
</script>

<template>
  <div class="flex wp-border p-4 align-middle flex-wrap gap-2 my-3">
    <p class="mr-auto my-auto text-wp-black-400">{{ info.text }}</p>
    <div class="flex justify-between">
      <div class="w-32 flex">
        <img :src="status[info.type]['icon']" alt="card image" />
        <div class="my-auto mr-2 sm:mr-8" :class="status[info.type]['className']">{{ status[info.type]['label'] }}</div>
      </div>
      <a @click="hey" class="text-wp-black-200 cursor-pointer font-extrabold">...</a>
    </div>
  </div>
</template>