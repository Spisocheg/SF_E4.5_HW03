function Electrodevice(name, power, purpose) {
    this.name = name,
    this.power = power,
    this.isConnected = false,

    this.switch = function() {
        this.isConnected = !this.isConnected;
        if (this.isConnected) {
            console.log(`Device was switched on`);
        } else {
            console.log(`Device was switched off`);
        }
    }
}


function Lamp(name, power, brightness) {
    this.name = name,
    this.power = power,
    this.brightness = brightness,
    this.isConnected = false
}

Lamp.prototype = new Electrodevice()

Lamp.prototype.changeBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Brightness has been changed to ${newBrightness}`);
}


function Computer(name, power, type) {
    this.name = name,
    this.power = power,
    this.type = type,
    this.isConnected = false
}

Computer.prototype = new Electrodevice()

Computer.prototype.runDiagnostics = function() {
    console.log(`Diagnosis was carried out. The result is ok`);
}


const desktopLamp = new Lamp('myLamp', 90, 20);
const notebook = new Computer('myPC', 300, 'portable');

desktopLamp.switch();
desktopLamp.changeBrightness(100);
console.log(desktopLamp);

notebook.switch();
notebook.runDiagnostics();
console.log(notebook);
