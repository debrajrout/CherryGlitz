"use server";
// Import the AWS SDK
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Create an S3 client instance
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

// Create a cache using Map
const cache = new Map();

export async function fetchFirstImage(shopUid) {
    const bucketName = 'cherryglitz';
    const prefix = `images/${shopUid}/`; // Folder path in the S3 bucket

    // Check cache first
    if (cache.has(shopUid)) {
        return cache.get(shopUid);
    }

    try {
        // List objects in the specified folder
        const data = await s3Client.send(
            new ListObjectsV2Command({
                Bucket: bucketName,
                Prefix: prefix,
            })
        );

        if (data.Contents && data.Contents.length > 0) {
            const imageUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${data.Contents[0].Key}`;
            cache.set(shopUid, imageUrl); // Cache the result
            return imageUrl;
        } else {
            return null; // No images found
        }
    } catch (error) {
        console.error('Error fetching shop images:', error);
        return null;
    }
}

export async function fetchAllImages(shopUid) {
    const bucketName = 'cherryglitz';
    const prefix = `images/${shopUid}/`; // Folder path in the S3 bucket

    // Check cache first
    if (cache.has(`${shopUid}_all`)) {
        return cache.get(`${shopUid}_all`);
    }

    try {
        // List objects in the specified folder
        const data = await s3Client.send(
            new ListObjectsV2Command({
                Bucket: bucketName,
                Prefix: prefix,
            })
        );

        if (data.Contents && data.Contents.length > 0) {
            const imageUrls = data.Contents.map(item =>
                `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`
            );
            cache.set(`${shopUid}_all`, imageUrls); // Cache the result
            return imageUrls;
        } else {
            return []; // No images found
        }
    } catch (error) {
        console.error('Error fetching shop images:', error);
        return [];
    }
}
