import styled from 'styled-components/macro';

const StyledDetails = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px 60px;
    overflow: hidden;
  }

  .box {
    position: relative;
    width: 240px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 100%;
    filter: blur(1px);
    z-index: 1;
  }

  .box::after {
    content: '';
    position: absolute;
    top: 1px;
    right: -1px;
    width: 20px;
    height: 100%;
    filter: blur(1px);
    z-index: 1;
  }

  .box .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eee;
  }

  .box .shadow::before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(100% + 5px);
    width: 100%;
    height: 200%;
    transform: skewX(45deg);
  }

  .box .shadow::after {
    content: '';
    position: absolute;
    bottom: -200%;
    left: calc(100% + 15px);
    width: 100%;
    height: 200%;
    background: linear-gradient(rgba(0,0,0,0.075), transparent);
    transform: skewX(45deg);
  }

  .box .content {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--dark-grey);
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1),
    15px 15px 15px rgba(0,0,0,0.1),
    20px 20px 20px rgba(0,0,0,0.1),
    50px 50px 50px rgba(0,0,0,0.1),
    inset 3px 3px 2px #555;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .label {
    font-size: 1.2rem;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align: center;
  }

  .box .content .percent {
    position: relative;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box .content .percent::before {
    content: attr(data-text);
    position: absolute;
    inset: 20px;
    background: #555;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.75rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  .box .content .percent svg {
    position: relative;
    width: 150px;
    height: 150px;
    transform: rotate(270deg);
  }

  .box .content .percent svg circle {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 3;
    stroke: rgba(255,255,255,0.05);
    transform: translate(5px, 5px);
  }

  .box .content .percent svg circle:nth-child(2) {
    stroke: #fff;
    stroke-dasharray: 440;
    stroke-dashoffset: calc(440 - (440 * var(--num)) / 100);
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2.5s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .box .content .percent .dot {
    position: absolute;
    inset: 5px;
    z-index: 10;
    animation: animateDot 2s linear forwards;
  }

  @keyframes animateDot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(calc(3.6deg * var(--num)));
    }
  }

  .box .content .percent .dot::before {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background: #555;
    border-radius: 50%;
  }

  .box .content .number {
    position: relative;
    inset: 0;
    opacity: 0.5;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2.5s;
  }

  .box .content .percent .number {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    animation: fadeIn 1s linear forwards;
  }

  .box .content .number h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  .box .content .number h2 span {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

export default StyledDetails;