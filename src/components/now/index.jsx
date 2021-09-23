import React from 'react';

import Section from '../section';

const NowPosts = ({ posts }) => {
  return (
    <>
      <Section title="/Now">
        <h1>Inspired by <a className="underline" href="https://sive.rs/">Derek Sivers</a>'s <a className="underline font-bold hover:opacity-75" href="https://nownownow.com/">NowNowNow</a> project. This is an informal page that I hope to continually update with goals and what I'm doing in life.</h1>
      </Section>
      <Section title="Sept 6, 2021">
        <ul>
          <li>
            <h3 className="text-xl font-bold">Recent Summary</h3>
            <p>Just started a new job last month at Livegistics which has been great so far! I also from Cleveland Ohio to Ann Arbor which has been stressful but great. Unfortunately I've still been battling a nagging knee injury which has mostly kept me from exercising although I did manage to join a soccer team and half-limp around the field!</p>
          </li>
          <li className="mt-5">
            <h3 className="text-xl font-bold">Reading Goals:</h3>
            <ul className="ml-5">
              <li className="ml-5 list-disc">The Missing Readme by Riccomini and Ryaboy</li>
              <li className="ml-5 list-disc">How to Live by Derek Sivers</li>
              <li className="ml-5 list-disc">The Pragmatic Programmer by Andrew Hunt</li>
            </ul>
          </li>
          <li className="mt-5">
            <h2 className="text-xl font-bold">Other Goals</h2>
            <ul className="ml-5">
              <li className="ml-5 list-disc">Get my knee back to health and get back into running. Think I've isolated the cause of knee pain as Patellofemoral and Chondromalacia</li>
              <li className="ml-5 list-disc">Try bouldering? It's a huge cliche for programmers but I always loved indoor rock climbing as a kid and would love to at least try it again</li>
              <li className="ml-5 list-disc">Plan at least one ski trip this winter. C'mon guys! I haven't been able to go in years</li>
              <li className="ml-5 list-disc">Make an effort to learn another programming language in my free time -- likely Ruby on Rails right now.</li>
            </ul>
          </li>
        </ul>
      </Section>
    </>
  );
};

export default NowPosts;
