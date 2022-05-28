import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
/** 全局引入图标 */
import { RiBilibiliFill } from "oh-vue-icons/icons";

addIcons(RiBilibiliFill);

export default defineClientConfig({});
