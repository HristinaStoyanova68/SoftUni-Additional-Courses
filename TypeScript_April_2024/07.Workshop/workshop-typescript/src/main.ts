import { CONFIG } from "./constants";
import { PostService } from "./services/postService";
import { UserService } from "./services/userService";
import "./style.css";
import { UserDetails } from "./types/user";

const root = document.querySelector<HTMLDivElement>("#app");

const { baseUrl } = CONFIG;

const postService = new PostService(baseUrl);
postService.getAll().then((data) => {
  console.log("posts:", data);
});

const userService = new UserService(baseUrl);
userService.getAll().then((data) => {
  console.log("users:", data);
});

const userId = 3;

userService.getOne(userId).then((data) => {
  console.log("single user:", data);
});

userService.delete(userId).then((data) => {
  console.log("deleted");
  
})

const user: UserDetails = {
  id: 1,
  name: "Schulist",
  username: "Corker",
  email: "Karl@jasper.info",
  address: {
    street: "Cross",
    suite: "A95",
    city: "Christ",
    zipcode: "2350",
    geo: {
      lat: "-71.419",
      lng: "71.747",
    },
  },
  phone: "1-477-935-847",
  website: "ola.org",
  company: {
    name: "Considin",
    catchPhrase: "Synchronis",
    bs: "e-enable innovativ",
  },
};

userService.update(user).then((res) => console.log("updated", res));

userService.create(user).then((res) => console.log(res));

if (root) {
  root!.innerHTML = `
  <div>
    <h1>Workshop-TypeScript</h1>
  </div>
`;
}

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
