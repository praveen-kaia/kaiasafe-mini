const { S3, GetObjectCommand } = require("@aws-sdk/client-s3");
const { fromEnv } = require("@aws-sdk/credential-providers");
const { getType } = require("mime");
const { v4: uuidv4 } = require("uuid");
const { isDevelopment } = require("../utils/common.util");

let S3Helper = class S3Helper {
  static __instance;
  __bucket;
  __s3;

  constructor() {
    this.__bucket = process.env.AWS_S3_BUCKET;
    const configs = { region: process.env.AWS_REGION };
    if (isDevelopment()) {
      configs.credentials = fromEnv();
    }
    this.__s3 = new S3(configs);
  }

  static getInstance() {
    if (!S3Helper.__instance) {
      S3Helper.__instance = new S3Helper();
    }
    return S3Helper.__instance;
  }

  async upload(name, file, folder) {
    const ext = name.substring(name.lastIndexOf("."));
    const uuid = uuidv4();
    const key = `${folder ? folder + "/" : ""}` + uuid + ext;

    await this.__s3.putObject({
      Bucket: this.__bucket,
      Key: key,
      Body: file,
      // ACL: "public-read",
      ContentType: getType(name),
    });

    return key;
  }

  async delete(path) {
    await this.__s3.deleteObject({ Bucket: this.__bucket, Key: path });
  }
};

exports.S3Helper = S3Helper;
