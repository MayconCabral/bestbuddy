export const wave = {
  hidden: {
    opacity: 1,
    x: '0'  
  },
  visible: {
    opacity: 1,          
    x: '-100vw',
    transition: {
      duration: 1
    }
  },
  exit: {
      opacity: 0
  }  
}

export const cards = {
  hidden: {
    opacity: 0,
    rotate: -360,
    x: '-50vw'
  },
  visible: {
    opacity: 1,          
    rotate: 0,
    x: 0,
    transition: {
        duration: 1,
        delay: 1.2        
    }
  },
  exit: {
      opacity: 0
  }  
}

export const fallWave = { 
  exit: {
    y: '150vh',
    transition: {
      duration: 2
    }
  }  
}