export const dog = {
  hidden: {
    opacity: 0,    
  },
  visible: {
    opacity: 1,          
    transition: {
       delay: 1.5, 
       duration: 1
    }
  },
  exit: {
    opacity: 0,         
  }

  }

export const dog_background = {
  hidden: {
    opacity: 0,    
  },
  visible: {
    opacity: 1,          
    transition: {        
       duration: 1
    }
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1
    } 
  }
}

export const scale_bg = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 0,  
  },
  exit: {
    opacity: 1,
    scale: 300,
    transition: {
      duration: 2,
      delay: 1
    }
  }
}

export const text_container = {
  hidden: {
    opacity: 0, 
    x: '-10%'     
  },
  visible: {
    opacity: 1,
    x: 0,       
    transition: {
      duration: 1
    }
  },
  exit: {    
    opacity: 0, 
    x: '-20%',
    delay: -2,
    transition: {
      duration: .5
    }
  }};

  export const btn = {
    hidden: {
        opacity: 0,
        y: 20         
      },
      visible: {
        opacity: 1,
        y: 0,       
        transition: {
          duration: 1,
          delay: 2,
        }
      },
      exit: {
          opacity: 0
      }  
    }
 