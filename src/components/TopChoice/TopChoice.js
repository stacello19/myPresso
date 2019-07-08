import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './TopChoice.scss';
import tumbler from '../shared/image/public/signboard.png';

const cx = classNames.bind(style)

class TopChoice extends Component {
  render() {
    return (
      <div className={cx('topChoice-Wrapper')}>
          <table className={cx('table')}>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <h1>This Week Top " 5 "...?</h1>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>Hawaii Kona</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td>Flat White Over Ice</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td>Chiaro</td>
              </tr>
              <tr>
                  <th scope="row">4</th>
                  <td>Livanto</td>
              </tr>
              <tr>
                  <th scope="row">5</th>
                  <td>Capriccio</td>
              </tr>
            </tbody>

          </table>
      </div>
    )
  }
}

export default TopChoice
