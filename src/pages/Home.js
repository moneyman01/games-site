import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    },[dispatch]);
    const { popular, newGames, upcoming } = useSelector((state) => state.games);
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}
export default Home;