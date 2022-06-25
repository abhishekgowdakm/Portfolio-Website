import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="Projects">
  <SectionDivider/>
  <SectionTitle main >Projects</SectionTitle>
  <GridContainer>
    {projects.map((Project)=>
    <BlogCard key={Project.Id}>
      <Img src={Project.image}/>
      <TitleContent>
         <HeaderThree title>{Project.title}

         </HeaderThree>
         <Hr/>
      </TitleContent>
      <CardInfo>{Project.description}</CardInfo>
      <div>
      <TitleContent>
        Stack
      </TitleContent>
      <TagList>
        {Project.tags.map((tag,i)=>
        <Tag key={i}>{tag}</Tag>
        )}
      </TagList>
    </div>
    <UtilityList>
      <ExternalLinks href={Project.visit}>Code</ExternalLinks>
      <ExternalLinks href={Project.source}>Source</ExternalLinks>
    </UtilityList>
    </BlogCard>
    
    )}
  </GridContainer>
  </Section>
);

export default Projects;