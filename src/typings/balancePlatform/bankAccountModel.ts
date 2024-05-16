/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BankAccountModel {
    /**
    * Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts.   Adyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.
    */
    'formFactor'?: BankAccountModel.FormFactorEnum | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "BankAccountModel.FormFactorEnum | null"
        }    ];

    static getAttributeTypeMap() {
        return BankAccountModel.attributeTypeMap;
    }
}

export namespace BankAccountModel {
    export enum FormFactorEnum {
        Physical = 'physical',
        Unknown = 'unknown',
        Virtual = 'virtual'
    }
}
