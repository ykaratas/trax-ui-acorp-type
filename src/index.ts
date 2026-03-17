export const TX_TYPES = [
    'CRYPTO_DEPOSIT',
    'CRYPTO_WITHDRAWAL',
    'FIAT_DEPOSIT',
    'FIAT_WITHDRAWAL',
    'INTERNAL_TRANSFER',
    'SPOT_BUY',
    'SPOT_SELL',
    'CONVERSION',
] as const;
export type TxType = (typeof TX_TYPES)[number];

export const TX_CHANNEL_TYPES = [
    'CARD_POS',
    'CARD_ECOM',
    'CARD_ATM',
    'BANK_TRANSFER',
    'INSTANT_PAYMENT',
    'P2P_TRANSFER',
    'FAST',
    'EFT',
    'HAVALE',
    'KART',
    'SWIFT',
] as const;
export type TxChannelType = (typeof TX_CHANNEL_TYPES)[number];

export const BENEFICIARY_TYPES = [
    'PLATFORM_CUSTOMER',
    'EXTERNAL_WALLET',
    'EXTERNAL_BANK_COUNTERPARTY',
    'UNKNOWN_COUNTERPARTY',
] as const;
export type BeneficiaryType = (typeof BENEFICIARY_TYPES)[number];

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
    platform?: string | null;
    assetSymbol?: string | null;
    network?: string | null;
    fromAddress?: string | null;
    toAddress?: string | null;
    txHash?: string | null;
    originatorAccountId?: string | null;
    beneficiaryAccountId?: string | null;
    beneficiaryType?: BeneficiaryType | null;
    txDateTime?: number;
    amount?: number | null;
    currency?: string | null;
    status?: string | null;
    originCountry?: string | null;
    destinationCountry?: string | null;
    ipAddress?: string | null;
    deviceId?: string | null;
    riskScore?: number | null;
    postedAt?: number | null;
    settledAt?: number | null;
    ingestedAt?: number | null;
    transactionAsset?: string | null;
    amountUsd?: number | null;
    amountTry?: number | null;
    assetAmount?: number | null;
    fiatCurrency?: string | null;
    fiatMethod?: TxChannelType | null;
    externalWalletAddress?: string | null;
    tradingPair?: string | null;
    price?: number | null;
    baseAmount?: number | null;
    quoteAmount?: number | null;
    remittanceDescription?: string | null;
    beneficiaryNameSource?: string | null;
}

export type TxDetailSection =
    | 'identifiers'
    | 'originator'
    | 'beneficiary'
    | 'transaction'
    | 'timing'
    | 'risk';

export type TxDetailFormat =
    | 'text'
    | 'id'
    | 'number'
    | 'money'
    | 'date'
    | 'datetime'
    | 'datetimeEpoch'
    | 'enum';

export interface TxDetailDescriptor {
    field: keyof Tx;
    section: TxDetailSection;
    label: string;
    translationKey?: string;
    sectionLabel: string;
    sectionTranslationKey?: string;
    format?: TxDetailFormat;
    enumDomain?: 'txType' | 'txChannelType';
    unitField?: keyof Tx;
    precision?: number;
}

export const TX_DETAIL_FIELDS: TxDetailDescriptor[] = [
    {
        field: 'clientSystemId',
        section: 'identifiers',
        label: 'Client Tx',
        translationKey: 'common.clientTx',
        sectionLabel: 'Identifiers',
        format: 'id',
    },
    {
        field: 'id',
        section: 'identifiers',
        label: 'Internal Tx ID',
        sectionLabel: 'Identifiers',
        format: 'id',
    },
    {
        field: 'txHash',
        section: 'identifiers',
        label: 'Tx hash',
        translationKey: 'customerProfiles.network.detail.txHash',
        sectionLabel: 'Identifiers',
        format: 'id',
    },
    {
        field: 'originatorCustomerId',
        section: 'originator',
        label: 'Customer ID',
        translationKey: 'runs.customerId',
        sectionLabel: 'Originator',
        format: 'id',
    },
    {
        field: 'originatorAccountId',
        section: 'originator',
        label: 'Account ID',
        translationKey: 'runs.accountId',
        sectionLabel: 'Originator',
        format: 'id',
    },
    {
        field: 'originatorFullName',
        section: 'originator',
        label: 'Full name',
        translationKey: 'common.fullName',
        sectionLabel: 'Originator',
    },
    {
        field: 'originatorBirthDate',
        section: 'originator',
        label: 'Birth date',
        translationKey: 'common.birthDate',
        sectionLabel: 'Originator',
        format: 'date',
    },
    {
        field: 'originatorEmail',
        section: 'originator',
        label: 'Email',
        translationKey: 'common.email',
        sectionLabel: 'Originator',
    },
    {
        field: 'originatorAccountOpeningDate',
        section: 'originator',
        label: 'Account opening date',
        translationKey: 'common.accountOpeningDate',
        sectionLabel: 'Originator',
        format: 'date',
    },
    {
        field: 'beneficiaryCustomerId',
        section: 'beneficiary',
        label: 'Customer ID',
        translationKey: 'runs.customerId',
        sectionLabel: 'Beneficiary',
        format: 'id',
    },
    {
        field: 'beneficiaryAccountId',
        section: 'beneficiary',
        label: 'Account ID',
        translationKey: 'runs.accountId',
        sectionLabel: 'Beneficiary',
        format: 'id',
    },
    {
        field: 'beneficiaryFullName',
        section: 'beneficiary',
        label: 'Full name',
        translationKey: 'common.fullName',
        sectionLabel: 'Beneficiary',
    },
    {
        field: 'beneficiaryBirthDate',
        section: 'beneficiary',
        label: 'Birth date',
        translationKey: 'common.birthDate',
        sectionLabel: 'Beneficiary',
        format: 'date',
    },
    {
        field: 'beneficiaryEmail',
        section: 'beneficiary',
        label: 'Email',
        translationKey: 'common.email',
        sectionLabel: 'Beneficiary',
    },
    {
        field: 'beneficiaryAccountOpeningDate',
        section: 'beneficiary',
        label: 'Account opening date',
        translationKey: 'common.accountOpeningDate',
        sectionLabel: 'Beneficiary',
        format: 'date',
    },
    {
        field: 'beneficiaryType',
        section: 'beneficiary',
        label: 'Beneficiary type',
        sectionLabel: 'Beneficiary',
    },
    {
        field: 'beneficiaryNameSource',
        section: 'beneficiary',
        label: 'Beneficiary name source',
        sectionLabel: 'Beneficiary',
    },
    {
        field: 'txType',
        section: 'transaction',
        label: 'Tx type',
        translationKey: 'runs.txType',
        sectionLabel: 'Transaction',
        format: 'enum',
        enumDomain: 'txType',
    },
    {
        field: 'channel',
        section: 'transaction',
        label: 'Channel',
        translationKey: 'runs.channel',
        sectionLabel: 'Transaction',
        format: 'enum',
        enumDomain: 'txChannelType',
    },
    {
        field: 'amount',
        section: 'transaction',
        label: 'Amount',
        translationKey: 'runs.amount',
        sectionLabel: 'Transaction',
        format: 'money',
        unitField: 'currency',
        precision: 2,
    },
    {
        field: 'assetAmount',
        section: 'transaction',
        label: 'Asset amount',
        sectionLabel: 'Transaction',
        format: 'money',
        unitField: 'assetSymbol',
        precision: 8,
    },
    {
        field: 'amountUsd',
        section: 'transaction',
        label: 'Amount (USD)',
        sectionLabel: 'Transaction',
        format: 'money',
        precision: 2,
    },
    {
        field: 'amountTry',
        section: 'transaction',
        label: 'Amount (TRY)',
        sectionLabel: 'Transaction',
        format: 'money',
        precision: 2,
    },
    {
        field: 'price',
        section: 'transaction',
        label: 'Price',
        sectionLabel: 'Transaction',
        format: 'number',
        precision: 8,
    },
    {
        field: 'baseAmount',
        section: 'transaction',
        label: 'Base amount',
        sectionLabel: 'Transaction',
        format: 'number',
        precision: 8,
    },
    {
        field: 'quoteAmount',
        section: 'transaction',
        label: 'Quote amount',
        sectionLabel: 'Transaction',
        format: 'number',
        precision: 8,
    },
    {
        field: 'currency',
        section: 'transaction',
        label: 'Currency',
        sectionLabel: 'Transaction',
    },
    {
        field: 'assetSymbol',
        section: 'transaction',
        label: 'Asset symbol',
        sectionLabel: 'Transaction',
    },
    {
        field: 'transactionAsset',
        section: 'transaction',
        label: 'Transaction asset',
        sectionLabel: 'Transaction',
    },
    {
        field: 'fiatCurrency',
        section: 'transaction',
        label: 'Fiat currency',
        sectionLabel: 'Transaction',
    },
    {
        field: 'fiatMethod',
        section: 'transaction',
        label: 'Fiat method',
        sectionLabel: 'Transaction',
        format: 'enum',
        enumDomain: 'txChannelType',
    },
    {
        field: 'platform',
        section: 'transaction',
        label: 'Platform',
        translationKey: 'customerProfiles.network.detail.platform',
        sectionLabel: 'Transaction',
    },
    {
        field: 'network',
        section: 'transaction',
        label: 'Network',
        translationKey: 'customerProfiles.network.detail.network',
        sectionLabel: 'Transaction',
    },
    {
        field: 'tradingPair',
        section: 'transaction',
        label: 'Trading pair',
        sectionLabel: 'Transaction',
    },
    {
        field: 'fromAddress',
        section: 'transaction',
        label: 'From address',
        sectionLabel: 'Transaction',
    },
    {
        field: 'toAddress',
        section: 'transaction',
        label: 'To address',
        sectionLabel: 'Transaction',
    },
    {
        field: 'externalWalletAddress',
        section: 'transaction',
        label: 'External wallet address',
        sectionLabel: 'Transaction',
    },
    {
        field: 'remittanceDescription',
        section: 'transaction',
        label: 'Remittance description',
        sectionLabel: 'Transaction',
    },
    {
        field: 'txDateTime',
        section: 'timing',
        label: 'Tx time',
        translationKey: 'customerProfiles.network.detail.txDateTime',
        sectionLabel: 'Timing',
        format: 'datetimeEpoch',
    },
    {
        field: 'postedAt',
        section: 'timing',
        label: 'Posted at',
        sectionLabel: 'Timing',
        format: 'datetimeEpoch',
    },
    {
        field: 'settledAt',
        section: 'timing',
        label: 'Settled at',
        sectionLabel: 'Timing',
        format: 'datetimeEpoch',
    },
    {
        field: 'ingestedAt',
        section: 'timing',
        label: 'Ingested at',
        sectionLabel: 'Timing',
        format: 'datetimeEpoch',
    },
    {
        field: 'status',
        section: 'risk',
        label: 'Status',
        translationKey: 'customerProfiles.network.detail.status',
        sectionLabel: 'Risk and context',
    },
    {
        field: 'riskScore',
        section: 'risk',
        label: 'Risk score',
        sectionLabel: 'Risk and context',
        format: 'number',
        precision: 0,
    },
    {
        field: 'originCountry',
        section: 'risk',
        label: 'Origin country',
        translationKey: 'customerProfiles.network.detail.originCountry',
        sectionLabel: 'Risk and context',
    },
    {
        field: 'destinationCountry',
        section: 'risk',
        label: 'Destination country',
        translationKey: 'runs.destinationCountry',
        sectionLabel: 'Risk and context',
    },
    {
        field: 'ipAddress',
        section: 'risk',
        label: 'IP address',
        translationKey: 'customerProfiles.network.detail.ipAddresses',
        sectionLabel: 'Risk and context',
    },
    {
        field: 'deviceId',
        section: 'risk',
        label: 'Device ID',
        translationKey: 'customerProfiles.network.detail.deviceIds',
        sectionLabel: 'Risk and context',
    },
];
