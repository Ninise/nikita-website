import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {projectsNav, projectsData} from "./Data";
import { WorksItems } from "./WorksItems";

export const Works = () => {

    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            setProjects(projectsData.filter((project) => project.category === item.name));
        }

    }, [item]);

    const renderFilters = () => {
        return (
            projectsNav.map((item, index) => {
                return (
                    <span 
                    className={`work__item ${active === index ? "active-work" : ""}`} 
                    key={index} 
                    onClick={() => {
                        setItem({name: item.name});
                        setActive(index);
                    }}> 
                            {item.name}
                    </span>
                )
            })
        );
    }

    const renderProjects = () => {
        return (
            projects.map((item) => {
                return (
                   <WorksItems item={item} key={item.id} />
                )
            })
        );
    }

    return (
        <div>
            <div className="work__filters">
               {renderFilters()}
            </div>

            <div className="work__container container grid">
                {renderProjects()}
            </div>
        </div>
    );
};