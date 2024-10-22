
type InputProps = {
  type: | 'text' | 'password' | 'number' | 'date' 
  placeholder: string
  value?: string
  name?: string
}

function Input(props : InputProps): JSX.Element {
  return (
   <input 
    type={props.type} 
    placeholder={props.placeholder} 
    value={props.value} 
    name={props.name} 
    />
  )
}

export default Input
