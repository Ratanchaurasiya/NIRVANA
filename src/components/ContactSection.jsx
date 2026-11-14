import React, { useState } from 'react';
import GoogleMapCard from './GoogleMapCard';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, Building2, Sparkles } from 'lucide-react';

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
      if (onShowToast) onShowToast('Thank you! Your enquiry has been submitted successfully.');
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello NIRVANA GROUP, I am submitting an enquiry:\n` +
    `• Name: ${formData.fullName}\n` +
    `• Phone: ${formData.phone}\n` +
    `• Requirement: ${formData.requirement} (${formData.propertyType})\n` +
    `• Location: ${formData.location}\n` +
    `• Message: ${formData.message || 'Please share available options.'}`
  );

  return (
    <section id="contact" className="py-24 relative bg-navy-950 overflow-hidden">
      {/* Glow background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Discuss Your <span className="text-gold-gradient">Property Requirement</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Reach out to NIRVANA GROUP for reliable property guidance in Ahmedabad. Speak directly with our advisory team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Complete Company Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">OFFICIAL CONTACT INFO</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">NIRVANA GROUP</h3>
                <p className="text-xs text-slate-300 mt-1">Professional Property Assistance & Real Estate Consulting</p>
              </div>

              <div className="space-y-4 pt-2">
                
                {/* Location / Headquarters */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Headquarters & Corporate Hub</span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Ahmedabad, Gujarat, India
                    </p>
                    <p className="text-[11px] text-amber-300/80 mt-0.5">
                      Private boardroom consultations by appointment
                    </p>
                  </div>
                </div>

                {/* Direct Line / Advisory Desk */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Dedicated Client Advisory</span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Priority Advisory Concierge
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Direct consultation bookings available via enquiry portal
                    </p>
                  </div>
                </div>

                {/* Corporate Correspondence */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Corporate Inquiries</span>
                    <a href="mailto:contact@nirvana.group" className="text-sm font-bold text-white hover:text-amber-300 transition-colors block mt-0.5 truncate">
                      contact@nirvana.group
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Verified responses within 24 business hours
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Consultation Hours</span>
                    <p className="text-xs font-bold text-white mt-0.5">Monday to Saturday: 10:00 AM – 7:00 PM</p>
                    <p className="text-[10px] text-amber-300/80">Sunday: Private Viewings By Prior Appointment</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map Component */}
            <GoogleMapCard />

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-amber-500/40 shadow-2xl backdrop-blur-2xl">
              
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">DIRECT ADVISORY ENQUIRY</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">Send Property Enquiry</h3>
                <p className="text-xs text-slate-300 mt-1">Fill out the details below and our team will get in touch with shortlisted property options.</p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Requirement Purpose */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Requirement Purpose</label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Buy">Buy for Personal Use</option>
                        <option value="Invest">Investment</option>
                        <option value="Business">Business Office Space</option>
                        <option value="Family">Family Living</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Property Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Plot">Plots</option>
                        <option value="Investment">Investment</option>
                      </select>
                    </div>

                    {/* Preferred Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Location</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Sola">Sola</option>
                        <option value="Science City">Science City</option>
                        <option value="SG Highway">SG Highway</option>
                        <option value="Bopal">Bopal</option>
                        <option value="Shela">Shela</option>
                        <option value="Gota">Gota</option>
                        <option value="Thaltej">Thaltej</option>
                        <option value="Other">Other Area</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">Message / Specific Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Mention preferred BHK, timeline, or specific project preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#070D1E] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-navy-950 bg-gold-gradient shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-navy-950" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Success State */
                <div className="p-8 rounded-2xl bg-[#070D1E] border border-emerald-500/40 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif font-bold text-white">Enquiry Received!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-amber-300">{formData.fullName}</strong>. Our team will review your requirement for {formData.propertyType} in {formData.location} and contact you shortly.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 text-xs font-bold uppercase tracking-wider shadow-lg"
                    >
                      Send Another Enquiry
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
