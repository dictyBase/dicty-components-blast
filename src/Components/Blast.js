import React, { Component } from 'react'
import styled from 'styled-components'
import Select from './Select'
import {
    programOptions,
    organismOptions,
    databaseOptions,
    eValueOptions,
    alignmentOptions,
    wordSizeOptions,
    matrixOptions
} from '../constants/Options'

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
    min-width: calc(47.5% - 40px);
`
const Or = styled.p`
    padding: 10px;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 5%;
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
    white-space: nowrap;
`
const Sequence = styled.textarea`
    min-height: 200px;
    max-width: 100%;
`
export default class Blast extends Component {
    render() {
        return (
            <Container>
                <Query>
                    <Option direction="column">
                        <Title>Query Sequence</Title>
                        <Sequence placeholder="Type or past a query sequence here..."></Sequence>
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
                    <Option direction="column">
                        <Title>Options</Title>
                        <Select title="E-value" options={ eValueOptions } />
                        <Select title="Number of alignments to show" options={ alignmentOptions } />
                        <Select title="Word size" options={ wordSizeOptions } />
                        <Select title="Matrix" options={ matrixOptions } />
                    </Option>
                </Options>
            </Container>
        )
    }
}
