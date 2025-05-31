"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirewallRules = void 0;
class FirewallRules {
    constructor() {
        this.rules = [];
    }
    addRule(rule) {
        this.rules.push(rule);
    }
    removeRule(rule) {
        this.rules = this.rules.filter(r => r !== rule);
    }
    checkRule(packet) {
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
exports.FirewallRules = FirewallRules;
exports.default = FirewallRules;
