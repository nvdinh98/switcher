class ElectricLamp {
    constructor(_status) {
        this.status = _status
    }
    turnOn() {
        this.status = true
        alert("linghting")
    }
    turnOff() {
        this.status = false;
        alert("not lighting")
    }


}
let lamp1 = new ElectricLamp(true)
let lamp2 = new ElectricLamp(true)