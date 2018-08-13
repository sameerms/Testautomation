import * as data from 'data';
/**
 * Serializer for saving results into a different format
 *
 * @export
 * @interface ISerialization
 */
export interface ISerialization {
    saveAs(saveFormat: string, savePath: string, results: string, appendToFile: boolean): Promise<data.SaveResultRequestResult>;
}
