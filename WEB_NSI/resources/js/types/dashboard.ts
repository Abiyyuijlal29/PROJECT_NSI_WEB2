export type PriorityLevel = 'High' | 'Medium' | 'Low';
export type TicketStatus = 'Open' | 'In Progress' | 'Resolved';

export interface Customer {
    id: number;
    name: string;
    tier: string;
    avatar_url?: string;
}

export interface Ticket {
    id: number;
    ticket_number: string;
    customer: Customer;
    category: string;
    priority: PriorityLevel;
    status: TicketStatus;
    technician: string;
}

export interface LiveFeedItem {
    id: string;
    timeAgo: string;
    type: 'note' | 'status_update' | 'ticket_created' | 'system_assigned' | 'resolved';
    actor: string;
    targetId: string;
    targetName?: string;
    message?: string;
    status?: TicketStatus;
}
