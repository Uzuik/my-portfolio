import { GetServerSideProps, NextPage } from "next";

import { ProjectMockDriver } from "infrastructure";
import { ProjectRepository } from "domain/repository";
import { GetProjectsUseCase, ProjectObject } from "application/usecase";
import { Home as HomePage } from "presentation/components";

const Home: NextPage<{ projects: ProjectObject[] }> = ({ projects }) => {
  return <HomePage />;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const u = new GetProjectsUseCase(
//     new ProjectRepository(new ProjectMockDriver())
//   );

//   const projects = await u.handle();

//   return {
//     props: {
//       projects: projects,
//     },
//   };
// };

export default Home;
