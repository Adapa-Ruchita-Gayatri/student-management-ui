import React from "react";
import "./InfiniteScrollComponent.css";


export interface InfiniteScrollComponentProps {
    currentItemsLength: number;
    isBottomEndOfResultsReached: boolean;
    wrapperClassName: string;
    getMoreItems: () => Promise<void>
    getComponentToRender: () => JSX.Element
}


export const InfiniteScrollComponent = React.memo((props: InfiniteScrollComponentProps) => {

    const [areBottomResultsBeingLoaded, setAreBottomResultsBeingLoaded] = React.useState(false);
    const listRef = React.useRef<HTMLDivElement>(null);
    const handleScroll = async () => {
        const element = listRef.current;
        if (element) {
            if (
                element.scrollHeight - element.scrollTop === element.clientHeight &&
                !props.isBottomEndOfResultsReached && !areBottomResultsBeingLoaded
            ) {
                setAreBottomResultsBeingLoaded(true);
                await props.getMoreItems();
                setAreBottomResultsBeingLoaded(false);
            }

        }

    };



    return (
        <div onScroll={handleScroll} ref={listRef} className={props.wrapperClassName + ' ' } >
            {props.getComponentToRender()}
            {areBottomResultsBeingLoaded && (<p>Loading...</p>)}
        </div>
    )

});

