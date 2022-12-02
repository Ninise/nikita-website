import React, { useState } from 'react';
import './qualification.css';
export const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='qualification__container container'>
          <div className='qualification__tabs'>
            <div
              className={
                toggleState === 1
                  ? 'qualification__button qualification__active button-flex'
                  : 'qualification__button button-flex'
              }
              onClick={() => setToggleState(1)}>
              <i className='uil uil-graduation-cap qualification__icon'></i>{' '}
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? 'qualification__button qualification__active button-flex'
                  : 'qualification__button button-flex'
              }
              onClick={() => setToggleState(2)}>
              <i className='uil uil-briefcase-alt qualification__icon'></i>{' '}
              Experience
            </div>
          </div>

          <div className='qualification__sections'>
            {/* Education */}
            <div
              className={
                toggleState === 1
                  ? 'qualification__content qualification__content-active'
                  : 'qualification__content'
              }>
              <div className='qualification__data qualification__data-left'>
                <div>
                  <h3 className='qualification__title'>Software Engineering</h3>
                  <span className='qualification__subtitle'>
                    Ukraine - Institute
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2013 - 2017</i>
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                  <h3 className='qualification__title'>Android developemnt</h3>
                  <span className='qualification__subtitle'>
                    Computools Internship/Books
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2017 - 2017</i>
                  </div>
                </div>
              </div>

              <div className='qualification__data qualification__data-left'>
                <div>
                  <h3 className='qualification__title'>
                    iOS & Backend development
                  </h3>
                  <span className='qualification__subtitle'>Udemy courses</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2018 - 2019</i>
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                  <h3 className='qualification__title'>Frontend development</h3>
                  <span className='qualification__subtitle'>Udemy courses</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2021 - Present</i>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div
              className={
                toggleState === 2
                  ? 'qualification__content qualification__content-active'
                  : 'qualification__content'
              }>
              <div className='qualification__data qualification__data-left'>
                <div>
                  <h3 className='qualification__title'>Android Developer</h3>
                  <span className='qualification__subtitle'>
                    Computools - Ukraine
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2016 - 2017</i>
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                  <h3 className='qualification__title'>Mobile Developer</h3>
                  <span className='qualification__subtitle'>
                    Upwork - freelance
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2017 - present</i>
                  </div>
                </div>
              </div>

              <div className='qualification__data qualification__data-left'>
                <div>
                  <h3 className='qualification__title'>
                    CEO & Mobile Developer
                  </h3>
                  <span className='qualification__subtitle'>
                    Starlet Software
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2018 - 2019</i>
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                  <h3 className='qualification__title'>
                    Mobile & Backend Developer
                  </h3>
                  <span className='qualification__subtitle'>
                    Uplift Prayer - USA
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'>2017 - 2022</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
