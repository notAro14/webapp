import { expect, it } from "vitest";

import { server, rest } from "../test/mocks";
import { render, screen, waitForElementToBeRemoved } from "../test/utils";

import Users from "./users";

const MOCKED_USERS = [
  { name: "Agent Smith", email: "null@error.matrix", id: "smith" },
];

it("should retrieve a list of users", async function () {
  server.use(
    rest.get("https://jsonplaceholder.typicode.com/users", (_req, res, ctx) => {
      return res(ctx.json(MOCKED_USERS));
    }),
  );
  render(<Users />);
  await waitForElementToBeRemoved(screen.getByRole("alert"));
  expect(screen.getAllByRole("listitem")).toHaveLength(MOCKED_USERS.length);
});
