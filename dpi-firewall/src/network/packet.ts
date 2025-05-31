export class Packet {
    sourceIP: string;
    destinationIP: string;
    payload: string;

    constructor(sourceIP: string, destinationIP: string, payload: string) {
        this.sourceIP = sourceIP;
        this.destinationIP = destinationIP;
        this.payload = payload;
    }

    parse(): object {
        return {
            sourceIP: this.sourceIP,
            destinationIP: this.destinationIP,
            payload: this.payload
        };
    }

    validate(): boolean {
        // Simple validation for demonstration purposes
        return !!this.sourceIP && !!this.destinationIP && !!this.payload;
    }
}