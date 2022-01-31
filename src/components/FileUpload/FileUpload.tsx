import { DropzoneProps, useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import { IStackTokens, Stack, ThemeProvider } from '@fluentui/react';

const stackTokens: IStackTokens = { childrenGap: 10 };

type FileUploadProps<T> = {
  handleUpload: (files: Array<T>) => void;
  value?: Array<T>;
};

const FileUpload = <T extends { name: string; size: number }>({
  value,
  accept,
  handleUpload,
}: FileUploadProps<T> & DropzoneProps): JSX.Element => {
  const onDrop = useCallback((acceptedFiles) => {
    try {
      handleUpload(acceptedFiles);
    } catch (e) {
      alert(e.toString());
    }
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept,
  });

  const files: Array<T | File> = value || acceptedFiles || null;

  // TODO: remove style prop
  return (
    <ThemeProvider>
      <Stack tokens={stackTokens}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Перенесите файлы в это поле или кликните для выбора файлов</p>
        </div>
        {Boolean(files?.length) && (
          <Stack tokens={stackTokens}>
            {files.map((file) => (
              <div key={file.name}>
                <span>{file.name}</span>
                <span> | </span>
                <span>{bitsToKBytes(file.size)} Kb</span>
              </div>
            ))}
          </Stack>
        )}
      </Stack>
    </ThemeProvider>
  );
};

// TODO: move to utils
const bitsToKBytes = (bitSize: number): number => {
  const bitsInByte = 1024;

  return Math.round(bitSize / bitsInByte);
};

export default FileUpload;
