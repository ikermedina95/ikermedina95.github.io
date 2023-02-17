const Title = props => {
  const HtmlTag = props.level ? `h${props.level}` : 'h2';

  return (
    <HtmlTag id={ props.id } className={ props.class }>{ props.content }</HtmlTag>
  )
}

export default Title;