import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const Heroo = () => {
  return (
    <>
      <Herro>
        <Black></Black>

        <Content>
          <Create>
            Be Your Own <br />
            <span>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter: any) => {
                  typewriter

                    .typeString("Branding...")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("Visiblity...")
                    .pauseFor(1500)
                    .deleteAll()

                    .typeString("Sales...")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </Create>

          <Mind>
            Welcome to Cyrus Group<br />
           
          </Mind>

          <Base>
            {/* Saving.. to cater for payments in cases of health emergency.  */}
           Passion for growth
          </Base>

          {/* <p style={{fontWeight: "bold", color:"white", zIndex:"1"}}>LIFECARE... Giving lifeline to your deadline...</p> */}
       
          <Get to={"/signup"}>Get Started Today</Get>
        </Content>
      </Herro>
    </>
  );
};

export default Heroo;

// const Content = styled.div``;

const Mind = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 600;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

const Get = styled(Link)`
  width: 200px;
  height: 55px;
  text-decoration: none;
  /* height: 40px; */
  border: none;
  background-color: #FD7E14;
  color: white;
  border-radius: 3px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 1;
  font-weight: 600;
  /* margin-top: 15px; */
  cursor: pointer;
  transition: all 550ms;
  :hover {
    transform: scale(0.9);
  }


  @media screen and (max-width: 347px) {
    width: 130px;
    height: 35px;
    font-size: 12px;
  }
`;

const Base = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: white;
  z-index: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 27px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 23px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    text-align: center;
  }
  @media screen and (max-width: 347px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

const Create = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: white;
  z-index: 1;
  line-height: 75px;
  margin-top: 25px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
    line-height: 50px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media screen and (max-width: 375px) {
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (max-width: 320px) {
    line-height: 27px;
    font-size: 21px;
  }

  span {
    color: rgb(211, 211, 209);
  }
`;

const Content = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 200px;

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin: 0;
  }
  @media screen and (max-width: 500px) {
    align-items: center;
    margin-left: 0px;
  }
`;

const Black = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0e0e0e76;

  @media screen and (max-width: 768px) {
    background-color: #0e0e0e84;
  }
`;

const Herro = styled.div`
  width: 100%;
  height: 70vh;
  /* background-image: url("../../assets/peopleInTech.jpg"); */
  background-color: gray;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  display: flex;
  
  align-items: center;
  font: San Francisco;

  @media screen and (max-width: 768px) {
    height: 500px;
    justify-content: center;
  }
  @media screen and (max-width: 347px) {
    height: 380px;
  }
`;
