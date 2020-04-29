import styled from 'styled-components';

export const ButtonContainer = styled.button
    `text-transform:capatalize;
font-size:1.4 rem;
background: transparent;
border:0.5 rem solid var(--LightBlue);
border-color:${props=> props.cart? "var(--mainYellow)" : "var(--LightBlue)"};
color:${prop=> prop.cart? "var(--mainYellow)" : "var(--LightBlue)"};
border-radius:0.5 rem;
padding:0.2rem 0.5 rem;
curser:pointer;
margin :0.2 rem 0.5rem 0.2 rem 0 rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop=> prop.cart? "var(--mainYellow)" : "var(--LightBlue)"};

    color:var(--mainBlue);
    
}
&:focus{
    outline:none;
}
`;