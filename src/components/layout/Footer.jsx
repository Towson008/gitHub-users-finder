import {FaGithub} from "react-icons/fa";

function Footer() {
    const footerYear =  new Date().getFullYear();
    return (
        <footer className='footer p-5 bg-gray-700 text-primary-content 
        footer-center'>
            <div className="">
                <FaGithub className="text-2xl"/>
                <p>Copyright &copy: {footerYear} All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer