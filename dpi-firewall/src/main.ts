import DPIFirewall from './firewall/dpi';
import { Packet } from './firewall/dpi';
import FirewallRules from './firewall/rules';

// Create a FirewallRules instance and add some rules
const rules = new FirewallRules();
rules.addRule({ sourceIP: '192.168.1.1', destinationIP: '192.168.1.2', allow: true });
rules.addRule({ sourceIP: '192.168.1.3', destinationIP: '192.168.1.4', allow: false });

// Create a DPIFirewall instance with the rules
const firewall = new DPIFirewall(rules);
firewall.start();

// Simulate packet processing
const packet1: Packet = { source: '192.168.1.1', destination: '192.168.1.2', data: 'Hello, World!' };
firewall.processPacket(packet1);

const packet2: Packet = { source: '192.168.1.3', destination: '192.168.1.4', data: 'Blocked packet!' };
firewall.processPacket(packet2);

firewall.stop();