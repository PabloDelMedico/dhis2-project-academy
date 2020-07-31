import React from 'react'
import {
    Button,
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
} from '@dhis2/ui'
import { PropTypes } from '@dhis2/prop-types'

class ModalWin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onCloseRequest, elem } = this.props

        return (
            <Modal position="top" large>
                <ModalTitle>Check your data</ModalTitle>
                <ModalContent>
                    <div>
                        <label>ID:</label>
                        {elem.id}
                    </div>
                    <div>
                        <label>Code:</label>
                        {elem.code}
                    </div>
                    <div>
                        <label>FormName:</label>
                        {elem.formName}
                    </div>
                    <div>
                        <label>DisplayName:</label>
                        {elem.displayName}
                    </div>
                    <ModalActions>
                        <Button
                            destructive
                            type="button"
                            onClick={onCloseRequest}
                        >
                            Close
                        </Button>
                    </ModalActions>
                </ModalContent>
            </Modal>
        )
    }
}

ModalWin.propTypes = {
    elem: PropTypes.object.isRequired,
    onCloseRequest: PropTypes.func.isRequired,
}

export default ModalWin
