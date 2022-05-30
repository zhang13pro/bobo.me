import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
/** 全局引入图标
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

export default defineClientConfig({});
