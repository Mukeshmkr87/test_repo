"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dpi_1 = __importDefault(require("./firewall/dpi"));
const rules_1 = __importDefault(require("./firewall/rules"));
// Create a FirewallRules instance and add some rules
const rules = new rules_1.default();
rules.addRule({ sourceIP: '192.168.1.1', destinationIP: '192.168.1.2', allow: true });
rules.addRule({ sourceIP: '192.168.1.3', destinationIP: '192.168.1.4', allow: false });
// Create a DPIFirewall instance with the rules
const firewall = new dpi_1.default(rules);
firewall.start();
// Simulate packet processing
const packet1 = { source: '192.168.1.1', destination: '192.168.1.2', data: 'Hello, World!' };
firewall.processPacket(packet1);
const packet2 = { source: '192.168.1.3', destination: '192.168.1.4', data: 'Blocked packet!' };
firewall.processPacket(packet2);
firewall.stop();
