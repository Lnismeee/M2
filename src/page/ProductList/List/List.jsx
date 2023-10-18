import React from "react";
import Card from "../../../components/Card/Card";
import "./index.css";
const List = ({ data, setData }) => {
    return (
        <div className="list">
            {data.map((item, index) => {
                return (
                    <div className="card1">
                        <Card data={item} key={item.id} />
                    </div>
                );
            })}
        </div>
    );
};

export default List;
