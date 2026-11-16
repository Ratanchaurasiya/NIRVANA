import React, { useState } from 'react';
import GoogleMapCard from './GoogleMapCard';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const ContactSection = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    requirement: 'Buy',
    propertyType: 'Residential',
    location: 'Science City',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      if (onShowToast) onShowToast('Please provide your name and phone number.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onShowToast) onShowToast('Thank you. Your enquiry has been received.');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#F5F1E8] border-t border-[#DEDAD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#DEDAD2] text-[#B69B65] text-[10px] font-sans font-bold uppercase tracking-[0.25em]">
            <span>Advisory & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#171717] tracking-tight">
            Initiate a <span className="text-[#B69B65]">Private Consultation</span>
          </h2>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            Connect with our corporate advisory desk for confidential discussions on premier residential and commercial opportunities in Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact Brief */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#DEDAD2] p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#B69B65]">OFFICIAL PRESENCE</span>
                <h3 className="text-2xl font-serif font-bold text-[#171717] mt-1">NIRVANA GROUP</h3>
                <p className="text-xs text-[#77736C] mt-1 font-sans">Corporate Property Development & Advisory</p>
              </div>

              <div className="space-y-3.5 pt-2">
                
                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DEDAD2]">
                  <div className="w-9 h-9 bg-white border border-[#DEDAD2] flex items-center justify-center shrink-0 text-[#B69B65]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-[#77736C] uppercase tracking-wider font-semibold block">Headquarters & Corridors</span>
                    <p className="text-sm font-semibold text-[#171717] mt-0.5">
                      Ahmedabad, Gujarat, India
                    </p>
                    <p className="text-[11px] text-[#5C5852] mt-0.5">
                      Executive boardroom viewings by prior appointment
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DEDAD2]">
                  <div className="w-9 h-9 bg-white border border-[#DEDAD2] flex items-center justify-center shrink-0 text-[#B69B65]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-[#77736C] uppercase tracking-wider font-semibold block">Advisory Desk</span>
                    <a href="tel:+919081507342" className="text-sm font-semibold text-[#171717] hover:text-[#B69B65] transition-colors block mt-0.5">
                      +91 90815 07342
                    </a>
                    <p className="text-[11px] text-[#77736C] mt-0.5">
                      Direct consultation line
                    </p>
                  </div>
                </div>

                {/* Corporate Correspondence */}
                <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DEDAD2]">
                  <div className="w-9 h-9 bg-white border border-[#DEDAD2] flex items-center justify-center shrink-0 text-[#B69B65]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-sans text-[#77736C] uppercase tracking-wider font-semibold block">Corporate Inquiries</span>
                    <a href="mailto:himanshuramchandani2006@gmail.com" className="text-sm font-semibold text-[#171717] hover:text-[#B69B65] transition-colors block mt-0.5 truncate">
                      himanshuramchandani2006@gmail.com
                    </a>
                    <p className="text-[11px] text-[#77736C] mt-0.5">
                      Official correspondence desk
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DEDAD2]">
                  <div className="w-9 h-9 bg-white border border-[#DEDAD2] flex items-center justify-center shrink-0 text-[#B69B65]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-[#77736C] uppercase tracking-wider font-semibold block">Hours</span>
                    <p className="text-xs font-semibold text-[#171717] mt-0.5">Monday to Saturday: 10:00 AM – 7:00 PM</p>
                    <p className="text-[11px] text-[#77736C]">Sunday: Private Viewings By Prior Appointment</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map Component */}
            <GoogleMapCard />

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DEDAD2] p-6 sm:p-10 shadow-sm">
              
              <div className="mb-8 border-b border-[#E6E2D8] pb-4">
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#B69B65] font-semibold">DIRECT INQUIRY DOSSIER</span>
                <h3 className="text-2xl font-serif font-bold text-[#171717] mt-1">Submit Your Parameters</h3>
                <p className="text-xs text-[#5C5852] mt-1">Provide your details to receive verified architectural brochures and private asset summaries.</p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65]"
                      />
                    </div>

                    {/* Requirement Purpose */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Acquisition Objective</label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] cursor-pointer"
                      >
                        <option value="Buy">Primary Residence</option>
                        <option value="Invest">Capital Investment</option>
                        <option value="Business">Corporate Headquarters</option>
                        <option value="Family">Family Estate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Property Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Asset Category</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] cursor-pointer"
                      >
                        <option value="Residential">Residential Sky Villa / Apartment</option>
                        <option value="Commercial">Commercial Office Suite</option>
                        <option value="Plot">Bespoke Plotted Estate</option>
                        <option value="Investment">Institutional Asset</option>
                      </select>
                    </div>

                    {/* Preferred Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Growth Corridor</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] cursor-pointer"
                      >
                        <option value="Science City">Science City Road</option>
                        <option value="Sola">Sola</option>
                        <option value="SG Highway">SG Highway</option>
                        <option value="Thaltej">Thaltej</option>
                        <option value="Bopal">Bopal - Ambli</option>
                        <option value="Shela">Shela</option>
                        <option value="Gota">Gota</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C5852]">Specific Notes / Spatial Parameters</label>
                    <textarea
                      rows={3}
                      placeholder="Specify preferred floorplate, timeline, or particular project interest..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#E6E2D8] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#B69B65] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#A38854] transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2]" />
                        <span>Submit Direct Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Success State */
                <div className="p-8 bg-[#FAF9F6] border border-[#E6E2D8] text-center space-y-5">
                  <div className="w-14 h-14 bg-white border border-[#B69B65]/40 text-[#B69B65] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif font-bold text-[#171717]">Inquiry Received</h4>
                    <p className="text-xs sm:text-sm text-[#5C5852] max-w-md mx-auto">
                      Thank you, <strong className="text-[#171717]">{formData.fullName}</strong>. Our advisory office has logged your requirement for {formData.propertyType} in {formData.location} and will connect with you shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-3 border border-[#E6E2D8] bg-white text-[#171717] text-xs uppercase tracking-[0.18em] hover:border-[#B69B65] transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
