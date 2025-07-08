import styled from "styled-components";


const Titulo = styled.h2 `
   color: #7B78E6;
   text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};

`

export default Titulo