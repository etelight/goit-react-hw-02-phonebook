import { styled } from 'styled-components';

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const ListItem = styled.li`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListBtn = styled.button`
  margin-left: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
