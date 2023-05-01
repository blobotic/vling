// from
// https://javascript.plainenglish.io/detect-a-click-outside-of-a-react-component-with-a-reusable-hook-and-useref-a0c282171c3f

import { useEffect, useRef, useState } from 'react';

function useDetectClickOut(initState, resetsetter) {
    const triggerRef = useRef(null); // optional
    const nodeRef = useRef(null); // required 

    const [clickCount, setClickCount] = useState(0);

    const [show, setShow] = useState(initState);
    const handleClickOutside = event => {

        //if click is on trigger element, toggle modal
        if(triggerRef.current && triggerRef.current.contains(event.target)) {
             return setShow(true);
        }

        // console.log(nodeRef.current)
        // console.log(nodeRef)
        //if modal is open and click is outside modal, close it
        if(nodeRef.current && !nodeRef.current.contains(event.target)) {
            // console.log("hmmmm")
            resetsetter("")
            return setShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return {
        triggerRef,
        nodeRef,
        show,
        setShow
    }
}

 export default useDetectClickOut;