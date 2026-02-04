export type TxType = 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER' | 'UNSET';

export interface Tx {
    id?: number | null;
    clientSystemId: string;
    txType: TxType;
    customerId: string;
    txDateTime?: number;
    data: Record<string, unknown>;
}
