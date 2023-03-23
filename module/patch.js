/**
 * Function accepted by libWrapper's register method
 * @name wrapped
 * @function
 * @param {*} args = Parameters here are anything accepted by the original implementation
 */

/**
 * Function for patching dnd4e Helper class static method isUsingFastForward
 * 
 * @param {wrapped} wrapped -  acallback pointing to Helper.isUsingFastForward
 * @param {event} args - an Object ccontaitng the event passed into the Helper.isUsingFastForward method
 */
export function patchHelper(wrapped, ...args) {

    // This will reverse the default behaviour If the appropriate setting is set
    return !wrapped(...args);
}

    
