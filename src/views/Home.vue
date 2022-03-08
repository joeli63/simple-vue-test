<script setup>
import Calendar from "@/components/Calendar.vue";
import Card from "@/components/Card.vue";
import DonutChart from "@/components/DonutChart.vue";

const calendarInfos = {
  jun: {
    type: "complete",
    count: 5,
  },
  feb: {
    type: "booked",
    count: 2,
  },
  apr: {
    type: "pending",
    count: 1,
  },
};

const cardInfos = [
  {
    text: "Hormone Replacement Therapy",
    type: "complete",
  },
  {
    text: "Ozone Therapy",
    type: "complete",
  },
  {
    text: "NAD",
    type: "complete",
  },
  {
    text: "Hormone Replacement Therapy",
    type: "complete",
  },
  {
    text: "Ozone Therapy",
    type: "booked",
  },
  {
    text: "NAD",
    type: "booked",
  },
  {
    text: "Hormone Replacement Therapy",
    type: "pending",
  },
];
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12">
    <h2 class="text-3xl font-medium leading-9 tracking-tight text-wp-black-400 sm:text-4xl sm:leading-10">2021 Wellness Plan</h2>
    <div class="mt-4 flex flex-col wp-border w-full p-4 sm:mt-8 sm:p-6">
      <div class="w-full flex justify-between align-bottom">
        <div>
          <h4 class="text-xl font-medium tracking-tight leading-5 text-wp-black-400 pr-3 sm:text-2xl sm:tracking-normal sm:inline">Your Progress</h4>
          <span class="text-sm text-wp-black-300">3 steps to complete</span>
        </div>
        <a class="my-auto text-sm text-wp-black-300 underline underline-offset-2 cursor-pointer decoration-1" @click="hey">hide</a>
      </div>

      <div class="md:my-6 md:mx-8 mx-2 my-1 grid grid-cols-12 gap-5">
        <div class="md:col-span-4 col-span-12 text-center">
          <DonutChart :percentage="68" />
        </div>
        <div class="md:col-span-8 col-span-12">
          <Calendar :infos="calendarInfos" />
          <Card v-for="(card, index) in cardInfos" :key="index" :info="card" />
        </div>
      </div>
    </div>
  </div>
</template>
