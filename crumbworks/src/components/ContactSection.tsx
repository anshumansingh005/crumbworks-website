const ContactSection = () => {
  const bakeryEmail = "contact@crumbworks.in  ";

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const proceed = window.confirm(
      "This will open your default email application. Do you want to continue?"
    );
    if (!proceed) {
      e.preventDefault();
    }
  };

  return (
    <section className="bg-bg p-[40px]   flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-black mb-4">
        Ready to place an order?
      </h2>
      <p className="text-black mb-8 text-center max-w-md px-4">
        We'd love to hear from you! Send us an email with your custom requests
        or orders.
      </p>

      <a
        href={`mailto:${bakeryEmail}`}
        onClick={handleEmailClick}
        className="bg-blue hover:bg-blue/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
      >
        Email Us
      </a>
    </section>
  );
};

export default ContactSection;
