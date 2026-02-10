export type TxType = 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER' | 'UNSET';

export interface Tx {
    id?: string | null;
    clientSystemId: string;
    txType: TxType;
    customerId: string;
    accountId?: string | null;
    txDateTime?: number;
    data: Record<string, unknown>;
}
