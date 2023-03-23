
export function patchHelper(wrapped, ...args) {

    const autoFastForward = game.settings.get("auto-fastforward", "autoFastForward");
    
    // If setting is unset, default to the regular behaviour;
    if (!autoFastForward) return wrapped(...args);

    // If setting is set, use the opposite logic;
    return !wrapped(...args);
}
