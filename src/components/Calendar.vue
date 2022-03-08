<script setup>
const props = defineProps({
  infos: {
    type: Object,
    default: () => {
      return {
        jan: {
          type: "complete", // complete | booked | pending
          count: 0,
        },
      };
    },
  },
});

const monthNames = [
  "may",
  "jan",
  "jun",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
  "jan",
  "feb",
  "mar",
  "apr",
];

const statusBarClassName = (status) => {
  const classNames = {
    complete: "bg-wp-green-300",
    booked: "bg-wp-blue-400",
    pending: "bg-wp-blue-200",
  };

  return status ? classNames[status] : "";
};

const capitalizeFirstLetter = (letter) => {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
};
</script>

<template>
  <div class="wp-border grid lg:grid-cols-12 px-2 py-4 md:grid-cols-10 grid-cols-8">
    <div class="text-sm text-wp-blue-400 text-center" v-for="month in monthNames" :key="month">
      <div class="mb-1 px-2">{{ capitalizeFirstLetter(month) }}</div>
      <div
        class="h-1 my-1 rounded-lg w-full px-2"
        :class="statusBarClassName(infos[month]['type'])"
        v-for="index in new Array(infos[month] ? infos[month]['count'] : 0)"
        :key="index"
      />
    </div>
  </div>
</template>