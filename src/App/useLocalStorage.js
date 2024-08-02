import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },2000)
    
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1')


// const defaultTodos = [
//   { text :'Entregar la Chompa ', completed: false},
//   { text :'Go amaranta', completed: true},
//   { text :'No olvidar ir a su susti', completed: true},
//   { text :'Suplicar puntito a Pastrana', completed: true},
//   { text :'Preparar Chicharrón', completed: false},
//   { text :'Tomar la UNI', completed: false},
//   { text :'Pagar Fourlokos', completed: true},
//   { text :'Pagar Fourlokos 2.0', completed: false},
//   { text :'Pagar Fourlokos 3.0', completed: true},
//   { text :'Pagar Fourlokos 4.0', completed: false},
// ]

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
