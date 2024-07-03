import React, { useState } from 'react';
import '../styles/FilterSection.css';

interface FilterProps {
  onFilterChange: (filters: {
    id: string;
    category: string;
    minBudget: string;
    maxBudget: string;
    projectType: string[];
    minHourlyRate: string;
    maxHourlyRate: string;
    skills: string[];
  }) => void;
}

const FilterSection: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [filters, setFilters] = useState({
    id: '',
    category: '',
    minBudget: '',
    maxBudget: '',
    projectType: [] as string[],
    minHourlyRate: '',
    maxHourlyRate: '',
    skills: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFilters(prevFilters => {
        const updatedTypes = checked
          ? [...prevFilters[name as keyof typeof filters], value]
          : (prevFilters[name as keyof typeof filters] as string[]).filter((item: string) => item !== value);
        const newFilters = { ...prevFilters, [name]: updatedTypes };
        onFilterChange(newFilters);
        return newFilters;
      });
    } else {
      setFilters(prevFilters => {
        const newFilters = { ...prevFilters, [name]: value };
        onFilterChange(newFilters);
        return newFilters;
      });
    }
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFilters(prevFilters => {
      const updatedSkills = checked
        ? [...prevFilters.skills, value]
        : prevFilters.skills.filter(skill => skill !== value);
      const newFilters = { ...prevFilters, skills: updatedSkills };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    const clearedFilters = {
      id: '',
      category: '',
      minBudget: '',
      maxBudget: '',
      projectType: [] as string[],
      minHourlyRate: '',
      maxHourlyRate: '',
      skills: [] as string[],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };
  return (
    <>
      <div className="filter-toggle" onClick={toggleCollapse}>
        {
          isCollapsed ? 'Hide Filters' : 'Show Filters'
        }
      </div>
      <div className={`filter-section ${isCollapsed ? 'collapsed' : ''}`}>
        <h2>Filters</h2>
        <div>
          <label>Project type</label>
          <div className="checkbox-group">
            <input type="checkbox" id="hourlyRate" name="projectType" value="Hourly Rate" onChange={handleChange} />
            <p>Hourly Rate</p>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="fixedPrice" name="projectType" value="Fixed Price" onChange={handleChange} />
            <p>Fixed Price</p>
          </div>
        </div>
        <div className="price-group">
          <label>Fixed price</label>
          <div>
            <p>min</p>
            <input type="number" id="minBudget" name="minBudget" value={filters.minBudget} onChange={handleChange} />
          </div>
          <div>
            <p>max</p>
            <input type="number" id="maxBudget" name="maxBudget" value={filters.maxBudget} onChange={handleChange} />
          </div>
        </div>
        <div className="rate-group">
          <label>Hourly rate</label>
          <div>
            <p>min</p>
            <input type="number" id="minHourlyRate" name="minHourlyRate" value={filters.minHourlyRate} onChange={handleChange} />
          </div>
          <div>
            <p>max</p>
            <input type="number" id="maxHourlyRate" name="maxHourlyRate" value={filters.maxHourlyRate} onChange={handleChange} />
          </div>
        </div>
        <div className="skills">
          <label>Skills</label>
          <div className='checkbox-group'>
            <input type="checkbox" id="websiteDesign" name="skills" value="Website Design" onChange={handleSkillsChange} />
            <p>Website Design</p>
          </div>
          <div className='checkbox-group'>
            <input type="checkbox" id="logoDesign" name="skills" value="Logo Design" onChange={handleSkillsChange} />
            <p>Logo Design</p>
          </div>
          <div className='checkbox-group'>
            <input type="checkbox" id="mobileAppDevelopment" name="skills" value="Mobile App Development" onChange={handleSkillsChange} />
            <p >Mobile App Development</p>
          </div>
          <div className='checkbox-group'>
            <input type="checkbox" id="dataEntry" name="skills" value="Data Entry" onChange={handleSkillsChange} />
            <p>Data Entry</p>
          </div>
          <div className='checkbox-group'>
            <input type="checkbox" id="articleWriting" name="skills" value="Article Writing" onChange={handleSkillsChange} />
            <p>Article Writing</p>
          </div>
        </div>
      </div></>
  );
};

export default FilterSection;
