import {useParams} from "react-router";

const wrapperTest = Component => props => {

    const params = useParams();
    // debugger

    return (
        <Component
            {...props}
            urlParams={params}
        />
    );
};

export default wrapperTest