"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTxEnumLabel = exports.getSourceTransactionTypeLabel = exports.getTxChannelTypeLabel = exports.getTxTypeLabel = exports.SOURCE_TRANSACTION_TYPE_LABELS = exports.TX_CHANNEL_TYPE_LABELS = exports.TX_TYPE_LABELS = exports.TX_CHANNEL_TYPES = exports.SOURCE_TRANSACTION_TYPES = exports.TX_TYPES = void 0;
exports.TX_TYPES = [
    'DEPOSIT',
    'WITHDRAWAL',
    'TRANSFER',
    'UNSET',
    'CRYPTO_DEPOSIT',
    'CRYPTO_WITHDRAWAL',
    'CRYPTO_TRANSFER',
    'CRYPTO_SWAP',
    'LOGIN',
];
exports.SOURCE_TRANSACTION_TYPES = [
    'DONUSTURME',
    'FIAT_CEKME',
    'FIAT_YATIRMA',
    'KRIPTO_CEKME',
    'KRIPTO_YATIRMA',
    'PLATFORM_ICI_TRANSFER',
    'SPOT_AL',
    'SPOT_SAT',
];
exports.TX_CHANNEL_TYPES = [
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
];
exports.TX_TYPE_LABELS = {
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
exports.TX_CHANNEL_TYPE_LABELS = {
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
exports.SOURCE_TRANSACTION_TYPE_LABELS = {
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
const humanizeEnum = (code) => code
    .toLowerCase()
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
const getTxTypeLabel = (value, language) => { var _a; return value ? (_a = exports.TX_TYPE_LABELS[language][value]) !== null && _a !== void 0 ? _a : humanizeEnum(String(value)) : 'n/a'; };
exports.getTxTypeLabel = getTxTypeLabel;
const getTxChannelTypeLabel = (value, language) => { var _a; return value ? (_a = exports.TX_CHANNEL_TYPE_LABELS[language][value]) !== null && _a !== void 0 ? _a : humanizeEnum(String(value)) : 'n/a'; };
exports.getTxChannelTypeLabel = getTxChannelTypeLabel;
const getSourceTransactionTypeLabel = (value, language) => { var _a; return value ? (_a = exports.SOURCE_TRANSACTION_TYPE_LABELS[language][value]) !== null && _a !== void 0 ? _a : humanizeEnum(String(value)) : 'n/a'; };
exports.getSourceTransactionTypeLabel = getSourceTransactionTypeLabel;
const getTxEnumLabel = (domain, value, language) => {
    switch (domain) {
        case 'txType':
            return (0, exports.getTxTypeLabel)(value, language);
        case 'txChannelType':
            return (0, exports.getTxChannelTypeLabel)(value, language);
        case 'sourceTransactionType':
            return (0, exports.getSourceTransactionTypeLabel)(value, language);
    }
};
exports.getTxEnumLabel = getTxEnumLabel;
