import "./ThankYou.scss";

function ThankYou() {
  return (
    <div className="thank-cont">
      <img src="/thankyou.png" alt="check mark" className="thank-image" />
      <p className="thank-title">Thank You!</p>
      <p className="thank-text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
