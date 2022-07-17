import { useEffect } from "react";

const useDocumentTitle=(pageTitle)=>{
    useEffect(()=>{
        document.title=pageTitle;
    },[pageTitle]);
}

export default useDocumentTitle;