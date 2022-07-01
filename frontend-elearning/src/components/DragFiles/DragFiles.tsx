import {
  Dispatch,
  DragEvent,
  DragEventHandler,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Data from "../../models/Data";
import DataCard from "../DataCard/DataCard";
import styles from "./DragFiles.module.css";
import FileData from "../../models/FileData";

interface DragFilesProps {
  data?: FileData[];
  onDragEnter?: DragEventHandler;
  onDragLeave?: DragEventHandler;
  onDragOver?: DragEventHandler;
  onDrop?: DragEventHandler;
  onFilesSent?: (files: FileList) => void;
  onFileClicked?: (e: any, dataInfo: Data) => void;
  validator?: (file: File) => boolean;
  enableDrop?: boolean;
  className?: string;
}

const DragFiles: FC<DragFilesProps> = (props) => {
  const [isDragging, setIsDragging]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [dataItems, setDataItems] = useState<FileData[]>([]);

  const overlayRef = useRef(null);

  useEffect(() => {
    setDataItems(props.data === undefined ? [] : props.data);
  }, []);

  const onDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.dataTransfer.items &&
      e.dataTransfer.items.length > 0 &&
      e.target !== overlayRef.current
    ) {
      setIsDragging(true);
    }
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === overlayRef.current) {
      setIsDragging(false);
    }
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (props.enableDrop) {
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const files = e.dataTransfer.files;
        const validFiles: FileData[] = [];

        for (let file of files) {
          if (props.validator === undefined ? true : props.validator(file)) {
            const fileSplitted = files[0].name.split(".");
            const extension = fileSplitted[fileSplitted.length - 1];
            validFiles.push({
              name: file.name,
              type: extension,
              date: `${file.lastModified}`,
            });
          }
        }

        if (files.length !== 0) {
          props.onFilesSent?.(files);
        }

        setDataItems((prev: FileData[]) => {
          return [...prev, ...validFiles];
        });
      }
    }
  };

  const uploadCard = {
    title: "Upload Files",
    date: null,
    icon: process.env.PUBLIC_URL + "/assets/data-images/upload.png",
  };

  const files = dataItems.map((file, index) => {
    const folderIcon: string =
      process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png";

    const fileIcon: string =
      process.env.PUBLIC_URL + "/assets/data-images/file-generic-icon.jpg";

    const cardInfo: Data = {
      title: file.name,
      date: new Date(),
      icon: file.type === "" ? folderIcon : fileIcon,
    };

    return (
      <DataCard
        onClick={props.onFileClicked}
        dataInfo={cardInfo}
        className={styles["data__card"]}
        key={index}
      ></DataCard>
    );
  });

  return (
    <div
      className={`${styles["container"]} ${props.className}`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className={`${styles["content"]}`}>
        <div className={styles["data-container"]}>
          {files}
          {props.enableDrop && (
            <DataCard
              dataInfo={uploadCard}
              className={`${styles["data__card"]} ${styles["data__upload"]}`}
            ></DataCard>
          )}
        </div>
      </div>
      {isDragging && props.enableDrop && (
        <div className={styles["overlay"]} ref={overlayRef}></div>
      )}
    </div>
  );
};

export default DragFiles;
