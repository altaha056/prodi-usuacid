/* eslint-disable jsx-a11y/label-has-associated-control */
import FacultyModel from '@/models/facultyModel';
import React from 'react';

interface Props {
  faculties: FacultyModel[];
  onSelect(value: string): void;
  selectedFaculty?: string | string[];
  s1: boolean;
  s2: boolean;
  s3: boolean;
  profesi: boolean;
  onClickLevel(name: string, value: boolean): void;
}

const FacultiesFilter: React.FC<Props> = ({
  faculties,
  onSelect,
  selectedFaculty,
  s1,
  s2,
  s3,
  profesi,
  onClickLevel,
}) => (
  <div className="row faculties-filter">
    <div className="col-md-4">
      <select
        className="custom-select"
        id="faculty"
        onChange={(e) => onSelect(e.target.value)}
        value={selectedFaculty}
      >
        <option value="all" className="selected">
          Semua Fakultas
        </option>
        {faculties.map((faculty) => (
          <option key={faculty.faculltyId} value={faculty.faculltyId}>
            {faculty.facultyName}
          </option>
        ))}
      </select>
    </div>
    <div className="col-md d-flex align-items-end">
      <button
        type="button"
        className={`btn btn-outline-primary btn-filter level ${
          s1 ? 'active' : ''
        }`}
        onClick={() => onClickLevel('s1', !s1)}
      >
        S1
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary btn-filter level ${
          s2 ? 'active' : ''
        }`}
        onClick={() => onClickLevel('s2', !s2)}
      >
        S2
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary btn-filter level ${
          s3 ? 'active' : ''
        }`}
        onClick={() => onClickLevel('s3', !s3)}
      >
        S3
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary btn-filter profession flex-grow-1 ${
          profesi ? 'active' : ''
        }`}
        onClick={() => onClickLevel('profesi', !profesi)}
      >
        PROFESI
      </button>
    </div>
  </div>
);

export default FacultiesFilter;
