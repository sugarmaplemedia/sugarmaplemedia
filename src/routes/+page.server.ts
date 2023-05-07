import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { SENDGRID_API_KEY } from '$env/static/private'
import * as sgMail from '@sendgrid/mail'
sgMail.setApiKey(SENDGRID_API_KEY)

type Missing = {
    name?: boolean,
    email?: boolean,
    services?: boolean
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        console.log(data);
        
        let missing: Missing = {}

        const name = data.get('name')
        if (name?.toString().length == 0) missing.name = true

        const email = data.get('email')
        if (email?.toString().length == 0) missing.email = true

        let services = data.get('services')
        if (services?.toString().length == 0) missing.services = true

        let message = data.get('message')?.toString()

        if (Object.keys(missing).length > 0) {
            return fail(400, missing)
        }

        // TODO: Get services reporting properly
        const msg = {
            to: 'harrison@sm.media', // Change to your recipient
            from: 'noreply@sm.media', // Change to your verified sender
            subject: 'New Contact Form Submission',
            html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Services:</b> ${services}<br><br><b>Message:</b><br>${message}`,
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