export const fade_text = {
    hidden: {
        opacity: 0,        
      },
      visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2
        }      
      },
      exit: {
          opacity: 0
      }  
}

export const fade_dog = {
    hidden: {
        opacity: 0,        
      },
      visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 3.5
        }      
      },
      exit: {
          opacity: 0
      }  
}

export const fade_author = {
    hidden: {
        opacity: 0,        
      },
      visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 4.5
        }      
      },
      exit: {
          opacity: 0
      }  
}

export const fade_input = {
    hidden: {
        opacity: 0,        
      },
      visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 6
        }      
      },
      exit: {
          opacity: 0
      }  
}

export const fade_in = {
    hidden: {
        opacity: 1,
        x: '0vw'
    },
    visible: {
        opacity: 1,
        x: '-110vw',
        transition: {
            duration: 2
        }
    },    
}

export const fade_out = {
    hidden: {
        opacity: 0,        
        x: '-110vw'
    },
    visible: {
        opacity: 1,
        x: '-110vw'             
    },   
    exit: {
        opacity: 1,
        x: '0',
        transition: {
            duration: 2.5
        }
    }
}