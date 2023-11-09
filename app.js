import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const numbers = ref([]);

    const addNumber = () => {
      const randomNumber = parseInt(Math.random() * 100) + 1;
      numbers.value.push(randomNumber);
    };

    const lengthArrayText = computed(()=> {
      return numbers.value.length;
    }

    )

    const evenNumbers = computed(() => {
      return numbers.value.filter((n) => n%2 == 0); // TODO: Modifica el método filter para quedarte únicamente con los números pares del array de numbers
    });

    return {
      numbers,
      addNumber,
      evenNumbers,
      lengthArrayText,
    };
  },
}).mount("#app");
