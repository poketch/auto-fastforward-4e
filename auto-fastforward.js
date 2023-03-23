import { AutoFastForward } from "./module/auto-fastforward.js";
import { patchHelper } from "./module/patch.js";

Hooks.on("init", function () {

    const debouncedReload = foundry.utils.debounce( () => window.location.reload(), 100 );    
    game.settings.register("auto-fastforward", "autoFastForward", {
        name: "Auto Fast Forward Rolls?",
        hint: " Requires Reload. Enable to reverse default roll behaviour.When enabled: All rolls are fast forwarded and shift with bring up the roll prompt.",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: debouncedReload,
    
    });

});

Hooks.on("ready", function () {

    const autoFastForward = game.settings.get("auto-fastforward", "autoFastForward");
    if (autoFastForward) {
        AutoFastForward.log("Patching Helper.isUsingFastForwardKey");
        libWrapper.register("auto-fastforward", "game.helper.isUsingFastForwardKey", patchHelper, 'WRAPPER');
    }

});