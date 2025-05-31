import FirewallRules from './rules';

class DPIFirewall {
    private running: boolean;
    private rules: FirewallRules;

    constructor(rules: FirewallRules) {
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

    processPacket(packet: Packet) {
        if (!this.running) {
            console.log("Firewall is not running.");
            return;
        }

        if (this.rules.checkRule(packet)) {
            console.log("Packet allowed:", packet);
            // Logic to allow the packet
        } else {
            console.log("Packet blocked:", packet);
            // Logic to block the packet
        }
    }
}

export default DPIFirewall;

export interface Packet {
    source: string;
    destination: string;
    data: string;
}