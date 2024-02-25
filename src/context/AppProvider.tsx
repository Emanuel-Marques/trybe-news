import AppContext from "./AppContext";

const AppProvider =({ children } : any) => { 
    return (
        <AppContext.Provider value={{ user: 'DEV'}}>
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;