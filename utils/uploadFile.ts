import { getStorage, ref, uploadString } from 'firebase/storage'
import { UploadMetadata } from 'firebase/storage'

const storage = getStorage()
const storageRef = ref(storage, 'some-child')

// 'file' comes from the Blob or File API
const uploadPhotoToFirebase = (
  file: Blob | Uint8Array | ArrayBuffer,
  metadata?: UploadMetadata | undefined
) =>
  uploadString(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!')
  })

export { uploadPhotoToFirebase }
