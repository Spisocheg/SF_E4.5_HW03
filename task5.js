class Electrodevice {
    constructor(name, power, purpose) {
        this.name = name;
        this.power = power;
        this.isConnected = false;
    }

    switch() {
        this.isConnected = !this.isConnected;
        if (this.isConnected) {
            console.log(`Device was switched on`);
        } else {
            console.log(`Device was switched off`);
        }
    }
}


class Lamp extends Electrodevice {
    constructor(name, power, brightness) {
        super(name, power, isConnected);
        this.brightness = brightness;
    }

    changeBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Brightness has been changed to ${newBrightness}`);
    }
}


class Computer extends Electrodevice {
    constructor(name, power, type) {
        super(name, power, isConnected);
        this.type = type;
    }

    runDiagnostics() {
        console.log(`Diagnosis was carried out. The result is ok`);
    }
}


const desktopLamp = new Lamp('myLamp', 90, 20);
const notebook = new Computer('myPC', 300, 'portable');

desktopLamp.switch();
desktopLamp.changeBrightness(100);
console.log(desktopLamp);

notebook.switch();
notebook.runDiagnostics();
console.log(notebook);
