/**
 * A class for holding utilities, mostly as a hedge for possible expansion 
 */
export class AutoFastForward {

    static ID = "auto-fastforward";

    static NAME = "Auto FastForward";


      /**
   * A small helper function for logging with formatting
   * 
   * @param  {...any} args - what to log
   */
    static log(...args) {
        console.log(`${this.NAME}  |  ${args}`);
    }

}