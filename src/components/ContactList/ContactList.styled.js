import styled from "styled-components";
export const ContactUl = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 30px;
margin-bottom: 40px;
align-items: center;
`
export const ContactLi =  styled.li`
display: flex;
width: 300px;
flex-direction: column;
gap: 5px;
font-weight: 400;
font-size: 25px;
line-height: 30px;
justify-content: center;
border: 2px solid grey;
border-radius: 4px;
padding: 15px 10px;

`
export const ContactButton = styled.button`
max-height: 35px;
width: 80px;
background-color: inherit;
border: 2px solid grey;
font-weight: 400;
font-size: 15px;
line-height: 25px;
border-radius: 4px;
:focus,
:hover {
  background-color: rgb(31, 143, 135);
  color: white;
  border:  2px solid white;
}
`