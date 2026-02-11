export const TX_TYPES = ['DEPOSIT', 'WITHDRAWAL', 'TRANSFER', 'UNSET'] as const;
export type TxType = (typeof TX_TYPES)[number];

export const TX_CHANNEL_TYPES = [
    'CARD_POS',
    'CARD_ECOM',
    'CARD_ATM',
    'BANK_TRANSFER',
    'INTERNATIONAL_WIRE',
    'INSTANT_PAYMENT',
    'E_WALLET',
    'P2P_TRANSFER',
    'CASH_DEPOSIT',
    'CASH_WITHDRAWAL',
    'INTERNAL_TRANSFER',
    'REFUND',
] as const;
export type TxChannelType = (typeof TX_CHANNEL_TYPES)[number];

export interface Tx {
    id?: string | null;
    clientSystemId: string;
    txType: TxType;
    channel?: TxChannelType | null;
    customerId: string;
    fullName?: string | null;
    birthDate?: string | null;
    email?: string | null;
    accountOpeningDate?: string | null;
    accountId?: string | null;
    txDateTime?: number;
    data: Record<string, unknown>;
}
