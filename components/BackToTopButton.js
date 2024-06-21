import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
`;

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 26px;
  right: 32px;
  align-items: center;
  height: 42px;
  width: 42px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  background: ${({ isNearBottom }) => (isNearBottom ? "black" : "#ff6024")};
  opacity: ${({ isNearBottom }) => (isNearBottom ? 0.7 : 1)};
  border-radius: 50%;
  transition: opacity 0.4s, background ease-in-out 0.2s, transform 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? "flex" : "none"};

  &:hover {
    opacity: 1;
    background: ${({ isNearBottom }) => (isNearBottom ? "black" : "#ff733f")};
    transform: scale(1.04);

    svg {
      animation: ${moveUp} 0.2s forwards;
    }
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      const offset = window.pageYOffset;
      const height = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (!showButton && offset > 400) {
        setShowButton(true);
      } else if (showButton && offset <= 400) {
        setShowButton(false);
      }

      if (documentHeight - offset - height < 270) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} isNearBottom={isNearBottom} onClick={scrollToTop}>
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;
