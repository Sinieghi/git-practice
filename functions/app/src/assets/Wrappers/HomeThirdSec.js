import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100rem;
  margin-top: 5rem;
  .third-content {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    padding: 0 5rem;
  }
  .third_left-side {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
      margin: 2rem 0 1rem 0;
    }
    p {
      font-size: 1.7rem;
      padding-left: 3px;
    }
    a {
      color: var(--red-org);
    }
  }
  //right side
  .third_right-side {
    margin: 0 auto;
    width: 100%;
    :first-child {
      text-align: center;
      margin-bottom: 5rem;
      font-size: 3rem;
    }
    .card-container {
      height: 40rem;
      .cards {
        position: relative;
        height: 100%;
        .plan-card {
          width: 25rem;
          height: 25rem;
          display: grid;
          place-content: center;
          position: absolute;
          outline-offset: 2rem;
          transition: all 0.3s ease;
          p {
            font-size: 5rem;
            margin-bottom: 2.5rem;
          }
          .plan-desc {
            font-size: 2rem;
            margin-bottom: 0;
          }
        }
        .basic {
          background-color: var(--primary-200);
          left: 38%;
        }
        .basic:hover {
          outline: 1.5rem solid var(--primary-300);
          transform: scale(1.05);
          box-shadow: var(--shadow-4);
          z-index: 10;
        }
        .advanced {
          background-color: var(--red-org);
          left: 10%;
          top: 25%;
        }
        .advanced:hover {
          outline: 1.5rem solid var(--red-org);
          transform: scale(1.05);
          box-shadow: var(--shadow-4);
          z-index: 10;
        }
        .premium {
          background-color: var(--yellow-org);
          top: 40%;
          left: 40%;
        }
        .premium:hover {
          outline: 1.5rem solid var(--yellow-org);
          transform: scale(1.05);
          box-shadow: var(--shadow-4);
          z-index: 10;
        }
      }
    }
  }
`;
