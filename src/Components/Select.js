import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    width: 100%;
`
const Title = styled.b`
    width: 170px;
    text-align: left;
    padding-right: 5px;
`
const S = styled.select`
`
export default class Select extends Component {
    renderOptions = () => {
        const { options } = this.props
        return options.map((option) => {
            return (
                <option key={ option.text } selected={ option.default && 'selected' } value={ option.value }>
                    { option.text }
                </option>
            )
        })
    }
    render() {
        const { title } = this.props
        return (
            <Container>
                <Title>{ title }</Title>
                <S>
                    { this.renderOptions() }
                </S>
            </Container>
        )
    }
}
