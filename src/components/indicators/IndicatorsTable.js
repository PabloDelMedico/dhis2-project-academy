import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'
import { PropTypes } from '@dhis2/prop-types'

export const IndicatorsTable = ({ indicators }) => (
    <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead>Name</TableCellHead>
                <TableCellHead>FormName</TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            {indicators.map(indicator => (
                <TableRow key={indicator.id}>
                    <TableCell>{indicator.name}</TableCell>
                    <TableCell>{indicator.formName}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)

IndicatorsTable.propTypes = {
    indicators: PropTypes.array.isRequired,
}
