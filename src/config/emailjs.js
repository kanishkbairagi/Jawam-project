import emailjs from '@emailjs/browser'

export const EMAILJS_SERVICE_ID = 'service_nxaukhv'
export const EMAILJS_TEMPLATE_ID = 'template_pc7uh1p'
export const EMAILJS_CONTACT_TEMPLATE_ID = 'template_dv3zuqh'
export const EMAILJS_PUBLIC_KEY = 'ZsgPJ4Y5L7dWqRzmT'

const UNIVERSAL_TEMPLATE_DEFAULTS = {
  form_type: '',
  full_name: '',
  email: '',
  phone: '',
  company_name: '',
  message: '',
  subject: '',
  mobile: '',
  job_title: '',
  current_employer: '',
  experience: '',
  resume_name: '',
  resume_attachment: '',
  resources_needed: '',
  project_duration: '',
  technology: '',
  team_size: '',
  project_type: '',
  project_description: '',
  consultation_date: '',
  consultation_time: '',
  country: '',
  city: '',
  service: '',
  budget: '',
  timeline: '',
  existing_website: '',
  reply_to: '',
}

const safeString = (value) => {
  if (value == null) return ''
  return String(value)
}

export function buildUniversalTemplateParams(overrides = {}) {
  const params = { ...UNIVERSAL_TEMPLATE_DEFAULTS }

  for (const [key, value] of Object.entries(overrides)) {
    params[key] = safeString(value)
  }

  return params
}

export async function sendUniversalEmail(overrides = {}) {
  const templateParams = buildUniversalTemplateParams(overrides)

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  )
}
