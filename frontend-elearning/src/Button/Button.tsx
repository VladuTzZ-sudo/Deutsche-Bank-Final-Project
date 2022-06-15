import './Button.css';

type Props = {
    text:string;
    func:any;
}

export default function Button(props: Props) {
  return (
    <button  onClick={props.func} className="btn">{!props.text?"Nimic!":props.text}</button>
  )
}
