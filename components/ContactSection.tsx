import { ContactInfo } from '@/utils/ContactInfo';
import React, { FC } from 'react';
import { ContactForm } from './ContactForm';

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