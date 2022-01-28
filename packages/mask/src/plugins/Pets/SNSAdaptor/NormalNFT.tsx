import { makeStyles, useStylesExtends } from '@masknet/theme'
import { Box } from '@mui/material'
import { useStyles as useBoxStyles } from './PreviewBox'
import classNames from 'classnames'
import Drag from './Drag'
import type { ShowMeta } from '../types'
import { CloseIcon } from '../constants'

const useStyles = makeStyles()(() => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
    },
    imgContent: {
        zIndex: 999,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgBox: {
        width: '80%',
        height: '80%',
        textAlign: 'center',
    },
    close: {
        width: 15,
        height: 15,
        cursor: 'pointer',
        backgroundSize: 'contain',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    wordContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    wordBox: {
        position: 'absolute',
        maxWidth: 150,
        bottom: 150,
    },
    dragImg: {
        width: 15,
        height: 15,
    },
}))

interface NormalNFTProps {
    start: boolean
    infoShow: boolean
    showMeta: ShowMeta | undefined
    handleClose: () => void
}

export function NormalNFT(props: NormalNFTProps) {
    const { start, infoShow, showMeta, handleClose } = props
    const classes = useStylesExtends(useStyles(), {})
    const boxClasses = useStylesExtends(useBoxStyles(), {})

    return (
        <Drag baseWidth={150} baseHeight={150}>
            {start && showMeta?.word ? (
                <Box className={classes.wordContent}>
                    <Box
                        className={classNames(
                            {
                                [boxClasses.msgBox]: true,
                                [boxClasses.wordShow]: true,
                            },
                            classes.wordBox,
                        )}>
                        {showMeta?.word}
                    </Box>
                </Box>
            ) : null}
            <Box className={classes.imgContent}>
                <div className={classes.imgBox}>
                    <img
                        src={showMeta?.image}
                        style={{
                            objectFit: 'contain',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                        }}
                    />
                </div>
            </Box>
            {infoShow ? (
                <div className={classes.close} onClick={handleClose} style={{ backgroundImage: `url(${CloseIcon})` }} />
            ) : null}
        </Drag>
    )
}