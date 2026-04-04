import styled, { keyframes } from 'styled-components';
import config from '@/helpers/config.ts';
import colors from '@/helpers/colors.ts';
// import Page from "page-transition/Page";

const em = config.em.bind(config);
const waveImageWidth = '118px';
const waveImageHeight = '22px';

const wave = () => keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: ${waveImageWidth};
  }
`;

const StyledPage = styled.div`
  padding: 1rem 10rem 4.6rem 22rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
  background-image:
    linear-gradient(
      to top,
      rgba(34, 34, 34, 1) 15%,
      rgba(255, 255, 255, 0.25) 0%
    ),
    url('bg-dots.png');
  background-attachment: fixed;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: Raleway;
  & ::selection {
    background-color: ${colors.rgbFriendlyGreen};
  }

  @media (max-width: ${em(1100)}em) {
    padding: 10.7rem 3rem 5rem 3rem;
  }
  @media (max-width: ${em(1000)}em) {
    align-items: flex-start;
    background-image: none;
  }
  @media (max-width: ${em(650)}em) {
    padding: 10.7rem 3rem 1rem;
  }
  @media (max-width: ${em(500)}em) {
    padding: 8.2rem 3rem 1rem;
  }
  @media (max-width: ${em(400)}em) {
    padding: 7.2rem 1.4rem 1rem;
  }
`;

const StyledForm = styled.form`
  padding: 5rem 1rem;
  max-width: 80rem;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 0.9rem;
  color: ${colors.rgbBlackFont};
  border: 0.1rem dashed #ededed;

  @media (max-width: ${em(1100)}em) {
    padding: 3rem 1rem;
  }
  @media (max-width: ${em(1000)}em) {
    border: none;
  }

  & h1 {
    margin-bottom: 6rem;
    width: 100%;
    font-size: 3.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
    @media (max-width: ${em(500)}em) {
      margin-bottom: 2rem;
      font-size: 2.2rem;
    }
  }

  & input,
  & textarea {
    margin-bottom: 1.6rem;
    padding: 1rem 0;
    border: none;
    border-bottom: 0.1rem solid #d1d1d1;
    outline: none;
    font-family: Raleway;
    letter-spacing: 0.2rem;
    font-size: 1.6rem;
    transition: 0.4s;
    box-shadow: none; /* firefox: remove border */

    &:focus {
      border-bottom: 0.1rem solid ${colors.rgbGrey};
    }

    &::placeholder {
      font-family: Raleway;
      font-size: 1.5rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      opacity: 1;
      /* color: ${colors.rgbGrey}; */
      color: ${colors.rgbBlackFont};
    }
  }

  & input {
    &:-webkit-autofill {
      transition: 0s 666666s;
    }
  }

  /* NAME */
  & input[name='name'] {
    width: 47%;
    @media (max-width: ${em(750)}em) {
      width: 100%;
    }
  }

  /* EMAIL */
  & input[name='email'] {
    width: 47%;
    margin-left: auto;
    @media (max-width: ${em(750)}em) {
      width: 100%;
      margin-left: 0;
    }
  }

  /* SUBJECT */
  & input[name='subject'] {
    width: 100%;
  }

  /* MESSAGE */
  & textarea {
    width: 100%;
    outline: none;
    resize: vertical;
    line-height: 1.5;
    box-shadow: none; /* firefox: remove border */
    @media (max-width: ${em(1100)}em) {
      height: 14rem;
    }
    @media (max-width: ${em(500)}em) {
      height: 12rem;
    }
  }

  /* SUBMIT */
  & button[type='submit'] {
    z-index: 0;
    position: relative;
    padding: 0.9rem 1.2rem;
    margin: 2.6rem auto 1rem;
    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    border-bottom: 0.2rem solid ${colors.rgbaFriendlyGreen};
    box-shadow: inset 0 -0.2rem transparent;
    color: ${colors.rgbBlackFont};
    transition: 0.4s;
    overflow: hidden;
    @media (max-width: ${em(500)}em) {
      margin: 0.6rem auto 0;
    }

    &:hover {
      color: white;
      border-bottom: 0.2rem solid transparent;
      border-radius: 0.8rem;
    }

    &:hover .submit-wave {
      transform: translateY(0);
    }

    & .submit-wave {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(calc(100% + ${waveImageHeight}));
      width: 100%;
      height: 100%;
      background-color: ${colors.rgbFriendlyGreen};
      transition: 1s;
      filter: invert(45%) sepia(61%) saturate(306%) hue-rotate(105deg)
        brightness(93%) contrast(96%);

      &:before {
        content: '';
        position: absolute;
        top: -${waveImageHeight};
        left: 0;
        width: 100%;
        height: ${waveImageHeight};
        background: url(wave.png);
        animation: ${wave} 0.6s linear infinite;
      }
    }

    /* displaying progress */
    &.progress {
      pointer-events: none;
      box-shadow: none;
      border-bottom: none;
      color: transparent;
      transition: 1.4s;

      & .submit-wave {
        transform: translateY(calc(100% + ${waveImageHeight}));
      }
    }

    /* displaying message sent successfully */
    &.success {
      pointer-events: none;
      color: ${colors.rgbFriendlyGreen};
      box-shadow: none;
      border-bottom: none;

      & .submit-wave {
        transform: translateY(calc(100% + ${waveImageHeight}));
      }
    }

    /* displaying message not sent */
    &.failure {
      pointer-events: none;
      color: #ef0202;
      letter-spacing: 0.1;
      box-shadow: none;
      border-bottom: none;

      & .submit-wave {
        transform: translateY(calc(100% + ${waveImageHeight}));
      }
    }
  } /* submit button ends */
`;

// COMPONENT
export default function Contact(props) {
  const { pageTitle } = props;
  const { formActionUrl } = config.contact;

  const ContactPage = (
    <StyledPage>
      <StyledForm action={formActionUrl} method="post" onSubmit={handleSubmit}>
        {/* HEADING */}
        <h1>Get in touch</h1>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          // autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          // autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* SUBJECT */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          // autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          id=""
          rows="7"
          placeholder="Message"
          required
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        ></textarea>
        <button type="submit">
          <span className="submit-text">Send Message</span>
          <span className="submit-wave"></span>
        </button>
      </StyledForm>
    </StyledPage>
  );

  return ContactPage;
  // return <Page>{ContactPage}</Page>;
}

async function handleSubmit(e) {
  e.preventDefault();

  const submitButton = e.target.querySelector('[type=submit]');
  const submitButtonText = e.target.querySelector('.submit-text');
  const originalButtonValue = submitButtonText.innerText;
  displayProgress(); // button displays progress

  const { formActionUrl } = config.contact;

  const formData = new FormData(e.target);
  const payload = Object.fromEntries(formData);
  const stringPayload = JSON.stringify(payload);

  try {
    const response = await fetch(formActionUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: stringPayload, // body data type must match "Content-Type" header
    });

    const json = await response.json();

    if (!response.ok) {
      displayFailure('error sending message');
    }

    displaySuccess(json.response);
    //
  } catch (error) {
    displayFailure('messaging server down');
  }

  function displayProgress() {
    submitButton.classList.add('progress');
  }

  function displaySuccess(response) {
    submitButtonText.innerText = response;
    submitButton.classList.add('success');
    submitButton.classList.remove('progress');
    setTimeout(() => {
      submitButtonText.innerText = originalButtonValue;
      submitButton.classList.remove('success');
    }, 5000);
  }
  function displayFailure(response) {
    submitButtonText.innerText = response;
    submitButton.classList.add('failure');
    submitButton.classList.remove('progress');
    setTimeout(() => {
      submitButtonText.innerText = originalButtonValue;
      submitButton.classList.remove('failure');
    }, 5000);
  }
} /* handleSubmit ends */
