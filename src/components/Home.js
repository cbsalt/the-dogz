import React from 'react';

import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => (
  <section className="container mainContainer">
    <Head title="Fotos" description="Dogz - mural de fotos" />
    <Feed />
  </section>
);

export default Home;
