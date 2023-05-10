import {  useState } from "react"
import styled from "styled-components"
import { api } from '../../services/api.js'
import { Nav } from "../nav/Nav.jsx"
import { Button } from "../CustomButton/CustomButtom.jsx"
import { MdDeleteSweep, MdEditDocument } from "react-icons/md";

const StyledTable = styled.table`
    margin: 2rem 2rem 0;
    width: calc(100% - 4rem);
    background-color: ${props => props.theme.colors.softWhite};
    border: none;
    text-align: left;
    border-collapse: collapse;

    th, td {
        padding: .5rem;
        border: 2px solid ${props => props.theme.colors.darkGray};
      
    }

    tr:nth-child(even) {
        background-color: ${props => props.theme.colors.softGray};
    } 

    td:last-of-type{
        width: 100px;
    }
`

export const Main = () => {
    const [item, setItem] = useState([]);

    const getList = () => {
        api.get('/posts').then(response => {
            setItem(response.data);
        });
    };
    
    return (
        <>
            <Nav 
                getProdustList={getList}
            />
            <StyledTable>
                <thead>
                    <tr>
                        <th>cod</th>
                        <th>nome</th>
                        <th>valor</th>
                        <th>estoque</th>
                        <th>data cadastro</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                        {item.map(item => (
                            <tr key={item.id}>
                                <td>{item.cod}</td>
                                <td>{item.nome}</td>
                                <td>{item.valor}</td>
                                <td>{item.estoque}</td>
                                <td>{item.dataCadastro}</td>
                                <td>
                                    <Button 
                                        wSize={'40px'}
                                        btnName=''
                                        Icon={MdDeleteSweep}
                                        size={25}
                                        
                                    />
                                    <Button 
                                        wSize={'40px'}
                                        btnName=''
                                        Icon={MdEditDocument}
                                        size={25}
                                    />
                                    
                                </td>
                            </tr>
                        ))}
                </tbody>
            </StyledTable>
        </>
    )
}