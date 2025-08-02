import React, { useState, FC, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 py-3 rounded-lg font-semibold transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </div>
  );
};

const ContactInfo: FC = () => {
  const contactDetails = [
    { icon: Mail, label: 'marcalber59@gmail.com' },
    { icon: Phone, label: '+20 122 392 1106' },
    { icon: MapPin, label: 'San Francisco, CA' }
  ];

  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' }
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
      <p className="text-gray-300 mb-8">
        I'm always interested in new opportunities and exciting projects. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <detail.icon size={20} />
            </div>
            <span>{detail.label}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};