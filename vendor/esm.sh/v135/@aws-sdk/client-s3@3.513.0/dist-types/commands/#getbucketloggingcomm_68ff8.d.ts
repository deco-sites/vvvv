import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { GetBucketLoggingOutput, GetBucketLoggingRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketLoggingCommand}.
 */
export interface GetBucketLoggingCommandInput extends GetBucketLoggingRequest {
}
/**
 * @public
 *
 * The output of {@link GetBucketLoggingCommand}.
 */
export interface GetBucketLoggingCommandOutput extends GetBucketLoggingOutput, __MetadataBearer {
}
declare const GetBucketLoggingCommand_base: {
    new (input: GetBucketLoggingCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the logging status of a bucket and the permissions users have to view and modify
 *          that status.</p>
 *          <p>The following operations are related to <code>GetBucketLogging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html">PutBucketLogging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLoggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLoggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketLoggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketLoggingCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLoggingOutput
 * //   LoggingEnabled: { // LoggingEnabled
 * //     TargetBucket: "STRING_VALUE", // required
 * //     TargetGrants: [ // TargetGrants
 * //       { // TargetGrant
 * //         Grantee: { // Grantee
 * //           DisplayName: "STRING_VALUE",
 * //           EmailAddress: "STRING_VALUE",
 * //           ID: "STRING_VALUE",
 * //           URI: "STRING_VALUE",
 * //           Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 * //         },
 * //         Permission: "FULL_CONTROL" || "READ" || "WRITE",
 * //       },
 * //     ],
 * //     TargetPrefix: "STRING_VALUE", // required
 * //     TargetObjectKeyFormat: { // TargetObjectKeyFormat
 * //       SimplePrefix: {},
 * //       PartitionedPrefix: { // PartitionedPrefix
 * //         PartitionDateSource: "EventTime" || "DeliveryTime",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketLoggingCommandInput - {@link GetBucketLoggingCommandInput}
 * @returns {@link GetBucketLoggingCommandOutput}
 * @see {@link GetBucketLoggingCommandInput} for command's `input` shape.
 * @see {@link GetBucketLoggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export declare class GetBucketLoggingCommand extends GetBucketLoggingCommand_base {
}
