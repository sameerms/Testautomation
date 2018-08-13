import { ISerialization } from './iserialization';
import { SqlToolsServiceClient } from 'extensions-modules';
import * as data from 'data';
import { LanguageClient } from 'dataprotocol-client';
/**
 * Implements serializer for query results
 */
export declare class Serialization implements ISerialization {
    private _client;
    private _languageClient;
    constructor(_client?: SqlToolsServiceClient, _languageClient?: LanguageClient);
    /**
     * Saves results as a specified path
     *
     * @param {string} credentialId the ID uniquely identifying this credential
     * @returns {Promise<ISaveResultsInfo>} Promise that resolved to the credential, or undefined if not found
     */
    saveAs(saveFormat: string, savePath: string, results: string, appendToFile: boolean): Promise<data.SaveResultRequestResult>;
}
