"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DPIFirewall {
    constructor(rules) {
        this.running = false;
        this.rules = rules;
    }
    start() {
        this.running = true;
        console.log("DPI Firewall started.");
        // Simulate listening for packets
        setTimeout(() => {
            if (this.running) {
                console.log("Listening for packets...");
            }
        }, 1000);
    }
    stop() {
        this.running = false;
        console.log("DPI Firewall stopped.");
        // Logic to stop listening for packets
    }
    processPacket(packet) {
        if (!this.running) {
            console.log("Firewall is not running.");
            return;
        }
        if (this.rules.checkRule(packet)) {
            console.log("Packet allowed:", packet);
            // Logic to allow the packet
        }
        else {
            console.log("Packet blocked:", packet);
            // Logic to block the packet
        }
    }
}
exports.default = DPIFirewall;
