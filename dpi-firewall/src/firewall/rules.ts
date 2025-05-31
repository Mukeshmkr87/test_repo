import { Packet } from './dpi';

interface Rule {
    sourceIP: string;
    destinationIP: string;
    allow: boolean;
}

export class FirewallRules {
    private rules: Array<Rule>;

    constructor() {
        this.rules = [];
    }

    addRule(rule: Rule): void {
        this.rules.push(rule);
    }

    removeRule(rule: Rule): void {
        this.rules = this.rules.filter(r => r !== rule);
    }

    checkRule(packet: Packet): boolean {
        // Implement rule checking logic here
        for (const rule of this.rules) {
            if (rule.sourceIP === packet.source && rule.destinationIP === packet.destination) {
                return rule.allow;
            }
        }
        // Default to blocking the packet if no rule matches
        return false;
    }
}

export default FirewallRules;