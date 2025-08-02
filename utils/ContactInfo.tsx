import { FC } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const ContactInfo: FC = () => {
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