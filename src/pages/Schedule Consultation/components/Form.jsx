import { useState } from 'react'
import { sendUniversalEmail } from '../../../config/emailjs'

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    teamSize: '',
    projectDuration: '',
    technologyRequired1: '',
    projectType: '',
    technologyRequired2: '',
    projectDescription: ''
  })

  const [selectedDate, setSelectedDate] = useState(23)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('14:00')
  const [currentMonth, setCurrentMonth] = useState('August 2026')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Fields capped at 50 characters (all text fields except projectDescription)
  const MAX_TEXT_LENGTH = 50
  // Numeric fields (phone, team size) capped at 12 digits
  const MAX_DIGITS = 12

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ]

  // Converts "17:00" -> "5:00 PM" for the summary line
  const formatTimeSlot = (slot) => {
    const [hourStr, minuteStr] = slot.split(':')
    let hour = parseInt(hourStr, 10)
    const period = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12
    if (hour === 0) hour = 12
    return `${hour}:${minuteStr} ${period}`
  }

  const sanitize = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.replace(/[^a-zA-Z\s]/g, '').slice(0, MAX_TEXT_LENGTH)
      case 'companyName':
        return value.replace(/[^a-zA-Z0-9\s&.,'-]/g, '').slice(0, MAX_TEXT_LENGTH)
      case 'phoneNumber':
        return value.replace(/[^0-9]/g, '').slice(0, MAX_DIGITS)
      case 'emailAddress':
        return value.replace(/[^a-zA-Z0-9@._\-+]/g, '').slice(0, MAX_TEXT_LENGTH)
      case 'teamSize':
        return value.replace(/[^0-9]/g, '').slice(0, MAX_DIGITS)
      case 'projectDuration':
        return value.replace(/[^a-zA-Z0-9\s]/g, '').slice(0, MAX_TEXT_LENGTH)
      case 'technologyRequired1':
      case 'technologyRequired2':
        return value.replace(/[^a-zA-Z0-9\s+#./,-]/g, '').slice(0, MAX_TEXT_LENGTH)
      // projectDescription is intentionally left uncapped
      default:
        return value
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: sanitize(name, value) }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
    if (submitError) {
      setSubmitError('')
    }
  }

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
      newErrors.phoneNumber = 'Enter a valid phone number (7–12 digits).'
    }

    // Email
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Enter a valid email address.'
    } else if (formData.emailAddress.trim().length > MAX_TEXT_LENGTH) {
      newErrors.emailAddress = `Email cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Team Size
    if (!formData.teamSize.trim()) {
      newErrors.teamSize = 'Team size is required.'
    } else if (!/^[0-9]+$/.test(formData.teamSize.trim())) {
      newErrors.teamSize = 'Only numbers are allowed.'
    } else if (formData.teamSize.trim().length > MAX_DIGITS) {
      newErrors.teamSize = `Cannot exceed ${MAX_DIGITS} digits.`
    }

    // Project Duration
    if (!formData.projectDuration.trim()) {
      newErrors.projectDuration = 'Project duration is required.'
    } else if (formData.projectDuration.trim().length > MAX_TEXT_LENGTH) {
      newErrors.projectDuration = `Project duration cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Technology Required (1)
    if (!formData.technologyRequired1.trim()) {
      newErrors.technologyRequired1 = 'Technology required is required.'
    } else if (formData.technologyRequired1.trim().length > MAX_TEXT_LENGTH) {
      newErrors.technologyRequired1 = `Cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Technology Required (2)
    if (!formData.technologyRequired2.trim()) {
      newErrors.technologyRequired2 = 'Technology required is required.'
    } else if (formData.technologyRequired2.trim().length > MAX_TEXT_LENGTH) {
      newErrors.technologyRequired2 = `Cannot exceed ${MAX_TEXT_LENGTH} characters.`
    }

    // Project Type
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setSubmitting(true)
    setSubmitError('')

    try {
      const combinedTechnology = [formData.technologyRequired1, formData.technologyRequired2]
        .filter(Boolean)
        .join(', ')

      await sendUniversalEmail({
        form_type: 'Consultation Request',
        is_consultation: true,
        full_name: formData.fullName.trim(),
        company_name: formData.companyName.trim(),
        phone: formData.phoneNumber.trim(),
        email: formData.emailAddress.trim(),
        team_size: formData.teamSize.trim(),
        project_duration: formData.projectDuration.trim(),
        technology: combinedTechnology || '',
        project_type: formData.projectType,
        project_description: formData.projectDescription.trim() || 'No description provided',
        consultation_date: `${currentMonth.split(' ')[0]} ${selectedDate}, ${currentMonth.split(' ')[1]}`,
        consultation_time: selectedTimeSlot,
        reply_to: formData.emailAddress.trim(),
      })

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          fullName: '',
          companyName: '',
          phoneNumber: '',
          emailAddress: '',
          teamSize: '',
          projectDuration: '',
          technologyRequired1: '',
          projectType: '',
          technologyRequired2: '',
          projectDescription: ''
        })
        setErrors({})
      }, 4000)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setSubmitError('Something went wrong scheduling your consultation. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const firstWeekdayOffset = new Date(`${currentMonth} 1`).getDay()

  return (
    <div className="w-full max-w-[1050px] mx-auto  md:px-4">
      <div className="anim-card bg-[#FFFFFF1A] border border-[#BDBDBDB0] rounded-2xl p-4 sm:p-6 md:p-10 lg:p-8 shadow-2xl backdrop-blur-sm">
        {submitted ? (
          <div className="text-center py-8 sm:py-12 space-y-4">
            <div className="anim-check-circle w-14 h-14 sm:w-16 sm:h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className="anim-check-path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="anim-fade-up text-xl sm:text-2xl font-bold text-white" style={{ animationDelay: '150ms' }}>
              Consultation Scheduled!
            </h3>
            <p className="anim-fade-up text-sm sm:text-base text-slate-300 max-w-md mx-auto px-2" style={{ animationDelay: '280ms' }}>
              Thank you! Your consultation for <span className="text-sky-400 font-semibold">{currentMonth.split(' ')[0]} {selectedDate} at {selectedTimeSlot}</span> has been booked. We will send a calendar invite to your email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
            <div className="anim-fade-up grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" style={{ animationDelay: '80ms' }}>
              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  maxLength={50}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  maxLength={50}
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your Company Name"
                  autoComplete="organization"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.companyName ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  inputMode="numeric"
                  maxLength={12}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                  autoComplete="tel"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.phoneNumber ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  required
                  maxLength={50}
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  autoComplete="email"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.emailAddress ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.emailAddress && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.emailAddress}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Team Size Required *
                </label>
                <input
                  type="text"
                  name="teamSize"
                  required
                  inputMode="numeric"
                  maxLength={12}
                  value={formData.teamSize}
                  onChange={handleChange}
                  placeholder="0–20"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.teamSize ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.teamSize && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.teamSize}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Project Duration *
                </label>
                <input
                  type="text"
                  name="projectDuration"
                  required
                  maxLength={50}
                  value={formData.projectDuration}
                  onChange={handleChange}
                  placeholder="Enter Project duration in month or year"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.projectDuration ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.projectDuration && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.projectDuration}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Technology Required *
                </label>
                <input
                  type="text"
                  name="technologyRequired1"
                  required
                  maxLength={50}
                  value={formData.technologyRequired1}
                  onChange={handleChange}
                  placeholder="Mention technology as per your requirement"
                  className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                    errors.technologyRequired1 ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                  }`}
                />
                {errors.technologyRequired1 && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.technologyRequired1}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                  Project Type *
                </label>
                <div className="relative">
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 appearance-none cursor-pointer placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                      errors.projectType ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                    }`}
                  >
                    <option value="" disabled hidden>Select Project Type</option>
                    <option value="Web Development" className="bg-[#111C36]">Web Development</option>
                    <option value="Mobile App Development" className="bg-[#111C36]">Mobile App Development</option>
                    <option value="Dedicated Team" className="bg-[#111C36]">Dedicated Team</option>
                    <option value="Custom Software" className="bg-[#111C36]">Custom Software</option>
                    <option value="AI & ML Solutions" className="bg-[#111C36]">AI & ML Solutions</option>
                    <option value="UI/UX Design" className="bg-[#111C36]">UI/UX Design</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.projectType && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.projectType}</p>
                )}
              </div>
            </div>

            <div className="anim-fade-up" style={{ animationDelay: '140ms' }}>
              <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                Technology Required *
              </label>
              <input
                type="text"
                name="technologyRequired2"
                required
                maxLength={50}
                value={formData.technologyRequired2}
                onChange={handleChange}
                placeholder="Mention technology as per your requirement"
                className={`w-full bg-[#0F172A8C] text-white border rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all ${
                  errors.technologyRequired2 ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1E2E55]'
                }`}
              />
              {errors.technologyRequired2 && (
                <p className="text-red-400 text-[11px] sm:text-xs mt-1.5 text-left">{errors.technologyRequired2}</p>
              )}
            </div>

            <div className="anim-fade-up" style={{ animationDelay: '200ms' }}>
              <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-2 text-left">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Type your message here ..."
                className="w-full bg-[#0F172A8C] text-white border border-[#1E2E55] rounded-xl px-4 py-3 sm:py-3.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 placeholder-[#B5B7BD] placeholder:font-normal placeholder:text-sm sm:placeholder:text-[16px] placeholder:leading-[18px] transition-all resize-none"
              />
            </div>

            <div className="anim-fade-up pt-2" style={{ animationDelay: '260ms' }}>
              <label className="block font-semibold text-sm sm:text-[16px] leading-[18px] mb-3 text-left">
                Select Date and Time
              </label>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                <div className="lg:col-span-5 bg-[#091D3E33] border border-[#BDBDBDB0] rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between text-white text-sm font-medium mb-3 sm:mb-4 px-1">
                    <button
                      type="button"
                      className="text-slate-400 hover:text-white transition-colors p-2 -m-2 min-w-[32px] flex items-center justify-center"
                    >
                      &lt;
                    </button>
                    <span>{currentMonth}</span>
                    <button
                      type="button"
                      className="text-slate-400 hover:text-white transition-colors p-2 -m-2 min-w-[32px] flex items-center justify-center"
                    >
                      &gt;
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center text-[9px] sm:text-xs font-semibold text-slate-400 mb-2">
                    {daysOfWeek.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center text-[11px] sm:text-xs">
                    {Array.from({ length: firstWeekdayOffset }).map((_, i) => (
                      <div key={`pad-${i}`} className="py-1"></div>
                    ))}
                    {daysInMonth.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(day)}
                        className={`py-1.5 sm:py-1.5 rounded-full font-medium transition-all duration-200 ${
                          selectedDate === day
                            ? 'anim-date-pop bg-[#00C2FF] text-slate-900 font-bold shadow-md scale-105'
                            : 'text-slate-300 hover:bg-[#1C2C4E] hover:text-white hover:scale-105'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-start">
                  <h4 className="text-white text-sm font-medium text-left mb-3 sm:mb-4">
                    Tuesday, {currentMonth.split(' ')[0]} {selectedDate}
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-medium border text-center transition-all duration-200 hover:scale-[1.03] active:scale-95 ${
                          selectedTimeSlot === slot
                            ? 'border-sky-400 text-white bg-[#0F172A8C] shadow-[0_0_0_1px_rgba(56,189,248,0.4)]'
                            : 'border-[#1E2E55] text-slate-300 bg-[#0F172A8C] hover:border-sky-400 hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {submitError && (
                <p className="text-[12px] sm:text-sm text-red-400 text-center mt-4">{submitError}</p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 sm:mt-5 pt-4 border-t border-[#1E2E55]">
                <p className="text-sm sm:text-[15px] text-slate-300">
                  Selected:{' '}
                  <span className="text-white font-semibold">
                    {currentMonth.split(' ')[0].slice(0, 3)} {selectedDate}
                  </span>
                  {' · '}
                  <span className="text-sky-400 font-semibold">
                    {formatTimeSlot(selectedTimeSlot)}
                  </span>
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto bg-[#04A3DA] hover:bg-[#008FE0] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 text-white font-semibold py-3 sm:py-2.5 px-6 rounded-xl shadow-[0_4px_25px_rgba(0,163,255,0.4)] transition-all duration-200 text-sm sm:text-[16px] cursor-pointer whitespace-nowrap"
                >
                  {submitting ? 'Scheduling...' : 'Schedule →'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}