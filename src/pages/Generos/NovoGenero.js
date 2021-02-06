import React, { useState } from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function NovoGenero({ addNovoGenero }) {
    const [name, setName] = useState("")

    const handleTrocarNomeGenero = (event) => {
        setName(event.target.value)
    }

    const handleNovoGenero = () => {
      let id = Math.floor(Math.random() * 10000)
      const genero = {
          id,
          name
      }
      addNovoGenero(genero)
      setName("")
    }

    return (
      <Container>
          <Form>
            <FormGroup>
                <Label for="nome">Nome</Label>
                <Input type="email" name="nome" id="nome" onChange={handleTrocarNomeGenero} value={name} placeholder="Digite o nome" />
                <Button onClick={handleNovoGenero} className="primary mt-3">Salvar</Button>
            </FormGroup>
          </Form>
      </Container>
    )
}