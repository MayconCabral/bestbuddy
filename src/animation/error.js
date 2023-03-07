export const dog = {
    hidden: {
      opacity: 0,
      scale: 0  
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", stiffness: 500
      }      
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1
      }       
    }
  
}

export const msg = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    },
    exit: {
        opacity: 0
    }
}

export const title = {
    hidden: {
        opacity: 0,
        y: -200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: "spring", stiffness: 500
        }
    },
    exit: {
        opacity: 0
    }                          
}