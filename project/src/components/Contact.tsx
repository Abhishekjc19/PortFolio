import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Get in <span className="text-[#FFD100]">Touch</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-lg space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/30 border border-[#FFD100]/20 rounded-lg text-white focus:outline-none focus:border-[#FFD100] transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/30 border border-[#FFD100]/20 rounded-lg text-white focus:outline-none focus:border-[#FFD100] transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-black/30 border border-[#FFD100]/20 rounded-lg text-white focus:outline-none focus:border-[#FFD100] transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg bg-[#FFD100] text-black font-medium transition-all duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}

              {error && (
                <p className="text-red-400 text-center">{error}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 