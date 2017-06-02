import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    ${''/* margin-left: 20px; */}
    width: 100%;
`
const Title = styled.b`
    min-width: 20%;
    text-align: left;
    ${''/* margin-right: 20px; */}
`
const S = styled.select`
    ${''/* margin-le */}
`
export default class Select extends Component {
    renderOptions = () => {
        const { options } = this.props
        return options.map((option) => {
            return (
                <option value={ option.value }>
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
