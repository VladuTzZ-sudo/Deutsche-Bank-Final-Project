import {
  Dispatch,
  DragEvent,
  DragEventHandler,
  FC,
  SetStateAction,
  useRef,
  useState,
} from "react";
import styles from "./DragFiles.module.css";

interface DragFilesProps {
  onDragEnter?: DragEventHandler;
  onDragLeave?: DragEventHandler;
  onDragOver?: DragEventHandler;
  onDrop?: DragEventHandler;
  className?: string;
}

const DragFiles: FC<DragFilesProps> = (props) => {
  const [isDragging, setIsDragging]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  const overlayRef = useRef(null);

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
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log(e.dataTransfer.files);
      // e.dataTransfer.clearData();
    }
  };

  return (
    <div
      className={`${styles["container"]} ${props.className}`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {isDragging && <div className={styles["overlay"]} ref={overlayRef}></div>}
    </div>
  );
};

export default DragFiles;
