import React, { useRef } from "react"
// import ContactUs from  '../components/Contact/ContactUs'
import Contact from "../components/Contact/Contact"
import { json } from "@remix-run/node"
import { useActionData, useLoaderData } from "@remix-run/react"
import emailjs from "@emailjs/browser"

export async function loader({ request }) {
  const ENV = {
    SERVICEID: process.env.EMAILJS_SERVICE_ID,
    TEMPLATEID: process.env.EMAILJS_TEMPLATE_ID,
    PUBLICKEY: process.env.EMAILJS_PUBLIC_KEY,
    CAPTCHAKEY: process.env.GOOGLE_CAPTCHA_SITE_KEY,
    CAPTCHA_SECRET_KEY: process.env.GOOGLE_CAPTCHA_SECRET_KEY,
  }
  return json({ ENV })
}

export async function action({ request }) {
  const formData = await request.formData()
  // const xform = Object.fromEntries(formData);
  const email = String(formData.get("email"))
  const name = String(formData.get("name"))
  const subject = String(formData.get("subject"))
  const message = String(formData.get("message"))
  const captcha = String(formData.get("g-recaptcha-response"))

  const errors = {}

  const templateParams = {
    email,
    name,
    subject,
    message,
  }

  if (!captcha) {
    errors.captcha = "Please use captcha to verify you are not a robot"
  }

  if (!email.includes("@")) {
    errors.email = "Invalid email address"
  }

  if (name.length < 2) {
    errors.name = "Please enter your name"
  }
  if (subject.length < 2) {
    errors.subject = "Please enter a subject"
  }
  if (message.length < 2) {
    errors.message = "Please enter a message"
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors })
  }

  return json({ ok: true })
}

const contact = () => {
  const form = useRef()
  const recaptchaRef = useRef()
  const actionData = useActionData()
  const loaderData = useLoaderData()

  return (
    <main>
      <Contact
        actionData={actionData}
        form={form}
        loaderData={loaderData}
        recaptchaRef={recaptchaRef}
      />
    </main>
  )
}

export default contact
