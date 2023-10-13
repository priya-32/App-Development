import '../Asset/Styles/Campus.css';
import React from 'react';

const Campus = () => {
  return (
    <div>
     

      <main className="main columns">
        <section className="column main-column">
          <a className="article first-article" href="#">
            <figure className="article-image is-4by3">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/image-01-lo.jpg" alt="" />
            </figure>
            <div className="article-body">
              <h2 className="article-title">
                Hello World
              </h2>
              <p className="article-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.
              </p>
             
            </div>
          </a>

          <div className="columns">
            <div className="column nested-column">
              <a className="article" href="#">
                <figure className="article-image is-16by9">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/image-02-lo.jpg" alt="" />
                </figure>
                <div className="article-body">
                  <h2 className="article-title">
                    Hello World
                  </h2>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                 
                </div>
              </a>
            </div>

            <div className="column">
              <a className="article" href="#">
                <figure className="article-image is-16by9">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/image-03-lo.jpg" alt="" />
                </figure>
                <div className="article-body">
                  <h2 className="article-title">
                    Hello World
                  </h2>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                 
                </div>
              </a>
              <a className="article" href="#">
                <div className="article-body">
                  <h2 className="article-title">
                 
                  </h2>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet.
                  </p>
                 
                </div>
              </a>
              <a className="article" href="#">
                <div className="article-body">
                  <h2 className="article-title">
                    Hello World
                  </h2>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet feugiat facilisis.
                  </p>
                 
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="column">
          <a className="article" href="#">
            <figure className="article-image is-3by2">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/image-04-lo.jpg" alt="" />
            </figure>
            <div className="article-body">
              <h2 className="article-title">
                Hello World
              </h2>
              <p className="article-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            
            </div>
          </a>
          <a className="article" href="#">
            <div className="article-body">
              <h2 className="article-title">
                Hello World
              </h2>
              <p className="article-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
            </div>
          </a>
          <a className="article" href="#">
            <div className="article-body">
              <h2 className="article-title">
                Hello World
              </h2>
              <p className="article-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
             
            </div>
          </a>
          <a className="article" href="#">
            <div className="article-body">
              <h2 className="article-title">
                Hello World
              </h2>
              <p className="article-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
            </div>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Campus;
