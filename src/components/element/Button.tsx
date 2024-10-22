
type ButtonProps = {
  type: "button" | "submit" | undefined;
  children: React.ReactNode;
  onClick?: () => void;

}


function Button( props: ButtonProps) {

  return (
    <>
      <button type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
    </>
  )
}

export default Button
