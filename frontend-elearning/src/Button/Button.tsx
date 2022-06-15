import './Button.css';

type Props = {
  text: string;
  func: any;
  type?: string;
}

export default function Button(props: Props) {
  switch (props.type) {
    case '0':
      return (
        <button onClick={props.func} className="btn">{!props.text ? "Nimic!" : props.text}</button>
      )
    case '1':
      return (
        <button onClick={props.func} className="btn2">{!props.text ? "Nimic!" : props.text}</button>
      )
    default:
      return (
        <button onClick={props.func} className="btn">{!props.text ? "Nimic!" : props.text}</button>
      )
  }
}
