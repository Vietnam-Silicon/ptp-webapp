const Index = (props: any) => {
  return (
    <button {...props}>{props.children || props.text}</button>
  )
}

export default Index;
