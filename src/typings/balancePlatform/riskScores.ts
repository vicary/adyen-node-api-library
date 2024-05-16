/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RiskScores {
    /**
    * Transaction risk score provided by Mastercard. Values provided by Mastercard range between 0 (lowest risk) to 998 (highest risk).
    */
    'mastercard'?: number;
    /**
    * Transaction risk score provided by Visa. Values provided by Visa range between 01 (lowest risk) to 99 (highest risk).
    */
    'visa'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mastercard",
            "baseName": "mastercard",
            "type": "number"
        },
        {
            "name": "visa",
            "baseName": "visa",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RiskScores.attributeTypeMap;
    }
}

