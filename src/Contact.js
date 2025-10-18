import styled from "styled-components";

const Contact = () => {
  

  return <Wrapper>
    <h2 className="common-heading">Contact Form</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.259888628528!2d77.69416950221617!3d12.995504440923426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b04a3be4b%3A0xcffb252dab2e9643!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1753985201918!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mqallwew" method="POST" className="contact-inputs">
            <input type="text" name="username" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter your email" required />
            <textarea name="message" rows="10" placeholder="Enter your message" required ></textarea>
            <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `