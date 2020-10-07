import React from "react";
import Project from "./project";

export default class ProjectList extends React.Component {

    render() {
        return (
            <div id="projects">
                <h1 id="project-header">My Projects</h1>
                
                <div className="project-row">
                    
                    <Project 
                        title="Glimpse iOS App" 
                        description="another project" 
                        image={require("../img/glimpse.png")}
                        detailed="/glimpse"
                        website="https://www.glimpsewearables.com/"  
                    />
                    <Project 
                        id="big-card"
                        title="Amazon Web Services Summer Internship" 
                        description="Designed and implemented a full-stack solution for overhauling Amazon Oncall's notification system. I developed the back-end using Java and multiple AWS Services (Lambda, Step Functions, DynamoDB, S3). I built the UI using React/Redux to interact with my back-end services." 
                        image={require("../img/oncall.jpeg")} 
                        big={true}
                    />
                    
                </div>
                <div className="project-row">
                    <Project
                        title="Climate Analysis Shiny App"
                        description="An interactive data analysis of the effects of greenhouse gases on global climate change." 
                        image={require("../img/shiny.png")}
                        big={true}
                        website="https://swierj.shinyapps.io/final-kelsonflint/"
                    />
                    <Project
                        title="Tinder Bot"
                        description="Infinite swipes using Python and Selenium"
                        image={require("../img/tinder.png")}
                        git="https://github.com/kelsonflint/tinderbot"
                    />
                </div>
                <div id="games" className="project-row">
                    <Project 
                        title="Sudoku Solver" 
                        description="A python project which uses recursion to solve sudoku puzzles" 
                        image={require("../img/sudokuGui.png")}
                    />
                    <Project
                        title="Brick Breaker" 
                        description="A simple Javascript web app" 
                        image={require("../img/brickbreaker.png")}
                        git="https://github.com/kelsonflint/brickbreaker"
                    />
                    <Project 
                        title="Tetris Remake" 
                        description="My first python project using Pygame" 
                        image={require("../img/tetris.png")}
                        git="https://github.com/kelsonflint/Tetris"
                    />
                    
                </div>
                
            </div>
            
        )
    }
}