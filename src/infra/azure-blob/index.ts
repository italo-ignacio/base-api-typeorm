// import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
// import { defaultFolder, deleteFiles } from '@main/utils';
// import { env } from '@main/config';

// const accountName = env.AZ_BLOB_ACCOUNT_NAME;
// const accountKey = env.AZ_BLOB_ACCOUNT_KEY;
// const azureUrl = env.AZ_BLOB_URL;

// const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
// const blobServiceClient = new BlobServiceClient(azureUrl, sharedKeyCredential);

// interface uploadFileToAzureProps {
//   azurePath: string;
//   fileName?: string;
//   filePath?: string;
//   containerName: string;
// }

// export const uploadFileToAzure = async ({
//   azurePath,
//   containerName,
//   fileName,
//   filePath
// }: uploadFileToAzureProps): Promise<string | null> => {
//   try {
//     const containerClient = blobServiceClient.getContainerClient(containerName);
//     const blockBlobClient = containerClient.getBlockBlobClient(
//       azurePath.replace(`${azureUrl}${containerName}/`, '')
//     );

//     const options = { blobHTTPHeaders: { blobContentType: 'text/plain; charset=utf-8' } };

//     let path = '';

//     if (typeof fileName === 'string') path = defaultFolder(fileName);
//     else if (typeof filePath === 'string') path = filePath;

//     await blockBlobClient.uploadFile(path, options);

//     if (typeof fileName === 'string') deleteFiles([fileName]);

//     return blockBlobClient.url;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
