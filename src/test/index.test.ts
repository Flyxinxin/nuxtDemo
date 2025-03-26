import {
  describe,
  test,
  expect,
  // vi
} from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("IndexPage", async () => {
  await setup();

  test("should render a list of post links when data is fetched", async () => {
    // vi.mock('#app', () => ({
    //   useFetch: vi.fn().mockResolvedValue({
    //     data: [1, 2, 3, 4]
    //   })
    // }))

    const html = await $fetch("/");

    expect(html).toContain("to posts1");
    expect(html).toContain("to posts2");
    expect(html).toContain("to posts3");
    expect(html).toContain("to posts4");
    expect(html).toContain("to posts5");
    expect(html).toContain("to posts6");
    expect(html).toContain("to posts7");
  });
});
