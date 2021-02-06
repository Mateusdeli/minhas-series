import React, { useState, useEffect} from 'react'
import services from '../../services/'
import { Container, Button, Table } from 'reactstrap'

import NovoGenero from './NovoGenero'
import AtualizarGenero from './AtualizarGenero'

const STATE = {
    DEFAULT: 'DEFAULT',
    NOVO: 'NOVO',
    ATUALIZAR: 'ATUALIZAR' 
}

export default function Generos() {
    const [state, setState] = useState(STATE.DEFAULT)
    const [genero, setGenero] = useState({});
    const [generos, setGeneros] = useState([])
    
    useEffect(() => {
        services.generes.getAllGeneres()
            .then(response => {
                setGeneros(response)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const handleToogleNovoGeneroTemaplate = () => {
        setState(STATE.NOVO)
    }

    const addNovoGenero = (genero) => {
        setGeneros([...generos, genero])
        setState(STATE.DEFAULT)
    }

    const handleRemoverGenero = ({ id }) => {
        const filterGenero = generos.filter(genero => genero.id !== id)
        setGeneros(filterGenero)
    }

    const handleAtualizarGenero = (genero) => {
        setGeneros(generos.map(gen => {
            if (gen.id === genero.id) {
                return genero;
            }
            return gen;
        }))
    }

    const showRecord = (record) => {
        return (
          <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>
                  <Button color="danger" onClick={() => {
                      handleRemoverGenero(record)
                  }}>Remover</Button>
              </td>
              <td>
                  <Button color="warning" onClick={() => {
                      setState(STATE.ATUALIZAR)
                      setGenero(record)
                  }}>Atualizar</Button>
              </td>
          </tr>
        )
    }

    return (
        <Container>
            {state === STATE.DEFAULT && <h1>Genêros</h1>}
            {state === STATE.ATUALIZAR  && 
            (
                <>
                    <h1>Atualizar Genêro</h1>
                    <AtualizarGenero genero={genero} handleAtualizarGenero={handleAtualizarGenero} />
                </>
            )}
            {state === STATE.NOVO && 
            (
                <>
                    <h1>Novo Genêro</h1>
                    <NovoGenero addNovoGenero={addNovoGenero} /> 
                </>
            )}
            <Button onClick={handleToogleNovoGeneroTemaplate} color="primary" className="my-3">Novo Genero</Button>
            <Table dark={true}>
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                  </tr>
              </thead>
              <tbody>
                  {generos.map(genero => showRecord(genero))}
              </tbody>
            </Table>
        </Container>
    )
}
