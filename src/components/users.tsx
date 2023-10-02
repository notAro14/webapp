import { Text, Card, Flex, Heading } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";

import usersGateway from "../adapters/UsersGateway.production";

export default function Users() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: usersGateway.all,
  });

  if (!data)
    return (
      <Text size="5" role="alert">
        Loading users...
      </Text>
    );

  return (
    <Flex direction="column" gap="4">
      <Heading as="h1">{`${data.length} users retrieved`}</Heading>
      <Flex asChild direction="column" gap="4">
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyleType: "none",
          }}
        >
          {data.map(function (user) {
            return (
              <Card asChild key={user.id}>
                <li>
                  <Heading as="h2">{user.name}</Heading>
                  <Text as="p">{user.email}</Text>
                </li>
              </Card>
            );
          })}
        </ul>
      </Flex>
    </Flex>
  );
}
