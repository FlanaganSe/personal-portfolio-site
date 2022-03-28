import React from 'react';

import Section from '../section';
import profileImg from '../../images/bisexual.png';

const classes = {
  link: 'underline',
  listItem: 'mb-2 list-disc ml-10'
};

const SectionAbout = () => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>Optimist who likes software, chess, Michigan athletics 	
&#12349; (Go blue!), distance running, and skiing. I currently work at <a target="_blank" rel="noreferrer" className={classes.link} href={'https://livegistics.com/'}>Livegistics Inc</a> building logistics software for the construction industry with an awesome team! Also...</p><br/>
        <ul>
          <li className={classes.listItem}>Some people I love include <a target="_blank" rel="noreferrer" className={classes.link} href={'https://blog.samaltman.com/'}>Sam Altman</a> and <a target="_blank" rel="noreferrer" className={classes.link} href={'https://sive.rs/'}>Derek Sivers</a>
          </li>
          <li className={classes.listItem}>I'm a huge fan of the shows <a target="_blank" rel="noreferrer" className={classes.link} href={'https://www.imdb.com/title/tt0417299/'}>Avatar: TLA</a> and <a target="_blank" rel="noreferrer" className={classes.link} href={'https://www.imdb.com/title/tt2560140/'}>Attack on Titan</a>
          </li>
          <li className={classes.listItem}>My favorite book ever is <a target="_blank" rel="noreferrer" className={classes.link} href={'https://www.goodreads.com/book/show/43314707-unfollow'}>Unfollow: A Memoire by Megan Phelps-Roper</a> about her life and journey separating from the Westboro Baptist Church
          </li>
        </ul>

      </div>
    </Section>
  );
};

export default SectionAbout;
