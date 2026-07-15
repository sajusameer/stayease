export default function FAQ() {
  const faqs = [
    {
      question: "How do I book a hotel?",
      answer:
        "Browse available hotels, choose your preferred hotel, select your dates, and complete the booking process.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can cancel your booking according to the hotel's cancellation policy.",
    },
    {
      question: "Do I need to pay online?",
      answer:
        "Yes. Secure online payment ensures your booking is confirmed instantly.",
    },
    {
      question: "Can I book for someone else?",
      answer:
        "Yes. Simply provide the guest's information during the booking process.",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="mx-auto max-w-5xl px-4">

        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-lg">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need to know before booking.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-base-300 bg-base-100"
            >
              <input
                type="radio"
                name="faq"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}