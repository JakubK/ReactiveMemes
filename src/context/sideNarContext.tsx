import React, { useState } from "react";

export type SideNavContextType = {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
};

type SideNavProviderProps = {
    children?: JSX.Element[];
}

export const SideNavContext = React.createContext<SideNavContextType | null>(null);

const SideNavProvider = (props: SideNavProviderProps) => {
    const [isActive, setIsActive] = useState(false);
    return <SideNavContext.Provider value={{isActive, setIsActive}}>
        {props.children}
    </SideNavContext.Provider>
}

export default SideNavProvider;
