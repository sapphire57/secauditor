// components/Contact.tsx
// Contact section with call-to-action
export default function Contact() {
    return (
      <section id="contact" className="bg-blue-600 text-white section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl mb-8">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how we can help protect your organization
            and ensure compliance with SAMA and NCA frameworks.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100">
              Schedule Consultation
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-md hover:bg-blue-700">
              Download Framework Guide
            </button>
          </div>
        </div>
      </section>
    )
  }