import { defineStore } from "pinia";

interface State {
  count: number;
}

export const useCounterStore = defineStore("counter", {
  state: (): State => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});
