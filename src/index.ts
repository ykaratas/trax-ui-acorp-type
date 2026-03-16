export const TX_TYPES = [
    'DEPOSIT',
    'WITHDRAWAL',
    'TRANSFER',
    'UNSET',
    'CRYPTO_DEPOSIT',
    'CRYPTO_WITHDRAWAL',
    'CRYPTO_TRANSFER',
    'CRYPTO_SWAP',
    'LOGIN',
] as const;
export type TxType = (typeof TX_TYPES)[number];

export const SOURCE_TRANSACTION_TYPES = [
    'DONUSTURME',
    'FIAT_CEKME',
    'FIAT_YATIRMA',
    'KRIPTO_CEKME',
    'KRIPTO_YATIRMA',
    'PLATFORM_ICI_TRANSFER',
    'SPOT_AL',
    'SPOT_SAT',
] as const;
export type SourceTransactionType = (typeof SOURCE_TRANSACTION_TYPES)[number];

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
    'CRYPTO_EXCHANGE',
    'ON_CHAIN',
    'OFF_CHAIN',
    'CUSTODIAL_WALLET',
] as const;
export type TxChannelType = (typeof TX_CHANNEL_TYPES)[number];

export type TxLabelLanguage = 'en' | 'tr';
export type TxLabelDomain = 'txType' | 'txChannelType' | 'sourceTransactionType';

export const TX_TYPE_LABELS: Record<TxLabelLanguage, Record<TxType, string>> = {
    en: {
        DEPOSIT: 'Deposit',
        WITHDRAWAL: 'Withdrawal',
        TRANSFER: 'Transfer',
        UNSET: 'Unset',
        CRYPTO_DEPOSIT: 'Crypto Deposit',
        CRYPTO_WITHDRAWAL: 'Crypto Withdrawal',
        CRYPTO_TRANSFER: 'Crypto Transfer',
        CRYPTO_SWAP: 'Crypto Swap',
        LOGIN: 'Login',
    },
    tr: {
        DEPOSIT: 'Para Yatırma',
        WITHDRAWAL: 'Para Çekme',
        TRANSFER: 'Transfer',
        UNSET: 'Belirtilmemiş',
        CRYPTO_DEPOSIT: 'Kripto Yatırma',
        CRYPTO_WITHDRAWAL: 'Kripto Çekme',
        CRYPTO_TRANSFER: 'Kripto Transfer',
        CRYPTO_SWAP: 'Kripto Takas',
        LOGIN: 'Giriş',
    },
};

export const TX_CHANNEL_TYPE_LABELS: Record<TxLabelLanguage, Record<TxChannelType, string>> = {
    en: {
        CARD_POS: 'Card POS',
        CARD_ECOM: 'Card E-Commerce',
        CARD_ATM: 'Card ATM',
        BANK_TRANSFER: 'Bank Transfer',
        INTERNATIONAL_WIRE: 'International Wire',
        INSTANT_PAYMENT: 'Instant Payment',
        E_WALLET: 'E-Wallet',
        P2P_TRANSFER: 'P2P Transfer',
        CASH_DEPOSIT: 'Cash Deposit',
        CASH_WITHDRAWAL: 'Cash Withdrawal',
        INTERNAL_TRANSFER: 'Internal Transfer',
        REFUND: 'Refund',
        CRYPTO_EXCHANGE: 'Crypto Exchange',
        ON_CHAIN: 'On-Chain',
        OFF_CHAIN: 'Off-Chain',
        CUSTODIAL_WALLET: 'Custodial Wallet',
    },
    tr: {
        CARD_POS: 'Kart POS',
        CARD_ECOM: 'Kart E-Ticaret',
        CARD_ATM: 'Kart ATM',
        BANK_TRANSFER: 'Banka Transferi',
        INTERNATIONAL_WIRE: 'Uluslararası Havale',
        INSTANT_PAYMENT: 'Anlık Ödeme',
        E_WALLET: 'E-Cüzdan',
        P2P_TRANSFER: 'P2P Transfer',
        CASH_DEPOSIT: 'Nakit Yatırma',
        CASH_WITHDRAWAL: 'Nakit Çekme',
        INTERNAL_TRANSFER: 'Dahili Transfer',
        REFUND: 'İade',
        CRYPTO_EXCHANGE: 'Kripto Borsası',
        ON_CHAIN: 'Zincir Üstü',
        OFF_CHAIN: 'Zincir Dışı',
        CUSTODIAL_WALLET: 'Saklamalı Cüzdan',
    },
};

export const SOURCE_TRANSACTION_TYPE_LABELS: Record<TxLabelLanguage, Record<SourceTransactionType, string>> = {
    en: {
        DONUSTURME: 'Conversion',
        FIAT_CEKME: 'Fiat Withdrawal',
        FIAT_YATIRMA: 'Fiat Deposit',
        KRIPTO_CEKME: 'Crypto Withdrawal',
        KRIPTO_YATIRMA: 'Crypto Deposit',
        PLATFORM_ICI_TRANSFER: 'Internal Transfer',
        SPOT_AL: 'Spot Buy',
        SPOT_SAT: 'Spot Sell',
    },
    tr: {
        DONUSTURME: 'Dönüştürme',
        FIAT_CEKME: 'Fiat Çekme',
        FIAT_YATIRMA: 'Fiat Yatırma',
        KRIPTO_CEKME: 'Kripto Çekme',
        KRIPTO_YATIRMA: 'Kripto Yatırma',
        PLATFORM_ICI_TRANSFER: 'Platform İçi Transfer',
        SPOT_AL: 'Spot Al',
        SPOT_SAT: 'Spot Sat',
    },
};

const humanizeEnum = (code: string): string =>
    code
        .toLowerCase()
        .split('_')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

export const getTxTypeLabel = (value: TxType | string | null | undefined, language: TxLabelLanguage): string =>
    value ? TX_TYPE_LABELS[language][value as TxType] ?? humanizeEnum(String(value)) : 'n/a';

export const getTxChannelTypeLabel = (value: TxChannelType | string | null | undefined, language: TxLabelLanguage): string =>
    value ? TX_CHANNEL_TYPE_LABELS[language][value as TxChannelType] ?? humanizeEnum(String(value)) : 'n/a';

export const getSourceTransactionTypeLabel = (
    value: SourceTransactionType | string | null | undefined,
    language: TxLabelLanguage,
): string =>
    value ? SOURCE_TRANSACTION_TYPE_LABELS[language][value as SourceTransactionType] ?? humanizeEnum(String(value)) : 'n/a';

export const getTxEnumLabel = (
    domain: TxLabelDomain,
    value: string | null | undefined,
    language: TxLabelLanguage,
): string => {
    switch (domain) {
        case 'txType':
            return getTxTypeLabel(value, language);
        case 'txChannelType':
            return getTxChannelTypeLabel(value, language);
        case 'sourceTransactionType':
            return getSourceTransactionTypeLabel(value, language);
    }
};

export interface TxKybRelationship {
    corpUserId?: string | null;
    corpName?: string | null;
    corpType?: string | null;
    individualUserId?: string | null;
    role?: string | null;
    sharePercentage?: number | string | null;
    assignedAt?: string | null;
}

export interface Tx {
    id?: string | null;
    clientSystemId: string;
    txType: TxType;
    channel?: TxChannelType | null;
    originatorCustomerId: string;
    originatorFullName?: string | null;
    originatorBirthDate?: string | null;
    originatorEmail?: string | null;
    originatorAccountOpeningDate?: string | null;
    beneficiaryCustomerId?: string | null;
    beneficiaryFullName?: string | null;
    beneficiaryBirthDate?: string | null;
    beneficiaryEmail?: string | null;
    beneficiaryAccountOpeningDate?: string | null;
    amount?: number | string | null;
    currency?: string | null;
    platform?: string | null;
    assetSymbol?: string | null;
    network?: string | null;
    fromAddress?: string | null;
    toAddress?: string | null;
    txHash?: string | null;
    originatorAccountId?: string | null;
    beneficiaryAccountId?: string | null;
    counterpartyId?: string | null;
    status?: string | null;
    originCountry?: string | null;
    destinationCountry?: string | null;
    ipAddress?: string | null;
    deviceId?: string | null;
    riskScore?: number | null;
    txDateTime: number;
    postedAt?: number | null;
    settledAt?: number | null;
    ingestedAt?: number | null;
    sourceTransactionRowId?: string | null;
    sourceTransactionType?: SourceTransactionType | null;
    sourceEventType?: string | null;
    sourceLoginRowId?: string | null;
    amountUsd?: number | string | null;
    amountTry?: number | string | null;
    assetAmount?: number | string | null;
    fiatCurrency?: string | null;
    fiatMethod?: string | null;
    counterpartyType?: string | null;
    counterpartyName?: string | null;
    counterpartyIban?: string | null;
    externalWalletAddress?: string | null;
    tradingPair?: string | null;
    price?: number | string | null;
    baseAmount?: number | string | null;
    quoteAmount?: number | string | null;
    donationDescription?: string | null;
    feeAmount?: number | string | null;
    fxRate?: number | string | null;
    merchantName?: string | null;
    merchantMcc?: string | null;
    scenarioHits?: string[] | null;
    reversalOfTxId?: string | null;
    originatorCustomerType?: string | null;
    originatorNationalId?: string | null;
    originatorFirstName?: string | null;
    originatorLastName?: string | null;
    originatorNationality?: string | null;
    originatorOrganizationName?: string | null;
    originatorTaxNumber?: string | null;
    originatorTaxOffice?: string | null;
    originatorBusinessActivity?: string | null;
    originatorRegistrationEmail?: string | null;
    originatorRegistrationPhone?: string | null;
    originatorActiveEmail?: string | null;
    originatorActivePhone?: string | null;
    originatorContactChanged?: boolean | null;
    originatorResidentialAddress?: string | null;
    originatorAddress?: string | null;
    originatorCity?: string | null;
    originatorPostalCode?: string | null;
    originatorOccupationCode?: string | null;
    originatorOccupationName?: string | null;
    originatorAverageMonthlyIncomeRange?: string | null;
    originatorExpectedVolumeRange?: string | null;
    originatorExpectedCountRange?: string | null;
    originatorLastLoginIp?: string | null;
    originatorLastLoginCountry?: string | null;
    originatorRegistrationDate?: string | null;
    originatorKycDate?: string | null;
    originatorKycLevel?: string | null;
    originatorPepFlag?: boolean | null;
    originatorSanctionedFlag?: boolean | null;
    originatorRiskCategory?: string | null;
    originatorBankName?: string | null;
    originatorIbanActive?: boolean | null;
    beneficiaryCustomerType?: string | null;
    beneficiaryNationalId?: string | null;
    beneficiaryFirstName?: string | null;
    beneficiaryLastName?: string | null;
    beneficiaryNationality?: string | null;
    beneficiaryOrganizationName?: string | null;
    beneficiaryTaxNumber?: string | null;
    beneficiaryTaxOffice?: string | null;
    beneficiaryBusinessActivity?: string | null;
    beneficiaryRegistrationEmail?: string | null;
    beneficiaryRegistrationPhone?: string | null;
    beneficiaryActiveEmail?: string | null;
    beneficiaryActivePhone?: string | null;
    beneficiaryContactChanged?: boolean | null;
    beneficiaryResidentialAddress?: string | null;
    beneficiaryAddress?: string | null;
    beneficiaryCity?: string | null;
    beneficiaryPostalCode?: string | null;
    beneficiaryCountry?: string | null;
    beneficiaryOccupationCode?: string | null;
    beneficiaryOccupationName?: string | null;
    beneficiaryAverageMonthlyIncomeRange?: string | null;
    beneficiaryExpectedVolumeRange?: string | null;
    beneficiaryExpectedCountRange?: string | null;
    beneficiaryLastLoginIp?: string | null;
    beneficiaryLastLoginCountry?: string | null;
    beneficiaryRegistrationDate?: string | null;
    beneficiaryKycDate?: string | null;
    beneficiaryKycLevel?: string | null;
    beneficiaryPepFlag?: boolean | null;
    beneficiarySanctionedFlag?: boolean | null;
    beneficiaryRiskCategory?: string | null;
    latestLoginAt?: number | null;
    loginCountry?: string | null;
    latestLoginSuccessful?: boolean | null;
    kybRelationships?: TxKybRelationship[] | null;
}
