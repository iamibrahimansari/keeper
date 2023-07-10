import {FooterContainer, FooterContent} from './StyledComponents';

export const Footer = () =>{
    const date = new Date();
    return <FooterContainer>
        <FooterContent>
            Copyright &copy; {date.getFullYear()} 
        </FooterContent>
    </FooterContainer>
}