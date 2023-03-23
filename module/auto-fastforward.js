import { patchHelper } from "./patch.js";

/**
 * A class for holding utilities, mostly as a hedge for possible expansion 
 */
export class AutoFastForward {

    static ID = "auto-fastforward";

    static NAME = "Auto FastForward";

    static PATCHES = {
        FASTFORWARD: {
            target: "game.helper.isUsingFastForwardKey",
            type: 'WRAPPER'
        }
    }

    static SETTINGS = {
        AUTO_FASTFORWARD: {
            id: "autoFastForward",
            title: "AUTO-FAST.settings.auto-fastforward.title",
            hint:"AUTO-FAST.settings.auto-fastforward.hint", 
            scope: "world",
            type: Boolean,
            default: false,
            config: true
        }
    }

    static initialize() {

        const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);
        game.settings.register(this.ID, this.SETTINGS.AUTO_FASTFORWARD.id, {
            name: this.SETTINGS.AUTO_FASTFORWARD.title,
            hint: this.SETTINGS.AUTO_FASTFORWARD.hint,
            scope: this.SETTINGS.AUTO_FASTFORWARD.scope,
            type: this.SETTINGS.AUTO_FASTFORWARD.type,
            default: this.SETTINGS.AUTO_FASTFORWARD.default,
            config: this.SETTINGS.AUTO_FASTFORWARD.config,
            onChange: debouncedReload,
        });
    }

    static patch() {

        const autoFastForward = game.settings.get(this.ID, this.SETTINGS.AUTO_FASTFORWARD.id);
        if (autoFastForward) {
            this.log(`${this.localize("AUTO-FAST.gen.patch")} ${this.PATCHES.FASTFORWARD.target}`);
            libWrapper.register(this.ID, this.PATCHES.FASTFORWARD.target, patchHelper, this.PATCHES.FASTFORWARD.type);
        }
    }



    /**
    * A small helper function for logging with formatting
    * 
    * @param  {...any} args - what to log
    */
    static log(...args) {
        console.log(`${this.NAME}  |  ${args}`);
    }

    static localize(key) {
        return game.i18n.localize(key);
    }


}