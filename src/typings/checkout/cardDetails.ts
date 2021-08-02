/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class CardDetails {
    'cupsecureplus_smscode'?: string;
    /**
    * The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'cvc'?: string;
    /**
    * The encrypted card number.
    */
    'encryptedCardNumber': string;
    /**
    * The encrypted card expiry month.
    */
    'encryptedExpiryMonth': string;
    /**
    * The encrypted card expiry year.
    */
    'encryptedExpiryYear': string;
    /**
    * The encrypted card verification code.
    */
    'encryptedSecurityCode'?: string;
    /**
    * The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryMonth'?: string;
    /**
    * The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryYear'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: CardDetails.FundingSourceEnum;
    /**
    * The name of the card holder.
    */
    'holderName'?: string;
    /**
    * The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'number'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India.
    */
    'shopperNotificationReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * Version of the 3D Secure 2 mobile SDK.
    */
    'threeDS2SdkVersion'?: string;
    /**
    * Default payment method details. Common for scheme payment methods, and for simple payment method details.
    */
    'type'?: CardDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cupsecureplus_smscode",
            "baseName": "cupsecureplus.smscode",
            "type": "string"
        },
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string"
        },
        {
            "name": "encryptedCardNumber",
            "baseName": "encryptedCardNumber",
            "type": "string"
        },
        {
            "name": "encryptedExpiryMonth",
            "baseName": "encryptedExpiryMonth",
            "type": "string"
        },
        {
            "name": "encryptedExpiryYear",
            "baseName": "encryptedExpiryYear",
            "type": "string"
        },
        {
            "name": "encryptedSecurityCode",
            "baseName": "encryptedSecurityCode",
            "type": "string"
        },
        {
            "name": "expiryMonth",
            "baseName": "expiryMonth",
            "type": "string"
        },
        {
            "name": "expiryYear",
            "baseName": "expiryYear",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "CardDetails.FundingSourceEnum"
        },
        {
            "name": "holderName",
            "baseName": "holderName",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "shopperNotificationReference",
            "baseName": "shopperNotificationReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "threeDS2SdkVersion",
            "baseName": "threeDS2SdkVersion",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CardDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CardDetails.attributeTypeMap;
    }
}

export namespace CardDetails {
    export enum FundingSourceEnum {
        Debit = <any> 'debit'
    }
    export enum TypeEnum {
        Scheme = <any> 'scheme',
        NetworkToken = <any> 'networkToken',
        Giftcard = <any> 'giftcard',
        Alliancedata = <any> 'alliancedata',
        Card = <any> 'card',
        Moneybookers = <any> 'moneybookers',
        AlipayHk = <any> 'alipay_hk',
        AlipayHkWap = <any> 'alipay_hk_wap',
        AlipayHkWeb = <any> 'alipay_hk_web',
        AlipayWap = <any> 'alipay_wap',
        KcpNaverpay = <any> 'kcp_naverpay',
        Upi = <any> 'upi',
        PrimeiropayBoleto = <any> 'primeiropay_boleto',
        GopayWallet = <any> 'gopay_wallet',
        Poli = <any> 'poli',
        Mada = <any> 'mada',
        Naps = <any> 'naps',
        Benefit = <any> 'benefit',
        Knet = <any> 'knet',
        Fawry = <any> 'fawry',
        Omannet = <any> 'omannet'
    }
}
