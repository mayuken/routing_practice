import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detail_a",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detail_b",
    exact: false,
    children: <Page1DetailB />
  }
];
