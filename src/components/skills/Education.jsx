import React from 'react';
import './education.css'
function Education() {
  return (
    <table className="table">
        <tread>
            <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>
            </tr>
        </tread>
        <tbody>
            <tr>
                <td>BBA</td>
                <td>Accounting</td>
                <td>Madan Mohan Collage</td>
                <td>2020- Present</td>
            </tr>
            <tr>
                <td>HSC</td>
                <td>Business Studies</td>
                <td>Madan Mohan Collage</td>
                <td>2010-2014</td>
            </tr>
            <tr>
                <td>BBA</td>
                <td>Accounting</td>
                <td>Madan Mohan Collage</td>
                <td>2008- 2010</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Education