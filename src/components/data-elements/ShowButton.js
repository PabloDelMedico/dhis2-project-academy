import React from 'react'
import { Button } from '@dhis2/ui'
import ModalWin from './ModalWin'
import { PropTypes } from '@dhis2/prop-types'

class ShowButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const { showModal } = this.state

        return (
            <>
                <Button
                    primary
                    type="button"
                    name="Basic button"
                    onClick={() => this.handleToggleModal()}
                >
                    Show more
                </Button>

                {showModal && (
                    <ModalWin
                        onCloseRequest={() => this.handleToggleModal()}
                        elem={this.props.elem}
                    />
                )}
            </>
        )
    }
}

ShowButton.propTypes = {
    elem: PropTypes.object.isRequired,
}

export default ShowButton
