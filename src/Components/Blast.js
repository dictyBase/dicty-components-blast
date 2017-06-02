import React, { Component } from 'react'
import styled from 'styled-components'
import Select from './Select'

const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
`
const Query = styled.div`
    display: flex;
    flex-direction: row;
`
const Options = styled.div`
    display: flex;
    flex-direction: column;
`
const Option = styled.div`
    border: 1px solid black;
    flex-basis: 1;
    flex-grow: 1;
    margin-top: 20px;
    ${''/* height: 200px; */}
    position: relative;
    display: flex;
    flex-direction: ${ props => props.direction ? props.direction : 'row' };
    padding: 20px 20px;
`
const Or = styled.p`
    padding: 10px;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
    position: absolute;
    top: -15px;
    height: 20px;
    border: 1px solid black;
    left: 20px;
    background: white;
    z-index: 1000;
    padding: 5px;
`
const programOptions = [
    {
        default: true,
        text: '-- Please select a program --',
        value: null
    },
    {
        text: 'blastn - DNA Query to DNA database',
        value: null
    }
]
const organismOptions = [
    {
        default: true,
        text: '-- Please select an organism --',
        value: null
    },
    {
        text: 'All',
        value: null
    },
    {
        text: 'dictyostelium discoideum',
        value: null
    },
    {
        text: 'dictyostelium fasciculatum',
        value: null
    },
    {
        text: 'dictoystelium purpureum',
        value: null
    }
]
const databaseOptions = [
    {
        default: true,
        text: '-- Please select a database --',
        value: null
    }
]
export default class Blast extends Component {
    render() {
        return (
            <Container>
                <Query>
                    <Option direction="column">
                        <Title>Query Sequence</Title>
                        <textarea placeholder="Type or past a query sequence here..."></textarea>
                    </Option>
                    <Or>
                        <p>OR</p>
                    </Or>
                    <Option direction="row">
                        <Title>Gene or Gene Model ID</Title>
                    </Option>
                </Query>
                <Options>
                    <Option>
                        <Title>BLAST Program</Title>
                        <Select title="Select Program" options={ programOptions } />
                    </Option>
                    <Option direction="column">
                        <Title>BLAST Database</Title>
                        <Select title="Select Organism" options={ organismOptions } />
                        <Select title="Select Database" options={ databaseOptions } />
                    </Option>
                    <Option>
                        <Title>Options</Title>
                        <Select title="Select Program" options={ programOptions } />
                    </Option>
                </Options>
            </Container>
        )
    }
}
