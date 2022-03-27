import React from 'react';

import Section from '../section';
import profileImg from '../../images/bisexual.png';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'underline',
  listItem: 'mb-2 list-disc ml-10'
};

const SectionAbout = () => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>Optimist who likes software, chess, Michigan athletics 	
&#12349; (Go blue!), distance running, and skiing!</p><br/>
        <ul>
          <li className={classes.listItem}>Some people I love include <a target="_blank" rel="noreferrer" className={classes.link} href={'https://blog.samaltman.com/'}>Sam Altman</a> and <a target="_blank" rel="noreferrer" className={classes.link} href={'https://sive.rs/'}>Derek Sivers</a>
          </li>
          <li className={classes.listItem}>I'm a huge fan of the shows <a target="_blank" rel="noreferrer" className={classes.link} href={'https://www.imdb.com/title/tt0417299/'}>Avatar: TLA</a> and <a target="_blank" rel="noreferrer" className={classes.link} href={'https://www.imdb.com/title/tt2560140/'}>Attack on Titan</a>
          </li>
          <li className={classes.listItem}>My favorite book ever is <a target="_blank" rel="noreferrer" className={classes.link} href={'https://www.goodreads.com/book/show/43314707-unfollow'}>Unfollow by Megan Phelps-Roper</a> about her journey leaving the Westboro Baptist Church
          </li>
        </ul>

      </div>
    </Section>
  );
};

export default SectionAbout;
