import { useState } from 'react'
import { sendUniversalEmail } from '../../../config/emailjs'
import '../hire.css'

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    resourcesNeeded: '',
    projectDuration: '',
    technologyRequired: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Fields capped at 50 characters (all text fields except message)
  const MAX_TEXT_LENGTH = 50
  // Numeric fields (phone, resources needed) capped at 12 digits
  const MAX_DIGITS = 12

  // ==========================================
  // HANDLE INPUT
  // ==========================================
  const handleChange = (e) => {
    const { name, value } = e.target

    let sanitizedValue = value

    // Full name - letters and spaces only, max 50 chars
    if (name === 'fullName') {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, '').slice(0, MAX_TEXT_LENGTH)
    }

    // Company name - max 50 chars
    if (name === 'companyName') {
      sanitizedValue = value.slice(0, MAX_TEXT_LENGTH)
    }

    // Phone - numbers only, max 12 digits
    if (name === 'phoneNumber') {
      sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, MAX_DIGITS)
    }

    // Email - max 50 chars
    if (name === 'emailAddress') {
      sanitizedValue = value.slice(0, MAX_TEXT_LENGTH)
    }

    // Resources - numbers only, max 12 digits
    if (name === 'resourcesNeeded') {
      sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, MAX_DIGITS)
    }

    // Project duration - max 50 chars
    if (name === 'projectDuration') {
      sanitizedValue = value.slice(0, MAX_TEXT_LENGTH)
    }

    // Technology required - max 50 chars
    if (name === 'technologyRequired') {
      sanitizedValue = value.slice(0, MAX_TEXT_LENGTH)
    }

    // Message is intentionally left uncapped

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }))

    // Remove error when user edits field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }

    // Remove submit error
    if (submitError) {
      setSubmitError('')
    }
  }

  // ==========================================
  // VALIDATION
  // ==========================================
  const validate = () => {
    const newErrors = {}

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = 'Full name can only contain letters.'
    } else if (formData.fullName.trim().length > MAX_TEXT_LENGTH) {
      newErrors.fullName = `Full name cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Company Name
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.'
    } else if (formData.companyName.trim().length > MAX_TEXT_LENGTH) {
      newErrors.companyName = `Company name cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Phone Number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.'
    } else if (!/^[0-9]{7,12}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber =
        'Enter a valid phone number (7–12 digits).'
    }

    // Email
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.emailAddress.trim()
      )
    ) {
      newErrors.emailAddress = 'Enter a valid email address.'
    } else if (formData.emailAddress.trim().length > MAX_TEXT_LENGTH) {
      newErrors.emailAddress = `Email cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Resources
    if (!formData.resourcesNeeded.trim()) {
      newErrors.resourcesNeeded = 'Number of resources is required.'
    } else if (!/^[0-9]+$/.test(formData.resourcesNeeded.trim())) {
      newErrors.resourcesNeeded = 'Only numbers are allowed.'
    } else if (formData.resourcesNeeded.trim().length > MAX_DIGITS) {
      newErrors.resourcesNeeded = `Cannot exceed ${MAX_DIGITS} digits.`
    }

    // Project Duration
    if (!formData.projectDuration.trim()) {
      newErrors.projectDuration =
        'Project duration is required.'
    } else if (formData.projectDuration.trim().length > MAX_TEXT_LENGTH) {
      newErrors.projectDuration = `Project duration cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Technology
    if (!formData.technologyRequired.trim()) {
      newErrors.technologyRequired =
        'Technology required is required.'
    } else if (formData.technologyRequired.trim().length > MAX_TEXT_LENGTH) {
      newErrors.technologyRequired = `Technology required cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // ==========================================
  // SEND EMAIL
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Stop if validation fails
    if (!validate()) {
      return
    }

    setSubmitting(true)
    setSubmitError('')

    try {
      const templateParams = {
        form_type: 'Resource Request',
        is_hire: true,
        full_name: formData.fullName.trim(),
        company_name: formData.companyName.trim(),
        phone: formData.phoneNumber.trim(),
        email: formData.emailAddress.trim(),
        resources_needed: formData.resourcesNeeded.trim(),
        project_duration: formData.projectDuration.trim(),
        technology: formData.technologyRequired.trim(),
        message: formData.message.trim() || 'No message provided',
        reply_to: formData.emailAddress.trim(),
      }

      console.log('EMAILJS TEMPLATE PARAMS:', templateParams)

      const response = await sendUniversalEmail(templateParams)

      console.log('EMAILJS SUCCESS:', response)

      // Show success message
      setSubmitted(true)

      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitted(false)

        setFormData({
          fullName: '',
          companyName: '',
          phoneNumber: '',
          emailAddress: '',
          resourcesNeeded: '',
          projectDuration: '',
          technologyRequired: '',
          message: '',
        })

        setErrors({})
      }, 4000)
    } catch (error) {
      console.error('EMAILJS ERROR:', error)

      setSubmitError(
        'Something went wrong while sending your request. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="w-full lg:max-w-[1000px] md:max-w-[700px] mx-auto px-0 sm:px-0">

      <div className="bg-[#FFFFFF1A] border border-[#BDBDBDB0] rounded-xl sm:rounded-2xl p-4 sm:p-10 md:p-12 shadow-2xl backdrop-blur-sm">

        {submitted ? (

          // ==========================================
          // SUCCESS
          // ==========================================
          <div className="success-pop text-center py-8 sm:py-12 space-y-3 sm:space-y-4">

            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">

              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className="success-check"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>

            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Thank You!
            </h3>

            <p className="text-sm sm:text-base text-slate-300 px-2">
              Your message has been sent successfully.
              Our team will contact you within 24 hours.
            </p>

          </div>

        ) : (

          // ==========================================
          // FORM
          // ==========================================
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 sm:space-y-6"
          >

            {/* ======================================
                ROW 1
            ====================================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              {/* FULL NAME */}
              <div
                className="field-rise"
                style={{ animationDelay: '0ms' }}
              >

                <label className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2 text-left">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  maxLength={50}
                  className={`w-full text-white bg-[#0F172A8C] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                    errors.fullName
                      ? 'field-shake ring-1 ring-red-400'
                      : ''
                  }`}
                />

                {errors.fullName && (
                  <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                    {errors.fullName}
                  </p>
                )}

              </div>


              {/* COMPANY NAME */}
              <div
                className="field-rise"
                style={{ animationDelay: '60ms' }}
              >

                <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                  Company Name *
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your Company Name"
                  required
                  maxLength={50}
                  className={`w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                    errors.companyName
                      ? 'field-shake ring-1 ring-red-400'
                      : ''
                  }`}
                />

                {errors.companyName && (
                  <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                    {errors.companyName}
                  </p>
                )}

              </div>


              {/* PHONE */}
              <div
                className="field-rise"
                style={{ animationDelay: '120ms' }}
              >

                <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={12}
                  placeholder="Enter your Phone Number"
                  required
                  className={`w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                    errors.phoneNumber
                      ? 'field-shake ring-1 ring-red-400'
                      : ''
                  }`}
                />

                {errors.phoneNumber && (
                  <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                    {errors.phoneNumber}
                  </p>
                )}

              </div>


              {/* EMAIL */}
              <div
                className="field-rise"
                style={{ animationDelay: '180ms' }}
              >

                <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                  maxLength={50}
                  className={`w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                    errors.emailAddress
                      ? 'field-shake ring-1 ring-red-400'
                      : ''
                  }`}
                />

                {errors.emailAddress && (
                  <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                    {errors.emailAddress}
                  </p>
                )}

              </div>


              {/* RESOURCES */}
              <div
                className="field-rise"
                style={{ animationDelay: '240ms' }}
              >

                <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                  Number of Resources Needed *
                </label>

                <input
                  type="text"
                  name="resourcesNeeded"
                  value={formData.resourcesNeeded}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={12}
                  placeholder="0–20"
                  required
                  className={`w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                    errors.resourcesNeeded
                      ? 'field-shake ring-1 ring-red-400'
                      : ''
                  }`}
                />

                {errors.resourcesNeeded && (
                  <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                    {errors.resourcesNeeded}
                  </p>
                )}

              </div>


              {/* PROJECT DURATION */}
              <div
                className="field-rise"
                style={{ animationDelay: '300ms' }}
              >

                <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                  Project Duration *
                </label>

                <input
                  type="text"
                  name="projectDuration"
                  value={formData.projectDuration}
                  onChange={handleChange}
                  placeholder="Enter Project duration in month or year"
                  required
                  maxLength={50}
                  className={`w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                    errors.projectDuration
                      ? 'field-shake ring-1 ring-red-400'
                      : ''
                  }`}
                />

                {errors.projectDuration && (
                  <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                    {errors.projectDuration}
                  </p>
                )}

              </div>

            </div>


            {/* ======================================
                TECHNOLOGY
            ====================================== */}

            <div
              className="field-rise"
              style={{ animationDelay: '360ms' }}
            >

              <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                Technology Required *
              </label>

              <input
                type="text"
                name="technologyRequired"
                value={formData.technologyRequired}
                onChange={handleChange}
                placeholder="Mention technology as per your requirement"
                required
                maxLength={50}
                className={`w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all ${
                  errors.technologyRequired
                    ? 'field-shake ring-1 ring-red-400'
                    : ''
                }`}
              />

              {errors.technologyRequired && (
                <p className="error-text text-red-400 text-[11px] sm:text-xs mt-1 sm:mt-1.5 text-left">
                  {errors.technologyRequired}
                </p>
              )}

            </div>


            {/* ======================================
                MESSAGE (no length cap — free text)
            ====================================== */}

            <div
              className="field-rise"
              style={{ animationDelay: '420ms' }}
            >

              <label className="font-semibold text-[13px] sm:text-[16px] text-left block mb-1.5 sm:mb-2.5">
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here ..."
                className="w-full bg-[#0F172A8C] text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] transition-all resize-none"
              />

            </div>


            {/* ======================================
                ERROR
            ====================================== */}

            {submitError && (
              <p className="text-[12px] sm:text-sm text-red-400 text-center">
                {submitError}
              </p>
            )}


            {/* ======================================
                BUTTON
            ====================================== */}

            <div
              className="field-rise pt-1 sm:pt-2"
              style={{ animationDelay: '480ms' }}
            >

 <button
  type="submit"
  disabled={submitting}
  className="
    mx-auto
    flex
    items-center
    justify-center
    bg-[#04A3DA]
    hover:bg-[#008FE0]
    active:scale-[0.99]
    disabled:opacity-60 
    text-white
    font-semibold
    py-3
    sm:py-2
    px-8
    sm:px-24
        rounded-lg
    sm:rounded-xl
    shadow-[0_4px_25px_rgba(0,163,255,0.4)]
    transition-all
    duration-200
    text-sm
    sm:text-[16px]
    cursor-pointer
    lg:mb-[-20px]
  "
>
  {submitting ? 'Sending...' : 'Send Message'}
</button>

            </div>

          </form>
        )}

      </div>

    </div>
  )
}