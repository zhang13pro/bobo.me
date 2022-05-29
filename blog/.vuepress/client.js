import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
/** 全局引入图标
 * more information https://oh-vue-icons.js.org/
 */
import {
  RiBilibiliFill,
  IoPricetagsOutline,
  GiLinkedRings,
  MdComputer,
  RiGithubLine,
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliFill,
  IoPricetagsOutline,
  GiLinkedRings,
  MdComputer,
  RiGithubLine
);

export default defineClientConfig({});
