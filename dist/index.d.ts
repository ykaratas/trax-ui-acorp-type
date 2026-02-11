export declare const TX_TYPES: readonly ["DEPOSIT", "WITHDRAWAL", "TRANSFER", "UNSET"];
export type TxType = (typeof TX_TYPES)[number];
export declare const TX_CHANNEL_TYPES: readonly ["CARD_POS", "CARD_ECOM", "CARD_ATM", "BANK_TRANSFER", "INTERNATIONAL_WIRE", "INSTANT_PAYMENT", "E_WALLET", "P2P_TRANSFER", "CASH_DEPOSIT", "CASH_WITHDRAWAL", "INTERNAL_TRANSFER", "REFUND"];
export type TxChannelType = (typeof TX_CHANNEL_TYPES)[number];
export interface Tx {
    id?: string | null;
    clientSystemId: string;
    txType: TxType;
    channel?: TxChannelType | null;
    customerId: string;
    accountId?: string | null;
    txDateTime?: number;
    data: Record<string, unknown>;
}
