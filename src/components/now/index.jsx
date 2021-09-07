import React from 'react';

import Section from '../section';

const NowPosts = ({ posts }) => {
  return (
    <>
      <Section title="/Now">
        <h1>Inspired by <a href="https://sive.rs/">Derek Sivers</a>'s <a href="https://nownownow.com/">NowNowNow</a> project. This is an informal page that I hope to continually update with what I'm doing at that point of my life.</h1>
      </Section>
      <Section title="Sept 6, 2021">
        <ul>
          <li>Currently Reading: Pragmatic Programmer by Andrew Hunt</li>
          <li>Currently Working: Recently started a new position as a software Developer at Livegistics LLC! I'm pleasantly surprised by the experience working at a startup and it's nice to quickly get my hands on so many different pieces.</li>
          <li>Currently Living: Also just moved back to Ann Arbor, MI! Love being back in the city, but I'm sooo jealous of all the students still in college -- take me back!!! :)</li>

          <li>Exercise goals: Sadly my knee is still injured and I cannot run! I wa shoping to able to propose a marathon to friends but doesn't seem to be happening this year</li>
          <li>Other: Uhhhhhh I should be joining a book club soon for Clean code! That's exciting. I also hope I can get around to joining the climbing gym in AA sometime soon. It's obviously pretty cliche for SDE's to be into bouldering but seems like both a good opportunity to network, meet people, and stay in shape! Also I always loved rock climbing as a kid.</li>
        </ul>
      </Section>
    </>
  );
};

export default NowPosts;
