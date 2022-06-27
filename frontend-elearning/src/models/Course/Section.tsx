interface Section {
  id?: number;
  title: string;
  description: string;
  onImageClick?: React.MouseEventHandler;
  completed?: boolean;
}

export default Section;
