import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { AlertBar, CircularLoader } from '@dhis2/ui'
import { IndicatorsTable } from './IndicatorsTable'
import { PaginationControls } from './PaginationControls'

const indicatorsQuery = {
    results: {
        resource: 'indicators',
        params: ({ page }) => ({
            page: page,
            pageSize: 10,
            fields: ['id', 'name', 'formName'],
        }),
    },
}

export const IndicatorsList = () => {
    const { loading, error, data, refetch } = useDataQuery(indicatorsQuery, {
        variables: { page: 0 },
    })

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
        <div>
            <IndicatorsTable
                indicators={data.results.indicators}
                refetch={refetch}
            />
            <PaginationControls pager={data.results.pager} refetch={refetch} />
        </div>
    )
}
