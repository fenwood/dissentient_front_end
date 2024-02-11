import React, { useEffect, useState, useRef } from 'react'
import { Form  } from "@remix-run/react";
import './contact.css'
import { getToast } from 'remix-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { json } from "@remix-run/node"; 
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { GoogleReCaptchaProvider, GoogleReCaptchaCheckbox } from 'react-google-recaptcha-ultimate';




const Contact = ({ actionData, form, loaderData, recaptchaRef }) => {

    const [state, setState] = useState({})
    const [recaptchaValue, setRecaptchaValue] = useState('')


    console.log("State: ", state)

    const notify = () => {
        toast.success('🦄 Success!');
    }

    useEffect(() => {
        const fetchData = async () => {
            if (actionData?.ok) {
                // setState({ message: 'Submitting', class: 'text-green'})
                // let cap = setTimeout(handleRecaptchaSubmit, 2000)
                console.log("--- Sending data")
                // handleRecaptchaSubmit()
                //   .then(() => sendFormData())
                //   .then(() => finishData())
/*                
                handleRecaptchaSubmit().then(() => {
                    console.log("State class", state.class)
                    if (state.class === 'text-green') {
                        console.log("---calling sendFormData...")
                        sendFormData();
                    }
                })
*/

                try {
                    const captchaResponse = await validateReCaptcha();
                    console.log("Captcha Response: ", captchaResponse)
                    if (!captchaResponse.ok) return;
                    const emailResponse = await sendEmailJSForm();
                    if (!emailResponse.ok) return;

                    setTimeout(finishData, 1000);

                    // if (captchaResponse?.ok) {
                    //     console.log("Captchat good to go")
                    //     const emailResponse = await sendEmailJSForm();
                    //     console.log("Email Response: ", emailResponse)
                    //     if (emailResponse?.ok) {
                    //         console.log("Email Sent")
                    //         setTimeout(finishData, 1000);
                    //     }
                    // }
                } catch (error) {
                    console.error("An error occured: ",error)
                }

                
                


                
                // if (state.class === 'text-green') {
                //     await sendFormData();
                // }
                // if (state.message === 'Completed') {
                //     setTimeout(finishData, 3000);
                // }
                
                
                console.log("--- After sending")
                
                // setState('Captcha')
                // setTimeout(handleRecaptchaSubmit, 2000)
                
                // setTimeout(sendFormData, 3000);
                
            }
            if (actionData?.errors) {
                setState({ message: 'Error with form', class: 'text-red'})
            }
        }
        fetchData();
    }, [actionData])

    async function sendEmailJSForm() {
        setState({ message: "Submitting form", class: 'text-green'})
        try {
            const result = await emailjs.sendForm(loaderData.ENV.SERVICEID, loaderData.ENV.TEMPLATEID, form.current, loaderData.ENV.PUBLICKEY)
                console.log("Res: ", result.text);
                setState({ message: 'Completed', class: 'text-green'})
                return { ok: true };
        } catch (err) {
            console.log("Error with sendForm: ", err)
            setState({ message: "Error with submitting form", class: 'text-red' })
            return { ok: false, error: err.text}
            // return json({error: err.text}, {status: err.status})
        }

    }

    const sendFormData = () => {
        console.log("===sendData function")
        setState({ message: "Submitting form", class: 'text-green'})
            try {
                emailjs.sendForm(loaderData.ENV.SERVICEID, loaderData.ENV.TEMPLATEID, form.current, loaderData.ENV.PUBLICKEY)
                .then((result) => {
                    console.log("Res: ", result.text);
                    setState({ message: 'Completed', class: 'text-green'})
                }, (error) => {
                    console.log("Res Err: ", error);
                    setState({ message: `'Error submitting message`, class: 'text-red' })
                });
                // return json({success: "Email Sent"}, {status: 200})
                // return json({success: "Email Sent"}, {status: 200})
            } catch (err) {
                console.log("Error with sendForm: ", err)
                setState({ message: "Error with submitting form", class: 'text-red' })
                // return json({error: err.text}, {status: err.status})
            }

    }
    const finishData = () => {
        console.log("Finishing data")
        setState({ message: 'Done', class: 'text-white'} )
    }

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    async function validateReCaptcha() {
        const token = recaptchaRef?.current?.getValue();
        if (token) {
            let valid_token = await verifyToken(token);
            if (valid_token?.success) {
                setState({ message: "Validating Captcha", class: "text-green"})
                // recaptchaRef.current.reset();
                return { ok: true };
                // setState("Hurray!! you have submitted the form");
                // alert("Captcha entered successfuly");
            } else {
                // setError("Sorry!! Token invalid");
                // alert("Token Invalid!");
                setState({ message: "Invalid Captcha Token", class: 'text-red' })
                return { ok: false, error: 'Invalid token'}
            }
        } else {
            setState({ message: "No ReCaptcha", class: 'text-red'});
            return { ok: false, error: 'No recaptcha'}
        }


    }

    / * For Captcha Validation */
    const handleRecaptchaSubmit = async () => {
        const token = recaptchaRef?.current?.getValue();
        const errors = {}
        // recaptchaRef.current.reset();
        if (token) {
            let valid_token = await verifyToken(token);
            if (valid_token?.success) {
                setState({ message: "Validating Captcha", class: "text-green"})
                // recaptchaRef.current.reset();
                // return json({ ok: true });
                // setState("Hurray!! you have submitted the form");
                // alert("Captcha entered successfuly");
            } else {
                // setError("Sorry!! Token invalid");
                // alert("Token Invalid!");
                setState({ message: "Invalid Captcha Token", class: 'text-red' })
            }
        } else {
            setState({ message: "No ReCaptcha", class: 'text-red'});
        }

        if (Object.keys(errors).length > 0) {
            return json({ errors })
          }
    }

    const verifyToken = async (token) => {
        try{
        let response = await axios.post(`http://localhost:4000/verify-token`,{   
        // let response = await axios.post(`http://129.213.56.124:3000/verify-token`,{   
        secret: loaderData.ENV.CAPTCHA_SECRET_KEY,
            token
        },console.log(token));
        return response.data;
        }catch(error){
        console.log("error ",error);
        }
    }

    console.log("Captchat value", recaptchaValue)
    console.log("Form value", form)
    console.log("Action Data", actionData)
    
  return (
    <div className="contact-container">
        <div className="contact-wrapper">
            <div className="contact-row">
                <div className="contact-left">

                    { state.message === 'Done' ? (
                            <div className="completed">
                                <h3>Thank you for your message, we will be in touch soon.</h3>
                                <div className="social-media">
                                    <p><a href="/">Return Home</a></p>
                                </div>
                            </div>
                        ) : (
                            <div className="contact-wrap">
                            <h3>Contact Us</h3>
                            <div id="form-message-warning" className="mb-4"></div>
                            <div id="form-message-success" className="mb-4"></div>
                            <div className="contact-row">
                                <div className="dbox contact-address-text">
                                    <p><span>Email</span></p>
                                    <p>info@wgto.com</p>
                                </div>
                                <div className="dbox contact-address-text">
                                    <p><span>Phone</span></p>
                                    <p>416.555.5555</p>
                                </div>
                            </div>
    
                            <Form method="post" id="contactForm" className="contactForm" name="contactForm" noValidate="novalidate" ref={form} aria-hidden={state.message === "success"} >
                                <div className="contact-row">
                                    <div className="form-group">
                                        <input type="text" className="form-control error" name="name" placeholder="name" aria-invalid="true" autoComplete="on" />
                                        {actionData?.errors?.name ? (
                                            <label id="name-error" className="error" htmlFor="name">{actionData.errors.name}</label>
                                        ): null}
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control error" name="email" placeholder="email" aria-invalid="true" autoComplete="on" />
                                        {actionData?.errors?.email ? (
                                            <label id="email-error" className="error" htmlFor="email">{actionData.errors.email}</label>
                                        ): null}
    
                                        
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control error" name="subject" placeholder="subject" aria-invalid="true" />
                                        {actionData?.errors?.subject ? (
                                            <label id="subject-error" className="error" htmlFor="subject">{actionData.errors.subject}</label>
                                        ): null}
    
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" className="form-control error" id="message" cols="30" rows="4" placeholder="Enter your message here" aria-invalid="true" />
                                        {actionData?.errors?.subject ? (
                                            <label id="message-error" className="error" htmlFor="message">{actionData.errors.message}</label>
                                        ): null}
                                    </div>
                                    <div className="form-group">
                                       
    
                                        <input type="submit" value="Send Message" className="btn btn-primary" disabled={state.message === 'Completed'} />
                                        
                                    </div>
                                    <div className="form-group">
                                    <ReCAPTCHA sitekey={loaderData?.ENV?.CAPTCHAKEY} ref={recaptchaRef} name="captcha" id="captcha" />
                                    {/* <label id="captcha-error" className="error" htmlFor="captcha">{actionData?.errors?.captcha}</label> */}
    
                                    </div>
                                </div>
    
                            </Form>
                            <div aria-hidden={state.message !== "success"} className="submitting"><p className={state?.class}>{state?.message}</p></div>
    
                            <div className="social-media">
                                <h3>Follow us here</h3>
                                <p>
                                    <a href="#">Facebook</a>
                                    <a href="#">Twitter</a>
                                </p>
                            </div>
                        </div>
                        )
                    }



                </div>
                <div className="contact-right">
                    <div className="info-wrap"></div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
