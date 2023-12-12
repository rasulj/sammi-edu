import { FooterProps } from './footer.props'


const Footer = ({ className , ...props}:FooterProps) => {
  return (
    <div  {...props}>Footer</div>
  )
}

export default Footer