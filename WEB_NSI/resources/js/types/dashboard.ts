export type PriorityLevel = 'High' | 'Medium' | 'Low';
export type TicketStatus = 'Open' | 'In Progress' | 'Resolved';

export interface Customer {
    name: string;
    tier: string;
    avatarUrl?: string;
}

export interface Ticket {
    id: string;
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
