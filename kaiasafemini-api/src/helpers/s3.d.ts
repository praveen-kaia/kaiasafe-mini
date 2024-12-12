import { S3 } from "@aws-sdk/client-s3";
export declare class S3Helper {
  static __instance: S3Helper;
  private readonly __s3: S3;
  private readonly __bucket: string;

  static getInstance(): S3Helper;
  upload(name: string, file: Buffer, folder?: string): Promise<string>;
  delete(path: string): Promise<void>;
}
