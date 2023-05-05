import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - JS FoodHub`
    },[title])
};

export default useTitle;