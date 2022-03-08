<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    default: ''
  }
});

const chartOptions = {
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 1,
      gradientToColors: ["#61B057"],
      opacityFrom: 0.2,
      opacityTo: 1,
      stops: [0, props.percentage],
    },
  },
  labels: [props.percentage + '%'],
  plotOptions: {
    radialBar: {
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "36px",
          offsetY: 14,
          color: "#172944",
          fontWeight: 300,
        },
        value: {
          show: false,
        },
      },
      track: {
        strokeWidth: "95%",
      },
      hollow: {
        size: "60%",
      },
    },
  },
  stroke: {
    lineCap: "round",
    curve: "smooth",
  },
  colors: ["#287FD4"],
};

const series = [props.percentage];
</script>

<template>
  <apexchart type="radialBar" :options="chartOptions" :series="series"></apexchart>
  <div class="text-wp-black-400">
    <p>Completed</p>
    <p>appointments</p>
  </div>
</template>
