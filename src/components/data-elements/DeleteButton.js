import React from 'react'
import { useDataMutation } from '@dhis2/app-runtime'
import { AlertBar, Button } from '@dhis2/ui'
import { PropTypes } from '@dhis2/prop-types'

const mutation = {
    resource: 'dataElements',
    type: 'delete',
    id: ({ id }) => id,
}

export const DeleteButton = ({ id, refetch }) => {
    const [mutate, { loading, error }] = useDataMutation(mutation)
    const onClick = () => {
        mutate({ id }).then(refetch)
    }

    return (
        <>
            <Button destructive disabled={loading} onClick={onClick}>
                Delete
            </Button>
            {loading && <span>loading...</span>}
            {error && (
                <span className="alert-bars">
                    <AlertBar duration={8000} icon>
                        ERROR: {error.message}
                    </AlertBar>
                </span>
            )}
        </>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    refetch: PropTypes.func,
}
