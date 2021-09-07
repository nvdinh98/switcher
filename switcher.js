class Switcher {
    constructor(_status,_lamp) {
        this.status = _status;
        this.lamp = _lamp;
    }
    setLamp(lamp) {
        this.lamp = lamp
    }
    turnOn() {
        this.lamp.turnOn()
        this.status = true;
    }
    turnOff() {
        this.lamp.turnOff()
        this.status = false;
    }

}
let switcher = new Switcher(true,lamp1)
