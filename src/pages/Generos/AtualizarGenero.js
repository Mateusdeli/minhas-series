import React, { useState, useEffect } from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function AtualizarGenero({ handleAtualizarGenero, genero }) {
    const [name, setName] = useState("")

    const handleTrocarNomeGenero = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        setName(genero.name)
    }, [genero])

    const handleUpdateGenero = () => {
      const generoObj = {
          id: genero.id,
          name
      }
      handleAtualizarGenero(generoObj)
      setName("")
    }

    return (
      <Container>
          <Form>
            <FormGroup>
                <Label htmlFor="nome">Nome</Label>
                <Input type="email" name="nome" id="nome" onChange={handleTrocarNomeGenero} value={name} placeholder="Digite o nome" />
                <Button onClick={handleUpdateGenero} className="primary mt-3">Atualizar</Button>
            </FormGroup>
          </Form>
      </Container>
    )
}