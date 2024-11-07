import React from "react";
import "./Tools.css"

class Tools extends React.Component{

    render(){
        const{
            children
        } = this.props;

        // const onlyChild = React.Children.only(children);
        // const count = React.Children.count(onlyChild.props.Children);

        const onlyChild =React.Children.only(children);
        const count=React.Children.count(onlyChild.props.children);

        return(
            <div className="list-tools">
                <div className="list-hedder">
                    <select name="status">
                        <option>All</option>
                        <option>Active</option>
                        <option>Non-Active</option>
                    </select>
                </div>
                {children}
                <div className="list-footer">
                    Total count is {count} 
                </div>
            </div>
        );
    }
}
export default Tools;