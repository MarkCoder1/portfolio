import { FC } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

export const ContactInfo: FC = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "marcalber59@gmail.com",
      href: "mailto:marcalber59@gmail.com",
    },
    {
      icon: Phone,
      label: "+20 122 392 1106",
      href: "tel:+201223921106",
    },
    {
      icon: MapPin,
      label: "Egypt, Cairo",
      href: "",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/lionzak" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mark-alber1/" },
    { icon: Facebook, href: "https://www.facebook.com/mark.alber.7543" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
      <p className="text-gray-300 mb-8">
        I'm always interested in new opportunities and exciting projects.
        Whether you have a question or just want to say hi, feel free to reach
        out!
      </p>

      {/* Contact details clickable */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <a
            key={index}
            href={detail.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group hover:text-blue-400 transition-colors"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <detail.icon size={32} />
            </div>
            <span className="text-lg">{detail.label}</span>
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="flex gap-6 mt-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
          >
            <social.icon
              size={32}
            />
          </a>
        ))}
      </div>


    </div>
  );
};
