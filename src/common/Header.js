/* eslint-disable react-hooks/exhaustive-deps */
import MainPageLink from './MainPageLink';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import axios from "axios";

function Header({isMainPage, prefix}) {
    const [headerInfo, setHeaderInfo] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST_API}/board/header?IsMainPage=${isMainPage}&Prefix=${prefix}`)
            .then(
                result => success(result),
                result => failure(result))

        function success(result) {
            setHeaderInfo(result.data.data);
        }

        function failure(result) {
            console.log(result);
        }
    }, [prefix])

    return (
        <header>
            <MainPageLink board={headerInfo}/>
            <div>
                <div className="title">
                    {headerInfo.title}
                    <div className="description">
                        {headerInfo.description}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

Header.propTypes = {
    isMainPage: PropTypes.bool,
    board: PropTypes.exact({
        prefix: PropTypes.string,
        postfix: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string
    })
}