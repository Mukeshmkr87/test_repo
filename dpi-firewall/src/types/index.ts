export interface PacketData {
    sourceIP: string;
    destinationIP: string;
    payload: string;
}

export interface Rule {
    id: string;
    action: 'allow' | 'deny';
    sourceIP?: string;
    destinationIP?: string;
    protocol?: string;
    port?: number;
}