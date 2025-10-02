const WhatsAppButton = () => {
  const phoneNumber = "919871769900"; // Your WhatsApp number
  const message = "Hello! I am interested in your franchise.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 z-50"
    >
      <img
        src="/Whatsapp.gif" // put gif in /public
        alt="WhatsApp"
        className="w-16 h-16 rounded-full shadow-lg"
      />
    </a>
  );
};

export default WhatsAppButton;
