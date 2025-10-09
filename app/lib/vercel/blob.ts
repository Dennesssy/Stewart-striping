/**
 * Vercel Blob Storage Configuration
 * Use for: file uploads, invoices, documents, images
 */
import { put, del, list, head } from '@vercel/blob';

// Upload a file
export async function uploadFile(
  filename: string,
  file: File | Buffer | Blob,
  options?: {
    contentType?: string;
    addRandomSuffix?: boolean;
    cacheControlMaxAge?: number;
  }
) {
  try {
    const blob = await put(filename, file, {
      access: 'public',
      ...options,
    });
    
    return {
      success: true,
      url: blob.url,
      pathname: blob.pathname,
      downloadUrl: blob.downloadUrl,
    };
  } catch (error) {
    console.error('Blob upload error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

// Upload invoice PDF
export async function uploadInvoice(
  invoiceId: string,
  pdfBuffer: Buffer
) {
  return uploadFile(`invoices/${invoiceId}.pdf`, pdfBuffer, {
    contentType: 'application/pdf',
    cacheControlMaxAge: 3600,
  });
}

// Upload user avatar
export async function uploadAvatar(
  userId: string,
  imageFile: File | Buffer
) {
  return uploadFile(`avatars/${userId}`, imageFile, {
    addRandomSuffix: true,
    cacheControlMaxAge: 86400,
  });
}

// Delete a file
export async function deleteFile(url: string) {
  try {
    await del(url);
    return { success: true };
  } catch (error) {
    console.error('Blob delete error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Delete failed',
    };
  }
}

// List files with prefix
export async function listFiles(prefix?: string) {
  try {
    const { blobs } = await list({ prefix });
    return {
      success: true,
      files: blobs,
    };
  } catch (error) {
    console.error('Blob list error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'List failed',
      files: [],
    };
  }
}

// Get file metadata
export async function getFileMetadata(url: string) {
  try {
    const metadata = await head(url);
    return {
      success: true,
      ...metadata,
    };
  } catch (error) {
    console.error('Blob head error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get metadata',
    };
  }
}
