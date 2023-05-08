import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { SENDGRID_API_KEY } from '$env/static/private'
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(SENDGRID_API_KEY)

type Missing = {
    name?: boolean,
    email?: boolean,
    services?: boolean
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        
        let missing: Missing = {}

        const name = data.get('name')
        if (name?.toString().length == 0) missing.name = true

        const email = data.get('email')
        if (email?.toString().length == 0) missing.email = true

        let services: Array<string> = []
        for (let i = 0; i < 5; i++) {
            const service = data.get(`services_${i}`)?.toString()
            if (service && service?.length > 0) services.push(service)
        }
        if (services.length == 0) missing.services = true

        let message = data.get('message')?.toString()

        if (Object.keys(missing).length > 0) {
            return fail(400, missing)
        }        

        const msg = {
            to: 'harrison@sm.media', // Change to your recipient
            from: 'noreply@sm.media', // Change to your verified sender
            subject: 'New Contact Form Submission',
            html: `
                <b>Name:</b> ${name}<br>
                <b>Email:</b> ${email}<br>
                <b>Services:</b> ${services}<br>
                <br>
                <b>Message:</b><br>
                ${message}`,
        }

        sgMail.send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })

        return { success: true }
    }
} satisfies Actions;