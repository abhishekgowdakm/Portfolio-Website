import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 0, text: 'Students', },
  { number: 0, text: 'Github Followers', },
  { number: 0, text: 'Github Stars', }
];

const Acomplishments = () => (
 <section>
  <SectionTitle>Personal Achiviements </SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
<BoxNum>{card.number}</BoxNum>
<BoxText>{card.text}</BoxText>
      </Box>
    )

    )}
  </Boxes>
 </section>
);

export default Acomplishments;
