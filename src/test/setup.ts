// import { afterEach } from "vitest";
// import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// runs a cleanup after each test case (e.g. clearing jsdom)
// afterEach(() => {
//   cleanup();
// });
