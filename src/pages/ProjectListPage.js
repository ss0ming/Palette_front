import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectInformation from "./ProjectInformationPage";
import ProjectItem from "../components/ProjectItem";
import { getProjects } from "../api";

function ProjectListPage() {
  const projects = getProjects();

  return (
    <div>
      {projects?.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
