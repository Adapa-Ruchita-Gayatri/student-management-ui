import React from "react";
import { GridComponent } from "../../components";

export interface SearchStudentsViewProps {

}

export const SearchStudentsView: React.FC<SearchStudentsViewProps> = (props: SearchStudentsViewProps) => {
    return (
        <div>
            <GridComponent/>
        </div>
    )
}