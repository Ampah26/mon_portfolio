import React from 'react';

const Recaptcha = () => {
  return (
    <div>
      <iframe
        title="reCAPTCHA"
        width="304"
        height="78"
        role="presentation"
        name="a-mowog51lv4fu"
        frameBorder="0"
        scrolling="no"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
        src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Le0jrkZAAAAANa3Yq5XfzHC4h34e4K6ynXOhlHK&amp;co=aHR0cHM6Ly9yaXNlLmZhaXJza2V0Y2guY29tOjQ0Mw..&amp;hl=en&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;theme=dark&amp;size=normal&amp;cb=rnkpqp6gjuc3">
      </iframe>
    </div>
  );
};

export default Recaptcha;
