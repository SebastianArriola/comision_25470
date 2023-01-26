import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {

    return (
        <div className='animate__animated animate__fadeIn'>
            <div className='footer__contenido'>
            <p className='footer__name'>Sebastian Arriola</p>
                <a href='https://www.linkedin.com/in/sebastian-arriola-a9a1b5224/' className='footer__link' target="_blank"><LinkedInIcon style={{width: 30, height: 30, color: "white"}}/></a>
                <a href='https://github.com/SebastianArriola' className='footer__link' target="_blank"><GitHubIcon style={{width: 30, height: 30, color: "white"}}/></a>
                <a href='mailto:arriolasm00@gmail.com?Subject=Contact%20from%20web%20ecommerce' className='footer__link' target="_blank"><EmailIcon style={{width: 30, height: 30, color: "white"}}/></a>
            </div>
        </div>
    )
}

export default Footer