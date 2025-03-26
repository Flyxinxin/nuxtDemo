import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import Counter from "../components/MyAlert.vue";
import { beforeEach, describe, test, expect } from "vitest";

describe("Counter Component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("should initialize count as 0", async () => {
    const wrapper = mount(Counter);

    expect(wrapper.text()).toContain("Count: 0");
    expect(wrapper.text()).toContain("Double count: 0");
  });

  test("should increment the count when the + button is clicked", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button:first-of-type").trigger("click");

    expect(wrapper.text()).toContain("Count: 1");
    expect(wrapper.text()).toContain("Double count: 2");
  });

  test("should decrement the count when the - button is clicked", async () => {
    const wrapper = mount(Counter);

    await wrapper.find("button:first-of-type").trigger("click");

    await wrapper.find("button:last-of-type").trigger("click");

    expect(wrapper.text()).toContain("Count: 0");
    expect(wrapper.text()).toContain("Double count: 0");
  });
});
