import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
/** 全局引入图标
 * more information https://oh-vue-icons.js.org/
 */
import { RiBilibiliFill } from "oh-vue-icons/icons";

addIcons(RiBilibiliFill);

export default defineClientConfig({});
