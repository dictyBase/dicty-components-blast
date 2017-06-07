import React, { Component } from 'react'
import styled from 'styled-components'
import Select from './Select'
import Check from './Check'

const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
    text-align: left;
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
    position: relative;
    display: flex;
    flex-direction: ${ props => props.direction ? props.direction : 'row' };
    padding: 20px 20px;
    min-width: calc(47.5% - 40px);
    border: 1px solid #999;
    background-color: #f2f2f2;

    @media (max-width: 768px) {
        flex-direction: column !important;
    }
`
const Or = styled.div`
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
    left: 20px;
    z-index: 1000;
    padding: 5px;
    white-space: nowrap;
    background-color: #dfe8f6;
    border: 1px solid #a3bae9;
    color: #336699;
`
const Sequence = styled.textarea`
    min-height: 200px;
    max-width: 100%;
`
const SearchContainer = styled.div`
    display: inline-flex;
    height: 30px;
    align-items: center;
    margin-top: 5px;
`
const SearchBox = styled.input`
    height: 20px;
`
const SearchButton = styled.button`
    height: 24px;
`
const Note = styled.b`
    color: grey;
`
export default class Blast extends Component {
    render() {
        const {
            handleEValueChange,
            handleProgramChange,
            handleOrganismChange,
            handleDatabaseChange,
            handleAlignmentChange,
            handleWordSizeChange,
            handleMatrixChange,
            handleGappedAlignmentChange,
            handleFilterChange,
            programOptions,
            organismOptions,
            databaseOptions,
            eValueOptions,
            alignmentOptions,
            wordSizeOptions,
            matrixOptions
        } = this.props
        return (
            <Container>
                <Query>
                    <Option direction="column">
                        <Title>Query Sequence</Title>
                        <b>Enter query sequence in FASTA format</b>
                        <Sequence placeholder="Type or past a query sequence here..."></Sequence>
                    </Option>
                    <Or>
                        <div>OR</div>
                    </Or>
                    <Option direction="column">
                        <Title>Gene or Gene Model ID</Title>
                        <b>Enter a gene or gene model ID</b>
                        <div>(e.g.: DDB_G0275689, DDB0214814)</div>
                        <SearchContainer>
                            <SearchBox type="text" />
                            <SearchButton>Search</SearchButton>
                        </SearchContainer>
                    </Option>
                </Query>
                <Options>
                    <Option>
                        <Title>BLAST Program</Title>
                        <Select title="Select Program" options={ programOptions } onChange={ handleProgramChange }/>
                    </Option>
                    <Option direction="column">
                        <Title>BLAST Database</Title>
                        <Select title="Select Organism" options={ organismOptions } onChange={ handleOrganismChange }/>
                        <Select title="Select Database" options={ databaseOptions } onChange={ handleDatabaseChange }/>
                    </Option>
                    <Option direction="column">
                        <Title>Options</Title>
                        <Select title="E-value" options={ eValueOptions } onChange={ handleEValueChange }/>
                        <Select title="Number of alignments to show" options={ alignmentOptions } onChange={ handleAlignmentChange }/>
                        <Select title="Word size" options={ wordSizeOptions } onChange={ handleWordSizeChange }/>
                        <Select title="Matrix" options={ matrixOptions } onChange={ handleMatrixChange }/>
                        <Check title="Gapped Alignment" onChange={ handleGappedAlignmentChange }/>
                        <Check title="Filter" onChange={ handleFilterChange }/>
                        <Note>DUST filter for BLASTN, SEG filter for all others.</Note>
                        <Note>
                            Because of resource limits, when BLASTing against the Chromosomal database
                            with filtering off, the filtering is actually set to 'm D' which turns off
                            filtering for extending hits, but leaves filtering on when building the initial words.
                        </Note>
                    </Option>
                </Options>
            </Container>
        )
    }
}
