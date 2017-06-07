import React, { Component } from 'react'
import styled from 'styled-components'

const CheckContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
`
const Title = styled.b`
    width: 170px;
`

export default class Check extends Component {
    constructor() {
        super()
        this.state = {
            checked: true
        }
    }
    handleChange = (e) => {
        const { onChange } = this.props
        const checked = !this.state.checked
        this.setState({
            checked
        })
        onChange(checked)
    }
    render() {
        return (
            <CheckContainer>
                <Title>{ this.props.title }</Title>
                <input checked={ this.state.checked } value={ this.state.checked } onChange={ this.handleChange } type="checkbox"></input>
            </CheckContainer>
        )
    }
}
