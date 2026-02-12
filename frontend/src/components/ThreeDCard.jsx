import styled from "styled-components";

const ThreeDCard = ({ title, text, children, className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="parent">
        <div className="card">
          <div className="glass" />
          <div className="content">
            {title && <span className="title">{title}</span>}
            {text && <span className="text">{text}</span>}
            {children}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 100%;
    max-width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    width: 100%;
    border-radius: 50px;
    background: linear-gradient(
      135deg,
      rgb(0, 255, 214) 0%,
      rgb(8, 226, 96) 100%
    );
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow:
      rgba(5, 71, 17, 0) 40px 50px 25px -40px,
      rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
    position: relative;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 60px 30px 30px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #00894d;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: rgba(0, 137, 78, 0.7647058824);
    font-size: 15px;
    margin-top: 15px;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow:
      rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }
`;

export default ThreeDCard;
