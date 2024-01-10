<template>
    <div class="flex-1 flex flex-col items-center justify-around">
        <div class="h-1/3 rounded-xl w-full flex gap-y-8 bg-zinc-50 overflow-visible border border-zinc-300">
            <div class="flex-1 flex items-start justify-center flex-col w-full rounded-lg px-16">
                <h1 class="text-3xl text-left font-bold text-pink-600 mb-1"> Learn English Words with Ease</h1>
                <p class="text-zinc-700">Our app is the perfect way to learn English words. With a variety of features to
                    help you memorize new vocabulary, you'll be speaking English like a native in no time.</p>
            </div>
            <img :src="dashboard" alt="dashboard" class="flex-1 w-[600px] h-[300px] -translate-y-12" />
        </div>
        <div class="rounded-lg w-full flex gap-x-12">
            <div class="lg:w-1/4 w-1/3">
                <div class="flex px-8 bg-teal-500 items-center rounded-lg h-[10rem] mb-8">
                    <img :src="dictionary" alt="dictionary" class="w-20 rounded-lg mb-3" />
                    <div class="ml-8">
                        <span class="text-4xl mt-2 text-white font-semibold">{{ totalWord }}</span>
                        <p class="text-white text-md font-semibold">Total Words</p>
                    </div>
                </div>
                <div class="flex px-8 bg-pink-600 items-center rounded-lg h-[10rem]">
                    <img :src="test" alt="test" class="w-20 rounded-lg mb-3" />
                    <div class="ml-8">
                        <span class="text-4xl mt-2 text-white font-semibold">{{ totalSentence }}</span>
                        <p class="text-white text-md font-semibold">Total Sentences</p>
                    </div>
                </div>
            </div>
            <div class="flex-1 h-full">
                <canvas ref="chartRef"></canvas>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    LineController
} from "chart.js";
import { useToastStore } from '../../../../store/toast';
import { getTotalSentences, getTotalWords, getWordsLastWeek } from '../../../../services/api/word';
import dashboard from "../../../../assets/dashboard.svg";
import test from "../../../../assets/test.png";
import dictionary from "../../../../assets/dictionary.png";
import { groupDataByDay } from '../../../../utils/util';

Chart.register(
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const toastStore = useToastStore();

const totalWord = ref(0);
const totalSentence = ref(0);
const chartRef = ref(null);
const ctx = ref(null);
const data = ref(null);

onMounted(() => {
    getTotalSentences()
        .then((res) => {
            let sum = 0;
            res.data.forEach((item) => {
                sum += item.sentences.length;
            });
            totalSentence.value = sum;
        })
        .catch((err) => {
            toastStore.showToast("error", err.response.data.message);
        });

    getTotalWords()
        .then((res) => {
            totalWord.value = res.count;
        })
        .catch((err) => {
            toastStore.showToast("error", err.response.data.message);
        });

    getWordsLastWeek()
        .then((res) => {
            data.value = groupDataByDay(res.data);
            updateChart();
        })
});

const updateChart = () => {
    ctx.value = chartRef.value.getContext('2d');

    new Chart(ctx.value, {
        type: 'line',
        data: {
            labels: Object.keys(data.value),
            datasets: [{
                label: 'Words',
                data: Object.values(data.value).map(dayData => dayData.length),
                backgroundColor: '#e11d48',
                borderColor: '#e11d48',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: {
                        display: true
                    },
                },
                x: {
                    grid: {
                        display: false
                    },
                }
            },
            elements: {
                line: {
                    tension: 0.4
                }
            },
        }
    });
}

</script>
  
<style scoped>
</style>
  