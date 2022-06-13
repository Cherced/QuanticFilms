import React, {useState, useEffect} from 'react'
import { createPortal } from 'react-dom';

export const ModalPortal = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
        return () => setMounted(false);
    },[]);
    
    return mounted ? createPortal(
        <>
        {children}
        </>, document.getElementById("myportal")) : (null)
}
