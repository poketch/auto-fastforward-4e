import { AutoFastForward } from "./module/auto-fastforward.js";

Hooks.on("init", function () {

    AutoFastForward.initialize();

});

Hooks.on("ready", function () {

    AutoFastForward.patch();

});