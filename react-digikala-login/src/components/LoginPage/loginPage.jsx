import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginPage.css';
import Button from '../../components/Button';

const IRPhoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const LoginPage = () => {
    const [inputVal , setInputVal] = useState("")
    const [refgexError , setRegexError] = useState('true')
    function handleClick() {
        const inputPhoneRegex = IRPhoneRegex.test(inputVal)
        const inputEmailRegex = emailRegex.test(inputVal)
        if(inputPhoneRegex || inputEmailRegex) {
            console.log('regex test true')
            setRegexError(true)
        }else{
            console.log("regex test false")
            setRegexError(false)
        }
    }
    return(
        <div className='w-100 h-75 main-div d-flex justify-content-center align-itmes-center' dir='rtl'>
            <div className='border rounded d-flex flex-column justify-content-start align-items-center p-4'>
                <div className='w-50 h-auto'>
                    <img className='w-100 h-100 pt-3' src='https://www.digikala.com/statics/img/svg/logo.svg'/>
                </div>
                <h4 className='w-100 mt-4 d-flex login'>ورود | ثبت نام</h4>
                <p className='w-100 mb-0 mt-4 d-flex'>سلام!</p>
                <p className='w-100 mt-0 pt-2 d-flex'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}
                    className='w-100 border rounded input-login'/>
                    <small className={`w-100 regex-error ${refgexError ? 'd-none' : 'd-block'}`}>Regex Error</small>
                    <Button onClick={handleClick} className='mt-4'>ورود</Button>
                    <p className='fs-0-5 mt-4'>
                        ورود شما یه معنای پذیرش 
                        <a href='https://digikala.com'> شرایط دیجیکالا </a>
                        و  
                        <a href='https://digikala.com'>قوانین حریم خصوصی </a>
                        است
                    </p>
            </div>
        </div>
    )
}

export default LoginPage