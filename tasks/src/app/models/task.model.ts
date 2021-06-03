export class Task{

    id?: number;
    title: string;
    description: string;
    dateTimeAdded: string;
    dateTimeDedeadline: string;
    importance: string;
    state: string;
    dateTimeClosedAt: string;
}

export const IMPORTANCE_REF = [
    'low',
    'medium',
    'high'
];

export const STATE_REF = ['open', 'in progress', 'closed'];
