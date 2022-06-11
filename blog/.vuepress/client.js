import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import { Bilibili, Music } from "./components";

/**
 * more information https://oh-vue-icons.js.org/
 */
import {
  RiBilibiliFill,
  GiLinkedRings,
  MdComputer,
  RiGithubLine,
  GiPriceTag,
} from "oh-vue-icons/icons";

addIcons(RiBilibiliFill, GiLinkedRings, MdComputer, GiPriceTag, RiGithubLine);

export default defineClientConfig({
  enhance({ app }) {
    app.component("Bilibili", Bilibili);
    app.component("Music", Music);
  },
});
