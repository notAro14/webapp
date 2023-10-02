import axios from "axios";

export class UsersGateway {
  async all() {
    const res = await axios.get<{ id: string; name: string; email: string }[]>(
      "https://jsonplaceholder.typicode.com/users",
    );
    return res.data;
  }
}

export default new UsersGateway();
