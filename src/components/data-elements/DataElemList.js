import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import ShowButton from './ShowButton'
import { DeleteButton } from './DeleteButton'

import {
    CircularLoader,
    AlertBar,
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'

const query = {
    results: {
        resource: 'dataElements',
        params: {
            pageSize: 10,
            fields: ['id', 'code', 'name', 'formName', 'displayName'],
        },
    },
}

export const DataElemList = () => {
    const { loading, error, data, refetch } = useDataQuery(query)

    if (error) {
        return (
            <div className="alert-bars">
                <AlertBar duration={8000} icon>
                    ERROR: {error.message}
                </AlertBar>
            </div>
        )
    }

    if (loading) {
        return <CircularLoader />
    }

    return (
        <>
            <h1>Showing first 10 elements</h1>
            <Table>
                <TableHead>
                    <TableRowHead>
                        <TableCellHead>Code</TableCellHead>
                        <TableCellHead>Name</TableCellHead>
                        <TableCellHead></TableCellHead>
                    </TableRowHead>
                </TableHead>
                <TableBody>
                    {data.results.dataElements.map(elem => (
                        <TableRow key={elem.id}>
                            <TableCell>{elem.code}</TableCell>
                            <TableCell>{elem.name}</TableCell>
                            <TableCell>
                                <ShowButton elem={elem} />
                                <DeleteButton id={elem.id} refetch={refetch} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
