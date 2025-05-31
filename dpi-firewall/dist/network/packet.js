"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Packet = void 0;
class Packet {
    constructor(sourceIP, destinationIP, payload) {
        this.sourceIP = sourceIP;
        this.destinationIP = destinationIP;
        this.payload = payload;
    }
    parse() {
        return {
            sourceIP: this.sourceIP,
            destinationIP: this.destinationIP,
            payload: this.payload
        };
    }
    validate() {
        // Simple validation for demonstration purposes
        return !!this.sourceIP && !!this.destinationIP && !!this.payload;
    }
}
exports.Packet = Packet;
