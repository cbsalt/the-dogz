import React from 'react';

import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => (
  <>
    <Head title="Fotos" description="Dogz - mural de fotos" />
    <section className="container mainContainer">
      <Feed />
    </section>
  </>
);

export default Home;
